import { Veg } from './Veg';

const NAV = [
  ['#lazy', 'Het luie systeem'],
  ['#now', 'Deze maand'],
  ['#crops', 'Gewassen'],
  ['#calendar', 'Kalender'],
  ['#climate', 'Klimaat'],
  ['#pots', 'Potten'],
  ['#bed', 'Eerste bak'],
  ['#start', 'Checklist'],
  ['#words', 'Spaanse woorden'],
] as const;

export function Header() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-in">
          <div>
            <div className="hand">een moestuin die zichzelf redt</div>
            <h1>Planten &amp; vergeten</h1>
            <p className="hero-lead">
              Een moestuin voor wie er niets van kent, weinig tijd heeft en vaak weg is. Tomaten, aardappelen, butternut,
              sla en kruiden met zo weinig werk als mogelijk, dankzij een systeem dat werkt terwijl jij er niet bent.
            </p>
          </div>
          <div className="veg-row">
            <Veg kind="tomato" size={72} />
            <Veg kind="pumpkin" size={72} />
            <Veg kind="leaf" size={72} />
          </div>
        </div>
        <nav className="toc" aria-label="Inhoud">
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
