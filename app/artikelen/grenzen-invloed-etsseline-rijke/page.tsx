import { HeroPurple } from '@/components/HeroPurple'
import FadeInSection from '@/components/FadeInSection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialPurplePhoto } from '@/components/TestimonialPurplePhoto'
import { getArticleMetadata, getNavbarMenuItems } from '@/lib/articles'

export const metadata = getArticleMetadata('grenzen-invloed-etsseline-rijke')

export default function ArticleEtsselineRijkePage() {
  return (
    <main>
      <FadeInSection>
        <HeroPurple
          title="We kunnen als cliëntenraad signaleren en adviseren, maar niet alles veranderen"
          description="Etsseline Rijke:"
          image="/images/header_etsseline.jpg"
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
                        <b>Etsseline Rijke</b> neemt dit jaar afscheid van de cliëntenraad Noord, na de maximale zittingsduur van acht jaar. Het afscheid raakt haar merkbaar. Niet omdat de regels niet voor haar zouden moeten gelden, maar omdat ze het gevoel heeft dat haar ervaring juist nú van extra grote waarde kan zijn. &ldquo;Precies in deze tijd zijn er allerlei belangrijke ontwikkelingen rond de WIA, Wajong en WW,&rdquo; zegt ze. &ldquo;En dat zijn onderwerpen waar ik veel kennis van en ervaring mee heb. Dan is het jammer dat je moet stoppen als je denkt: ik kan hier nog echt iets in betekenen.&rdquo;<br /><br />
                      </p>
                      <p>
                        Etsseline kent de wereld van UWV van verschillende kanten. Ze werkte dertig jaar geleden zelf bij de organisatie, en tegenwoordig is ze niet alleen lid van de cliëntenraad, maar begeleidt ze vanuit de FNV ook mensen bij keuringen en bezwaarprocedures. Al die ervaring heeft haar geleerd dat de cliëntenraden een belangrijke rol vervullen, maar dat hun invloed ook duidelijke grenzen kent. &ldquo;Wij zijn er om signalen op te halen, ervaringen van cliënten zichtbaar te maken en om advies te geven&rdquo;, zegt ze. &ldquo;Maar mensen denken soms dat een cliëntenraad veel meer invloed heeft dan in werkelijkheid het geval is.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Grenzen aan de invloed
                      </h2>
                      <p>
                        Dat merkt Etsseline vooral als cliënten in individuele beoordelingen vastlopen. In haar werk als begeleider ziet ze geregeld situaties waarvan ze denkt: dat zou anders kunnen en moeten. &ldquo;Bijvoorbeeld als je merkt dat mensen het gevoel hebben dat er door de artsen onvoldoende naar hen wordt geluisterd. En soms ook als je ziet dat ontwikkelingen in iemands gezondheid niet goed worden ingeschat, en dus niet volledig in de beoordeling worden meegenomen. Dan denk je: hier zou meer aandacht voor mogen zijn.&rdquo;
                      </p>
                      <p>
                        Maar daar wordt volgens haar ook precies zichtbaar waar de grens van de invloed van cliëntenraden ligt. &ldquo;Het gaat dan om dingen waar je als cliëntenraad niet direct iets aan kunt veranderen, want een individuele beoordeling blijft een individuele beoordeling. Wij kunnen wel signaleren dat cliënten tegen bepaalde problemen aanlopen, maar we kunnen niet in een dossier stappen en een beslissing terugdraaien.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Meer toeschouwer dan gesprekspartner
                      </h2>
                      <p>
                        Dat betekent niet dat de raad machteloos is. Door patronen zichtbaar te maken, kan de raad immers indirect bijdragen aan verbeteringen in de dienstverlening. Toch ervaart Etsseline dat de afstand tussen signaleren en veranderen soms wel erg groot is. &ldquo;Er zijn onderwerpen die hoe dan ook buiten de invloed van cliëntenraden liggen. Denk aan landelijke regelgeving, politieke keuzes of beleidsbeslissingen die al genomen zijn. Dan kun je als raad wel aangeven wat de gevolgen zijn voor cliënten, maar uiteindelijk wordt de beslissing buiten jou om en ergens anders genomen.&rdquo;
                      </p>
                      <TestimonialPurplePhoto
                        quote="We hoorden soms pas achteraf welke kant het opgaat. Terwijl wij juist dicht bij de praktijk staan."
                        image={{ src: "/images/content_etsseline.jpg", alt: "Etsseline Rijke" }}
                      />
                      <p>
                        Die ervaring heeft ze de afgelopen jaren vaker opgedaan. Bij grote dossiers, die vaak veel impact hadden op cliënten, voelde de raad zich soms meer toeschouwer dan gesprekspartner. &ldquo;We hoorden soms pas achteraf welke kant het opgaat. Terwijl wij juist dicht bij de praktijk staan. Daarom horen wij wat besluiten daadwerkelijk voor mensen betekenen. En juist daarom zou het goed zijn als cliëntenraden eerder en intensiever worden betrokken.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Ruimte voor maatwerk moet blijven
                      </h2>
                      <p>
                        Haar opmerkingen komen niet voort uit kritiek op individuele artsen en medewerkers, benadrukt Etsseline. &ldquo;Want ik weet hoe ingewikkeld dit werk is. Ook voor professionals is het niet eenvoudig om een goed beeld te krijgen van iemands situatie. Zeker niet als mensen met complexe problematiek te maken hebben.&rdquo;
                      </p>
                      <p>
                        Daarom is het belangrijk dat cliënten hun verhaal kunnen vertellen en dat er ruimte blijft voor maatwerk. &ldquo;In twee jaar kan er enorm veel veranderen in iemands leven. Mensen kunnen nieuwe gezondheidsproblemen krijgen, hun situatie kan verslechteren of er kunnen andere beperkingen ontstaan. Die ontwikkelingen moet je wel blijven zien.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Cliënten hebben duidelijkheid nodig
                      </h2>
                      <p>
                        Terugkijkend op acht jaar in de cliëntenraad komt Etsseline tot twee inzichten die volgens haar de kern van het raadswerk raken. &ldquo;Allereerst heb ik heel duidelijk gezien hoeveel impact het op mensen heeft als ze niet weten waar ze aan toe zijn. Veel cliënten zitten lang in onzekerheid. Over hun uitkering, over een beoordeling of over hun toekomst. Dat doet iets met ze.&rdquo;
                      </p>
                      <p>
                        Want de gevolgen voor mensen kunnen heel groot zijn als processen niet helder of niet goed verlopen. &ldquo;Cliënten merken de gevolgen van onduidelijkheid of fouten direct in hun dagelijks leven. Dat zorgt voor extra stress en belasting.&rdquo; Daarnaast is de signalerende functie van cliëntenraden richting UWV en beleidsmakers volgens haar van groot belang. &ldquo;We mogen dan soms maar een beperkte directe invloed hebben, we zijn wél de plek waar de ervaringen van cliënten gehoord worden en samenkomen.&rdquo;
                      </p>
                      <h2 className="scroll-m-20">
                        Zichtbaar maken wat er gebeurt
                      </h2>
                      <p>
                        En dat is waardevol omdat cliënten in het formele proces hun zegje niet altijd goed of tijdig kunnen doen. Dat is waar een cliëntenraad wel degelijk echt invloed kan hebben. Niet door zelf te beslissen, maar door zichtbaar te maken wat er in de praktijk gebeurt. Dat blijft nodig en belangrijk, al worden de beslissingen elders genomen, zegt Etsseline: &ldquo;We maken de stem van cliënten hoorbaar. En soms is dat precies waarmee verandering begint.&rdquo;
                      </p>
                      <p>
                        Lees ook het artikel over het <a href={getNavbarMenuItems()[1]?.url} className="underline">Talentenfestival</a>.
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
