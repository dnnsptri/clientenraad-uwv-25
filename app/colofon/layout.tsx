import type { Metadata } from "next";
import { REPORT_YEAR } from "@/lib/site";

// The colofon page itself is a client component ("use client"), which cannot
// export metadata. This layout provides the <head> tags for that route.
export const metadata: Metadata = {
  title: "Colofon",
  description: `Colofon van het online jaarverslag ${REPORT_YEAR} van de UWV Cliëntenraad.`,
  alternates: { canonical: "/colofon" },
};

export default function ColofonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
