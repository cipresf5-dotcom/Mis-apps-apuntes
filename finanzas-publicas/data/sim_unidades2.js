/* Simulacros por unidad — parte 2: Unidades VII a XI. */
window.CURSO = window.CURSO || { unidades: [] };
window.CURSO.simUnidad = window.CURSO.simUnidad || {};

/* ---------------- UNIDAD VII ---------------- */
window.CURSO.simUnidad[7] = {
  intro: "Simulacro de la Unidad VII (imposición sobre el patrimonio).",
  vf: [
    { q:"La imposición patrimonial grava un stock de riqueza, mientras que el impuesto a la renta grava un flujo.", v:true, exp:"Verdadero. El patrimonio es la riqueza acumulada a una fecha." },
    { q:"Según la cátedra, la imposición patrimonial se justifica sólo por la capacidad contributiva y nunca por el principio del beneficio.", v:false, exp:"Falso. Se justifica por ambos: la propiedad existe gracias a las leyes que la protegen (beneficio) y la riqueza poseída revela potencia económica (Moschetti)." },
    { q:"Pocos países gravan el patrimonio neto individual, y menos aún el capital de las empresas.", v:true, exp:"Verdadero. En cambio, los impuestos a manifestaciones parciales (inmobiliario, automotor) son muy comunes." },
    { q:"El impuesto al patrimonio neto refleja mejor la capacidad contributiva que el impuesto al patrimonio bruto.", v:true, exp:"Verdadero: descuenta las deudas. El bruto puede gravar una riqueza inexistente." },
    { q:"Bienes Personales permite deducir, en general, todos los pasivos del contribuyente.", v:false, exp:"Falso. En general no deduce pasivos (salvo deudas por la casa-habitación): se acerca a un impuesto sobre el patrimonio bruto." },
    { q:"El impuesto sobre el capital de las empresas castiga a las empresas intensivas en capital y a las que se inician.", v:true, exp:"Verdadero. Es uno de los argumentos en su contra." },
    { q:"Las alícuotas progresivas en el impuesto inmobiliario favorecen la equidad horizontal.", v:false, exp:"Falso. La violan, porque incentivan subdividir los inmuebles para pagar menos." },
    { q:"El impuesto de sellos grava la instrumentación de actos onerosos realizados en la provincia o con efectos en ella.", v:true, exp:"Verdadero. Principios de instrumentación y territorialidad." },
    { q:"El impuesto al acervo sucesorio es personal y progresivo según el parentesco.", v:false, exp:"Falso. Es indirecto, real y proporcional. Personal y progresivo es el impuesto a las hijuelas." },
    { q:"El impuesto a la transmisión gratuita de bienes rige hoy en todas las provincias argentinas.", v:false, exp:"Falso. Según el material de cátedra, sólo en la Provincia de Buenos Aires (Ley 14.044). A nivel nacional se derogó en 1976." }
  ],
  fill: [
    { q:"Para ______, la capacidad contributiva remite a la «potencia económica global» del sujeto.", resp:["moschetti"], sol:"Moschetti" },
    { q:"Los mayores costos de cumplimiento y administración que generan los impuestos sofisticados constituyen la presión tributaria ______.", resp:["indirecta"], sol:"indirecta" },
    { q:"Bienes Personales está regulado en la Ley N° ______.", resp:["23966","23.966"], sol:"23.966" },
    { q:"Para los no residentes, Bienes Personales se ingresa a través de un responsable ______.", resp:["sustituto"], sol:"sustituto" },
    { q:"El impuesto inmobiliario toma como base la valuación ______ del inmueble.", resp:["fiscal"], sol:"fiscal" },
    { q:"El hecho imponible del impuesto automotor es la ______ del vehículo en la jurisdicción.", resp:["radicacion"], sol:"radicación" },
    { q:"El principio fundamental del impuesto de sellos es el de la ______.", resp:["instrumentacion"], sol:"instrumentación" },
    { q:"El impuesto que grava la porción que recibe cada heredero es el impuesto a las ______.", resp:["hijuelas"], sol:"hijuelas" },
    { q:"El impuesto a la transmisión gratuita de bienes de Buenos Aires se rige por la Ley N° ______.", resp:["14044","14.044"], sol:"14.044" },
    { q:"Según Jarach, el impuesto al capital de las empresas puede ser sustituto del impuesto sucesorio porque las empresas no ______.", resp:["mueren"], sol:"mueren" }
  ],
  analisis: [
    { q:"Concepto, naturaleza y clasificación de los impuestos patrimoniales.", a:"<p>Gravan la riqueza acumulada, por su tenencia o por su transferencia; son directos y pueden ser personales o reales. <b>Sobre la tenencia:</b> patrimonio neto (personas o capital de empresas), globales sobre la tenencia de bienes (Bienes Personales, activos), parciales (inmobiliario, automotor). <b>Sobre la transferencia:</b> onerosa (sellos) y gratuita (acervo, hijuelas, donaciones).</p>" },
    { q:"Fundamentos de equidad, eficiencia y administración de la imposición patrimonial.", a:"<p><b>Equidad:</b> el patrimonio da utilidad aunque no rinda renta; complementa la renta; reduce la concentración; grava más las rentas no ganadas. <b>Eficiencia:</b> castiga la tenencia ociosa y la especulación; neutral frente al riesgo. <b>Administración:</b> control cruzado del impuesto a la renta; funciona mejor en el nivel nacional y exige coordinación.</p>" },
    { q:"Diferencias entre patrimonio neto y bruto, sistemas de valuación y momentos de vinculación.", a:"<p><b>Neto</b> (activo − pasivo) frente a <b>bruto</b> (activo). <b>Valuación:</b> costo, mercado, valuación fiscal, cotización; por bien (inmuebles, rodados por tablas, créditos, acciones, bienes del hogar, bienes del exterior); problemas con la inflación. <b>Vinculación:</b> criterios personales (residencia, domicilio, nacionalidad) y económicos (situación del bien); doble imposición internacional; responsable sustituto.</p>" },
    { q:"Estructura del impuesto al patrimonio neto personal y su integración con las empresas.", a:"<p>Directo, personal, periódico e integral; unidad contribuyente (cónyuges, menores); mínimo no imponible; alícuotas de 0,5% a 2%. <b>Integración total</b> (el socio incluye todas sus participaciones; impuesto en la empresa como pago a cuenta), <b>parcial</b> (incluye sociedades de personas; las de capital tributan aparte) y <b>separación</b> (sin integración).</p>" },
    { q:"Limitaciones y efectos económicos de la imposición patrimonial.", a:"<p><b>Limitaciones:</b> ocultación y detección de bienes, valuación e inflación, liquidez, imposibilidad de uso anticíclico. <b>Efectos:</b> negativo sobre el ahorro; positivo sobre la inversión productiva; consumo según la tasa de interés; efectos renta y sustitución en la oferta de factores; reduce la concentración; deslocalización de capitales.</p>" },
    { q:"Impuesto sobre el capital de las empresas: justificación y críticas.", a:"<p><b>Jarach:</b> sustituto del sucesorio, del impuesto a transferencias onerosas, adelanto o sustituto del impuesto personal. <b>Eiroa Vilarnovo:</b> recaudación, simplicidad, gravamen mínimo de renta presunta. <b>Críticas:</b> traslación, no distingue rentas ganadas y no ganadas, pesa sobre las marginales y nacientes, desalienta la inversión, doble imposición, discrimina a las intensivas en capital, el bruto aumenta la inequidad.</p>" },
    { q:"Analice el impuesto inmobiliario desde la eficiencia, la equidad y la administración, y sus sistemas.", a:"<p>Eficiente (factor inmóvil); equitativo por capacidad y beneficio (aunque ignora los pasivos y la progresividad incentiva la subdivisión); fácil de administrar; alto potencial local; débil por la desactualización de valuaciones. <b>Sistemas (Núñez Miñana):</b> sobre el valor del capital, sobre la renta real o potencial, sobre la tierra libre de mejoras.</p>" },
    { q:"Explique el impuesto al parque automotor.", a:"<p>Directo, real y periódico; hecho imponible: radicación; sujeto: el titular registral; base: valuación por tablas (o peso y cilindrada); alícuota proporcional o por categorías, decreciente con la antigüedad; provincial, transferido a los municipios en Chaco y Corrientes; fundamento en la capacidad contributiva y el beneficio; posibles fines extrafiscales.</p>" },
    { q:"Fundamento y efectos de los impuestos a la circulación de la riqueza.", a:"<p><b>Fundamento:</b> beneficio (protección jurídica de los actos) y capacidad económica (captar operaciones que quedarían sin gravar). <b>Efectos:</b> inciden más sobre los vendedores y se trasladan en operaciones habituales; absorben ahorro formado; pueden impedir que la tierra pase a manos productivas o frenar la especulación; encarecen el crédito; no son redistributivos; doble imposición.</p>" },
    { q:"Impuesto a la herencia: tipos, justificación y efecto sobre el ahorro.", a:"<p><b>Acervo:</b> real, proporcional; beneficio o capacidad póstuma del causante. <b>Hijuelas:</b> personal, progresivo según monto y parentesco; grava el incremento del beneficiario. <b>Justificación:</b> recibe algo sin hacer nada, protección estatal, perpetuación de desigualdades, renta irregular; deben gravarse también las donaciones. <b>Ahorro:</b> depende del motivo; si se ahorra para dejar herencia, puede desalentarlo.</p>" }
  ]
};

/* ---------------- UNIDAD VIII ---------------- */
window.CURSO.simUnidad[8] = {
  intro: "Simulacro de la Unidad VIII (imposición sobre el consumo).",
  vf: [
    { q:"La imposición al consumo grava la utilización de la renta.", v:true, exp:"Verdadero: grava el gasto en bienes y servicios, una manifestación mediata de capacidad contributiva." },
    { q:"La principal crítica a los impuestos al consumo es su regresividad.", v:true, exp:"Verdadero: los sectores de menores ingresos consumen una proporción mayor de su renta." },
    { q:"El impuesto al gasto de Kaldor es fácil de administrar y muy utilizado.", v:false, exp:"Falso. Es conceptualmente atractivo, pero de muy difícil aplicación; casi no se usa." },
    { q:"Los impuestos monofásicos gravan una sola etapa del proceso de producción y distribución.", v:true, exp:"Verdadero: fabricante, mayorista o minorista." },
    { q:"El IVA incentiva la integración vertical de las empresas.", v:false, exp:"Falso. Es neutral: la carga no depende del número de etapas. La cascada (Ingresos Brutos) sí incentiva la integración." },
    { q:"El IVA argentino es de tipo consumo y se liquida por el método de impuesto contra impuesto.", v:true, exp:"Verdadero: débito − crédito, con cómputo inmediato del crédito por bienes de capital." },
    { q:"La exención en una etapa intermedia del IVA puede generar acumulación.", v:true, exp:"Verdadero: rompe la cadena de créditos. Por eso para las exportaciones se prefiere la tasa cero." },
    { q:"Ingresos Brutos grava la ganancia de las empresas.", v:false, exp:"Falso. Grava los ingresos brutos (facturación), aunque haya pérdidas." },
    { q:"Los derechos de exportación son de competencia concurrente entre Nación y provincias.", v:false, exp:"Falso. Son exclusivos de la Nación (arts. 4, 9 y 75 inc. 1)." },
    { q:"Por el principio de imposición en destino, las exportaciones se gravan a tasa cero en el IVA.", v:true, exp:"Verdadero: el comercio internacional se grava donde se consume; así no se «exportan impuestos»." }
  ],
  fill: [
    { q:"Que el contribuyente pague el impuesto al consumo de a poco, incorporado al precio y con poca resistencia, se denomina «______ fiscal».", resp:["anestesia"], sol:"anestesia" },
    { q:"El impuesto al gasto se calcula como ingresos menos ______ neto.", resp:["ahorro"], sol:"ahorro" },
    { q:"Los impuestos al consumo que gravan sólo ciertos bienes (tabaco, alcohol, combustibles) se denominan ______.", resp:["selectivos","especificos"], sol:"selectivos o específicos" },
    { q:"El impuesto sobre impuesto que genera la imposición en cascada se denomina ______.", resp:["piramidacion"], sol:"piramidación" },
    { q:"El IVA que no permite computar el crédito por bienes de capital es el tipo ______.", resp:["producto"], sol:"producto" },
    { q:"El IVA que computa el crédito por bienes de capital al ritmo de las amortizaciones es el tipo ______.", resp:["renta"], sol:"renta" },
    { q:"La base de Ingresos Brutos de quien opera en varias provincias se distribuye mediante el ______.", resp:["convenio multilateral"], sol:"Convenio Multilateral" },
    { q:"El año de sanción del Convenio Multilateral es ______.", resp:["1977"], sol:"1977" },
    { q:"Los derechos de importación también se conocen como ______.", resp:["aranceles"], sol:"aranceles" },
    { q:"Bajo control de cambios, la ______ entre el tipo de cambio comprador y vendedor opera como un gravamen implícito.", resp:["brecha"], sol:"brecha" }
  ],
  analisis: [
    { q:"Concepto, ventajas y desventajas de la imposición al consumo.", a:"<p>Grava el gasto, una manifestación mediata de capacidad; lo pagan los consumidores vía precio. <b>Ventajas:</b> gran recaudación y bajo costo, oposición de intereses (IVA), no castiga el ahorro, anestesia fiscal. <b>Desventajas:</b> regresividad, no considera la situación personal, puede ser inflacionario.</p>" },
    { q:"Compare la imposición al consumo con el impuesto al gasto de Kaldor.", a:"<p>Consumo: indirecto, real, proporcional, por transacción, regresivo, fácil de administrar. Kaldor: directo, personal, progresivo, se declara una vez al año (gasto = ingresos − ahorro neto), admite deducciones; atractivo pero casi inaplicable. Ambos gravan el consumo y no el ahorro.</p>" },
    { q:"Clasifique los impuestos al consumo.", a:"<p>Generales y selectivos; monofásicos y plurifásicos (acumulativos o no acumulativos); ad valorem y específicos; internos y al comercio exterior. Características: indirectos, reales, trasladables, productivos, regresivos; se atenúan con exenciones o alícuotas reducidas para la canasta básica.</p>" },
    { q:"Justificación de los impuestos selectivos.", a:"<p>Fin extrafiscal (corregir externalidades: combustibles, tabaco, alcohol); beneficio; poca carga excedente sobre bienes inelásticos; algo de progresividad al gravar el lujo; no gravar bienes de primera necesidad. Suelen aplicarse en la primera etapa.</p>" },
    { q:"Compare la imposición monofásica con la plurifásica.", a:"<p><b>Monofásica:</b> una etapa; sin cascada; concentra el riesgo de evasión; en el fabricante deja sin gravar el valor agregado posterior. <b>Plurifásica acumulativa:</b> piramidación, distorsión de precios, integración vertical, carga oculta. <b>Plurifásica no acumulativa (IVA):</b> grava el valor agregado; neutral; autocontrol; recae en el consumidor final.</p>" },
    { q:"Métodos de determinación de la base del IVA y tratamiento de los bienes de inversión.", a:"<p>Adición; sustracción base contra base; sustracción impuesto contra impuesto (Argentina). <b>Bienes de capital:</b> tipo producto (no computa; grava doblemente la inversión), tipo renta (computa con las amortizaciones), tipo consumo (computa todo de inmediato; el más neutral; Argentina). Exención frente a tasa cero.</p>" },
    { q:"Características y críticas de Ingresos Brutos.", a:"<p>Grava el ejercicio habitual de actividades onerosas sobre los ingresos brutos; principal impuesto provincial; indirecto, real, proporcional, plurifásico acumulativo; se paga aunque haya pérdidas. <b>Críticas:</b> cascada, distorsión, integración vertical, exportación de impuestos, regresivo y oculto. <b>Convenio Multilateral</b> (1977): 50% ingresos y 50% gastos.</p>" },
    { q:"Ejercicio. Tres etapas agregan $100 cada una; alícuota del 10%. Compare IVA y cascada.", a:"<p><b>IVA:</b> 10 + 10 + 10 = <b>30</b>. <b>Cascada:</b> 100 × 10% = 10 (precio 110); 210 × 10% = 21 (precio 231); 331 × 10% = 33,1. Total <b>64,1</b>. La cascada más que duplica la carga y crece con cada etapa; el IVA es neutral.</p>" },
    { q:"Efectos económicos de aranceles a la importación y retenciones a la exportación.", a:"<p><b>Aranceles:</b> suben el precio interno; protegen al productor y recaudan; perjudican al consumidor; pérdida de eficiencia; protección efectiva mayor que la nominal; represalias. <b>Retenciones:</b> bajan el precio al productor y el precio interno; antiinflacionarias y redistributivas; captan rentas extraordinarias; desalientan la producción a largo plazo.</p>" },
    { q:"El tipo de cambio como gravamen implícito y el principio de destino.", a:"<p>Bajo control de cambios, la brecha cambiaria grava a quien compra divisas y subsidia a quien las vende; con las retenciones, baja el precio que reciben los exportadores. <b>Destino:</b> el comercio se grava donde se consume: exportaciones a tasa cero con devolución del IVA; importaciones pagan IVA local, igualando la competencia.</p>" }
  ]
};

/* ---------------- UNIDAD IX ---------------- */
window.CURSO.simUnidad[9] = {
  intro: "Simulacro de la Unidad IX (crédito y deuda pública).",
  vf: [
    { q:"El crédito público es la capacidad del Estado para obtener préstamos basada en la confianza que inspira.", v:true, exp:"Verdadero. Crédito (capacidad) → empréstito (operación) → deuda (obligación)." },
    { q:"Para las finanzas modernas, el crédito público es un recurso ordinario e instrumento de política económica.", v:true, exp:"Verdadero. Para los clásicos era extraordinario." },
    { q:"El empréstito forzoso se asemeja a un tributo y requiere ley.", v:true, exp:"Verdadero: es coactivo." },
    { q:"La deuda flotante es la de largo plazo incorporada en forma permanente.", v:false, exp:"Falso. La flotante es de corto plazo o tesorería; la de largo plazo es la consolidada." },
    { q:"La deuda directa es la que asume un ente y el Estado garantiza.", v:false, exp:"Falso. Esa es la indirecta. La directa la asume el propio Estado central." },
    { q:"Según la tesis keynesiana, la deuda interna no implica transferencia de riqueza al exterior.", v:true, exp:"Verdadero: «nos debemos a nosotros mismos»." },
    { q:"La deuda externa es más justificable si financia gasto corriente.", v:false, exp:"Falso. Regla de oro: es justificable si financia inversiones reproductivas que generen la capacidad de repago." },
    { q:"El indicador deuda/PBI es el más usado para medir la solvencia.", v:true, exp:"Verdadero (indicador stock-flujo)." },
    { q:"Emitir un título bajo la par aumenta el rendimiento real para el inversor.", v:true, exp:"Verdadero: paga menos que el valor nominal que luego recibe." },
    { q:"El default argentino de 2001 se resolvió definitivamente con el canje de 2005, sin litigios posteriores.", v:false, exp:"Falso. Hubo canjes en 2005 y 2010 y un litigio con los holdouts en Nueva York, resuelto en 2016." }
  ],
  fill: [
    { q:"La operación concreta de obtener fondos en el mercado de capitales se denomina ______.", resp:["emprestito"], sol:"empréstito" },
    { q:"El órgano rector del sistema de crédito público nacional es la Oficina Nacional de ______ Público.", resp:["credito"], sol:"Crédito" },
    { q:"El control externo del endeudamiento está a cargo de la ______.", resp:["agn","auditoria general de la nacion"], sol:"AGN" },
    { q:"La deuda que sólo paga renta, sin obligación de devolver el capital en fecha cierta, se denomina ______.", resp:["perpetua"], sol:"perpetua" },
    { q:"Cambiar la deuda existente por otra de condiciones distintas se denomina ______.", resp:["conversion"], sol:"conversión" },
    { q:"El desplazamiento de la inversión privada por la deuda interna se llama crowding ______.", resp:["out"], sol:"out" },
    { q:"La diferencia de tasa respecto de los bonos del Tesoro de EE.UU. se conoce como riesgo ______.", resp:["pais"], sol:"país" },
    { q:"La reestructuración de deuda latinoamericana de 1992 se conoce como Plan ______.", resp:["brady"], sol:"Brady" },
    { q:"La tesis según la cual el empréstito es un acto unilateral del Estado es la tesis del acto de ______.", resp:["soberania"], sol:"soberanía" },
    { q:"El empréstito voluntario en que se apela al patriotismo, en condiciones menos ventajosas, se denomina ______.", resp:["patriotico"], sol:"patriótico" }
  ],
  analisis: [
    { q:"Concepto, características y evolución del crédito público.", a:"<p>Aptitud del Estado para obtener préstamos por la confianza que inspira. Recurso derivado, voluntario y contractual; genera devolución e intereses; traslada carga al futuro. Clásicos: extraordinario; modernos: ordinario e instrumento de política. Materialización: títulos, préstamos de organismos (FMI, BM, BID), préstamos bancarios y adelantos del BCRA, letras del Tesoro.</p>" },
    { q:"Marco legal del crédito público en la Ley 24.156.", a:"<p>Art. 56 (destinos: inversión reproductiva, necesidad nacional, reorganización, refinanciación); art. 59 (autorización previa de Hacienda); art. 60 (la ley de presupuesto fija tipo, monto máximo, plazo mínimo y destino); arts. 68-69 (fiscalización de la ONCP). Control: ONCP, SIGEN, AGN. Legalidad: no hay endeudamiento válido sin ley.</p>" },
    { q:"Clasificaciones de la deuda pública.", a:"<p>Interna y externa (criterios económico y jurídico); directa e indirecta; administrativa y financiera; flotante y consolidada; corto, mediano y largo plazo; perpetua y redimible.</p>" },
    { q:"Formas de extinción de la deuda.", a:"<p>Amortización (obligatoria, facultativa, indirecta por emisión); conversión (forzosa, facultativa u optativa); consolidación (de corto a largo plazo); renegociación o reestructuración (quita, espera, canje); repudio y default.</p>" },
    { q:"¿La deuda traslada carga a las generaciones futuras?", a:"<p>Clásica: sí. Keynesiana: la deuda interna es una transferencia interna; la carga es presente. Buchanan y equivalencia ricardiana: puede trasladar carga y los agentes anticipan impuestos. Interna: redistribución (a veces regresiva) y crowding out. Externa: salida de divisas, balanza de pagos, vulnerabilidad. Regla de oro.</p>" },
    { q:"Indicadores de la deuda y sostenibilidad.", a:"<p>Stock-stock (per cápita, deuda/patrimonio), stock-flujo (deuda/PBI, deuda externa/exportaciones), flujo-flujo (servicios/PBI, servicios/exportaciones, presión crediticia); riesgo país. Sostenibilidad: si r &gt; g se necesita superávit primario; si g &gt; r puede estabilizarse con déficit. Importan el perfil, la moneda y la confianza.</p>" },
    { q:"Naturaleza jurídica y clasificación del empréstito.", a:"<p>Contractualista (dominante), acto de soberanía (Drago, Ingrosso, Sayagués Laso, Giuliani Fonrouge, Jarach) y mixta. Clasificación: voluntario, patriótico, forzoso.</p>" },
    { q:"Técnicas y garantías del empréstito.", a:"<p>Emisión (directa, por bancos, licitación); valor de emisión (a la par, bajo la par, sobre la par); beneficios (interés, primas, exenciones, cláusulas de ajuste); garantías (reales, personales, especiales, contra fluctuaciones monetarias); negociación en el mercado secundario; servicio (sistemas francés, alemán, americano, bullet).</p>" },
    { q:"Ejercicio. Deuda 300.000; PBI 1.000.000; servicios 40.000; recursos 160.000; deuda externa 200.000; exportaciones 80.000. Calcule e interprete.", a:"<p>Deuda/PBI = 30%; servicios/recursos = 25%; servicios/PBI = 4%; deuda externa/exportaciones = 250%. Solvencia razonable, pero una cuarta parte de los recursos se va en servicios y la deuda externa equivale a 2,5 años de exportaciones: riesgo de liquidez externa.</p>" },
    { q:"Evolución de la deuda argentina y lecciones.", a:"<p>Baring (1824); endeudamiento de 1970-1980 y crisis de 1982; Plan Brady (1992); default de 2001; canjes 2005 y 2010; holdouts (resuelto 2016); FMI 2018; reestructuración 2020. Lecciones: la deuda en moneda extranjera es la más riesgosa; no endeudarse para gasto corriente; la confianza es clave; coordinar con la política fiscal y la generación de divisas.</p>" }
  ]
};

/* ---------------- UNIDAD X ---------------- */
window.CURSO.simUnidad[10] = {
  intro: "Simulacro de la Unidad X (presupuesto público).",
  vf: [
    { q:"El presupuesto es un acto de previsión de ingresos y autorización de gastos aprobado por el Poder Legislativo.", v:true, exp:"Verdadero; generalmente anual." },
    { q:"Para la doctrina mayoritaria, la ley de presupuesto es una ley en sentido material que crea tributos.", v:false, exp:"Falso. Es ley formal; no puede crear ni modificar tributos (art. 20, Ley 24.156)." },
    { q:"El presupuesto por programas vincula recursos con productos y resultados.", v:true, exp:"Verdadero; es la técnica de la Ley 24.156." },
    { q:"En el presupuesto plurianual, sólo el primer año es vinculante.", v:true, exp:"Verdadero; los siguientes son indicativos." },
    { q:"El principio de unidad exige un solo presupuesto que reúna todos los recursos y gastos.", v:true, exp:"Verdadero; con la universalidad da lugar a la caja única (no afectación)." },
    { q:"Para la visión keynesiana, el presupuesto debe estar equilibrado todos los años.", v:false, exp:"Falso. Admite déficit en recesión y superávit en el auge; el equilibrio se busca a lo largo del ciclo." },
    { q:"El resultado financiero incluye los intereses de la deuda.", v:true, exp:"Verdadero; el primario los excluye." },
    { q:"La SIGEN es el órgano de control externo que asiste al Congreso.", v:false, exp:"Falso. La SIGEN es el control interno (Ejecutivo); el externo es la AGN (art. 85 CN)." },
    { q:"La política fiscal procíclica amortigua las fluctuaciones económicas.", v:false, exp:"Falso. Las amplifica: gasta más en el auge y ajusta en la crisis." },
    { q:"Las provincias del NEA dependen en gran medida de recursos de origen nacional.", v:true, exp:"Verdadero: coparticipación y transferencias; baja correspondencia fiscal." }
  ],
  fill: [
    { q:"Si el presupuesto no se aprueba a tiempo, se produce su ______.", resp:["reconduccion"], sol:"reconducción" },
    { q:"El Ejecutivo debe enviar el proyecto de presupuesto al Congreso antes del 15 de ______.", resp:["septiembre"], sol:"septiembre" },
    { q:"El documento con que el Ejecutivo rinde cuentas de la ejecución es la ______ de Inversión.", resp:["cuenta"], sol:"Cuenta" },
    { q:"Las etapas del gasto son compromiso, ______ y pago.", resp:["devengado"], sol:"devengado" },
    { q:"El presupuesto que exige justificar todo el gasto desde cero cada año es el presupuesto base ______.", resp:["cero"], sol:"cero" },
    { q:"El principio que exige que los gastos figuren por su importe bruto, sin compensaciones, es el de ______.", resp:["universalidad","integridad"], sol:"universalidad" },
    { q:"El principio que exige autorizar los gastos en monto, concepto y tiempo es el de ______.", resp:["especificacion","especialidad"], sol:"especificación" },
    { q:"El método de estimación de recursos que promedia tres o más ejercicios es el método de ______.", resp:["promedios"], sol:"promedios" },
    { q:"La Ley de Responsabilidad Fiscal es la Ley N° ______.", resp:["25917","25.917"], sol:"25.917" },
    { q:"El impuesto a la renta progresivo funciona como estabilizador ______.", resp:["automatico"], sol:"automático" }
  ],
  analisis: [
    { q:"Concepto y naturaleza jurídica, política y económica del presupuesto.", a:"<p>Previsión de ingresos y autorización de gastos para un período, aprobada por el Legislativo. Jurídica: ley formal (autorización y límite de gastos; estimación de recursos). Política: plan de gobierno cuantificado; control del Legislativo. Económica: instrumento de política económica. Enfoques micro (asignación eficiente) y macro (política fiscal).</p>" },
    { q:"Funciones del presupuesto.", a:"<p>Control político y financiero; previsión y planificación; económica (asignación, distribución, estabilización, desarrollo); jurídica (autoriza y da legalidad); transparencia y rendición de cuentas.</p>" },
    { q:"Concepciones actuales: por programas, base cero, plurianual.", a:"<p><b>Programas:</b> recursos → productos → resultados; categorías programáticas; indicadores; Ley 24.156. <b>Base cero:</b> justificar todo desde cero; combate la inercia; costoso. <b>Plurianual:</b> tres años; mediano plazo; el primero vinculante. Otras: por resultados, participativo, con perspectiva de género.</p>" },
    { q:"Principios presupuestarios.", a:"<p>Sustanciales: universalidad, unidad, no afectación, especificación, anualidad, equilibrio. Formales: claridad, publicidad, exactitud, anticipación.</p>" },
    { q:"El principio de equilibrio y los tipos de resultado fiscal.", a:"<p>Clásica: equilibrio anual. Keynesiana: déficit en recesión, superávit en auge, equilibrio en el ciclo. Primario (sin intereses) y financiero (con intereses); el déficit financiero se cubre con deuda o emisión; reglas fiscales.</p>" },
    { q:"Etapas del ciclo presupuestario.", a:"<p>Formulación (ONP; proyecto antes del 15/9; métodos de estimación); aprobación (Congreso; reconducción); ejecución (compromiso, devengado, pago; modificaciones); control (SIGEN interno, AGN externo; previo, concomitante, posterior; legalidad y gestión). Cierre: Cuenta de Inversión (antes del 30/6).</p>" },
    { q:"Métodos de cálculo de gastos y recursos.", a:"<p>Gastos: apreciación directa (personal, intereses, obras, alquileres) y registros contables. Recursos: valuación directa, automático, promedios, combinado.</p>" },
    { q:"Presupuesto y política fiscal.", a:"<p>Expansiva, contractiva, anticíclica, procíclica; estabilizadores automáticos; límites: rezagos, financiamiento, sostenibilidad, coordinación con la política monetaria y con las provincias, reglas fiscales.</p>" },
    { q:"Ejercicio. Recursos $2.000; gastos primarios $1.900; intereses $250. Calcule los resultados.", a:"<p>Primario: 2.000 − 1.900 = <b>+100</b> (superávit). Financiero: 2.000 − 2.150 = <b>−150</b> (déficit). Hay esfuerzo fiscal propio, pero los intereses generan una necesidad de financiamiento de 150.</p>" },
    { q:"Presupuestos de las provincias del NEA.", a:"<p>Autonomía (arts. 121 y 122); leyes propias de administración financiera (Chaco: Ley 4787; adhesión a la 25.917 por Ley 5483); presupuesto por programas. Dependencia de recursos nacionales; predominio del gasto corriente y de personal; poca inversión; vulnerabilidad fiscal.</p>" }
  ]
};

/* ---------------- UNIDAD XI ---------------- */
window.CURSO.simUnidad[11] = {
  intro: "Simulacro de la Unidad XI (federalismo fiscal).",
  vf: [
    { q:"El federalismo fiscal estudia la distribución de funciones, gastos y recursos entre niveles de gobierno.", v:true, exp:"Verdadero, y las relaciones financieras entre ellos." },
    { q:"Según la teoría, la redistribución del ingreso conviene asignarla a los gobiernos locales.", v:false, exp:"Falso. Corresponde al nivel central: si una jurisdicción redistribuye sola, los ricos se van y los pobres llegan." },
    { q:"El teorema de Oates supone la ausencia de economías de escala y de externalidades entre jurisdicciones.", v:true, exp:"Verdadero; con esos supuestos es más eficiente la provisión descentralizada." },
    { q:"Tiebout sostiene que las personas «votan con los pies».", v:true, exp:"Verdadero: se mudan a la jurisdicción cuya combinación de impuestos y servicios prefieren." },
    { q:"Conviene asignar a los gobiernos locales los impuestos de bases móviles, como la renta.", v:false, exp:"Falso. A los locales, los de base inmóvil y de beneficio (inmobiliario, automotor, tasas); al central, los móviles y redistributivos." },
    { q:"El desequilibrio horizontal se refiere a las diferencias de capacidad fiscal entre jurisdicciones del mismo nivel.", v:true, exp:"Verdadero; justifica transferencias de nivelación." },
    { q:"La coparticipación es una transferencia condicionada.", v:false, exp:"Falso. Es no condicionada y automática." },
    { q:"En Argentina hay alta correspondencia fiscal.", v:false, exp:"Falso. Es baja: las provincias gastan fondos que recauda la Nación." },
    { q:"La ley-convenio de coparticipación tiene como cámara de origen al Senado.", v:true, exp:"Verdadero (art. 75 inc. 2)." },
    { q:"La Ley 23.548 fue dictada en cumplimiento del plazo fijado por la reforma de 1994.", v:false, exp:"Falso. Es de 1988, anterior a la reforma; el régimen que manda la CN nunca se dictó." }
  ],
  fill: [
    { q:"El autor del teorema de la descentralización es ______.", resp:["oates"], sol:"Oates" },
    { q:"Los beneficios o costos que una jurisdicción derrama sobre otras se denominan spill______.", resp:["overs","over"], sol:"spillovers" },
    { q:"La competencia tributaria nociva entre jurisdicciones se describe como una «carrera hacia el ______».", resp:["fondo"], sol:"fondo" },
    { q:"La brecha entre lo que un nivel recauda y lo que gasta es el desequilibrio ______.", resp:["vertical"], sol:"vertical" },
    { q:"Las transferencias en que el receptor aporta fondos propios se llaman con ______.", resp:["contrapartida","matching"], sol:"contrapartida" },
    { q:"El mecanismo de coordinación en que un nivel fija el impuesto base y otro agrega una alícuota adicional se llama ______.", resp:["sobretasa","sobretasas","cuotas suplementarias"], sol:"sobretasas o cuotas suplementarias" },
    { q:"El reparto entre la Nación y el conjunto de provincias es la distribución ______.", resp:["primaria"], sol:"primaria" },
    { q:"La ley de coparticipación vigente es la Ley N° ______.", resp:["23548","23.548"], sol:"23.548" },
    { q:"En la distribución primaria de la Ley 23.548, la Nación recibe el ______ %.", resp:["42,34","42.34"], sol:"42,34%" },
    { q:"El coeficiente de distribución secundaria de la Provincia del Chaco es el ______ %.", resp:["5,18","5.18"], sol:"5,18%" }
  ],
  analisis: [
    { q:"Concepto de federalismo fiscal y modelos de organización.", a:"<p>Distribución de funciones, gastos y recursos entre niveles. Estabilización y distribución al centro; asignación local. Modelos: unitario, federal, confederación.</p>" },
    { q:"Teorema de la descentralización: ventajas y desventajas.", a:"<p>Oates: sin escala ni externalidades, provisión local según preferencias. Ventajas: preferencias, información, accountability, Tiebout, innovación. Desventajas: spillovers, escala, redistribución, competencia nociva, inequidades, riesgo moral.</p>" },
    { q:"Criterios de asignación de gastos e impuestos.", a:"<p>Gastos: correspondencia con el área de beneficio; estabilización y distribución al centro. Impuestos: móviles, redistributivos y cíclicos al centro (renta, comercio exterior); inmóviles y de beneficio a los locales (inmobiliario, automotor, tasas).</p>" },
    { q:"Desequilibrios vertical y horizontal y transferencias.", a:"<p>Vertical: recaudación central frente a gasto descentralizado. Horizontal: diferencias entre provincias. Transferencias: condicionadas o no, con o sin contrapartida, con o sin límite, automáticas o discrecionales (ATN). Efectos renta y sustitución; uso político de las discrecionales.</p>" },
    { q:"Mecanismos de coordinación financiera.", a:"<p>Separación de fuentes, concurrencia, coparticipación, sobretasas, asignaciones globales, créditos o deducciones por impuestos pagados.</p>" },
    { q:"Correspondencia fiscal y su problema en Argentina.", a:"<p>Grado en que un nivel financia su gasto con recursos propios. Baja en Argentina: ruptura del vínculo pago-recibo, dilución de responsabilidad, sobregasto, presión por transferencias, ilusión fiscal, problema de los recursos comunes.</p>" },
    { q:"Aspectos constitucionales de la coparticipación (art. 75 inc. 2).", a:"<p>Ley-convenio con origen en el Senado; mayoría absoluta; no modificable unilateralmente ni reglamentable; aprobada por las provincias; distribución equitativa y solidaria; prioridad a la igualdad de oportunidades; no transferir servicios sin recursos; organismo fiscal federal; plazo vencido en 1996.</p>" },
    { q:"La Ley 23.548: contenido y críticas.", a:"<p>Masa coparticipable; primaria (Nación 42,34%, provincias 54,66%, recupero 2%, ATN 1%); secundaria por coeficientes fijos (Chaco 5,18%, Corrientes 3,86%); prohibición de tributos análogos. Críticas: transitoria pero vigente, coeficientes arbitrarios, laberinto de pactos y asignaciones, baja correspondencia, conflictividad.</p>" },
    { q:"Ejercicio. Masa coparticipable $2.000. Calcule la distribución primaria y lo que reciben Chaco (5,18%) y Corrientes (3,86%).", a:"<p>Nación 846,80; provincias 1.093,20; recupero 40; ATN 20. Chaco: 1.093,20 × 5,18% = <b>56,63</b>. Corrientes: 1.093,20 × 3,86% = <b>42,20</b>.</p>" },
    { q:"Coparticipación municipal en Chaco y Corrientes.", a:"<p>Mandato del art. 123 y de las constituciones provinciales; cada ley define masa, primaria y secundaria (población, partes iguales, NBI, devolución, eficiencia). Problemas: dependencia municipal, baja recaudación propia, criterios discutidos. Verificar números de ley y porcentajes vigentes.</p>" }
  ]
};
