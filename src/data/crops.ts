// Text fields support **bold** and *italic* (rendered by <Rich>).

import type { VegKind } from '../components/Veg';

export interface Crop {
  name: string;
  icon: VegKind;
  es: string;
  levelText: string;
  /** How forgiving it is when you're away: 3 = survives neglect, 1 = needs attention. */
  lazy: 1 | 2 | 3;
  /** The minimum-effort way to grow it. */
  lazyNote: string;
  stats: { label: string; value: string }[];
  steps: string[];
  harvest: string;
  problems: string[];
  tip: string;
  varieties: string;
}

const stats = (zon: string, afstand: string, water: string, wanneer: string) => [
  { label: 'Zon', value: zon },
  { label: 'Afstand', value: afstand },
  { label: 'Water', value: water },
  { label: 'Wanneer', value: wanneer },
];

export const CROPS: Crop[] = [
  {
    name: 'Tomaten', icon: 'tomato', es: 'Tomate', levelText: 'Makkelijk met plantjes',
    lazy: 2,
    lazyNote: 'Kies kerstomaten en laat ze wild groeien in een tomatenkooi of tegen een rek: niet dieven, amper aanbinden. Zonder druppelsysteem overleven ze in juli geen week zonder jou.',
    stats: stats('Volle zon. Schaduw in de namiddag helpt in jul–aug', '50–60 cm tussen planten, rijen 80–100 cm', 'Diep en regelmatig. Dagelijks druppelen in de zomer', 'Planten half april tot mei'),
    steps: [
      'Koop jonge plantjes vanaf half april (of zaai binnen in feb–mrt). In maart zijn de nachten hier nog te koud.',
      'Plant **diep**: begraaf de stengel tot aan de eerste bladeren. Op het begraven stuk groeien extra wortels.',
      'Steek een stok van 1,8 m (*caña*) naast elke plant en bind de stengel losjes vast terwijl hij groeit.',
      'Bij hoge rassen dief je de zijscheuten (*chupones*) uit die in de "oksel" tussen blad en stengel groeien.',
      'Mulch met stro zodra de grond opgewarmd is.',
    ],
    harvest: 'Als ze helemaal gekleurd zijn en een beetje zacht aanvoelen, van juli tot oktober.',
    problems: [
      '**Zwarte onderkant aan de vrucht** (neusrot): onregelmatig water geven. Houd het gelijkmatig.',
      '**Kleine gangetjes in blad of vrucht:** de Tuta absoluta-mot. Verwijder aangetaste bladeren en vraag in de vivero naar een feromonenval.',
      '**Witte vlieg** onder de bladeren in de zomer.',
      '**Bloemen vallen af, geen vruchten** boven ~35 °C. Wacht tot september.',
    ],
    tip: 'Begin met 2 kerstomatenplanten en 2 grote. Kerstomaten zijn bijna onfeilbaar en geven veel.',
    varieties: 'Cherry, Muchamiel, Rosa, Corazón de buey (ossenhart), Raf (heerlijk maar lastiger)',
  },
  {
    name: 'Aardappelen', icon: 'potato', es: 'Patata', levelText: 'Makkelijk',
    lazy: 3,
    lazyNote: 'Poot in februari, dan doet de late winterregen het meeste werk. Aanaarden mag je overslaan als je er een dikke laag stro op legt. Daarna gewoon wachten tot het loof afsterft.',
    stats: stats('Volle zon', '30 cm tussen planten, rijen 60–70 cm', 'Matig. Gelijkmatig vochtig tijdens de bloei', 'Poten in feb–mrt of aug–sep'),
    steps: [
      'Koop gecertificeerde **pootaardappelen** (*patata de siembra*). Aardappelen uit de supermarkt zijn soms behandeld tegen kiemen of dragen ziektes.',
      'Optioneel: laat ze voorkiemen. Leg ze 2–3 weken op een lichte, koele plek tot ze korte, stevige kiemen hebben.',
      'Poot ze 10–15 cm diep, met de kiemen naar boven.',
      '**Aanaarden** (*aporcar*): als de planten ~20 cm hoog zijn, trek je aarde rond de stengels zodat enkel de bovenste bladeren nog uitsteken. Herhaal 2–3 weken later.',
      'Stop met water geven zodra de bladeren geel worden.',
    ],
    harvest: "Nieuwe aardappelen als de planten bloeien; de hoofdoogst zo'n 2 weken nadat het loof afsterft. Steek ze van opzij uit met een spitvork.",
    problems: [
      '**Groene aardappelen** hebben licht gezien en zijn licht giftig. Beter aanaarden.',
      '**Coloradokever:** geel-zwart gestreepte kevers en oranje larven. Dagelijks met de hand verwijderen.',
      '**Phytophthora / meeldauw** in natte lentes. Bruine vlekken verspreiden zich over de bladeren.',
    ],
    tip: 'Is je grond steenachtig? Kweek ze dan in een grote plantzak of kuip. Bij de oogst kiep je hem gewoon om, zonder te spitten.',
    varieties: 'Spunta, Monalisa, Kennebec, Agria',
  },
  {
    name: 'Basilicum', icon: 'basil', es: 'Albahaca', levelText: 'Makkelijk',
    lazy: 1,
    lazyNote: 'De minst vergevingsgezinde van je lijst: hij droogt snel uit. Zet hem in de grond tussen de tomaten op hetzelfde druppelsysteem, niet in een los potje.',
    stats: stats('Volle zon tot lichte schaduw', '25–30 cm. Prima in potten', 'Regelmatig. Laat potten niet uitdrogen', 'Planten mei–juni'),
    steps: [
      'Koop een plant in mei (of zaai in april binnen in kleine potjes).',
      'Plant buiten zodra de nachten warm zijn (boven ~12 °C). Basilicum haat kou.',
      'Als hij 15 cm hoog is, knip je de top af net boven een paar bladeren. Zo vertakt hij en wordt hij bossig.',
      'Knijp de hele zomer de bloemknoppen af, anders worden de bladeren bitter en stopt de plant met groeien.',
    ],
    harvest: 'Pluk voortdurend van de toppen, juni–oktober. Hij sterft af bij de eerste koude nachten. Maak voor die tijd pesto.',
    problems: [
      '**Koude nachten** in het voorjaar: zwarte bladeren, groei valt stil.',
      '**Slakken** zijn dol op jonge planten.',
      '**Valse meeldauw:** geel blad met grijs pluis aan de onderkant. Geef water op de grond, niet op de bladeren.',
    ],
    tip: 'Een basilicumpot uit de supermarkt bestaat eigenlijk uit 20 opeengepakte zaailingen. Verdeel hem in 4–5 plukjes en pot ze elk apart op, dan heb je 5 planten.',
    varieties: 'Genovese (klassieke pesto), Albahaca fina / de hoja pequeña (compact, sterk, de traditionele Andalusische vensterbankbasilicum), Thaise basilicum',
  },
  {
    name: 'Butternutpompoen', icon: 'pumpkin', es: 'Calabaza (cacahuete)', levelText: 'Makkelijk, vraagt ruimte',
    lazy: 3,
    lazyNote: 'Een van de luiste gewassen: zaaien, mulchen, druppelaar erbij en in september oogsten. Handbestuiving is meestal niet nodig, en de pompoenen blijven maanden goed op de plant liggen.',
    stats: stats('Volle zon', '1–1,5 m² per plant. Ranken worden 2–3 m', '2–3× per week diep, aan de voet', 'Zaaien mei–juni'),
    steps: [
      'Maak een heuveltje en meng er een flinke schep compost of mest door. Pompoenen zijn veelvraten.',
      'Zaai in mei 2–3 zaden 2–3 cm diep per heuveltje. Houd de sterkste zaailing over zodra ze een paar bladeren hebben (of koop plantjes in mei).',
      'Mulch dik. De grote bladeren beschaduwen de grond al snel zelf.',
      'Vrouwelijke bloemen hebben een mini-pompoentje erachter. Verschrompelen die, bestuif dan vroeg in de ochtend met de hand: pluk een mannelijke bloem en dep die in de vrouwelijke.',
      'Leg een tegel of plankje onder elke vrucht, zodat hij niet op vochtige grond ligt.',
    ],
    harvest: 'September–oktober, als de schil beige is, je er met je nagel geen deuk in krijgt, en de steel droog en kurkachtig is. Snijd af met 5 cm steel, laat 1–2 weken in de zon uitharden, en hij blijft 3–6 maanden goed.',
    problems: [
      '**Echte meeldauw:** wit poeder op de bladeren eind zomer. Komt vaak voor en is laat in het seizoen meestal onschuldig. Spuiten met 1 deel melk op 9 delen water helpt.',
      '**Vruchtjes rotten terwijl ze klein zijn:** slechte bestuiving. Bestuif met de hand.',
      '**Bladluis** onder de bladeren.',
    ],
    tip: 'Maak de bladeren niet nat bij het water geven, dat lokt meeldauw uit. Richt de druppelaar op de voet van de plant.',
    varieties: 'Waltham Butternut, of eender welke "calabaza cacahuete" uit de vivero',
  },
  {
    name: 'Sla', icon: 'lettuce', es: 'Lechuga', levelText: 'Het makkelijkst. Begin hiermee',
    lazy: 2,
    lazyNote: 'In de winter geeft de regen vaak genoeg water. Kies pluksla (hoja de roble) en pluk de buitenste bladeren: één keer planten, wekenlang oogsten. Vergeet het om de 2 weken bijplanten.',
    stats: stats('Volle zon in de winter, wat schaduw vanaf mei', '25–30 cm', 'Weinig en vaak (ondiepe wortels)', 'Planten oktober–maart'),
    steps: [
      'Het makkelijkst: koop een bakje jonge plantjes (*plantones*). Ze zijn goedkoop en in de herfst overal te koop.',
      'Plant zo dat de voet van de bladeren **op** de grond zit. Te diep geplant gaat hij rotten.',
      'Plant telkens maar een paar stuks om de 2–3 weken in plaats van alles tegelijk, voor een constante oogst.',
      'Bescherm tegen slakken, vooral na regen.',
    ],
    harvest: 'Snijd de hele krop als hij stevig is, of pluk wekenlang de buitenste bladeren van pluksla. Oogst voor ze "doorschiet" (de hoogte in gaat en bitter wordt) als de warmte in mei komt.',
    problems: [
      '**Slakken**: de grootste vijand.',
      '**Doorschieten** bij warmte. Kweek sla enkel in het koele seizoen.',
      '**Vogels** die aan zaailingen pikken. Leg de eerste weken een net over.',
    ],
    tip: 'Dit is je perfecte eerste gewas, en de herfst is het perfecte moment. Binnen 6–8 weken eet je je eigen sla.',
    varieties: 'Romana (bindsla), Hoja de roble (eikenbladsla, pluksla), Trocadero / Maravilla (kropsla), Cogollos (little gem)',
  },
  {
    name: 'Kruiden', icon: 'herb', es: 'Hierbas aromáticas', levelText: 'Makkelijk',
    lazy: 3,
    lazyNote: 'De luiste van allemaal. Rozemarijn, tijm en oregano overleven maanden zonder jou, zelfs in de zomer, zodra ze een jaar staan.',
    stats: stats('Volle zon (munt: lichte schaduw)', '40–60 cm voor struikvormige kruiden', 'Heel weinig eens ze aangeslagen zijn', 'Planten okt–nov of feb–mrt'),
    steps: [
      '**Rozemarijn, tijm, oregano, salie** (*romero, tomillo, orégano, salvia*) groeien hier wild op de heuvels. Ze houden van arme, steenachtige, goed doorlatende grond en volle zon.',
      'Plant ze in de herfst, zodat de winterregen de wortels laat aanslaan; na het eerste jaar hebben ze bijna geen water meer nodig.',
      '**Munt** (*hierbabuena*): altijd in een pot (hij woekert), vochtig en in lichte schaduw.',
      '**Peterselie en koriander** (*perejil, cilantro*) zijn hier kruiden voor het koele seizoen. Zaai van september tot maart. Koriander schiet door bij warmte.',
    ],
    harvest: 'Knip struikvormige kruiden het hele jaar door, maar nooit meer dan een derde tegelijk en nooit in het kale, houtige deel.',
    problems: [
      '**Te veel water of mest** doodt rozemarijn en tijm sneller dan verwaarlozing.',
      '**Koriander die doorschiet** in de lente. Zaai vaak kleine hoeveelheden.',
    ],
    tip: 'Plant een rozemarijn en een tijm bij de keukendeur. Ze zijn bijna onverwoestbaar en je gebruikt ze constant.',
    varieties: 'Ook goed hier: citroenverbena (hierba luisa), bieslook, laurier (laurel)',
  },
];
