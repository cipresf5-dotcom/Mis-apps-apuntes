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
  <tr><td><strong>Teoría del consumo</strong></td><td>Grava la renta efectivamente <em>consumida</em> (base del "impuesto al gasto").</td></tr>
</table>
<p>La ley argentina adopta un criterio <strong>mixto</strong>: renta-producto para personas humanas y renta-incremento patrimonial (teoría del balance) para las empresas.</p>

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
</ul>
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
<ul>
  <li><strong>Ventajas:</strong> es <strong>personal</strong> (admite deducciones por situación familiar) y permite progresividad real y compensación de quebrantos. Mejor equidad.</li>
  <li><strong>Desventajas:</strong> más complejo; no discrimina por origen de la renta.</li>
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
<p class="muted">En suma: el impuesto a la renta es equitativo pero presenta una <strong>tensión equidad–eficiencia</strong>, ya que puede afectar los incentivos a trabajar, ahorrar e invertir.</p>
`
    },
    {
      id: "6.6",
      titulo: "Imposición a la Renta Societaria. Criterio de Renta Mundial. Efectos",
      contenido: `
<h3>Características de la imposición societaria</h3>
<p>Grava la ganancia de las <strong>sociedades de capital</strong> (personas jurídicas). Rasgos:</p>
<ul>
  <li>Es <strong>real</strong> y <strong>proporcional</strong> (alícuota generalmente fija o escalonada por tramos de ganancia), no personal.</li>
  <li>Determina la renta por la <strong>teoría del balance</strong> (renta-incremento patrimonial): grava todo incremento patrimonial del ente.</li>
  <li>La sociedad es tratada como <strong>sujeto autónomo</strong> de imposición.</li>
</ul>

<h3>El problema de la doble imposición económica</h3>
<div class="callout">La renta de la sociedad se grava <strong>dos veces</strong>: una en cabeza de la <em>sociedad</em> (al obtener la ganancia) y otra en cabeza del <em>socio/accionista</em> (al distribuirse el dividendo). Esto puede sobrecargar la renta societaria frente a otras formas de organización.</div>
<p><strong>Sistemas para atenuarla:</strong></p>
<ul>
  <li><strong>Sistema clásico:</strong> grava ambas instancias sin alivio (la que más doble imposición genera).</li>
  <li><strong>Integración:</strong> total (se imputa toda la renta al socio) o parcial.</li>
  <li><strong>Crédito de impuesto (imputación):</strong> el socio computa como pago a cuenta el impuesto que pagó la sociedad.</li>
  <li><strong>Exención o alícuota reducida</strong> sobre dividendos.</li>
</ul>

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
  <p class="muted"><strong>Ventajas</strong> del impuesto a la renta: productivo, equitativo, progresivo y estabilizador (automático). <strong>Desventajas:</strong> desalienta ahorro/inversión, se complica con la inflación (ganancias ficticias — de allí el ajuste por inflación) y puede generar doble imposición. <strong>Distinción de términos:</strong> <em>rédito/renta</em> (economía), <em>beneficio</em> y <em>utilidad</em> (contable), <em>ganancia</em> (la ley argentina).</p>
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
  <p class="tp-resp"><strong>Cuadro — Sistemas para tratar la doble imposición de dividendos:</strong></p>
  <table>
    <tr><th>Sistema</th><th>Mecánica</th><th>Efecto</th></tr>
    <tr><td><strong>Clásico</strong></td><td>Grava la sociedad y, otra vez, el dividendo en el socio.</td><td>Doble imposición; incentiva la «subcapitalización» (endeudarse en vez de capitalizar).</td></tr>
    <tr><td><strong>Integración total</strong> (transparencia)</td><td>La sociedad es un conducto; todo se grava en cabeza del socio con crédito por el impuesto societario.</td><td>Elimina la doble imposición.</td></tr>
    <tr><td><strong>Integración parcial</strong></td><td>Deducción del dividendo, impuesto a ganancias retenidas, imputación o cédula.</td><td>Atenúa la doble imposición.</td></tr>
  </table>
  <p><strong>Créditos por dividendos pagados (ACINDAR, neto $1.000.000, distribuye $600.000):</strong> Base sociedad = 400.000; Base accionista = 600.000.</p>
  <p><strong>Retención (Minetti, $1.000.000; soc. 30%, accionista 25%):</strong> Impuesto sociedad = 300.000; Impuesto accionista = 250.000; pago a cuenta 300.000 → <strong>obligación neta del accionista = −50.000</strong> (saldo a favor).</p>
  <p><strong>Créditos por dividendos percibidos (tope menor alícuota):</strong> dividendos netos 700.000; impuesto accionista 175.000; crédito 175.000 → <strong>impuesto accionista = 0</strong>.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 5 — Irregularidad del rédito (casos resueltos)</h4>
  <p class="tp-consigna">Comparar dos contribuyentes con igual ingreso total bianual pero distinto reparto entre años, con escala progresiva y deducciones (MNI y cónyuge).</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp"><strong>Caso 1 — Magdalena (100.000 + 100.000) vs. Peter (10.000 + 190.000):</strong> ambos suman $200.000 en dos años. Magdalena paga 2.200 + 2.200 = <strong>$4.400</strong> (tasa ≈ 2,2%). Peter: el año de $10.000 no tributa (no supera MNI + cónyuge) y el de $190.000 paga $16.750 → <strong>$16.750</strong> (tasa ≈ 8,37%).</p>
  <p><strong>Caso 2 — Marcelo (220.000 + 220.000, casado 4 hijos) vs. Lionel (20.000 + 420.000, soltero):</strong> ambos suman $440.000. Marcelo: 5.850 + 5.850 = <strong>$11.700</strong> (≈ 2,65%). Lionel: <strong>$154.000</strong> (≈ 30%).</p>
  <p><strong>Conclusión:</strong> con igual ingreso total, quien lo concentra en un año tributa <em>mucho más</em> por la progresividad → es la <strong>inequidad de las rentas irregulares</strong>, que se corrige con promediación.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 4 y 7 — Criterio de Renta Mundial (caso resuelto)</h4>
  <p class="tp-consigna">Concepto de renta mundial y su recepción en la ley. Liquidar Ganancias 2022 con rentas de Argentina y del exterior, computando el impuesto pagado afuera como pago a cuenta.</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp"><strong>Renta mundial:</strong> los <em>residentes</em> tributan por rentas de fuente argentina y extranjera; los <em>no residentes</em> solo por fuente argentina. Atenuante: cómputo como <strong>pago a cuenta</strong> del impuesto análogo abonado en el exterior (tax credit).</p>
  <p><strong>Caso (Sucesión Josefina Domínguez, residente):</strong> rentas Argentina 35.000 + Uruguay 45.000 + Paraguay 20.000 = 100.000. Impuesto sobre la renta argentina (35.000) = 2.500 + (5.000×15%) = <strong>3.250</strong>. Impuesto sobre el total (100.000) = 7.000 + (40.000×17%) = <strong>10.800</strong>. Crédito por impuesto extranjero a la renta (tope) = 10.800 − 3.250 = <strong>$7.550</strong> computable como pago a cuenta (el impuesto al consumo pagado afuera <em>no</em> se computa).</p>
  <p>Si fuera <strong>no residente</strong>: solo tributa por los $35.000 argentinos → 2.500 + (5.000×15%) = <strong>$3.250</strong>.</p>
  </details>
</div>
`
});
