"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { getNavbarMenuItems } from "@/lib/articles";
import { REPORT_PDF, REPORT_YEAR } from "@/lib/site";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  imageAlt?: string;
  items?: MenuItem[];
}

const buildDefaultMenu = (): MenuItem[] => [
  { title: "Voorwoord", url: "/voorwoord" },
  {
    title: "Artikelen",
    url: "#",
    items: getNavbarMenuItems().map((item) => ({
      ...item,
      icon: (
        <img
          src={item.image}
          alt={item.imageAlt ?? item.title}
          className="size-12 shrink-0 rounded-sm object-cover"
        />
      ),
    })),
  },
];

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    download: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/logo_uwv.svg",
    alt: "UWV cliëntenraad logo",
    title: `Jaarverslag ${REPORT_YEAR}`,
  },
  menu = buildDefaultMenu(),
  auth = {
    download: { title: "Bekijk PDF", url: REPORT_PDF },
  },
}: Navbar1Props) => {
  // Controlled state so we can close the sheet on navigation
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="relative z-50 overflow-visible py-6" style={{ backgroundColor: 'var(--white)', fontFamily: 'Work Sans, sans-serif' }}>
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-6">
              <img
                src={logo.src}
                className="max-h-16 dark:invert"
                alt={logo.alt}
              />
              <span className="text-[28px] font-semi-bold" style={{ color: 'var(--purple)' }}>
                {logo.title}
              </span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center relative z-50">
              <ul className="flex list-none items-center gap-1">
                {menu.map((item) => renderDesktopMenuItem(item))}
              </ul>
            </div>
            <Button asChild size="sm" className="pdf-button">
              <a href={auth.download.url} target="_blank" rel="noopener noreferrer">{auth.download.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-3">
              <img
                src={logo.src}
                className="max-h-10 dark:invert"
                alt={logo.alt}
              />
              <span className="text-xl font-semibold" style={{ color: 'var(--purple)' }}>
                JV {REPORT_YEAR}
              </span>
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-3 transition-all duration-300 ease-in-out hover:bg-[var(--blue)]"
                  style={{
                    backgroundColor: 'var(--light-blue)',
                    color: 'var(--white)',
                    borderRadius: '2px',
                  }}
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto" style={{ backgroundColor: 'var(--white)', fontFamily: 'Work Sans, sans-serif' }}>
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-3">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                      <span className="text-lg font-semibold" style={{ color: 'var(--purple)' }}>
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigatiemenu
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, () => setMobileOpen(false)))}
                  </Accordion>

                  <div className="border-t pt-4" style={{ borderColor: 'var(--light-gray)' }}>
                    <Button asChild className="pdf-button w-full">
                      <a href={auth.download.url} target="_blank" rel="noopener noreferrer">{auth.download.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const DesktopArticlesDropdown = ({ item }: { item: MenuItem }) => {
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Prevent click from immediately closing a menu that was just opened by hover.
  const ignoreNextClickRef = useRef(false);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
    ignoreNextClickRef.current = true;
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      clearCloseTimer();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => {
          clearCloseTimer();
          if (ignoreNextClickRef.current) {
            ignoreNextClickRef.current = false;
            return;
          }
          setOpen((current) => !current);
        }}
        className="nav-item inline-flex h-10 w-max items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[var(--blue)]"
        style={{ backgroundColor: "var(--white)" }}
      >
        {item.title}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-[9999] mt-1.5 w-[600px] rounded-md border bg-white p-6 shadow-lg"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="grid grid-cols-1 gap-3">
            {item.items?.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const renderDesktopMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <li key={item.title}>
        <DesktopArticlesDropdown item={item} />
      </li>
    );
  }

  return (
    <li key={item.title}>
      <a
        href={item.url}
        className="nav-item inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[var(--blue)]"
        style={{ backgroundColor: "var(--white)" }}
      >
        {item.title}
      </a>
    </li>
  );
};

const renderMobileMenuItem = (item: MenuItem, onNavigate: () => void) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b" style={{ borderColor: 'var(--light-gray)' }}>
        <AccordionTrigger className="text-md py-3 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-1">
          {item.items.map((subItem) => (
            <MobileSubMenuLink key={subItem.title} item={subItem} onNavigate={onNavigate} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      onClick={onNavigate}
      className="text-md font-semibold py-3 border-b block transition-colors hover:text-[var(--blue)]"
      style={{ borderColor: 'var(--light-gray)' }}
    >
      {item.title}
    </a>
  );
};

/* Desktop sub-menu link — keeps original styling */
const SubMenuLink = ({ item }: { item: MenuItem }) => {
  const isExternal = /^https?:\/\//i.test(item.url);
  const isFile = /\.(pdf|docx?|xlsx?|pptx?)($|\?)/i.test(item.url);
  const newTab = isExternal || isFile;

  return (
    <a
      className="hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-4 leading-none no-underline outline-none transition-colors"
      href={item.url}
      target={newTab ? "_blank" : undefined}
      style={{ backgroundColor: 'var(--white)' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--white)'}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <div className="text-foreground flex-shrink-0">{item.icon}</div>
      <div className="flex-1">
        <div className="text-lg font-semibold mb-1">{item.title}</div>
        {item.description && (
          <p className=" text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

/* Mobile sub-menu link — smaller thumbnails, closes sheet on tap */
const MobileSubMenuLink = ({ item, onNavigate }: { item: MenuItem; onNavigate: () => void }) => {
  const isExternal = /^https?:\/\//i.test(item.url);
  const isFile = /\.(pdf|docx?|xlsx?|pptx?)($|\?)/i.test(item.url);
  const newTab = isExternal || isFile;

  return (
    <a
      className="flex select-none flex-row gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[var(--light-gray)]"
      href={item.url}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      onClick={newTab ? undefined : onNavigate}
    >
      {/* Smaller thumbnails on mobile */}
      <div className="text-foreground flex-shrink-0 [&>img]:size-10 [&>img]:rounded-sm [&>img]:object-cover [&>svg]:size-6">
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-base font-semibold mb-0.5 truncate">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
