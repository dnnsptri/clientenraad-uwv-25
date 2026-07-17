import { HeroBlue } from '@/components/Hero50'
import FadeInSection from '@/components/FadeInSection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialBluePhoto } from '@/components/TestimonialBluePhoto'
import { getArticleMetadata, getNavbarMenuItems } from '@/lib/articles'

export const metadata = getArticleMetadata('talentenfestival-jan-mark-mari')

export default function ArticleTalentenfestivalPage() {
  return (
    <main>
      <FadeInSection>
        <HeroBlue
          title="Talentenfestival biedt ook nieuwe ideeën en inzichten"
          description="Jan Mark van Stigt Thans & Mari van der Aalsvoort:"
          image="/images/header_janmark_mari.jpg"
        />
      </FadeInSection>
      <FadeInSection>
        <div className="py-4 overflow-visible">
          <div className="container">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="w-full">
                  <div>
                    <div className="prose prose-longform prose-h2:scroll-m-10 mt-6">
                      <p className="intro">
                        Wat gebeurt er als je werkzoekenden, werkgevers, opleiders en loopbaanadviseurs niet afzonderlijk met elkaar in contact brengt, maar ze allemaal samenbrengt op één plek? Volgens <b>Jan Mark van Stigt Thans</b> en <b>Mari van der Aalsvoort</b>, beiden lid van de cliëntenraad Midden- en Oost-Brabant, laat het Talentenfestival in Eindhoven zien dat die aanpak werkt. Niet alleen omdat er vacatures worden ingevuld, maar vooral ook omdat mensen er opnieuw perspectief en onverwachte inzichten krijgen.<br /><br />
                      </p>
                      <p>
                        Het Talentenfestival, dat najaar 2025 voor de derde keer in Zuidoost-Brabant werd gehouden, trok ruim duizend bezoekers. Anders dan een traditionele banenmarkt draaide het evenement in het Eindhovense Evoluon niet uitsluitend om het vinden van werk of het invullen van vacatures. Werkzoekenden konden er bijvoorbeeld kennismaken met werkgevers uit uiteenlopende sectoren, workshops volgen, advies krijgen over hun cv, zich oriënteren op scholing en nadenken over hun eigen talenten en mogelijkheden.
                      </p>
                      <h2 className="scroll-m-20">
                        Welke kansen zijn er wél?
                      </h2>
                      <p>
                        Het Talentenfestival werd georganiseerd door het Werkcentrum Zuidoost-Brabant, in samenwerking met UWV, gemeenten en andere partners uit de regionale arbeidsmarkt. Jan Mark en Mari bezochten het festival vanuit hun rol als cliëntenvertegenwoordigers en om met de blik van een werkzoekende te kijken: wat werkt goed, wat kan er beter en hoe wordt het evenement ervaren? Vooral de positieve sfeer viel hen op. Werkzoekenden kregen niet te horen wat er niet mogelijk is, maar juist welke kansen er wél zijn.
                      </p>
                      <p>
                        Jan Mark en Mari zien de brede opzet als de grote kracht van het festival. &ldquo;Vaak zie je dat een banenmarkt vooral is gericht op het direct matchen van werkgevers en werkzoekenden,&rdquo; zegt Jan Mark. &ldquo;Hier was veel meer ruimte voor oriëntatie. Mensen konden ontdekken welke sectoren er zijn, welke opleidingen mogelijk zijn en welke stappen naar werk ze nog kunnen zetten waar ze misschien nog niet aan hebben gedacht of die minder voor de hand liggen.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Breed en laagdrempelig
                      </h2>
                      <p>
                        De breedte van het festival was goed terug te zien in het aanbod. Bezoekers konden niet alleen terecht bij ongeveer negentig wervende werkgevers, maar er waren bijvoorbeeld ook workshops over werkgeluk, persoonlijke ontwikkeling en solliciteren met behulp van kunstmatige intelligentie. Bezoekers konden ook naar de &lsquo;cv-dokter&rsquo;, advies krijgen over presentatie en sollicitatiekleding en deelnemen aan activiteiten die hun talenten en ambities in kaart hielpen brengen.
                      </p>
                      <TestimonialBluePhoto
                        quote="Door de omvang en de open sfeer stappen mensen makkelijker op een werkgever af dan wanneer ze alleen een sollicitatiebrief moeten sturen."
                        image={{ src: "/images/content_mari.jpg", alt: "Mari van der Aalsvoort" }}
                      />
                      <p>
                        Volgens Mari verlaagt zo&apos;n veelzijdige omgeving de drempel om in gesprek te gaan met werkgevers aanzienlijk. &ldquo;Door de omvang en de open sfeer stappen mensen makkelijker op een werkgever af dan wanneer ze alleen een sollicitatiebrief moeten sturen. Je ziet spontaan geanimeerde gesprekken ontstaan tussen werkgevers en bezoekers. Mensen konden rondkijken, vergelijken en ontdekken. Voor iemand die nog zoekende is naar een volgende stap kan dat ontzettend waardevol zijn.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Meer dan alleen een baan vinden
                      </h2>
                      <p>
                        Daardoor gaat de betekenis van zo&apos;n festival uiteindelijk verder dan het aantal mensen dat op de dag zelf een baan vindt. Volgens Jan Mark moet de opbrengst juist ook worden gezocht in zaken als zelfvertrouwen, inspiratie en nieuwe inzichten. &ldquo;Een bezoeker die leert hoe hij zijn cv kan verbeteren, ontdekt welke opleiding bij hem past of voor het eerst weer perspectief ziet op werk, heeft al een belangrijke stap gezet.&rdquo;
                      </p>
                      <p>
                        Juist daarom vinden beide cliëntenraadsleden dat dit soort initiatieven niet beperkt zou moeten blijven tot Eindhoven en omgeving. &ldquo;Wat mij betreft worden dit soort talentenfestivals veel breder georganiseerd,&rdquo; zegt Mari. &ldquo;Ik ken ze niet uit andere delen van Brabant, terwijl ze juist veel kunnen betekenen voor mensen die op zoek zijn naar werk of een andere richting in hun loopbaan. Ik denk dat je dit zelfs landelijk zou moeten uitrollen.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Betrek cliëntenraden bij organisatie
                      </h2>
                      <p>
                        Als vergelijkbare evenementen in verschillende arbeidsmarktregio&apos;s worden georganiseerd, kan het aanbod ook helemaal worden afgestemd op de lokale arbeidsmarkt en de regionale vraag. &ldquo;Niet iedereen wil of kan naar Eindhoven komen&rdquo;, zegt Mari. &ldquo;Mensen zoeken toch meestal werk in hun eigen omgeving. Dan is het logisch dat je ook daar kansen creëert om werkgevers, opleiders en werkzoekenden samen te brengen. Dus het zou mooi zijn als je dit straks niet alleen hier ziet, maar overal in het land.&rdquo;
                      </p>
                      <p>
                        Beiden pleiten daarnaast voor een grotere rol van cliëntenraden bij de voorbereiding van dergelijke evenementen. Nu is de raad alleen uitgenodigd om op de dag zelf mee te kijken en hun bevindingen te delen. Volgens Mari en Jan Mark zou de ervaring van cliënten echter juist al in de ontwerpfase benut moeten worden. &ldquo;Wij weten van cliënten wat zij nodig hebben,&rdquo; zegt Mari. &ldquo;Denk aan toegankelijkheid, voldoende rustige plekken voor gesprekken en een goede balans tussen informatie en persoonlijke begeleiding. Die kennis kun je gebruiken om een mooi evenement als dit nóg beter te maken.&rdquo;
                      </p>
                      <p>
                        Lees ook het artikel over <a href={getNavbarMenuItems()[2]?.url} className="underline">coalitieoverleg</a>.
                      </p>
                      <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </main>
  )
}
