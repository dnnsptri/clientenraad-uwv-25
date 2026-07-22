import React from "react";
import Link from "next/link";
import type { Route } from "next";

import { DirectionAwareHover } from "@/components/aceternity/direction-aware-hover";
import { articles, ARTICLES_PATH, type Article } from "@/lib/articles";

// Masonry packing: each tile goes into the currently shortest column.
// Tile heights are known up front (tileRatio in lib/articles.ts), so this
// runs on the server and produces gap-free columns with a near-flush bottom
// edge. CSS multicol was tried first but its column balancing left large
// holes; this gives full control.
const packColumns = (items: Article[], columnCount: number): Article[][] => {
  const columns: Article[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array<number>(columnCount).fill(0);

  for (const item of items) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(item);
    heights[shortest] += item.tileRatio;
  }

  return columns;
};

// Masonry tile: the aspect ratio sits on the Link (the flex item) and acts
// as its natural height, while `grow` lets tiles in a shorter column stretch
// until every column matches the tallest one — the grid bottom stays flush
// regardless of ratios or gap counts. object-cover absorbs the few extra
// pixels by cropping slightly more.
// Rendered tile widths: full width on mobile, half the container on tablet,
// a third on desktop (container caps at 1400px).
const TILE_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px";

// Ring color is the cyan --blue so it stays visible on both the purple hero
// overlap and the white page background.
const TILE_FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2";

const MasonryTile = ({ article }: { article: Article }) => (
  <Link
    href={`${ARTICLES_PATH}/${article.slug}` as Route}
    className={`block grow rounded-sm ${TILE_FOCUS} ${article.tileAspect}`}
  >
    <DirectionAwareHover
      className="h-full rounded-sm"
      imageUrl={article.tileImage}
      imageAlt={article.tileImageAlt}
      imageSizes={TILE_SIZES}
      imagePriority
    >
      <p className="text-[2rem] font-bold leading-tight">{article.title}</p>
      <p className="text-sm font-normal">{article.author}</p>
    </DirectionAwareHover>
  </Link>
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

const MasonryColumns = ({ columns }: { columns: Article[][] }) => (
  <>
    {columns.map((column, index) => (
      <div key={index} className="flex flex-1 flex-col gap-3">
        {column.map((article) => (
          <MasonryTile key={article.slug} article={article} />
        ))}
      </div>
    ))}
  </>
);

// Article overview, sourced from lib/articles.ts: adding an article there
// automatically adds it here (and to the navbar, footer and sitemap).
// With four articles, a 2-column masonry grid balances better than three
// columns (which leaves one column with a single stretched tile).
const Gallery31 = () => {
  const twoColumns = packColumns(articles, 2);

  // The negative top margin pulls the masonry up so its first row straddles
  // the purple hero (which carries extra bottom padding to make room).
  return (
    <section
      id="artikelen"
      aria-label="Artikelen"
      className="relative -mt-16 pb-20 sm:-mt-24 sm:pb-32 md:-mt-48"
    >
      <div className="container relative flex h-full w-full flex-col items-center justify-center">
        <div className="relative w-full max-w-4xl lg:max-w-5xl">
          <div className="hidden gap-4 sm:flex">
            <MasonryColumns columns={twoColumns} />
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
