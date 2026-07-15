// Central site configuration.
// REPORT_YEAR drives all "Jaarverslag <year>" chrome (titles, metadata, headings)
// so the yearly refresh is a one-line change here.
export const REPORT_YEAR = "2025";

export const SITE_NAME = "UWV Cliëntenraad";
export const SITE_TITLE = `${SITE_NAME} - Jaarverslag ${REPORT_YEAR}`;
export const SITE_DESCRIPTION = `Het online jaarverslag ${REPORT_YEAR} van de UWV Cliëntenraad: interviews en artikelen over de dienstverlening van UWV, gezien door de ogen van cliënten.`;

// Production URL. Set NEXT_PUBLIC_SITE_URL in Vercel once the definitive
// domain is known; the fallback keeps local builds and previews working.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://clientenraad-uwv-25-dnnsptri.vercel.app";

// Download link for the full report. NOTE: the matching file must exist in
// public/downloads — add the new PDF there when the year rolls over.
export const REPORT_PDF = `/downloads/UWV_clientenraad_jaarverslag${REPORT_YEAR}.pdf`;
