window.CURSO.unidades.push({
  id: 7,
  numero: "VII",
  titulo: "Imposición sobre el Patrimonio",
  bibliografia: [
    "Jarach, D. (2013) Parte VIII, Caps. I a VI",
    "Villegas, H. B. (2021) Caps. XVII, XIX, XXV y XXVI",
    "Vizcaíno, C. (2017) Cap. XI"
  ],
  temas: [
    {
      id: "7.1",
      titulo: "Impuesto sobre los Patrimonios. Concepto. Hecho imponible. Clasificación. Fundamentos",
      contenido: `
<h3>Concepto</h3>
<div class="def">La imposición patrimonial grava la <strong>riqueza acumulada</strong> (el <em>stock</em> de bienes), a diferencia de la imposición a la renta (que grava un <em>flujo</em>) y al consumo (que grava el gasto).</div>

<h3>Hecho imponible</h3>
<p>La <strong>tenencia o titularidad de un patrimonio</strong> (o de determinados bienes) a una fecha determinada. Suele ser un impuesto <strong>periódico</strong> (anual) que toma una "foto" del patrimonio a la fecha de cierre.</p>

<h3>Clasificación de los impuestos patrimoniales</h3>
<ul>
  <li><strong>Sobre el patrimonio global (neto):</strong> recae sobre la totalidad de los bienes menos las deudas. Es <em>personal</em> y permite progresividad (ej.: Bienes Personales, en su concepción).</li>
  <li><strong>Sobre manifestaciones parciales del patrimonio:</strong> gravan bienes determinados (Inmobiliario, Automotor). Son <em>reales</em>.</li>
  <li><strong>A la transmisión de la riqueza:</strong>
    <ul>
      <li><em>A título oneroso</em> (circulación): Sellos, transferencias.</li>
      <li><em>A título gratuito</em>: impuesto a la herencia, legados y donaciones.</li>
    </ul>
  </li>
</ul>

<h3>Fundamentos: equidad, eficiencia y bienestar</h3>
<ul>
  <li><strong>Equidad:</strong> el patrimonio es una manifestación <em>autónoma</em> de capacidad contributiva (la riqueza otorga seguridad, poder y rendimientos potenciales, aun la que no produce renta). Complementa al impuesto a la renta y mejora la <strong>progresividad global</strong> del sistema (los patrimonios están más concentrados que los ingresos).</li>
  <li><strong>Eficiencia:</strong> puede incentivar el <strong>uso productivo</strong> de los bienes (quien tiene un bien ocioso igual paga, lo que lo presiona a hacerlo rendir). Pero un gravamen alto puede inducir <strong>fuga de capitales</strong> y desincentivar el ahorro.</li>
  <li><strong>Bienestar / control:</strong> sirve de <strong>control cruzado</strong> del impuesto a la renta (los bienes declarados deben condecirse con las rentas) y tiene función de <em>complemento</em>.</li>
</ul>
<p class="muted">Crítica: puede ser <strong>confiscatorio</strong> si grava el capital y no su renta (obliga a desprenderse del bien para pagar), y es de difícil <strong>valuación</strong>.</p>
`
    },
    {
      id: "7.2",
      titulo: "Imposición sobre el Patrimonio Neto y Bruto de las personas. Valuación. Vinculación. Efectos",
      contenido: `
<h3>Patrimonio bruto vs. patrimonio neto</h3>
<table>
  <tr><th>Patrimonio bruto</th><th>Patrimonio neto</th></tr>
  <tr><td>Total de los <strong>bienes</strong>, sin descontar deudas.</td><td>Bienes <strong>menos pasivos (deudas)</strong>. Refleja mejor la verdadera capacidad contributiva.</td></tr>
</table>
<p>El impuesto sobre el patrimonio <strong>neto</strong> es más equitativo (contempla el endeudamiento); el que grava el <strong>bruto</strong> es más simple pero puede gravar riqueza inexistente (muy endeudados). En Argentina, <strong>Bienes Personales</strong> grava (con matices) los bienes sin permitir, en general, deducir pasivos —se acerca a un gravamen sobre el patrimonio bruto de las personas humanas—.</p>

<h3>Sistemas de valuación de los bienes</h3>
<p>El punto más delicado del impuesto patrimonial. Criterios posibles:</p>
<ul>
  <li><strong>Valor de costo</strong> (histórico, eventualmente actualizado).</li>
  <li><strong>Valor de mercado / corriente</strong> (más exacto pero variable y de difícil determinación).</li>
  <li><strong>Valuación fiscal</strong> (la que fija el Estado, ej.: inmuebles).</li>
  <li><strong>Valor de plaza, de cotización</strong> (para títulos y moneda extranjera).</li>
</ul>
<p>La valuación afecta directamente la equidad: valuaciones desactualizadas (típico con inflación) erosionan la base y generan inequidades entre tipos de bienes.</p>

<h3>Momentos de vinculación (criterios espaciales)</h3>
<ul>
  <li><strong>Domicilio/residencia del titular:</strong> grava todo el patrimonio del residente, esté donde esté el bien (criterio personal). Argentina: residentes tributan por bienes en el país <em>y</em> en el exterior.</li>
  <li><strong>Situación o ubicación del bien (territorial):</strong> grava los bienes situados en el territorio, sea quien sea el titular. Para no residentes se aplica este criterio (con responsables sustitutos).</li>
</ul>

<h3>Unidad contribuyente y criterios de atribución</h3>
<p>En el impuesto personal al patrimonio hay que definir la <strong>unidad contribuyente</strong>: el tratamiento de la <em>sociedad conyugal</em> (imposición conjunta —igual carga, con progresividad— vs. independiente; asignación a uno de los cónyuges o a elección de cada uno, hoy también por cuestiones de género) y del <em>patrimonio de los menores</em>. Los <strong>criterios de atribución</strong> vinculan al contribuyente con la materia gravada:</p>
<ul>
  <li><strong>Personales:</strong> residencia, domicilio, ciudadanía o nacionalidad.</li>
  <li><strong>Económicos:</strong> territorio o situación del bien (teoría del beneficio).</li>
</ul>
<p>La combinación de criterios entre países genera <strong>doble imposición internacional</strong>, que se atenúa con convenios y con la figura del <strong>responsable sustituto</strong> (para bienes de no residentes).</p>

<h3>Tratamientos alternativos (personas y empresas)</h3>
<p>Cuando el patrimonio de las personas humanas incluye su participación en empresas, hay tres esquemas posibles:</p>
<ul>
  <li><strong>Integración total:</strong> se grava a la persona humana por <em>todo</em> su patrimonio neto, incluida la participación en sociedades; a la empresa se le aplica un impuesto proporcional que el socio computa como <strong>pago a cuenta</strong> en su DJ (permite el <em>control cruzado</em>).</li>
  <li><strong>Integración parcial:</strong> se grava el patrimonio individual (con la participación en sociedades <em>de personas</em>) con alícuotas progresivas, y las sociedades <em>de capital</em> son sujeto separado; una misma actividad puede quedar gravada a alícuotas distintas.</li>
  <li><strong>Separación (no integración):</strong> se grava por separado el patrimonio individual (alícuota progresiva) y a las sociedades de capital o de personas (alícuota proporcional), sin incorporar la participación societaria en la DJ personal.</li>
</ul>
<div class="callout"><strong>Bienes Personales (datos 2023, orientativos):</strong> mínimo no imponible general de $100.000.000 y de $350.000.000 para el inmueble destinado a <em>casa-habitación</em>; alícuotas del 0,50% al 1,50% (con "beneficio cumplidor", del 0,25% al 1%). <span class="muted">Los montos y las alícuotas se actualizan por ley cada año: verificar los vigentes al momento de estudiar.</span></div>

<h3>Efectos económicos</h3>
<ul>
  <li>Sobre el <strong>ahorro</strong>: puede desincentivarlo (grava la riqueza acumulada).</li>
  <li>Sobre la <strong>localización de capitales</strong>: alícuotas altas inducen a <strong>deslocalizar</strong> o subdeclarar bienes (especialmente financieros, muy móviles).</li>
  <li>Incentiva el <strong>uso productivo</strong> de los bienes y, bien diseñado, mejora la <strong>progresividad</strong> del sistema.</li>
</ul>
`
    },
    {
      id: "7.3",
      titulo: "Imposición sobre el capital bruto y neto de las empresas. Estructura. Valuación",
      contenido: `
<h3>Concepto</h3>
<p>Grava el <strong>capital o activo de las empresas</strong>. Puede recaer sobre:</p>
<ul>
  <li><strong>Capital bruto (activo):</strong> el total de los activos, sin deducir pasivos. Ej.: el histórico Impuesto a los Activos; el actual sirve como <em>imposición mínima</em>.</li>
  <li><strong>Capital neto (patrimonio neto):</strong> activos menos pasivos. Refleja la inversión propia de los dueños.</li>
</ul>

<h3>Estructura y fundamento</h3>
<ul>
  <li>Es un impuesto <strong>real</strong> y generalmente <strong>proporcional</strong>.</li>
  <li>Suele funcionar como <strong>impuesto mínimo</strong> complementario del impuesto a la renta: asegura que las empresas tributen aun cuando declaren pérdidas o renta baja (presunción de que el activo debe generar una renta mínima). Por eso a menudo es computable como <strong>pago a cuenta</strong> del impuesto a las ganancias, o viceversa.</li>
  <li>Tiene función de <strong>control</strong> y de incentivo al uso eficiente del activo (penaliza activos improductivos).</li>
</ul>

<h3>Fundamentos y críticas (Jarach)</h3>
<p>Jarach señala razones que justifican gravar el capital de las empresas: como <em>sustituto</em> de los impuestos sucesorios y de las transferencias a título oneroso; como <em>adelanto</em> del impuesto personal al patrimonio neto de las personas físicas; y, considerando el valor de las acciones o participaciones, como <em>sustitutivo</em> del impuesto al patrimonio neto personal. Eiroa Vilarnovo agrega: recaudación, simplicidad, evitar distorsiones en el mercado y su uso como gravamen mínimo de <em>renta presunta</em>.</p>
<p><strong>Argumentos en contra:</strong> puede <em>trasladarse</em> (volviéndose indirecto y regresivo); recae con más peso sobre las <em>empresas marginales y las que se inician</em>; <em>desalienta la inversión</em>, sobre todo en épocas de recesión; discrimina contra las empresas de <em>uso intensivo de capital</em>; y, si coexiste con el gravamen a las personas físicas, genera <em>doble imposición</em> (agravada cuando recae sobre el patrimonio bruto).</p>

<h3>Valuación de los bienes de la empresa</h3>
<p>Se nutre de la <strong>contabilidad</strong> y las normas impositivas:</p>
<ul>
  <li>Bienes de uso: costo de adquisición/producción menos <strong>amortizaciones</strong>.</li>
  <li>Bienes de cambio (mercaderías): valor de costo o de plaza.</li>
  <li>Inmuebles y rodados: valuación fiscal o costo.</li>
  <li>Créditos e inversiones: valor nominal / de cotización.</li>
</ul>
<p class="muted">El problema de la valuación se agrava con la <strong>inflación</strong>: sin ajuste, se grava un capital nominalmente inflado (capital "ficticio").</p>

<h3>Efectos</h3>
<p>Puede afectar la <strong>rentabilidad</strong> de la inversión (es un costo fijo independiente de la ganancia), penalizar a empresas intensivas en capital y, si es alto, desalentar la inversión o trasladarse a precios.</p>
`
    },
    {
      id: "7.4",
      titulo: "Imposición parcial: Inmobiliario urbano y rural. Impuesto al parque automotor",
      contenido: `
<h3>Impuesto Inmobiliario</h3>
<div class="def">Grava la <strong>propiedad o posesión de inmuebles</strong>. Es un impuesto <strong>directo, real y periódico</strong>, de competencia <strong>provincial</strong> (uno de los principales recursos propios de las provincias).</div>
<ul>
  <li><strong>Base imponible:</strong> la <strong>valuación fiscal</strong> del inmueble (tierra + mejoras), fijada por el catastro provincial.</li>
  <li><strong>Alícuotas:</strong> proporcionales o progresivas según la valuación.</li>
  <li><strong>Inmobiliario urbano y rural:</strong>
    <ul>
      <li><em>Urbano:</em> grava terrenos y edificios en zonas urbanas.</li>
      <li><em>Rural:</em> grava la tierra rural; puede usarse con fines extrafiscales (gravar más la tierra <strong>libre de mejoras</strong> u ociosa para incentivar su explotación — vinculación con la idea fisiocrática de gravar la renta de la tierra).</li>
    </ul>
  </li>
</ul>
<div class="callout"><strong>Ventajas:</strong> base inmóvil (no se puede ocultar ni fugar), estable, de fácil control, buen impuesto local (principio del beneficio: financia servicios urbanos). <strong>Problema:</strong> depende de valuaciones fiscales actualizadas; suelen quedar rezagadas, erosionando la equidad y la recaudación.</div>

<h3>Impuesto al parque automotor (Patente / Automotor)</h3>
<div class="def">Grava la <strong>propiedad de vehículos automotores</strong>. Impuesto <strong>directo, real y periódico</strong>, también de competencia <strong>provincial</strong> (en muchas provincias descentralizado a los municipios).</div>
<ul>
  <li><strong>Base imponible:</strong> el <strong>valor del vehículo</strong> (tabla de valuación según modelo, año y características) o, en algunos casos, peso/cilindrada.</li>
  <li><strong>Alícuotas:</strong> progresivas o por categorías; suelen decrecer con la antigüedad del vehículo.</li>
  <li>Tiene componente extrafiscal posible (gravar más vehículos suntuarios o más contaminantes).</li>
</ul>
<p class="muted">Ambos (Inmobiliario y Automotor) son impuestos patrimoniales <em>parciales</em>: no miden el patrimonio total sino la tenencia de un tipo de bien.</p>
`
    },
    {
      id: "7.5",
      titulo: "Imposición a la Circulación de la Riqueza. Fundamento. Efectos. Casos",
      contenido: `
<h3>Concepto</h3>
<div class="def">Grava la <strong>transferencia o circulación de bienes y derechos</strong> a título oneroso, es decir, los actos jurídicos por los que la riqueza cambia de manos (contratos, escrituras, transmisiones).</div>
<p>No grava la tenencia (como el patrimonial puro) ni el consumo final (como el IVA), sino el <strong>acto de circulación</strong> en sí.</p>

<h3>Casos típicos</h3>
<ul>
  <li><strong>Impuesto de Sellos:</strong> grava la <em>instrumentación</em> de actos, contratos y operaciones de carácter oneroso (compraventas, locaciones, contratos). Es <strong>provincial</strong>, real y proporcional. Su hecho imponible es la <em>existencia del instrumento</em> (principio de instrumentalidad).</li>
  <li><strong>Impuesto a la transferencia de inmuebles</strong> (de personas humanas).</li>
  <li><strong>Impuesto sobre los Débitos y Créditos bancarios</strong> ("impuesto al cheque"): grava los movimientos de fondos en cuentas (circulación monetaria); nacional.</li>
  <li>Transferencias de automotores, cesiones de derechos.</li>
</ul>

<h3>Fundamento</h3>
<p>La circulación de riqueza es un <strong>indicio de capacidad contributiva</strong> y un momento de fácil control (suele requerir intervención registral o bancaria). Históricamente fueron impuestos muy productivos por su sencillez recaudatoria.</p>

<h3>Efectos económicos</h3>
<ul>
  <li>Son impuestos <strong>distorsivos</strong>: gravan la transacción y no la capacidad de pago real, por lo que <strong>encarecen y desalientan las operaciones</strong> (afectan la circulación eficiente de los bienes).</li>
  <li>El impuesto al cheque <strong>desincentiva la bancarización</strong> y puede ser <strong>regresivo</strong> y "en cascada".</li>
  <li>Sellos puede generar <strong>doble imposición</strong> y conflictos interjurisdiccionales.</li>
  <li>Por eso la doctrina los considera de <strong>baja calidad</strong>, aunque las provincias y la Nación los mantienen por su facilidad recaudatoria.</li>
</ul>
`
    },
    {
      id: "7.6",
      titulo: "Imposición a la Herencia y a la transmisión gratuita de bienes. Fundamento",
      contenido: `
<h3>Concepto</h3>
<div class="def">Grava la <strong>transmisión de bienes a título gratuito</strong>: por causa de muerte (<em>herencias y legados</em>) o entre vivos (<em>donaciones</em>). Es un impuesto patrimonial sobre el <em>enriquecimiento</em> que recibe el beneficiario.</div>

<h3>Modalidades</h3>
<ul>
  <li><strong>Sobre el acervo global (estate tax):</strong> grava la <em>masa hereditaria</em> total del causante antes de repartirla. Más simple.</li>
  <li><strong>Sobre las hijuelas o porciones (inheritance tax):</strong> grava lo que recibe <em>cada heredero</em>. Permite personalizar: alícuotas según el <strong>monto recibido</strong> y según el <strong>grado de parentesco</strong> (más alta cuanto más lejano el vínculo). Es más equitativo.</li>
</ul>

<h3>Fundamentos</h3>
<ul>
  <li><strong>Capacidad contributiva:</strong> el heredero/donatario experimenta un <strong>incremento patrimonial</strong> sin esfuerzo (riqueza "no ganada").</li>
  <li><strong>Equidad y redistribución:</strong> es uno de los instrumentos más potentes contra la <strong>concentración y perpetuación de la riqueza</strong> entre generaciones (igualdad de oportunidades).</li>
  <li><strong>Principio del beneficio</strong>: la transmisión se ampara en el orden jurídico que garantiza la propiedad y la sucesión.</li>
</ul>

<h3>Críticas y problemas</h3>
<ul>
  <li>Puede obligar a <strong>liquidar bienes</strong> para pagar (problema de liquidez, sobre todo en empresas familiares y campos).</li>
  <li>Riesgo de <strong>doble imposición</strong> (ya se tributó al generar esa riqueza).</li>
  <li>Alta <strong>elusión</strong> (donaciones encubiertas, sociedades, fuga) y rendimiento recaudatorio bajo en relación al costo político.</li>
</ul>

<h3>Situación en Argentina</h3>
<p>El impuesto a la herencia <strong>no existe a nivel nacional</strong> (fue derogado en 1976). Es una <strong>facultad provincial</strong>. La <strong>Provincia de Buenos Aires</strong> reinstauró el <em>Impuesto a la Transmisión Gratuita de Bienes</em> en 2010. La mayoría de las provincias no lo aplica.</p>
<p class="muted">Es un caso paradigmático de la tensión <strong>equidad (a favor) vs. eficiencia y viabilidad política (en contra)</strong>.</p>
`
    }
  ],
  practicos: `
<p class="muted">No hay un archivo de trabajos prácticos de la cátedra para esta unidad en el material disponible. Estas son <strong>preguntas de repaso</strong> elaboradas a partir de la teoría.</p>

<div class="tp">
  <h4>Cuadro sinóptico — Impuestos al patrimonio en Argentina</h4>
  <table>
    <tr><th>Impuesto</th><th>Hecho imponible</th><th>Nivel</th><th>Base legal</th></tr>
    <tr><td><strong>Inmobiliario</strong></td><td>Titularidad de inmuebles (urbanos y rurales) al 1° de enero.</td><td>Provincial</td><td>Códigos Fiscales · <span class="cn">art. 121</span></td></tr>
    <tr><td><strong>Bienes Personales</strong></td><td>Patrimonio bruto de personas humanas al 31/12 (bienes en el país y el exterior).</td><td>Nacional</td><td>Ley 23.966 · <span class="cn">art. 75 inc. 2</span></td></tr>
    <tr><td><strong>Automotor</strong></td><td>Titularidad registral de rodados.</td><td>Provincial / Municipal</td><td>Códigos Fiscales</td></tr>
    <tr><td><strong>Sellos</strong></td><td>Instrumentación de actos onerosos.</td><td>Provincial</td><td>Códigos Fiscales</td></tr>
    <tr><td><strong>Transmisión gratuita de bienes</strong> (herencias)</td><td>Enriquecimiento por herencia, legado o donación.</td><td>Provincial (Bs. As.)</td><td>Ley 14.044 (PBA)</td></tr>
  </table>

  <h4>Preguntas de repaso</h4>
  <p class="tp-consigna">1) ¿Qué diferencia hay entre gravar el patrimonio bruto y el neto? ¿Cuál es más equitativo?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">El bruto grava los bienes sin descontar deudas; el neto resta los pasivos. El <strong>neto</strong> es más equitativo porque refleja la verdadera capacidad contributiva. Bienes Personales se acerca a un gravamen sobre el patrimonio bruto de las personas.</p></details>
  <p class="tp-consigna">2) ¿Por qué el Impuesto Inmobiliario es un buen impuesto local?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Su base es inmóvil (no se puede ocultar ni fugar), es estable y de fácil control, y responde al principio del beneficio (financia servicios urbanos). Su debilidad: depende de valuaciones fiscales actualizadas.</p></details>
  <p class="tp-consigna">3) ¿Cuál es el hecho imponible del Impuesto de Sellos y por qué se lo critica?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Grava la <em>instrumentación</em> de actos onerosos (principio de instrumentalidad). Se lo critica por distorsivo: encarece las operaciones y puede generar doble imposición.</p></details>
  <p class="tp-consigna">4) ¿Existe el impuesto a la herencia en Argentina? Fundamentar la tensión equidad/eficiencia.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">A nivel nacional fue derogado en 1976; es facultad provincial (lo aplica Buenos Aires desde 2010). Es muy equitativo (grava riqueza "no ganada", combate la concentración) pero enfrenta problemas de liquidez, elusión y bajo rendimiento → tensión equidad vs. eficiencia/viabilidad política.</p></details>
</div>
`
});
