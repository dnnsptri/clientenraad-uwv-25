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
      <section className="py-24">
      <div>
        <div className="container">
          <div className="mt-9 flex justify-center">
            <div className="w-full max-w-5xl">
              <h1 className="blank text-balance text-4xl md:text-5xl">
                Colofon
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-center mt-16">
          <div className="w-full max-w-5xl">
            <div className="w-full">
              <div>
                <div className="prose prose-longform prose-h2:scroll-m-10 mt-6">
                    <h2 id="header-redactie" ref={(ref) => addHeaderRef("header-redactie", ref)} className="scroll-m-20">
                      Redactie
                    </h2>
                    <p>
                      Gerard Haan (cliëntenraad Noord, voorzitter Redactieoverleg)<br />
                      Petra van Wieringen (cliëntenraad Overijssel en Gelderland-Noord, lid Redactieoverleg)<br />
                      Eric Beukema (cliëntenraad Overijssel en Gelderland-Noord, lid Redactieoverleg)<br />
                      Else te Brake (centrale cliëntenraad, lid Redactieoverleg)<br />
                      Dick Tolsma (cliëntenraad Midden- en Oost-Brabant, lid Redactieoverleg)
                    </p>
                    <h2 id="header-fotografie" ref={(ref) => addHeaderRef("header-fotografie", ref)} className="scroll-m-20">
                      Fotografie
                    </h2>
                    <p>
                      Patrick van den Hurk
                    </p>
                    <h2 id="header-vormgeving" ref={(ref) => addHeaderRef("header-vormgeving", ref)} className="scroll-m-20">
                      Vormgeving
                    </h2>
                    <p>
                      Dennis Petri (Backspace)<br />
                      Menno van der Veen (Backspace)
                    </p>
                    <h2 id="header-dank" ref={(ref) => addHeaderRef("header-dank", ref)} className="scroll-m-20">
                      Met dank aan
                    </h2>
                    <p>
                      Saskia Bos (UWV, ambtelijk secretaris centrale cliëntenraad)<br />
                      Wonne Wolters (UWV, adviseur cliëntenparticipatie)<br />
                      Patrick van den Hurk (EMMA Communicatie, (eind)redactie)<br />
                      Joris Jenster (EMMA Communicatie, procesbegeleiding)
                    </p>
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
