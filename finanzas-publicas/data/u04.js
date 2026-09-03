window.CURSO.unidades.push({
  id: 4,
  numero: "IV",
  titulo: "El Marco Jurídico de la Hacienda Pública",
  bibliografia: [
    "Jarach, D. (2013) Parte V, Cap. IV",
    "Vizcaíno, C. (2017) Caps. V y VI",
    "Villegas, H. B. (2021) Cap. IX"
  ],
  temas: [
    {
      id: "4.1",
      titulo: "Poder Tributario. Concepto. Caracteres. Originario y Derivado",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Poder tributario (potestad tributaria):</b> es la facultad que tiene el Estado de <strong>crear, modificar o suprimir tributos</strong> y de exigirlos coactivamente a las personas sometidas a su competencia tributaria, en virtud de su <strong>poder de imperio</strong>.</div>
<p>Es una manifestación de la soberanía del Estado en el plano financiero. Se ejerce a través del <strong>Poder Legislativo</strong> (principio de legalidad: solo la ley crea tributos).</p>

<h3>Caracteres</h3>
<ul>
  <li><strong>Abstracto:</strong> existe con prescindencia de su ejercicio concreto.</li>
  <li><strong>Permanente:</strong> es connatural al Estado; no se extingue por el tiempo (aunque las acciones para cobrar tributos sí prescriben).</li>
  <li><strong>Irrenunciable:</strong> el Estado no puede desprenderse de él (sin él no podría subsistir).</li>
  <li><strong>Indelegable:</strong> el Legislativo no puede delegar en el Ejecutivo la facultad de crear tributos (sí puede reglamentar). La CN refuerza esto tras la reforma de 1994.</li>
  <li><strong>Limitado:</strong> por la Constitución (principios y garantías) y por la distribución de competencias en el sistema federal.</li>
</ul>

<h3>Poder tributario originario y derivado</h3>
<table>
  <tr><th>Originario</th><th>Derivado</th></tr>
  <tr><td>Nace directamente de la <strong>Constitución</strong>. Lo tienen la <strong>Nación</strong> y las <strong>Provincias</strong> (las provincias son preexistentes y conservan todo el poder no delegado — art. 121 CN).</td><td>Surge de una <strong>ley</strong> dictada por un ente con poder originario. Tradicionalmente se atribuía a los <strong>Municipios</strong> (su poder derivaría de las constituciones provinciales).</td></tr>
</table>
<div class="callout">Tras la reforma de 1994 (art. 123 CN) que consagra la <strong>autonomía municipal</strong>, parte de la doctrina y la jurisprudencia ("Rivademar", "Municipalidad de La Plata") reconocen a los municipios un poder tributario propio, aunque <em>limitado y reglado</em> por la provincia (ver tema 4.6).</p></div>
`
    },
    {
      id: "4.2",
      titulo: "Derecho Financiero. Concepto, contenido, fuentes. Interpretación de la norma tributaria. Retroactividad",
      contenido: `
<h3>Derecho Financiero</h3>
<div class="def"><b>Derecho financiero:</b> conjunto de normas jurídicas que regulan la <strong>actividad financiera del Estado</strong> en todas sus fases (recursos, gestión y gastos): el presupuesto, la administración del patrimonio, el crédito público, la moneda y los tributos.</div>
<p><strong>Contenido:</strong> derecho presupuestario, derecho de los recursos (tributario, patrimonial, monetario, crédito público) y derecho del gasto / contabilidad pública.</p>
<p><strong>Fuentes:</strong></p>
<ul>
  <li><strong>La Constitución</strong> (fuente primaria; fija el poder tributario y sus límites).</li>
  <li><strong>La ley</strong> (fuente por excelencia en materia tributaria — principio de legalidad).</li>
  <li><strong>Tratados internacionales</strong> (con jerarquía constitucional o supralegal; relevantes en doble imposición).</li>
  <li><strong>Decretos reglamentarios</strong> y resoluciones (no pueden crear tributos).</li>
  <li>La <strong>jurisprudencia</strong> y la <strong>doctrina</strong> (fuentes mediatas).</li>
  <li>Los <strong>convenios intrafederales</strong> (coparticipación, Convenio Multilateral).</li>
</ul>

<h3>Interpretación de la norma tributaria</h3>
<p>Se admiten todos los métodos generales (literal, lógico, histórico, sistemático). Reglas propias:</p>
<ul>
  <li><strong>Principio de la realidad económica</strong> (arts. 1 y 2, Ley 11.683): para determinar la verdadera naturaleza del hecho imponible se atiende a los <em>actos y situaciones efectivamente realizados</em>, prescindiendo de las formas jurídicas inadecuadas elegidas por las partes. Es la herramienta contra la <em>elusión</em>.</li>
  <li><strong>In dubio: no hay reglas absolutas.</strong> Se rechaza tanto el <em>in dubio pro fisco</em> como el <em>in dubio contra fisco</em> automáticos; debe buscarse el sentido de la ley.</li>
  <li><strong>Analogía:</strong> está <strong>prohibida</strong> para crear el hecho imponible o exenciones (por el principio de legalidad); admisible en aspectos no esenciales.</li>
</ul>

<h3>Aplicación en el tiempo: irretroactividad</h3>
<div class="callout"><strong>Principio:</strong> las leyes tributarias rigen para el futuro. La <strong>retroactividad</strong> en materia tributaria es, en principio, <strong>inconstitucional</strong> cuando afecta un <em>hecho imponible ya cumplido</em> y un <strong>derecho adquirido</strong> (la Corte protege el pago realizado con efecto liberatorio). En tributos de hecho imponible <em>de ejercicio</em> (de formación sucesiva, como Ganancias), la jurisprudencia ha sido más flexible si la ley se dicta antes del cierre del ejercicio.</div>
`
    },
    {
      id: "4.3",
      titulo: "Derecho Tributario. Concepto. Divisiones. Autonomía. Codificación",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Derecho tributario:</b> rama del derecho financiero que regula específicamente la creación, recaudación y aspectos del <strong>tributo</strong> y las relaciones jurídicas entre el Estado y los contribuyentes.</div>

<h3>Divisiones</h3>
<ul>
  <li><strong>Derecho tributario constitucional:</strong> principios y garantías; distribución del poder tributario.</li>
  <li><strong>Derecho tributario material o sustantivo:</strong> regula la <em>obligación tributaria</em> (hecho imponible, sujetos, base, exenciones, extinción).</li>
  <li><strong>Derecho tributario formal o administrativo:</strong> regula la <em>determinación y recaudación</em> (deberes formales, fiscalización).</li>
  <li><strong>Derecho tributario procesal:</strong> los procedimientos y recursos ante el Fisco y la justicia.</li>
  <li><strong>Derecho tributario penal:</strong> infracciones y sanciones (Ley Penal Tributaria).</li>
  <li><strong>Derecho tributario internacional:</strong> doble imposición, convenios.</li>
</ul>

<h3>Autonomía</h3>
<p>Discusión clásica sobre si el derecho tributario es una rama <strong>autónoma</strong>:</p>
<ul>
  <li><strong>Autonomía científica y dogmática</strong> (Jarach, Giuliani Fonrouge): posee principios e institutos propios (hecho imponible, capacidad contributiva, realidad económica) y puede dar a los conceptos un alcance distinto al del derecho privado.</li>
  <li><strong>Postura subordinada:</strong> es parte del derecho financiero o del derecho administrativo.</li>
  <li>Posición intermedia: autonomía <em>didáctica y metodológica</em>, dentro de la unidad del orden jurídico.</li>
</ul>

<h3>Codificación</h3>
<p>Conveniencia de reunir los principios generales en un <strong>Código Tributario</strong> (no las leyes de cada impuesto). En Argentina:</p>
<ul>
  <li>A nivel nacional no hay un código integral; rige la <strong>Ley 11.683</strong> de Procedimiento Tributario, que cumple ese rol parcialmente.</li>
  <li>Las provincias tienen sus <strong>Códigos Fiscales</strong> (parte general + parte especial de cada tributo).</li>
  <li>Referencia regional: el <strong>Modelo de Código Tributario para América Latina</strong> (OEA/BID).</li>
</ul>
`
    },
    {
      id: "4.4",
      titulo: "Distribución constitucional de facultades impositivas. Distribución en materia de gastos",
      contenido: `
<p>En un Estado federal coexisten tres niveles con poder de gasto y de recursos. La Constitución reparte las <strong>facultades impositivas</strong> entre Nación y Provincias (los municipios, dentro del orden provincial).</p>

<h3>Distribución constitucional según el tipo de tributo</h3>
<table>
  <tr><th>Tributo</th><th>Nación</th><th>Provincias</th></tr>
  <tr><td><strong>Derechos de aduana</strong> (comercio exterior)</td><td><strong>Exclusivos de la Nación</strong> (arts. 4, 9, 75 inc. 1).</td><td>Prohibidos a las provincias.</td></tr>
  <tr><td><strong>Impuestos indirectos internos</strong></td><td colspan="2"><strong>Concurrentes</strong> (Nación y Provincias) — facultad de ambas.</td></tr>
  <tr><td><strong>Impuestos directos</strong></td><td>De la Nación <strong>por excepción</strong>: por tiempo determinado y si la defensa, seguridad común y bien general lo exigen (art. 75 inc. 2).</td><td><strong>En principio, de las provincias</strong> (poder no delegado).</td></tr>
</table>
<div class="callout"><strong>Regla base (art. 121 CN):</strong> las provincias conservan todo el poder no delegado a la Nación. La Nación tiene poderes <em>delegados/enumerados</em>; las provincias, los <em>residuales</em>.</p></div>

<h3>La realidad: concurrencia y coparticipación</h3>
<p>Como impuestos tan importantes como Ganancias e IVA son recaudados por la Nación (los directos "por excepción" se volvieron permanentes), se generó una fuerte <strong>concentración de la recaudación en la Nación</strong>. Para resolverlo se creó el régimen de <strong>coparticipación federal</strong> (art. 75 inc. 2, reforma 1994), que se estudia en la Unidad XI.</p>

<h3>Distribución implícita y cláusulas relevantes</h3>
<ul>
  <li><strong>Cláusula comercial</strong> (art. 75 inc. 13): la Nación regula el comercio interprovincial e internacional (límite a tributos provinciales que lo entorpezcan).</li>
  <li><strong>Cláusula del progreso / establecimientos de utilidad nacional</strong> (art. 75 incs. 18 y 30): habilita exenciones nacionales.</li>
  <li><strong>Igualdad y libre circulación territorial</strong> (arts. 9 a 12): prohíbe aduanas interiores y tributos al mero tránsito.</li>
</ul>

<h3>Distribución en materia de gastos</h3>
<p>La CN no enumera taxativamente los gastos de cada nivel, pero del reparto de competencias surge que cada nivel atiende sus funciones. En la práctica, las <strong>provincias concentran funciones de gasto</strong> intensivas (educación, salud, seguridad), mientras la <strong>Nación concentra la recaudación</strong>. Ese <strong>desequilibrio fiscal vertical</strong> es el núcleo del problema del federalismo fiscal argentino (Unidad XI).</p>
`
    },
    {
      id: "4.5",
      titulo: "Principios constitucionales tributarios",
      contenido: `
<p>El poder tributario está <strong>limitado por garantías constitucionales</strong> que protegen al contribuyente. Son límites al ejercicio del poder de imperio.</p>

<h3>Legalidad (o reserva de ley)</h3>
<div class="def"><b>"Nullum tributum sine lege":</b> no hay tributo sin ley previa que lo establezca. Solo el <strong>Congreso/Legislatura</strong> puede crear tributos y definir todos sus elementos esenciales (hecho imponible, sujetos, base, alícuota, exenciones).</div>
<p>Base: arts. 4, 17, 52 y 75 incs. 1 y 2 CN. Consecuencias: prohibición de delegar, de crear tributos por decreto (los DNU están <strong>vedados</strong> en materia tributaria — art. 99 inc. 3), y de la analogía.</p>

<h3>Igualdad</h3>
<p>(Art. 16 CN) "La igualdad es la base del impuesto." No es igualdad aritmética sino <strong>igualdad de tratamiento en igualdad de condiciones (capacidad contributiva)</strong>. Permite <strong>categorías razonables</strong> de contribuyentes y, por tanto, la progresividad. Equidad horizontal y vertical.</p>

<h3>Generalidad</h3>
<p>El tributo debe abarcar a <strong>todos</strong> los que tienen capacidad contributiva; las <strong>exenciones y beneficios</strong> son excepciones que deben fundarse en razones de equidad o de promoción económica/social, no en privilegios.</p>

<h3>Proporcionalidad</h3>
<p>(Arts. 4 y 75 inc. 2) Las contribuciones deben ser <strong>proporcionales a la capacidad contributiva</strong>. No impide la progresividad (la proporción se mide respecto de la riqueza, no de una alícuota única).</p>

<h3>Equidad</h3>
<p>(Art. 4) El tributo debe ser <strong>justo y razonable</strong>. Funciona como pauta de razonabilidad global del sistema.</p>

<h3>No confiscatoriedad</h3>
<div class="callout">Deriva de la <strong>garantía de propiedad</strong> (art. 17). Un tributo es <strong>confiscatorio</strong> cuando absorbe una <em>parte sustancial</em> de la renta o del capital. La Corte fijó pautas (históricamente, el <strong>33%</strong> como tope referencial para ciertos tributos sobre la renta o el patrimonio). Protege contra la destrucción de la fuente de riqueza.</div>

<h3>Otras garantías</h3>
<ul>
  <li><strong>Razonabilidad</strong> (art. 28): los medios deben ser proporcionados a los fines.</li>
  <li><strong>No retroactividad</strong> (derivada del derecho de propiedad — ver 4.2).</li>
  <li><strong>Tutela jurisdiccional</strong> y debido proceso (arts. 18 y 116).</li>
  <li><strong>Libre circulación territorial</strong> (arts. 9 a 12): prohibición de aduanas interiores.</li>
</ul>
`
    },
    {
      id: "4.6",
      titulo: "Potestad Tributaria Municipal. Autonomía municipal. Limitaciones",
      contenido: `
<h3>El problema</h3>
<p>¿Tienen los municipios poder tributario <strong>propio</strong> o solo el que les "presta" la provincia? La cuestión gira en torno a si el municipio es <em>autónomo</em> o meramente <em>autárquico</em>.</p>

<h3>Evolución jurisprudencial y constitucional</h3>
<ul>
  <li><strong>Tesis de la autarquía</strong> (Corte, "Ferrocarril del Sud", 1911): el municipio era una mera delegación administrativa de la provincia (autárquico), con poder tributario solo <em>derivado</em>.</li>
  <li><strong>Giro hacia la autonomía</strong> (Corte, "Rivademar c/ Municipalidad de Rosario", 1989): reconoce al municipio caracteres de <strong>autonomía</strong> (no es una simple repartición).</li>
  <li><strong>Reforma constitucional de 1994 — art. 123:</strong> impone a las provincias asegurar la <strong>autonomía municipal</strong>, reglando su alcance y contenido en el orden institucional, político, administrativo, <strong>económico y financiero</strong>.</li>
</ul>
<div class="callout"><strong>Estado actual:</strong> los municipios tienen poder tributario propio para crear <strong>tasas y contribuciones</strong> sobre servicios y obras de su competencia. Su alcance lo <em>regla cada provincia</em> en su constitución y ley orgánica municipal — por eso la autonomía es <em>limitada y reglada</em>. La Corte ("Intendente de La Rioja c/ Estado provincial", 2014) reafirmó la operatividad del art. 123.</p></div>

<h3>Límites a la potestad municipal</h3>
<ul>
  <li>No puede invadir materias <strong>delegadas a la Nación</strong> (comercio exterior, interprovincial) ni gravar lo prohibido por la CN.</li>
  <li>Debe respetar los <strong>compromisos asumidos por la provincia</strong> en la coparticipación federal (que obliga a no aplicar tributos <em>análogos</em> a los nacionales coparticipados — Ley 23.548).</li>
  <li>Sus tributos deben respetar los <strong>principios constitucionales</strong> (legalidad, igualdad, no confiscatoriedad).</li>
  <li>En la práctica, el principal tributo municipal es la <strong>Tasa por Inspección de Seguridad e Higiene</strong> (y tasas por servicios urbanos), cuya legitimidad exige la <em>efectiva prestación del servicio</em> y <em>razonable proporción con su costo</em> (ver tema 3.4; caso "Laboratorios Raffo c/ Municipalidad de Córdoba", 2009).</li>
</ul>
`
    }
  ],
  practicos: `
<p class="muted">Trabajos prácticos de la cátedra (consignas y respuestas).</p>

<div class="tp">
  <h4>TP Nº 1 — Poder tributario y distribución constitucional</h4>
  <p class="tp-consigna">Poder tributario (concepto, caracteres). Originario y derivado. Poder de los municipios (art. 123 CN). Cuadro de distribución de facultades Nación/Provincias. Distribución constitucional implícita.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>Caracteres del poder tributario:</strong> abstracto, permanente, irrenunciable, indelegable, normado e indivisible. <strong>Originario</strong> (nace directamente de la CN) y <strong>derivado</strong> (nace de leyes; los municipios lo reciben regladamente de la provincia).</p>
  <p><strong>Cuadro — Distribución constitucional de facultades tributarias:</strong></p>
  <table>
    <tr><th>Nivel</th><th>Impuestos indirectos</th><th>Impuestos directos</th><th>Base constitucional</th></tr>
    <tr>
      <td><strong>Nación</strong></td>
      <td>Externos (aduaneros): <em>exclusivos</em>. Internos: <em>concurrentes</em> con provincias.</td>
      <td>En principio provinciales; la Nación los aplica <em>por tiempo determinado</em> si la defensa, seguridad común y bien general lo exigen.</td>
      <td><span class="cn">art. 4</span> <span class="cn">art. 9</span> <span class="cn">art. 75 inc. 1</span> <span class="cn">art. 75 inc. 2</span></td>
    </tr>
    <tr>
      <td><strong>Provincias</strong></td>
      <td><em>Concurrentes</em> con la Nación y por tiempo indeterminado.</td>
      <td><em>Exclusivos y permanentes</em> (poder no delegado), salvo el uso transitorio por la Nación.</td>
      <td><span class="cn">art. 121</span> <span class="cn">art. 126</span> <span class="cn">art. 75 inc. 2</span></td>
    </tr>
    <tr>
      <td><strong>Municipios</strong></td>
      <td colspan="2">Poder tributario <em>derivado</em>: tasas y contribuciones, con el alcance que fije la Constitución provincial (autonomía reglada).</td>
      <td><span class="cn">art. 5</span> <span class="cn">art. 123</span></td>
    </tr>
  </table>
  <p class="muted"><strong>Distribución implícita:</strong> legislación de fondo (<span class="cn">art. 75 inc. 12</span>), comercio interjurisdiccional y prohibición de aduanas interiores (<span class="cn">art. 9 a 12</span>), cláusula de prosperidad / del progreso (<span class="cn">art. 75 inc. 18</span> y <span class="cn">inc. 19</span>: exenciones nacionales, salvo tasas retributivas y contribuciones de mejoras razonables) y establecimientos de utilidad nacional (<span class="cn">art. 75 inc. 30</span>).</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 2 y 3 — Derecho financiero e interpretación</h4>
  <p class="tp-consigna">Derecho financiero (concepto, contenido, fuentes/pirámide jurídica). Interpretación de las normas y métodos. Retroactividad: ¿se aplica en materia tributaria?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>Fuentes (Villegas):</strong> Constitución, leyes financieras, decretos con fuerza de ley, reglamentos, tratados internacionales y convenciones institucionales internas. La jerarquía sigue la <strong>pirámide de Kelsen</strong> — una norma inferior no puede contradecir a la superior (supremacía constitucional, <span class="cn">art. 31</span>):</p>
  <figure class="fig">
    <svg viewBox="0 0 420 240" role="img" aria-label="Pirámide jurídica de fuentes del derecho financiero">
      <polygon class="box-accent" points="210,20 260,70 160,70"/>
      <polygon class="box" points="160,72 260,72 300,122 120,122"/>
      <polygon class="box" points="120,124 300,124 335,174 85,174"/>
      <polygon class="box" points="85,176 335,176 370,226 50,226"/>
      <text class="lbl-accent" x="210" y="60" text-anchor="middle">CN + Tratados</text>
      <text class="lbl" x="210" y="103" text-anchor="middle">Leyes (Congreso)</text>
      <text class="lbl" x="210" y="153" text-anchor="middle">Decretos y reglamentos</text>
      <text class="lbl" x="210" y="206" text-anchor="middle">Resoluciones · actos administrativos</text>
      <text class="lbl-sm" x="278" y="40">↑ mayor jerarquía</text>
    </svg>
    <figcaption>Los tratados de DD.HH. tienen jerarquía constitucional (<span class="cn">art. 75 inc. 22</span>); los demás tratados están por encima de las leyes (<span class="cn">art. 75 inc. 24</span>).</figcaption>
  </figure>
  <p><strong>Métodos de interpretación:</strong> literal, lógico, histórico, evolutivo y el de la <em>significación económica</em> (propio del derecho tributario: prevalece la realidad económica sobre las formas jurídicas — Ley 11.683, art. 2).</p>
  <p><strong>Retroactividad:</strong> como regla NO se pueden gravar hechos económicos ya perfeccionados en el pasado; lo impiden la protección del derecho de propiedad (<span class="cn">art. 17</span>) y el pago con <em>efecto liberatorio</em> (que crea un derecho adquirido).</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 4 — Derecho tributario, autonomía y codificación</h4>
  <p class="tp-consigna">Concepto y divisiones del derecho tributario. ¿Es autónomo? Codificación: ¿hay código tributario nacional y provincial?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>Divisiones:</strong> constitucional, sustantivo/material, formal/administrativo, procesal, penal e internacional. <strong>Autonomía:</strong> según Martín y Rodríguez Usé, solo el derecho tributario <em>sustantivo</em> tiene autonomía (instituciones propias). <strong>Codificación:</strong> a nivel nacional rige la <strong>Ley 11.683</strong> de Procedimiento Tributario (no hay código integral); las provincias tienen <strong>Códigos Fiscales</strong> + leyes tarifarias.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 5 — Principios constitucionales (Caso 2: V/F)</h4>
  <p class="tp-consigna">Marcar Verdadero o Falso.</p>
  <details class="tp-toggle"><summary>Ver cuadro de principios constitucionales (referencia)</summary>
  <table>
    <tr><th>Principio</th><th>Contenido</th><th>CN</th></tr>
    <tr><td><strong>Legalidad / reserva de ley</strong></td><td>No hay tributo sin ley previa del Congreso («nullum tributum sine lege»).</td><td><span class="cn">art. 4</span> <span class="cn">art. 17</span> <span class="cn">art. 52</span> <span class="cn">art. 75 inc. 1 y 2</span></td></tr>
    <tr><td><strong>Igualdad</strong></td><td>La ley es igual para los iguales en igualdad de circunstancias (igualdad como base del impuesto).</td><td><span class="cn">art. 16</span></td></tr>
    <tr><td><strong>Generalidad</strong></td><td>Todos los que tengan capacidad contributiva deben tributar; las exenciones son la excepción.</td><td><span class="cn">art. 16</span></td></tr>
    <tr><td><strong>Proporcionalidad / capacidad contributiva</strong></td><td>La carga se gradúa según la aptitud económica del contribuyente.</td><td><span class="cn">art. 4</span> <span class="cn">art. 16</span> <span class="cn">art. 75 inc. 2</span></td></tr>
    <tr><td><strong>Equidad</strong></td><td>Justicia en el reparto (horizontal y vertical).</td><td><span class="cn">art. 4</span></td></tr>
    <tr><td><strong>No confiscatoriedad</strong></td><td>El tributo no puede absorber una parte sustancial de la propiedad o la renta (tope pretoriano ≈ 33%).</td><td><span class="cn">art. 17</span></td></tr>
  </table>
  </details>
  <details class="tp-toggle"><summary>Ver respuestas</summary>
  <p class="tp-resp">a) Igualdad "para distribuir <em>en menor medida</em> la carga..." → <strong>F</strong> (la igualdad —<span class="cn">art. 16</span>— busca distribuir con imparcialidad y uniformidad según la <em>justa</em> parte, no "en menor medida").</p>
  <p>b) Equidad determinada "<em>solamente en función de sus gastos</em>" → <strong>F</strong> (se determina según la <strong>capacidad contributiva</strong>).</p>
  <p>c) "Equidad <em>horizontal</em> = quienes tienen mayor capacidad pagan más" → <strong>F</strong> (eso es equidad <strong>vertical</strong>; la horizontal es igual trato a quienes están en igual situación).</p>
  <p>d) "No confiscatoriedad: los impuestos <em>indirectos</em> que superen el 33% son confiscatorios" → <strong>F</strong> (el tope referencial del 33% la Corte lo aplica a tributos <em>directos</em>/patrimoniales; los indirectos son trasladables).</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 6 — Recursos nacionales y provinciales (multiple choice)</h4>
  <p class="tp-consigna">Marcar la opción correcta sobre qué recursos corresponden a la Nación y cuáles a las Provincias según la CN.</p>
  <details class="tp-toggle"><summary>Ver respuestas</summary>
  <p class="tp-resp"><strong>Nación:</strong> ninguna de las tres primeras opciones es exacta → la regla correcta es: <em>exclusivos</em> los derechos aduaneros (<span class="cn">art. 4</span> <span class="cn">art. 75 inc. 1</span>); <em>concurrentes y permanentes</em> con las provincias los impuestos <strong>indirectos</strong> internos; y los <strong>directos</strong> solo por <em>tiempo determinado</em> (defensa, seguridad común y bien general) — <span class="cn">art. 75 inc. 2</span>. Las opciones que invierten directos/indirectos son falsas.</p>
  <p><strong>Provincias:</strong> es correcta la opción que dice: "exclusiva y permanente los impuestos <strong>directos</strong> (poder no delegado, <span class="cn">art. 121</span>), salvo urgencia nacional en que la Nación los aplica por tiempo determinado; en concurrencia con la Nación y por tiempo indeterminado, los impuestos <strong>indirectos</strong>."</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 7 y 8 — Autonomía municipal y prescripción</h4>
  <p class="tp-consigna">TP7: autonomía municipal (concepto, alcance y limitaciones). TP8: determinar los períodos no prescriptos de varias empresas (impuesto a las Ganancias / IVA).</p>
  <details class="tp-toggle"><summary>Ver respuesta y método</summary>
  <p class="tp-resp"><strong>Autonomía municipal:</strong> ver tema <strong>4.6</strong> (art. 123 CN, reglada por la provincia; límites: no invadir materias nacionales, respetar la coparticipación —no tributos análogos— y los principios constitucionales).</p>
  <p><strong>Prescripción (Ley 11.683):</strong> regla general de <strong>5 años</strong> para contribuyentes inscriptos. El plazo comienza el <strong>1° de enero siguiente</strong> al año en que vence la presentación/pago de la DDJJ. Para sociedades, la DDJJ de Ganancias vence unos 5 meses después del cierre de ejercicio; a partir de ahí se cuenta el 1° de enero siguiente + 5 años. Aplicá esa regla a cada fecha de cierre del enunciado para obtener los períodos aún exigibles.</p>
  </details>
</div>
`
});
