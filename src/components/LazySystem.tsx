const PILLARS = [
  {
    title: '1. Automatisch water',
    body: (
      <>
        Het enige wat <strong>echt niet</strong> optioneel is. Een <strong>druppelslang met een kraantimer</strong>{' '}
        (<em>riego por goteo + programador</em>, zo'n €40–60 in elk tuincentrum) geeft elke ochtend water, of je er
        nu bent of niet. Zonder dit overleeft in juli niets een week zonder jou.
      </>
    ),
  },
  {
    title: '2. Dikke mulch',
    body: (
      <>
        Leg <strong>10 cm stro</strong> (<em>paja</em>) op alle kale grond. Eén keer per seizoen, en daarna houdt het
        de grond koel en vochtig, houdt het onkruid weg, en heb je tot de helft minder water nodig. Wieden wordt bijna
        overbodig.
      </>
    ),
  },
  {
    title: '3. Niet spitten',
    body: (
      <>
        Spitten is werk dat je kunt overslaan. Leg elke herfst gewoon een laag <strong>compost of verteerde mest</strong>{' '}
        bovenop. Wormen werken het voor je onder. Dit heet <em>no-dig</em> en het werkt beter dan spitten.
      </>
    ),
  },
  {
    title: '4. Groot in plaats van veel',
    body: (
      <>
        Eén <strong>verhoogde bak</strong> of een paar <strong>hele grote potten</strong> (50+ liter). Kleine potten
        drogen op één julinamiddag uit. Grote volumes aarde houden het dagen vol.
      </>
    ),
  },
  {
    title: '5. Koop plantjes',
    body: (
      <>
        Zaaien vraagt aandacht op het verkeerde moment. Jonge plantjes (<em>plantones</em>) uit de vivero kosten bijna
        niets en slaan meteen aan. Enkel butternut en tuinbonen zaai je, want die zijn makkelijk.
      </>
    ),
  },
  {
    title: '6. Kies vergevingsgezinde gewassen',
    body: (
      <>
        Vaste kruiden, aardappelen, butternut, knoflook en tuinbonen redden zich prima zonder jou. Kijk bij de
        gewassen naar de <strong>luiheidsscore</strong>. En als er iets doodgaat: geen drama, volgend seizoen opnieuw.
      </>
    ),
  },
];

export function LazySystem() {
  return (
    <section id="lazy">
      <div className="wrap">
        <h2>Het luie systeem</h2>
        <p className="lead">
          Wie weinig tijd heeft, moet het werk niet sneller doen maar het werk wegnemen. Zet deze zes dingen één keer
          goed op, en de tuin heeft je daarna amper nodig.
        </p>
        <div className="grid grid-3">
          {PILLARS.map((p) => (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-2" style={{ marginTop: 16 }}>
          <div className="card">
            <h3>Voor je vertrekt</h3>
            <ul>
              <li>Test de druppelbevloeiing: draait hij, en komt er bij elke plant water uit?</li>
              <li>
                Steek een <strong>nieuwe batterij</strong> in de timer. Een lege batterij is de nummer één oorzaak van een
                dode tuin.
              </li>
              <li>Zet in de zomer de timer iets ruimer (langer of vaker) dan wanneer je er bent.</li>
              <li>Vul de mulch aan waar je grond ziet.</li>
              <li>Oogst alles wat rijp of bijna rijp is.</li>
              <li>Een buur die af en toe kijkt (en mag oogsten) is goud waard.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Wat je mag overslaan</h3>
            <ul>
              <li>Tomaten dieven en netjes aanbinden: een kooi of rek, en laat ze groeien.</li>
              <li>Elke 2 weken sla bijplanten: kies pluksla en pluk gewoon wekenlang van dezelfde planten.</li>
              <li>Zelf zaaien op de vensterbank: koop plantjes.</li>
              <li>Pompoenen met de hand bestuiven: de bijen doen het meestal wel.</li>
              <li>Aardappelen aanaarden: leg er gewoon een dikke laag stro op.</li>
              <li>
                <strong>Ben je in de zomer lang weg?</strong> Sla de zomergewassen dan gewoon over en houd het bij de
                herfst en winter. Dat is hier toch het makkelijkste seizoen.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
