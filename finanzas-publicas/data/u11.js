window.CURSO.unidades.push({
  id: 11,
  numero: "XI",
  titulo: "Federalismo Fiscal",
  bibliografia: [
    "Jarach, D. (2013) Parte II, Caps. III y IV",
    "Villegas, H. B. (2021) Cap. X",
    "Vizcaíno, C. (2017) Cap. IV",
    "Stiglitz & Rosengard (2016) 6ª parte, pto. 22"
  ],
  temas: [
    {
      id: "11.1",
      titulo: "La Teoría del Federalismo Fiscal. Concepto. Modelos",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Federalismo fiscal:</b> rama de las finanzas públicas que estudia la <strong>distribución de funciones, gastos y recursos entre los distintos niveles de gobierno</strong> (nacional, provincial/estadual y municipal) y las relaciones financieras entre ellos.</div>
<p>Surge porque en un Estado <strong>federal</strong> conviven varios centros de decisión con poder de gasto y de recursos: hay que decidir <em>qué hace cada nivel</em> y <em>con qué recursos</em>.</p>

<h3>¿Por qué descentralizar? (fundamento)</h3>
<p>La pregunta central: ¿qué conviene proveer de forma <strong>centralizada</strong> y qué de forma <strong>descentralizada</strong>? La teoría (Oates, Musgrave) sugiere asignar cada <strong>función económica del Estado</strong> al nivel más apropiado:</p>
<ul>
  <li><strong>Estabilización y distribución → nivel central (Nación):</strong> requieren manejo de la macroeconomía, la moneda y evitar la "competencia" entre jurisdicciones (si una provincia redistribuye sola, los ricos se van y los pobres llegan).</li>
  <li><strong>Asignación de bienes públicos locales → niveles subnacionales:</strong> los gobiernos locales conocen mejor las <em>preferencias</em> de su población y pueden adaptar la provisión.</li>
</ul>

<h3>Modelos de organización fiscal</h3>
<ul>
  <li><strong>Estado unitario:</strong> un solo centro de poder fiscal; las divisiones administrativas ejecutan, no deciden.</li>
  <li><strong>Estado federal:</strong> varios niveles con autonomía y poder tributario propio (Argentina, EE.UU., Brasil, Alemania).</li>
  <li><strong>Confederación:</strong> los estados conservan la soberanía y delegan poco (forma laxa).</li>
</ul>
<p>Dentro del federalismo, los modelos varían según el grado de <strong>centralización</strong> de los recursos y la <strong>autonomía</strong> de los niveles subnacionales.</p>
`
    },
    {
      id: "11.2",
      titulo: "Teoría de la Descentralización Óptima. Ventajas y desventajas. Distribución de gastos e impuestos",
      contenido: `
<h3>El teorema de la descentralización (Oates)</h3>
<div class="callout">En ausencia de economías de escala y de externalidades entre jurisdicciones, es <strong>más eficiente</strong> que cada bien público local sea provisto por el <strong>nivel de gobierno que abarca exactamente</strong> a la población beneficiada, ajustándose a sus preferencias, antes que una provisión uniforme central.</div>

<h3>Ventajas de la descentralización</h3>
<ul>
  <li><strong>Mejor adaptación a las preferencias locales</strong> (eficiencia asignativa): cada comunidad elige el nivel de bienes y servicios que desea y está dispuesta a pagar.</li>
  <li><strong>Cercanía y mejor información</strong> sobre las necesidades.</li>
  <li><strong>Mayor control y responsabilidad</strong> (accountability): el ciudadano vincula lo que paga con lo que recibe.</li>
  <li><strong>"Votar con los pies" (Tiebout):</strong> las personas se mudan a la jurisdicción cuya combinación de impuestos y servicios prefieren, lo que revela preferencias y disciplina a los gobiernos.</li>
  <li><strong>Competencia e innovación</strong> entre jurisdicciones ("laboratorios").</li>
</ul>

<h3>Desventajas / límites</h3>
<ul>
  <li><strong>Externalidades interjurisdiccionales (spillovers):</strong> beneficios o costos que "derraman" a otras jurisdicciones (una provincia no internaliza los beneficios que su gasto da a vecinas → subprovee).</li>
  <li><strong>Pérdida de economías de escala.</strong></li>
  <li>Dificulta la <strong>redistribución</strong> y la <strong>estabilización</strong> (deben ser centrales).</li>
  <li><strong>Competencia tributaria nociva</strong> ("carrera hacia el fondo": bajar impuestos para atraer inversiones, erosionando bases).</li>
  <li>Riesgo de <strong>inequidades regionales</strong> (jurisdicciones ricas vs. pobres) y de comportamiento fiscal irresponsable si hay rescates ("riesgo moral").</li>
</ul>

<h3>Criterios normativos de asignación</h3>
<ul>
  <li><strong>Gastos:</strong> asignar cada función al nivel cuyo alcance coincida con el área de beneficio (principio de <em>correspondencia</em>); estabilización y distribución al centro.</li>
  <li><strong>Impuestos:</strong> al nivel central conviene asignar los <em>móviles</em>, <em>redistributivos</em> y <em>cíclicos</em> (renta, comercio exterior); a los niveles locales, los de <strong>base inmóvil</strong> (inmobiliario, automotor, tasas) y los basados en el <strong>principio del beneficio</strong>.</li>
</ul>
`
    },
    {
      id: "11.3",
      titulo: "Transferencias intergubernamentales. Modalidades",
      contenido: `
<h3>¿Por qué existen las transferencias?</h3>
<p>Porque la distribución de <strong>recursos</strong> (concentrados en la Nación) no coincide con la de <strong>gastos</strong> (descentralizados). Las transferencias del nivel central a los subnacionales corrigen ese desfase y persiguen equidad y eficiencia.</p>

<h3>Desequilibrios que justifican las transferencias</h3>
<ul>
  <li><strong>Desequilibrio fiscal vertical:</strong> brecha entre lo que un nivel <em>recauda</em> y lo que <em>gasta</em>. En Argentina, las provincias gastan mucho más de lo que recaudan por sí mismas → dependen de transferencias.</li>
  <li><strong>Desequilibrio fiscal horizontal:</strong> diferencias de capacidad fiscal y de necesidades <em>entre</em> jurisdicciones del mismo nivel (provincias ricas vs. pobres). Justifica transferencias de <strong>nivelación/equidad</strong>.</li>
</ul>

<h3>Modalidades de transferencias</h3>
<table>
  <tr><th>Criterio</th><th>Tipos</th></tr>
  <tr><td><strong>Según condicionamiento</strong></td><td><strong>Condicionadas (atadas):</strong> deben usarse en un fin determinado (ej.: para educación). <strong>No condicionadas (libres):</strong> el receptor las usa con libertad (la coparticipación es de este tipo).</td></tr>
  <tr><td><strong>Según contrapartida</strong></td><td><strong>Con contrapartida (matching):</strong> el receptor debe aportar fondos propios (el centro "iguala"). Incentivan el gasto local en el fin deseado. <strong>Sin contrapartida.</strong></td></tr>
  <tr><td><strong>Según monto</strong></td><td><strong>Con límite (capped)</strong> o <strong>sin límite.</strong></td></tr>
  <tr><td><strong>Según automaticidad</strong></td><td><strong>Automáticas</strong> (por ley, como la coparticipación) o <strong>discrecionales</strong> (decididas caso a caso por el Ejecutivo nacional — ATN, obras).</td></tr>
</table>
<div class="callout"><strong>Efectos:</strong> las transferencias <em>no condicionadas</em> operan como un aumento de la renta del gobierno local (efecto renta); las <em>condicionadas con contrapartida</em> alteran precios relativos e incentivan ese gasto (efecto sustitución). Las <strong>discrecionales</strong> pueden usarse políticamente y debilitan la previsibilidad y la autonomía.</div>
`
    },
    {
      id: "11.4",
      titulo: "Mecanismos de coordinación financiera. Correspondencia fiscal",
      contenido: `
<p>Como Nación y provincias tienen <strong>poderes tributarios concurrentes</strong> (sobre todo en impuestos indirectos internos), se necesitan mecanismos para <strong>coordinar</strong> y evitar la doble o múltiple imposición.</p>

<h3>Mecanismos de coordinación financiera</h3>
<ul>
  <li><strong>Separación de fuentes:</strong> se asigna a cada nivel <em>fuentes tributarias exclusivas</em> (un impuesto, un solo nivel). Da autonomía pero es rígido y difícil de aplicar con tributos importantes.</li>
  <li><strong>Concurrencia:</strong> cada nivel grava libremente las mismas fuentes. Máxima autonomía, pero genera <strong>doble imposición</strong>, presión excesiva y desorden.</li>
  <li><strong>Participación / coparticipación:</strong> un nivel (la Nación) recauda ciertos impuestos y <strong>distribuye lo recaudado</strong> según pautas. Es el sistema central argentino (ver 11.5). Evita la doble imposición pero reduce la correspondencia.</li>
  <li><strong>Cuotas suplementarias (sobretasas / "tax sharing"):</strong> un nivel fija el impuesto base y otro puede agregar una alícuota adicional sobre la misma base.</li>
  <li><strong>Asignaciones globales (transferencias):</strong> el centro entrega sumas a los niveles inferiores (condicionadas o no).</li>
  <li><strong>Créditos por impuestos pagados / deducciones.</strong></li>
</ul>

<h3>Correspondencia fiscal</h3>
<div class="def"><b>Correspondencia fiscal:</b> el grado en que un nivel de gobierno <strong>financia sus propios gastos con recursos que él mismo recauda</strong> (y por los que es políticamente responsable ante sus ciudadanos).</div>
<ul>
  <li><strong>Alta correspondencia:</strong> el gobierno que <em>gasta</em> es el mismo que <em>cobra el impuesto</em> → el ciudadano controla mejor (paga y exige), hay incentivo a gastar bien y a recaudar.</li>
  <li><strong>Baja correspondencia</strong> (caso argentino): las provincias gastan con fondos que recauda la Nación (coparticipación) → se rompe el vínculo "pago-recibo", se diluye la responsabilidad, hay incentivo a gastar de más (el costo político de recaudar lo paga otro) y a presionar por más transferencias ("ilusión fiscal" y "problema de los recursos comunes").</li>
</ul>
<p class="muted">La baja correspondencia fiscal es uno de los problemas estructurales del federalismo argentino: separa la decisión de gastar de la responsabilidad de recaudar.</p>
`
    },
    {
      id: "11.5",
      titulo: "Regímenes de Coparticipación Federal. Aspectos constitucionales. Ley actual",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Coparticipación federal de impuestos:</b> sistema por el cual la <strong>Nación recauda</strong> determinados impuestos (nacionales) y <strong>distribuye lo recaudado</strong> entre la Nación, las provincias y la CABA, conforme a una ley-convenio.</div>

<h3>Dos etapas de distribución</h3>
<ul>
  <li><strong>Distribución primaria:</strong> reparto de la masa coparticipable <strong>entre la Nación y el conjunto de las provincias</strong> (+ CABA).</li>
  <li><strong>Distribución secundaria:</strong> reparto de la parte provincial <strong>entre las distintas provincias</strong>, según coeficientes.</li>
</ul>

<h3>Aspectos constitucionales (reforma de 1994 — art. 75 inc. 2)</h3>
<p>La reforma de 1994 dio <strong>jerarquía constitucional</strong> a la coparticipación y fijó pautas:</p>
<ul>
  <li>Las contribuciones <strong>indirectas</strong> son concurrentes (Nación y provincias); las <strong>directas</strong> nacionales (por excepción) y otras son coparticipables (salvo afectación específica).</li>
  <li>Debe dictarse una <strong>ley-convenio</strong>, con base en <strong>acuerdos entre Nación y provincias</strong>, que tenga al <strong>Senado como cámara de origen</strong>, se apruebe por <strong>mayoría absoluta</strong> de cada cámara, <strong>no pueda ser modificada unilateralmente</strong> ni reglamentada, y sea ratificada por las provincias.</li>
  <li>La distribución debe ser <strong>equitativa, solidaria y dar prioridad al logro de un grado equivalente de desarrollo, calidad de vida e igualdad de oportunidades</strong> en todo el territorio.</li>
  <li>Se prohíbe transferir servicios sin la respectiva reasignación de recursos.</li>
  <li>Se preveía dictar el nuevo régimen <strong>antes de fines de 1996</strong>: <strong>aún no se cumplió</strong> (la "deuda constitucional" pendiente).</li>
</ul>

<h3>La ley actual: Ley 23.548 (1988)</h3>
<ul>
  <li>Es un <strong>"régimen transitorio"</strong>... que sigue vigente, parcheado por múltiples pactos fiscales y asignaciones específicas (lo que volvió el sistema un "laberinto").</li>
  <li>Fija la masa coparticipable y los coeficientes de distribución primaria y secundaria (estos últimos basados en datos históricos, muy criticados por arbitrarios).</li>
  <li><strong>Obligación de las provincias adheridas:</strong> no aplicar tributos <em>análogos</em> a los nacionales coparticipados (límite a la potestad provincial y municipal — ver Unidad IV).</li>
</ul>
<div class="callout"><strong>Críticas al sistema:</strong> baja correspondencia fiscal, coeficientes secundarios arbitrarios y desactualizados, multiplicidad de regímenes (detracciones, asignaciones específicas, fondos), conflictividad permanente y la deuda de sancionar el régimen que ordena la Constitución desde 1994.</div>
`
    },
    {
      id: "11.6",
      titulo: "Leyes de participaciones municipales en Chaco y Corrientes",
      contenido: `
<h3>La coparticipación de "segundo piso"</h3>
<p>Así como la Nación coparticipa con las provincias, cada <strong>provincia debe coparticipar con sus municipios</strong> una porción de los recursos (los de origen provincial <em>y</em> la parte que recibe de la coparticipación nacional). Es un mandato derivado de la <strong>autonomía municipal</strong> (art. 123 CN) y de las constituciones provinciales.</p>

<h3>Esquema general</h3>
<ul>
  <li>Cada provincia dicta su <strong>ley de coparticipación municipal</strong>, que define:
    <ul>
      <li>La <strong>masa coparticipable provincial</strong> (qué impuestos provinciales y qué parte de lo recibido de Nación se reparte).</li>
      <li>La <strong>distribución primaria</strong> (Provincia vs. conjunto de municipios).</li>
      <li>La <strong>distribución secundaria</strong> (entre los municipios), según criterios: población, partes iguales, inversa de la capacidad (devolución), eficiencia recaudatoria, NBI, etc.</li>
    </ul>
  </li>
</ul>

<h3>Chaco y Corrientes (lineamientos)</h3>
<ul>
  <li>Ambas provincias cuentan con <strong>regímenes de coparticipación municipal</strong> establecidos por ley provincial, que distribuyen entre los municipios una parte de los recursos de origen provincial y nacional.</li>
  <li>Los criterios de reparto secundario suelen combinar <strong>población</strong>, <strong>partes iguales</strong>, indicadores de <strong>necesidades</strong> (NBI) y, en algunos casos, premios a la <strong>recaudación propia</strong> y a la <strong>eficiencia</strong>.</li>
  <li>Problemas comunes: alta <strong>dependencia</strong> de los municipios respecto de la coparticipación, baja recaudación propia (tasas), criterios discutidos y reclamos por mayor <strong>autonomía financiera</strong> municipal.</li>
</ul>
<div class="callout"><strong>Importante para la cátedra:</strong> conviene consultar el <strong>texto vigente</strong> de las leyes de coparticipación municipal de Chaco y de Corrientes (números de ley, masa coparticipable, porcentajes de distribución primaria y criterios de la secundaria), ya que son datos provinciales específicos que pueden actualizarse y suelen pedirse con precisión.</div>
<p class="muted">Cierre de la materia: el federalismo fiscal articula todo lo visto — gastos (U2), recursos (U3), poder tributario y distribución constitucional (U4), los distintos impuestos (U5–U8), la deuda (U9) y el presupuesto (U10) — en el marco de las relaciones financieras entre Nación, provincias y municipios.</p>
`
    }
  ],
  practicos: `
<p class="muted">No hay un archivo de trabajos prácticos de la cátedra para esta unidad en el material disponible. Estas son <strong>preguntas de repaso</strong> elaboradas a partir de la teoría.</p>

<div class="tp">
  <h4>Cuadro — Desequilibrios fiscales</h4>
  <table>
    <tr><th></th><th>Vertical</th><th>Horizontal</th></tr>
    <tr><td>Entre quién</td><td>Distintos niveles (Nación ↔ provincias).</td><td>Jurisdicciones del mismo nivel (provincia ↔ provincia).</td></tr>
    <tr><td>En qué consiste</td><td>Brecha entre lo que un nivel recauda y lo que gasta.</td><td>Diferencias de capacidad fiscal y necesidades entre jurisdicciones.</td></tr>
    <tr><td>Se corrige con</td><td>Transferencias / coparticipación.</td><td>Distribución secundaria con criterios devolutivos y redistributivos.</td></tr>
  </table>

  <h4>Cuadro — Mecanismos de coordinación financiera</h4>
  <table>
    <tr><th>Mecanismo</th><th>Idea</th></tr>
    <tr><td>Separación de fuentes</td><td>Cada nivel usa tributos distintos y exclusivos.</td></tr>
    <tr><td>Concurrencia</td><td>Varios niveles gravan la misma fuente sin límite formal.</td></tr>
    <tr><td>Participación / coparticipación</td><td>Un nivel recauda y reparte lo producido según coeficientes.</td></tr>
    <tr><td>Cuotas suplementarias (sobretasas)</td><td>Un nivel adiciona un % sobre un tributo de otro nivel.</td></tr>
    <tr><td>Asignaciones globales</td><td>Transferencias con o sin cargo/afectación específica.</td></tr>
  </table>
  <div class="def"><b>Coparticipación — base constitucional (<span class="cn">art. 75 inc. 2</span>):</b> es una <em>ley-convenio</em> con el <strong>Senado</strong> como cámara de origen, aprobada por <strong>mayoría absoluta</strong> de la totalidad de los miembros de cada cámara, no puede ser modificada unilateralmente ni reglamentada, y requiere la aprobación de las provincias. La distribución debe ser <em>equitativa, solidaria</em> y dar prioridad al logro de un grado equivalente de desarrollo. Rige aún la transitoria <strong>Ley 23.548</strong>.</div>

  <h4>Preguntas de repaso</h4>
  <p class="tp-consigna">1) ¿Qué funciones conviene centralizar y cuáles descentralizar? ¿Por qué?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Estabilización y distribución → Nación (manejo macro, evita competencia entre jurisdicciones). Asignación de bienes públicos locales → niveles subnacionales (conocen mejor las preferencias).</p></details>
  <p class="tp-consigna">2) Diferencia entre desequilibrio fiscal vertical y horizontal.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp"><strong>Vertical:</strong> brecha entre lo que un nivel recauda y lo que gasta (las provincias gastan más de lo que recaudan). <strong>Horizontal:</strong> diferencias de capacidad y necesidades entre jurisdicciones del mismo nivel (provincias ricas vs. pobres).</p></details>
  <p class="tp-consigna">3) ¿Qué es la correspondencia fiscal y por qué es baja en Argentina?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Es el grado en que un nivel financia sus gastos con recursos que él mismo recauda. En Argentina es baja porque las provincias gastan con fondos que recauda la Nación (coparticipación) → se diluye la responsabilidad y hay incentivo a gastar de más.</p></details>
  <p class="tp-consigna">4) Coparticipación: distribución primaria/secundaria y base constitucional.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp"><strong>Primaria:</strong> reparto Nación vs. conjunto de provincias. <strong>Secundaria:</strong> entre las provincias. Base: art. 75 inc. 2 CN (ley-convenio, Senado como cámara de origen, mayoría absoluta, no modificable unilateralmente); rige la transitoria Ley 23.548.</p></details>
  <p class="tp-consigna">5) Mecanismos de coordinación financiera.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Separación de fuentes, concurrencia, participación/coparticipación, cuotas suplementarias (sobretasas) y asignaciones globales.</p></details>
</div>
`
});
