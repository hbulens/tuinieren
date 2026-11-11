import type { Month } from './months';

export interface CalendarRow {
  name: string;
  /** Spanish name, handy at the vivero. */
  es: string;
  /** Easy winter extra that the user didn't originally ask for. */
  bonus?: boolean;
  sow?: Month[];
  plant?: Month[];
  harvest?: Month[];
}

// Approximate timings for an inland hillside garden in southern Spain:
// roughly 2 weeks later in spring than the coast, with occasional light frost in Jan–Feb.
export const CALENDAR: CalendarRow[] = [
  { name: 'Tomaten', es: 'tomate', sow: [2, 3], plant: [4, 5], harvest: [7, 8, 9, 10] },
  { name: 'Aardappelen', es: 'patata', plant: [2, 3, 8, 9], harvest: [6, 7, 11, 12] },
  { name: 'Basilicum', es: 'albahaca', sow: [4, 5], plant: [5, 6], harvest: [6, 7, 8, 9, 10] },
  { name: 'Butternutpompoen', es: 'calabaza', sow: [5, 6], plant: [5, 6], harvest: [8, 9, 10] },
  { name: 'Sla', es: 'lechuga', sow: [9, 10, 11, 12, 1, 2, 3], plant: [10, 11, 12, 1, 2, 3, 4], harvest: [11, 12, 1, 2, 3, 4, 5] },
  { name: 'Rozemarijn, tijm, oregano, salie', es: 'hierbas perennes', plant: [10, 11, 2, 3], harvest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { name: 'Peterselie & koriander', es: 'perejil y cilantro', sow: [9, 10, 11, 2, 3], harvest: [11, 12, 1, 2, 3, 4, 5] },
  { name: 'Knoflook', es: 'ajo', bonus: true, plant: [11, 12], harvest: [5, 6] },
  { name: 'Tuinbonen', es: 'habas', bonus: true, sow: [10, 11, 12], harvest: [2, 3, 4] },
];
