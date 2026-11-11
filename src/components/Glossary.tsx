import { GLOSSARY } from '../data/misc';

export function Glossary() {
  return (
    <section id="words">
      <div className="wrap">
        <h2>Spaanse tuinwoorden</h2>
        <p className="lead">
          Handig in de vivero, op de markt, of wanneer de buurman over de muur leunt met goede raad. En er is altijd goede
          raad.
        </p>
        <dl className="gloss">
          {GLOSSARY.map(([es, nl]) => (
            <div key={es}>
              <dt>{es}</dt>
              <dd>{nl}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
