/* Simulacros interactivos del 1º Parcial (Unidades I a V). Pestaña «Simulacros». */
window.CURSO = window.CURSO || { unidades: [] };
window.CURSO.parcial1 = window.CURSO.parcial1 || { titulo: "1º Parcial — Unidades I a V", intro: "" };
window.CURSO.parcial1.simulacros = [

/* ===================== SIMULACRO 1 ===================== */
{
  titulo: "Simulacro 1 · Unidades I a V",
  intro: "Mezcla de las cinco unidades, con el formato del parcial.",
  vf: [
    { q:"La fisiocracia propuso un impuesto único sobre la renta de la tierra.", v:true, exp:"Verdadero (U I). Sólo la tierra genera producto neto; criticaba los impuestos indirectos." },
    { q:"El segundo teorema del bienestar sostiene que sólo el mercado competitivo conduce a un óptimo de Pareto.", v:false, exp:"Falso (U I). Eso dice el primer teorema. El segundo dice que cualquier óptimo puede alcanzarse con una adecuada redistribución inicial de la riqueza." },
    { q:"Quien se comporta como free rider oculta sus preferencias para no pagar el bien público.", v:true, exp:"Verdadero (U I). Por eso los bienes públicos se financian con impuestos coactivos." },
    { q:"La clasificación por finalidad y función responde a la pregunta «¿para qué se gasta?».", v:true, exp:"Verdadero (U II). Finalidades: administración gubernamental, defensa y seguridad, servicios sociales, servicios económicos, deuda pública." },
    { q:"Si el gasto público aumenta en términos relativos, necesariamente aumenta también el gasto por habitante.", v:false, exp:"Falso (U II). En el aumento relativo, el gasto total crece pero medido por habitante, por km² o en % del PBI puede quedar igual o bajar." },
    { q:"Una tasa puede cobrarse aunque el servicio no se preste, con tal de que esté organizado.", v:false, exp:"Falso (U III). La CSJN exige la prestación efectiva y concreta del servicio (Laboratorios Raffo, 2009)." },
    { q:"Para Jarach, las contribuciones de la seguridad social, tanto de empleadores como de empleados, son impuestos.", v:true, exp:"Verdadero (U III). Giuliani Fonrouge las considera contribuciones especiales y Villegas distingue aportes patronales (impuestos) y de los trabajadores (contribuciones)." },
    { q:"El poder tributario de las provincias es derivado del de la Nación.", v:false, exp:"Falso (U IV). Es originario: las provincias son preexistentes y conservan el poder no delegado (art. 121)." },
    { q:"La CSJN no aplica el principio de no confiscatoriedad a los impuestos indirectos.", v:true, exp:"Verdadero (U IV). Se trasladan al consumidor; tampoco lo aplica a aduaneros ni multas." },
    { q:"El IVA es un impuesto de alícuota proporcional, pero regresivo respecto del ingreso.", v:true, exp:"Verdadero (U V). Los hogares de menores ingresos consumen una proporción mayor de su renta." }
  ],
  fill: [
    { q:"La corriente que identificaba la riqueza con los metales preciosos y buscaba una balanza comercial favorable es el ______.", resp:["mercantilismo","cameralismo"], sol:"mercantilismo (cameralismo)" },
    { q:"Una asignación es eficiente en el sentido de ______ si no se puede mejorar a nadie sin empeorar a otro.", resp:["pareto"], sol:"Pareto" },
    { q:"El inciso 5 del clasificador por objeto del gasto corresponde a ______.", resp:["transferencias"], sol:"transferencias" },
    { q:"La «ley» de la creciente expansión de la actividad pública se atribuye a Adolph ______.", resp:["wagner"], sol:"Wagner" },
    { q:"La tasa de justicia es un recurso ______.", resp:["tributario","derivado"], sol:"tributario (derivado)" },
    { q:"Para Giuliani Fonrouge, la retribución obligatoria por el uso de una ruta, que retribuye una obra y no un servicio, es el ______.", resp:["peaje"], sol:"peaje" },
    { q:"Según el art. ______ CN, las provincias conservan todo el poder no delegado al Gobierno Federal.", resp:["121"], sol:"121" },
    { q:"La CSJN fijó el tope de confiscatoriedad del impuesto sucesorio en el ______ % del valor de la hijuela.", resp:["33","33%"], sol:"33%" },
    { q:"El momento en que el contribuyente de derecho transfiere la carga a otro mediante los precios se denomina ______.", resp:["traslacion"], sol:"traslación" },
    { q:"La relación entre los tributos y el PBI se denomina presión ______.", resp:["tributaria","fiscal"], sol:"tributaria" }
  ],
  analisis: [
    { q:"Defina los fallos de mercado y explique cuatro formas de intervención del Estado.", a:"<p>Situaciones en que el mercado competitivo no logra una asignación eficiente: competencia imperfecta, bienes públicos, externalidades, mercados incompletos, información imperfecta, desequilibrios macroeconómicos. <b>Intervenciones:</b> producción pública; producción privada con financiamiento público (licitación, concesión); regulación (límites, tarifas, obligatoriedad); impuestos y subsidios correctivos; transferencias y seguros sociales; obligación de informar.</p>" },
    { q:"Clasifique y fundamente: seguridad interior, boleto escolar, energía de SECHEEP, alarmas comunitarias, relaciones diplomáticas.", a:"<ul><li><b>Seguridad interior:</b> público puro (no rival, no excluible).</li><li><b>Boleto escolar:</b> preferente (subsidio a un bien privado para fomentar la educación).</li><li><b>Energía de SECHEEP:</b> bien privado provisto por empresa pública (rival y excluible; monopolio natural y servicio esencial).</li><li><b>Alarmas comunitarias:</b> privado o bien de club (lo pagan los adheridos; con free rider vecinal).</li><li><b>Relaciones diplomáticas:</b> público puro.</li></ul>" },
    { q:"Clasifique según la clasificación económica y por objeto: compra de 20 ambulancias, 1.000 resmas de papel, alquiler de un depósito, intereses al FMI.", a:"<ul><li><b>Ambulancias:</b> capital, inversión real; inciso 4 (bienes de uso, equipo de transporte).</li><li><b>Resmas:</b> corriente, consumo; inciso 2 (bienes de consumo, papel).</li><li><b>Alquiler:</b> corriente, consumo; inciso 3 (servicios no personales, alquileres).</li><li><b>Intereses al FMI:</b> corriente, rentas de la propiedad; inciso 7 (servicio de la deuda).</li></ul><p>Regla: dura más de un año y aumenta el activo → capital (inc. 4); se consume → corriente (inc. 2); servicio contratado → inc. 3.</p>" },
    { q:"Analice los efectos de un aumento del gasto según se financie con impuestos, crédito o emisión.", a:"<p><b>Impuestos:</b> multiplicador del presupuesto equilibrado = 1; redistributivo si es progresivo; en pleno empleo, recesivo o inflacionario. <b>Crédito:</b> expansivo con ahorro ocioso; en pleno empleo sube la tasa y desplaza inversión; carga futura. <b>Emisión:</b> reactivante en recesión; inflacionaria en pleno empleo; impuesto inflacionario regresivo.</p>" },
    { q:"Un municipio cobra una «tasa» de seguridad e higiene calculada sobre todos los ingresos de una empresa en el país, aunque sólo tiene un pequeño local en el ejido. Analice su validez.", a:"<p>La tasa requiere un servicio estatal efectivo, divisible e individualizado, y una recaudación en razonable proporción con su costo global. Si se calcula sobre ingresos ajenos al ejido y sin relación con el costo del servicio, pierde su vínculo con la contraprestación: es un <b>impuesto encubierto</b>. Al gravar ingresos, sería análogo a impuestos coparticipados (Ley 23.548 art. 9) y afectaría la territorialidad. Puede graduarse por capacidad contributiva, pero con límites.</p>" },
    { q:"Clasifique como originarios o derivados: Ganancias, regalías mineras, tasa bromatológica, préstamo del Banco Mundial, contribución de mejoras, lotería, aportes patronales, multa de tránsito.", a:"<p><b>Originarios (no tributarios):</b> regalías mineras, préstamo del Banco Mundial (crédito), lotería, multa de tránsito (sanción). <b>Derivados (tributarios):</b> Ganancias, tasa bromatológica, contribución de mejoras, aportes patronales (seguridad social).</p>" },
    { q:"Explique la distribución constitucional de facultades tributarias.", a:"<p>Nación exclusiva y permanente: aduaneros (arts. 4, 9, 75 inc. 1). Concurrente y permanente: indirectos internos. Nación excepcional y por tiempo determinado: directos (75 inc. 2). Provincias exclusiva y permanente: directos (121, 126). Coordinación: Ley 23.548, Convenio Multilateral.</p>" },
    { q:"Explique los principios de igualdad y generalidad.", a:"<p><b>Igualdad (art. 16):</b> igualdad de trato en igualdad de capacidad contributiva; admite categorías razonables; igualdad en, ante y por la ley. <b>Generalidad:</b> el tributo alcanza a todos los que realizan el hecho imponible, sin privilegios personales; las exenciones sólo se justifican por fines razonables (75 incs. 18 y 19).</p>" },
    { q:"Explique los momentos de la imposición.", a:"<p>Noticia; percusión (contribuyente de derecho); traslación (hacia adelante, hacia atrás, oblicua); incidencia (contribuyente de hecho); difusión; modificación de la conducta del incidido; amortización y capitalización.</p>" },
    { q:"Ejercicio. Escala: hasta $100.000, 10%; de $100.000 a $150.000, 15%; más de $150.000, 25%. Calcule el impuesto sobre $180.000 con progresividad global y escalonada.", a:"<p><b>Global:</b> 180.000 × 25% = <b>45.000</b> (tasa media 25%). <b>Escalonada:</b> 10.000 + 50.000 × 15% (7.500) + 30.000 × 25% (7.500) = <b>25.000</b> (tasa media 13,9%; marginal 25%).</p>" }
  ]
},

/* ===================== SIMULACRO 2 ===================== */
{
  titulo: "Simulacro 2 · Unidades I a V",
  intro: "Preguntas nuevas sobre las cinco unidades.",
  vf: [
    { q:"Para Adam Smith, el Estado también debía encargarse de obras públicas que no interesan al sector privado.", v:true, exp:"Verdadero (U I). Además de defensa, justicia y seguridad." },
    { q:"Cuanto más alejada está la curva de Lorenz de la diagonal, mayor es la igualdad.", v:false, exp:"Falso (U I). Mayor es la desigualdad." },
    { q:"Según Niskanen, los burócratas buscan maximizar el presupuesto de su área.", v:true, exp:"Verdadero (U I, elección pública)." },
    { q:"El sueldo de los médicos de un hospital público es un gasto corriente de consumo.", v:true, exp:"Verdadero (U II). El Estado detrae recursos reales (el trabajo del médico)." },
    { q:"Para Wagner, la elasticidad-ingreso de la demanda de bienes públicos es menor que uno.", v:false, exp:"Falso (U II). Es mayor que uno: son bienes superiores; el gasto crece más que el producto." },
    { q:"En la contribución de mejoras, el límite total es el costo de la obra.", v:true, exp:"Verdadero (U III, MCTAL)." },
    { q:"La emisión monetaria es un recurso efectivo, porque transfiere poder de compra desde el sector privado.", v:false, exp:"Falso (U III). Es no efectivo: crea poder de compra; la transferencia ocurre indirectamente por la inflación." },
    { q:"Los municipios pueden crear impuestos análogos a los nacionales coparticipados.", v:false, exp:"Falso (U IV). La Ley 23.548 art. 9 inc. b lo prohíbe." },
    { q:"La Ley 11.683 es la ley de procedimiento tributario nacional.", v:true, exp:"Verdadero (U IV). Funciona como parte general del derecho tributario nacional." },
    { q:"Un impuesto específico se fija como un monto por unidad física.", v:true, exp:"Verdadero (U V). Por litro, por paquete, por kilo; el ad valorem es un % del valor." }
  ],
  fill: [
    { q:"El Estado que surge tras la 2ª Guerra con fines de bienestar social y pleno empleo se denomina Estado ______.", resp:["faustico","de bienestar"], sol:"fáustico (dirigismo)" },
    { q:"El coeficiente de Gini se calcula como A / (A + ______).", resp:["b"], sol:"B" },
    { q:"El impuesto que grava a quien contamina por el daño marginal que causa se denomina impuesto ______.", resp:["pigouviano","pigoviano"], sol:"pigouviano" },
    { q:"Según la regla de oro, es justificable endeudarse para financiar gastos de ______.", resp:["capital","inversion"], sol:"capital (inversión)" },
    { q:"Para Villegas, los recursos son riquezas que se devengan a favor del Estado e ingresan a su ______.", resp:["tesoreria"], sol:"Tesorería" },
    { q:"El SIPA es administrado por la ______.", resp:["anses"], sol:"ANSES" },
    { q:"La cláusula comercial está en el art. 75 inc. ______ CN.", resp:["13"], sol:"13" },
    { q:"El fallo de 2009 que admitió el ajuste por inflación en Ganancias por confiscatoriedad es ______.", resp:["candy"], sol:"Candy" },
    { q:"Un impuesto cuya base es el valor del bien es un impuesto ad ______.", resp:["valorem"], sol:"valorem" },
    { q:"La pérdida de bienestar adicional a lo recaudado se denomina carga ______.", resp:["excedente"], sol:"excedente" }
  ],
  analisis: [
    { q:"Sintetice la evolución del pensamiento financiero.", a:"<p>Mercantilismo (metales, balanza comercial, Estado paternalista) → fisiocracia (orden natural, impuesto único a la tierra) → liberalismo clásico (Smith: gasto mínimo, cánones de imposición) → marginalismo (Sax, Mazzola, De Viti de Marco, Wicksell: impuesto como precio) → keynesianismo (demanda efectiva, multiplicador, presupuesto cíclico) → monetarismo, oferta y elección pública (crítica a la intervención) → neointervencionismo y debate libertario.</p>" },
    { q:"¿Cómo se vincula el óptimo de Pareto con la función de distribución?", a:"<p>Pareto exige que nadie empeore, pero casi toda redistribución perjudica a alguien: el criterio no permite juzgar la distribución (hay infinitos óptimos). Elegir entre ellos requiere un juicio de valor (función de bienestar social). El segundo teorema separa eficiencia y equidad: se redistribuye la dotación inicial y el mercado asigna. El Estado interviene por fallos de mercado, por equidad y por estabilización. Kaldor-Hicks: los ganadores podrían compensar a los perdedores.</p>" },
    { q:"Identifique y clasifique las externalidades: a) una empresa contamina un río y otra debe purificar el agua; b) apicultores aumentan el rendimiento de agricultores; c) Acindar produce smog sobre vecinos; d) Arcor capacita personal que luego trabaja en otras empresas.", a:"<p>a) Negativa, de producción sobre producción. b) Positiva, de producción sobre producción (polinización). c) Negativa, de producción sobre consumo. d) Positiva, de producción sobre producción (las otras empresas aprovechan la capacitación sin pagarla).</p>" },
    { q:"Enumere los clasificadores del gasto de la Ley 24.156 y la información que brinda cada uno.", a:"<p>Institucional (quién gasta), geográfico (dónde), objeto (en qué: insumos, registro, control), finalidad y función (para qué: prioridades), programático (qué produce: metas, eficiencia), económico (naturaleza: cuenta ahorro-inversión-financiamiento), fuente de financiamiento (con qué), tipo de moneda (balanza de pagos).</p>" },
    { q:"Ejercicio. Con una propensión marginal a consumir de 0,75, el Estado aumenta el gasto en $200. ¿Cuánto aumenta la renta? ¿Y si lo financia con impuestos por $200?", a:"<p>k = 1 / (1 − 0,75) = <b>4</b>; ΔY = 4 × 200 = <b>800</b>. Si lo financia con impuestos: multiplicador de impuestos = −0,75/0,25 = −3 → −600; efecto neto 800 − 600 = <b>200</b> (multiplicador del presupuesto equilibrado = 1, Haavelmo).</p>" },
    { q:"Analice los efectos del uso de la inflación como recurso.", a:"<p>Señoreaje e impuesto inflacionario sobre los saldos monetarios; no legislado; regresivo; redistribuye de acreedores a deudores (y licúa la deuda estatal en pesos); efecto Olivera-Tanzi; distorsión de precios; dolarización; límite por la caída de la demanda de dinero; en recesión, una emisión moderada puede reactivar.</p>" },
    { q:"Explique la contribución de mejoras en Chaco y en Resistencia.", a:"<p><b>Chaco</b> (Ley 597-F y Decreto 3122): caminos rurales; zona de hasta 15 km; los beneficiarios pagan el 30% del costo; liquida Vialidad Provincial y recauda ATP. <b>Resistencia</b> (Ordenanzas 1181/85 y 9710/2009): obras de pavimento, desagües y saneamiento por el municipio o terceros; registro de oposición; fondo especial; adicional 8%; pago obligatorio por metro de frente.</p>" },
    { q:"¿Puede un DNU crear o modificar un tributo? Fundamente.", a:"<p>No. El art. 99 inc. 3 CN prohíbe al Ejecutivo dictar DNU en materia tributaria (además de penal, electoral y de partidos). El principio de legalidad (arts. 4, 17, 19, 52, 75 incs. 1-2) exige ley formal del Congreso con iniciativa de Diputados. La delegación legislativa (art. 76) sólo cabe en materias de administración o emergencia, con plazo y bases, y nunca puede alcanzar los elementos esenciales del tributo (Selcro, Camaronera Patagónica).</p>" },
    { q:"¿Puede una ley gravar hechos ya perfeccionados en el pasado? Cite jurisprudencia.", a:"<p>Regla de irretroactividad (art. 7 CCyC). No puede gravarse un hecho cuando el contribuyente pagó conforme a la ley vigente: el pago tiene efecto liberatorio y se incorpora a su propiedad (art. 17; Moño Azul, Georgalos). Insúa y Horvath admitieron gravar hechos pasados reveladores de capacidad cuando no hubo pago liberatorio.</p>" },
    { q:"Relacione la curva de Laffer con la carga excedente.", a:"<p>Ambas muestran que el impuesto altera conductas. A medida que sube la alícuota, la carga excedente crece con su cuadrado y la base se achica; pasada la alícuota t* (zona prohibida de Laffer), la contracción de la base es tan grande que la recaudación cae. Por eso se recomiendan bases amplias con alícuotas moderadas, minimizando la carga excedente (neutralidad).</p>" }
  ]
},

/* ===================== SIMULACRO 3 ===================== */
{
  titulo: "Simulacro 3 · Unidades I a V (ejercicios)",
  intro: "Simulacro con ejercicios como los de los trabajos prácticos: clasificaciones, multiplicador, progresividad, prescripción, Gini, incidencia y confiscatoriedad.",
  vf: [
    { q:"Un bien construido por una empresa privada puede ser un bien público si el Estado lo provee y financia con el presupuesto.", v:true, exp:"Verdadero (U I). La forma de producción no define el carácter del bien: importa la provisión (ej.: rutas licitadas sin peaje)." },
    { q:"La seguridad interior es un bien público preferente.", v:false, exp:"Falso (U I). Es un bien público puro." },
    { q:"La compra de 20 ambulancias es un gasto corriente.", v:false, exp:"Falso (U II). Es gasto de capital (inversión real, inciso 4 bienes de uso)." },
    { q:"Los intereses pagados al FMI son un gasto corriente.", v:true, exp:"Verdadero (U II). Rentas de la propiedad; inciso 7. La amortización del capital, en cambio, es aplicación financiera." },
    { q:"Las regalías petroleras son recursos derivados.", v:false, exp:"Falso (U III). Son originarios: derivan del dominio del Estado sobre los recursos naturales." },
    { q:"La venta de billetes de lotería es un recurso originario.", v:true, exp:"Verdadero (U III). Es un ingreso por una actividad propia del Estado." },
    { q:"La declaración jurada de IVA de diciembre vence en enero del año siguiente.", v:true, exp:"Verdadero (U IV). Por eso prescribe un año más tarde que los demás meses de su año." },
    { q:"Para los contribuyentes no inscriptos obligados a inscribirse, la prescripción es de 10 años.", v:true, exp:"Verdadero (U IV, Ley 11.683 art. 56)." },
    { q:"En la progresividad escalonada, el tipo medio es mayor que el tipo marginal.", v:false, exp:"Falso (U V). El marginal es mayor que el medio, y el medio crece acercándose al marginal." },
    { q:"En un impuesto regresivo, el tipo medio disminuye al aumentar la base.", v:true, exp:"Verdadero (U V)." }
  ],
  fill: [
    { q:"La compra de resmas de papel se imputa al inciso ______ del clasificador por objeto.", resp:["2","dos"], sol:"2 (bienes de consumo)" },
    { q:"El alquiler de un inmueble se imputa al inciso ______ del clasificador por objeto.", resp:["3","tres"], sol:"3 (servicios no personales)" },
    { q:"Un subsidio a una escuela para comprar una computadora es una transferencia de ______.", resp:["capital"], sol:"capital" },
    { q:"Las multas de tránsito son un recurso no ______.", resp:["tributario"], sol:"tributario" },
    { q:"El tipo medio se calcula como el impuesto dividido por la ______ imponible.", resp:["base"], sol:"base" },
    { q:"Si la declaración jurada vence en el año V, la acción del Fisco prescribe el 1/1 del año V + ______.", resp:["6","seis"], sol:"6" },
    { q:"El tipo marginal se calcula como ΔT / Δ______.", resp:["base","b","base imponible"], sol:"base imponible" },
    { q:"En una escala con un primer tramo de $0 a $10.000 al 10%, el importe fijo del segundo tramo es $ ______.", resp:["1000","1.000"], sol:"1.000" },
    { q:"El coeficiente de Gini equivale a 2 × el área ______.", resp:["a"], sol:"A (entre la diagonal y la curva de Lorenz)" },
    { q:"Con una propensión marginal a consumir de 0,8, el multiplicador del gasto vale ______.", resp:["5","cinco"], sol:"5" }
  ],
  analisis: [
    { q:"Ejercicio. Clasifique según la clasificación económica, por objeto y por finalidad: a) sueldos del Hospital Perrando; b) combustible para patrulleros; c) pensiones a madres desamparadas; d) útiles de oficina del Ministerio de Hacienda.", a:"<ul><li>a) Corriente, consumo; inc. 1 personal; Servicios sociales – Salud.</li><li>b) Corriente, consumo; inc. 2 bienes de consumo (combustibles); Defensa y seguridad – Seguridad interior.</li><li>c) Corriente, transferencia; inc. 5 transferencias al sector privado; Servicios sociales – Promoción y asistencia social.</li><li>d) Corriente, consumo; inc. 2 (útiles); Administración gubernamental – Administración fiscal.</li></ul>" },
    { q:"Ejercicio. Clasifique en originarios o derivados: IVA, intereses por préstamos otorgados, canon por concesión de un bar, derecho de cementerio, venta de títulos públicos, impuesto inmobiliario, donación de una fotocopiadora, aranceles a la importación.", a:"<p><b>Originarios:</b> intereses por préstamos, canon por concesión, venta de títulos públicos (crédito), donación. <b>Derivados:</b> IVA, derecho de cementerio (tasa), impuesto inmobiliario, aranceles a la importación.</p>" },
    { q:"Ejercicio. PMgC = 0,75 y el Estado aumenta la obra pública en $200. Calcule el multiplicador, el aumento de la renta y explique el proceso.", a:"<p>k = 1/(1 − 0,75) = 4; ΔY = 800. Proceso: los 200 son ingreso de constructores y trabajadores, que consumen 150; ese consumo es ingreso de otros, que consumen 112,5; y así sucesivamente: 200 + 150 + 112,5 + … = 800. Es mayor cuanto mayor la PMgC y menores las filtraciones (ahorro, impuestos, importaciones).</p>" },
    { q:"Ejercicio. Escala: 0-1.000: 10%; 1.000-3.000: 20%; 3.000-10.000: 25%. Calcule T y Tme para 3.000 y 3.001 con progresividad global y escalonada, y el Tmg entre ambos.", a:"<p><b>Global:</b> 3.000 × 20% = 600 (Tme 20%); 3.001 × 25% = 750,25 (Tme 25%); Tmg = 150,25 por $1 = 15.025%. <b>Escalonada:</b> 3.000 → 100 + 400 = 500 (Tme 16,7%); 3.001 → 500,25 (Tme 16,7%); Tmg = 25%. La global genera un salto absurdo en el límite del tramo.</p>" },
    { q:"Ejercicio. Complete los importes fijos: 0-10.000: 5%; 10.000-30.000: 10%; 30.000-60.000: 15%; más de 60.000: 20%.", a:"<p>Tramo 1: <b>0</b>. Tramo 2: 10.000 × 5% = <b>500</b>. Tramo 3: 500 + 20.000 × 10% = <b>2.500</b>. Tramo 4: 2.500 + 30.000 × 15% = <b>7.000</b>. Cada fijo es el impuesto acumulado de los tramos anteriores.</p>" },
    { q:"Ejercicio. Una S.R.L. cierra su ejercicio el 30 de abril. El 20/03/2026 recibe una intimación por los períodos no prescriptos de Ganancias. ¿Cuáles son?", a:"<p>Cierre en abril → la DDJJ vence en septiembre (5º mes). Ejercicio 04/2020: vence 09/2020, cómputo desde 1/1/2021, prescribe <b>1/1/2026</b> → prescripto. Ejercicio 04/2021: vence 09/2021, prescribe 1/1/2027 → vigente. Ejercicio 04/2025: vence 09/2025 → exigible. <b>Debe presentar los ejercicios cerrados en 04/2021 a 04/2025.</b> El ejercicio que cierra en 04/2026 todavía no terminó.</p>" },
    { q:"Ejercicio. El área entre la diagonal y la curva de Lorenz de un país es 0,2. Calcule el coeficiente de Gini e interprételo.", a:"<p>Como A + B = 0,5: G = A / (A + B) = 0,2 / 0,5 = <b>0,4</b> (o G = 2A = 0,4). Desigualdad intermedia: 0 sería igualdad perfecta y 1 máxima desigualdad. Si después de impuestos y transferencias el Gini baja, la política fiscal es redistributiva.</p>" },
    { q:"Ejercicio. Un país recauda $300 de tributos con un PBI de $1.000; el sector agropecuario paga $60 sobre un valor agregado de $150. Calcule la presión global y sectorial.", a:"<p>Global: 300/1.000 = <b>30%</b>. Sectorial agropecuaria: 60/150 = <b>40%</b>. El sector soporta una presión mayor que el promedio de la economía (por ejemplo, por derechos de exportación).</p>" },
    { q:"Ejercicio. Se aplica un impuesto de $10 por unidad. El precio que paga el consumidor sube de $100 a $106 y el que recibe el productor baja a $96. ¿Quién soporta la carga y por qué?", a:"<p>Consumidores: 6 por unidad (60%); productores: 4 (40%). La carga recae más sobre el lado menos elástico: aquí la demanda es relativamente más inelástica que la oferta. Si la demanda fuera perfectamente inelástica, el consumidor pagaría los 10.</p>" },
    { q:"Ejercicio. Un campo tiene una renta potencial normal de $90.000 y paga $36.000 de impuesto inmobiliario rural. ¿Es confiscatorio?", a:"<p>36.000 / 90.000 = <b>40%</b>, más que el tope del 33% fijado por la CSJN para el inmobiliario rural sobre la renta potencial: <b>es confiscatorio</b> (arts. 14 y 17). El contribuyente debe probarlo (pericia sobre la renta normal de una explotación racional).</p>" }
  ]
},

/* ===================== SIMULACRO 4 ===================== */
{
  titulo: "Simulacro 4 · Unidades I a V",
  intro: "Último simulacro del 1º parcial: conceptos que suelen preguntarse.",
  vf: [
    { q:"El anarcocapitalismo propone sustituir las funciones del Estado por empresas privadas y acuerdos voluntarios.", v:true, exp:"Verdadero (U I). Autores: Murray Rothbard, David Friedman." },
    { q:"La función de asignación justifica la provisión pública de bienes públicos.", v:true, exp:"Verdadero (U I)." },
    { q:"Los mercados incompletos son un fallo de mercado.", v:true, exp:"Verdadero (U I). Por ejemplo, seguros o créditos que el sector privado no ofrece." },
    { q:"El gasto público es interdependiente de los recursos públicos.", v:true, exp:"Verdadero (U II). Es una de sus características." },
    { q:"Según Peacock y Wiseman, tras una guerra el gasto público vuelve a su nivel anterior.", v:false, exp:"Falso (U II). Por el efecto desplazamiento, el gasto queda en un nivel más alto que antes de la crisis." },
    { q:"Para Villegas, los aportes patronales a la seguridad social son impuestos y los de los trabajadores, contribuciones.", v:true, exp:"Verdadero (U III)." },
    { q:"El empréstito forzoso tiene naturaleza tributaria.", v:true, exp:"Verdadero (U III). Por eso requiere ley y respeto de las garantías constitucionales." },
    { q:"El principio de realidad económica permite crear tributos por analogía.", v:false, exp:"Falso (U IV). Permite atender a la sustancia de los actos, pero nunca crear tributos por analogía (legalidad)." },
    { q:"Una tasa municipal desproporcionada respecto del costo del servicio puede considerarse un impuesto encubierto.", v:true, exp:"Verdadero (U III-IV)." },
    { q:"La percusión y la incidencia siempre recaen sobre el mismo sujeto.", v:false, exp:"Falso (U V). Coinciden sólo si no hay traslación (impuestos directos, en principio)." }
  ],
  fill: [
    { q:"El Estado del liberalismo clásico, limitado a funciones esenciales, se denomina Estado ______.", resp:["gendarme"], sol:"gendarme" },
    { q:"El inciso 4 del clasificador por objeto corresponde a bienes de ______.", resp:["uso"], sol:"uso" },
    { q:"Las jubilaciones y pensiones contributivas son prestaciones de la seguridad ______.", resp:["social"], sol:"social" },
    { q:"El art. 16 del MCTAL define la ______.", resp:["tasa"], sol:"tasa" },
    { q:"Para Giuliani Fonrouge, los aportes de la seguridad social son contribuciones ______.", resp:["especiales"], sol:"especiales" },
    { q:"El Pacto Federal para el Empleo, la Producción y el Crecimiento se firmó en el año ______.", resp:["1993"], sol:"1993" },
    { q:"La prohibición de aduanas interiores comienza en el art. ______ CN.", resp:["9","nueve"], sol:"9 (arts. 9 a 12)" },
    { q:"Cuando el contribuyente absorbe el impuesto mejorando su eficiencia, sin trasladarlo, hay ______.", resp:["remocion"], sol:"remoción" },
    { q:"La teoría de la imposición óptima de ______ aconseja gravar más los bienes de demanda inelástica.", resp:["ramsey"], sol:"Ramsey" },
    { q:"El conjunto coherente de tributos vigentes en un lugar y momento es el sistema ______.", resp:["tributario"], sol:"tributario" }
  ],
  analisis: [
    { q:"Explique el anarcocapitalismo y el debate sobre el rol del Estado.", a:"<p>Sociedad sin Estado: policía, tribunales y seguridad provistos por empresas en competencia; propiedad privada absoluta; sin impuestos ni regulación (Rothbard, D. Friedman). A favor: libertad, eficiencia por competencia, fin de la coacción fiscal. En contra: concentración de poder, servicios esenciales inaccesibles para quien no paga, monopolios privados que actúan como gobiernos; no resuelve bienes públicos ni externalidades.</p>" },
    { q:"Concepto, rubros y características del gasto público social.", a:"<p>Gasto para mejorar las condiciones de vida y redistribuir: salud, asistencia social, seguridad social, educación, ciencia, trabajo, vivienda, agua y saneamiento. Características: redistributivo, garantiza derechos (14 bis, 75 incs. 19 y 23), capital humano, bienes preferentes, rígido, descentralizado, universal o focalizado, contributivo o no.</p>" },
    { q:"¿Por qué el gasto público es rígido? (Fenochietto)", a:"<p>Restricciones para reducirlo: naturaleza temporal (es más fácil cambiar el próximo presupuesto), clima financiero (dejar de pagar deuda afecta los mercados), marco legal (derechos adquiridos: jubilaciones) y limitaciones políticas (recortar salud o educación).</p>" },
    { q:"Relacione la clasificación programática con el modelo de presupuesto por programas.", a:"<p>La categoría programática es propia del presupuesto por programas (Ley 24.156): vincula recursos con productos y metas. Estructura: programa, subprograma, actividad, proyecto, obra. Permite medir eficiencia (costo por producto) y eficacia (cumplimiento de metas). Un presupuesto tradicional por objeto no la necesita.</p>" },
    { q:"Explique los principios distributivos de los tributos.", a:"<p>Capacidad contributiva (impuestos: renta, patrimonio, consumo; equidad horizontal y vertical); beneficio (contribución de mejoras, peajes); contraprestación o costo (tasas; sin carácter contractual); solidaridad (seguridad social).</p>" },
    { q:"Compare los sistemas de seguridad social.", a:"<p><b>Reparto:</b> los activos pagan a los pasivos; solidario; sensible a la demografía y la informalidad. <b>Capitalización:</b> cuenta individual; riesgo financiero, costos, excluye informales. <b>Mixto:</b> Argentina 1994-2008. <b>Bismarck</b> (contributivo) frente a <b>Beveridge</b> (universal con impuestos). Argentina hoy: SIPA, reparto (Ley 26.425).</p>" },
    { q:"¿Puede la Nación eximir de un impuesto provincial? Fundamente.", a:"<p>Excepcionalmente sí: cláusula del progreso (75 inc. 18), cláusula comercial y establecimientos de utilidad nacional (75 inc. 30); CSJN, Ferrocarril Central Argentino (1897). Límites: razonabilidad, temporalidad, fin nacional y no aniquilar la autonomía provincial (art. 121). Las leyes-convenio también aceptan restricciones voluntarias.</p>" },
    { q:"¿Es autónomo el derecho tributario?", a:"<p>Posturas: privatista (sin autonomía); autonomía del derecho financiero (Giuliani Fonrouge); autonomía del derecho tributario sustantivo (Jarach, Villegas: obligación <i>ex lege</i> con institutos propios). Conclusión: autonomía didáctica y científica relativa dentro de la unidad del derecho; puede apartarse del derecho privado cuando la ley lo indica (Ley 11.683 art. 1).</p>" },
    { q:"Explique la incidencia de un impuesto en un mercado monopólico.", a:"<p>El monopolista maximiza donde IMg = CMg. Un impuesto desplaza hacia abajo las curvas de ingreso medio y marginal: sube el precio, baja el que recibe el productor, cae la cantidad y se reduce el beneficio; el Estado absorbe parte del beneficio monopólico y aumenta la ineficiencia. Un impuesto sobre las superutilidades, en teoría, no distorsiona.</p>" },
    { q:"Explique el principio de neutralidad y la teoría de la imposición óptima.", a:"<p><b>Neutralidad:</b> el impuesto no debe alterar las decisiones más allá de lo buscado; se logra minimizando la carga excedente. Sólo el impuesto de suma fija sería neutral, pero es injusto. <b>Imposición óptima:</b> diseñar impuestos que minimicen distorsiones obteniendo los recursos necesarios; Ramsey: gravar más los bienes de demanda inelástica (conflicto con la equidad, porque suelen ser de primera necesidad). Los impuestos generales y no acumulativos son preferibles.</p>" }
  ]
}
];
