import { CHECKLIST } from '../data/misc';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Bump the key whenever the list itself changes, since ticks are stored by index.
const STORE_KEY = 'huerto-vinuela-checklist-v2';

export function Checklist() {
  const [done, setDone] = useLocalStorage<Record<number, boolean>>(STORE_KEY, {});
  const count = CHECKLIST.filter((_, i) => done[i]).length;

  return (
    <section id="start">
      <div className="wrap">
        <h2>Checklist om te starten</h2>
        <p className="muted">In volgorde: eerst het systeem, dan de planten. Je vinkjes worden in deze browser bewaard.</p>
        <div className="card" style={{ maxWidth: 720 }}>
          <div className="small muted">
            {count} van {CHECKLIST.length} gedaan
          </div>
          <div className="progress">
            <div style={{ width: `${(count / CHECKLIST.length) * 100}%` }} />
          </div>
          <ul className="checklist">
            {CHECKLIST.map((item, i) => (
              <li key={item}>
                <input
                  type="checkbox"
                  id={`ck${i}`}
                  checked={!!done[i]}
                  onChange={(e) => setDone({ ...done, [i]: e.target.checked })}
                />
                <label htmlFor={`ck${i}`}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
