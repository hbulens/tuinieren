import { CALENDAR } from '../data/calendar';
import { ALL_MONTHS, MONTHS_FULL, MONTHS_SHORT, currentMonth } from '../data/months';

export function PlantingCalendar() {
  const now = currentMonth();
  return (
    <section id="calendar">
      <div className="wrap">
        <h2>Zaaikalender</h2>
        <p className="lead">
          De periodes zijn bij benadering en schuiven een week of twee op met het weer. De huidige maand is gemarkeerd.
        </p>
        <div className="cal-scroll">
          <table className="cal">
            <thead>
              <tr>
                <th scope="col">Gewas</th>
                {ALL_MONTHS.map((m) => (
                  <th scope="col" key={m} className={m === now ? 'now' : undefined}>
                    {MONTHS_SHORT[m - 1]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CALENDAR.map((row) => (
                <tr key={row.name}>
                  <td>
                    {row.name}
                    {row.bonus && <span className="bonus-tag">makkelijk extraatje voor de winter</span>}
                    <span className="crop-es">{row.es}</span>
                  </td>
                  {ALL_MONTHS.map((m) => {
                    const acts = [
                      row.sow?.includes(m) && 'sow',
                      row.plant?.includes(m) && 'plant',
                      row.harvest?.includes(m) && 'harvest',
                    ].filter(Boolean) as ('sow' | 'plant' | 'harvest')[];
                    const nl = { sow: 'zaaien', plant: 'uitplanten', harvest: 'oogsten' };
                    const title = acts.length
                      ? `${row.name}, ${MONTHS_FULL[m - 1].toLowerCase()}: ${acts.map((a) => nl[a]).join(', ')}`
                      : undefined;
                    return (
                      <td key={m} className={m === now ? 'now' : undefined} title={title}>
                        <div className="bars" aria-label={title}>
                          {acts.map((a) => (
                            <div key={a} className={`bar ${a}`} />
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="legend">
          <span>
            <i style={{ background: 'var(--sow)' }} />
            Zaaien
          </span>
          <span>
            <i style={{ background: 'var(--plant)' }} />
            Uitplanten (plantjes, pootaardappelen, teentjes)
          </span>
          <span>
            <i style={{ background: 'var(--harvest)' }} />
            Oogsten
          </span>
        </div>
      </div>
    </section>
  );
}
