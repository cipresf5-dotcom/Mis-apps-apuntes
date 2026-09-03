window.CURSO.unidades.push({
  id: 5,
  numero: "V",
  titulo: "La Teoría de la Imposición",
  bibliografia: [
    "Jarach, D. (2013) Parte V, Caps. I a IV",
    "Vizcaíno, C. (2017) Caps. I y II",
    "Villegas, H. B. (2021) Caps. VII y XVI",
    "Stiglitz & Rosengard (2016) 5ª parte, ptos. 17 a 20"
  ],
  temas: [
    {
      id: "5.1",
      titulo: "Los impuestos. Concepto y caracterización. Naturaleza. Hecho imponible: estructura del impuesto",
      contenido: `
<h3>Concepto y caracterización</h3>
<div class="def"><b>Impuesto:</b> tributo exigido por el Estado a quienes se hallan en las situaciones que la ley considera <strong>hechos imponibles</strong>, ajenas a toda actividad estatal relativa al obligado y reveladoras de <strong>capacidad contributiva</strong>.</div>
<p>Caracteres: prestación coactiva, en dinero, de fuente legal, <strong>no vinculada</strong> (sin contraprestación individualizada) y destinada a financiar el gasto público (finalidad fiscal, eventualmente extrafiscal).</p>

<h3>Naturaleza y fundamento</h3>
<p>Su fundamento es el <strong>deber de contribuir</strong> al sostenimiento del Estado según la <strong>capacidad contributiva</strong> (no la teoría del precio/seguro). Es expresión del poder de imperio limitado por la Constitución.</p>

<h3>El hecho imponible (estructura del impuesto)</h3>
<div class="callout"><strong>Hecho imponible:</strong> el presupuesto de hecho, descripto por la ley, cuya realización genera el nacimiento de la <strong>obligación tributaria</strong>. Es el "corazón" del tributo.</div>
<p>Tiene cuatro <strong>aspectos o elementos</strong>:</p>
<ul>
  <li><strong>Aspecto material (objetivo):</strong> el hecho, acto o situación gravada (obtener renta, poseer un patrimonio, consumir). Responde al "¿qué se grava?".</li>
  <li><strong>Aspecto personal (subjetivo):</strong> el sujeto que realiza el hecho. Distingue:
    <ul>
      <li><em>Sujeto activo:</em> el Estado (acreedor del tributo).</li>
      <li><em>Sujeto pasivo:</em> el obligado. Puede ser <strong>contribuyente</strong> (realiza el hecho, "de iure") o <strong>responsable</strong> (obligado por la ley sin realizar el hecho: por deuda ajena, sustituto, agente de retención/percepción).</li>
    </ul>
  </li>
  <li><strong>Aspecto espacial:</strong> el lugar donde se configura (criterios de vinculación: territorialidad/fuente, nacionalidad, residencia/domicilio).</li>
  <li><strong>Aspecto temporal:</strong> el momento en que se perfecciona (hecho <em>instantáneo</em>, como el IVA en cada venta, o de <em>ejercicio/periódico</em>, como Ganancias).</li>
</ul>

<h3>Elementos cuantificantes</h3>
<ul>
  <li><strong>Base imponible:</strong> la magnitud sobre la que se aplica el tributo (monto de renta, valor del bien, precio).</li>
  <li><strong>Alícuota:</strong> el porcentaje o monto que se aplica a la base. Puede ser fija, proporcional o progresiva (ver 5.2).</li>
</ul>
<p class="muted">También integran la estructura las <strong>exenciones</strong> (situaciones que, configurando el hecho imponible, la ley libera del pago) y las <strong>deducciones</strong>.</p>
`
    },
    {
      id: "5.2",
      titulo: "Clasificaciones de los impuestos",
      contenido: `
<p>Existen múltiples criterios para clasificar los impuestos. Los principales:</p>

<h3>Directos e indirectos</h3>
<p>El criterio más importante y discutido. Tres enfoques:</p>
<table>
  <tr><th>Criterio</th><th>Directos</th><th>Indirectos</th></tr>
  <tr><td><strong>Traslación</strong></td><td>No se trasladan: los soporta quien la ley designa.</td><td>Se trasladan a un tercero (del contribuyente "de iure" al "de facto").</td></tr>
  <tr><td><strong>Manifestación de capacidad contributiva</strong></td><td>Gravan manifestaciones <em>directas</em>: renta y patrimonio.</td><td>Gravan manifestaciones <em>indirectas</em>: el consumo y el gasto.</td></tr>
  <tr><td><strong>Administrativo (padrón)</strong></td><td>Se recaudan según padrones/listas de contribuyentes (inmobiliario).</td><td>No requieren padrón; gravan actos accidentales.</td></tr>
</table>
<p class="muted">Importancia constitucional: la CN reserva los directos a las provincias (salvo excepción nacional) y hace concurrentes los indirectos internos (ver Unidad IV).</p>

<h3>Reales y personales</h3>
<ul>
  <li><strong>Reales (objetivos):</strong> gravan una manifestación de riqueza <em>sin considerar</em> la situación personal del contribuyente (IVA, Inmobiliario).</li>
  <li><strong>Personales (subjetivos):</strong> tienen en cuenta la situación personal y familiar (Ganancias de personas humanas, con deducciones por cargas de familia).</li>
</ul>

<h3>Generales y especiales</h3>
<ul>
  <li><strong>Generales:</strong> gravan todas las manifestaciones de una misma especie (IVA grava todos los consumos).</li>
  <li><strong>Especiales (selectivos):</strong> gravan una manifestación determinada (impuestos internos a cigarrillos, bebidas).</li>
</ul>

<h3>Con y sin afectación</h3>
<ul>
  <li><strong>Con afectación específica:</strong> su producido se destina a un fin determinado (impuesto a los combustibles → infraestructura).</li>
  <li><strong>Sin afectación:</strong> ingresan a rentas generales (la regla, por el principio de unidad de caja).</li>
</ul>

<h3>Según la alícuota: fijos, graduales, proporcionales, progresivos y regresivos</h3>
<ul>
  <li><strong>Fijos:</strong> suma invariable por cada hecho, sin relación con la base.</li>
  <li><strong>Graduales:</strong> varían por categorías o escalones (p. ej., el Monotributo).</li>
  <li><strong>Proporcionales:</strong> alícuota <em>constante</em> cualquiera sea la base (IVA 21%).</li>
  <li><strong>Progresivos:</strong> la alícuota <em>aumenta</em> al crecer la base (Ganancias de personas humanas). Técnicas: progresión por clases/categorías y por <em>escalones</em> (la más usada, evita saltos).</li>
  <li><strong>Regresivos:</strong> la alícuota <em>disminuye</em> al crecer la base. <span class="muted">Importante: un impuesto puede ser proporcional en su alícuota pero <em>regresivo en sus efectos</em> respecto del ingreso, como el IVA, porque los sectores de menores ingresos consumen una proporción mayor de su renta.</span></li>
</ul>
`
    },
    {
      id: "5.3",
      titulo: "Análisis económico. Momentos de la imposición. Curva de Laffer. Exceso de carga. Equilibrio parcial",
      contenido: `
<h3>Los momentos (efectos) de la imposición</h3>
<p>El recorrido económico de un impuesto desde que se sanciona hasta que recae definitivamente:</p>
<ul>
  <li><strong>Percusión:</strong> el impacto inicial sobre el <em>contribuyente de iure</em> (el designado por la ley) al momento del pago.</li>
  <li><strong>Traslación:</strong> el proceso por el cual el contribuyente de iure transfiere la carga a otro vía precios.
    <ul>
      <li><em>Hacia adelante</em> (protraslación): al comprador (subiendo el precio).</li>
      <li><em>Hacia atrás</em> (retrotraslación): al proveedor (bajando lo que paga).</li>
      <li><em>Oblicua:</em> a precios de otros bienes.</li>
    </ul>
  </li>
  <li><strong>Incidencia:</strong> la carga recae <em>definitivamente</em> sobre el <strong>contribuyente de facto</strong> (quien no puede trasladarla).</li>
  <li><strong>Difusión (o remoción):</strong> los efectos posteriores sobre el consumo, el ahorro y la producción de quien soportó el impuesto.</li>
</ul>
<p>La posibilidad de trasladar depende de las <strong>elasticidades</strong> de oferta y demanda, del tipo de mercado (más fácil en monopolio) y de la coyuntura.</p>

<h3>El exceso de carga (peso muerto, "excess burden")</h3>
<div class="callout"><strong>Exceso de carga:</strong> es la pérdida de bienestar que provoca un impuesto <em>por encima</em> de la recaudación que obtiene el Estado. Surge porque el impuesto <strong>distorsiona las decisiones</strong> (efecto sustitución) y reduce el volumen de transacciones por debajo del óptimo.</div>
<p>Cuanto más <strong>elásticas</strong> son la oferta y la demanda, <strong>mayor</strong> el exceso de carga (más reacciona la cantidad). Un impuesto de <em>suma fija</em> (lump-sum) no genera exceso de carga porque no altera decisiones marginales (pero es inequitativo). Vincula con el principio de <strong>neutralidad/eficiencia</strong> (Unidad III).</p>

<h3>Equilibrio parcial: incidencia de un impuesto al consumo</h3>
<p>En el análisis de equilibrio parcial (un solo mercado), un impuesto unitario desplaza la curva de oferta hacia arriba. El reparto de la carga entre comprador y vendedor depende de las elasticidades:</p>
<ul>
  <li>Si la <strong>demanda es más inelástica</strong> que la oferta → la carga recae más sobre el <strong>consumidor</strong>.</li>
  <li>Si la <strong>oferta es más inelástica</strong> → recae más sobre el <strong>productor</strong>.</li>
</ul>

<h3>La Curva de Laffer</h3>
<div class="def">Relaciona la <strong>alícuota</strong> del impuesto con la <strong>recaudación</strong>. Tiene forma de "U invertida": con alícuota 0% la recaudación es 0; con alícuota 100% también es 0 (nadie produce/declara). Existe un punto intermedio de <strong>recaudación máxima</strong>.</div>
<p>Implicancia: a partir de cierto nivel, <strong>subir la alícuota reduce la recaudación</strong> (por desincentivo a producir y por aumento de evasión/elusión). Es un argumento (discutido en su aplicación empírica) a favor de no sobrecargar las alícuotas.</p>
`
    },
    {
      id: "5.4",
      titulo: "Presión Tributaria. Medición. Rezagos fiscales. Gasto tributario",
      contenido: `
<h3>Presión tributaria</h3>
<div class="def"><b>Presión tributaria:</b> indicador que mide la <strong>relación entre la recaudación y la riqueza</strong> de una comunidad, es decir, qué proporción del ingreso es absorbida por los tributos.</div>
<p>Niveles de medición:</p>
<ul>
  <li><strong>Individual:</strong> tributos pagados / renta del individuo.</li>
  <li><strong>Sectorial:</strong> tributos de un sector / renta del sector.</li>
  <li><strong>Nacional (la más usada):</strong> <strong>Recaudación total / PBI</strong>. Si se incluyen los aportes a la seguridad social se habla de "presión tributaria <em>ampliada</em> o consolidada".</li>
</ul>
<p>Sirve para comparar países y períodos y para evaluar el "espacio fiscal". Limitaciones: no capta la evasión, la calidad del gasto ni la distribución de la carga.</p>

<h3>Rezagos fiscales (lags)</h3>
<p>El desfase temporal entre el hecho económico y el efecto fiscal. Importan en política tributaria y como factor de licuación de la recaudación con inflación:</p>
<ul>
  <li><strong>Rezago de reconocimiento:</strong> tiempo hasta advertir la necesidad de la medida.</li>
  <li><strong>Rezago de decisión/legislativo:</strong> tiempo de sanción de la ley.</li>
  <li><strong>Rezago de recaudación:</strong> tiempo entre el hecho imponible y el ingreso efectivo del tributo.</li>
</ul>
<div class="callout"><strong>Efecto Olivera-Tanzi:</strong> en contextos de <em>alta inflación</em>, el rezago de recaudación licúa el valor real de los impuestos (se cobran con moneda depreciada), reduciendo la recaudación real y agravando el déficit.</div>

<h3>Gasto tributario (tax expenditure)</h3>
<div class="def">Es la <strong>recaudación que el Estado resigna</strong> por otorgar tratamientos preferenciales: exenciones, deducciones, alícuotas reducidas, diferimientos, regímenes de promoción.</div>
<p>Se llama "gasto" porque equivale económicamente a un subsidio: en lugar de cobrar y luego gastar, el Estado <em>no cobra</em>. Su cuantificación (cada vez más exigida en los presupuestos) permite transparentar el costo fiscal de los beneficios y evaluar su eficacia.</p>
`
    },
    {
      id: "5.5",
      titulo: "Estructura y Sistema Tributario Argentino. Administración Tributaria. Evasión y elusión",
      contenido: `
<h3>Sistema vs. régimen tributario</h3>
<ul>
  <li><strong>Sistema tributario:</strong> conjunto de tributos <em>coherente y coordinado</em>, organizado conforme a principios. Es un ideal "racional".</li>
  <li><strong>Régimen tributario:</strong> el conjunto de tributos tal como existe de hecho, muchas veces fruto de la improvisación histórica (lo "real").</li>
</ul>

<h3>Estructura del sistema tributario argentino</h3>
<p>Por nivel de gobierno:</p>
<ul>
  <li><strong>Nación:</strong> IVA, Impuesto a las Ganancias, Bienes Personales, Impuestos Internos, Derechos de exportación e importación, Impuesto a los Débitos y Créditos ("al cheque"), aportes y contribuciones a la seguridad social.</li>
  <li><strong>Provincias:</strong> Ingresos Brutos (el más importante), Inmobiliario, Sellos, Automotor.</li>
  <li><strong>Municipios:</strong> tasas (Seguridad e Higiene, servicios urbanos) y contribuciones.</li>
</ul>
<div class="callout"><strong>Rasgos críticos del sistema argentino:</strong> alta participación de impuestos <em>indirectos</em> al consumo (regresivos), peso de tributos "distorsivos" (Ingresos Brutos —efecto cascada—, Débitos y Créditos, retenciones), y fuerte centralización de la recaudación en la Nación.</div>

<h3>La Administración Tributaria</h3>
<p>Organismo encargado de aplicar, recaudar y fiscalizar los tributos. A nivel nacional: <strong>ARCA</strong> (ex AFIP), que comprende la Dirección General Impositiva (DGI) y la Dirección General de Aduanas (DGA). En las provincias, las Direcciones de Rentas / Agencias de Recaudación.</p>
<p><strong>Funciones y facultades:</strong> recaudación, verificación y fiscalización, determinación de oficio, aplicación de sanciones, dictado de normas reglamentarias e interpretativas (rige la Ley 11.683). Sus facultades están limitadas por las garantías del contribuyente.</p>

<h3>Evasión y elusión</h3>
<table>
  <tr><th>Evasión</th><th>Elusión</th></tr>
  <tr><td>Conducta <strong>ilícita</strong>: incumplimiento total o parcial de la obligación tributaria ya nacida, ocultando o falseando (no declarar, facturas truchas). Configura infracción o <strong>delito</strong> (Ley Penal Tributaria).</td><td>Uso de <strong>formas jurídicas inadecuadas o artificiosas</strong> para evitar que nazca el hecho imponible o reducir la carga, abusando de las formas. Zona gris; se combate con el <strong>principio de la realidad económica</strong> (art. 2 Ley 11.683).</td></tr>
</table>
<p><strong>Economía de opción (planificación lícita):</strong> elegir, entre alternativas legales, la de menor carga, <em>sin</em> abuso de formas. Es <strong>lícita</strong> y se distingue de la elusión.</p>
<p class="muted">Causas de la evasión: alta presión percibida, complejidad, baja percepción de riesgo, debilidad de la administración, falta de conciencia fiscal. Combatirla mejora la equidad (todos pagan) y la suficiencia del sistema.</p>
`
    }
  ],
  practicos: `
<p class="muted">Trabajos prácticos de la cátedra (consignas y respuestas), incluidos los ejercicios numéricos de progresividad.</p>

<div class="tp">
  <h4>TP Nº 1 — Concepto, clasificación y hecho imponible</h4>
  <p class="tp-consigna">Concepto de impuesto. Cuadro de clasificaciones con ejemplos. Hecho imponible y elementos. Estructura del impuesto (Núñez Miñana). Naturaleza y teorías que lo justifican. V/F y clasificación directos/indirectos, reales/personales.</p>
  <blockquote class="autor"><strong>Impuesto (Villegas):</strong> es el tributo exigido por el Estado a quienes se hallan en las situaciones consideradas por la ley como hechos imponibles, siendo estos hechos <em>ajenos a toda actividad estatal relativa al obligado</em> (a diferencia de la tasa y la contribución).<cite>H. Villegas, <em>Curso de finanzas, derecho financiero y tributario</em></cite></blockquote>
  <p><strong>Cuadro — Clasificación de los impuestos con ejemplos:</strong></p>
  <table>
    <tr><th>Criterio</th><th>Clases</th><th>Ejemplos</th></tr>
    <tr><td>Traslación / manifestación</td><td><strong>Directos</strong> (no se trasladan; gravan manifestaciones inmediatas de capacidad) · <strong>Indirectos</strong> (se trasladan al precio; manifestaciones mediatas)</td><td>Ganancias, Bienes Personales / IVA, Internos</td></tr>
    <tr><td>Consideración del sujeto</td><td><strong>Personales / subjetivos</strong> (atienden la situación del contribuyente) · <strong>Reales / objetivos</strong> (gravan la cosa sin mirar al sujeto)</td><td>Ganancias personas humanas / Inmobiliario, IVA</td></tr>
    <tr><td>Alícuota</td><td><strong>Fijos</strong> · <strong>Proporcionales</strong> (alícuota constante) · <strong>Progresivos</strong> (alícuota creciente) · <strong>Regresivos</strong></td><td>Sellos monto fijo / IVA 21% / Ganancias / IVA respecto del ingreso</td></tr>
    <tr><td>Periodicidad</td><td><strong>Ordinarios</strong> (permanentes) · <strong>Extraordinarios</strong> (transitorios)</td><td>IVA, Ganancias / Aporte solidario extraordinario</td></tr>
    <tr><td>Ámbito</td><td><strong>Internos</strong> · <strong>Externos</strong> (al comercio exterior)</td><td>IVA / Derechos de importación y exportación</td></tr>
  </table>
  <details class="tp-toggle"><summary>Ver respuestas (V/F)</summary>
  <p class="tp-resp">• Los indirectos se trasladan al precio → <strong>V</strong>. • Los indirectos gravan manifestaciones parciales y mediatas → <strong>V</strong>. • Los indirectos gravan manifestaciones inmediatas → <strong>F</strong>. • "Un impuesto es progresivo cuando la alícuota es constante (35%)" → <strong>F</strong> (eso es proporcional).</p>
  </details>
  <details class="tp-toggle"><summary>Ver clasificación directos/indirectos · reales/personales</summary>
  <ul>
    <li>Renta de las personas → <strong>Directo / Personal</strong></li>
    <li>IVA → <strong>Indirecto / Real</strong></li>
    <li>Ingresos Brutos → <strong>Directo / Real</strong> (criterio de la cátedra)</li>
    <li>Derechos de exportación → <strong>Indirecto / Real</strong></li>
    <li>Combustibles → <strong>Indirecto / Real</strong></li>
    <li>Bienes Personales → <strong>Directo / Real</strong></li>
    <li>Inmobiliario rural → <strong>Directo / Real</strong></li>
  </ul>
  <p class="tp-resp"><strong>Teorías que justifican el impuesto:</strong> ético, del cambio (precio), de la prima de seguro y de la distribución de la carga pública (capacidad contributiva).</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 2 — Laffer, inflación, momentos de la imposición y exceso de carga</h4>
  <p class="tp-consigna">Curva de Laffer. Inflación como impuesto. Momentos de la imposición. Gráfico del exceso de carga y principio económico relacionado.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>Curva de Laffer:</strong> relaciona la alícuota con la recaudación. Subir la tasa aumenta la recaudación hasta un punto óptimo <em>t*</em>; pasado ese punto, tasas demasiado altas desalientan la actividad (y estimulan la evasión) y la recaudación <em>cae</em>. Existen dos alícuotas que producen la misma recaudación:</p>
  <figure class="fig">
    <svg viewBox="0 0 360 210" role="img" aria-label="Curva de Laffer: recaudación en función de la alícuota">
      <line class="axis" x1="45" y1="185" x2="345" y2="185"/>
      <line class="axis" x1="45" y1="30" x2="45" y2="185"/>
      <path class="curve" d="M 55,185 Q 195,-45 335,185"/>
      <line class="dash" x1="195" y1="185" x2="195" y2="70"/>
      <circle class="pt" cx="195" cy="70" r="3.5"/>
      <text class="lbl-accent" x="195" y="58" text-anchor="middle">Rec. máxima</text>
      <text class="lbl" x="195" y="200" text-anchor="middle">t*</text>
      <text class="lbl-sm" x="55" y="200">0%</text>
      <text class="lbl-sm" x="325" y="200">100%</text>
      <text class="lbl" x="355" y="185" text-anchor="end" dy="16">alícuota (t)</text>
      <text class="lbl" x="12" y="34">Recaud.</text>
      <text class="lbl-sm" x="285" y="120" text-anchor="middle">zona</text>
      <text class="lbl-sm" x="285" y="132" text-anchor="middle">prohibitiva</text>
    </svg>
    <figcaption>A la derecha de t* (zona prohibitiva) bajar la alícuota puede <em>aumentar</em> la recaudación.</figcaption>
  </figure>
  <p><strong>Inflación como impuesto</strong> (Musgrave/Keynes): gravamen "ciego" sobre los activos monetarios que castiga más a quienes tienen rentas fijas; no requiere ley (viola el <span class="cn">art. 17</span>).</p>
  <p><strong>Momentos de la imposición:</strong> anuncio (efecto noticia) → percusión → traslación (pro/retrotraslación) → incidencia → difusión → remoción; en impuestos reales, amortización y capitalización.</p>
  <p><strong>Exceso de carga (triángulo de Harberger):</strong> el impuesto encarece el bien: los consumidores pagan un precio mayor (P<sub>d</sub>) y los productores reciben uno menor (P<sub>s</sub>). La cantidad transada cae de Q<sub>e</sub> a Q<sub>t</sub>. El <em>triángulo</em> mide la pérdida de bienestar que <strong>no se convierte en recaudación</strong> para nadie (carga excedente):</p>
  <figure class="fig">
    <svg viewBox="0 0 360 240" role="img" aria-label="Exceso de carga: triángulo de Harberger entre oferta y demanda">
      <line class="axis" x1="50" y1="205" x2="345" y2="205"/>
      <line class="axis" x1="50" y1="25" x2="50" y2="205"/>
      <polygon class="area-warn" points="140,98 140,157 195,127"/>
      <line class="curve" x1="60" y1="55" x2="330" y2="200"/>
      <line class="curve2" x1="60" y1="200" x2="330" y2="55"/>
      <line class="dash" x1="140" y1="98" x2="140" y2="157"/>
      <line class="dash" x1="50" y1="98" x2="140" y2="98"/>
      <line class="dash" x1="50" y1="157" x2="140" y2="157"/>
      <line class="dash" x1="140" y1="205" x2="140" y2="157"/>
      <line class="dash" x1="195" y1="205" x2="195" y2="127"/>
      <circle class="pt" cx="195" cy="127" r="3.5"/>
      <text class="lbl-accent" x="336" y="200" dy="4">D</text>
      <text class="lbl" x="336" y="55" dy="4" style="fill:var(--warn)">S</text>
      <text class="lbl-sm" x="205" y="124">E</text>
      <text class="lbl-sm" x="24" y="101">P&#8341;</text>
      <text class="lbl-sm" x="24" y="161">P&#8347;</text>
      <text class="lbl-sm" x="135" y="219">Q&#8348;</text>
      <text class="lbl-sm" x="190" y="219">Q&#8337;</text>
      <text class="lbl-sm" x="250" y="150" style="fill:var(--warn)">exceso de carga</text>
    </svg>
    <figcaption>La recaudación es el rectángulo P&#8341;–P&#8347; hasta Q&#8348;; el triángulo hacia E es la pérdida neta. Se vincula con el principio de <strong>neutralidad/economicidad</strong> (Adam Smith).</figcaption>
  </figure>
  
  </details>
</div>

<div class="tp">
  <h4>TP Nº 3, 4 y 5 — Presión tributaria, sistema/administración, evasión y elusión</h4>
  <p class="tp-consigna">Presión tributaria (global/sectorial/regional, fórmula). Sistema y estructura tributaria; administración tributaria. Evasión, elusión y economía de opción.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>Presión:</strong> P = T / R (tributos / Renta Nacional o PBI). <strong>Evasión:</strong> conducta <em>ilícita</em> (ocultar base, exagerar deducciones, trasladar base a fiscos de menor alícuota, morosidad). <strong>Elusión:</strong> evitar el impuesto con acciones legalmente permitidas pero no deseadas (abuso de formas). <strong>Economía de opción:</strong> planificación fiscal <em>lícita</em>: elegir, dentro de la ley y su espíritu, la alternativa de menor carga.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 6 — Progresividad global vs. escalonada (casos resueltos)</h4>
  <p class="tp-consigna">Escala: 0–110.000 → 9%; 110.001–130.000 → 14%; 130.001–150.000 → 19%; 150.001–190.000 → 27%; +190.001 → 33%.</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp"><strong>Caso 1 — Francisca (renta $155.500):</strong><br>
  Global: 155.500 × 27% = <strong>$41.985</strong>.<br>
  Escalonada: 110.000×9% + 20.000×14% + 20.000×19% + 5.500×27% = 9.900 + 2.800 + 3.800 + 1.485 = <strong>$17.985</strong>.</p>
  <p><strong>Caso 2 — Juan José (alquiler 118.000 + profesión 59.000 = $177.000):</strong><br>
  Global: 177.000 × 27% = <strong>$47.790</strong>.<br>
  Escalonada: 110.000×9% + 20.000×14% + 20.000×19% + 27.000×27% = 9.900 + 2.800 + 3.800 + 7.290 = <strong>$23.790</strong>.</p>
  <p class="muted">La <em>global</em> aplica una sola alícuota a toda la renta (genera "error de salto"); la <em>escalonada</em> grava cada tramo con su alícuota y suma.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 7 — Impuesto, tipo medio (Tme) y tipo marginal (Tmg)</h4>
  <p class="tp-consigna">Escala por tramos (10/20/25/30/35/40%). Determinar T y Tme para varias bases y el Tmg entre $50.000 y $50.001.</p>
  <details class="tp-toggle"><summary>Ver resolución (global)</summary>
  <table>
    <tr><th>Base</th><th>Impuesto (T)</th><th>Tme = T/base</th></tr>
    <tr><td>1.000</td><td>100</td><td>0,10</td></tr>
    <tr><td>3.000</td><td>600</td><td>0,20</td></tr>
    <tr><td>50.000</td><td>15.000</td><td>0,30</td></tr>
    <tr><td>50.001</td><td>17.500</td><td>0,35</td></tr>
    <tr><td>100.000</td><td>35.000</td><td>0,35</td></tr>
    <tr><td>230.000</td><td>92.000</td><td>0,40</td></tr>
  </table>
  <p class="tp-resp"><strong>Tmg entre 50.000 y 50.001</strong> = ΔT/Δbase = (17.500 − 15.000)/(50.001 − 50.000) = <strong>2.500</strong> → un solo peso adicional de base genera $2.500 de impuesto: es el <strong>"error de salto"</strong> de la progresividad global (por clases).</p>
  <p><strong>Escalonada</strong> (mismos puntos): 3.000 → 100+400 = 500; 50.000 → 100+400+1.750+12.000 = 14.250; 100.000 → +50.000×35% = 31.750. El margen es mucho más suave (no hay salto).</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 8 a 12 — Error de salto, importes fijos y tipos de impuesto</h4>
  <p class="tp-consigna">TP8: comparar la obligación en $70.000 vs $70.001 (global) → analizar el incremento. TP9: comportamiento de un impuesto proporcional, progresivo y regresivo. TP10-11: completar la columna de "importe fijo". TP12: calcular impuesto, Tme y Tmg e identificar el sistema.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>TP8 (error de salto):</strong> 70.000×15% = 10.500; 70.001×19% = 13.300. Un peso más de base hace saltar la alícuota y el impuesto aumenta $2.800 por ¡$1! → injusticia típica de la <strong>progresividad por clases (global)</strong>.</p>
  <p><strong>TP12:</strong> se trata de <strong>progresividad por clases</strong>; el salto entre clases genera el "error de salto" (problema de equidad en el margen). Tme = Σ(alícuota × % de base); Tmg = alícuota del último tramo. Los TP10-11 se completan con el método de "importe fijo + % sobre el excedente" (técnica escalonada del impuesto a las Ganancias).</p>
  </details>
</div>
`
});
