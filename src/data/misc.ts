/** Getting-started checklist. Order matters: ticks are stored by index. */
export const CHECKLIST: string[] = [
  'Kies een zonnig plekje vlak bij een kraan (6+ uur zon)',
  'Bouw of koop één verhoogde bak (~1,2 × 2,4 m). Een bak droogt veel trager uit dan losse potten',
  'Vul hem met compost of goed verteerde mest (estiércol). Niet spitten: gewoon bovenop leggen',
  'Zet er een hek rond als er wilde zwijnen of konijnen in de buurt zijn',
  'Leg druppelbevloeiing aan met een kraantimer, en test hem een week voor je weggaat',
  'Koop een grote baal stro (paja) en leg overal 10 cm',
  'Plant een rozemarijn, tijm en oregano: die overleven alles',
  'Plant knoflook en zaai tuinbonen (okt–nov) en vergeet ze tot de lente',
  'Plant pluksla in de herfst',
  'Poot aardappelen in februari',
  'Plant kerstomaten vanaf half april en basilicum in mei, op de druppelslang',
  'Zaai butternut in mei',
];

/** Spanish → Dutch garden vocabulary. */
export const GLOSSARY: [es: string, nl: string][] = [
  ['huerto', 'moestuin'], ['vivero', 'kwekerij / tuincentrum'], ['plantón (plantones)', 'jonge plant(jes), zaailingen'],
  ['semilla', 'zaad'], ['patata de siembra', 'pootaardappel'], ['abono', 'meststof'], ['estiércol', 'mest'],
  ['compost / mantillo', 'compost / potgrond'], ['sustrato', 'potgrond'], ['riego por goteo', 'druppelbevloeiing'],
  ['programador de riego', 'bevloeiingstimer'], ['acolchado', 'mulch'], ['paja', 'stro'], ['malla de sombreo', 'schaduwnet'],
  ['caña / tutor', 'stok / steunpaal'], ['entutorar', 'opbinden / steunen'], ['aporcar', 'aanaarden (aardappelen)'],
  ['chupones', 'dieven (zijscheuten van tomaat)'], ['espigarse', 'doorschieten'], ['bancal', 'verhoogde bak / terras'],
  ['azada', 'schoffel'], ['regadera', 'gieter'], ['caracol / babosa', 'huisjesslak / naaktslak'], ['pulgón', 'bladluis'],
  ['mosca blanca', 'witte vlieg'], ['oídio', 'echte meeldauw'], ['mildiu', 'valse meeldauw / phytophthora'], ['jabalí', 'wild zwijn'],
];

export interface PotNeed {
  name: string;
  /** Minimum practical soil volume in litres, for a hot climate. */
  litres: number;
  /** Minimum depth in cm. */
  depth: number;
  note: string;
  /** If true, show how many fit instead of the note. */
  perItem?: boolean;
}

export const POT_NEEDS: PotNeed[] = [
  { name: 'Tijm', litres: 3, depth: 15, note: '1 plant' },
  { name: 'Basilicum', litres: 4, depth: 20, note: '1 plant' },
  { name: 'Sla', litres: 3, depth: 15, note: 'per krop', perItem: true },
  { name: 'Peterselie / koriander', litres: 4, depth: 20, note: 'een kleine pol' },
  { name: 'Munt', litres: 10, depth: 25, note: 'apart' },
  { name: 'Rozemarijn', litres: 12, depth: 30, note: '1 plant' },
  { name: 'Kerstomaat', litres: 20, depth: 30, note: '1 plant' },
  { name: 'Grote tomaat', litres: 30, depth: 35, note: '1 plant' },
  { name: 'Aardappelen', litres: 40, depth: 40, note: '3–4 pootaardappelen' },
  { name: 'Butternut', litres: 60, depth: 40, note: '1 plant, lastig in een pot' },
];
