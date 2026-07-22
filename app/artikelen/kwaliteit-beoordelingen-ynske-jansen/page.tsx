import { HeroBlue } from '@/components/Hero50'
import { ArticleBodySection } from '@/components/ArticleBodySection'
import { ContentDivider } from '@/components/ContentDivider'
import { TestimonialBluePhoto } from '@/components/TestimonialBluePhoto'
import { getArticleMetadata } from '@/lib/articles'

export const metadata = getArticleMetadata('kwaliteit-beoordelingen-ynske-jansen')

export default function ArticleYnskeJansenPage() {
  return (
    <main>
      <HeroBlue
          title="Je beoordeling mag niet meer afhangen van welke arts je toevallig treft"
          description="Ynske Jansen:"
          image="/images/header_ynske.jpg"
        />
      <ArticleBodySection>
        <p className="intro">
          De Centrale Cliëntenraad (CC) van UWV verdiept zich al jaren in de problemen rond de uitvoering van het arbeidsongeschiktheidsstelsel door het UWV. Niet alleen de snelheid van de sociaal-medische beoordelingen voor de WIA laat zeer te wensen over, maar ook de kwaliteit ervan. Dat is vooral te zien bij de zogenaamde &lsquo;moeilijk objectiveerbare aandoeningen&rsquo;. Hierbij is een grotere &lsquo;interdoktervariatie&rsquo; te zien dan bij andere, meer gangbare aandoeningen. Dat wil zeggen dat de beoordelingen tussen artsen (te) sterk uiteen lopen.<br /><br />
        </p>
        <p>
          De CC werkt in dit kader samen met de patiëntenverenigingen die deze cliënten vertegenwoordigen. De CC bracht in 2024 een ongevraagd advies uit over deze problematiek, waarin ook de oplossingen van de patiëntenorganisaties (verenigd in de Initiatiefgroep Motie-Van Kent) werden meegenomen. In 2025 was er opnieuw contact met de Steungroep ME en Arbeidsongeschiktheid, een van de patiëntenorganisaties binnen de initiatiefgroep. Aanleiding was de gewonnen rechtszaak die drie cliënten met ME/CVS voerden tegen de afwijzing van hun WIA-uitkering.
        </p>
        <h2 className="scroll-m-20">
          Landelijke organisatie met 1.200 donateurs
        </h2>
        <p>
          <b>Ynske Jansen</b> zet zich namens de Steungroep ME en Arbeidsongeschiktheid al ruim dertig jaar in voor mensen met ME/CVS die vastlopen in de beoordeling van hun arbeidsongeschiktheid. Wat ooit begon als een grondige voorbereiding op haar eigen keuring, groeide in samenwerking met anderen uit tot een landelijke vrijwilligersorganisatie met inmiddels meer dan 1.200 donateurs. Al snel bleken er raakvakken te zijn met een bredere groep aandoeningen, die vaak worden aangeduid als &lsquo;moeilijk objectiveerbaar&rsquo;. Het aantal mensen dat met zo&apos;n aandoening leeft, is door COVID-19 enorm gegroeid, omdat long covid er ook één is. Net als ME/CVS valt het onder de paraplu van post-acute infectiesyndromen (PAIS).
        </p>
        <p>
          Allereerst: Ynske heeft niets op met de benaming &lsquo;moeilijk objectiveerbaar&rsquo;, die ze dan ook liever niet gebruikt. Onder de noemer vallen naast ME/CVS en long covid alle andere ziektebeelden waarbij klachten en beperkingen niet altijd in standaardonderzoeken zichtbaar zijn of kunnen worden gemaakt. &ldquo;Het is een term die iets lijkt te zeggen over de aandoening of de patiënt. Maar in werkelijkheid zegt het vooral iets over de kennis of juist het gebrek aan kennis van degene die moet beoordelen&rdquo;, aldus Ynske.
        </p>
        <h2 className="scroll-m-20">
          Kennis is sleutel voor de oplossing
        </h2>
        <p>
          Volgens haar ontstaat juist daar het probleem. &ldquo;Er is ooit onderzocht wat verzekeringsartsen verstaan onder een &lsquo;moeilijk objectiveerbare aandoening&rsquo;. Dan gaat het over moeite met het stellen van een diagnose, moeite met het begrijpen van het verband tussen klachten en ziekte, en moeite met het inschatten van beperkingen of het bepalen van een behandeling. Dat zegt dus meer over de beschikbare kennis dan over de ziekte zelf. Gedegen kennis bij mensen die keuringen en beoordelingen doen is daarom de sleutel om dit probleem op te lossen.&rdquo;
        </p>
        <p>
          Dat gebrek aan kennis heeft volgens Ynske grote gevolgen voor cliënten. Door toedoen van de Steungroep is al sinds 1996 in een richtlijn vastgelegd dat arbeidsongeschiktheid in het kader van de WAO, WIA en Wajong ook objectief kan worden vastgesteld als de oorzaak van klachten niet meetbaar is met een laboratoriumtest, foto of scan. Toch blijken cliënten in de praktijk nog altijd tegen scepsis, ongeloof, verkeerde diagnoses en onderschatting van hun beperkingen aan te lopen. Ynske: &ldquo;Er zijn verzekeringsartsen geweest die jarenlang zijn blijven zeggen: het is niet objectief vast te stellen, dus ik houd er geen of minder rekening mee. Terwijl de wet en de richtlijnen dus allang ruimte bieden om dat wel volledig te doen.&rdquo;
        </p>
        <h2 className="scroll-m-20">
          Motie-Van Kent vraagt om meer aandacht
        </h2>
        <p>
          Daardoor ontstaan verschillen tussen beoordelingen die moeilijk uit te leggen zijn. &ldquo;Mensen met dezelfde aandoening en mate van beperking kunnen totaal verschillende keuringsuitkomsten krijgen. Dan lijkt het alsof het afhangt van welke arts je treft. Dat zou natuurlijk niet zo mogen zijn.&rdquo; De discussie over de &lsquo;moeilijk objectiveerbare aandoeningen&rsquo; kreeg een nieuwe impuls door de opkomst van long covid. In 2022 nam de Tweede Kamer de motie-Van Kent aan. Daarin werd de regering gevraagd om samen met onder meer patiëntenorganisaties te werken aan een protocol voor het UWV om long covid, chronische Lyme, Q-koorts en ME/CVS bij Ziektewet- en WIA-keuringen te erkennen en serieus te nemen.
        </p>
      </ArticleBodySection>
      <ArticleBodySection>
        <TestimonialBluePhoto
          quote="Cliëntenraden brengen signalen van cliënten onder de aandacht. Zij zien dezelfde problemen terugkomen als wij."
          image={{ src: "/images/content_ynske.jpg", alt: "Ynske Jansen" }}
        />
        <p>
          Patiëntenorganisaties sloegen vervolgens de handen ineen. &ldquo;Wij hebben samen met organisaties voor long covid, Q-koorts en Lyme een initiatiefgroep opgericht&rdquo;, zegt Ynske. &ldquo;Het doel was simpel: zorgen dat deze ziekten serieus worden genomen en dat patiënten worden betrokken bij oplossingen.&rdquo; Ook de Centrale Cliëntenraad van UWV schoof aan bij gesprekken die het ministerie van SZW over de uitvoering van de motie hield. Daarmee vervulden cliëntenraden een belangrijke rol als vertegenwoordiger van ervaringen uit de praktijk. &ldquo;Cliëntenraden brengen signalen van cliënten onder de aandacht&rdquo;, zegt Ynske. &ldquo;Zij zien dezelfde problemen terugkomen als wij: ongelijkheid, inconsistentie en gebrek aan kennis. We versterken elkaar wanneer we die zaken bij het UWV aan de orde stellen.&rdquo;
        </p>
        <h2 className="scroll-m-20">
          Onderzoek ten onrechte genegeerd
        </h2>
        <p>
          Het belangrijkste nieuws kwam in 2025 echter uit de rechtszaal. De Centrale Raad van Beroep deed uitspraak in de zaken van drie mensen met ME/CVS die jarenlang hadden geprocedeerd tegen het UWV. In alle drie de gevallen vond het UWV in eerste aanleg dat de betrokkenen een volledige werkweek konden werken. Zij kregen daarom geen WIA-uitkering. &ldquo;Dat waren mensen met een officiële diagnose, die zelfs aanvullende informatie op basis van verschillende tests door gespecialiseerde artsen konden voorleggen. Toch concludeerde het UWV dat zij vrijwel volledig inzetbaar waren&rdquo;, aldus Ynske.
        </p>
        <p>
          Na een afwijzing van hun bezwaar en een verloren beroep bij een rechtbank gingen de drie in hoger beroep bij de Centrale Raad van Beroep. Die bundelde de zaken en schakelde een onafhankelijke ME/CVS-deskundige in. Hij concludeerde dat eerder terzijde gelegde onderzoeken naar onder meer post-exertionele malaise (PEM) – het verergeren van klachten na inspanning – en orthostatische intolerantie – klachten hebben bij rechtop staan of zitten – wel degelijk wetenschappelijke waarde hebben, en daarom bij de beoordeling van beperkingen van de drie hadden moeten worden meegenomen. De Raad nam die conclusie over en stelde de klagers in het gelijk.
        </p>
      </ArticleBodySection>
      <ArticleBodySection>
        <h2 className="scroll-m-20">
          Het blijft nog te vaak een loterij
        </h2>
        <p>
          Dat was een echte doorbraak, zegt Ynske: &ldquo;Door uit te spreken dat die informatie niet had mogen worden genegeerd, maakte de Centrale Raad van Beroep duidelijk dat er echt op een verkeerde manier naar deze zaken is gekeken. Na herbeoordeling kregen alle drie de betrokkenen alsnog met terugwerkende kracht een IVA-uitkering. Voor hen betekende dat eindelijk erkenning en recht.&rdquo; Volgens Ynske reikt de betekenis van de uitspraak echter veel verder dan deze drie zaken. &ldquo;We zien dat mensen die nu voor het eerst gekeurd worden vaker een eerlijke beoordeling krijgen. Maar eerlijk gezegd blijft het nog te vaak een loterij.&rdquo;
        </p>
        <p>
          Juist daarom vindt zij dat het UWV nu moet doorpakken. De Steungroep pleit ervoor dat eerder beoordeelde cliënten opnieuw worden beoordeeld op basis van de huidige kennis en de uitspraak. Daarnaast moeten verzekeringsartsen meer handvatten krijgen voor de beoordeling van ME/CVS en vergelijkbare aandoeningen. &ldquo;Voor long covid heeft het UWV al stappen gezet. De verzekeringsartsen hebben twee memo&apos;s met aandachtspunten voor de beoordeling ontvangen. Wij vinden dat hetzelfde ook voor ME/CVS nodig is.&rdquo; Dat gesprek wordt inmiddels gevoerd met het UWV. Tegelijkertijd loopt er een kwaliteitsonderzoek naar een aantal WIA-beoordelingen van mensen met ME/CVS.
        </p>
        <h2 className="scroll-m-20">
          ME-patiënten als kanaries in de kolenmijn
        </h2>
        <p>
          Volgens Ynske is actie van het UWV hard nodig. &ldquo;We horen nog steeds verhalen van mensen die zich niet serieus genomen voelen. Daarom is het belangrijk dat het UWV de lessen uit deze uitspraak daadwerkelijk een plek in de keurings- en beoordelingspraktijk geeft. De vraag moet niet zijn of iemand voldoende meetbaar ziek is. De vraag moet altijd zijn welke beperkingen iemand bij ziekte daadwérkelijk heeft. Een verzekeringsarts begrijpt een ziekte niet alleen door het verhaal van de cliënt te kennen, maar ook door kennis over de aandoening te hebben.&rdquo;
        </p>
        <p>
          Als je zorgvuldig naar beide kijkt, ontstaat er vanzelf meer rechtvaardigheid. Zo zag ik het dertig jaar geleden al en zo zie ik het vandaag de dag nog steeds. Je kunt ME-patiënten eigenlijk zien als kanaries in de kolenmijn. Als die dood neervallen, is dat een teken voor mijnwerkers dat er giftig mijngas is. Als ME-patiënten niet serieus genomen worden door verzekeringsartsen is dat een signaal dat ook anderen het risico van een slechte keuring lopen. Positief gesteld: als er verbeteringen worden doorgevoerd bij de beoordeling van ME/CVS kan de kwaliteit van de sociaal-medische beoordelingen ook voor veel anderen verbeteren.
        </p>
        <ContentDivider src="/images/logo_uwv.svg" alt="Logo UWV cliëntenraad" />
      </ArticleBodySection>
    </main>
  )
}
