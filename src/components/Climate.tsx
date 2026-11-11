const FACTS = [
  ['~15–17 °C', 'overdag in de winter. Sla en kruiden doen het hier prima mee'],
  ['32–38 °C', 'in de zomer. Boven ~35 °C zetten tomaten geen vruchten meer'],
  ['Lichte vorst', 'kan op een paar heldere, windstille nachten in jan–feb'],
  ['Okt → apr', 'bijna alle regen valt in deze periode'],
  ['Jun → sep', 'zo goed als geen regen, dus alles hangt aan je druppelsysteem'],
  ['Terral', 'een hete, droge wind uit het noorden die planten op één dag kan verschroeien'],
] as const;

export function Climate() {
  return (
    <section id="climate">
      <div className="wrap">
        <h2>Het klimaat hier</h2>
        <p className="lead">
          Het is hier iets koeler dan aan de kust: in de lente wacht je beter tot half april met de zomergewassen, en in de
          winter kan het af en toe licht vriezen. Verder geldt het mediterrane ritme: <strong>de winter is hier het luie seizoen, en de zomer is het moeilijke.</strong>{' '}
          In de winter geeft de regen gratis water; in de zomer valt er maandenlang geen druppel.
        </p>
        <div className="facts">
          {FACTS.map(([big, small]) => (
            <div className="fact" key={big}>
              <b>{big}</b>
              <span>{small}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-2">
          <div className="card">
            <h3>Wat dit voor jou betekent</h3>
            <ul>
              <li>
                <strong>Plant sla, kruiden, tuinbonen en knoflook in de herfst</strong> (okt–nov). Ze groeien door de
                zachte winter op regenwater. Dit is lui tuinieren op zijn best.
              </li>
              <li>
                <strong>Plant tomaten, basilicum en pompoen in de late lente</strong> (half april–mei). Eerder is
                riskant: één koude nacht zet ze weken terug.
              </li>
              <li>
                <strong>Aardappelen hebben twee seizoenen:</strong> poten in feb–mrt (oogst jun–jul) of in aug–sep (oogst
                nov–dec).
              </li>
              <li>
                <strong>In juli en augustus plant je niets.</strong> Het druppelsysteem en de mulch houden alles in leven.
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Lokale aandachtspunten</h3>
            <ul>
              <li>
                <strong>Water is schaars.</strong> De streek heeft zware droogtes gekend en de stuwmeren stonden erg
                laag. Druppelbevloeiing en mulch besparen water én werk.
              </li>
              <li>
                <strong>Wilde zwijnen (jabalí) en konijnen</strong> plunderen tuinen op het platteland, zeker als je er
                niet bent. Een stevig hek, een stukje ingegraven, beschermt maanden werk.
              </li>
              <li>
                <strong>Slakken</strong> komen massaal tevoorschijn na de eerste herfstregens.
              </li>
              <li>
                <strong>Wind.</strong> Een open plek vangt veel wind, ook de terral. Kies een plek in de luwte van
                het huis of een muur, en zet tomaten in een stevige kooi in plaats van aan een losse stok.
              </li>
              <li>
                <strong>De grond</strong> op de hellingen is vaak steenachtige leisteen (pizarra) of zware klei. Een
                verhoogde bak met goede aarde lost dat in één keer op.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
