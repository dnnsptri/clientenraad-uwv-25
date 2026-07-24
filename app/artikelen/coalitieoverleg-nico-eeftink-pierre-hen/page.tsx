import { HeroPurple } from '@/components/HeroPurple'
import { ArticleBodySection } from '@/components/ArticleBodySection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialPurplePhoto } from '@/components/TestimonialPurplePhoto'
import { getArticleMetadata, getNavbarMenuItems } from '@/lib/articles'

export const metadata = getArticleMetadata('coalitieoverleg-nico-eeftink-pierre-hen')

export default function ArticleCoalitieoverlegPage() {
  return (
    <main>
      <HeroPurple
          title="Meld je als raad actief aan voor coalitieoverleg"
          description="Nico Eeftink & Pierre Hen:"
          image="/images/header_nico_pierre.jpg"
        />
      <ArticleBodySection>
        <p className="intro">
          Cliëntenraden kunnen binnen UWV veel meer invloed uitoefenen als zij niet pas achteraf over besluiten worden geïnformeerd, maar al in een vroeg stadium zelf meedenken. Daarom vinden <b>Nico Eeftink</b> en <b>Pierre Hen</b> het een belangrijke ontwikkeling dat cliëntenraden steeds vaker aanschuiven bij het coalitieoverleg. Daarin komen managers en leidinggevenden uit verschillende UWV-onderdelen samen om plannen, projecten en knelpunten te bespreken. Door ook cliëntenraden daarbij te betrekken, krijgt de stem van de cliënt een plek aan de voorkant van het proces.<br /><br />
        </p>
        <p>
          Beiden weten uit ervaring hoe waardevol dat is. Pierre, voorzitter van de cliëntenraad Limburg, zag het coalitieoverleg in zijn regio ontstaan, en besloot niet af te wachten of de raad zou worden uitgenodigd. Hij zocht zelf contact en vroeg of de cliëntenraad kon aansluiten. Die uitnodiging kwam er snel. &ldquo;Wij willen niet achteraf horen wat er besloten is&rdquo;, zegt Pierre over de gedachte achter zijn initiatief. &ldquo;We willen juist aan de bron zitten. Daar hebben we allemaal veel meer aan.&rdquo; Hoewel de overlegvorm nog relatief nieuw is, merkt hij nu al dat de lijnen korter worden en dat wederzijds begrip groeit.
        </p>
        <h2 className="scroll-m-20">
          Voorkomen dat problemen te laat zichtbaar worden
        </h2>
        <p>
          Dat levert voordelen op voor alle partijen, vindt Pierre. &ldquo;Als er nieuwe plannen, pilots of veranderingen worden voorbereid, kunnen wij dan meteen vanuit het perspectief van de cliënt aangeven waar kansen en risico&apos;s liggen.&rdquo; Managers krijgen zo eerder zicht op de gevolgen van beleid voor cliënten, terwijl cliëntenraden beter kunnen zien en begrijpen welke ontwikkelingen eraan zitten te komen. &ldquo;Dan heb je samen de mogelijkheid om te voorkomen dat problemen pas zichtbaar worden als een project al loopt.&rdquo;
        </p>
        <p>
          Ook Nico, secretaris van de gecombineerde cliëntenraad Overijssel-Gelderland Noord en Gelderland Midden-Zuid, ziet die meerwaarde. Zijn raad wordt al langer betrokken bij projecten, klantonderzoeken en bijeenkomsten waarbij verschillende disciplines samenwerken. Het coalitieoverleg sluit daar volgens hem mooi op aan. &ldquo;Het brengt mensen tegelijk aan tafel. Daardoor ontstaan verbindingen die er anders niet zouden of veel langer meer tijd zouden kosten. Bovendien kun je als cliëntenraad kennis en ervaringen uit verschillende locaties en projecten in het overleg samenbrengen.&rdquo;
        </p>
        <h2 className="scroll-m-20">
          Raad als constructieve partner
        </h2>
        <p>
          Die bredere blik blijkt in de praktijk waardevol. Zo werden leden van de cliëntenraad al betrokken bij klantonderzoeken, pilots rond dienstverlening en bijeenkomsten waarin werd gezocht naar oplossingen voor complexe vraagstukken. Daardoor groeide de zichtbaarheid van de raad én het vertrouwen vanuit UWV. Inmiddels wordt de raadsleden geregeld gevraagd om mee te denken of onderzoek uit te voeren. Volgens Nico ontstaat die invloed niet vanzelf. &ldquo;Je moet jezelf laten zien. Dat hebben wij als raad de afgelopen jaren consequent gedaan. En als mensen dan merken dat je constructief meedenkt, word je vanzelf vaker gevraagd.&rdquo;
        </p>
      </ArticleBodySection>
      <ArticleBodySection>
        <TestimonialPurplePhoto
          quote="Je bereikt meer met een uitgestoken hand dan met wantrouwen."
          image={{ src: "/images/content_nico.jpg", alt: "Nico Eeftink" }}
        />
        <p>
          Dat constructieve karakter is een rode draad in het verhaal van beide raadsleden. Zij zien de cliëntenraad niet als een tegenmacht, maar als een partner die vanuit de ervaringen van cliënten waarde toevoegt aan beleid en uitvoering. &ldquo;Dus moet je niet alleen kritisch zijn, maar ook laten zien wat je kunt bijdragen. Je bereikt meer met een uitgestoken hand dan met wantrouwen,&rdquo; zegt Nico. &ldquo;Kritisch zijn blijft belangrijk, maar uiteindelijk wil je toch vooral samen de dienstverlening verbeteren.&rdquo;
        </p>
        <h2 className="scroll-m-20">
          Signalen sneller op de juiste plek
        </h2>
        <p>
          Een voorbeeld daarvan is de betrokkenheid van de raad bij het programma 1UWV in Arnhem. Door al in een vroeg stadium mee te kijken, konden ervaringen van cliënten daarbij worden ingebracht voordat processen werden ingericht. Ook bij klantonderzoeken leverde die samenwerking waardevolle inzichten op. Niet alleen voor de cliëntenraad, maar juist ook voor UWV zelf. Nico: &ldquo;Je moet laten zien wat je kunt bijdragen. Als je alleen aan de zijlijn meeluistert, blijf je toeschouwer. Pas als je actief meedenkt en zichtbaar bent, word je een volwaardige gesprekspartner.&rdquo;
        </p>
        <p>
          Het coalitieoverleg is daarvoor volgens Pierre en Nico precies het juiste podium. Doordat managers uit alle verschillende onderdelen van het UWV eraan deelnemen en direct kunnen worden aangesproken, komen signalen sneller en met minder &lsquo;ruis&rsquo; op de juiste plek terecht. Vragen hoeven niet meer langs allerlei afzonderlijke afdelingen te reizen. Bovendien ontstaat er meer begrip voor elkaars perspectieven. Pierre merkt dat de contacten daardoor ook persoonlijker en directer worden. &ldquo;En dan hoef je niet meer overal zelf achteraan. Mensen weten je te vinden en komen zelf naar je toe met vragen of onderwerpen.&rdquo;
        </p>
      </ArticleBodySection>
      <ArticleBodySection>
        <h2 className="scroll-m-20">
          Samen meer bereiken dan apart
        </h2>
        <p>
          Voor cliëntenraden die nog niet deelnemen aan een coalitieoverleg, hebben Pierre en Nico daarom een duidelijke boodschap: wacht niet af of je wordt uitgenodigd om mee te doen, maar zoek actief contact. Nodig managers uit en laat zien wat de cliëntenraad al in een vroeg stadium kan bijdragen. Pierre: &ldquo;Stel niet alleen de vraag wat UWV voor de cliëntenraad kan doen, maar vooral ook wat de cliëntenraad voor UWV kan betekenen. Juist daar zit de meerwaarde van de samenwerking. Aan tafel met alle managers bereik je in één uur soms meer dan in maanden afzonderlijk overleg.&rdquo;
        </p>
        <p>
          Lees ook het artikel van <a href={getNavbarMenuItems()[3]?.url} className="underline">Ynske Jansen over de kwaliteit van beoordelingen</a>.
        </p>
        <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
      </ArticleBodySection>
    </main>
  )
}
