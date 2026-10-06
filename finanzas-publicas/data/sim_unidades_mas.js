/* Simulacros adicionales por unidad (Simulacro 2 y 3 de cada unidad). Parte 1: Unidades VII a IX. */
window.CURSO = window.CURSO || { unidades: [] };
window.CURSO.simUnidadMas = window.CURSO.simUnidadMas || {};

/* =================== UNIDAD VII =================== */
window.CURSO.simUnidadMas[7] = [
{
  intro: "Simulacro 2 de la Unidad VII: incluye el material de la presentación del Prof. Aquino.",
  vf: [
    { q:"Según Aquino, el patrimonio es el conjunto de bienes, derechos y obligaciones de una persona a una fecha determinada.", v:true, exp:"Verdadero. Es el valor del acervo de una persona en un momento dado." },
    { q:"El impuesto al patrimonio grava un flujo de riqueza generado en el período.", v:false, exp:"Falso. Grava un stock (riqueza acumulada); el flujo lo grava el impuesto a la renta." },
    { q:"Para Fernández y D'Agostino, el impuesto al patrimonio alcanza ganancias de capital no captadas por el impuesto a la renta.", v:true, exp:"Verdadero. Es una de sus tres razones para considerarlo un complemento útil de la renta." },
    { q:"El Informe Meade propone eliminar todo impuesto sobre el patrimonio.", v:false, exp:"Falso. Propone un impuesto personal al gasto combinado con un impuesto al patrimonio neto personal y a las herencias." },
    { q:"Según Aquino, el impuesto inmobiliario adicional del Chaco aumenta si los inmuebles están inexplotados o deficientemente explotados.", v:true, exp:"Verdadero. También si el propietario reside fuera del país; los bosques privados están exentos." },
    { q:"Bienes Personales grava los bienes situados en el país de las personas domiciliadas en el exterior.", v:true, exp:"Verdadero. Los residentes tributan por los bienes del país y del exterior; los no residentes, sólo por los del país." },
    { q:"El impuesto a la ganancia mínima presunta tenía una alícuota progresiva.", v:false, exp:"Falso. Era proporcional del 1% sobre los activos." },
    { q:"El sistema de imposición inmobiliaria sobre el valor venal es el que siguen las provincias y municipios argentinos.", v:true, exp:"Verdadero (Aquino). Valuación del suelo y las construcciones con alícuota generalmente proporcional." },
    { q:"En el impuesto de sellos, la invalidez posterior del acto instrumentado elimina la obligación de pagar.", v:false, exp:"Falso. El instrumento da virtualidad tributaria con abstracción de su validez, eficacia o cumplimiento posterior." },
    { q:"El impuesto al acervo sucesorio puede justificarse por la capacidad contributiva del causante en su riqueza acumulada en vida.", v:true, exp:"Verdadero. La otra justificación es el beneficio de la protección estatal a la transmisión." }
  ],
  fill: [
    { q:"Según Aquino, el impuesto al patrimonio es directo, progresivo y de naturaleza ______.", resp:["personal"], sol:"personal" },
    { q:"Las tres razones de Fernández y D'Agostino: no afecta el capital ______, alcanza la renta imputada y alcanza ganancias de capital.", resp:["humano"], sol:"humano" },
    { q:"El valor locativo de la vivienda propia es un ejemplo de renta ______.", resp:["imputada"], sol:"imputada" },
    { q:"El impuesto sobre baldíos libres de mejoras se aplica en el municipio de ______.", resp:["resistencia"], sol:"Resistencia" },
    { q:"Bienes Personales se reglamentó por el Decreto ______/96.", resp:["197"], sol:"197/96" },
    { q:"La ley que en 1990 derogó los impuestos al patrimonio neto y a los capitales es la Ley N° ______.", resp:["23760","23.760"], sol:"23.760" },
    { q:"El impuesto a la ganancia mínima presunta grava los ______ de la empresa al cierre del ejercicio.", resp:["activos"], sol:"activos" },
    { q:"La forma de imposición inmobiliaria que aplica un porcentaje sobre la producción sin descontar gastos grava el producto ______ del suelo.", resp:["bruto"], sol:"bruto" },
    { q:"El impuesto a los débitos bancarios se estableció en Argentina en el año ______.", resp:["1989"], sol:"1989" },
    { q:"El documento que indica lo que corresponde a cada heredero se denomina ______.", resp:["hijuela"], sol:"hijuela" }
  ],
  analisis: [
    { q:"Explique por qué el patrimonio es una manifestación autónoma de capacidad contributiva.", a:"<p>La capacidad contributiva se manifiesta en la renta, el consumo y el patrimonio. El patrimonio es fuente productora de renta y da ventajas propias: seguridad, poder, posibilidad de consumir sin trabajar. Quien sólo tiene ingresos para vivir no está en igual condición que quien, con los mismos ingresos, posee un patrimonio considerable. Por eso se grava en forma complementaria a la renta.</p>" },
    { q:"Explique las tres razones de Fernández y D'Agostino para usar el impuesto al patrimonio como complemento de la renta.", a:"<ol><li>Al no afectar el capital humano, cumple el mismo propósito que una desgravación de las rentas del trabajo (discrimina a favor de las rentas ganadas).</li><li>Alcanza la renta imputada de las propiedades (valor locativo), que la renta no capta.</li><li>Alcanza las ganancias de capital (aumentos de valor de los bienes) no gravadas por el impuesto personal a la renta.</li></ol>" },
    { q:"Explique el Informe Meade y su propuesta sobre la imposición patrimonial.", a:"<p>Propone sustituir el impuesto a la renta por un impuesto personal directo al gasto, para promover el ahorro y la inversión, y complementarlo con un impuesto al patrimonio neto personal. Distingue el enriquecimiento por herencia del que surge del ahorro de rentas del esfuerzo personal, y propone combinar un impuesto a las herencias y donaciones con uno a la tenencia. Conclusión: combinar renta y patrimonio acentúa la progresividad global y los fines redistributivos.</p>" },
    { q:"Explique los ejemplos de eficiencia en la normativa del Chaco y de Resistencia.", a:"<p>El Código Tributario del Chaco grava con un <b>inmobiliario adicional progresivo</b> el conjunto de inmuebles rurales de un contribuyente cuando excede la cantidad fijada por la ley; aumenta si el dueño reside en el exterior o si los inmuebles están inexplotados o mal explotados (exención para bosques privados). Resistencia grava los <b>baldíos</b> libres de mejoras. Ambos castigan la tenencia ociosa y especulativa e incentivan el uso productivo de la tierra.</p>" },
    { q:"Explique el hecho imponible, los sujetos y las exenciones principales de Bienes Personales.", a:"<p><b>Hecho imponible:</b> bienes existentes al 31/12, en el país y en el exterior. <b>Sujetos:</b> personas humanas domiciliadas en el país y sucesiones indivisas radicadas aquí (por bienes del país y del exterior); domiciliadas en el exterior (sólo por bienes del país, con responsable sustituto). <b>Exenciones (art. 21):</b> bienes de diplomáticos extranjeros con reciprocidad, cuotas de cooperativas, bienes inmateriales, bienes de la Ley 19.640, títulos públicos, depósitos en entidades financieras.</p>" },
    { q:"Explique el impuesto a la ganancia mínima presunta y su relación con el caso Hermitage.", a:"<p>Ley 25.063 (1998): grava los activos al cierre del ejercicio con una alícuota del 1%, computable a cuenta de Ganancias; mínimo exento $200.000; los bienes improductivos siempre se computan. Presume que los activos generan una renta mínima. En <i>Hermitage</i> (2010) la CSJN lo declaró inaplicable a una empresa que probó pérdidas: no es razonable presumir renta sin considerar pasivos cuando no hay capacidad contributiva.</p>" },
    { q:"Explique la valuación de los inmuebles a los fines del impuesto inmobiliario.", a:"<p>Se valúa a valor de mercado o venal (lo que se obtendría en una venta en plazo razonable con publicidad); el costo de ingreso al patrimonio no tiene sentido. La tierra libre de mejoras se aproxima por precios de transferencias y remates; las mejoras se valúan mejor por costo menos depreciación. Distorsiones: valorización rápida de zonas (un shopping). Métodos: tasadores oficiales, avalúo, catastro.</p>" },
    { q:"Explique los aspectos del hecho imponible del impuesto automotor según Aquino.", a:"<p><b>Material:</b> automotores, acoplados y similares. <b>Personal:</b> titulares de dominio ante el RNPA y usufructuarios de vehículos cedidos por el Estado. <b>Temporal:</b> anual, proporcional al tiempo de radicación (días corridos). <b>Espacial:</b> ámbito municipal. Aquino lo presenta como tasa municipal; la doctrina suele tratarlo como impuesto real. Características: fácil de recaudar, regresivo, distorsivo.</p>" },
    { q:"Explique el impuesto a las transacciones financieras con un ejemplo.", a:"<p>Grava los débitos y créditos en cuentas bancarias (6 por mil cada uno). Ejemplo: depósito de $35.000 → $210; cheque de $14.000 → $84; total $294; a cuenta de Ganancias el 34% de lo pagado por acreditaciones = $71,40. Es indirecto, acumulativo, eludible con efectivo, desalienta la bancarización; fácil de cobrar.</p>" },
    { q:"Compare el impuesto al acervo y el impuesto a las hijuelas según Aquino.", a:"<p><b>Acervo:</b> grava la totalidad del acervo neto; real; prescinde de la cuota de cada sucesor; capta en forma imperfecta la capacidad de los beneficiarios; donde se aplica suele ser progresivo; se complementa con un impuesto a las donaciones. <b>Hijuelas:</b> grava el enriquecimiento de cada beneficiario; personal; progresivo con escalas más moderadas, en función directa del monto e indirecta del parentesco.</p>" }
  ]
},
{
  intro: "Simulacro 3 de la Unidad VII: con ejercicios.",
  vf: [
    { q:"Un impuesto del 1% sobre el valor de un inmueble que rinde 10% anual equivale a un impuesto del 10% sobre su renta.", v:true, exp:"Verdadero (Aquino): 1% del valor = 10% de la renta." },
    { q:"En el impuesto al patrimonio bruto se deducen todas las deudas del contribuyente.", v:false, exp:"Falso. No se deducen; por eso se lo considera inequitativo." },
    { q:"En Bienes Personales 2025, los contribuyentes cumplidores tributan 0% en el primer tramo.", v:true, exp:"Verdadero. Escala de cumplidores: 0% · 0,25% · 0,50%." },
    { q:"La ganancia mínima presunta no deducía los pasivos de la empresa.", v:true, exp:"Verdadero. Gravaba el activo; por eso castigaba a las empresas endeudadas." },
    { q:"El impuesto sobre el capital de las empresas es apto para una política de estabilización en épocas de depresión.", v:false, exp:"Falso (Aquino). Desalienta la inversión y favorece a las empresas viejas con bienes desactualizados." },
    { q:"Si un impuesto inmobiliario real aplica alícuotas progresivas a cada inmueble por separado, quien tiene un terreno de $600 puede pagar más que quien tiene tres terrenos de $200.", v:true, exp:"Verdadero (ejemplo de Aquino). Por eso algunas legislaciones acumulan los inmuebles de una misma persona: así ambos tributarían sobre $600." },
    { q:"El impuesto a los débitos y créditos se paga sólo sobre los depósitos.", v:false, exp:"Falso. Se paga sobre los créditos (depósitos) y sobre los débitos (extracciones, cheques)." },
    { q:"El impuesto a las hijuelas grava más al hermano del causante que al hijo.", v:true, exp:"Verdadero: la alícuota crece cuanto más lejano es el parentesco." },
    { q:"Si la valuación fiscal de los inmuebles no se actualiza con la inflación, el impuesto inmobiliario pierde recaudación real.", v:true, exp:"Verdadero. Es su principal debilidad." },
    { q:"La renta normal potencial se aplica generalmente a inmuebles urbanos.", v:false, exp:"Falso. Se aplica a inmuebles rurales (según suelo, clima y dimensión)." }
  ],
  fill: [
    { q:"Si un inmueble rinde 5% anual, un impuesto del 1% sobre su valor equivale a un ______ % sobre su renta.", resp:["20","20%"], sol:"20%" },
    { q:"A tiene activo 200 y pasivo 150; B tiene activo 50 sin pasivo. Con un impuesto del 2% sobre el patrimonio neto, A paga ______.", resp:["1"], sol:"1 (2% de 50)" },
    { q:"Con el mismo ejemplo y un impuesto del 2% sobre el patrimonio bruto, A paga ______.", resp:["4"], sol:"4 (2% de 200)" },
    { q:"Con ganancia mínima presunta del 1% sobre activos de $500.000, la empresa paga $ ______.", resp:["5000","5.000"], sol:"5.000" },
    { q:"Si los activos de la empresa son $150.000, el impuesto a la ganancia mínima presunta es $ ______ (mínimo exento $200.000).", resp:["0","cero"], sol:"0 (no supera el mínimo)" },
    { q:"Con alícuota del 0,6%, un cheque de $50.000 paga $ ______ de impuesto a los débitos.", resp:["300"], sol:"300" },
    { q:"Un inmueble de $10.000.000 con alícuota inmobiliaria del 1,5% paga $ ______ por año.", resp:["150000","150.000"], sol:"150.000" },
    { q:"Una herencia de $1.000.000 para un sobrino con alícuota del 10% paga $ ______.", resp:["100000","100.000"], sol:"100.000" },
    { q:"Un acervo de $3.000.000 con impuesto al acervo del 5% paga $ ______.", resp:["150000","150.000"], sol:"150.000" },
    { q:"Un campo con renta potencial de $100.000 que paga $40.000 de inmobiliario soporta una carga del ______ % (confiscatoria según la CSJN).", resp:["40","40%"], sol:"40% (supera el 33%)" }
  ],
  analisis: [
    { q:"Ejercicio. C tiene un activo de $500 y un pasivo de $400; D tiene un activo de $100 sin deudas. Calcule el impuesto con un 1% sobre el patrimonio neto y sobre el bruto, e interprete.", a:"<p>PN: C = 100; D = 100. Neto: ambos pagan 1. Bruto: C paga 5 y D paga 1. Con la misma riqueza neta, el impuesto bruto hace pagar a C cinco veces más: grava una riqueza que en realidad debe. El neto respeta la equidad horizontal.</p>" },
    { q:"Ejercicio. Con la escala general 2025 de Bienes Personales, calcule el impuesto si los bienes exceden el mínimo no imponible en $30.000.000.", a:"<p>El excedente (30.000.000) está en el primer tramo (hasta $52.664.283,73) al 0,50%: 30.000.000 × 0,5% = <b>$150.000</b>. Contribuyente cumplidor: 0% en el primer tramo = <b>$0</b>.</p>" },
    { q:"Ejercicio. Una empresa tiene activos por $800.000 (de los cuales $100.000 son inmuebles improductivos y $50.000 maquinaria comprada en el ejercicio) y pasivos por $300.000. Calcule la ganancia mínima presunta (1%) y el impuesto al capital (1%).", a:"<p><b>GMP:</b> base = 800.000 − 50.000 (maquinaria del año, no computable) = 750.000 (los improductivos sí se computan) → <b>7.500</b>. <b>Capital:</b> (800.000 − 300.000) × 1% = <b>5.000</b>. La GMP no deduce pasivos y castiga más a la empresa endeudada.</p>" },
    { q:"Ejercicio. Un inmueble alquilado vale $30.000.000 y rinde 4% anual. El impuesto inmobiliario es del 1%. ¿Qué parte de la renta absorbe? ¿Qué pasaría con un impuesto sobre la renta real del 20%?", a:"<p>Impuesto sobre el valor: 300.000; renta: 1.200.000; absorbe el <b>25%</b>. Con un impuesto del 20% sobre la renta real: 240.000. Si el inmueble estuviera desocupado, el impuesto sobre el valor seguiría siendo 300.000 y el impuesto sobre la renta real sería 0: el primero castiga la tenencia ociosa.</p>" },
    { q:"Ejercicio. Una empresa deposita $80.000 y paga a proveedores con cheques por $60.000. Calcule el impuesto a los débitos y créditos (0,6%) y el cómputo a cuenta de Ganancias (34% sobre lo pagado por créditos).", a:"<p>Créditos: 80.000 × 0,6% = 480. Débitos: 60.000 × 0,6% = 360. Total: <b>840</b>. A cuenta de Ganancias: 34% × 480 = <b>163,20</b>.</p>" },
    { q:"Ejercicio. Un causante deja $4.000.000 netos: $3.000.000 a sus dos hijos (partes iguales) y $1.000.000 a un amigo. Hijuelas: 3% para hijos y 15% para extraños. Acervo: 5%. Compare.", a:"<p><b>Hijuelas:</b> cada hijo 1.500.000 × 3% = 45.000 (90.000 entre ambos); amigo 1.000.000 × 15% = 150.000; total <b>240.000</b>. <b>Acervo:</b> 4.000.000 × 5% = <b>200.000</b>. Las hijuelas personalizan según parentesco: el extraño, que recibe menos, paga más.</p>" },
    { q:"Ejercicio. Un campo tiene una renta normal potencial de $200.000. ¿Cuál es el máximo de impuesto inmobiliario que no sería confiscatorio según la CSJN?", a:"<p>Tope del 33%: 200.000 × 33% = <b>$66.000</b>. Por encima de ese monto el contribuyente podría plantear la confiscatoriedad (arts. 14 y 17 CN), probando la renta normal de una explotación racional.</p>" },
    { q:"Explique las inequidades del impuesto inmobiliario según Aquino.", a:"<p>(1) Se aplica sólo a cierta forma de propiedad y no a todo el patrimonio; (2) es regresivo, porque recae sobre el gasto en vivienda; (3) pesa sobre personas de bajos ingresos monetarios con un inmueble; (4) la administración deficiente deja contribuyentes sin pagar. A favor: el catastro da estabilidad y equidad horizontal entre inmuebles iguales.</p>" },
    { q:"Explique los fundamentos de los impuestos a la circulación de la riqueza según Aquino.", a:"<p>(1) El beneficio de la protección jurídica que el Estado brinda a esas operaciones; (2) captar rentas que de otro modo quedarían sin gravar; (3) la conveniencia de cobrar cuando hay liquidez (<i>expediency</i>); (4) son manifestación de capacidad contributiva de los adquirentes o beneficiarios.</p>" },
    { q:"Explique por qué el impuesto al patrimonio puede favorecer el consumo y desalentar el ahorro.", a:"<p>Porque grava la renta ahorrada: lo que se consume no forma patrimonio y no paga, mientras que lo que se ahorra se acumula y tributa cada año. Reduce la rentabilidad neta del ahorro. El efecto final depende de los efectos renta y sustitución y de la tasa de interés. También puede inducir a sustituir inversiones líquidas y seguras por otras menos líquidas.</p>" }
  ]
}
];

/* =================== UNIDAD VIII =================== */
window.CURSO.simUnidadMas[8] = [
{
  intro: "Simulacro 2 de la Unidad VIII.",
  vf: [
    { q:"Los impuestos al consumo gravan una manifestación mediata de capacidad contributiva.", v:true, exp:"Verdadero: se infiere la capacidad de quien consume." },
    { q:"Los contribuyentes de derecho del IVA son, en general, los consumidores finales.", v:false, exp:"Falso. Lo ingresan los productores y comerciantes (contribuyentes de iure); lo soportan los consumidores." },
    { q:"El impuesto al gasto permite aplicar deducciones personales y progresividad.", v:true, exp:"Verdadero: es directo y personal (Kaldor)." },
    { q:"Un impuesto monofásico en el fabricante grava todo el valor agregado por mayoristas y minoristas.", v:false, exp:"Falso. Deja sin gravar el valor agregado posterior." },
    { q:"El IVA tipo renta permite computar el crédito por bienes de capital al ritmo de las amortizaciones.", v:true, exp:"Verdadero." },
    { q:"El método base contra base calcula el impuesto como (ventas − compras) × alícuota.", v:true, exp:"Verdadero; el IVA argentino usa impuesto contra impuesto." },
    { q:"Ingresos Brutos grava sobre el valor agregado de cada etapa.", v:false, exp:"Falso. Grava los ingresos brutos totales, en cascada." },
    { q:"El Convenio Multilateral tiene un régimen general y regímenes especiales.", v:true, exp:"Verdadero (construcción, transporte, profesiones, etc.)." },
    { q:"Los aranceles a la importación perjudican a los consumidores locales.", v:true, exp:"Verdadero: suben el precio interno del bien." },
    { q:"Las retenciones a la exportación aumentan el precio que recibe el productor.", v:false, exp:"Falso. Lo reducen." }
  ],
  fill: [
    { q:"El IVA, Ingresos Brutos e Internos son los impuestos que más recaudan sobre el ______.", resp:["consumo"], sol:"consumo" },
    { q:"En el IVA, la diferencia entre débito y crédito fiscal es el impuesto a ______.", resp:["ingresar","pagar"], sol:"ingresar" },
    { q:"El IVA que permite computar de inmediato el crédito por bienes de capital es el tipo ______.", resp:["consumo"], sol:"consumo" },
    { q:"Gravar en cada etapa sobre el total sin descontar lo pagado antes es la imposición ______.", resp:["acumulativa","en cascada"], sol:"acumulativa (en cascada)" },
    { q:"Ingresos Brutos es el principal impuesto ______.", resp:["provincial"], sol:"provincial" },
    { q:"Para eliminar la cascada se propuso reemplazar Ingresos Brutos por un impuesto a las ventas ______ o un IVA provincial.", resp:["finales","minoristas"], sol:"finales" },
    { q:"Los derechos de importación y exportación son facultad exclusiva de la ______.", resp:["nacion"], sol:"Nación" },
    { q:"El arancel que es una suma fija por unidad física se denomina derecho ______.", resp:["especifico"], sol:"específico" },
    { q:"Los derechos que compensan subsidios de otros países se denominan derechos ______.", resp:["compensatorios"], sol:"compensatorios" },
    { q:"Las exportaciones se gravan en el IVA a tasa ______.", resp:["cero","0"], sol:"cero" }
  ],
  analisis: [
    { q:"¿Por qué los impuestos al consumo son regresivos?", a:"<p>Porque los hogares de menores ingresos destinan al consumo una proporción mayor de su renta (los de mayores ingresos ahorran una parte, que no tributa). Además son reales: no consideran la situación personal. Se atenúa con exenciones y alícuotas reducidas para la canasta básica y con selectivos sobre el lujo.</p>" },
    { q:"Compare el impuesto al consumo con el impuesto al gasto.", a:"<p>Consumo: indirecto, real, proporcional, en cada transacción, regresivo, fácil de administrar. Gasto (Kaldor): directo, personal, progresivo, declaración anual (ingresos − ahorro neto), deducciones personales; conceptualmente atractivo pero casi inaplicable. Ambos gravan el consumo y no el ahorro.</p>" },
    { q:"Explique las ventajas del IVA.", a:"<p>Neutralidad (la carga no depende del número de etapas, no incentiva la integración vertical); autocontrol por oposición de intereses (el comprador exige factura para computar crédito); gran capacidad recaudatoria; transparencia de la carga; permite tasa cero en exportaciones (no exporta impuestos); tipo consumo, neutral frente a la inversión.</p>" },
    { q:"Explique el problema de la exención en una etapa intermedia del IVA.", a:"<p>El exento no cobra débito, pero tampoco recupera el crédito de sus compras, que queda como costo. La etapa siguiente no tiene crédito por esa compra y vuelve a gravar el valor total: se produce acumulación (efecto cascada) y la recaudación puede aumentar en vez de bajar. Por eso, para no gravar, se prefiere la tasa cero, que permite recuperar el crédito.</p>" },
    { q:"Explique las críticas a Ingresos Brutos y por qué persiste.", a:"<p>Efecto cascada (impuesto sobre impuesto), distorsión de precios relativos, castigo a las cadenas largas, integración vertical artificial, exportación de impuestos, regresividad, carga oculta, grava aunque haya pérdidas. Persiste porque es el principal recurso propio de las provincias y es fácil de recaudar.</p>" },
    { q:"Ejercicio. Tres etapas agregan $200, $100 y $100. Alícuota del 10%. Compare IVA y cascada.", a:"<p><b>IVA:</b> 20 + 10 + 10 = <b>40</b>. <b>Cascada:</b> E1: 200 × 10% = 20 (precio 220); E2: 320 × 10% = 32 (precio 352); E3: 452 × 10% = 45,2. Total <b>97,2</b>.</p>" },
    { q:"Ejercicio. Una empresa vende por $1.000 + IVA 21% y compra insumos por $600 + IVA. ¿Cuánto IVA ingresa?", a:"<p>Débito: 1.000 × 21% = 210. Crédito: 600 × 21% = 126. A ingresar: <b>84</b> = 21% del valor agregado (400).</p>" },
    { q:"Explique los efectos económicos de los aranceles a la importación.", a:"<p>Suben el precio interno del bien importado; benefician al productor local y al fisco; perjudican al consumidor; generan pérdida de eficiencia (peso muerto); la protección efectiva puede superar la nominal; riesgo de represalias y de proteger industrias ineficientes.</p>" },
    { q:"Explique los efectos de las retenciones a la exportación.", a:"<p>Bajan el precio que recibe el productor (desalientan producción e inversión a largo plazo); bajan el precio interno de los exportables (efecto antiinflacionario, redistribuye hacia el consumo interno); captan rentas extraordinarias; alta recaudación y fácil cobro; pueden ser distorsivas.</p>" },
    { q:"Explique el principio de imposición en destino.", a:"<p>El comercio internacional se grava donde se consume el bien. Por eso las exportaciones se gravan a tasa cero con devolución del IVA (no se exportan impuestos) y las importaciones pagan el IVA local, igualando la competencia con la producción nacional.</p>" }
  ]
},
{
  intro: "Simulacro 3 de la Unidad VIII: con ejercicios.",
  vf: [
    { q:"En una cadena de tres etapas, el IVA total es igual a la alícuota por el precio final de venta sin impuesto.", v:true, exp:"Verdadero: es la suma de los valores agregados." },
    { q:"En la cascada, cuantas más etapas tenga la cadena, menor es la carga total.", v:false, exp:"Falso: es mayor." },
    { q:"La integración vertical reduce la carga de un impuesto en cascada.", v:true, exp:"Verdadero: elimina etapas gravadas." },
    { q:"La protección efectiva depende también del arancel sobre los insumos.", v:true, exp:"Verdadero: si los insumos pagan más arancel, la protección efectiva cae." },
    { q:"Una retención del 30% sobre un producto que vale $100 en el exterior hace que el productor reciba $70.", v:true, exp:"Verdadero (sin considerar otros costos)." },
    { q:"Con IVA tipo producto, comprar una máquina no da crédito fiscal.", v:true, exp:"Verdadero; el impuesto queda como costo." },
    { q:"Si la demanda de cigarrillos es inelástica, un impuesto específico genera mucha carga excedente.", v:false, exp:"Falso: genera poca, y recauda mucho." },
    { q:"Un impuesto específico al combustible pierde valor real con la inflación si no se actualiza.", v:true, exp:"Verdadero: es un monto fijo por litro." },
    { q:"En el Convenio Multilateral, si una empresa tiene 70% de sus ingresos y 30% de sus gastos en Chaco, la base atribuida al Chaco es 50%.", v:true, exp:"Verdadero: (70% + 30%) / 2 = 50%." },
    { q:"El tipo de cambio diferencial puede funcionar como un impuesto implícito a la exportación.", v:true, exp:"Verdadero: el exportador vende sus divisas a un tipo menor." }
  ],
  fill: [
    { q:"IVA del 21%: vendo $500 y compré $300. IVA a ingresar: $ ______.", resp:["42"], sol:"42" },
    { q:"Cascada del 5% en dos etapas: E1 vende 100; E2 agrega 100. Impuesto total: $ ______.", resp:["15,25","15.25"], sol:"15,25 (5 + 10,25)" },
    { q:"IVA del 5% en el mismo ejemplo: $ ______.", resp:["10"], sol:"10" },
    { q:"Un producto vale 100 en el exterior; arancel del 20%; precio interno: $ ______.", resp:["120"], sol:"120" },
    { q:"Retención del 25% sobre $400 exportados: el productor recibe $ ______.", resp:["300"], sol:"300" },
    { q:"Convenio Multilateral: 40% de ingresos y 60% de gastos en Corrientes. Coeficiente de Corrientes: ______ %.", resp:["50","50%"], sol:"50%" },
    { q:"Convenio: 80% de ingresos y 40% de gastos en Chaco. Coeficiente: ______ %.", resp:["60","60%"], sol:"60%" },
    { q:"Impuesto específico de $10 por litro sobre 1.000 litros: $ ______.", resp:["10000","10.000"], sol:"10.000" },
    { q:"IVA tipo renta: máquina con IVA de $100 amortizable en 4 años. Crédito por año: $ ______.", resp:["25"], sol:"25" },
    { q:"Protección efectiva: VA libre 40; VA protegido 50. Protección efectiva: ______ %.", resp:["25","25%"], sol:"25%" }
  ],
  analisis: [
    { q:"Ejercicio. Cuatro etapas agregan $100 cada una con alícuota del 10%. Compare IVA y cascada.", a:"<p><b>IVA:</b> 40. <b>Cascada:</b> E1 10 (110); E2 21 (231); E3 33,1 (364,1); E4 46,41. Total <b>110,51</b>, casi tres veces el IVA.</p>" },
    { q:"Ejercicio. Una cadena: el productor vende a $200, el mayorista a $300 y el minorista a $450 (sin impuesto). IVA 21%. Calcule el IVA de cada etapa y el total.", a:"<p>Productor 42; mayorista 63 − 42 = 21; minorista 94,5 − 63 = 31,5. Total <b>94,5</b> = 21% de 450 (precio final).</p>" },
    { q:"Ejercicio. Un auto vale $100 en el exterior y usa insumos por $60. Arancel 25% al auto y 10% a los insumos. Calcule la protección efectiva.", a:"<p>VA libre: 40. Con aranceles: 125 − 66 = 59. Protección efectiva: (59 − 40)/40 = <b>47,5%</b>, frente a una nominal del 25%.</p>" },
    { q:"Ejercicio. El precio internacional de la soja es $400 por tonelada y la retención es del 33%. ¿Cuánto recibe el productor? ¿Y el fisco por 1.000 toneladas?", a:"<p>Productor: 400 × 67% = <b>268</b> por tonelada. Fisco: 132 × 1.000 = <b>132.000</b>. El precio interno tiende a 268 (desacople), lo que abarata el consumo interno pero desalienta la producción.</p>" },
    { q:"Ejercicio. Una empresa opera en Chaco y Corrientes. Ingresos: Chaco 600, Corrientes 400. Gastos: Chaco 300, Corrientes 700. Base imponible total: 1.000. Distribúyala según el régimen general del Convenio Multilateral.", a:"<p>Chaco: (60% + 30%)/2 = 45% → <b>450</b>. Corrientes: (40% + 70%)/2 = 55% → <b>550</b>.</p>" },
    { q:"Ejercicio. Una empresa compra una máquina por $10.000 + IVA 21% (vida útil 5 años). ¿Cuánto crédito computa según cada tipo de IVA?", a:"<p>Consumo: 2.100 en el mes de compra. Renta: 420 por año durante 5 años. Producto: 0 (queda como costo). El tipo consumo es el más neutral frente a la inversión.</p>" },
    { q:"Ejercicio. Un impuesto de $10 por paquete de cigarrillos con demanda muy inelástica: el precio sube de $100 a $109. ¿Quién soporta la carga?", a:"<p>Consumidor: 9 (90%); productor: 1 (10%). Con demanda inelástica la carga recae casi toda sobre el consumidor y la carga excedente es baja; el impuesto cumple un fin extrafiscal (desalentar el consumo) con alta recaudación.</p>" },
    { q:"Explique los métodos de determinación de la base del IVA.", a:"<p>Adición (sumar salarios, rentas, intereses y beneficios); sustracción base contra base ((ventas − compras) × alícuota); sustracción impuesto contra impuesto (débito − crédito; Argentina).</p>" },
    { q:"Explique la justificación de los impuestos selectivos.", a:"<p>Fines extrafiscales (corregir externalidades: combustibles por tránsito y contaminación, tabaco y alcohol por salud); beneficio; poca carga excedente sobre bienes inelásticos; algo de progresividad al gravar el lujo; no gravar bienes de primera necesidad. Suelen ser monofásicos, en la primera etapa.</p>" },
    { q:"Explique por qué el tipo de cambio puede ser un gravamen implícito.", a:"<p>Bajo control de cambios, el Banco Central monopoliza las divisas; si compra a un tipo menor del que vende, la brecha grava a los exportadores (y a quienes compran divisas) y subsidia a quienes las reciben baratas. Con las retenciones, reduce el precio que reciben los exportadores y contiene los precios internos.</p>" }
  ]
}
];

/* =================== UNIDAD IX =================== */
window.CURSO.simUnidadMas[9] = [
{
  intro: "Simulacro 2 de la Unidad IX.",
  vf: [
    { q:"La deuda pública es la obligación que resulta del uso del crédito público.", v:true, exp:"Verdadero: crédito → empréstito → deuda." },
    { q:"El crédito público es un recurso coactivo, igual que el tributo.", v:false, exp:"Falso. En principio es voluntario y contractual (salvo el empréstito forzoso)." },
    { q:"Según el art. 56 de la Ley 24.156, el crédito puede usarse para refinanciar pasivos.", v:true, exp:"Verdadero; también para inversiones reproductivas, necesidad nacional y reorganización." },
    { q:"La deuda externa según el criterio jurídico se rige por ley y jurisdicción extranjeras.", v:true, exp:"Verdadero; el criterio económico atiende a la residencia del acreedor." },
    { q:"La amortización indirecta de la deuda se produce por emisión monetaria.", v:true, exp:"Verdadero (licuación por inflación)." },
    { q:"La tesis keynesiana sostiene que la deuda interna traslada toda la carga a las generaciones futuras.", v:false, exp:"Falso. Sostiene que la carga real es presente; el pago es una transferencia interna." },
    { q:"La equivalencia ricardiana sostiene que los agentes anticipan los impuestos futuros necesarios para pagar la deuda.", v:true, exp:"Verdadero (Buchanan, Barro)." },
    { q:"El riesgo país refleja la percepción de probabilidad de default.", v:true, exp:"Verdadero." },
    { q:"El empréstito patriótico es coactivo.", v:false, exp:"Falso. Es voluntario con presión moral; el coactivo es el forzoso." },
    { q:"El Plan Brady fue una reestructuración de deuda en bonos de 1992.", v:true, exp:"Verdadero." }
  ],
  fill: [
    { q:"La capacidad de endeudarse se basa en la ______ que inspira el Estado.", resp:["confianza"], sol:"confianza" },
    { q:"El art. ______ de la Ley 24.156 exige que la ley de presupuesto fije tipo, monto máximo, plazo mínimo y destino de la deuda.", resp:["60"], sol:"60" },
    { q:"La deuda asumida por el propio Estado central se denomina deuda ______.", resp:["directa"], sol:"directa" },
    { q:"La transformación de deuda de corto en largo plazo se denomina ______.", resp:["consolidacion"], sol:"consolidación" },
    { q:"La cesación de pagos se conoce también como ______.", resp:["default","moratoria"], sol:"default (moratoria)" },
    { q:"Los fondos que litigaron contra Argentina tras los canjes se conocen como ______.", resp:["holdouts","fondos buitre"], sol:"holdouts" },
    { q:"En 2018 Argentina firmó un acuerdo stand-by con el ______.", resp:["fmi","fondo monetario internacional"], sol:"FMI" },
    { q:"El empréstito emitido por más de su valor nominal se coloca sobre la ______.", resp:["par"], sol:"par" },
    { q:"El sistema de amortización con cuota constante es el sistema ______.", resp:["frances"], sol:"francés" },
    { q:"El sistema en que todo el capital se paga al vencimiento se denomina ______.", resp:["bullet","americano"], sol:"bullet (o americano)" }
  ],
  analisis: [
    { q:"Explique la distinción entre crédito, empréstito y deuda pública.", a:"<p><b>Crédito:</b> la capacidad o confianza para obtener préstamos. <b>Empréstito:</b> la operación concreta de obtener fondos. <b>Deuda:</b> la obligación resultante de devolver el capital con intereses.</p>" },
    { q:"Explique las formas de extinción de la deuda.", a:"<p>Amortización (obligatoria, facultativa, indirecta por emisión); conversión (cambio de condiciones; forzosa, facultativa u optativa); consolidación (de corto a largo plazo); renegociación o reestructuración (quita, espera, canje); repudio; default.</p>" },
    { q:"Compare los efectos de la deuda interna y la externa.", a:"<p><b>Interna:</b> redistribución entre contribuyentes y tenedores de bonos (a veces regresiva); crowding out; en recesión, expansiva. <b>Externa:</b> entrada de divisas al contraerla y salida al pagarla; transferencia de riqueza al exterior; vulnerabilidad cambiaria; justificable si financia inversión reproductiva.</p>" },
    { q:"Explique los indicadores de la deuda.", a:"<p>Stock-stock (per cápita, deuda/patrimonio, deuda/inversión pública); stock-flujo (deuda/PBI, deuda/presupuesto, deuda externa/exportaciones); flujo-flujo (presión crediticia, servicios/PBI, servicios/exportaciones); riesgo país.</p>" },
    { q:"Explique la sostenibilidad de la deuda.", a:"<p>La deuda es sostenible si deuda/PBI no crece indefinidamente. Depende de r (tasa de interés), g (crecimiento) y el resultado primario. Si r &gt; g, hace falta superávit primario ≈ (r − g) × deuda/PBI; si g &gt; r, puede estabilizarse con déficit moderado. También importan el perfil de vencimientos, la moneda y la confianza.</p>" },
    { q:"Explique las posturas sobre la naturaleza jurídica del empréstito.", a:"<p>Contractualista (dominante): contrato de préstamo. Acto de soberanía (Drago, Ingrosso, Sayagués Laso, Giuliani Fonrouge, Jarach): se emite por poder soberano y autorización legal, sin persona determinada, sin acción judicial por incumplimiento, con valor prefijado. Mixta: contractual con prerrogativas públicas.</p>" },
    { q:"Explique las garantías del empréstito.", a:"<p>Reales (bienes o rentas afectados); personales (un tercero); especiales (ingresos específicos, como una aduana); contra fluctuaciones monetarias (cláusulas de ajuste por índices, oro o moneda extranjera).</p>" },
    { q:"Ejercicio. Deuda $800; PBI $2.000; intereses $60; amortizaciones $40; exportaciones $200; deuda externa $500. Calcule los indicadores.", a:"<p>Deuda/PBI 40%; servicios/PBI 5%; deuda externa/exportaciones 250%; servicios/exportaciones 50%. Riesgo de liquidez externa elevado.</p>" },
    { q:"Ejercicio. Deuda/PBI 80%, r = 7%, g = 3%. ¿Qué superávit primario estabiliza la deuda?", a:"<p>(7% − 3%) × 80% = <b>3,2% del PBI</b>. Sin ese superávit la deuda/PBI crecería.</p>" },
    { q:"Explique las lecciones de la historia de la deuda argentina.", a:"<p>Ciclos de endeudamiento, crisis, default y reestructuración (Baring 1824, crisis de 1982, Brady 1992, default 2001, canjes 2005 y 2010, holdouts, FMI 2018, reestructuración 2020). La deuda en moneda extranjera es la más riesgosa; endeudarse para gasto corriente compromete la sostenibilidad; la confianza es clave.</p>" }
  ]
},
{
  intro: "Simulacro 3 de la Unidad IX: con ejercicios.",
  vf: [
    { q:"Si un título de valor nominal $100 se emite a $90, se emite bajo la par.", v:true, exp:"Verdadero; aumenta el rendimiento real del inversor." },
    { q:"En el sistema alemán la amortización de capital es constante.", v:true, exp:"Verdadero; la cuota total decrece." },
    { q:"En el sistema francés la cuota total es decreciente.", v:false, exp:"Falso: es constante." },
    { q:"Si r < g, la deuda/PBI puede bajar aun con un pequeño déficit primario.", v:true, exp:"Verdadero." },
    { q:"Un aumento del riesgo país abarata el financiamiento del Estado.", v:false, exp:"Falso: lo encarece." },
    { q:"La deuda per cápita es un indicador flujo-flujo.", v:false, exp:"Falso: es stock-stock." },
    { q:"Los servicios de la deuda incluyen intereses y amortizaciones.", v:true, exp:"Verdadero." },
    { q:"Una conversión que baja la tasa de interés reduce los servicios futuros de la deuda.", v:true, exp:"Verdadero." },
    { q:"La consolidación de la deuda aumenta los vencimientos de corto plazo.", v:false, exp:"Falso: los traslada al largo plazo." },
    { q:"La deuda con el BCRA y la ANSES es deuda intra-sector público.", v:true, exp:"Verdadero; para algunos es deuda «que nos debemos a nosotros mismos»." }
  ],
  fill: [
    { q:"Título VN $1.000 emitido a $950: descuento de emisión de $ ______.", resp:["50"], sol:"50" },
    { q:"Deuda $300; población 100: deuda per cápita $ ______.", resp:["3"], sol:"3" },
    { q:"Servicios $50; recursos $250: servicios/recursos ______ %.", resp:["20","20%"], sol:"20%" },
    { q:"Deuda/PBI 60%; r = 5%; g = 5%: superávit primario necesario ______ % del PBI.", resp:["0","0%"], sol:"0% (r = g)" },
    { q:"Préstamo $1.000 al 10% anual, sistema americano a 3 años: interés anual $ ______.", resp:["100"], sol:"100" },
    { q:"Sistema alemán: préstamo $1.000 a 4 años, amortización anual $ ______.", resp:["250"], sol:"250" },
    { q:"Sistema alemán, mismo préstamo al 10%: cuota del primer año $ ______.", resp:["350"], sol:"350 (250 + 100)" },
    { q:"Deuda externa $600; exportaciones $300: deuda externa/exportaciones ______ %.", resp:["200","200%"], sol:"200%" },
    { q:"Si un bono rinde 9% y el bono del Tesoro de EE.UU. 4%, el riesgo país es de ______ puntos básicos.", resp:["500"], sol:"500" },
    { q:"Recursos crediticios $100; PBI $2.000: presión crediticia ______ %.", resp:["5","5%"], sol:"5%" }
  ],
  analisis: [
    { q:"Ejercicio. Préstamo de $1.000 al 10% anual a 4 años, sistema alemán. Arme el cuadro de pagos.", a:"<p>Amortización constante 250. Año 1: interés 100, cuota 350, saldo 750. Año 2: interés 75, cuota 325, saldo 500. Año 3: 50, cuota 300, saldo 250. Año 4: 25, cuota 275, saldo 0. Total de intereses: 250.</p>" },
    { q:"Ejercicio. El mismo préstamo con sistema americano (intereses anuales, capital al final).", a:"<p>Años 1 a 3: cuota 100 (sólo intereses). Año 4: 100 + 1.000 = 1.100. Total de intereses: 400. Concentra el riesgo de refinanciación al vencimiento.</p>" },
    { q:"Ejercicio. Deuda/PBI 50%, r = 6%, g = 2%, resultado primario 0. ¿Qué pasa con la deuda/PBI en un año?", a:"<p>Aproximadamente sube (r − g) × d = 4% × 50% = 2 puntos: pasa a ~52%. Para estabilizarla hace falta un superávit primario de 2% del PBI.</p>" },
    { q:"Ejercicio. Un país tiene deuda externa de US$300 y exportaciones de US$100. Paga intereses del 5% y amortiza US$20 por año. Calcule servicios/exportaciones.", a:"<p>Intereses 15 + amortización 20 = 35. Servicios/exportaciones = <b>35%</b>. Un tercio de las divisas que genera se destina a la deuda: alta vulnerabilidad externa.</p>" },
    { q:"Ejercicio. Un bono VN $100 paga 8% anual y se compra a $80. ¿Cuál es el rendimiento corriente?", a:"<p>Cupón 8 / precio 80 = <b>10%</b> (más la ganancia de 20 al rescate). Comprar bajo la par aumenta el rendimiento: refleja mayor riesgo percibido.</p>" },
    { q:"Ejercicio. Una conversión cambia deuda de $1.000 al 12% por deuda al 8%. ¿Cuánto ahorra el Estado por año?", a:"<p>Intereses antes: 120; después: 80; ahorro anual <b>40</b>.</p>" },
    { q:"Explique la regla de oro y aplíquela a un caso.", a:"<p>Endeudarse para inversión reproductiva, no para gasto corriente. Ejemplo: financiar con deuda una represa que genera energía y exportaciones (repago y beneficio futuro) es justificable; financiar sueldos corrientes con deuda traslada la carga a quienes no reciben el beneficio y compromete la sostenibilidad.</p>" },
    { q:"Explique el crowding out.", a:"<p>Cuando el Estado se endeuda en el mercado interno compite con los privados por el ahorro: sube la tasa de interés y se desplaza la inversión privada. Es más fuerte en pleno empleo e iliquidez; en recesión con ahorro ocioso es débil.</p>" },
    { q:"Explique la evolución del concepto de crédito público.", a:"<p>Clásicos: recurso extraordinario (guerras, catástrofes, inversión reproductiva); presupuesto equilibrado. Modernos (keynesianos): recurso ordinario e instrumento de política económica (desarrollo, liquidez, política anticíclica).</p>" },
    { q:"Explique los órganos de control del crédito público.", a:"<p>Oficina Nacional de Crédito Público (órgano rector; fiscaliza la aplicación de los fondos, arts. 68-69), SIGEN (control interno) y AGN (control externo, depende del Congreso). Principio de legalidad: no hay endeudamiento sin ley (arts. 56-60, Ley 24.156).</p>" }
  ]
}
];
