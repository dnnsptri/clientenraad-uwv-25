import type { Metadata } from "next";
import { Content4 } from "@/components/Content4";
import FadeInSection from "@/components/FadeInSection";
import { REPORT_YEAR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Voorwoord",
  description: `Voorwoord van het redactieoverleg bij het jaarverslag ${REPORT_YEAR} van de UWV Cliëntenraad.`,
  alternates: { canonical: "/foreword" },
};

export default function ForewordPage() {
  return (
    <FadeInSection>
      <Content4 />
    </FadeInSection>
  );
}
