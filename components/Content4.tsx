import { ContentDivider } from "@/components/ContentDivider";
import FadeInSection from "@/components/FadeInSection";
import { getNavbarMenuItems } from "@/lib/articles";
import { REPORT_YEAR } from "@/lib/site";

const Content4 = () => {
  const firstArticleUrl = getNavbarMenuItems()[0]?.url ?? "/artikelen";

  return (
    <FadeInSection>
      <section className="py-16 md:py-24">
        <div>
          <div className="container">
            <div className="mt-9 flex justify-center">
              <div className="w-full max-w-5xl">
                <h1 className="blank text-balance text-4xl md:text-5xl">
                  Voorwoord van de
                  <br />
                  UWV Cliëntenraadsredactie
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
                    <p>
                      Beste lezer,
                      <br /> <br />
                      Als UWV Cliëntenraadsredactie hebben we met trots en
                      betrokkenheid dit jaarverslag {REPORT_YEAR} van de UWV
                      Cliëntenraden geschreven. Onze redactie bestaat uit
                      vertegenwoordigers van de verschillende UWV Cliëntenraden.
                      Naast dit jaarverslag verzorgen wij publicaties over
                      actuele en relevante onderwerpen op de website van de UWV
                      Cliëntenraden (
                      <a
                        href="https://www.clientenraad-uwv.nl/"
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.clientenraad-uwv.nl/
                      </a>
                      ).
                    </p>
                    <p>
                      De UWV Cliëntenraden vervullen op grond van de Wet SUWI
                      een wettelijke adviesrol binnen UWV. Ze bestaan uit
                      vrijwilligers die de belangen vertegenwoordigen van
                      iedereen die gebruikmaakt van de dienstverlening van UWV:
                      mensen met een uitkering en/of een voorziening. Vanuit hun
                      kennis, ervaringen en contacten met cliënten adviseren zij
                      UWV over de kwaliteit en verbetering van de
                      dienstverlening.
                    </p>
                    <p>
                      In dit jaarverslag blikken we terug op een jaar waarin de
                      verschillende UWV Cliëntenraden zich opnieuw met grote
                      betrokkenheid hebben ingezet om de stem en de belangen van
                      cliënten zichtbaar en hoorbaar te maken. We voerden
                      constructieve gesprekken met managers en medewerkers van
                      UWV. Daarnaast brachten we zowel gevraagde als ongevraagde
                      adviezen uit. Daarmee droegen we bij aan een toegankelijke,
                      begrijpelijke, betrouwbare en mensgerichte werkwijze.
                    </p>
                    <p>
                      In {REPORT_YEAR} heeft UWV meer aandacht besteed aan
                      maatwerk voor cliënten. De cliëntenraden hebben eraan
                      bijgedragen dat ervaringen en signalen van cliënten daarbij
                      nadrukkelijk zijn betrokken. Ook hebben we bijzondere
                      aandacht gevraagd voor cliënten die voor hun
                      bestaanszekerheid afhankelijk zijn van een uitkering.
                    </p>
                    <p>
                      Helaas bleven hardnekkige knelpunten bestaan. Het
                      aanhoudende tekort aan verzekeringsartsen, de achterstanden
                      bij sociaal-medische beoordelingen en de lange wachttijden
                      hadden grote gevolgen voor veel cliënten. Deze knelpunten
                      zorgden voor onzekerheid en vertraging, juist voor mensen
                      die afhankelijk zijn van een tijdige beoordeling en een
                      correcte uitkering.
                    </p>
                    <p>
                      In dit jaarverslag besteden we ook aandacht aan ervaringen
                      van cliënten op onder meer talentenfestivals en
                      banenmarkten en aan de grenzen van invloed die de
                      cliëntenraden kunnen uitoefenen. Daarnaast schetsen we de
                      ontwikkelingen rond de betrokkenheid van de cliëntenraden
                      bij het coalitieoverleg.
                    </p>
                    <p>
                      We danken alle cliënten en belangenorganisaties die hun
                      ervaringen, signalen en inzichten met de cliëntenraden
                      hebben gedeeld. Ook spreken we onze waardering uit voor de
                      managers en andere medewerkers van UWV die openstonden voor
                      dialoog en samenwerking. Alleen door samen te werken,
                      kunnen we blijven bouwen aan een dienstverlening die recht
                      doet aan iedere cliënt.
                      <br /> <br />
                      Benieuwd naar meer?
                      <br />
                      Lees dan nu het artikel van Etsseline over{" "}
                      <a href={firstArticleUrl} className="underline">
                        grenzen van invloed
                      </a>
                      .
                    </p>
                    <ContentDivider
                      src="/images/logo_uwv.svg"
                      alt="Logo UWV cliëntenraad"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export { Content4 };
