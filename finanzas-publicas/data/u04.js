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
  <li><strong>Normado e indivisible:</strong> se ejerce dentro del marco de la Constitución y pertenece al Estado como unidad.</li>
  <li><strong>Limitado:</strong> por la Constitución (principios y garantías) y por la distribución de competencias en el sistema federal.</li>
</ul>

<h3>Poder tributario originario y derivado</h3>
<table>
  <tr><th>Originario</th><th>Derivado</th></tr>
  <tr><td>Nace directamente de la <strong>Constitución</strong> o de principios institucionales. Lo tienen la <strong>Nación</strong> y las <strong>Provincias</strong> (las provincias son preexistentes y conservan todo el poder no delegado — art. 121 CN).</td><td>No lo otorga la carta constitucional, sino que surge de una <strong>ley</strong> dictada por un ente con poder originario. Tradicionalmente se atribuye a los <strong>Municipios</strong> (su poder deriva de las constituciones provinciales).</td></tr>
</table>
<div class="callout">Tras la reforma de 1994 (art. 123 CN) que consagra la <strong>autonomía municipal</strong>, parte de la doctrina y la jurisprudencia ("Rivademar", "Municipalidad de La Plata") reconocen a los municipios un poder tributario propio, aunque <em>limitado y reglado</em> por la provincia (ver tema 4.6).</div>
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
  <li>Posición intermedia (Martín y Rodríguez Usé): solo el derecho tributario <em>sustantivo</em> tiene autonomía; el resto se apoya en otras ramas. Autonomía <em>didáctica y metodológica</em> dentro de la unidad del orden jurídico.</li>
</ul>

<h3>Codificación</h3>
<p>Conveniencia de reunir los principios generales en un <strong>Código Tributario</strong> (no las leyes de cada impuesto). En Argentina:</p>
<ul>
  <li>A nivel nacional no hay un código integral; rige la <strong>Ley 11.683</strong> de Procedimiento Tributario, que cumple ese rol parcialmente, junto con las leyes de cada impuesto.</li>
  <li>Las provincias tienen sus <strong>Códigos Fiscales / Tributarios</strong> (parte general + parte especial de cada tributo) y sus <strong>leyes tarifarias</strong>.</li>
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
<div class="callout"><strong>Regla base (art. 121 CN):</strong> las provincias conservan todo el poder no delegado a la Nación. La Nación tiene poderes <em>delegados/enumerados</em>; las provincias, los <em>residuales</em>.</div>

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
<p>(Art. 4) El tributo debe ser <strong>justo y razonable</strong>. Incluye una valoración de lo que es justo desde el punto de vista moral y cultural; funciona como pauta de razonabilidad global del sistema.</p>

<h3>No confiscatoriedad</h3>
<div class="callout">Deriva de la <strong>garantía de propiedad</strong> (art. 17). Un tributo es <strong>confiscatorio</strong> cuando absorbe una <em>parte sustancial</em> de la renta o del capital. La Corte fijó pautas (históricamente, el <strong>33%</strong> como tope referencial para ciertos tributos <em>directos</em> sobre la renta o el patrimonio). Protege contra la destrucción de la fuente de riqueza.</div>

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
<div class="callout"><strong>Estado actual:</strong> los municipios tienen poder tributario propio para crear <strong>tasas y contribuciones</strong> sobre servicios y obras de su competencia. Su alcance lo <em>regla cada provincia</em> en su constitución y ley orgánica municipal — por eso la autonomía es <em>limitada y reglada</em>. La Corte ("Intendente de La Rioja c/ Estado provincial", 2014) reafirmó la operatividad del art. 123.</div>

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
<p class="muted"><strong>Unidad IV — El Marco Jurídico de la Hacienda Pública.</strong> Guía de trabajos prácticos de la cátedra (TP N.º 1 a 8), con las consignas y sus respuestas resueltas.</p>

<div class="tp">
  <h4>TP N.º 1 — Poder tributario y distribución constitucional</h4>
  <p class="tp-consigna">1) Poder tributario: concepto, caracteres y ejemplos. 2) Poder originario y derivado; alcance de Nación, Provincias y Municipios. 3) ¿Qué poder tributario tienen los municipios (art. 123 CN)? 4) Cuadro de distribución de facultades Nación/Provincias con los artículos. 5) Funciones de cada nivel de gobierno según la CN y su incidencia en el gasto. 6) Distribución constitucional implícita: enumeración y descripción. 7) ¿Puede la Nación dictar una norma que exima de un impuesto provincial? 8) ¿Puede una provincia o municipio fijar plazos de prescripción distintos de los del Código Civil y Comercial?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>

  <p class="tp-resp"><strong>1) Poder tributario:</strong> facultad inherente al Estado de exigir tributos dentro de los límites de la Constitución, que solo puede manifestarse por medio de normas legales. <em>Caracteres:</em> abstracto, permanente, irrenunciable, indelegable, normado e indivisible. <em>Ejemplo:</em> la Nación crea por ley el IVA; una provincia, el Impuesto Inmobiliario; un municipio, la tasa de seguridad e higiene.</p>

  <p><strong>2) Originario y derivado:</strong> el poder <em>originario</em> nace de la propia Constitución o de principios institucionales (Nación y Provincias); el <em>derivado</em> no lo otorga la carta constitucional sino leyes dictadas por un Estado en ejercicio de su poder originario (los municipios). <em>Alcance:</em> la Nación tiene los poderes delegados/enumerados (aduaneros exclusivos, indirectos concurrentes, directos por excepción); las Provincias, los residuales (todo el poder no delegado, art. 121); los Municipios, el que les reconoce y regla la Constitución provincial.</p>

  <p><strong>3) Poder de los municipios (art. 123 CN):</strong> pueden tener autonomía económico-financiera <em>si las Constituciones provinciales así lo prevén</em>. Crean tasas y contribuciones de su competencia; su alcance es reglado por la provincia (autonomía limitada).</p>

  <p><strong>4) Cuadro — Distribución constitucional de facultades tributarias:</strong></p>
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
      <td colspan="2">Poder tributario <em>reglado</em>: tasas y contribuciones, con el alcance que fije la Constitución provincial (autonomía reglada).</td>
      <td><span class="cn">art. 5</span> <span class="cn">art. 123</span></td>
    </tr>
  </table>

  <p><strong>5) Funciones por nivel de gobierno e incidencia en el gasto:</strong></p>
  <table>
    <tr><th>Nación</th><th>Provincias</th><th>Municipios</th></tr>
    <tr>
      <td>Defensa, relaciones exteriores, moneda, comercio exterior e interprovincial, legislación de fondo, seguridad social. Concentra la <em>recaudación</em>.</td>
      <td>Educación, salud, seguridad, justicia ordinaria, administración provincial. Concentran el <em>gasto</em> en servicios sociales.</td>
      <td>Servicios urbanos: alumbrado, barrido y limpieza, higiene, tránsito, obras locales.</td>
    </tr>
  </table>
  <p class="muted">De ahí el <strong>desequilibrio fiscal vertical</strong>: la Nación recauda más de lo que gasta y las provincias gastan más de lo que recaudan (se corrige con la coparticipación, Unidad XI).</p>

  <p><strong>6) Distribución constitucional implícita:</strong></p>
  <ol>
    <li><strong>Legislación de fondo</strong> (<span class="cn">art. 75 inc. 12</span>): el Congreso dicta los códigos de fondo; se discute hasta dónde estas leyes limitan las potestades tributarias provinciales.</li>
    <li><strong>Comercio interjurisdiccional</strong> (<span class="cn">art. 75 inc. 13</span>): la Nación regula el comercio con las naciones y de las provincias entre sí; los fiscos locales pueden gravar (p. ej., Ingresos Brutos) en tanto no constituyan una <em>aduana interior</em>.</li>
    <li><strong>Cláusula de prosperidad / del progreso</strong> (<span class="cn">art. 75 inc. 18 y 19</span>): la Nación puede otorgar exenciones de tributos provinciales y municipales; la CSJN las validó siempre que <em>no</em> alcancen a tasas retributivas de servicios ni a contribuciones de mejoras razonables (correspondientes a servicios prestados u obras realizadas y no extorsivas).</li>
    <li><strong>Establecimientos de utilidad nacional</strong> (<span class="cn">art. 75 inc. 30</span>): las provincias pueden gravar actos cumplidos en dichos establecimientos en tanto no interfieran con la finalidad de utilidad nacional.</li>
  </ol>

  <p><strong>7) ¿Puede la Nación eximir de un impuesto provincial?</strong> Sí. En ejercicio de la <em>cláusula del progreso</em> (<span class="cn">art. 75 inc. 18</span>), la Nación puede dictar normas que liberen o eximan de tributos provinciales/municipales cuando promueven el bienestar general. Límite fijado por la CSJN: esa liberalidad <em>no</em> puede alcanzar a las <strong>tasas retributivas de servicios</strong> ni a las <strong>contribuciones de mejoras</strong> razonables.</p>

  <p><strong>8) ¿Plazos de prescripción locales distintos del Código Civil y Comercial?</strong> Tema debatido. La CSJN, en <em>"Filcrosa"</em> (2003), sostuvo que las provincias y municipios <strong>no pueden</strong> fijar plazos de prescripción de tributos locales distintos de los del Código Civil, por tratarse de legislación de fondo delegada a la Nación (<span class="cn">art. 75 inc. 12</span>). El nuevo <strong>Código Civil y Comercial (art. 2532)</strong> admite que la legislación local regule la prescripción de los tributos locales; no obstante, la Corte (<em>"Volkswagen c/ Prov. de Misiones"</em>, 2019) mantuvo la doctrina Filcrosa para hechos anteriores a su vigencia. En síntesis: para tributos locales posteriores al CCyC, las jurisdicciones locales pueden regular su prescripción.</p>
  </details>
</div>

<div class="tp">
  <h4>TP N.º 2 — Derecho financiero y fuentes</h4>
  <p class="tp-consigna">1) Derecho financiero: concepto y contenido. 2) Cuadro con la importancia de las fuentes conforme la pirámide jurídica.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <blockquote class="autor"><strong>Derecho financiero (Villegas):</strong> "es el conjunto de normas jurídicas que regulan la actividad financiera, orgánicamente considerada, y las relaciones que dan lugar a la adquisición, conservación y empleo de los medios económicos del Estado".<cite>H. B. Villegas</cite></blockquote>
  <p class="tp-resp"><strong>Contenido:</strong> dos grandes sectores — (1) la ordenación jurídica de los <em>recursos</em> económicos del Estado (más ligada a la ciencia financiera y la teoría económica y monetaria) y (2) el estudio de las normas que regulan la <em>gestión financiera</em>: el presupuesto y los actos administrativos por los que se obtienen ingresos y se ordenan gastos y pagos.</p>
  <p><strong>Fuentes (Villegas), conforme la pirámide jurídica</strong> — supremacía constitucional (<span class="cn">art. 31</span>): una norma inferior no puede contradecir a la superior.</p>
  <figure class="fig">
    <svg viewBox="0 0 420 240" role="img" aria-label="Pirámide jurídica de fuentes del derecho financiero">
      <polygon class="box-accent" points="210,20 260,70 160,70"/>
      <polygon class="box" points="160,72 260,72 300,122 120,122"/>
      <polygon class="box" points="120,124 300,124 335,174 85,174"/>
      <polygon class="box" points="85,176 335,176 370,226 50,226"/>
      <text class="lbl-accent" x="210" y="60" text-anchor="middle">CN + Tratados</text>
      <text class="lbl" x="210" y="103" text-anchor="middle">Leyes financieras (Congreso)</text>
      <text class="lbl" x="210" y="153" text-anchor="middle">Decretos con fuerza de ley · reglamentos</text>
      <text class="lbl" x="210" y="206" text-anchor="middle">Resoluciones · convenciones internas</text>
      <text class="lbl-sm" x="278" y="40">↑ mayor jerarquía</text>
    </svg>
    <figcaption>Villegas enumera: la Constitución Nacional · las leyes financieras · los decretos con fuerza de ley · el reglamento · los tratados internacionales · las convenciones institucionales internas · otras. Los tratados de DD.HH. tienen jerarquía constitucional (<span class="cn">art. 75 inc. 22</span>); los demás tratados están por encima de las leyes (<span class="cn">art. 75 inc. 24</span>).</figcaption>
  </figure>
  </details>
</div>

<div class="tp">
  <h4>TP N.º 3 — Interpretación de las normas tributarias</h4>
  <p class="tp-consigna">1) ¿Qué significa interpretar una norma y quién la interpreta? 2) Criterios de interpretación. 3) ¿Qué criterio es propio del derecho tributario? 4) Retroactividad: ¿es aplicable en materia tributaria? 5) ¿Se pueden gravar hechos económicos perfeccionados en el pasado? 6) ¿Hay jurisprudencia?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>1) Interpretar</strong> es desentrañar el sentido y alcance de la norma para aplicarla a un caso. La interpretan el <em>legislador</em> (auténtica), la <em>administración</em> (Fisco, mediante reglamentos y dictámenes), los <em>jueces</em> (judicial) y la <em>doctrina</em>.</p>
  <p><strong>2) Criterios / métodos:</strong> literal, lógico, histórico y de la <em>significación (o realidad) económica</em>.</p>
  <p><strong>3) Criterio propio del derecho tributario:</strong> el <strong>método de la significación económica</strong> (Ley 11.683, art. 2). Es el <em>característico y distintivo</em> de esta rama: para determinar la verdadera naturaleza del hecho imponible se atiende a los actos efectivamente realizados por sobre las formas jurídicas inadecuadas (herramienta contra la elusión). No se emplea del mismo modo en las demás ramas del derecho.</p>
  <p><strong>4) y 5) Retroactividad:</strong> la retroactividad implica aplicar la ley a hechos ocurridos antes de su sanción. En materia tributaria, como regla, <strong>NO</strong> se pueden gravar hechos económicos ya perfeccionados en el pasado: lo impiden la protección del derecho de propiedad (<span class="cn">art. 17</span>) y el pago con <em>efecto liberatorio</em>, que crea un derecho adquirido.</p>
  <p><strong>6) Jurisprudencia:</strong> la CSJN protegió el efecto liberatorio del pago y limitó la retroactividad en fallos como <em>"Insúa"</em> (1987) y <em>"Bernasconi"</em>; en tributos de hecho imponible de ejercicio (formación sucesiva) admitió cierta flexibilidad si la ley se dicta antes del cierre (<em>"Ángel Moiso"</em>).</p>
  </details>
</div>

<div class="tp">
  <h4>TP N.º 4 — Derecho tributario, autonomía y codificación</h4>
  <p class="tp-consigna">a) Concepto y divisiones. b) ¿Cuándo se dice que una rama tiene autonomía? c) ¿El derecho tributario es autónomo? (fundamentar doctrinariamente). d) Codificación: ¿hay Código Tributario internacional, nacional y provincial?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>a) Concepto (Villegas):</strong> conjunto de normas jurídicas que se refieren a los tributos, regulándolos en sus distintos aspectos. <strong>Divisiones:</strong> constitucional, sustantivo/material, formal/administrativo, procesal, penal e internacional.</p>
  <p><strong>b) Autonomía:</strong> una rama es autónoma cuando posee <em>principios, institutos y métodos propios</em>, con naturaleza distinta de las demás ramas.</p>
  <p><strong>c) ¿Es autónomo?</strong> Según <em>José Martín y Rodríguez Usé</em>, el derecho tributario no tiene autonomía estructural ni dogmática en su conjunto; únicamente el <strong>derecho tributario sustantivo</strong> goza de autonomía jurídica, por estar formado por instituciones uniformes con naturaleza propia (hecho imponible, capacidad contributiva, realidad económica). Otros autores (Jarach, Giuliani Fonrouge) sostienen una autonomía científica más amplia.</p>
  <p><strong>d) Codificación:</strong> a nivel <em>internacional</em>, el Modelo de Código Tributario para América Latina (OEA/BID) como referencia; a nivel <em>nacional</em> rige la <strong>Ley 11.683</strong> de Procedimiento Tributario y las leyes impositivas (no hay código integral); en las <em>provincias</em>, Códigos Tributarios/Fiscales y leyes tarifarias o impositivas.</p>
  </details>
</div>

<div class="tp">
  <h4>TP N.º 5 — Principios constitucionales (Caso 1 y Caso 2)</h4>
  <p class="tp-consigna">Caso 1: 11 preguntas conceptuales sobre los principios constitucionales tributarios. Caso 2: afirmaciones para marcar Verdadero o Falso.</p>

  <details class="tp-toggle"><summary>Ver respuesta — Caso 1</summary>
  <p class="tp-resp"><strong>1) Importancia y alcance:</strong> los principios constitucionales son <em>límites</em> al poder tributario y <em>garantías</em> del contribuyente; todo tributo debe respetarlos bajo pena de inconstitucionalidad.</p>
  <p><strong>2) Principios tributarios en la CN:</strong> legalidad, igualdad, generalidad, proporcionalidad, equidad, no confiscatoriedad, razonabilidad y libre circulación territorial. En materia de <em>gasto</em>: legalidad presupuestaria y equidad en el reparto (arts. 4 y 75).</p>
  <p><strong>3) Elementos implícitos en la legalidad:</strong> solo por ley (del Congreso/Legislatura), previa, que defina todos los elementos esenciales del tributo (hecho imponible, sujetos, base, alícuota, exenciones); prohibición de delegar y de crear tributos por decreto.</p>
  <p><strong>4) Alcance de la legalidad:</strong> abarca la creación, modificación y extinción del tributo y todos sus elementos esenciales; veda la analogía y los DNU en materia tributaria (<span class="cn">art. 99 inc. 3</span>).</p>
  <p><strong>5) Igualdad</strong> (<span class="cn">art. 16</span>): "la igualdad es la base del impuesto"; igual trato en igualdad de condiciones (capacidad contributiva), admitiendo categorías razonables. <em>Ejemplo:</em> escalas progresivas de Ganancias que gravan más a quienes más ganan.</p>
  <p><strong>6) Principio con valoración moral/cultural de lo justo:</strong> la <strong>equidad</strong> (<span class="cn">art. 4</span>).</p>
  <p><strong>7) Proporcionalidad</strong> (<span class="cn">art. 4</span> y <span class="cn">art. 75 inc. 2</span>): la carga se gradúa según la capacidad contributiva; no obsta a la progresividad. <em>Ejemplo:</em> el inmobiliario según la valuación del inmueble.</p>
  <p><strong>8) Generalidad</strong> (<span class="cn">art. 16</span>): todos los que tienen capacidad contributiva deben tributar; las exenciones son la excepción fundada. <em>Ejemplo:</em> exención a entidades de bien público.</p>
  <p><strong>9) No confiscatoriedad</strong> (<span class="cn">art. 17</span>): el tributo no puede absorber una parte sustancial de la renta o el capital. <em>Ejemplo:</em> un impuesto que consuma la totalidad de la renta del inmueble.</p>
  <p><strong>10) No confiscatoriedad por tipo de tributo (jurisprudencia):</strong> la Corte fijó el tope referencial del <strong>33%</strong> para tributos <em>directos</em> sobre la renta o el patrimonio; en los <em>indirectos</em> (trasladables) no rige ese límite del mismo modo.</p>
  <p><strong>11) Relación con el derecho de propiedad:</strong> sí — la <strong>no confiscatoriedad</strong> (y también la irretroactividad) derivan directamente de la garantía de propiedad (<span class="cn">art. 17</span>).</p>
  </details>

  <details class="tp-toggle"><summary>Ver respuesta — Caso 2 (V/F)</summary>
  <p class="tp-resp">a) Igualdad para distribuir "<em>en menor medida</em>" la carga → <strong>F</strong> (la igualdad —<span class="cn">art. 16</span>— busca distribuir con imparcialidad y uniformidad la <em>justa</em> parte, no "en menor medida").</p>
  <p>b) Equidad determinada "<em>solamente en función de sus gastos</em>" → <strong>F</strong> (se determina según la <strong>capacidad contributiva</strong>).</p>
  <p>c) "Equidad <em>horizontal</em> = quienes tienen mayor capacidad pagan más" → <strong>F</strong> (eso es equidad <strong>vertical</strong>; la horizontal es igual trato a quienes están en igual situación).</p>
  <p>d) "No confiscatoriedad: los impuestos <em>indirectos</em> que superen el 33% son confiscatorios" → <strong>F</strong> (el tope referencial del 33% la Corte lo aplica a tributos <em>directos</em>/patrimoniales; los indirectos son trasladables).</p>
  </details>
</div>

<div class="tp">
  <h4>TP N.º 6 — Recursos nacionales y provinciales (opción múltiple)</h4>
  <p class="tp-consigna">Marcar la opción correcta sobre qué recursos corresponden a la Nación (1) y a las Provincias (2) según la CN.</p>
  <details class="tp-toggle"><summary>Ver respuestas</summary>
  <p class="tp-resp"><strong>1) Recursos Nacionales → la correcta es la opción d) "Ninguna respuesta es correcta".</strong> Las opciones a), b) y c) son falsas porque invierten el régimen. La regla correcta es: <em>exclusivos</em> los derechos aduaneros (<span class="cn">art. 4</span> <span class="cn">art. 75 inc. 1</span>); <em>concurrentes y permanentes</em> con las provincias los impuestos <strong>indirectos</strong> internos; y los <strong>directos</strong> solo por <em>tiempo determinado</em> ante defensa, seguridad común y bien general (<span class="cn">art. 75 inc. 2</span>).</p>
  <p><strong>2) Recursos Provinciales → la correcta es la opción c):</strong> "en forma exclusiva y permanente los impuestos <strong>directos</strong>, salvo los casos de urgencia nacional en que puede aplicarlos la Nación por <em>tiempo determinado</em>; en concurrencia con la Nación y por tiempo indeterminado, los impuestos <strong>indirectos</strong>" (poder no delegado, <span class="cn">art. 121</span>). La b) es falsa porque dice "tiempo indeterminado".</p>
  </details>
</div>

<div class="tp">
  <h4>TP N.º 7 — Autonomía municipal</h4>
  <p class="tp-consigna">1) Autonomía municipal: concepto y alcance. 2) Limitaciones al alcance de la autonomía municipal.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>1) Concepto y alcance:</strong> la autonomía municipal (<span class="cn">art. 123</span> CN, tras la reforma de 1994) es la capacidad del municipio de dictar sus propias normas y administrarse en el orden institucional, político, administrativo, económico y financiero, con el <em>alcance y contenido</em> que regla cada Constitución provincial. En lo tributario, habilita a crear <strong>tasas y contribuciones</strong> de su competencia (giro de "Ferrocarril del Sud" —autarquía— a "Rivademar" —autonomía—).</p>
  <p><strong>2) Limitaciones:</strong></p>
  <ul>
    <li>Es una autonomía <em>reglada</em>: su alcance lo fija la provincia (Constitución y ley orgánica municipal).</li>
    <li>No puede invadir materias delegadas a la Nación (comercio exterior e interprovincial).</li>
    <li>Debe respetar la <strong>coparticipación federal</strong>: no aplicar tributos <em>análogos</em> a los nacionales coparticipados (Ley 23.548).</li>
    <li>Debe respetar los principios constitucionales (legalidad, igualdad, no confiscatoriedad) y, en sus tasas, la efectiva prestación del servicio y la razonable proporción con el costo ("Laboratorios Raffo", 2009).</li>
  </ul>
  </details>
</div>

<div class="tp">
  <h4>TP N.º 8 — Instituto de la prescripción</h4>
  <p class="tp-consigna">Determinar los períodos no prescriptos / la fecha de prescripción en los casos a) a f) (Ganancias e IVA) y de las DDJJ de IVA de los períodos 12/2022, 01/2021, 05/2022, 08/2023 y 05/2024.</p>
  <details class="tp-toggle"><summary>Ver regla, casos resueltos y tabla</summary>

  <p class="tp-resp"><strong>Regla (Ley 11.683, arts. 56 y 57):</strong> para contribuyentes <em>inscriptos</em> la prescripción de las facultades del Fisco (determinar y exigir el tributo) es de <strong>5 años</strong>. El plazo <strong>comienza a correr el 1.º de enero siguiente</strong> al año en que se produce el <em>vencimiento general</em> de la DDJJ, y se cumple 5 años después (el 1.º de enero).</p>
  <ul>
    <li><strong>Ganancias — sociedades:</strong> la DDJJ vence aproximadamente en el <em>5.º mes posterior</em> al cierre del ejercicio.</li>
    <li><strong>Ganancias — personas humanas:</strong> período fiscal = año calendario; la DDJJ vence en <em>junio</em> del año siguiente.</li>
    <li><strong>IVA:</strong> período mensual; la DDJJ de cada mes vence al <em>mes siguiente</em>.</li>
  </ul>

  <h6>Casos a) a f)</h6>
  <table class="tp-table">
    <tr><th>Caso</th><th>Cierre / período</th><th>Vence DDJJ</th><th>Inicia cómputo (1/1 sig.)</th><th>Prescribe el</th></tr>
    <tr><td><strong>a)</strong> C. Domínguez (P. humana, Ganancias)</td><td>Año 2020 (ref.)</td><td>Jun/2021</td><td>1/1/2022</td><td class="der">1/1/2027</td></tr>
    <tr><td><strong>b)</strong> La Editorial S.R.L. (Ganancias)</td><td>28/02/2024</td><td>Jul/2024</td><td>1/1/2025</td><td class="der">1/1/2030</td></tr>
    <tr><td><strong>c)</strong> Normal S.A. (Ganancias)</td><td>31/03/2024</td><td>Ago/2024</td><td>1/1/2025</td><td class="der">1/1/2030</td></tr>
    <tr><td><strong>d)</strong> Zara S.A. (Ganancias)</td><td>31/08/2024</td><td>Ene/2025</td><td>1/1/2026</td><td class="der">1/1/2031</td></tr>
    <tr><td><strong>e)</strong> No Me Olvides S.A. (IVA)</td><td>ej. 31/05/2024</td><td>mensual</td><td>según mes</td><td class="der">ver tabla IVA</td></tr>
    <tr><td><strong>f)</strong> Mara S.A. (Ganancias)</td><td>31/12/2023</td><td>May/2024</td><td>1/1/2025</td><td class="der">1/1/2030</td></tr>
  </table>
  <p><strong>Períodos no prescriptos (a la fecha de cada intimación):</strong></p>
  <ul>
    <li><strong>a)</strong> Asumiendo intimación en 2026: están vigentes los períodos <strong>2020 a 2025</strong> (el 2019 prescribió el 1/1/2026 y los anteriores, antes).</li>
    <li><strong>b)</strong> Intimación 14/05/2024: exigibles los ejercicios cerrados <strong>02/2019, 02/2020, 02/2021, 02/2022 y 02/2023</strong> (el 02/2018 prescribió el 1/1/2024; el 02/2024 aún no había vencido).</li>
    <li><strong>c)</strong> La intimación indicada (10/01/2024) es anterior al cierre (31/03/2024): se interpreta <strong>10/01/2025</strong>. Exigibles: ejercicios <strong>03/2020 a 03/2024</strong> (el 03/2019 prescribió el 1/1/2025).</li>
    <li><strong>d)</strong> El ejercicio cerrado el 31/08/2024 <strong>prescribe el 1/1/2031</strong>.</li>
    <li><strong>e)</strong> Intimación 15/08/2024 (IVA): exigibles los períodos mensuales desde <strong>12/2018 en adelante</strong> (hasta 11/2018 prescribieron el 1/1/2024).</li>
    <li><strong>f)</strong> El ejercicio cerrado el 31/12/2023 (Ganancias) <strong>prescribe el 1/1/2030</strong>.</li>
  </ul>

  <h6>DDJJ de IVA — ¿cuándo prescriben?</h6>
  <table class="tp-table">
    <tr><th>Período IVA</th><th>Vence</th><th>Inicia cómputo (1/1 sig.)</th><th>Prescribe el</th></tr>
    <tr><td>12/2022</td><td>Ene/2023</td><td>1/1/2024</td><td class="der">1/1/2029</td></tr>
    <tr><td>01/2021</td><td>Feb/2021</td><td>1/1/2022</td><td class="der">1/1/2027</td></tr>
    <tr><td>05/2022</td><td>Jun/2022</td><td>1/1/2023</td><td class="der">1/1/2028</td></tr>
    <tr><td>08/2023</td><td>Sep/2023</td><td>1/1/2024</td><td class="der">1/1/2029</td></tr>
    <tr><td>05/2024</td><td>Jun/2024</td><td>1/1/2025</td><td class="der">1/1/2030</td></tr>
  </table>
  <div class="tp-nota">Se aplica la regla general de la Ley 11.683 (5 años, inscriptos) sin considerar suspensiones ni interrupciones (moratorias, leyes de emergencia, feria extraordinaria COVID-19), que en la práctica pueden extender estos plazos. El vencimiento exacto de cada DDJJ depende del calendario y de la terminación de CUIT que fije ARCA (ex AFIP) para cada año.</div>
  </details>
</div>
`
});
