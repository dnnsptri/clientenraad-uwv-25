import type { Metadata } from "next";
import { SITE_TITLE } from "@/lib/site";

export const ARTICLES_PATH = "/artikelen";

export interface Article {
  slug: string;
  title: string;
  description: string;
  // Pull quote shown on hover cards and used as extra context
  content?: string;
  author?: string;
  publishedAt?: string;
  readTime?: string;
  category?: string;
  // Hero / Open Graph image (article detail pages)
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  // Homepage masonry tile image (cropped for grid layout)
  tileImage: string;
  tileImageAlt: string;
  tileImageWidth: number;
  tileImageHeight: number;
  // Tailwind aspect-ratio class for the masonry tile on the homepage.
  tileAspect: string;
  // Numeric height/width of tileAspect. Must match the class above; the
  // masonry packing in Gallery31 uses it to balance column heights.
  tileRatio: number;
}

export const articles: Article[] = [
  {
    slug: "grenzen-invloed-etsseline-rijke",
    title: "Grenzen van invloed",
    description: "Etsseline Rijke (Noord) in gesprek met Gerard",
    content:
      "We kunnen als cliëntenraad signaleren en adviseren, maar niet alles veranderen",
    author: "Etsseline Rijke (Noord)",
    image: "/images/header_etsseline.jpg",
    imageAlt: "Portret van Etsseline Rijke",
    imageWidth: 1920,
    imageHeight: 1024,
    tileImage: "/images/home_square_etsseline.jpg",
    tileImageAlt: "Etsseline Rijke in gesprek",
    tileImageWidth: 560,
    tileImageHeight: 560,
    tileAspect: "aspect-square",
    tileRatio: 1,
  },
  {
    slug: "talentenfestival-jan-mark-mari",
    title: "Talentenfestival",
    description:
      "Jan Mark van Stigt Thans & Mari van der Aalsvoort (MOB) in gesprek met Dick",
    content: "Talentenfestival biedt ook nieuwe ideeën en inzichten",
    author: "Jan Mark van Stigt Thans & Mari van der Aalsvoort (MOB)",
    image: "/images/header_janmark_mari.jpg",
    imageAlt: "Portret van Jan Mark van Stigt Thans en Mari van der Aalsvoort",
    imageWidth: 1920,
    imageHeight: 1024,
    tileImage: "/images/home_square_janmark_mari.jpg",
    tileImageAlt:
      "Jan Mark van Stigt Thans en Mari van der Aalsvoort aan tafel",
    tileImageWidth: 560,
    tileImageHeight: 560,
    tileAspect: "aspect-square",
    tileRatio: 1,
  },
  {
    slug: "coalitieoverleg-nico-eeftink-pierre-hen",
    title: "Coalitieoverleg",
    description: "Nico Eeftink & Pierre Hen in gesprek met Eric",
    content: "Meld je als raad actief aan voor coalitieoverleg",
    author: "Nico Eeftink & Pierre Hen",
    image: "/images/header_nico_pierre.jpg",
    imageAlt: "Portret van Nico Eeftink en Pierre Hen",
    imageWidth: 1920,
    imageHeight: 1024,
    tileImage: "/images/home_high_nico_pierre.jpg",
    tileImageAlt: "Nico Eeftink en Pierre Hen",
    tileImageWidth: 500,
    tileImageHeight: 600,
    tileAspect: "aspect-[5/6]",
    tileRatio: 6 / 5,
  },
  {
    slug: "kwaliteit-beoordelingen-ynske-jansen",
    title: "Kwaliteit van beoordelingen",
    description: "Ynske Jansen (Steungroep ME) in gesprek met Else",
    content:
      "Je beoordeling mag niet meer afhangen van welke arts je toevallig treft",
    author: "Ynske Jansen (Steungroep ME)",
    image: "/images/header_ynske.jpg",
    imageAlt: "Portret van Ynske Jansen",
    imageWidth: 1920,
    imageHeight: 1024,
    tileImage: "/images/home_square_ynske.jpg",
    tileImageAlt: "Ynske Jansen",
    tileImageWidth: 560,
    tileImageHeight: 560,
    tileAspect: "aspect-square",
    tileRatio: 1,
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

// Builds the per-article <head> metadata (title, description, canonical,
// Open Graph). Called from each article's page.tsx as:
//   export const metadata = getArticleMetadata("<slug>")
export const getArticleMetadata = (slug: string): Metadata => {
  const article = getArticle(slug);
  if (!article) return { title: "Artikel niet gevonden" };

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${ARTICLES_PATH}/${article.slug}` },
    openGraph: {
      title: `${article.title} | ${SITE_TITLE}`,
      description: article.description,
      url: `${ARTICLES_PATH}/${article.slug}`,
      type: "article",
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
          width: article.imageWidth,
          height: article.imageHeight,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${SITE_TITLE}`,
      description: article.description,
      images: [article.image],
    },
  };
};

// Helper function to get hero content for articles
export const getHeroContent = (slug: string) => {
  const article = getArticle(slug);
  if (!article) {
    return {
      title: "Artikel niet gevonden",
      description: "Het gevraagde artikel kon niet worden gevonden.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    };
  }

  return {
    title: article.title,
    description: article.description,
    image: article.image,
  };
};

// Helper function to get navbar menu items
export const getNavbarMenuItems = () => {
  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    url: `${ARTICLES_PATH}/${article.slug}`,
    image: article.tileImage,
    imageAlt: article.tileImageAlt,
    imageWidth: article.tileImageWidth,
    imageHeight: article.tileImageHeight,
  }));
};
