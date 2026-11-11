import type { Month } from './months';

export interface MonthTasks {
  mood: string;
  /** The one thing to do if you do nothing else this month. */
  lazy: string;
  plant: string[];
  harvest: string[];
  care: string[];
}

export const TASKS: Record<Month, MonthTasks> = {
  1: {
    mood: 'Koel, soms nat, en af en toe een nachtvorstje. Rustig in de tuin.',
    lazy: 'Niets. Geniet van de sla en de kruiden.',
    plant: ['Slaplantjes'],
    harvest: ['Sla', 'Peterselie, koriander', 'Rozemarijn, tijm'],
    care: ['Strooi compost op de bakken die je in de zomer gebruikt', 'Bij een heldere, windstille nacht onder 3 °C: vliesdoek over sla en zaailingen', 'Koop pootaardappelen voor februari'],
  },
  2: {
    mood: 'Amandelbloesem op de heuvels. De dagen lengen snel, maar de nachten blijven fris.',
    lazy: 'Poot aardappelen en leg er een dikke laag stro over. Klaar.',
    plant: ['Pootaardappelen, vanaf half februari', 'Sla, koriander, peterselie', 'Vaste kruiden (rozemarijn, tijm, salie, oregano)'],
    harvest: ['Sla', 'Peterselie, koriander', 'Kruiden'],
    care: ['Werk mest of compost in de zomerbak', 'Raap slakken op na regen', 'Optioneel: tomatenzaad binnen op de vensterbank zaaien (of gewoon plantjes kopen in april)'],
  },
  3: {
    mood: 'De lente komt op gang, maar de nachten kunnen nog koud zijn.',
    lazy: 'Test de druppelbevloeiing en zet de timer klaar. Wacht nog met tomaten.',
    plant: ['Laatste kans voor aardappelen', 'De laatste sla planten voor de hitte', 'Vaste kruiden'],
    harvest: ['Sla', 'Tuinbonen', 'Kruiden'],
    care: ['Nog geen tomaten of basilicum: een koude nacht zet ze weken terug', 'Leg nu de druppelbevloeiing aan, voor je ze nodig hebt', 'Optioneel: aardappelen aanaarden, of er gewoon meer stro op leggen'],
  },
  4: {
    mood: 'Warme dagen, en vanaf half april zachte nachten. Plantmaand voor de zomer.',
    lazy: 'Plant vanaf half april kerstomaten, op de druppelslang en onder dikke mulch.',
    plant: ['Tomatenplantjes, vanaf half april', 'Ook paprika en courgette, als je zin hebt'],
    harvest: ['Laatste sla', 'Tuinbonen', 'Kruiden'],
    care: ['Zet een tomatenkooi of rek bij elke plant', 'Controleer jonge scheuten op bladluis en spuit met zeepwater', 'Leg stro rond alles wat je plant'],
  },
  5: {
    mood: 'Het wordt warm. Sla schiet door, zomergewassen komen op gang.',
    lazy: 'Plant basilicum, zaai butternut en leg overal een dikke laag stro voor de hitte komt.',
    plant: ['Basilicumplantjes, tussen de tomaten', 'Butternutzaad of -plantjes, met een eigen druppelaar', 'Nog tomaten, als je er nog plek voor hebt'],
    harvest: ['Tuinbonen (de laatste)', 'Laatste sla, voor ze bitter wordt', 'Kruiden'],
    care: ['Optioneel: zijscheuten van tomaten uitdieven (chupones)', 'Knijp de bloemknoppen van basilicum af als je er bent'],
  },
  6: {
    mood: 'De zomer is er. Het druppelsysteem doet nu het echte werk.',
    lazy: 'Controleer timer en batterij voor je vertrekt. Oogst wat rijp is.',
    plant: ['Butternut: uiterlijk begin juni zaaien, anders rijpt hij niet meer voor de koude'],
    harvest: ["Aardappelen, zo'n 2 weken nadat het loof afsterft", 'Knoflook, als de onderste helft van de bladeren geel is', 'Basilicum, royaal'],
    care: ['Zet de timer iets ruimer nu het heet wordt', 'Let op witte vlieg en Tuta (kleine gangetjes in tomatenbladeren)', 'Vul de mulch aan'],
  },
  7: {
    mood: 'Piekhitte en soms terral. Overlevingsmodus.',
    lazy: 'Alleen dit: werkt de druppelbevloeiing nog? Zo ja, dan ben je goed bezig.',
    plant: ['Niets. Het is te warm om nieuwe planten te laten aanslaan'],
    harvest: ['Eerste kerstomaten, daarna bijna elke dag', 'Laatste aardappelen', 'Basilicum (maak pesto en vries die in)'],
    care: ['Schaduwnet (malla de sombreo, 30–50%) over de tomaten tijdens hittegolven', 'Boven 35 °C kunnen tomaten stoppen met vruchtzetting. Dat is normaal, en in september beginnen ze opnieuw', 'Let op wit poeder (meeldauw) op de butternutbladeren'],
  },
  8: {
    mood: 'Nog steeds heet, maar begin aan de herfst te denken.',
    lazy: 'Niets behalve water. Gaat er iets dood, dan begin je in oktober gewoon opnieuw.',
    plant: ['Herfstaardappelen, eind augustus'],
    harvest: ['Tomaten', 'Basilicum'],
    care: ['Blijf trouw water geven', 'Bestel of koop zaden en plantjes voor de herfst', 'Begin een composthoop voor het herfstopruimen'],
  },
  9: {
    mood: 'De nachten koelen af. Het tweede, makkelijkere seizoen begint.',
    lazy: 'Oogst de butternuts en laat ze een week in de zon liggen.',
    plant: ['Herfstaardappelen', 'Sla, peterselie en koriander zaaien'],
    harvest: ['Butternut: schil beige en hard, steel droog en kurkachtig', 'Laatste tomaten', 'Basilicum'],
    care: ['Laat butternuts 1–2 weken in de zon uitharden, dan blijven ze maanden goed', 'De eerste regen brengt slakken, dus bescherm de zaailingen', 'Ruim uitgeputte zomerplanten op'],
  },
  10: {
    mood: 'De beste plantmaand van het jaar. Warme grond en regen op komst.',
    lazy: 'Ruim op, compost erop, plant sla en kruiden. Het luie seizoen begint.',
    plant: ['Slaplantjes', 'Vaste kruiden (rozemarijn, tijm, oregano, salie)', 'Tuinbonen zaaien', 'Knoflook', 'Peterselie, koriander'],
    harvest: ['Laatste tomaten en butternuts (voor de eerste koude nachten)', 'Basilicum: oogst alles voor het koud wordt'],
    care: ['Trek de zomergewassen uit en zet ze op de compost', 'Werk compost in de bakken', 'Zet een regenton neer'],
  },
  11: {
    mood: 'Zacht en groen na de regen. Een ideale maand om met een tuin te beginnen.',
    lazy: 'Plant knoflook en tuinbonen en vergeet ze tot de lente.',
    plant: ['Knoflookteentjes, met de punt naar boven, 15 cm uit elkaar', 'Tuinbonen', 'Slaplantjes: een paar om de 2 weken', 'Peterselie, koriander, vaste kruiden'],
    harvest: ['Eerste sla', 'Kruiden', 'Herfstaardappelen (eind november–december)'],
    care: ['Herfstaardappelen aanaarden', "Raap 's avonds slakken op met een zaklamp", 'Bouw je eerste verhoogde bak, als je dat nog niet gedaan hebt!'],
  },
  12: {
    mood: 'Korte dagen, zachte zon. Weinig onderhoud.',
    lazy: 'Niets. De regen doet het werk.',
    plant: ['Knoflook (laatste kans)', 'Tuinbonen', 'Sla'],
    harvest: ['Herfstaardappelen', 'Sla', 'Peterselie, koriander, kruiden'],
    care: ['Geef enkel water als het 1–2 weken niet geregend heeft', 'Vul de mulch aan', 'Kies tomatenzaad om in februari binnen te zaaien (of koop in april gewoon plantjes)'],
  },
};
