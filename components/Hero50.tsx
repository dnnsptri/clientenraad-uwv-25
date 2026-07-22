"use client"
import Image from "next/image"

interface HeroProps {
  title: string
  description: string
  image: string  // required — always provided by article pages
  variant: "blue" | "purple"
}

const Hero = ({ title, description, image, variant }: HeroProps) => {
  const bgColor = variant === "blue" ? "var(--blue)" : "var(--purple)"
  const svg = variant === "blue" ? "/images/element_top.svg" : "/images/element_top_purple.svg"

  return (
    <section className="relative pb-8 sm:pb-0 sm:mb-0">
      {/* Hero photo — fill container, priority-loaded since it's above the fold */}
      <div className="relative h-[320px] min-h-[320px] sm:h-[420px] sm:min-h-[420px] lg:h-[680px] lg:min-h-[680px]">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Triangle + box animate together as one unit */}
      <div className="relative -mt-20 sm:-mt-48 lg:-mt-64 z-10">
        <div className="container">
          <div className="relative mx-auto max-w-5xl">
            <div className="hero-title-reveal">
              <div className="absolute -top-20 left-0 z-20 sm:-top-32">
                <img
                  src={svg}
                  alt=""
                  aria-hidden="true"
                  className="h-20 w-20 object-contain object-bottom sm:h-32 sm:w-32"
                />
              </div>
              <div
                className="relative z-20 rounded-sm px-5 pt-5 pb-7 sm:px-6 sm:pt-6 sm:pb-8 lg:p-20 text-left lg:min-h-[360px] flex flex-col justify-start"
                style={{ backgroundColor: bgColor, boxShadow: "none", color: "var(--white)" }}
              >
                <p className="pt-1 text-sm lg:text-xl">{description}</p>
                <h1 className="text-balance text-2xl sm:text-3xl lg:text-6xl font-medium mt-3 sm:mt-4 lg:mt-10">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Named exports preserve all existing article page imports unchanged
const HeroBlue = (props: Omit<HeroProps, "variant">) => <Hero {...props} variant="blue" />
const HeroPurple = (props: Omit<HeroProps, "variant">) => <Hero {...props} variant="purple" />

export { HeroBlue, HeroPurple }
