window.CURSO.unidades.push({
  id: 8,
  numero: "VIII",
  titulo: "Imposición sobre el Consumo",
  bibliografia: [
    "Jarach, D. (2013) Parte X, Caps. I a VI",
    "Villegas, H. B. (2021) Caps. XX, XXIII, XXIV, XXV y XXVI",
    "Vizcaíno, C. (2017) Cap. XI"
  ],
  temas: [
    {
      id: "8.1",
      titulo: "La imposición sobre los consumos. Concepto. Ventajas y desventajas. Comparación con el Impuesto al Gasto",
      contenido: `
<h3>Concepto</h3>
<div class="def">La imposición al consumo grava la <strong>utilización de la renta</strong>, es decir, el <em>gasto</em> en bienes y servicios. Es un impuesto <strong>indirecto</strong> que recae sobre una manifestación <em>mediata</em> de capacidad contributiva (se infiere capacidad de pago de quien consume).</div>
<p>Económicamente lo paga el <strong>consumidor final</strong> (vía precio), aunque lo ingresen al fisco los productores y comerciantes (contribuyentes de iure). Es el tributo que más recauda en Argentina (IVA + Ingresos Brutos + Internos).</p>

<h3>Ventajas</h3>
<ul>
  <li><strong>Gran capacidad recaudatoria</strong> y bajo costo relativo de administración (sobre todo el IVA).</li>
  <li><strong>Dificulta la evasión</strong> por el mecanismo de oposición de intereses (en el IVA, el comprador exige factura para computar crédito).</li>
  <li>No castiga el <strong>ahorro</strong> (grava solo lo consumido) → más <strong>neutral</strong> frente a la inversión que el impuesto a la renta.</li>
  <li>"Anestesia fiscal": el contribuyente lo paga de a poco, incorporado al precio, con menor resistencia.</li>
</ul>

<h3>Desventajas</h3>
<ul>
  <li><strong>Regresividad:</strong> los sectores de menores ingresos consumen una proporción <em>mayor</em> de su renta, por lo que soportan una carga relativa mayor. Es la principal crítica.</li>
  <li>No contempla la <strong>situación personal</strong> del contribuyente (es real).</li>
  <li>Puede ser <strong>inflacionario</strong> (se traslada a precios).</li>
</ul>

<h3>Comparación con el Impuesto al Gasto</h3>
<div class="callout"><strong>Impuesto al gasto (Kaldor):</strong> es un impuesto <strong>personal, directo y progresivo</strong> que grava el <em>consumo total</em> de cada individuo en el año, calculado de forma indirecta: <strong>Gasto = Ingresos − Ahorro neto</strong>.</div>
<table>
  <tr><th>Impuesto al consumo (IVA, internos)</th><th>Impuesto al gasto (Kaldor)</th></tr>
  <tr><td>Indirecto, real, proporcional, se cobra en cada transacción.</td><td>Directo, personal, progresivo, se declara una vez al año.</td></tr>
  <tr><td>Regresivo respecto del ingreso.</td><td>Permite progresividad y deducciones personales.</td></tr>
  <tr><td>Fácil de administrar y muy usado.</td><td>Conceptualmente atractivo (no castiga el ahorro y es equitativo) pero de <strong>muy difícil aplicación</strong> (casi no se usa).</td></tr>
</table>
<p>Ambos coinciden en gravar el consumo y <strong>no</strong> el ahorro; difieren en la técnica (real vs. personal) y en la equidad (regresivo vs. progresivo).</p>
`
    },
    {
      id: "8.2",
      titulo: "Clasificación de los impuestos al consumo. Características",
      contenido: `
<p>Los impuestos al consumo se clasifican según varios criterios:</p>

<h3>Según la amplitud de la base: generales y selectivos</h3>
<ul>
  <li><strong>Generales:</strong> gravan la <em>totalidad</em> de los consumos (o la mayoría). Ej.: <strong>IVA</strong>, Ingresos Brutos.</li>
  <li><strong>Selectivos o específicos (sobre consumos determinados):</strong> gravan <em>ciertos</em> bienes. Ej.: <strong>Impuestos Internos</strong> sobre cigarrillos, bebidas alcohólicas, combustibles, artículos de lujo. Suelen tener <strong>fines extrafiscales</strong> (desalentar consumos nocivos) o gravar bienes de demanda inelástica.</li>
</ul>

<h3>Según las etapas que alcanza: monofásicos y plurifásicos</h3>
<ul>
  <li><strong>Monofásicos:</strong> gravan <em>una sola</em> etapa del circuito (fabricante, mayorista o minorista).</li>
  <li><strong>Plurifásicos:</strong> gravan <em>varias o todas</em> las etapas (ver detalle en 8.3).</li>
</ul>

<h3>Según la base de medición</h3>
<ul>
  <li>Sobre el <strong>valor</strong> (ad valorem): un porcentaje del precio.</li>
  <li><strong>Específicos</strong>: una suma fija por unidad física (por litro, por paquete).</li>
</ul>

<h3>Según el lugar: internos y al comercio exterior</h3>
<ul>
  <li><strong>Internos:</strong> gravan consumos dentro del país.</li>
  <li><strong>Al comercio exterior:</strong> derechos de importación y exportación (ver 8.5).</li>
</ul>

<h3>Características generales</h3>
<p>Son <strong>indirectos, reales, trasladables</strong> (recaen en el consumidor final), de alta productividad recaudatoria y, en general, <strong>regresivos</strong> respecto del ingreso. Para atenuar la regresividad se usan <strong>exenciones</strong> o <strong>alícuotas diferenciales</strong> sobre bienes de la canasta básica.</p>
`
    },
    {
      id: "8.3",
      titulo: "Imposición monofásica y plurifásica. Tipo valor agregado y en cascada. Base imponible. Bienes de inversión",
      contenido: `
<h3>Imposición monofásica</h3>
<p>Grava <strong>una única etapa</strong> del proceso de producción-distribución:</p>
<ul>
  <li><em>En el fabricante</em> (productor): base reducida, pocos contribuyentes, fácil control, pero deja sin gravar el valor agregado posterior.</li>
  <li><em>En el mayorista</em> o <em>en el minorista</em>: base más amplia, pero más contribuyentes a controlar.</li>
</ul>
<p>Ventaja: no produce efecto cascada. Desventaja: concentra el riesgo de evasión en una etapa.</p>

<h3>Imposición plurifásica</h3>
<p>Grava <strong>varias o todas</strong> las etapas del circuito. Dos modalidades clave:</p>

<h4>a) Plurifásica acumulativa ("en cascada")</h4>
<div class="callout">Grava el <strong>valor total</strong> en cada etapa <em>sin</em> permitir descontar el impuesto pagado en la etapa anterior. El impuesto se va "acumulando" e integra la base de la etapa siguiente → <strong>impuesto sobre impuesto</strong> ("piramidación").</div>
<ul>
  <li>Efectos negativos: <strong>distorsiona los precios relativos</strong>, penaliza a las cadenas largas y <strong>incentiva la integración vertical</strong> de empresas (para saltear etapas). Carga total <em>oculta</em> y variable.</li>
  <li>Ejemplo argentino: <strong>Ingresos Brutos</strong> (provincial) es un impuesto plurifásico acumulativo → su principal crítica.</li>
</ul>

<h4>b) Plurifásica no acumulativa: el IVA (tipo valor agregado)</h4>
<div class="def"><b>IVA:</b> grava en cada etapa <em>solo el valor agregado</em> por esa etapa. Técnica de liquidación: <strong>débito fiscal</strong> (IVA de las ventas) <strong>− crédito fiscal</strong> (IVA de las compras) = impuesto a ingresar.</div>
<ul>
  <li><strong>Neutralidad:</strong> la carga total es igual cualquiera sea el número de etapas → no distorsiona ni incentiva la integración.</li>
  <li><strong>Autocontrol:</strong> el comprador exige factura para computar el crédito (oposición de intereses) → combate la evasión.</li>
  <li>Recae, al final, sobre el <strong>consumidor final</strong> (que no tiene crédito fiscal).</li>
</ul>

<h3>Determinación de la base imponible: métodos del IVA</h3>
<ul>
  <li><strong>Por adición:</strong> sumar los componentes del valor agregado (salarios + rentas + beneficios).</li>
  <li><strong>Por sustracción:</strong> ventas − compras. Puede ser:
    <ul>
      <li><em>Base contra base:</em> (ventas − compras) × alícuota.</li>
      <li><em>Impuesto contra impuesto</em> (el usado): débito fiscal − crédito fiscal. Es el método del IVA argentino.</li>
    </ul>
  </li>
</ul>

<h3>Tratamiento de los bienes de inversión (bienes de capital)</h3>
<p>Define el "tipo" de IVA según cómo trate la compra de bienes de capital:</p>
<ul>
  <li><strong>IVA tipo producto:</strong> <em>no</em> permite deducir el IVA de los bienes de capital → los grava doblemente (desalienta la inversión).</li>
  <li><strong>IVA tipo renta:</strong> permite deducir el IVA de los bienes de capital <em>al ritmo de las amortizaciones</em>.</li>
  <li><strong>IVA tipo consumo (el más usado y el argentino):</strong> permite computar <strong>íntegramente y de inmediato</strong> el crédito fiscal por la compra de bienes de capital. Es el más <strong>neutral</strong> respecto de la inversión (no castiga la formación de capital).</li>
</ul>
<h3>Exenciones</h3>
<p>Liberan ciertos bienes/servicios (canasta básica, educación, salud) para atenuar regresividad. Cuidado: la exención <em>en una etapa intermedia</em> rompe la cadena de créditos y puede generar acumulación; la <strong>tasa cero</strong> (típica en exportaciones) es preferible porque permite recuperar el crédito fiscal.</p>
`
    },
    {
      id: "8.4",
      titulo: "La imposición sobre los Ingresos Brutos. Características",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Impuesto sobre los Ingresos Brutos (IIBB):</b> grava el <strong>ejercicio habitual de una actividad económica</strong> (comercio, industria, servicios, profesiones) a título oneroso, tomando como base imponible los <strong>ingresos brutos</strong> devengados. Es el principal impuesto <strong>provincial</strong>.</div>

<h3>Características</h3>
<ul>
  <li><strong>Indirecto, real, proporcional</strong> y de etapas múltiples.</li>
  <li><strong>Plurifásico acumulativo ("en cascada"):</strong> se aplica en cada etapa sobre el ingreso total, sin descontar lo pagado antes → <strong>piramidación</strong> (impuesto sobre impuesto). Ésta es su gran falla técnica.</li>
  <li><strong>Base:</strong> los ingresos brutos (ventas/facturación), no la ganancia ni el valor agregado.</li>
  <li>Se tributa aunque la empresa tenga <strong>pérdidas</strong> (grava facturación, no rentabilidad).</li>
</ul>

<h3>Efectos económicos (críticas)</h3>
<ul>
  <li><strong>Distorsiona precios relativos</strong> y penaliza las cadenas productivas largas (efecto cascada).</li>
  <li><strong>Incentiva la integración vertical</strong> artificial (para reducir etapas gravadas).</li>
  <li>Afecta la <strong>competitividad</strong> (grava exportaciones de hecho si no se neutraliza; se "exporta impuesto").</li>
  <li>Es <strong>regresivo</strong> y poco transparente (la carga total queda oculta en el precio).</li>
</ul>
<div class="callout">Por estas razones, los pactos fiscales y la doctrina propusieron reiteradamente <strong>sustituir IIBB</strong> por un impuesto provincial a las ventas finales o por un IVA provincial. Sin embargo, persiste por ser la <strong>principal fuente de recursos propios</strong> de las provincias.</div>

<h3>El Convenio Multilateral</h3>
<p>Como una misma actividad puede desarrollarse en <strong>varias provincias</strong>, el <strong>Convenio Multilateral</strong> (1977) evita la múltiple imposición: distribuye la base imponible entre las jurisdicciones donde el contribuyente opera, según un <strong>régimen general</strong> (50% por ingresos y 50% por gastos en cada jurisdicción) o <strong>regímenes especiales</strong>.</p>
`
    },
    {
      id: "8.5",
      titulo: "Imposición al Comercio Exterior. Concepto, clases y efectos económicos",
      contenido: `
<h3>Concepto</h3>
<div class="def">Los <strong>derechos aduaneros</strong> gravan el paso de mercaderías a través de las fronteras: <strong>derechos de importación</strong> (aranceles) y <strong>derechos de exportación</strong> (retenciones). Son de competencia <strong>exclusiva de la Nación</strong> (arts. 4, 9 y 75 inc. 1 CN).</div>

<h3>Clases</h3>
<ul>
  <li><strong>Derechos de importación (aranceles):</strong>
    <ul>
      <li><em>Ad valorem</em> (% sobre el valor en aduana) o <em>específicos</em> (suma fija por unidad).</li>
      <li>Función <strong>fiscal</strong> (recaudar) y, sobre todo, <strong>extrafiscal/proteccionista</strong> (encarecer el producto importado para proteger la industria local).</li>
    </ul>
  </li>
  <li><strong>Derechos de exportación (retenciones):</strong>
    <ul>
      <li>Gravan la salida de mercaderías. Funciones: recaudatoria, <strong>desacople</strong> entre precios internos e internacionales (evitar que suba el precio interno de alimentos), captar <strong>renta extraordinaria</strong> (p. ej., del agro), y mejorar términos de intercambio.</li>
    </ul>
  </li>
  <li>Otros: <strong>tasa de estadística</strong>, derechos <em>antidumping</em> y compensatorios.</li>
</ul>

<h3>Efectos económicos</h3>
<h4>De los aranceles a la importación</h4>
<ul>
  <li>Suben el <strong>precio interno</strong> del bien importado → benefician al productor local y al fisco, pero <strong>perjudican al consumidor</strong> y generan <strong>pérdida de eficiencia</strong> (peso muerto).</li>
  <li>La <strong>protección efectiva</strong> puede ser mayor que la nominal según graven más al producto final que a sus insumos.</li>
  <li>Riesgo de <strong>represalias</strong> comerciales y de proteger industrias ineficientes.</li>
</ul>
<h4>De las retenciones a la exportación</h4>
<ul>
  <li>Reducen el precio que recibe el productor → <strong>desincentivan la producción y exportación</strong> a largo plazo.</li>
  <li>Bajan el <strong>precio interno</strong> de los bienes exportables (efecto antiinflacionario y redistributivo a favor del consumo interno).</li>
  <li>Alta capacidad recaudatoria y fácil cobro; pero pueden ser <strong>distorsivas</strong> y desalentar inversión en el sector.</li>
</ul>
<div class="callout"><strong>Principio de imposición en destino:</strong> el comercio internacional se grava donde se <em>consume</em> el bien. Por eso las <strong>exportaciones se eximen / gravan a tasa cero</strong> (con devolución del IVA) — para no "exportar impuestos" — y las importaciones tributan el IVA local, igualando la competencia.</div>
`
    }
  ],
  practicos: `
<p class="muted">Trabajos prácticos de la cátedra (consignas y respuestas), con liquidaciones de IVA resueltas.</p>

<div class="tp">
  <h4>TP Nº 1 — Determinación del Valor Agregado (métodos de sustracción)</h4>
  <p class="tp-consigna">Calcular el valor agregado por el método de sustracción <em>real</em> y <em>financiera</em>.</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp"><strong>Sustracción real:</strong> Producción (Ventas + EF − EI de productos) − Insumos (Compras + EI − EF de materias primas).</p>
  <p><strong>Caso 1:</strong> Producción = 19.000 + 12.100 − 9.000 = 22.100; Insumos = 10.500 + 7.800 − 8.500 = 9.800 → <strong>VA = 12.300</strong>. <strong>Financiera:</strong> Ventas − Compras = 19.000 − 10.500 = <strong>8.500</strong>.</p>
  <p><strong>Caso 2:</strong> Producción = 19.000 + 10.000 − 7.000 = 22.000; Insumos = 20.000 + 10.800 − 12.500 = 18.300 → <strong>VA real = 3.700</strong>. <strong>Financiera:</strong> 19.000 − 20.000 = <strong>−1.000</strong>. <span class="muted">(La diferencia entre ambos métodos surge de la variación de existencias.)</span></p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 2 — IVA y bienes de inversión (tipos consumo, producto y renta)</h4>
  <p class="tp-consigna">Datos: Ventas 100.000; Materias primas 50.000; bien de capital 50.000 (vida útil 5 años, deprec. 10.000). Determinar la base imponible según cada tipo de IVA.</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp">Datos: Ventas 100.000; Materias primas 50.000; bien de capital 50.000 (amortización 10.000/año).</p>
  <table>
    <tr><th>Tipo de IVA</th><th>Trato del bien de capital</th><th>Cálculo de la base</th><th>Base</th></tr>
    <tr><td><strong>Consumo</strong></td><td>Deduce <em>todo</em> el bien de capital al comprarlo</td><td>100.000 − 50.000 − 50.000</td><td><strong>0</strong></td></tr>
    <tr><td><strong>Producto bruto</strong></td><td><em>No</em> deduce el bien de capital</td><td>100.000 − 50.000</td><td><strong>50.000</strong></td></tr>
    <tr><td><strong>Renta (ingreso neto)</strong></td><td>Deduce solo la <em>amortización</em></td><td>100.000 − 50.000 − 10.000</td><td><strong>40.000</strong></td></tr>
  </table>
  <p class="muted">El IVA argentino es de <strong>tipo consumo</strong> (permite el cómputo íntegro del crédito por bienes de capital): es el más <em>neutral</em> respecto de la inversión.</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 5 — Caso integral "Los Humedales SA"</h4>
  <p class="tp-consigna">Determinar la base imponible por sustracción real, financiera y por adición.</p>
  <details class="tp-toggle"><summary>Ver resolución</summary>
  <p class="tp-resp"><strong>Sustracción real:</strong> Producción = 40.000 + 6.000 − 4.000 = 42.000; Insumos = 14.000 + 3.000 − 5.000 = 12.000 → 42.000 − 12.000 = 30.000; tipo renta = 30.000 − 300 (amort.) = <strong>29.700</strong>.</p>
  <p><strong>Sustracción financiera:</strong> 40.000 − 14.000 = 26.000 − 300 = <strong>25.700</strong>.</p>
  <p><strong>Adición:</strong> Sueldos 20.000 + Alquileres 4.000 + Beneficio 5.500 + Intereses 200 = <strong>29.700</strong> (coincide con el tipo renta por sustracción).</p>
  </details>
</div>

<div class="tp">
  <h4>TP Nº 6 — IVA en el sector agropecuario (crédito fiscal presunto)</h4>
  <p class="tp-consigna">Tratamiento especial del IVA en el agro y la solución de Cosciani.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary>
  <p class="tp-resp">El sector agropecuario tiene muchas unidades pequeñas con poca organización contable y producción mayormente exportable. Si se lo exime, el productor no puede recuperar el IVA de sus insumos (agroquímicos, combustible), que pasa a ser costo y desvirtúa el impuesto. <strong>Solución de Cosciani — crédito fiscal presunto:</strong> se presume que un % de las ventas (p. ej. 20%) son insumos con IVA pagado; el comprador del producto le reintegra al productor ese IVA presunto y lo computa como crédito fiscal. El problema central es <em>elegir bien el % presunto</em>: si es alto se subsidia al sector, si es bajo se lo penaliza.</p>
  </details>
</div>
`
});
