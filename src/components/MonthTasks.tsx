import { useState } from 'react';
import { ALL_MONTHS, MONTHS_FULL, MONTHS_SHORT, currentMonth, type Month } from '../data/months';
import { TASKS } from '../data/tasks';
import { Veg, type VegKind } from './Veg';

const MONTH_VEG: Record<Month, VegKind> = {
  1: 'lettuce', 2: 'potato', 3: 'leaf', 4: 'tomato', 5: 'basil', 6: 'tomato',
  7: 'tomato', 8: 'tomato', 9: 'pumpkin', 10: 'lettuce', 11: 'garlic', 12: 'herb',
};

function TaskList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export function MonthTasks() {
  const now = currentMonth();
  const [selected, setSelected] = useState<Month>(now);
  const t = TASKS[selected];

  return (
    <section id="now">
      <div className="wrap">
        <h2>Wat te doen deze maand</h2>
        <p className="muted">De pagina opent op de huidige maand. Kies een andere maand om vooruit te kijken.</p>
        <div className="month-picker" role="group" aria-label="Kies een maand">
          {ALL_MONTHS.map((m) => (
            <button
              key={m}
              type="button"
              className={m === now ? 'is-now' : undefined}
              aria-pressed={m === selected}
              onClick={() => setSelected(m)}
            >
              {MONTHS_SHORT[m - 1]}
            </button>
          ))}
        </div>
        <div className="card month-panel" aria-live="polite">
          <h3>
            {MONTHS_FULL[selected - 1]}
            {selected === now && <span className="badge">nu</span>}
          </h3>
          <p className="muted">{t.mood}</p>
          <div className="lazy-box">
            <Veg kind={MONTH_VEG[selected]} size={52} />
            <div>
              <span className="lazy-label">Het minimum</span>
              {t.lazy}
            </div>
            <span className="hand lazy-note">dat is alles!</span>
          </div>
          <details className="more">
            <summary>Meer doen als je er bent en zin hebt</summary>
            <div className="task-cols">
              <TaskList title="Planten / zaaien" items={t.plant} />
              <TaskList title="Oogsten" items={t.harvest} />
              <TaskList title="Klusjes" items={t.care} />
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
