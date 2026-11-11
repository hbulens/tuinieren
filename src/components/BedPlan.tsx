export function BedPlan() {
  return (
    <section id="bed">
      <div className="wrap">
        <h2>Voorbeeld voor je eerste bak (1,2 × 2,4 m)</h2>
        <p className="lead">
          Dezelfde bak werkt het hele jaar: wintergewassen in de herfst, zomergewassen in de lente. Leg er één
          druppelslang in een slinger doorheen, en laat die gewoon liggen onder het stro. Zet tomaten of aardappelen niet
          twee jaar na elkaar op dezelfde plek (ze zijn familie en delen ziektes).
        </p>
        <div className="grid grid-2">
          <div className="card">
            <h3>
              Winterindeling <span className="muted small">(planten okt–nov)</span>
            </h3>
            <div className="bed" aria-label="Winterplan voor de bak">
              <div className="f span2">Tuinbonen (habas)</div>
              <div className="g span2">Knoflook (ajo)</div>
              <div className="l">Pluksla</div>
              <div className="l">Pluksla</div>
              <div className="l">Pluksla</div>
              <div className="l">Pluksla</div>
              <div className="h">Peterselie</div>
              <div className="h">Koriander</div>
              <div className="h span2">Rozemarijn / tijm (blijven staan)</div>
            </div>
            <p className="small muted" style={{ marginTop: 12 }}>
              Plant alles in één keer en laat de regen het werk doen. Van de pluksla oogst je wekenlang.
            </p>
          </div>
          <div className="card">
            <h3>
              Zomerindeling <span className="muted small">(planten half april–mei)</span>
            </h3>
            <div className="bed" aria-label="Zomerplan voor de bak">
              <div className="t">Kerstomaat</div>
              <div className="b">Basilicum</div>
              <div className="t">Kerstomaat</div>
              <div className="b">Basilicum</div>
              <div className="t">Kerstomaat</div>
              <div className="b">Basilicum</div>
              <div className="t">Kerstomaat</div>
              <div className="h">Oregano</div>
              <div className="p span2">Aardappelen (feb–jul)</div>
              <div className="h span2">Rozemarijn / tijm (blijven staan)</div>
            </div>
            <p className="small muted" style={{ marginTop: 12 }}>
              Butternut neemt 1–2 m² per plant in: geef hem een eigen plekje naast de bak met één druppelaar, en laat hem
              zijn gang gaan. Basilicum tussen de tomaten deelt hun water, zo droogt hij niet uit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
