import { useState, type ChangeEvent } from 'react';
import { POT_NEEDS } from '../data/misc';

function PotCalculator() {
  const [shape, setShape] = useState<'round' | 'box'>('round');
  const [dia, setDia] = useState(50);
  const [len, setLen] = useState(80);
  const [wid, setWid] = useState(40);
  const [depth, setDepth] = useState(40);

  const cm3 = shape === 'round' ? Math.PI * (dia / 2) ** 2 * depth : len * wid * depth;
  // Real pots taper and aren't filled to the brim, so take ~80% of the geometric volume.
  const litres = Math.round((cm3 / 1000) * 0.8);

  const num = (set: (n: number) => void) => (e: ChangeEvent<HTMLInputElement>) =>
    set(Math.max(0, Number(e.target.value) || 0));

  return (
    <div className="card">
      <h3>Potgrootte berekenen</h3>
      <p className="small muted">Vul de binnenmaten van je pot in en zie hoeveel aarde erin gaat en wat erin kan groeien.</p>
      <div className="pot-form">
        <label>
          Vorm
          <select value={shape} onChange={(e) => setShape(e.target.value as 'round' | 'box')}>
            <option value="round">Ronde pot</option>
            <option value="box">Rechthoekige bak</option>
          </select>
        </label>
        {shape === 'round' ? (
          <label>
            Diameter (cm)
            <input type="number" min={5} max={200} value={dia} onChange={num(setDia)} />
          </label>
        ) : (
          <>
            <label>
              Lengte (cm)
              <input type="number" min={5} max={300} value={len} onChange={num(setLen)} />
            </label>
            <label>
              Breedte (cm)
              <input type="number" min={5} max={200} value={wid} onChange={num(setWid)} />
            </label>
          </>
        )}
        <label>
          Diepte (cm)
          <input type="number" min={5} max={150} value={depth} onChange={num(setDepth)} />
        </label>
      </div>
      <div aria-live="polite">
        <div className="small muted">Inhoud ongeveer</div>
        <div className="pot-vol">{litres} liter</div>
        <div className="small muted">potgrond (rekening houdend met de tapse vorm en wat ruimte bovenaan)</div>
        {litres > 0 && litres < 30 && (
          <p className="small warn">Klein voor iemand die vaak weg is: dit droogt in de zomer snel uit.</p>
        )}
        <ul className="fit-list">
          {POT_NEEDS.map((c) => {
            const ok = litres >= c.litres && depth >= c.depth;
            const text = !ok
              ? depth < c.depth
                ? `moet ${c.depth} cm diep zijn`
                : `heeft ${c.litres} L nodig`
              : c.perItem
                ? `past ~${Math.floor(litres / c.litres)}`
                : c.note;
            return (
              <li key={c.name}>
                <span>{c.name}</span>
                <span className={ok ? 'fit-yes' : 'fit-no'}>
                  {ok && '✓ '}
                  {text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function Pots() {
  return (
    <section id="pots">
      <div className="wrap">
        <h2>Kweken in potten</h2>
        <p className="lead">
          Geen goede grond, of enkel een terras? Bijna alles groeit ook in potten. Maar potten drogen veel sneller uit
          dan een bak. Ben je vaak weg, kies dan voor <strong>weinig, maar hele grote potten</strong> (50+ liter), allemaal
          aangesloten op het druppelsysteem.
        </p>
        <div className="grid grid-2">
          <PotCalculator />
          <div className="card">
            <h3>Vijf regels voor potten in een warm klimaat</h3>
            <ol className="rules">
              <li>
                <strong>
                  Gebruik potgrond uit een zak (<em>sustrato</em>), nooit tuinaarde.
                </strong>{' '}
                Tuinaarde, zeker de lokale klei, wordt in een pot keihard en verstikt de wortels.
              </li>
              <li>
                <strong>Hoe groter, hoe beter.</strong> Een kleine pot droogt op één julinamiddag uit. Een grote houdt het
                dagen vol.
              </li>
              <li>
                <strong>Vermijd donker plastic in de volle zon.</strong> Het warmt op en kookt de wortels. Licht plastic,
                hout of geglazuurde potten blijven koeler en verdampen minder dan terracotta of stof.
              </li>
              <li>
                <strong>Mulch de bovenkant</strong> met 3–5 cm stro, schors of grind.
              </li>
              <li>
                <strong>Elke pot op de druppelslang.</strong> Eén druppelaar per pot, en twee voor de grootste.
              </li>
            </ol>
            <p className="small muted" style={{ margin: 0 }}>
              Elke pot heeft afvoergaten nodig. Laat een pot nooit in een schotel vol water staan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
