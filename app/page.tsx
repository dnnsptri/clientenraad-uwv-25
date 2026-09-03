import { Hero175 } from "@/components/Hero175";
import { Gallery31 } from "@/components/Gallery31";
import { Cta5 } from "@/components/Cta5";
import FadeInSection from "@/components/FadeInSection";
import { ContentDivider } from "@/components/ContentDivider";

export default function Page() {
  return (
    <main className="p-0">
      <FadeInSection onLoad>
        <Hero175 />
      </FadeInSection>
      <FadeInSection>
        <Gallery31 />
      </FadeInSection>
      <FadeInSection>
        <Cta5 />
      </FadeInSection>
      <FadeInSection>
        <div className="container">
          <ContentDivider
            src="/images/logo_uwv.svg"
            alt="Logo UWV cliëntenraad"
          />
        </div>
      </FadeInSection>
    </main>
  )
}
