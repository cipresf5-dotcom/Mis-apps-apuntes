window.CURSO.unidades.push({
  id: 6,
  numero: "VI",
  titulo: "Imposición sobre los Ingresos",
  bibliografia: [
    "Jarach, D. (2013) Parte VII, Caps. I a VI",
    "Villegas, H. B. (2021) Cap. XVII",
    "Vizcaíno, C. (2017) Cap. XI"
  ],
  temas: [
    {
      id: "6.1",
      titulo: "La imposición sobre las rentas. Concepto. Antecedentes. Teorías. Ventajas y desventajas",
      contenido: `
<h3>Concepto</h3>
<p>El impuesto a la renta grava la <strong>renta o ganancia</strong> obtenida por las personas (humanas y jurídicas) en un período. Es el impuesto <strong>directo</strong> y <strong>personal</strong> por excelencia y el que mejor expresa el principio de <strong>capacidad contributiva</strong>.</p>

<h3>Antecedentes</h3>
<p>Nace en Gran Bretaña (Pitt, 1799, para financiar las guerras napoleónicas). Se generaliza en el s. XX. En Argentina se introduce en 1932 (Impuesto a los Réditos), hoy <strong>Impuesto a las Ganancias</strong> (Ley 20.628).</p>

<h3>Teorías sobre el concepto de renta (¿qué es "renta"?)</h3>
<table>
  <tr><th>Teoría</th><th>Qué grava</th></tr>
  <tr><td><strong>Renta-producto (de la fuente)</strong></td><td>Solo la riqueza <em>nueva, periódica</em> y que proviene de una <strong>fuente permanente</strong> habilitada para producirla (el trabajo, el capital o su combinación). Excluye las ganancias eventuales. Criterio clásico para personas humanas.</td></tr>
  <tr><td><strong>Renta-incremento patrimonial (Haig-Simons)</strong></td><td>Todo <em>incremento neto del patrimonio</em> en el período más el consumo, cualquiera sea su origen y aunque no sea periódico (incluye ganancias de capital, herencias, premios). Criterio más amplio; aplicado a sociedades.</td></tr>
  <tr><td><strong>Teoría de Irving Fisher (del consumo)</strong></td><td>La renta es el <em>flujo de servicios</em> que los bienes proporcionan a su poseedor en el período. Grava la renta efectivamente <em>consumida</em> (incluye el goce de bienes propios: casa-habitación, vehículo) y <strong>excluye lo ahorrado</strong> (base del "impuesto al gasto").</td></tr>
  <tr><td><strong>Teoría legalista</strong></td><td>Es renta lo que las <em>normas tributarias</em> definan como tal, sin atarse a un concepto económico previo.</td></tr>
</table>
<p>La ley argentina adopta un criterio <strong>mixto</strong>: renta-producto para personas humanas y renta-incremento patrimonial (teoría del balance) para las empresas.</p>
<p class="muted"><strong>Renta, rédito e ingreso:</strong> "renta" designa el ingreso neto global de una persona; "rédito" el producto neto de una fuente determinada, de modo que <em>«impuesto a los réditos» es sinónimo de «impuesto a la renta»</em>. No existe un concepto de renta que obligue al Estado a ceñirse a él al crear el impuesto: solo hay un <strong>concepto normativo</strong>, que refleja lo que en cada caso se considera revelador de la capacidad contributiva (lo que se quiere gravar).</p>

<div class="callout"><strong>Criterio de Fisher vs. impuesto al gasto.</strong> Ambos gravan solo lo consumido y por eso <em>favorecen el ahorro y la formación de capital</em>. La diferencia: el impuesto al gasto no solo estimula el ahorro sino que además <strong>desalienta el desahorro</strong> (gravar el gasto total penaliza consumir capital previamente acumulado). Es la línea de J. S. Mill y Fisher (exención del ahorro).</div>

<h3>Ventajas</h3>
<ul>
  <li>Se ajusta a la <strong>capacidad contributiva</strong> y admite <strong>progresividad</strong> y personalización (deducciones).</li>
  <li>Fuerte instrumento de <strong>redistribución</strong> del ingreso.</li>
  <li>Buena <strong>elasticidad</strong> (crece con la economía) y útil como <strong>estabilizador automático</strong>.</li>
  <li>No se traslada fácilmente (en general), por lo que su incidencia es más previsible.</li>
</ul>

<h3>Desventajas</h3>
<ul>
  <li>Complejidad administrativa y alto costo de cumplimiento; sensible a la <strong>evasión</strong>.</li>
  <li>Puede <strong>desincentivar</strong> el trabajo, el ahorro y la inversión (efectos económicos — ver 6.5).</li>
  <li>En contextos inflacionarios, grava <strong>ganancias nominales</strong> ("ficticias") si no hay ajuste por inflación.</li>
  <li>Riesgo de doble imposición (renta societaria y dividendos).</li>
  <li>Alto <strong>costo de recaudación</strong> y aliciente al <strong>éxodo de capitales</strong> (y traba a incorporar capitales ocultos o del exterior).</li>
</ul>
<p class="muted">Villegas matiza la crítica de que el impuesto "desalienta producir más": (a) habría que ver si el gravamen que lo <em>sustituiría</em> está a salvo del mismo defecto; y (b) no es un defecto <strong>intrínseco</strong> del impuesto, sino de un mal diseño de política fiscal que abusa de la <strong>progresividad</strong> de las alícuotas.</p>
`
    },
    {
      id: "6.2",
      titulo: "Formas del impuesto a la renta: indiciario, cedular, global y mixto",
      contenido: `
<p>Existen distintas técnicas para estructurar el impuesto a la renta:</p>

<h3>Sistema indiciario</h3>
<p>Estima la renta de forma <strong>presuntiva</strong>, a partir de <em>indicios o signos exteriores</em> de riqueza (la fachada de la casa, cantidad de puertas y ventanas, sirvientes). Antiguo, rudimentario e impreciso; hoy en desuso salvo como presunción antievasión.</p>

<h3>Sistema cedular o analítico</h3>
<div class="def">Grava <strong>por separado</strong> cada categoría o "cédula" de renta (del suelo, de capitales, del trabajo), con <strong>alícuotas distintas</strong> según el origen.</div>
<ul>
  <li><strong>Ventajas:</strong> permite discriminar según el origen (gravar más las rentas "no ganadas" del capital que las del trabajo); simple de administrar por retención en la fuente.</li>
  <li><strong>Desventajas:</strong> es <strong>real</strong> (no personaliza), no permite compensar quebrantos entre cédulas ni aplicar una progresividad global sobre la renta total.</li>
</ul>

<h3>Sistema global, sintético o unitario</h3>
<div class="def">Suma <strong>todas las rentas</strong> del contribuyente, cualquiera sea su origen, en una <em>única base</em>, y aplica sobre ella una escala <strong>progresiva</strong>.</div>
<p class="muted">Nace con el <strong>impuesto prusiano de 1891</strong>, en contraste con el sistema cedular. Por su carácter unitario debería comprender <em>todas</em> las rentas de la persona física, cualquiera sea su fuente.</p>
<ul>
  <li><strong>Ventajas:</strong> es <strong>personal</strong> (admite deducciones por situación familiar) y permite progresividad real y compensación de quebrantos. Mejor equidad.</li>
  <li><strong>Desventajas:</strong> más complejo; no discrimina por origen de la renta.</li>
  <li><strong>¿Cómo discrimina el origen sin ser cedular?</strong> Reduciendo el monto gravado de la renta cuando proviene del <em>trabajo personal</em> (un porcentaje o suma fija), o complementándose con un <strong>impuesto ordinario al patrimonio neto</strong> personal (que recae sobre las rentas "no ganadas" del capital).</li>
</ul>

<h3>Sistema mixto</h3>
<p>Combina ambos: clasifica las rentas en <strong>categorías</strong> (con reglas propias de imputación y deducción, como en el sistema cedular) pero luego las <strong>suma en una base global</strong> a la que aplica una escala progresiva con deducciones personales. <strong>Es el adoptado por Argentina</strong> (cuatro categorías: 1ª rentas del suelo, 2ª de capitales, 3ª de empresas, 4ª del trabajo personal).</p>
`
    },
    {
      id: "6.3",
      titulo: "Impuesto a la Renta Global Personal. Tratamiento de las rentas irregulares",
      contenido: `
<h3>El impuesto a la renta global personal</h3>
<p>Recae sobre la renta neta global de las <strong>personas humanas</strong>, con escala <strong>progresiva</strong> y deducciones personales. Esquema de liquidación:</p>
<ol>
  <li><strong>Renta bruta</strong> de cada categoría.</li>
  <li>(−) <strong>Gastos necesarios</strong> para obtener, mantener y conservar la fuente → <strong>renta neta</strong> de categoría.</li>
  <li>Suma de categorías y compensación de quebrantos → <strong>renta neta global</strong>.</li>
  <li>(−) <strong>Deducciones personales</strong> (mínimo no imponible, cargas de familia, deducción especial) → <strong>renta neta sujeta a impuesto</strong>.</li>
  <li>Aplicación de la <strong>escala progresiva</strong> → impuesto determinado.</li>
  <li>(−) retenciones, anticipos, pagos a cuenta → saldo.</li>
</ol>
<div class="callout">El <strong>mínimo no imponible</strong> deja fuera del gravamen la renta de subsistencia (capacidad contributiva). Las <strong>deducciones por cargas de familia</strong> personalizan el impuesto según la situación del contribuyente.</div>

<h3>Problemas de medición</h3>
<p>El impuesto personal a la renta plantea dos problemas prácticos:</p>
<ul>
  <li><strong>Unidad contribuyente:</strong> definir si tributa el <em>individuo</em> o el <em>grupo familiar</em>. Es una cuestión discutida (sin consenso absoluto), con efectos sobre la <em>equidad</em> —dos hogares con igual ingreso total repartido distinto entre sus miembros pueden pagar distinto por la progresividad— y sobre los <em>incentivos</em> (p. ej., la decisión del segundo perceptor del hogar a trabajar).</li>
  <li><strong>Implicancia del tiempo (imputación):</strong> como la renta es un <em>flujo</em> y no un stock, hay que definir el <strong>período fiscal</strong> y <em>cuándo</em> se imputan rentas y gastos. Criterios:
    <ul>
      <li><strong>Devengado:</strong> se imputa cuando nace el derecho a la renta (o la obligación del gasto), aunque no se haya cobrado o pagado.</li>
      <li><strong>Percibido:</strong> se imputa cuando efectivamente se cobra o se paga.</li>
      <li><strong>Devengado exigible:</strong> variante que permite imputar cuando la renta ya devengada se torna <em>exigible</em> (p. ej., ventas en cuotas).</li>
    </ul>
    Sobre estos cómputos incide fuertemente la <strong>inflación</strong> (rentas nominales vs. reales).</li>
</ul>

<h3>Tratamiento de las rentas irregulares</h3>
<div class="def"><b>Rentas irregulares (no periódicas):</b> ganancias que se generan a lo largo de <em>varios años</em> pero se perciben en <strong>un solo ejercicio</strong> (indemnizaciones, derechos de autor acumulados, venta de un bien con plusvalía de años).</div>
<p><strong>Problema:</strong> al sumarse íntegramente en el año de percepción, la <strong>progresividad las castiga</strong> en exceso (saltan a un tramo de alícuota más alto del que les correspondería si se hubieran percibido año a año). Es una <em>inequidad</em> generada por la combinación de progresividad + anualidad.</p>
<p><strong>Soluciones técnicas:</strong></p>
<ul>
  <li><strong>Promediación (income averaging):</strong> distribuir la renta entre los años en que se generó y aplicar la alícuota promedio.</li>
  <li>Aplicar una <strong>alícuota media o reducida</strong> a esa porción.</li>
  <li>Sistemas de <strong>diferimiento</strong> o imputación a varios ejercicios.</li>
</ul>
`
    },
    {
      id: "6.4",
      titulo: "Deducciones. Concepto y justificación",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Deducciones:</b> conceptos que la ley permite <strong>restar</strong> de la renta bruta para llegar a la renta neta sujeta a impuesto, de modo que el tributo recaiga sobre la <em>verdadera</em> capacidad contributiva.</div>

<h3>Tipos y justificación</h3>
<ul>
  <li><strong>Deducciones generales / gastos necesarios:</strong> los gastos efectuados para <em>obtener, mantener y conservar</em> la fuente de la renta. <em>Justificación:</em> el impuesto grava la renta <strong>neta</strong>, no el ingreso bruto (no es riqueza disponible lo que se gastó en producirla). Ej.: gastos de la actividad, amortizaciones, intereses.</li>
  <li><strong>Deducciones personales:</strong> contemplan la situación del contribuyente:
    <ul>
      <li><strong>Mínimo no imponible / ganancia no imponible:</strong> exime la renta de subsistencia. <em>Justificación:</em> no hay capacidad contributiva por debajo de cierto umbral vital.</li>
      <li><strong>Cargas de familia</strong> (cónyuge, hijos): <em>justificación:</em> la capacidad de pago disminuye con las personas a cargo (equidad).</li>
      <li><strong>Deducción especial</strong> (para rentas del trabajo y autónomos).</li>
    </ul>
  </li>
  <li><strong>Deducciones con fines extrafiscales / de promoción:</strong> gastos de salud, donaciones, intereses de créditos hipotecarios, aportes a la seguridad social. <em>Justificación:</em> incentivar conductas socialmente valiosas.</li>
</ul>

<h3>Deducciones vs. exenciones vs. desgravaciones</h3>
<ul>
  <li><strong>Deducción:</strong> resta de la <em>base imponible</em>.</li>
  <li><strong>Exención:</strong> libera del pago a una renta que <em>configura</em> el hecho imponible.</li>
  <li><strong>Desgravación / crédito de impuesto:</strong> resta del <em>impuesto determinado</em> (no de la base).</li>
</ul>
<p class="muted">Todas son formas de <strong>gasto tributario</strong> (Unidad V): el Estado resigna recaudación para atender equidad o promover conductas.</p>
`
    },
    {
      id: "6.5",
      titulo: "Efectos económicos sobre la oferta de trabajo, el ahorro y la inversión",
      contenido: `
<p>El impuesto a la renta, al reducir el ingreso disponible, puede alterar las decisiones de los agentes. En cada caso operan dos fuerzas opuestas: el <strong>efecto renta</strong> y el <strong>efecto sustitución</strong>.</p>

<h3>Sobre la oferta de trabajo</h3>
<div class="callout">El impuesto reduce el salario neto (el "precio" del trabajo respecto del ocio):
<ul>
  <li><strong>Efecto sustitución:</strong> como trabajar rinde menos, conviene sustituir trabajo por <em>ocio</em> → induce a <strong>trabajar menos</strong>.</li>
  <li><strong>Efecto renta:</strong> como el individuo es más pobre, necesita <em>recuperar</em> ingreso → induce a <strong>trabajar más</strong>.</li>
</ul>
El resultado neto es <strong>ambiguo</strong> y depende de cada persona; empíricamente la oferta de trabajo suele ser poco elástica (efectos moderados), salvo en segundos perceptores del hogar.</div>

<h3>Sobre el ahorro</h3>
<ul>
  <li>El impuesto a la renta grava el ingreso <em>y luego</em> los rendimientos del ahorro (intereses), lo que implica una suerte de <strong>"doble imposición" del ahorro</strong> frente al consumo presente, desincentivándolo.</li>
  <li>De nuevo, efecto sustitución (ahorrar rinde menos → ahorrar menos) vs. efecto renta (soy más pobre → ahorrar más). Resultado ambiguo.</li>
  <li>Es el principal argumento a favor del <strong>impuesto al gasto/consumo</strong> (que no castiga el ahorro — ver Unidad VIII) y de tratamientos preferenciales a la renta financiera.</li>
</ul>

<h3>Sobre la inversión</h3>
<ul>
  <li>El impuesto a la renta societaria reduce la <strong>rentabilidad neta</strong> de los proyectos, pudiendo desalentar la inversión.</li>
  <li>Mitigantes: la <strong>deducción de amortizaciones</strong> e intereses, los regímenes de <strong>amortización acelerada</strong>, créditos de inversión y la deducibilidad de quebrantos atenúan el efecto.</li>
  <li>El <strong>sesgo deuda vs. capital propio:</strong> como los intereses son deducibles y los dividendos no, el impuesto induce a financiarse con <em>deuda</em>.</li>
</ul>

<h3>Efectos macroeconómicos (oferta y demanda de factores, producción, distribución)</h3>
<ul>
  <li><strong>Cambio en la oferta de factores:</strong> reduce el ingreso de los propietarios de los factores (trabajo y capital), pudiendo alterar cuánto trabajo y capital ofrecen al mercado.</li>
  <li><strong>Cambio en la demanda de factores:</strong> al transferir poder de compra al Estado, se reduce el producto del sector privado (se venden menos bienes) y, con ello, la demanda privada de factores.</li>
  <li><strong>Nivel de producción / ingreso nacional:</strong> es una carga ineludible —el Estado participa de los resultados— que puede reducir el nivel de ingreso nacional.</li>
  <li><strong>Redistribución del ingreso:</strong> combinado con el <em>gasto</em> que financia, produce una redistribución del ingreso <em>después</em> del impuesto; factor clave que afecta la formación de capital, la inversión, el empleo y la asignación de recursos.</li>
</ul>
<p class="muted">En suma: el impuesto a la renta es equitativo pero presenta una <strong>tensión equidad–eficiencia</strong>, ya que puede afectar los incentivos a trabajar, ahorrar e invertir, y por esa vía la oferta y demanda de factores, la producción y la distribución.</p>
`
    },
    {
      id: "6.6",
      titulo: "Imposición a la Renta Societaria. Criterio de Renta Mundial. Efectos",
      contenido: `
<h3>Características de la imposición societaria</h3>
<p>Grava la ganancia de las <strong>sociedades de capital</strong> (personas jurídicas). Rasgos:</p>
<ul>
  <li>Es <strong>real</strong> y <strong>proporcional</strong> (alícuota generalmente fija o escalonada por tramos), no personal.</li>
  <li>Es <strong>de ejercicio</strong> (se liquida por el resultado del ejercicio comercial anual).</li>
  <li>Es <strong>indirecta</strong> en cuanto a su posibilidad de <strong>traslación</strong> (según la estructura del mercado puede trasladarse a precios, salarios o consumidores).</li>
  <li>Determina la renta por la <strong>teoría del balance</strong> (renta-incremento patrimonial): grava todo incremento patrimonial del ente.</li>
  <li>La sociedad es tratada como <strong>sujeto autónomo</strong> de imposición.</li>
</ul>
<p class="muted">Jarach la concebía como una imposición <em>por naturaleza transitoria</em>: hasta que las utilidades se distribuyan, el impuesto a la sociedad funciona como un <strong>«pago a cuenta» del impuesto personal del accionista</strong>.</p>

<h3>El problema de la doble imposición económica</h3>
<div class="callout">La renta de la sociedad se grava <strong>dos veces</strong>: una en cabeza de la <em>sociedad</em> (al obtener la ganancia) y otra en cabeza del <em>socio/accionista</em> (al distribuirse el dividendo). Esto puede sobrecargar la renta societaria frente a otras formas de organización.</div>
<p><strong>Sistemas para atenuarla:</strong></p>
<ul>
  <li><strong>Sistema clásico:</strong> grava ambas instancias sin alivio (la que más doble imposición genera).</li>
  <li><strong>Integración:</strong> total (se imputa toda la renta al socio) o parcial.</li>
  <li><strong>Crédito de impuesto (imputación):</strong> el socio computa como pago a cuenta el impuesto que pagó la sociedad.</li>
  <li><strong>Exención o alícuota reducida</strong> sobre dividendos.</li>
</ul>

<h3>¿Integración o separación? (criterios de gravabilidad)</h3>
<p>Sobre cómo tratar a la sociedad y al accionista hay dos posturas (Vizcaíno):</p>
<ul>
  <li><strong>Integración:</strong> la renta debe gravarse igual cualquiera sea la forma de organización de la empresa, recayendo la imposición definitiva en el <em>accionista</em>. Cumple la <em>neutralidad</em> (el impuesto no depende de la forma jurídica) y mide la capacidad contributiva en términos de cargas personales.</li>
  <li><strong>Separación:</strong> la persona jurídica es un <em>sujeto distinto</em> de los tenedores de sus acciones; se grava a la sociedad y a los accionistas en forma independiente, lo que —según las tasas que se fijen— puede rendir mayores ingresos fiscales.</li>
</ul>
<p>Reig y Jarach abogaban por <strong>gravar a la sociedad</strong> (principio del beneficio: la sociedad de capital se beneficia usando los servicios del Estado; además se evita la evasión y se facilita la redistribución). Jarach clasificaba a los accionistas en <em>capitalistas</em> (buscan dividendos), <em>especuladores</em> (buscan la diferencia de cotización) y <em>empresarios</em> (buscan la evolución de la empresa).</p>
<p><strong>Formas de integración:</strong> (a) <em>sistema de sociedades de personas</em> —se grava directamente a los socios, prescindiendo de la sociedad; solo viable en sociedades "cerradas"—; (b) <em>crédito por dividendos percibidos</em> —el accionista computa el impuesto pagado por la sociedad—, con los métodos de <em>retención</em>, <em>crédito parcial</em> y <em>adicional progresivo</em>; (c) <em>gravar las utilidades no distribuidas</em> o crédito por dividendos pagados —la sociedad deduce de su renta los dividendos que paga—.</p>

<h3>Criterios de vinculación: Fuente vs. Renta Mundial</h3>
<table>
  <tr><th>Criterio de la fuente (territorial)</th><th>Criterio de renta mundial</th></tr>
  <tr><td>Grava solo las rentas <strong>generadas en el territorio</strong> del país, sin importar la residencia del titular.</td><td>Grava <strong>todas las rentas</strong> del residente, obtenidas en el país <em>y en el exterior</em>.</td></tr>
</table>
<p><strong>Argentina</strong> aplica el criterio de <strong>renta mundial</strong> para los <em>residentes</em> (gravados por sus rentas locales y del exterior) y el de la <em>fuente</em> para los <strong>no residentes</strong> (solo por sus rentas argentinas).</p>
<div class="def">Para evitar la <strong>doble imposición internacional</strong> (la misma renta gravada por el país de la fuente y el de la residencia), se utilizan: el <strong>"tax credit"</strong> (crédito por impuesto análogo pagado en el exterior), la <strong>exención</strong> de rentas extranjeras y los <strong>convenios para evitar la doble imposición (CDI)</strong>.</div>

<h3>Efectos económicos</h3>
<ul>
  <li>Puede <strong>desalentar la inversión</strong> y trasladarse (a precios, salarios o a los consumidores) según la estructura del mercado.</li>
  <li>Influye en las decisiones de <strong>localización</strong> de las empresas (competencia tributaria entre países) y en el endeudamiento vs. capital propio.</li>
  <li>El criterio de renta mundial busca <strong>neutralidad</strong> en la exportación de capitales y equidad entre residentes.</li>
</ul>

<h3>La imposición a la renta presunta</h3>
<div class="def"><b>Renta presunta:</b> cálculo <em>aproximado</em> de los ingresos de un sujeto, obtenido normalmente aplicando un porcentaje sobre el valor de un <strong>activo</strong> que se sabe que posee (p. ej., un porcentaje del valor de los inmuebles rurales o del activo de la empresa).</div>
<p>Opera como técnica <strong>antievasión</strong> y de simplificación: fija un piso de renta imputada con independencia del resultado real declarado. Su crítica es que puede gravar rentas <em>inexistentes</em> en ejercicios con pérdidas, tensionando el principio de capacidad contributiva.</p>
`
    }
  ],
  practicos: `
<p class="muted">Trabajos prácticos de la cátedra (consignas y respuestas), con casos numéricos resueltos.</p>

<div class="tp">
  <h4>TP Nº 1 — Concepto de renta, teorías y formas del impuesto</h4>
  <p class="tp-consigna">Renta-producto vs. renta-incremento patrimonial. Teorías (fuente, incremento patrimonial neto + consumo, Irving Fisher). Formas del impuesto (indiciario, cedular, global, mixto) con ventajas/desventajas. Diferenciar rédito, beneficio, utilidad y ganancia.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>Cuadro — Teorías sobre el concepto de renta:</strong></p>
  <table>
    <tr><th>Teoría</th><th>Qué grava</th><th>Idea clave</th></tr>
    <tr><td><strong>Renta-producto</strong> (de la fuente)</td><td>El producto <em>neto y periódico</em> de una fuente permanente que se mantiene.</td><td>«El capital es el árbol; la renta, el fruto». Deja fuera plusvalías y ganancias de capital.</td></tr>
    <tr><td><strong>Renta-incremento patrimonial neto + consumo</strong> (Haig-Simons)</td><td>Todo aumento de patrimonio en el período <em>más</em> el consumo (incluye plusvalías, herencias, juego).</td><td>Concepto amplio; base más equitativa y de mayor rendimiento.</td></tr>
    <tr><td><strong>Irving Fisher</strong></td><td>El <em>flujo de servicios</em> efectivamente consumidos.</td><td>No grava el ahorro (solo el consumo) → favorece la inversión.</td></tr>
  </table>
  <p><strong>Cuadro — Formas del impuesto a la renta:</strong></p>
  <table>
    <tr><th>Forma</th><th>Descripción</th><th>Ventaja / desventaja</th></tr>
    <tr><td>Indiciario</td><td>Estima la renta por signos externos (presunciones).</td><td>Simple / impreciso e injusto.</td></tr>
    <tr><td>Cedular o real</td><td>Grava por separado cada categoría con alícuotas propias.</td><td>Discrimina el origen / no permite progresividad global ni deducciones personales.</td></tr>
    <tr><td>Global o unitario</td><td>Suma todas las rentas de la persona y aplica una escala progresiva.</td><td>Equitativo y progresivo / no discrimina el origen.</td></tr>
    <tr><td><strong>Mixto</strong> (argentino)</td><td>Categorías (cédulas) + base global con deducciones y escala progresiva.</td><td>Combina lo mejor de ambos.</td></tr>
  </table>
  <p class="muted"><strong>Ventajas</strong> del impuesto a la renta: productivo, equitativo, progresivo y estabilizador (automático). <strong>Desventajas:</strong> desalienta ahorro/inversión, se complica con la inflación (ganancias ficticias — de allí el ajuste por inflación) y puede generar doble imposición. <strong>Distinción de términos:</strong> <em>rédito</em> = renta obtenida de una inversión (intereses, dividendos) o producto neto de una fuente; <em>beneficio</em> = capital que resta a la empresa tras deducir sus gastos (sinónimo de ganancia); <em>utilidad</em> = resultado (ganancia o pérdida) del negocio tras restar a los ingresos todos los costos y gastos; <em>ganancia</em> = el término que emplea la ley argentina. Para personas humanas, la ley exige a la ganancia <strong>periodicidad, permanencia y habilitación de la fuente</strong>.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 2 — Renta personal: estructura, deducciones, rentas irregulares</h4>
  <p class="tp-consigna">Estructura del impuesto personal. Sistema vigente en Argentina. Mínimo no imponible y cargas de familia (2023). ¿Son deducibles educación y salud? Problema de las rentas irregulares y devengado vs. percibido.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp"><strong>Sistema argentino: mixto</strong> (Villegas). <strong>Carga de familia:</strong> cónyuge/conviviente e hijos menores de 18 (o incapacitados), a cargo, residentes y sin ingresos superiores al MNI. <strong>Deducciones:</strong> salud (cuota de prepaga/obra social, tope 5% de la ganancia neta) y educación (servicios y herramientas, con tope anual) <em>sí</em> son deducibles. <strong>Rentas irregulares:</strong> al percibirse en un año rentas generadas en varios, la progresividad las castiga; solución: promediación. <strong>Devengado:</strong> se registra cuando se realiza la operación, aunque se cobre después.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 3 y 6 — Renta societaria y doble imposición (casos resueltos)</h4>
  <p class="tp-consigna">Naturaleza y críticas de la imposición societaria. Métodos para evitar la doble imposición (clásico, integración total, parcial). Resolver los sistemas de créditos por dividendos pagados, retención y créditos por dividendos percibidos.</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp"><strong>Críticas a la imposición societaria (López Toussaint):</strong> (a) reduce la capacidad de <em>ahorro</em> y la tasa de retorno de las inversiones, por lo que algunas no se realizan; en modelos muy progresivos induce a sustituir trabajo por ocio; (b) la <em>competencia tributaria</em> global lleva a bajar la imposición a las rentas del capital y empresarias y a mantener alta la de las rentas del trabajo, erosionando la progresividad como paradigma de equidad; (c) problemas de medición cuando la ganancia comercial (base del dividendo) difiere de la ganancia impositiva, y limitaciones del <em>"impuesto de igualación"</em> argentino (grava a alícuota proporcional igual a la marginal máxima, sin equidad vertical).</p>
  <p class="tp-resp"><strong>Cuadro — Sistemas para tratar la doble imposición de dividendos:</strong></p>
  <table>
    <tr><th>Sistema</th><th>Mecánica</th><th>Efecto</th></tr>
    <tr><td><strong>Clásico</strong></td><td>Grava la sociedad y, otra vez, el dividendo en el socio.</td><td>Doble imposición; incentiva la «subcapitalización» (endeudarse en vez de capitalizar).</td></tr>
    <tr><td><strong>Integración total</strong> (transparencia)</td><td>La sociedad es un conducto; todo se grava en cabeza del socio con crédito por el impuesto societario.</td><td>Elimina la doble imposición.</td></tr>
    <tr><td><strong>Integración parcial</strong></td><td>Deducción del dividendo, impuesto a ganancias retenidas, imputación o cédula.</td><td>Atenúa la doble imposición.</td></tr>
  </table>
  <p class="tp-resp"><strong>Sistema 1 — Créditos por dividendos pagados (ACINDAR).</strong> Regla: la sociedad tributa <em>solo por lo que NO distribuye</em>; el accionista declara los dividendos recibidos. Datos: resultado neto $1.000.000, distribuye $600.000 (un solo accionista).</p>
  <table class="num">
    <tr><th>Concepto</th><th class="n">Monto $</th></tr>
    <tr><td>Beneficio neto societario</td><td class="n">1.000.000</td></tr>
    <tr><td>(−) Dividendos distribuidos</td><td class="n">600.000</td></tr>
    <tr><td><strong>Base imponible Sociedad</strong> (utilidad retenida)</td><td class="n res">400.000</td></tr>
    <tr><td>Dividendos recibidos por el accionista</td><td class="n">600.000</td></tr>
    <tr><td><strong>Base imponible Accionista</strong></td><td class="n res">600.000</td></tr>
  </table>
  <div class="calc"><strong>Explicación inciso a inciso:</strong> la sociedad separa lo distribuido ($600.000) de su base → tributa sobre <code>1.000.000 − 600.000 = 400.000</code>. Esos $600.000 "pasan" al accionista, que los declara como base propia. Así <em>no</em> hay doble imposición: cada peso se grava una sola vez (o en la sociedad, o en el socio).</div>

  <p class="tp-resp"><strong>Sistema 2 — Retención (Minetti).</strong> Regla: la sociedad tributa por <em>toda</em> la renta (distribuya o no) y ese impuesto es <strong>pago a cuenta</strong> del accionista. Datos: beneficio $1.000.000, distribuye todo; alícuota sociedad 30%, accionista 25%.</p>
  <table class="num">
    <tr><th>Concepto</th><th class="n">Monto $</th><th class="n">Alíc.</th></tr>
    <tr><td>Base imponible Sociedad</td><td class="n">1.000.000</td><td class="n">—</td></tr>
    <tr><td>Impuesto Sociedad</td><td class="n">300.000</td><td class="n">30%</td></tr>
    <tr><td>Dividendos brutos / Base accionista</td><td class="n">1.000.000</td><td class="n">—</td></tr>
    <tr><td>Impuesto Accionista</td><td class="n">250.000</td><td class="n">25%</td></tr>
    <tr><td>(−) Pago a cuenta (impuesto de la sociedad)</td><td class="n">300.000</td><td class="n">30%</td></tr>
    <tr class="total"><td>Obligación neta del Accionista</td><td class="n res">(50.000)</td><td class="n"></td></tr>
  </table>
  <div class="calc"><strong>Cálculos:</strong>
    <ol>
      <li>Impuesto Sociedad = <code>1.000.000 × 30% = 300.000</code>.</li>
      <li>El accionista toma como base el dividendo <em>bruto</em> (antes del impuesto societario) = 1.000.000.</li>
      <li>Impuesto Accionista = <code>1.000.000 × 25% = 250.000</code>.</li>
      <li>Computa como pago a cuenta el impuesto de la sociedad (300.000): <code>250.000 − 300.000 = (50.000)</code> → <strong>saldo a favor</strong> del accionista, porque su alícuota (25%) es menor que la societaria (30%).</li>
    </ol>
  </div>

  <p class="tp-resp"><strong>Sistema 3 — Créditos por dividendos percibidos (Minetti, misma empresa).</strong> Regla: la sociedad tributa por <em>toda</em> la renta; el accionista declara los dividendos <strong>netos</strong> y computa un crédito con <strong>tope</strong> = la <em>menor</em> de las dos alícuotas (opción a).</p>
  <table class="num">
    <tr><th>Concepto</th><th class="n">Monto $</th><th class="n">Alíc.</th></tr>
    <tr><td>Base imponible Sociedad</td><td class="n">1.000.000</td><td class="n">—</td></tr>
    <tr><td>Impuesto Sociedad</td><td class="n">300.000</td><td class="n">30%</td></tr>
    <tr><td>Dividendos netos / Base accionista</td><td class="n">700.000</td><td class="n">—</td></tr>
    <tr><td>Impuesto Accionista</td><td class="n">175.000</td><td class="n">25%</td></tr>
    <tr><td>(−) Crédito (menor alícuota, 25%)</td><td class="n">175.000</td><td class="n">25%</td></tr>
    <tr class="total"><td>Impuesto a ingresar por el Accionista</td><td class="n res">0</td><td class="n"></td></tr>
  </table>
  <div class="calc"><strong>Cálculos:</strong>
    <ol>
      <li>Impuesto Sociedad = <code>1.000.000 × 30% = 300.000</code>.</li>
      <li>Dividendos <em>netos</em> = <code>1.000.000 − 300.000 = 700.000</code> (a diferencia del Sistema 2, acá el accionista declara el neto).</li>
      <li>Impuesto Accionista = <code>700.000 × 25% = 175.000</code>.</li>
      <li>Crédito por doble imposición, con tope de la <em>menor</em> alícuota (25%) sobre los dividendos: <code>700.000 × 25% = 175.000</code>.</li>
      <li>Impuesto a ingresar = <code>175.000 − 175.000 = 0</code> → la doble imposición queda totalmente neutralizada.</li>
    </ol>
  </div>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 5 — Irregularidad del rédito (casos resueltos)</h4>
  <p class="tp-consigna">Comparar dos contribuyentes con igual ingreso total bianual pero distinto reparto entre años, con escala progresiva y deducciones (MNI y cónyuge).</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>

  <p class="tp-resp"><strong>CASO 1 — Magdalena vs. Peter.</strong> Ambos ganan $200.000 en dos años; deducciones: MNI $52.000 y cónyuge $25.000 (casados sin hijos). Escala progresiva aplicable:</p>
  <table class="num">
    <tr><th>Base imponible ($)</th><th class="n">Importe fijo</th><th class="n">% s/ excedente</th></tr>
    <tr><td>0 a 15.000</td><td class="n">—</td><td class="n">10%</td></tr>
    <tr><td>15.001 a 30.000</td><td class="n">1.000</td><td class="n">15%</td></tr>
    <tr><td>30.001 a 60.000</td><td class="n">1.500</td><td class="n">20%</td></tr>
    <tr><td>60.001 a 120.000</td><td class="n">3.500</td><td class="n">25%</td></tr>
    <tr><td>120.001 a 300.000</td><td class="n">8.500</td><td class="n">30%</td></tr>
    <tr><td>Más de 300.000</td><td class="n">15.000</td><td class="n">35%</td></tr>
  </table>
  <p><strong>Paso 1 — Ganancia sujeta a impuesto</strong> (ingreso − MNI − cónyuge):</p>
  <table class="num">
    <tr><th>Concepto</th><th class="n">Magd. 2021</th><th class="n">Magd. 2022</th><th class="n">Peter 2021</th><th class="n">Peter 2022</th></tr>
    <tr><td>Ingresos</td><td class="n">100.000</td><td class="n">100.000</td><td class="n">10.000</td><td class="n">190.000</td></tr>
    <tr><td>(−) MNI</td><td class="n">52.000</td><td class="n">52.000</td><td class="n">52.000</td><td class="n">52.000</td></tr>
    <tr><td>(−) Cónyuge</td><td class="n">25.000</td><td class="n">25.000</td><td class="n">25.000</td><td class="n">25.000</td></tr>
    <tr class="total"><td>Ganancia sujeta</td><td class="n res">23.000</td><td class="n res">23.000</td><td class="n res">(67.000)*</td><td class="n res">113.000</td></tr>
  </table>
  <p class="muted">* Negativa: como la ganancia no supera MNI + cónyuge, en ese período <strong>no se tributa</strong> (las rentas del trabajo no generan quebranto trasladable).</p>
  <div class="calc"><strong>Paso 2 — Impuesto por año</strong> (se ubica la base en la escala):
    <ol>
      <li><strong>Magdalena</strong>, base 23.000 → tramo 15.001–30.000: <code>1.000 + (23.000 − 15.000) × 15% = 1.000 + 1.200 = 2.200</code> cada año.</li>
      <li><strong>Peter 2021</strong>, base negativa → <code>impuesto = 0</code>.</li>
      <li><strong>Peter 2022</strong>, base 113.000 → tramo 60.001–120.000: <code>3.500 + (113.000 − 60.000) × 25% = 3.500 + 13.250 = 16.750</code>.</li>
    </ol>
  </div>
  <p><strong>Paso 3 — Comparación bianual:</strong></p>
  <table class="num">
    <tr><th>Concepto</th><th class="n">Magdalena</th><th class="n">Peter</th></tr>
    <tr><td>Impuesto año 1</td><td class="n">2.200</td><td class="n">—</td></tr>
    <tr><td>Impuesto año 2</td><td class="n">2.200</td><td class="n">16.750</td></tr>
    <tr><td>Ingreso total (año 1 + 2)</td><td class="n">200.000</td><td class="n">200.000</td></tr>
    <tr class="total"><td>Impuesto total</td><td class="n res">4.400</td><td class="n res">16.750</td></tr>
    <tr><td>Tasa efectiva promedio</td><td class="n">2,20%</td><td class="n">8,37%</td></tr>
  </table>
  <p class="muted">Tasa = impuesto total ÷ ingreso total: Magdalena <code>4.400 ÷ 200.000 = 2,2%</code>; Peter <code>16.750 ÷ 200.000 = 8,37%</code>.</p>

  <p class="tp-resp"><strong>CASO 2 — Marcelo (casado, 4 hijos) vs. Lionel (soltero).</strong> Ambos ganan $440.000 en dos años. Deducciones: MNI $52.000, cónyuge $25.000, hijos $20.000 c/u. Escala:</p>
  <table class="num">
    <tr><th>Base imponible ($)</th><th class="n">Importe fijo</th><th class="n">% s/ excedente</th></tr>
    <tr><td>0 a 10.000</td><td class="n">—</td><td class="n">10%</td></tr>
    <tr><td>10.001 a 30.000</td><td class="n">1.000</td><td class="n">15%</td></tr>
    <tr><td>30.001 a 50.000</td><td class="n">1.800</td><td class="n">20%</td></tr>
    <tr><td>50.001 a 70.000</td><td class="n">2.600</td><td class="n">25%</td></tr>
    <tr><td>70.001 a 100.000</td><td class="n">5.000</td><td class="n">30%</td></tr>
    <tr><td>Más de 100.000</td><td class="n">20.000</td><td class="n">50%</td></tr>
  </table>
  <p><strong>Paso 1 — Ganancia sujeta a impuesto:</strong></p>
  <table class="num">
    <tr><th>Concepto</th><th class="n">Marc. 2021</th><th class="n">Marc. 2022</th><th class="n">Lionel 2021</th><th class="n">Lionel 2022</th></tr>
    <tr><td>Ingresos</td><td class="n">220.000</td><td class="n">220.000</td><td class="n">20.000</td><td class="n">420.000</td></tr>
    <tr><td>(−) MNI</td><td class="n">52.000</td><td class="n">52.000</td><td class="n">52.000</td><td class="n">52.000</td></tr>
    <tr><td>(−) Cónyuge</td><td class="n">25.000</td><td class="n">25.000</td><td class="n">—</td><td class="n">—</td></tr>
    <tr><td>(−) 4 hijos (20.000 c/u)</td><td class="n">80.000</td><td class="n">80.000</td><td class="n">—</td><td class="n">—</td></tr>
    <tr class="total"><td>Ganancia sujeta</td><td class="n res">63.000</td><td class="n res">63.000</td><td class="n res">(32.000)</td><td class="n res">368.000</td></tr>
  </table>
  <div class="calc"><strong>Paso 2 — Impuesto por año:</strong>
    <ol>
      <li><strong>Marcelo</strong>, base 63.000 → tramo 50.001–70.000: <code>2.600 + (63.000 − 50.000) × 25% = 2.600 + 3.250 = 5.850</code> cada año.</li>
      <li><strong>Lionel 2021</strong>, base negativa → <code>impuesto = 0</code>.</li>
      <li><strong>Lionel 2022</strong>, base 368.000 → tramo "más de 100.000": <code>20.000 + (368.000 − 100.000) × 50% = 20.000 + 134.000 = 154.000</code>.</li>
    </ol>
  </div>
  <p><strong>Paso 3 — Comparación:</strong></p>
  <table class="num">
    <tr><th>Concepto</th><th class="n">Marcelo</th><th class="n">Lionel</th></tr>
    <tr><td>Impuesto año 1 + año 2</td><td class="n">5.850 + 5.850</td><td class="n">0 + 154.000</td></tr>
    <tr><td>Ingreso total</td><td class="n">440.000</td><td class="n">440.000</td></tr>
    <tr class="total"><td>Impuesto total</td><td class="n res">11.700</td><td class="n res">154.000</td></tr>
    <tr><td>Tasa efectiva promedio</td><td class="n">2,65%</td><td class="n">35,00%</td></tr>
  </table>
  <p class="tp-resp"><strong>Conclusión:</strong> con <em>idéntico</em> ingreso total, quien lo concentra en un solo año (Peter, Lionel) tributa muchísimo más por efecto de la <strong>progresividad + anualidad</strong>. Esa es la <strong>inequidad de las rentas irregulares</strong>, que se corrige con <em>promediación</em> (income averaging) o alícuotas reducidas sobre la porción irregular.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 4 y 7 — Criterio de Renta Mundial (caso resuelto)</h4>
  <p class="tp-consigna">Concepto de renta mundial y su recepción en la ley. Liquidar Ganancias 2022 con rentas de Argentina y del exterior, computando el impuesto pagado afuera como pago a cuenta.</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp"><strong>Renta mundial:</strong> los <em>residentes</em> tributan por rentas de fuente argentina y extranjera; los <em>no residentes</em> solo por fuente argentina. Atenuante (art. 1 LIG): se computa como <strong>pago a cuenta</strong> el impuesto análogo abonado en el exterior (<em>tax credit</em>), con un <strong>tope</strong> = el incremento del impuesto local que provoca incluir las rentas extranjeras.</p>
  <p><strong>Datos (Sucesión Josefina Domínguez, residente, período 2022):</strong> rentas Argentina $35.000 + Uruguay $45.000 + Paraguay $20.000 = <strong>$100.000</strong>. Impuestos pagados afuera: a la renta $10.000; a las ventas/consumo $7.000. Escala:</p>
  <table class="num">
    <tr><th>Más de $</th><th class="n">Hasta $</th><th class="n">Suma fija</th><th class="n">+ %</th><th class="n">s/ excedente de</th></tr>
    <tr><td>0</td><td class="n">10.000</td><td class="n">0</td><td class="n">10%</td><td class="n">0</td></tr>
    <tr><td>10.000</td><td class="n">30.000</td><td class="n">100</td><td class="n">12%</td><td class="n">10.000</td></tr>
    <tr><td>30.000</td><td class="n">60.000</td><td class="n">2.500</td><td class="n">15%</td><td class="n">30.000</td></tr>
    <tr><td>60.000</td><td class="n">en adelante</td><td class="n">7.000</td><td class="n">17%</td><td class="n">60.000</td></tr>
  </table>
  <div class="calc"><strong>Resolución paso a paso:</strong>
    <ol>
      <li><strong>Impuesto sobre la renta argentina</strong> (base 35.000, tramo 30.000–60.000): <code>2.500 + (35.000 − 30.000) × 15% = 2.500 + 750 = 3.250</code>.</li>
      <li><strong>Impuesto sobre la renta mundial</strong> (base 100.000, tramo "más de 60.000"): <code>7.000 + (100.000 − 60.000) × 17% = 7.000 + 6.800 = 13.800</code>.</li>
      <li><strong>Tope del crédito</strong> (incremento por las rentas del exterior): <code>13.800 − 3.250 = 10.550</code>.</li>
      <li><strong>Crédito computable:</strong> el impuesto a la renta pagado afuera ($10.000) es <em>menor</em> que el tope ($10.550) → se computa <code>10.000</code>. El impuesto al consumo ($7.000) <strong>no</strong> se computa (no es análogo al de la renta).</li>
      <li><strong>Impuesto a ingresar en Argentina:</strong> <code>13.800 − 10.000 = 3.800</code>.</li>
    </ol>
  </div>
  <p class="tp-nota"><strong>Sobre la planilla de la cátedra:</strong> arrastra un desliz aritmético: escribe <code>10.800</code> donde corresponde <code>13.800</code> (porque 40.000 × 17% = 6.800, no 3.800), y toma como crédito el "incremento" (10.800 − 3.250 = 7.550) sin compararlo con el impuesto efectivamente pagado en el exterior. El <em>método</em> es el correcto; solo cuidá los números.</p>
  <p class="tp-resp"><strong>Variante — sujeto NO residente:</strong> solo tributa por la renta de fuente argentina ($35.000): <code>2.500 + (5.000 × 15%) = 3.250</code>. No computa impuestos del exterior ni tributa por las rentas de Uruguay/Paraguay.</p>
  </details>
</div>
`
});
