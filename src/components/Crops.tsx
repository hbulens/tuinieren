import { CROPS, type Crop } from '../data/crops';
import { Rich } from './Rich';
import { Veg } from './Veg';

const LAZY_LABEL: Record<Crop['lazy'], string> = {
  3: 'Overleeft verwaarlozing',
  2: 'Redt zich met druppelsysteem',
  1: 'Vraagt wat aandacht',
};

function LazyScore({ level }: { level: Crop['lazy'] }) {
  return (
    <div className="lazy-score" aria-label={`Luiheidsscore ${level} van 3: ${LAZY_LABEL[level]}`}>
      <span className="dots" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <i key={i} className={i <= level ? 'on' : undefined} />
        ))}
      </span>
      {LAZY_LABEL[level]}
    </div>
  );
}

function CropCard({ crop }: { crop: Crop }) {
  return (
    <article className="card crop">
      <div className="crop-head">
        <Veg kind={crop.icon} size={64} />
        <div>
          <h3>{crop.name}</h3>
          <div className="es">{crop.es}</div>
          <LazyScore level={crop.lazy} />
        </div>
      </div>
      <div className="tip lazy-tip">
        <strong>De luie manier:</strong> <Rich text={crop.lazyNote} />
      </div>
      <dl className="stats">
        {crop.stats.map((s) => (
          <div key={s.label} style={{ display: 'contents' }}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>
      <details className="more">
        <summary>Volledige uitleg</summary>
        <h4>Zo kweek je het</h4>
        <ol>
          {crop.steps.map((s) => (
            <li key={s}>
              <Rich text={s} />
            </li>
          ))}
        </ol>
        <h4>Wanneer is het klaar</h4>
        <p className="body-sm">{crop.harvest}</p>
        <h4>Wat er misgaat</h4>
        <ul>
          {crop.problems.map((s) => (
            <li key={s}>
              <Rich text={s} />
            </li>
          ))}
        </ul>
        <h4>Rassen om naar te zoeken</h4>
        <p className="body-sm">{crop.varieties}</p>
        <div className="tip">
          <strong>Tip:</strong> {crop.tip}
        </div>
      </details>
    </article>
  );
}

export function Crops() {
  const sorted = [...CROPS].sort((a, b) => b.lazy - a.lazy);
  return (
    <section id="crops">
      <div className="wrap">
        <h2>Gewassen</h2>
        <p className="lead">
          Gesorteerd van luiste naar meest veeleisende. Per gewas de luie manier om het te kweken; de volledige uitleg
          staat eronder voor wie meer wil weten.
        </p>
        <div className="grid grid-2">
          {sorted.map((c) => (
            <CropCard key={c.name} crop={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
