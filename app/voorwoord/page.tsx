import type { Metadata } from "next";
import { Content4 } from "@/components/Content4";
import { REPORT_YEAR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Voorwoord van de UWV Cliëntenraadsredactie",
  description: `Voorwoord van de UWV Cliëntenraadsredactie bij het jaarverslag ${REPORT_YEAR} van de UWV Cliëntenraden.`,
  alternates: { canonical: "/voorwoord" },
};

export default function ForewordPage() {
  return <Content4 />;
}
