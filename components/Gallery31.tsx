import React from "react";
import Link from "next/link";
import type { Route } from "next";

import { DirectionAwareHover } from "@/components/aceternity/direction-aware-hover";
import { articles, ARTICLES_PATH, type Article } from "@/lib/articles";

// Cover-style rows: each row pairs a narrow portrait tile with a wide
// landscape tile, separated by a cyan bar, and the two rows mirror each
// other — the composition used on the printed cover.
const ROWS = [
  { wide: "right" as const },
  { wide: "left" as const },
];

// Wide slots use the landscape article header; narrow slots use the square
// home crop, which holds up better at a taller aspect.
const rowPairs = (items: Article[]): [Article, Article][] => {
  const pairs: [Article, Article][] = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push([items[i], items[i + 1] ?? items[i]]);
  }
  return pairs;
};

// Rendered tile widths: full width on mobile, otherwise roughly half the
// 1024px grid (container caps at 1400px).
const TILE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px";

// Ring color is the cyan --blue so it stays visible on both the purple hero
// overlap and the white page background.
const TILE_FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2";

// Row tile: the flex ratio sets its share of the row, the row's own aspect
// ratio sets the height, and object-cover handles the crop.
const RowTile = ({
  article,
  wide,
}: {
  article: Article;
  wide: boolean;
}) => (
  <Link
    href={`${ARTICLES_PATH}/${article.slug}` as Route}
    className={`block min-w-0 rounded-sm ${TILE_FOCUS}`}
    style={{ flex: wide ? "1.55 1 0%" : "1.05 1 0%" }}
  >
    <DirectionAwareHover
      className="h-full rounded-sm"
      imageUrl={wide ? article.image : article.tileImage}
      imageAlt={wide ? article.imageAlt : article.tileImageAlt}
      imageSizes={TILE_SIZES}
      imagePriority
    >
      <p className="text-[2rem] font-bold leading-tight">{article.title}</p>
      <p className="text-sm font-normal">{article.author}</p>
    </DirectionAwareHover>
  </Link>
);

// Cyan divider between the two tiles in a row, echoing the cover's bars.
const RowBar = () => (
  <div
    aria-hidden
    className="w-12 shrink-0 lg:w-[60px]"
    style={{ backgroundColor: "var(--light-blue)" }}
  />
);

// Single-column mobile tile: no stretching needed, and touch devices have
// no hover state, so the title is shown below the image instead.
const CaptionedTile = ({ article }: { article: Article }) => (
  <Link
    href={`${ARTICLES_PATH}/${article.slug}` as Route}
    className={`block rounded-sm ${TILE_FOCUS}`}
  >
    <DirectionAwareHover
      className={`rounded-sm ${article.tileAspect}`}
      imageUrl={article.tileImage}
      imageAlt={article.tileImageAlt}
      imageSizes={TILE_SIZES}
      hideOverlay
    />
    <div className="mt-2">
      <p className="text-[1.6rem] font-bold leading-tight">{article.title}</p>
      <p className="text-sm">{article.author}</p>
    </div>
  </Link>
);

// Article overview, sourced from lib/articles.ts: adding an article there
// automatically adds it here (and to the navbar, footer and sitemap).
const Gallery31 = () => {
  const pairs = rowPairs(articles);

  // The negative top margin pulls the grid up so its first row straddles
  // the purple hero (which carries extra bottom padding to make room).
  return (
    <section
      id="artikelen"
      aria-label="Artikelen"
      className="relative -mt-16 pb-24 sm:-mt-24 md:-mt-48 md:pb-8"
    >
      <div className="container relative flex h-full w-full flex-col items-center justify-center">
        <div className="relative w-full">
          <div className="hidden flex-col gap-4 sm:flex">
            {pairs.map(([first, second], index) => {
              const wideOnRight = (ROWS[index % ROWS.length] ?? ROWS[0]).wide === "right";
              return (
                <div
                  key={first.slug}
                  className="flex aspect-[16/5] gap-4"
                >
                  {/* The bar hangs off the row's outer edge, on whichever
                      side carries the narrow tile, so the two rows mirror. */}
                  {wideOnRight && <RowBar />}
                  <RowTile article={first} wide={!wideOnRight} />
                  <RowTile article={second} wide={wideOnRight} />
                  {!wideOnRight && <RowBar />}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-6 sm:hidden">
            {articles.map((article) => (
              <CaptionedTile key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery31 };
