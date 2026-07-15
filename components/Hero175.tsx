"use client";

import { ArrowDown, CirclePlay } from "lucide-react";

import { badgeVariants } from "./ui/badge";
import { Button } from "./ui/button";

const Hero175 = () => {
  return (
    // Extra bottom padding creates the purple canvas the article masonry
    // overlaps into (see Gallery31's negative top margin).
    <section className="dark font-public_sans relative pt-12 pb-40 before:absolute before:top-0 before:left-0 before:z-10 before:block before:h-[15rem] before:w-full before:bg-linear-to-b before:from-muted before:to-transparent before:content-[''] md:pt-32 md:pb-72" style={{ backgroundColor: 'var(--purple)' }}>
      <div className="relative z-20 container">
        <div className="relative z-20 mx-auto flex max-w-[56.25rem] flex-col items-center gap-6">
          {/* <div
            className="mb-4 flex w-fit items-center gap-1 rounded-full border px-2.5 py-1.5"
            style={{ backgroundColor: 'var(--light-blue)' }}
          >
            <p className="text-sm font-semibold text-white">
              Jaarverslag 2025
            </p>
          </div> */}
          <h1 className="w-full text-center text-3xl font-medium text-foreground sm:text-5xl md:text-7xl">
            Werken aan kwalitatieve dienstverlening op maat
          </h1>
          <p className="text-center text-[19px] text-white">
            Dankzij de ervaringen van cliënten en de dialoog met UWV werken de cliëntenraden aan meer bereikbaarheid, begrijpelijkheid en betrouwbaarheid. Alleen samen kunnen we stappen zetten naar een dienstverlening die recht doet aan iedere cliënt.
          </p>
          {/* Scroll shortcut is only useful on mobile, where the articles
              sit further down; on desktop the masonry is already in view. */}
          <div className="mt-4 flex items-center gap-2 md:hidden">
            <Button
              asChild
              className="pdf-button"
            >
              <a 
                href="#artikelen" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('artikelen')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="scroll-smooth"
              >
                <div>Naar de artikelen</div>
                <ArrowDown className="size-5!" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero175 };