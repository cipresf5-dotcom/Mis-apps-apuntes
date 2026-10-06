/* Simulacros adicionales por unidad — Parte 2: Unidades X y XI. */
window.CURSO = window.CURSO || { unidades: [] };
window.CURSO.simUnidadMas = window.CURSO.simUnidadMas || {};

/* =================== UNIDAD X =================== */
window.CURSO.simUnidadMas[10] = [
{
  intro: "Simulacro 2 de la Unidad X.",
  vf: [
    { q:"El presupuesto es la expresión contable, financiera y política del plan de gobierno.", v:true, exp:"Verdadero." },
    { q:"La ley de presupuesto puede crear nuevos impuestos en sus disposiciones generales.", v:false, exp:"Falso (art. 20, Ley 24.156)." },
    { q:"La ley de presupuesto consta de tres títulos según el art. 19 de la Ley 24.156.", v:true, exp:"Verdadero: disposiciones generales, presupuesto de la administración central y de los organismos descentralizados." },
    { q:"El presupuesto tradicional por objeto del gasto sólo muestra en qué se gasta.", v:true, exp:"Verdadero: es un instrumento de control contable de insumos." },
    { q:"El principio de anticipación exige que el presupuesto se sancione antes del inicio del ejercicio.", v:true, exp:"Verdadero." },
    { q:"El principio de no afectación prohíbe, como regla, destinar recursos a gastos determinados.", v:true, exp:"Verdadero, salvo excepciones legales (caja única)." },
    { q:"La etapa del gasto en que nace la obligación de pagar es el compromiso.", v:false, exp:"Falso. Es el devengado; el compromiso es la reserva del crédito." },
    { q:"La AGN tiene rango constitucional (art. 85 CN).", v:true, exp:"Verdadero." },
    { q:"La política fiscal anticíclica genera superávit en los auges.", v:true, exp:"Verdadero; y déficit en las recesiones." },
    { q:"En las provincias del NEA predomina el gasto de capital sobre el corriente.", v:false, exp:"Falso: predomina el gasto corriente, sobre todo en personal." }
  ],
  fill: [
    { q:"El órgano rector del sistema presupuestario nacional es la Oficina Nacional de ______.", resp:["presupuesto"], sol:"Presupuesto (ONP)" },
    { q:"La Ley de Solvencia Fiscal es la Ley N° ______.", resp:["25152","25.152"], sol:"25.152" },
    { q:"El Chaco adhirió a la Ley de Responsabilidad Fiscal por la Ley N° ______.", resp:["5483","5.483"], sol:"5483" },
    { q:"El principio que exige un solo presupuesto es el de ______.", resp:["unidad"], sol:"unidad" },
    { q:"El principio que exige que el presupuesto rija por un período determinado es el de ______.", resp:["anualidad"], sol:"anualidad" },
    { q:"Las categorías programáticas son programa, subprograma, proyecto, actividad y ______.", resp:["obra"], sol:"obra" },
    { q:"El presupuesto que proyecta generalmente 3 años es el presupuesto ______.", resp:["plurianual"], sol:"plurianual" },
    { q:"El control que se realiza durante la ejecución se denomina control ______.", resp:["concomitante"], sol:"concomitante" },
    { q:"El método de cálculo de gastos usado para personal e intereses es el de apreciación ______.", resp:["directa"], sol:"directa" },
    { q:"La política fiscal que amplifica el ciclo económico se denomina ______.", resp:["prociclica"], sol:"procíclica" }
  ],
  analisis: [
    { q:"Explique la naturaleza jurídica del presupuesto.", a:"<p>Es una ley. Debate: ley material o formal; la doctrina mayoritaria la considera formal: no crea derechos ni obligaciones nuevas (no puede crear tributos, art. 20); para los gastos es autorización y límite, para los recursos estimación.</p>" },
    { q:"Explique la evolución de las técnicas presupuestarias.", a:"<p>Del presupuesto tradicional (control contable de insumos) al presupuesto por programas (recursos → productos → resultados; Ley 24.156), base cero (justificar todo desde cero), plurianual (mediano plazo), por resultados, participativo y con perspectiva de género.</p>" },
    { q:"Explique los principios sustanciales del presupuesto.", a:"<p>Universalidad (todo, por importe bruto), unidad (un solo presupuesto), no afectación (caja única), especificación (monto, concepto, tiempo), anualidad, equilibrio.</p>" },
    { q:"Explique el ciclo presupuestario.", a:"<p>Formulación (ONP, jurisdicciones, proyecto antes del 15/9); aprobación (Congreso, Diputados cámara de origen; reconducción); ejecución (compromiso, devengado, pago; modificaciones); control (SIGEN, AGN); cierre con la Cuenta de Inversión (antes del 30/6).</p>" },
    { q:"Explique los métodos de cálculo de los recursos.", a:"<p>Valuación directa (indicadores macroeconómicos), automático (lo recaudado el último ejercicio), promedios (tres o más ejercicios), combinado. Los gastos: apreciación directa (obligatorios) y registros contables (operación).</p>" },
    { q:"Explique la diferencia entre resultado primario y financiero, con un ejemplo.", a:"<p>Recursos 500; gastos primarios 480; intereses 40. Primario +20 (superávit); financiero −20 (déficit). El primario mide el esfuerzo propio; el financiero, la necesidad de financiamiento.</p>" },
    { q:"Explique los estabilizadores automáticos.", a:"<p>Mecanismos que amortiguan el ciclo sin decisión discrecional: el impuesto progresivo a la renta (recauda más en el auge, menos en la recesión) y los subsidios por desempleo y gastos sociales (suben en la recesión).</p>" },
    { q:"Explique los límites de la política fiscal.", a:"<p>Rezagos (reconocimiento, decisión, ejecución); restricción de financiamiento (deuda o emisión); sostenibilidad; coordinación con la política monetaria y con las provincias; reglas fiscales (Ley 25.917).</p>" },
    { q:"Explique el presupuesto como instrumento de control del Legislativo.", a:"<p>Su origen histórico es el control parlamentario del poder de gastar. El Congreso autoriza y limita cada gasto (especificación), y luego controla la ejecución con la AGN y la Cuenta de Inversión.</p>" },
    { q:"Explique las particularidades de los presupuestos del NEA.", a:"<p>Dependencia de recursos nacionales; predominio del gasto corriente y de personal; poca inversión; vulnerabilidad fiscal. Técnicas: presupuesto por programas, clasificadores nacionales, avances hacia el plurianual por la Ley 25.917.</p>" }
  ]
},
{
  intro: "Simulacro 3 de la Unidad X: con ejercicios.",
  vf: [
    { q:"Con recursos de 1.000 y gastos totales de 1.100, hay déficit financiero de 100.", v:true, exp:"Verdadero." },
    { q:"Si los intereses son 0, el resultado primario y el financiero coinciden.", v:true, exp:"Verdadero." },
    { q:"Un superávit primario garantiza siempre que la deuda no crezca.", v:false, exp:"Falso: si los intereses superan el superávit primario, hay déficit financiero y la deuda crece." },
    { q:"El método automático estima los recursos con lo recaudado en el último ejercicio.", v:true, exp:"Verdadero." },
    { q:"Con el método de promedios, si se recaudó 90, 100 y 110, la estimación es 100.", v:true, exp:"Verdadero." },
    { q:"Si el presupuesto no se aprueba, se aplica el del año anterior sin ningún ajuste.", v:false, exp:"Falso: rige con ajustes (se eliminan créditos que no deben repetirse y recursos ya usados)." },
    { q:"La Ley 25.917 limita el crecimiento del gasto corriente primario a la inflación prevista.", v:true, exp:"Verdadero." },
    { q:"Un aumento del gasto de 100 con multiplicador 4 eleva la renta en 400.", v:true, exp:"Verdadero." },
    { q:"El déficit financiero puede financiarse sólo con impuestos.", v:false, exp:"Falso: se financia con deuda o emisión." },
    { q:"La Cuenta de Inversión compara lo presupuestado con lo efectivamente recaudado y gastado.", v:true, exp:"Verdadero." }
  ],
  fill: [
    { q:"Recursos 800; gastos primarios 750; intereses 100. Resultado primario: ______.", resp:["50","+50"], sol:"+50" },
    { q:"Mismo caso: resultado financiero ______.", resp:["-50","−50","menos 50"], sol:"−50" },
    { q:"Recaudación de los últimos tres años: 100, 120, 140. Estimación por promedios: ______.", resp:["120"], sol:"120" },
    { q:"Mismo caso, método automático: ______.", resp:["140"], sol:"140" },
    { q:"PMgC 0,75: multiplicador ______.", resp:["4"], sol:"4" },
    { q:"Gasto corriente primario de 1.000 e inflación prevista del 30%: tope del gasto según la Ley 25.917: ______.", resp:["1300","1.300"], sol:"1.300" },
    { q:"Gasto de personal 600 sobre gasto total 1.000: participación ______ %.", resp:["60","60%"], sol:"60%" },
    { q:"Gasto de capital 80 sobre gasto total 1.000: participación ______ %.", resp:["8","8%"], sol:"8%" },
    { q:"Recursos nacionales 750 sobre recursos totales 1.000: dependencia ______ %.", resp:["75","75%"], sol:"75%" },
    { q:"Superávit primario 30 e intereses 50: resultado financiero ______.", resp:["-20","−20"], sol:"−20" }
  ],
  analisis: [
    { q:"Ejercicio. Recursos 1.500; personal 700; bienes y servicios 300; transferencias 250; inversión 100; intereses 200. Calcule los resultados.", a:"<p>Gasto primario: 1.350. Primario: 1.500 − 1.350 = <b>+150</b>. Financiero: 150 − 200 = <b>−50</b>. Necesita financiar 50 con deuda o emisión.</p>" },
    { q:"Ejercicio. Una provincia tiene recursos propios 200, coparticipación 700, transferencias 100; gasto corriente 900 y de capital 120. Analice.", a:"<p>Recursos 1.000; gasto 1.020; déficit 20. Dependencia: 80% de los recursos son nacionales. Gasto de capital: 11,8% del total. Típico del NEA: baja correspondencia, predominio del gasto corriente.</p>" },
    { q:"Ejercicio. Estime los recursos con los tres métodos: recaudación 200, 240 y 280; crecimiento esperado del PBI nominal del 20%.", a:"<p>Automático: 280. Promedios: 240. Valuación directa: 280 × 1,2 = 336. Combinado: por ejemplo, promedio de los métodos ≈ 285.</p>" },
    { q:"Ejercicio. Con multiplicador 5, el Estado quiere aumentar la renta en 1.000. ¿Cuánto debe gastar? ¿Y si lo financia con impuestos equivalentes?", a:"<p>Gasto: 1.000 / 5 = <b>200</b>. Con presupuesto equilibrado (multiplicador 1) debería gastar <b>1.000</b> financiado con 1.000 de impuestos.</p>" },
    { q:"Ejercicio. Gasto corriente primario del año anterior 2.000; inflación prevista 25%; la provincia proyecta gastar 2.600. ¿Cumple la Ley 25.917?", a:"<p>Tope: 2.000 × 1,25 = 2.500. Proyecta 2.600: <b>no cumple</b> (excede en 100), salvo excepciones (equilibrio financiero previo: tope el PBI nominal).</p>" },
    { q:"Explique el presupuesto por programas y su utilidad para evaluar.", a:"<p>Organiza el gasto por objetivos y productos; vincula recursos, productos y resultados; permite medir eficiencia (costo por producto) y eficacia (metas), y asignar responsables.</p>" },
    { q:"Explique el presupuesto base cero con un ejemplo.", a:"<p>Cada programa se justifica desde cero. Ejemplo: un programa de becas no se presupuesta como el del año anterior más inflación, sino que se analiza si sigue siendo prioritario y cuánto cuesta lograr sus metas. Combate la inercia; es costoso de aplicar.</p>" },
    { q:"Explique la reconducción del presupuesto.", a:"<p>Si el presupuesto no se aprueba antes del inicio del ejercicio, rige el del año anterior (art. 27, Ley 24.156), con ajustes: se eliminan los créditos que no deben repetirse y los recursos ya utilizados, y se incluyen los servicios de la deuda.</p>" },
    { q:"Explique los tipos de control presupuestario.", a:"<p>Por el órgano: interno (SIGEN) y externo (AGN). Por el momento: previo, concomitante y posterior. Por el contenido: de legalidad y de gestión (eficacia, eficiencia, economía).</p>" },
    { q:"Explique la relación entre presupuesto, deuda e inflación.", a:"<p>El déficit financiero debe financiarse: con deuda (carga futura, crowding out, riesgo de insostenibilidad si r &gt; g) o con emisión (inflación, impuesto inflacionario regresivo). Por eso las reglas fiscales buscan limitar el déficit y el crecimiento del gasto.</p>" }
  ]
}
];

/* =================== UNIDAD XI =================== */
window.CURSO.simUnidadMas[11] = [
{
  intro: "Simulacro 2 de la Unidad XI.",
  vf: [
    { q:"En un Estado unitario hay un solo centro de poder fiscal.", v:true, exp:"Verdadero." },
    { q:"En una confederación los estados conservan la soberanía y delegan poco.", v:true, exp:"Verdadero." },
    { q:"Según la teoría, la estabilización macroeconómica conviene asignarla a los municipios.", v:false, exp:"Falso: al nivel central." },
    { q:"Los gobiernos locales conocen mejor las preferencias de su población.", v:true, exp:"Verdadero: fundamento de la descentralización." },
    { q:"El impuesto inmobiliario es adecuado para los gobiernos locales por su base inmóvil.", v:true, exp:"Verdadero." },
    { q:"El impuesto a la renta conviene asignarlo a los municipios.", v:false, exp:"Falso: es móvil, redistributivo y cíclico; conviene al nivel central." },
    { q:"Las transferencias condicionadas deben usarse en un fin determinado.", v:true, exp:"Verdadero." },
    { q:"La concurrencia como mecanismo de coordinación evita la doble imposición.", v:false, exp:"Falso: la genera." },
    { q:"La ley-convenio no puede ser modificada unilateralmente ni reglamentada.", v:true, exp:"Verdadero (art. 75 inc. 2)." },
    { q:"La coparticipación municipal es un mandato derivado del art. 123 CN.", v:true, exp:"Verdadero." }
  ],
  fill: [
    { q:"Los beneficios que una jurisdicción derrama a otras generan ______ de esos bienes.", resp:["subprovision","subprovisión"], sol:"subprovisión" },
    { q:"El autor de la idea de «votar con los pies» es ______.", resp:["tiebout"], sol:"Tiebout" },
    { q:"La brecha de capacidad fiscal entre provincias es el desequilibrio ______.", resp:["horizontal"], sol:"horizontal" },
    { q:"Las transferencias decididas caso por caso por el Ejecutivo son ______.", resp:["discrecionales"], sol:"discrecionales" },
    { q:"El mecanismo en que un nivel recauda y distribuye según pautas es la ______.", resp:["coparticipacion"], sol:"coparticipación" },
    { q:"La ley-convenio tiene al ______ como cámara de origen.", resp:["senado"], sol:"Senado" },
    { q:"El plazo constitucional para dictar el nuevo régimen de coparticipación vencía a fines de ______.", resp:["1996"], sol:"1996" },
    { q:"En la distribución primaria, el recupero del nivel relativo es del ______ %.", resp:["2","2%"], sol:"2%" },
    { q:"El Fondo de Aportes del Tesoro Nacional recibe el ______ % de la masa coparticipable.", resp:["1","1%"], sol:"1%" },
    { q:"El coeficiente de Corrientes en la distribución secundaria es ______ %.", resp:["3,86","3.86"], sol:"3,86%" }
  ],
  analisis: [
    { q:"Explique por qué la redistribución y la estabilización corresponden al nivel central.", a:"<p>Estabilización: requiere manejar la moneda y la macroeconomía, y los efectos se derraman entre jurisdicciones. Redistribución: si una jurisdicción redistribuye sola, los ricos se van y los pobres llegan (movilidad). La asignación de bienes públicos locales sí conviene descentralizarla.</p>" },
    { q:"Explique el teorema de Oates y sus supuestos.", a:"<p>Sin economías de escala ni externalidades interjurisdiccionales, es más eficiente que cada bien público local lo provea el nivel que abarca exactamente a sus beneficiarios, adaptándose a sus preferencias, que una provisión uniforme central.</p>" },
    { q:"Explique los desequilibrios vertical y horizontal.", a:"<p>Vertical: la Nación recauda más de lo que gasta y las provincias gastan más de lo que recaudan. Horizontal: diferencias de capacidad fiscal y necesidades entre provincias. Justifican transferencias de nivelación y la coparticipación.</p>" },
    { q:"Explique las modalidades de transferencias y sus efectos.", a:"<p>Condicionadas o no; con o sin contrapartida; con o sin límite; automáticas o discrecionales. No condicionadas: efecto renta. Condicionadas con contrapartida: efecto sustitución (incentivan el gasto deseado). Discrecionales: uso político, imprevisibilidad.</p>" },
    { q:"Explique los mecanismos de coordinación financiera.", a:"<p>Separación de fuentes, concurrencia, coparticipación, sobretasas o cuotas suplementarias, asignaciones globales, créditos o deducciones por impuestos pagados a otro nivel.</p>" },
    { q:"Explique la correspondencia fiscal y sus consecuencias cuando es baja.", a:"<p>Grado en que un nivel financia su gasto con recursos propios. Baja: se rompe el vínculo pago-recibo, se diluye la responsabilidad, se gasta de más, se presiona por transferencias (ilusión fiscal, problema de los recursos comunes).</p>" },
    { q:"Explique los requisitos del art. 75 inc. 2 CN.", a:"<p>Ley-convenio sobre la base de acuerdos; Senado como cámara de origen; mayoría absoluta; no modificable unilateralmente ni reglamentable; aprobación de las provincias; distribución equitativa y solidaria, con prioridad a la igualdad de oportunidades; no transferir servicios sin recursos; organismo fiscal federal.</p>" },
    { q:"Explique la distribución primaria y secundaria de la Ley 23.548.", a:"<p>Primaria: Nación 42,34%, provincias 54,66%, recupero del nivel relativo 2% (Buenos Aires, Chubut, Neuquén, Santa Cruz), ATN 1%. Secundaria: coeficientes fijos por provincia (Chaco 5,18%, Corrientes 3,86%).</p>" },
    { q:"Explique la competencia tributaria nociva.", a:"<p>Las jurisdicciones bajan impuestos o dan exenciones para atraer inversiones; en conjunto erosionan sus bases («carrera hacia el fondo») y terminan con menos recursos para los mismos servicios.</p>" },
    { q:"Explique la coparticipación municipal.", a:"<p>Cada provincia reparte con sus municipios recursos propios y de origen nacional, por ley: masa coparticipable, distribución primaria (provincia y municipios) y secundaria (población, partes iguales, NBI, eficiencia). Problemas: dependencia municipal, baja recaudación propia.</p>" }
  ]
},
{
  intro: "Simulacro 3 de la Unidad XI: con ejercicios.",
  vf: [
    { q:"Con masa coparticipable de 1.000, la Nación recibe 423,40 en la distribución primaria.", v:true, exp:"Verdadero (42,34%)." },
    { q:"Con masa de 1.000, el Fondo de ATN recibe 20.", v:false, exp:"Falso: recibe 10 (1%); el recupero recibe 20 (2%)." },
    { q:"Si una provincia financia el 30% de su gasto con recursos propios, tiene alta correspondencia fiscal.", v:false, exp:"Falso: es baja." },
    { q:"Una transferencia con contrapartida del 50% reduce a la mitad el costo para el gobierno local de cada peso gastado en ese fin.", v:true, exp:"Verdadero: efecto sustitución." },
    { q:"Si la Nación recauda el 75% de los tributos y ejecuta el 50% del gasto, hay desequilibrio vertical.", v:true, exp:"Verdadero." },
    { q:"Los coeficientes de distribución secundaria se ajustan cada año según la población.", v:false, exp:"Falso: son fijos e históricos." },
    { q:"Un aumento de la masa coparticipable beneficia a todas las provincias en proporción a sus coeficientes.", v:true, exp:"Verdadero." },
    { q:"Las detracciones previas a la masa coparticipable aumentan lo que reciben las provincias.", v:false, exp:"Falso: lo reducen." },
    { q:"Las asignaciones específicas son una excepción a la coparticipación prevista en la Constitución.", v:true, exp:"Verdadero (art. 75 inc. 3, por ley especial y tiempo determinado)." },
    { q:"Un municipio con baja recaudación propia depende más de la coparticipación provincial.", v:true, exp:"Verdadero." }
  ],
  fill: [
    { q:"Masa coparticipable de 3.000: provincias en la primaria $ ______.", resp:["1639,8","1.639,8","1639.8","1639,80"], sol:"1.639,80" },
    { q:"Con esa masa, el Chaco recibe aproximadamente $ ______.", resp:["84,94","84.94","84,9","84.9"], sol:"84,94" },
    { q:"Y Corrientes aproximadamente $ ______.", resp:["63,30","63.30","63,3","63.3"], sol:"63,30" },
    { q:"Masa de 3.000: la Nación recibe $ ______.", resp:["1270,2","1.270,2","1270.2","1270,20"], sol:"1.270,20" },
    { q:"Recursos propios 250 sobre gasto 1.000: correspondencia fiscal ______ %.", resp:["25","25%"], sol:"25%" },
    { q:"Transferencia con contrapartida 1 a 1: para gastar 200 en el fin, el gobierno local aporta $ ______.", resp:["100"], sol:"100" },
    { q:"Nación recauda 80 y gasta 50 de un total de 100: transfiere aproximadamente ______.", resp:["30"], sol:"30" },
    { q:"Si la masa crece de 1.000 a 1.200, lo que recibe el conjunto de provincias crece un ______ %.", resp:["20","20%"], sol:"20%" },
    { q:"Una detracción previa del 15% sobre una masa de 1.000 deja una masa a distribuir de ______.", resp:["850"], sol:"850" },
    { q:"Con esa masa de 850, las provincias reciben ______ (54,66%).", resp:["464,61","464.61","464,6"], sol:"464,61" }
  ],
  analisis: [
    { q:"Ejercicio. Masa coparticipable de 10.000. Calcule la distribución primaria y lo que reciben Chaco y Corrientes.", a:"<p>Nación 4.234; provincias 5.466; recupero 200; ATN 100. Chaco: 5.466 × 5,18% = <b>283,14</b>. Corrientes: 5.466 × 3,86% = <b>210,99</b>.</p>" },
    { q:"Ejercicio. Una detracción previa del 15% reduce la masa de 10.000. ¿Cuánto pierde el Chaco?", a:"<p>Masa: 8.500; provincias: 4.646,10; Chaco: 240,67. Pierde 283,14 − 240,67 = <b>42,47</b> (15%). Las detracciones reducen proporcionalmente lo que reciben las provincias.</p>" },
    { q:"Ejercicio. Una provincia gasta 1.200: recursos propios 240, coparticipación 800, ATN 100. Analice.", a:"<p>Recursos 1.140; déficit 60. Correspondencia fiscal: 240 / 1.200 = <b>20%</b>. Dependencia nacional: 900 / 1.140 = 79%. Los ATN (discrecionales) generan imprevisibilidad.</p>" },
    { q:"Ejercicio. La Nación ofrece $1 por cada $1 que un municipio gaste en alumbrado. El municipio gastaba 100 y decide gastar 160. ¿Cuánto pone cada uno?", a:"<p>Municipio 80, Nación 80. El municipio gasta 160 aportando menos que antes (80): la contrapartida abarata el gasto (efecto sustitución) e incentiva más alumbrado; parte se usa para liberar fondos propios (efecto renta).</p>" },
    { q:"Ejercicio. Dos provincias: A recauda 900 y necesita gastar 1.000; B recauda 300 y necesita gastar 1.000. ¿Qué tipo de desequilibrio hay y cómo se corrige?", a:"<p>Desequilibrio horizontal (distinta capacidad fiscal ante necesidades similares). Se corrige con transferencias de nivelación: B necesita 700 y A sólo 100. La coparticipación lo hace en parte con coeficientes que favorecen a las provincias de menor desarrollo.</p>" },
    { q:"Explique el teorema de Oates con un ejemplo.", a:"<p>El alumbrado de un barrio beneficia a sus vecinos: es más eficiente que lo decida y financie el municipio, según las preferencias locales, que una provisión uniforme nacional. La defensa, en cambio, beneficia a todo el país: corresponde a la Nación.</p>" },
    { q:"Explique el problema de los recursos comunes en el federalismo.", a:"<p>Si cada provincia gasta de un fondo común (coparticipación) financiado por todos, recibe todo el beneficio de su gasto pero soporta sólo una parte del costo: incentivo a gastar de más y presionar por más transferencias (ilusión fiscal).</p>" },
    { q:"Explique por qué la Ley 23.548 se considera transitoria.", a:"<p>Se dictó en 1988 como régimen transitorio y debía ser reemplazada por la ley-convenio que exige el art. 75 inc. 2 (antes de fines de 1996). Como nunca se dictó, sigue vigente, modificada por pactos fiscales y asignaciones específicas.</p>" },
    { q:"Explique las ventajas de la descentralización.", a:"<p>Adaptación a las preferencias; información; accountability; «votar con los pies» (Tiebout); competencia e innovación entre jurisdicciones.</p>" },
    { q:"Explique las críticas al régimen de coparticipación.", a:"<p>Baja correspondencia fiscal; coeficientes secundarios arbitrarios y desactualizados; multiplicidad de regímenes (detracciones, asignaciones, fondos); conflictividad permanente; deuda constitucional pendiente desde 1996.</p>" }
  ]
}
];
