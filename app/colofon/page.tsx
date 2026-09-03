"use client";

import { useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ContentDivider } from "@/components/ContentDivider";
import { Separator } from "@/components/ui/separator";
import FadeInSection from "@/components/FadeInSection";

export default function ColofonPage() {
  const [activeHeader, setActiveHeader] = useState<string | null>(null);
  const headerRefs = useRef<Record<string, HTMLElement>>({});
  useEffect(() => {
    const headers = Object.keys(headerRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeader(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    headers.forEach((headerId) => {
      const element = headerRefs.current[headerId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addHeaderRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      headerRefs.current[id] = ref;
    }
  };

  return (
    <FadeInSection>
      <section className="pt-12 sm:pt-24">
      <div>
        <div className="container">
          <div className="mt-2 flex justify-center sm:mt-9">
            <div className="longform-column">
              <h1 className="blank text-balance text-4xl md:text-5xl">
                Colofon
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center mt-8 sm:mt-16">
          <div className="w-full max-w-5xl">
            <div className="w-full">
              <div>
                <div className="prose prose-longform prose-h2:scroll-m-10 mt-6">
                    <h2 id="header-redactie" ref={(ref) => addHeaderRef("header-redactie", ref)} className="scroll-m-20">
                      Redactie
                    </h2>
                    <ul className="credits">
                      <li>
                        <span className="credit-name">Gerard Haan</span>
                        <span className="credit-role">Cliëntenraad Noord, voorzitter Redactieoverleg</span>
                      </li>
                      <li>
                        <span className="credit-name">Petra van Wieringen</span>
                        <span className="credit-role">Cliëntenraad Overijssel en Gelderland-Noord, lid Redactieoverleg</span>
                      </li>
                      <li>
                        <span className="credit-name">Eric Beukema</span>
                        <span className="credit-role">Cliëntenraad Overijssel en Gelderland-Noord, lid Redactieoverleg</span>
                      </li>
                      <li>
                        <span className="credit-name">Else te Brake</span>
                        <span className="credit-role">Centrale cliëntenraad, lid Redactieoverleg</span>
                      </li>
                      <li>
                        <span className="credit-name">Dick Tolsma</span>
                        <span className="credit-role">Cliëntenraad Midden- en Oost-Brabant, lid Redactieoverleg</span>
                      </li>
                    </ul>
                    <h2 id="header-fotografie" ref={(ref) => addHeaderRef("header-fotografie", ref)} className="scroll-m-20">
                      Fotografie
                    </h2>
                    <ul className="credits">
                      <li>
                        <span className="credit-name">Patrick van den Hurk</span>
                      </li>
                    </ul>
                    <h2 id="header-vormgeving" ref={(ref) => addHeaderRef("header-vormgeving", ref)} className="scroll-m-20">
                      Vormgeving
                    </h2>
                    <ul className="credits">
                      <li>
                        <span className="credit-name">Dennis Petri</span>
                        <span className="credit-role">Backspace</span>
                      </li>
                      <li>
                        <span className="credit-name">Menno van der Veen</span>
                        <span className="credit-role">Backspace</span>
                      </li>
                    </ul>
                    <h2 id="header-dank" ref={(ref) => addHeaderRef("header-dank", ref)} className="scroll-m-20">
                      Met dank aan
                    </h2>
                    <ul className="credits">
                      <li>
                        <span className="credit-name">Saskia Bos</span>
                        <span className="credit-role">UWV, ambtelijk secretaris centrale cliëntenraad</span>
                      </li>
                      <li>
                        <span className="credit-name">Wonne Wolters</span>
                        <span className="credit-role">UWV, adviseur cliëntenparticipatie</span>
                      </li>
                      <li>
                        <span className="credit-name">Patrick van den Hurk</span>
                        <span className="credit-role">EMMA Communicatie, (eind)redactie</span>
                      </li>
                      <li>
                        <span className="credit-name">Joris Jenster</span>
                        <span className="credit-role">EMMA Communicatie, procesbegeleiding</span>
                      </li>
                    </ul>
                    <ContentDivider
                      src="/images/logo_uwv.svg"
                      alt="Logo UWV cliëntenraad"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
