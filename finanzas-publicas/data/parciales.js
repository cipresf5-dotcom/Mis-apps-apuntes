/* Primer Parcial (Unidades I a V) — actividades reales de la cátedra
   agrupadas por unidad/tema, con la respuesta correcta.
   Fuentes: parciales UNNE-FCE 1º Parcial ediciones 2022 (Fila A y B), 2023 y 2024. */
window.CURSO = window.CURSO || { unidades: [] };
window.CURSO.parcial1 = {
  titulo: "1º Parcial — Unidades I a V",
  intro: "Actividades reales tomadas en los primeros parciales de la cátedra (ediciones 2022 Fila A y B, 2023 y 2024), ordenadas por la unidad y el tema que abarcan. <strong>Las respuestas están elaboradas y verificadas según la teoría de la materia</strong> (no son la simple transcripción de lo resuelto por un alumno, que puede tener errores). Probá resolverlas antes de mirar la solución.",
  bloques: [
    {
      unidad: "I",
      titulo: "Fundamentos de la actividad financiera del Estado",
      actividades: [
        {
          tema: "Finalidad fiscal y extrafiscal (1.3)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Clasificar cada recurso según la finalidad que se estaría priorizando: <strong>fiscal</strong>, <strong>extrafiscal</strong> o <strong>ninguna de las dos</strong>.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Criterio:</strong> la finalidad es <em>fiscal</em> cuando el fin principal es <strong>recaudar</strong>; es <em>extrafiscal</em> cuando el fin principal es <strong>orientar conductas</strong> (desalentar o incentivar) más que recaudar.</p>
<table>
  <tr><th>Recurso</th><th>Finalidad</th></tr>
  <tr><td>Impuesto a las Ganancias</td><td>Fiscal</td></tr>
  <tr><td>Eco-tasa por ruidos molestos</td><td>Extrafiscal</td></tr>
  <tr><td>IVA</td><td>Fiscal</td></tr>
  <tr><td>Crédito subsidiado para incorporar tecnología que ayude a no contaminar</td><td>Ninguna de las dos <span class="muted">(es un gasto/subsidio, no un recurso tributario)</span></td></tr>
  <tr><td>Impuesto que grava el consumo de cigarrillos</td><td>Extrafiscal <span class="muted">(su fin es desalentar un consumo nocivo; conserva también un componente recaudatorio)</span></td></tr>
  <tr><td>Multa por hacer fuego en parques nacionales</td><td>Extrafiscal</td></tr>
</table>
<p class="muted"><strong>Desventajas del uso desmedido de la extrafiscalidad:</strong> erosiona la recaudación y la homogeneidad del sistema, dificulta el control y abre la puerta a grupos de presión.</p>
</details>`
        },
        {
          tema: "Evolución del pensamiento financiero (1.1)",
          fuente: "1º Parcial · todas las filas",
          html: `
<p class="tp-consigna">Unir cada escuela/teoría con su postulado.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Escuela / teoría</th><th>Postulado</th></tr>
  <tr><td>Mercantilismo</td><td>El objetivo fue defender la acumulación de dinero metálico, indispensable para el comercio y la industria.</td></tr>
  <tr><td>Fisiocracia</td><td>Impuesto único (a la tierra).</td></tr>
  <tr><td>Liberalismo clásico</td><td>Equilibrio presupuestario.</td></tr>
  <tr><td>Marginalismo</td><td>La riqueza sólo puede ser gravada con tributos cuando su utilidad para el gasto público es mayor que el empleo que de ella hacen los particulares.</td></tr>
  <tr><td>Keynesianismo</td><td>Elevación de impuestos en la época de auge y disminución de impuestos durante la depresión.</td></tr>
</table>
</details>`
        },
        {
          tema: "Fallos del mercado (1.5)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">a) ¿Cuándo se dice que el mercado es ineficiente? b) Características de los bienes públicos. c) ¿Qué son las externalidades? d) Al menos 2 razones por las que falla el Estado.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>a)</strong> Cuando no logra asignar eficientemente los recursos (no alcanza el óptimo de Pareto). Ocurre ante las <em>fallas del mercado</em>: bienes públicos, externalidades, mercados imperfectos/monopolios, información asimétrica, mercados incompletos, inequidad distributiva.</p>
<p><strong>b) Bienes públicos:</strong> <em>inapropiabilidad</em>; <em>consumo conjunto</em> (no rivalidad); <em>no exclusión</em> (surge el free rider); <em>no divisibilidad</em> de los beneficios.</p>
<p><strong>c) Externalidades:</strong> acciones de un individuo o empresa que afectan el bienestar de otros <em>sin</em> compensación vía precio. Pueden ser <strong>positivas</strong> o <strong>negativas</strong>; el Estado interviene con impuestos/subsidios correctivos y regulación.</p>
<p><strong>d) Fallos del Estado:</strong> información limitada; control limitado de la burocracia; control limitado de las respuestas del sector privado; limitaciones del proceso político (grupos de presión, miopía electoral).</p>
</details>`
        },
        {
          tema: "Teoremas de Pareto (1.4)",
          fuente: "1º Parcial · Fila A",
          html: `
<p class="tp-consigna">Según el 1er y 2º Teorema de Pareto: a) ¿Cómo se alcanzaría la asignación eficiente? b) ¿Estaría admitido que el Estado cumpla la función de distribución del ingreso? ¿Cuándo?</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>a)</strong> La asignación eficiente se logra cuando los recursos se distribuyen de manera que <em>no es posible mejorar la situación de una persona sin empeorar la de otra</em> (óptimo de Pareto); el <strong>1er teorema</strong> establece que el mercado en competencia perfecta alcanza ese óptimo.</p>
<p><strong>b)</strong> Sí. El <strong>2º teorema</strong> separa eficiencia de distribución: habilita al Estado a <em>redistribuir</em> las dotaciones iniciales y alcanzar igual eficiencia. El Estado interviene por razones de <strong>equidad</strong> o cuando el mercado no alcanza ese resultado (fallas).</p>
</details>`
        },
        {
          tema: "Bienes públicos puros (1.5)",
          fuente: "1º Parcial 2022 · Fila A",
          html: `
<p class="tp-consigna">Bienes Públicos Puros: indicar concepto, características y un ejemplo.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Concepto (John Due):</strong> su característica fundamental es la <em>inapropiabilidad</em>: una vez provistos, están disponibles por igual para todas las personas; el consumo por alguien no reduce la cantidad disponible para otros.</p>
<p><strong>Características:</strong></p>
<ul>
  <li><strong>Consumo conjunto</strong> (no rivalidad): una persona los disfruta sin reducir la satisfacción de otra.</li>
  <li><strong>No exclusión:</strong> no se puede discriminar a quien no paga → aparece el <em>free rider</em>.</li>
  <li><strong>No divisibilidad</strong> de los beneficios: el privado no podría cubrir sus costos, porque nadie estaría dispuesto a pagar.</li>
</ul>
<p><strong>Ejemplo:</strong> la <strong>defensa nacional</strong>.</p>
</details>`
        },
        {
          tema: "Bienes públicos preferentes (1.5)",
          fuente: "1º Parcial 2022 · Fila B",
          html: `
<p class="tp-consigna">Bienes Públicos Preferentes: indicar concepto, características y un ejemplo.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Concepto:</strong> son <em>bienes privados</em> que el Estado, por razones políticas, sociales u otras —incluyendo la existencia de externalidades— decide producir o hacer producir. Muchas veces son de <strong>utilización obligatoria</strong> por las externalidades que generan (p. ej. la vacunación ante enfermedades contagiosas, o los beneficios sociales de la educación).</p>
<p><strong>Características:</strong></p>
<ul>
  <li>El ciudadano no cuenta con libre elección de consumo.</li>
  <li>La decisión de consumo está a cargo del Estado.</li>
  <li>Importan beneficios externos y opera el principio de exclusión.</li>
  <li>Se satisfacen aun con la interferencia de las preferencias de los consumidores.</li>
  <li>Se penaliza el consumo de bienes considerados indeseables.</li>
</ul>
<p><strong>Ejemplo:</strong> la <strong>educación</strong> (o la vacunación).</p>
</details>`
        },
        {
          tema: "Monopolio natural: enfoques (1.5)",
          fuente: "1º Parcial 2022 · Fila A y B",
          html: `
<p class="tp-consigna">Monopolio Natural. Precisar el concepto del <strong>Enfoque Tradicional</strong> (Fila A) y del <strong>Enfoque Moderno</strong> (Fila B).</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Enfoque Tradicional:</strong> el monopolio natural aparece por la presencia de <em>costos medios y marginales decrecientes</em> y <em>economías de escala</em>; esto implica una <strong>falla de mercado</strong>. Para superarla se elaboran políticas públicas cuyo objetivo es lograr la eficiencia, imponiendo la condición <strong>P = Cmg</strong>.</p>
<p><strong>Enfoque Moderno (subaditividad de los costos):</strong> se verifica el monopolio natural cuando su función de costos es tal que <em>ninguna combinación de varias firmas puede producir una cantidad dada tan barato como si la proveyera un único oferente</em>. Se analiza además la <strong>sostenibilidad</strong> y la <strong>no desafiabilidad</strong> en el tiempo (si la entrada/salida puede hacerse sin costos, el monopolio es desafiable y ello disciplina su conducta de precios).</p>
</details>`
        },
        {
          tema: "Hacienda pública: distribución (1.2 / 1.4)",
          fuente: "1º Parcial 2022 · Fila A y B",
          html: `
<p class="tp-consigna">Marcar V o F y completar: 01) La función de redistribución del ingreso modifica la distribución que surge como consecuencia previa de la función de asignación. 04) Se entiende por justicia distributiva la que resulta de la dotación de factores y del libre juego de la oferta y la demanda.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>01) → F.</strong> Las tres funciones de la hacienda (asignación, distribución y estabilización) son <em>independientes</em>: la distribución del ingreso <strong>no</strong> surge "como consecuencia previa de la función de asignación", sino de la dotación de factores y del mercado. Por eso la afirmación es falsa.</p>
<p><strong>04) → V.</strong> La distribución que resulta de la dotación de factores que poseen los individuos y del libre juego de la oferta y la demanda es la que la teoría llama distribución "de mercado" o justicia distributiva (previa a la intervención redistributiva del Estado).</p>
<p><strong>02) La distribución de la renta depende de la dotación de ciertos factores:</strong> (a) las leyes del derecho sucesorio (capital recibido por herencia); (b) las condiciones innatas o genéticas (talento, inteligencia); (c) la educación recibida y su impacto en el capital humano.</p>
<p><strong>03) Mecanismos fiscales para una distribución equitativa:</strong></p>
<ul>
  <li>Esquema <strong>impuesto-transferencia</strong>: imposición progresiva a las familias de mayores ingresos + subvención a las de menor renta.</li>
  <li>Impuestos progresivos para financiar servicios públicos (viviendas sociales) que benefician a las familias de bajos ingresos.</li>
  <li>Impuestos sobre bienes consumidos por altos ingresos + subvenciones a productos consumidos por sectores de renta baja.</li>
</ul>
<p><strong>05) Supuestos de la teoría utilitaria:</strong> (a) es posible cuantificar la utilidad que cada individuo obtiene de la renta; (b) pueden establecerse comparaciones interpersonales de utilidad; (c) las políticas redistributivas no modifican la renta total que genera la economía.</p>
</details>`
        }
      ]
    },
    {
      unidad: "II",
      titulo: "Gastos públicos",
      actividades: [
        {
          tema: "Clasificación económica del gasto (2.1)",
          fuente: "1º Parcial 2022 · Fila A y B",
          html: `
<p class="tp-consigna">Completar: la clasificación económica del gasto público es aquella que permite identificar ______ de las transacciones que realiza el sector gobierno. a) la naturaleza del gasto; b) en qué se gasta; c) quién efectúa el gasto.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">Respuesta correcta: <strong>a) LA NATURALEZA DEL GASTO.</strong></p>
</details>`
        },
        {
          tema: "Clasificación por objeto del gasto (2.1)",
          fuente: "1º Parcial 2022 · Fila A y B",
          html: `
<p class="tp-consigna">Marcar la opción verdadera: A) responde a quiénes realizan el gasto y la región; B) responde a en qué se gasta y hace análisis macroeconómico; C) a diferencia de la clasificación económica, su utilidad reside en el análisis microeconómico del impacto del gasto sobre distintos mercados.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">Respuesta correcta: <strong>C.</strong> La clasificación <em>económica</em> (corriente/capital) sirve para el análisis <strong>macroeconómico</strong> (impacto sobre la demanda agregada); la clasificación <em>por objeto</em> permite ver qué bienes/servicios concretos adquiere el Estado y, con ello, el impacto <strong>microeconómico</strong> sobre los distintos mercados. A) describe la clasificación <em>institucional</em> y B) atribuye erróneamente el análisis macro a la clasificación por objeto.</p>
</details>`
        },
        {
          tema: "Causas del aumento del gasto (2.2)",
          fuente: "1º Parcial 2024 · Fila B",
          html: `
<p class="tp-consigna">Clasificar cada caso como causa de crecimiento <strong>real</strong> o <strong>aparente</strong> del gasto público.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Situación</th><th>Causa</th></tr>
  <tr><td>Empresas constructoras piden actualizar el costo de obras suspendidas por la inflación del período</td><td>Aparente</td></tr>
  <tr><td>Incremento de la esperanza de vida</td><td>Real</td></tr>
  <tr><td>El país acepta inmigrantes a causa de una guerra</td><td>Real</td></tr>
  <tr><td>Aumento del 100% a empleados públicos por una inflación anual del 230%</td><td>Aparente</td></tr>
</table>
<p class="muted">La causa <strong>aparente</strong> es ficticia (surge de mirar las cifras nominales, p. ej. por inflación); la <strong>real</strong> implica más bienes/servicios (aumento de población, territorio, funciones).</p>
</details>`
        },
        {
          tema: "Clasificadores del gasto (2.1)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Unir cada clasificación del gasto con la información que brinda y lo que comprende.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Clasificación</th><th>Información que brinda</th><th>Comprende</th></tr>
  <tr><td>Económica del gasto</td><td>Evaluar el impacto económico de las transacciones</td><td>Erogaciones corrientes / de capital</td></tr>
  <tr><td>Institucional</td><td>Quién gasta</td><td>Poder Ejecutivo, Legislativo, Judicial</td></tr>
  <tr><td>Por categorías programáticas</td><td>Qué se hace con los gastos públicos</td><td>Programa / subprograma / proyectos</td></tr>
  <tr><td>Por objeto del gasto</td><td>Qué adquiere el Estado</td><td>Bienes de consumo, servicios no personales</td></tr>
</table>
</details>`
        },
        {
          tema: "Clasificación económica: casos (2.1)",
          fuente: "1º Parcial 2022 · Fila A",
          html: `
<p class="tp-consigna">Teniendo en cuenta la clasificación económica, indicar la denominación de cada situación y, si corresponde, sumar. Caso 01: por Licitación Pública Nº 67/2022 del Ministerio de Salud del Chaco se adquirieron 10 ambulancias por $80.000.000.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">Las 10 ambulancias son un bien durable que incrementa el patrimonio del Estado → <strong>Gasto de capital: $80.000.000</strong> (no es gasto corriente).</p>
</details>`
        },
        {
          tema: "Clasificación por objeto: partidas (2.1)",
          fuente: "1º Parcial 2022 · Fila B",
          html: `
<p class="tp-consigna">Clasificación por objeto del gasto: conceptuar, características, efectos económicos (enumerar) e indicar cinco partidas.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Concepto:</strong> ordena el gasto según <em>en qué se gasta</em> (la naturaleza del bien o servicio adquirido), con un orden sistemático y homogéneo. <strong>Cinco partidas (incisos):</strong></p>
<ol>
  <li>Gastos en personal</li>
  <li>Bienes de consumo</li>
  <li>Servicios no personales</li>
  <li>Bienes de uso (de capital)</li>
  <li>Transferencias</li>
</ol>
<p class="muted">(Se agrega el servicio de la deuda.) Permite el análisis microeconómico del impacto del gasto.</p>
</details>`
        }
      ]
    },
    {
      unidad: "III",
      titulo: "Recursos del Estado",
      actividades: [
        {
          tema: "Recursos tributarios: concepto (3.1)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Definir a los tributos contemplando sus tres características identificatorias.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">Los tributos son <strong>prestaciones en dinero</strong> que el Estado exige, en ejercicio de su <strong>poder de imperio</strong> (coactividad), en virtud de una <strong>ley</strong> (principio de legalidad, <span class="cn">CN art. 17</span>), para cubrir el gasto público. Comprenden impuestos, tasas y contribuciones.</p>
</details>`
        },
        {
          tema: "Principios distributivos (3.2)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Especificar los principios distributivos por los cuales se pagan los impuestos, las tasas y las contribuciones de mejoras.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Tributo</th><th>Principio distributivo</th></tr>
  <tr><td>Impuestos</td><td>Capacidad contributiva (renta, patrimonio, consumo)</td></tr>
  <tr><td>Tasas</td><td>Contraprestación de un servicio público divisible</td></tr>
  <tr><td>Contribuciones de mejoras</td><td>Beneficio: el mayor valor del inmueble por la obra pública</td></tr>
</table>
</details>`
        },
        {
          tema: "Recursos parafiscales (3.6)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Enumerar 2 características de los recursos parafiscales.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<ul>
  <li>Son <strong>obligatorios</strong>, establecidos por ley (no se pueden evitar).</li>
  <li>Los recaudan <strong>entes públicos distintos del fisco central</strong> para su <em>financiamiento autónomo</em> (seguridad social, colegios profesionales, INTA/INTI); no ingresan a rentas generales.</li>
</ul>
</details>`
        },
        {
          tema: "Tasa: graduación y jurisprudencia (3.3)",
          fuente: "1º Parcial 2024 · Fila A",
          html: `
<p class="tp-consigna">Respecto de los montos que los contribuyentes deben pagar en concepto de tasa, indicar la opción correcta: 1) debe graduarse por el costo del servicio en relación a cada contribuyente; 2) sin prescindir de la relación con el costo del servicio, también puede graduarse conforme a la capacidad contributiva del obligado; 3) todas las anteriores.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">Opción correcta: <strong>2.</strong> La Corte admitió que la tasa, sin dejar de relacionarse con el costo del servicio, puede graduarse también según la <strong>capacidad contributiva</strong>. La relación costo-importe debe ser «razonable, prudente y discreta», no una igualdad matemática, y no puede resultar confiscatoria (<span class="cn">CN art. 17</span>).</p>
</details>`
        },
        {
          tema: "Contribución de mejoras (3.5)",
          fuente: "1º Parcial 2024 · Fila A",
          html: `
<p class="tp-consigna">En la contribución de mejoras el importe debe ser proporcionado al presunto beneficio. Para determinar esa proporción, las leyes deben definir tres elementos: especificarlos.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<ol>
  <li>La <strong>zona beneficiada</strong> por la obra pública.</li>
  <li>La <strong>parte del costo</strong> de la obra que se distribuye entre los beneficiarios (el monto no puede exceder el costo ni el mayor valor).</li>
  <li>La <strong>proporción o base de reparto</strong> de esa contribución entre los inmuebles beneficiados.</li>
</ol>
</details>`
        },
        {
          tema: "Recursos de la seguridad social (3.6)",
          fuente: "1º Parcial · Chaco",
          html: `
<p class="tp-consigna">Indicar el porcentaje de aporte personal para el personal docente que cumple funciones en la Provincia del Chaco.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Aporte personal: 14%</strong> sobre todas las remuneraciones (más las contribuciones patronales a cargo del empleador).</p>
</details>`
        }
      ]
    },
    {
      unidad: "IV",
      titulo: "Marco jurídico de la Hacienda Pública",
      actividades: [
        {
          tema: "Distribución constitucional de facultades (4.4)",
          fuente: "1º Parcial · todas las filas",
          html: `
<p class="tp-consigna">Completar el cuadro de distribución constitucional de facultades impositivas indicando los artículos de la CN.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Nivel</th><th>Facultades</th><th>CN</th></tr>
  <tr><td><strong>Nación</strong></td><td>Exclusivas: derechos <em>aduaneros</em>. De excepción: impuestos <em>directos</em> por tiempo determinado; indirectos internos en concurrencia con las provincias.</td><td><span class="cn">art. 4</span> <span class="cn">art. 75 inc. 1</span> <span class="cn">art. 75 inc. 2</span></td></tr>
  <tr><td><strong>Provincias</strong></td><td>Exclusivas y permanentes: impuestos <em>directos</em> (poder no delegado). Concurrentes: impuestos <em>indirectos</em>.</td><td><span class="cn">art. 121</span> <span class="cn">art. 126</span></td></tr>
  <tr><td><strong>Municipios</strong></td><td>Facultad <em>derivada</em>, autonomía atenuada: tasas, sellos, inmobiliario. Límites: sólo lo que la provincia delega.</td><td><span class="cn">art. 5</span> <span class="cn">art. 123</span></td></tr>
</table>
</details>`
        },
        {
          tema: "Facultad tributaria de los municipios (4.6)",
          fuente: "1º Parcial 2022/23",
          html: `
<p class="tp-consigna">a) ¿Por el art. 75 inc. 30 CN los municipios no pueden intervenir en la habilitación y control bromatológico de un bar que funciona en una Universidad Nacional? b) La Municipalidad de Resistencia crea un impuesto similar a Ganancias para sus vecinos, ¿está de acuerdo? c) V/F: la autonomía municipal (CN 1994) implica que todas las provincias deben definir su alcance de la misma forma. d) Límites a la facultad tributaria municipal.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>a)</strong> Los establecimientos de utilidad nacional (<span class="cn">art. 75 inc. 30</span>) admiten los poderes de policía e imposición provinciales y municipales <em>en tanto no interfieran</em> con el fin nacional. El control bromatológico (salubridad) no obstaculiza el fin de la Universidad → el municipio <strong>sí</strong> puede ejercerlo.</p>
<p><strong>b) No.</strong> El municipio no puede crear un impuesto <em>análogo</em> a uno nacional coparticipado (Ganancias): lo prohíbe el régimen de coparticipación (Ley 23.548) y excede su facultad derivada.</p>
<p><strong>c) → F.</strong> Cada provincia regla el alcance de la autonomía municipal en su constitución (<span class="cn">art. 123</span>); no tiene que ser de la misma forma.</p>
<p><strong>d) Límites:</strong> sólo las facultades que la provincia delega; no crear tributos análogos a los coparticipados; y respetar los principios constitucionales tributarios.</p>
</details>`
        },
        {
          tema: "Principios tributarios constitucionales (4.5)",
          fuente: "1º Parcial 2024 · Fila A",
          html: `
<p class="tp-consigna">Especificar en cada supuesto el principio constitucional que se estaría vulnerando (o si no corresponde).</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Supuesto</th><th>Principio vulnerado</th></tr>
  <tr><td>El intendente, por analogía y resolución, incluye una exención en la ordenanza tributaria</td><td>Legalidad (las exenciones se crean por ley, no por analogía)</td></tr>
  <tr><td>Impuesto sobre un inmueble que supera el 60% de la renta que produce</td><td>No confiscatoriedad</td></tr>
  <tr><td>La tasa de Salubridad supera el 50% del costo de la prestación</td><td>Proporcionalidad (razonable relación con el costo)</td></tr>
  <tr><td>Misiones establece un impuesto indirecto sobre ventas de bebidas alcohólicas, alícuota 60%</td><td>No corresponde (es facultad concurrente provincial válida)</td></tr>
  <tr><td>Multa por el 100% del valor de la moto</td><td>Proporcionalidad / razonabilidad</td></tr>
</table>
<p class="muted"><strong>Marcar las incorrectas (otra versión):</strong> «Los presidentes están habilitados para establecer beneficios tributarios» → <strong>incorrecta</strong> (viola legalidad); «El principio de proporcionalidad no admite impuestos progresivos» → <strong>incorrecta</strong>. «La igualdad permite discriminar según la capacidad contributiva» → correcta.</p>
</details>`
        },
        {
          tema: "Irretroactividad y efecto liberatorio (4.3)",
          fuente: "1º Parcial 2022",
          html: `
<p class="tp-consigna">¿Qué relación existe entre el principio de irretroactividad de la ley tributaria y el principio liberatorio del pago?</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">En materia tributaria la retroactividad sólo es posible <em>si no afecta derechos adquiridos</em> del contribuyente ni otros principios (legalidad, certeza). Cuando el contribuyente <strong>pagó el tributo a su vencimiento conforme a la norma vigente</strong>, ese pago tiene <strong>efecto liberatorio</strong>: lo libera de la obligación y crea un <em>derecho adquirido</em> que impide gravar retroactivamente ese hecho (protección de la propiedad, <span class="cn">CN art. 17</span>).</p>
</details>`
        },
        {
          tema: "Interpretación de la ley tributaria (4.3)",
          fuente: "1º Parcial 2022/24",
          html: `
<p class="tp-consigna">a) ¿Es admisible aplicar los usos y costumbres para excluir hechos imponibles gravados? b) ¿Qué método de interpretación es incompatible con el principio de legalidad? c) ¿En qué consiste el método de interpretación según la realidad económica?</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>a) No.</strong> Los usos y costumbres no pueden excluir hechos imponibles que la ley grava (rige la legalidad).</p>
<p><strong>b)</strong> La <strong>analogía</strong> (no puede crear ni extender hechos imponibles).</p>
<p><strong>c) Realidad económica:</strong> para interpretar la norma se atiende a la <em>sustancia económica</em> real de los actos, que prevalece sobre las formas jurídicas que las partes hayan adoptado (Ley 11.683, art. 2).</p>
</details>`
        }
      ]
    },
    {
      unidad: "V",
      titulo: "Teoría de la imposición (impuestos)",
      actividades: [
        {
          tema: "Estructura de un impuesto (5.1)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Especificar la estructura de un impuesto en general.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<ul>
  <li><strong>Hecho imponible:</strong> el hecho que, previsto por la ley, da origen a la obligación.</li>
  <li><strong>Sujeto activo:</strong> el Estado (quien exige el impuesto).</li>
  <li><strong>Sujeto pasivo:</strong> el obligado al pago.</li>
  <li><strong>Base imponible:</strong> la magnitud sobre la que se aplica la alícuota.</li>
  <li><strong>Alícuota / tasa:</strong> el porcentaje o monto que se aplica a la base.</li>
</ul>
<p class="muted">Un <em>impuesto general</em> afecta a todos independientemente de la actividad (ej.: IVA), a diferencia de uno específico.</p>
</details>`
        },
        {
          tema: "Teorías que fundamentan el tributo (5.1)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Describir sintéticamente teorías que fundamentan el pago de tributos.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<ul>
  <li><strong>Principio del beneficio:</strong> se debe pagar en proporción a los beneficios que se reciben del Estado.</li>
  <li><strong>Capacidad de pago (capacidad contributiva):</strong> los impuestos se distribuyen según la capacidad económica de cada persona.</li>
  <li><strong>Teoría del bienestar social:</strong> los tributos sirven para financiar bienes y servicios públicos que contribuyen al bienestar general.</li>
</ul>
<p class="muted">También se citan las teorías del <em>cambio</em> (precio) y de la <em>prima de seguro</em>.</p>
</details>`
        },
        {
          tema: "Clasificación de los impuestos (5.2)",
          fuente: "1º Parcial 2023/24 · Fila A",
          html: `
<p class="tp-consigna">Completar el cuadro de clasificación de los impuestos según su significado.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Clasificación</th><th>Significado</th></tr>
  <tr><td>Indirectos</td><td>Se trasladan al precio de los productos.</td></tr>
  <tr><td>Reales</td><td>Recaen sobre una cosa/actividad, independientemente de la persona (ej.: IVA).</td></tr>
  <tr><td>Proporcionales</td><td>La alícuota que se aplica es la misma, independientemente de la base imponible.</td></tr>
  <tr><td>Progresivos</td><td>La alícuota aumenta a medida que aumenta la base imponible.</td></tr>
  <tr><td>Regresivos</td><td>La alícuota disminuye conforme aumenta la base imponible.</td></tr>
  <tr><td>Generales</td><td>Recaen sobre todas las personas por igual, sin distinción.</td></tr>
</table>
</details>`
        }
      ]
    }
  ],

  /* ---- Modelos de parcial (formato hoja de examen) ---- */
  modelos: [
    {
      id: "2022a",
      titulo: "1º Parcial 2022 · Fila A",
      html: `
<div class="ex-head">UNNE · FCE — Finanzas Públicas — 1º Parcial 2022 — Fila A</div>
<div class="ex-datos">Apellido y Nombres: ....................................................... &nbsp; L.U. Nº ...........</div>

<div class="ex-unidad">Unidad Temática I</div>

<div class="ex-q"><span class="n">1.</span> Bienes Públicos Puros. Indicar el concepto, características y un ejemplo. <span class="pts">(7 p)</span></div>
<div class="ex-sol"><strong>Concepto (John Due):</strong> su nota fundamental es la inapropiabilidad. <strong>Características:</strong> consumo conjunto (no rivalidad); no exclusión (surge el <em>free rider</em>); no divisibilidad de los beneficios. <strong>Ejemplo:</strong> la defensa nacional.</div>

<div class="ex-q"><span class="n">2.</span> Monopolio Natural. Enfoques. Precisar únicamente el concepto del Enfoque Tradicional. <span class="pts">(6 p)</span></div>
<div class="ex-sol">Aparece por costos medios y marginales decrecientes y economías de escala → es una falla de mercado. Para superarla se aplican políticas públicas que buscan la eficiencia imponiendo la condición <strong>P = Cmg</strong>.</div>

<div class="ex-q"><span class="n">3.</span> Marcar Verdadero (V) o Falso (F) y/o completar. <span class="pts">(7 p)</span></div>
<table>
  <tr><th>N°</th><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>01</td><td>La función de redistribución del ingreso utiliza el proceso ingreso-gasto para modificar la distribución que surge como consecuencia previa de la función de asignación.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>04</td><td>Se entiende por justicia distributiva aquella que resulta de la dotación de los factores que poseen los individuos y del libre juego de la oferta y la demanda.</td><td><span class="ex-ans">V</span></td></tr>
</table>
<div class="ex-sol"><strong>02) Dotación de factores:</strong> leyes del derecho sucesorio (herencia); condiciones innatas/genéticas (talento); educación recibida. <strong>03) Mecanismos de distribución equitativa:</strong> impuesto-transferencia; impuestos progresivos para servicios/viviendas sociales; impuestos a bienes de altos ingresos + subvenciones a bienes de bajos ingresos. <strong>05) Supuestos de la teoría utilitaria:</strong> cuantificar la utilidad de la renta; comparaciones interpersonales de utilidad; las políticas redistributivas no modifican la renta total.</div>

<div class="ex-unidad">Unidad Temática II</div>

<div class="ex-q"><span class="n">1.</span> Complete: la clasificación económica del gasto público permite identificar ______ de las transacciones. a) la naturaleza del gasto; b) en qué se gasta; c) quién efectúa el gasto. <span class="pts">(3 p)</span></div>
<div class="ex-sol"><strong>a) La naturaleza del gasto.</strong></div>

<div class="ex-q"><span class="n">2.</span> Marque la opción verdadera sobre la clasificación por objeto del gasto (A / B / C). <span class="pts">(2 p)</span></div>
<div class="ex-sol"><strong>C.</strong> Su utilidad reside en el análisis microeconómico del impacto del gasto sobre los distintos mercados.</div>

<div class="ex-q"><span class="n">3.</span> Según la clasificación económica, indicar la denominación de cada situación y sumar si corresponde. <span class="pts">(10 p)</span></div>
<table>
  <tr><th>N°</th><th>Detalle</th><th>Corriente</th><th>De capital</th></tr>
  <tr><td>01</td><td>Licitación Pública Nº 67/2022 — Ministerio de Salud del Chaco: 10 ambulancias por $80.000.000</td><td></td><td><span class="ex-ans">80.000.000</span></td></tr>
</table>
<div class="ex-sol">Las ambulancias son bienes durables que incrementan el patrimonio → <strong>Gasto de capital: $80.000.000.</strong></div>`
    },
    {
      id: "2022b",
      titulo: "1º Parcial 2022 · Fila B",
      html: `
<div class="ex-head">UNNE · FCE — Finanzas Públicas — 1º Parcial 2022 — Fila B</div>
<div class="ex-datos">Apellido y Nombres: ....................................................... &nbsp; L.U. Nº ...........</div>

<div class="ex-unidad">Unidad Temática I</div>

<div class="ex-q"><span class="n">1.</span> Bienes Públicos Preferentes. Indicar el concepto, características y un ejemplo. <span class="pts">(7 p)</span></div>
<div class="ex-sol"><strong>Concepto:</strong> son bienes privados que el Estado, por razones políticas/sociales o por externalidades, decide producir o hacer producir; muchas veces de utilización obligatoria. <strong>Características:</strong> el ciudadano no tiene libre elección; la decisión de consumo está a cargo del Estado; importan beneficios externos; se penaliza el consumo de bienes indeseables. <strong>Ejemplo:</strong> la educación (o la vacunación).</div>

<div class="ex-q"><span class="n">2.</span> Monopolio Natural. Enfoques. Precisar únicamente el concepto del Enfoque Moderno. <span class="pts">(6 p)</span></div>
<div class="ex-sol"><strong>Subaditividad de costos:</strong> hay monopolio natural cuando ninguna combinación de varias firmas puede producir una cantidad dada tan barato como un único oferente. Se analizan la sostenibilidad y la no desafiabilidad en el tiempo.</div>

<div class="ex-q"><span class="n">3.</span> Marcar Verdadero (V) o Falso (F) y/o completar. <span class="pts">(7 p)</span></div>
<table>
  <tr><th>N°</th><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>01</td><td>La función de redistribución del ingreso modifica la distribución que surge como consecuencia previa de la función de asignación.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>04</td><td>Se entiende por justicia distributiva aquella que resulta de la dotación de los factores y del libre juego de la oferta y la demanda.</td><td><span class="ex-ans">V</span></td></tr>
</table>
<div class="ex-sol">Idéntico desarrollo que la Fila A (dotación de factores, mecanismos de distribución y supuestos de la teoría utilitaria).</div>

<div class="ex-unidad">Unidad Temática II</div>

<div class="ex-q"><span class="n">1.</span> Complete: la clasificación económica del gasto permite identificar ______ de las transacciones. <span class="pts">(3 p)</span></div>
<div class="ex-sol"><strong>La naturaleza del gasto.</strong></div>

<div class="ex-q"><span class="n">2.</span> Marque la opción verdadera sobre la clasificación por objeto del gasto. <span class="pts">(2 p)</span></div>
<div class="ex-sol"><strong>C.</strong></div>

<div class="ex-q"><span class="n">3.</span> Marque los conceptos correctos sobre las causas del aumento del gasto: A, B, C, D, E. <span class="pts">(2 p)</span></div>
<div class="ex-sol"><strong>Correctas: C y D.</strong> (C: la causa real puede darse por aumento de población o territorio; D: la causa aparente puede darse por la inflación.)</div>

<div class="ex-q"><span class="n">4.</span> Clasificación por objeto del gasto: conceptuar, características, efectos económicos (enumerar) e indicar cinco partidas. <span class="pts">(5 p)</span></div>
<div class="ex-sol"><strong>Cinco partidas:</strong> 1) gastos en personal; 2) bienes de consumo; 3) servicios no personales; 4) bienes de uso (de capital); 5) transferencias (+ servicio de la deuda).</div>`
    },
    {
      id: "libres2324",
      titulo: "1º Parcial (Libres) 2023/24 · Fila A — completo (Unidades I a V)",
      html: `
<div class="ex-head">UNNE · FCE — Finanzas Públicas — Régimen Común — 1º Parcial — 11-10-23 / Libres 29-02-24 — Fila A</div>
<div class="ex-datos">Apellido y Nombres: ....................................................... &nbsp; L.U. Nº ...........</div>
<div class="ex-nota">Puntuación: a cada respuesta completa y correcta, del punto 1 al 10, le corresponde 1 punto.</div>

<div class="ex-unidad">Unidad I — Fundamentos de la actividad financiera del Estado</div>
<div class="ex-q"><span class="n">1.</span> Teniendo en cuenta la finalidad fiscal y extrafiscal de las Finanzas Públicas: <strong>A)</strong> especificar, para cada recurso, qué finalidad se estaría priorizando; <strong>B)</strong> enumerar dos desventajas del uso desmedido de la finalidad extrafiscal. <span class="pts">(1 p)</span></div>
<table>
  <tr><th>Recurso</th><th>Finalidad</th></tr>
  <tr><td>Impuesto a las Ganancias</td><td><span class="ex-ans">Fiscal</span></td></tr>
  <tr><td>Eco-tasa (ruidos molestos)</td><td><span class="ex-ans">Extrafiscal</span></td></tr>
  <tr><td>IVA</td><td><span class="ex-ans">Fiscal</span></td></tr>
  <tr><td>Crédito subsidiado para tecnología que no contamine</td><td><span class="ex-ans">Ninguna (es un gasto/subsidio)</span></td></tr>
  <tr><td>Impuesto al consumo de cigarrillos</td><td><span class="ex-ans">Extrafiscal</span></td></tr>
  <tr><td>Multa por hacer fuego en parques nacionales</td><td><span class="ex-ans">Extrafiscal</span></td></tr>
</table>
<div class="ex-sol"><strong>B)</strong> Erosiona la recaudación y la homogeneidad del sistema tributario; dificulta el control y abre la puerta a grupos de presión (además, desfigura el instituto del tributo).</div>

<div class="ex-q"><span class="n">2.</span> Evolución del pensamiento financiero: unir con flechas cada escuela con su postulado. <span class="pts">(1 p)</span></div>
<table>
  <tr><th>Escuela</th><th>Postulado</th></tr>
  <tr><td>Mercantilismo</td><td><span class="ex-ans">Acumular dinero metálico, indispensable para el comercio y la industria.</span></td></tr>
  <tr><td>Fisiocracia</td><td><span class="ex-ans">Impuesto único.</span></td></tr>
  <tr><td>Liberalismo clásico</td><td><span class="ex-ans">Equilibrio presupuestario.</span></td></tr>
  <tr><td>Marginalismo</td><td><span class="ex-ans">La riqueza sólo se grava si su utilidad para el gasto público es mayor que el empleo privado.</span></td></tr>
  <tr><td>Keynesianismo</td><td><span class="ex-ans">Elevar impuestos en el auge y disminuirlos en la depresión.</span></td></tr>
</table>

<div class="ex-q"><span class="n">3.</span> Sobre fallos del mercado: A) ¿cuándo se dice que el mercado es ineficiente? B) características de los bienes públicos; C) ¿qué entiende por externalidades? D) al menos dos razones por las que falla el Estado. <span class="pts">(1 p)</span></div>
<div class="ex-sol"><strong>A)</strong> Cuando no logra asignar eficientemente los recursos (no alcanza el óptimo de Pareto). <strong>B)</strong> No rivalidad (consumo conjunto), no exclusión (free rider) y no divisibilidad. <strong>C)</strong> Acciones de un agente que afectan a otro sin compensación vía precio; pueden ser positivas o negativas. <strong>D)</strong> Información limitada; control limitado de la burocracia y de las respuestas privadas; limitaciones del proceso político.</div>

<div class="ex-q"><span class="n">4.</span> Gasto público: unir cada clasificación con la información que brinda y lo que comprende. <span class="pts">(1 p)</span></div>
<table>
  <tr><th>Clasificación</th><th>Información que brinda → comprende</th></tr>
  <tr><td>Económica del gasto</td><td><span class="ex-ans">Evaluar el impacto económico de las transacciones → erogaciones corrientes / de capital.</span></td></tr>
  <tr><td>Institucional</td><td><span class="ex-ans">Quién gasta → Poder Ejecutivo, Legislativo, Judicial.</span></td></tr>
  <tr><td>Por categorías programáticas</td><td><span class="ex-ans">Qué se hace con los gastos → programa / subprograma / proyectos.</span></td></tr>
  <tr><td>Por objeto del gasto</td><td><span class="ex-ans">Qué adquiere el Estado → bienes de consumo, servicios no personales.</span></td></tr>
</table>

<div class="ex-unidad">Unidad III — Recursos del Estado</div>
<div class="ex-q"><span class="n">5.</span> A) Dar una definición de recursos tributarios (tres características). B) Especificar los principios distributivos por los que se pagan impuestos, tasas y contribuciones de mejoras. C) Enumerar dos características de los recursos parafiscales. <span class="pts">(1 p)</span></div>
<div class="ex-sol"><strong>A)</strong> Prestaciones en dinero exigidas por el Estado, en ejercicio de su poder de imperio, en virtud de una ley, para cubrir el gasto público. <strong>B)</strong> Impuestos → capacidad contributiva; tasas → contraprestación de un servicio; contribuciones de mejoras → beneficio. <strong>C)</strong> Obligatorios por ley; recaudados por entes públicos para su financiamiento autónomo.</div>

<div class="ex-unidad">Unidad IV — Marco jurídico de la Hacienda Pública</div>
<div class="ex-q"><span class="n">6.</span> Distribución constitucional de facultades impositivas: completar el cuadro con los artículos de la CN. <span class="pts">(1 p)</span></div>
<table>
  <tr><th>Nivel</th><th>Facultades y artículos</th></tr>
  <tr><td>Nación</td><td><span class="ex-ans">Aduaneros exclusivos; directos por tiempo determinado; indirectos concurrentes (art. 4 · 75 inc. 1 y 2).</span></td></tr>
  <tr><td>Provincias</td><td><span class="ex-ans">Directos exclusivos (poder no delegado, art. 121); indirectos concurrentes.</span></td></tr>
  <tr><td>Municipios</td><td><span class="ex-ans">Facultad derivada; autonomía atenuada (art. 123).</span></td></tr>
</table>
<div class="ex-q"><span class="n">7.</span> Principios tributarios: especificar el principio constitucional que se estaría vulnerando en cada supuesto. <span class="pts">(1 p)</span></div>
<table>
  <tr><th>Supuesto</th><th>Principio</th></tr>
  <tr><td>Los presidentes se creen habilitados para establecer beneficios tributarios.</td><td><span class="ex-ans">Legalidad</span></td></tr>
  <tr><td>Un impuesto patrimonial que supera el 40% de la renta que produce.</td><td><span class="ex-ans">No confiscatoriedad</span></td></tr>
  <tr><td>La Tasa de Salubridad e Higiene supera el 80% del costo del servicio.</td><td><span class="ex-ans">Proporcionalidad</span></td></tr>
  <tr><td>Sólo los arquitectos y médicos son contribuyentes de Ganancias por el ejercicio profesional.</td><td><span class="ex-ans">Igualdad / generalidad</span></td></tr>
</table>

<div class="ex-unidad">Unidad V — Teoría de la imposición</div>
<div class="ex-q"><span class="n">8.</span> Especificar la estructura de un impuesto en general. <span class="pts">(1 p)</span></div>
<div class="ex-sol">Hecho imponible, sujeto activo, sujeto pasivo, base imponible y alícuota.</div>
<div class="ex-q"><span class="n">9.</span> Describir sintéticamente dos teorías que fundamentan el pago de tributos. <span class="pts">(1 p)</span></div>
<div class="ex-sol">Principio del beneficio (se paga según el beneficio recibido) y capacidad contributiva (se paga según la aptitud económica). También: teoría del cambio y de la prima de seguro.</div>
<div class="ex-q"><span class="n">10.</span> Clasificación de los impuestos: completar el significado. <span class="pts">(1 p)</span></div>
<table>
  <tr><th>Clasificación</th><th>Significado</th></tr>
  <tr><td>Indirectos</td><td><span class="ex-ans">Se trasladan al precio de los productos.</span></td></tr>
  <tr><td>Reales</td><td><span class="ex-ans">Recaen sobre la cosa/actividad, sin mirar la persona.</span></td></tr>
  <tr><td>Proporcionales</td><td><span class="ex-ans">Alícuota constante cualquiera sea la base.</span></td></tr>
  <tr><td>Progresivos</td><td><span class="ex-ans">La alícuota aumenta con la base.</span></td></tr>
  <tr><td>Regresivos</td><td><span class="ex-ans">La alícuota disminuye al aumentar la base.</span></td></tr>
  <tr><td>Generales</td><td><span class="ex-ans">Recaen sobre todos, sin distinción.</span></td></tr>
</table>`
    },
    {
      id: "2024",
      titulo: "1º Parcial 9-10-24 — completo (Unidades I a IV)",
      html: `
<div class="ex-head">UNNE · FCE — Finanzas Públicas — 1º Parcial — 9-10-24</div>
<div class="ex-datos">Apellido y Nombres: ....................................................... &nbsp; L.U. Nº ...........</div>
<div class="ex-nota">Puntuación: 2,5 puntos por unidad. Tiempo: 2 horas.</div>

<div class="ex-unidad">Unidad Temática I — Fundamentos de la actividad financiera</div>
<div class="ex-q"><span class="n">A.</span> Clasificar cada recurso según la finalidad priorizada.</div>
<table>
  <tr><th>Recurso</th><th>Finalidad</th></tr>
  <tr><td>Impuesto Inmobiliario rural</td><td><span class="ex-ans">Fiscal</span></td></tr>
  <tr><td>Eco-tasa (ruidos molestos)</td><td><span class="ex-ans">Extrafiscal</span></td></tr>
  <tr><td>IVA</td><td><span class="ex-ans">Fiscal</span></td></tr>
  <tr><td>Crédito subsidiado para tecnología que no contamine</td><td><span class="ex-ans">Ninguna</span></td></tr>
  <tr><td>Impuesto al consumo de cigarrillos</td><td><span class="ex-ans">Extrafiscal</span></td></tr>
  <tr><td>Multa por hacer fuego en parques nacionales</td><td><span class="ex-ans">Extrafiscal</span></td></tr>
</table>
<div class="ex-q"><span class="n">B.</span> Evolución del pensamiento financiero: unir cada escuela con su postulado.</div>
<div class="ex-sol">Mercantilismo → acumulación de metálico; Fisiocracia → impuesto único; Liberalismo clásico → equilibrio presupuestario; Marginalismo → gravar si la utilidad pública supera la privada; Keynesianismo → subir impuestos en el auge y bajarlos en la depresión.</div>
<div class="ex-q"><span class="n">C.</span> Fallos del mercado: 1) fundamentar por qué falla el mercado en el caso de mercados imperfectos y monopolios; 2) externalidades: definición, dos ejemplos (positiva y negativa) y formas de intervención del Estado.</div>
<div class="ex-sol"><strong>1)</strong> En mercados imperfectos/monopolios una sola empresa (o pocas) tiene poder de mercado: produce menos y cobra más que en competencia, generando una pérdida de eficiencia; el mercado no alcanza el óptimo y se justifica la regulación. <strong>2)</strong> Externalidad: acción de un agente que afecta a otro sin compensación por el precio. <em>Positiva</em>: educación/vacunación (el Estado subsidia o provee). <em>Negativa</em>: contaminación (el Estado aplica impuestos correctivos o regula).</div>

<div class="ex-unidad">Unidad Temática II — Gastos públicos</div>
<div class="ex-q"><span class="n">A.</span> Causas de crecimiento del gasto público: marcar si es real o aparente.</div>
<table>
  <tr><th>Situación</th><th>Causa</th></tr>
  <tr><td>Constructoras piden actualizar por inflación el costo de obras suspendidas.</td><td><span class="ex-ans">Aparente</span></td></tr>
  <tr><td>Incremento de la esperanza de vida.</td><td><span class="ex-ans">Real</span></td></tr>
  <tr><td>El gobierno acepta inmigrantes a causa de la guerra.</td><td><span class="ex-ans">Real</span></td></tr>
  <tr><td>Aumento del 100% a empleados públicos por inflación del 230%.</td><td><span class="ex-ans">Aparente</span></td></tr>
</table>
<div class="ex-q"><span class="n">B.</span> Completar la información que brinda cada clasificación del gasto.</div>
<table>
  <tr><th>Clasificación</th><th>Información que brinda</th></tr>
  <tr><td>Por finalidad y función</td><td><span class="ex-ans">Para qué se gasta (naturaleza de los servicios a la comunidad).</span></td></tr>
  <tr><td>Institucional</td><td><span class="ex-ans">Qué organismo realiza el gasto.</span></td></tr>
  <tr><td>Por categorías programáticas</td><td><span class="ex-ans">Aplicación de los recursos a programas / subprogramas / proyectos.</span></td></tr>
  <tr><td>Por objeto del gasto</td><td><span class="ex-ans">Qué bienes/servicios adquiere el Estado (orden sistemático).</span></td></tr>
</table>
<div class="ex-q"><span class="n">C.</span> Finalidades del gasto: unir cada finalidad/financiación con sus beneficiarios y efectos.</div>
<div class="ex-sol">Producción de bs y ss financiada con tributos progresivos → beneficia a personas de bajos ingresos con plena ocupación → mayor efecto distributivo. Financiada con tributos regresivos → beneficia a altos ingresos. Distribución del ingreso con crédito externo → efecto inflacionario / no expansivo.</div>
<div class="ex-q"><span class="n">D.</span> Por la interacción del multiplicador y el acelerador, describir al menos dos factores/medidas que aumenten la ocupación y la renta nacional.</div>
<div class="ex-sol">Aumentar el gasto público y/o reducir impuestos en la recesión (política fiscal expansiva) y fomentar la inversión privada. La interacción multiplicador-acelerador amplifica el efecto sobre la renta; al llegar al pleno empleo puede tornarse inflacionaria.</div>

<div class="ex-unidad">Unidad Temática III — Recursos del Estado</div>
<div class="ex-q"><span class="n">A.</span> Definir los tributos (tres características).</div>
<div class="ex-sol">Prestaciones en dinero exigidas por el Estado, por su poder de imperio, en virtud de una ley, para cubrir el gasto público.</div>
<div class="ex-q"><span class="n">B.</span> Tasas: indicar la opción correcta sobre su graduación (1, 2 ó 3).</div>
<div class="ex-sol"><strong>Opción 2:</strong> sin prescindir de la relación con el costo del servicio, la tasa puede graduarse también conforme a la capacidad contributiva del obligado.</div>
<div class="ex-q"><span class="n">C.</span> Contribución de mejoras: tres elementos que las leyes deben definir para determinar la proporción del beneficio.</div>
<div class="ex-sol">La zona beneficiada; la parte del costo de la obra a distribuir; y la proporción / base de reparto entre los beneficiarios.</div>
<div class="ex-q"><span class="n">D.</span> Recursos parafiscales: definición y características.</div>
<div class="ex-sol">Contribuciones obligatorias recaudadas por entes públicos distintos del fisco central para su financiamiento autónomo (seguridad social, colegios profesionales); no ingresan a rentas generales.</div>

<div class="ex-unidad">Unidad Temática IV — Marco jurídico</div>
<div class="ex-q"><span class="n">A.</span> Principios constitucionales: definición y alcance del principio de legalidad; elementos que integran el hecho imponible.</div>
<div class="ex-sol"><strong>Legalidad:</strong> no hay tributo sin ley del Congreso (art. 4, 17 y 75 CN); alcanza todos los elementos esenciales del tributo. <strong>Elementos del hecho imponible:</strong> aspecto material, personal (sujetos), espacial y temporal.</div>
<div class="ex-q"><span class="n">B.</span> Describir el método de interpretación según la realidad económica.</div>
<div class="ex-sol">Se atiende a la sustancia económica real de los actos, que prevalece sobre las formas jurídicas adoptadas por las partes (Ley 11.683, art. 2).</div>
<div class="ex-q"><span class="n">C.</span> Distribución constitucional de facultades impositivas (completar).</div>
<div class="ex-sol">Nación: aduaneros exclusivos; directos por tiempo determinado; indirectos concurrentes. Provincias: directos exclusivos (art. 121); indirectos concurrentes. Municipios: facultad derivada (art. 123).</div>
<div class="ex-q"><span class="n">D.</span> Principios tributarios: principio vulnerado en cada supuesto.</div>
<table>
  <tr><th>Supuesto</th><th>Principio</th></tr>
  <tr><td>El intendente, por analogía, incluye una exención en la ordenanza.</td><td><span class="ex-ans">Legalidad</span></td></tr>
  <tr><td>Impuesto sobre un inmueble que supera el 60% de la renta.</td><td><span class="ex-ans">No confiscatoriedad</span></td></tr>
  <tr><td>La tasa de Salubridad supera el costo del servicio.</td><td><span class="ex-ans">Proporcionalidad</span></td></tr>
  <tr><td>Misiones grava con impuesto indirecto (60%) las bebidas alcohólicas.</td><td><span class="ex-ans">No vulnera (facultad concurrente)</span></td></tr>
</table>`
    }
  ],

  /* ---- Multiple choice por unidad ---- */
  mc: [
    {
      unidad: "I", titulo: "Fundamentos de la actividad financiera",
      preguntas: [
        { q: "La característica de «no exclusión» de un bien público puro significa que:", ops: ["El consumo de una persona reduce el de otra", "No se puede impedir su uso a quien no paga", "El bien puede venderse por unidades", "Sólo lo consume quien paga"], correcta: 1, exp: "No exclusión: no se puede excluir a quien no paga, y por eso aparece el free rider." },
        { q: "El «free rider» (polizón) es:", ops: ["Quien paga de más", "Quien se beneficia del bien público sin pagar", "El Estado que provee el bien", "Un impuesto extrafiscal"], correcta: 1, exp: "Al no poder excluirse a nadie, algunos esperan que otros paguen y se benefician igual." },
        { q: "Un bien preferente o meritorio es:", ops: ["Un bien público puro", "Un bien privado que el Estado provee o subsidia porque conviene consumirlo más", "Un bien sin demanda", "Un bien de lujo"], correcta: 1, exp: "Son bienes privados (educación, salud) con externalidades positivas que el Estado promueve." },
        { q: "Según el óptimo de Pareto, una asignación es eficiente cuando:", ops: ["Todos tienen lo mismo", "No se puede mejorar a alguien sin empeorar a otro", "El Estado maximiza la recaudación", "Los precios son cero"], correcta: 1, exp: "Es la definición de eficiencia paretiana; no dice nada sobre la equidad." },
        { q: "Una externalidad negativa (por ejemplo, contaminación) hace que el mercado:", ops: ["Produzca de menos", "Produzca en exceso respecto del óptimo social", "No produzca nada", "Sea siempre eficiente"], correcta: 1, exp: "El costo social supera al privado, por eso se produce de más; se corrige con impuestos correctivos." },
        { q: "La finalidad extrafiscal de un tributo consiste en:", ops: ["Recaudar lo máximo posible", "Orientar conductas (desalentar o incentivar) más que recaudar", "Equilibrar el presupuesto", "Pagar la deuda pública"], correcta: 1, exp: "Ejemplo típico: impuestos altos al tabaco para desalentar su consumo." }
      ]
    },
    {
      unidad: "II", titulo: "Gastos públicos",
      preguntas: [
        { q: "La clasificación económica del gasto permite identificar:", ops: ["Quién gasta", "La naturaleza del gasto", "La región donde se gasta", "El organismo ejecutor"], correcta: 1, exp: "La económica identifica la naturaleza (corriente/capital/transferencia)." },
        { q: "Un gasto de capital es aquel que:", ops: ["Se agota con el uso", "Incrementa el patrimonio del Estado (infraestructura, bienes durables)", "Paga sueldos", "Es una transferencia sin contraprestación"], correcta: 1, exp: "Rutas, hospitales, maquinaria, rodados: aumentan el patrimonio estatal." },
        { q: "La Ley de Wagner sostiene que:", ops: ["El gasto público baja con el desarrollo", "A mayor renta nacional, mayor tamaño del sector público", "El gasto siempre es aparente", "El gasto no tiene límites jurídicos"], correcta: 1, exp: "Wagner: el crecimiento económico tiende a expandir el sector público." },
        { q: "Un aumento «aparente» del gasto público se produce por:", ops: ["Más población", "La inflación o pérdida de valor de la moneda", "Nuevas funciones del Estado", "Más territorio"], correcta: 1, exp: "El aumento nominal no implica más bienes y servicios: es aparente." },
        { q: "El multiplicador del gasto público depende de:", ops: ["La tasa de interés", "La propensión marginal a consumir", "El tipo de cambio", "La deuda externa"], correcta: 1, exp: "k = 1 / (1 − PMC); a mayor PMC, mayor efecto multiplicador." },
        { q: "La compra de 10 ambulancias por el Ministerio de Salud es un gasto:", ops: ["Corriente", "De capital", "De transferencia", "Financiero"], correcta: 1, exp: "Son bienes durables que incrementan el patrimonio del Estado." }
      ]
    },
    {
      unidad: "III", titulo: "Recursos del Estado",
      preguntas: [
        { q: "Un tributo se caracteriza por ser:", ops: ["Voluntario", "Una prestación en dinero exigida por ley y por el poder de imperio del Estado", "Un precio de mercado", "Una donación"], correcta: 1, exp: "Definición de Villegas: coactivo, por ley, para cubrir el gasto público." },
        { q: "La tasa se diferencia del impuesto porque:", ops: ["No requiere ley", "Retribuye un servicio público divisible prestado al contribuyente", "Es voluntaria", "Grava la renta"], correcta: 1, exp: "La tasa exige la prestación de un servicio individualizado; el impuesto no." },
        { q: "El principio que fundamenta la contribución de mejoras es:", ops: ["La capacidad contributiva", "El beneficio: el mayor valor del inmueble por la obra", "La contraprestación de un servicio", "La solidaridad"], correcta: 1, exp: "Se paga por la valorización que la obra pública produce en el inmueble." },
        { q: "Los recursos parafiscales:", ops: ["Ingresan a rentas generales", "Son obligatorios y los recaudan entes públicos para su financiamiento autónomo", "Son voluntarios", "Son precios públicos"], correcta: 1, exp: "Seguridad social, colegios profesionales, INTA/INTI: financiamiento propio." },
        { q: "El «impuesto inflacionario» es un recurso que:", ops: ["Requiere ley del Congreso", "Surge de la emisión monetaria y actúa como un tributo oculto", "Es una tasa", "Es una contribución de mejoras"], correcta: 1, exp: "No tiene ley: viola la legalidad y distorsiona la asignación de recursos." },
        { q: "Un recurso originario es:", ops: ["El impuesto a las Ganancias", "El que proviene del patrimonio o actividad del Estado (por ejemplo, regalías)", "El IVA", "Una multa"], correcta: 1, exp: "Originarios: rentas, precios, regalías. Derivados: los tributos." }
      ]
    },
    {
      unidad: "IV", titulo: "Marco jurídico de la Hacienda Pública",
      preguntas: [
        { q: "Según la CN, los derechos aduaneros corresponden:", ops: ["A las provincias", "Exclusivamente a la Nación", "A los municipios", "Son concurrentes"], correcta: 1, exp: "Los tributos aduaneros son exclusivos de la Nación (art. 4 y 75 inc. 1)." },
        { q: "Los impuestos directos son, en principio:", ops: ["Exclusivos de la Nación", "Facultad provincial (la Nación los usa por tiempo determinado)", "Municipales", "Prohibidos"], correcta: 1, exp: "Poder no delegado de las provincias (art. 121); la Nación por excepción (art. 75 inc. 2)." },
        { q: "El principio de legalidad tributaria significa que:", ops: ["El Poder Ejecutivo crea los tributos", "No hay tributo sin ley del Congreso", "Los tributos se crean por decreto", "Rigen los usos y costumbres"], correcta: 1, exp: "Nullum tributum sine lege (art. 4, 17 y 75 CN)." },
        { q: "La analogía en derecho tributario:", ops: ["Puede crear hechos imponibles", "No puede crear ni extender hechos imponibles", "Es el método principal de interpretación", "Se usa para conceder exenciones"], correcta: 1, exp: "Es incompatible con el principio de legalidad." },
        { q: "El principio de no confiscatoriedad se vincula con:", ops: ["La igualdad", "La protección de la propiedad (tope pretoriano cercano al 33%)", "La generalidad", "La irretroactividad"], correcta: 1, exp: "El tributo no puede absorber una parte sustancial de la propiedad o la renta (art. 17)." },
        { q: "La autonomía municipal (art. 123 CN):", ops: ["Es idéntica en todas las provincias", "Su alcance lo regla cada provincia", "Permite crear impuestos análogos a los nacionales", "No existe"], correcta: 1, exp: "Cada provincia asegura la autonomía municipal reglando su alcance." }
      ]
    },
    {
      unidad: "V", titulo: "Teoría de la imposición",
      preguntas: [
        { q: "Un impuesto indirecto se caracteriza por:", ops: ["No trasladarse", "Trasladarse al precio de los productos", "Gravar la renta personal", "Ser siempre progresivo"], correcta: 1, exp: "Ejemplos: IVA, Internos; los soporta el consumidor final vía precio." },
        { q: "Un impuesto es progresivo cuando:", ops: ["La alícuota es constante", "La alícuota aumenta al aumentar la base imponible", "La alícuota disminuye al aumentar la base", "Es un monto fijo"], correcta: 1, exp: "A mayor base, mayor alícuota (ej.: Ganancias personas humanas)." },
        { q: "Un impuesto real (objetivo):", ops: ["Considera la situación personal del contribuyente", "Grava una cosa o actividad sin atender a la persona", "Siempre es directo", "Admite deducciones personales"], correcta: 1, exp: "Ejemplo: el IVA o el Inmobiliario; no miran al sujeto." },
        { q: "El hecho imponible es:", ops: ["La alícuota", "El presupuesto de hecho definido por la ley cuya realización genera la obligación", "El sujeto pasivo", "La base imponible"], correcta: 1, exp: "Concepto de Jarach: al realizarse el hecho previsto por la ley, nace la obligación." },
        { q: "Un impuesto proporcional:", ops: ["Aumenta la alícuota con la base", "Aplica una alícuota constante cualquiera sea la base", "Es regresivo", "Es un monto fijo"], correcta: 1, exp: "Ejemplo: el IVA con alícuota del 21% sobre cualquier monto." },
        { q: "La teoría de la capacidad contributiva sostiene que:", ops: ["Se paga según el beneficio recibido", "Se paga según la aptitud económica de cada uno", "Todos pagan lo mismo", "No se pagan impuestos"], correcta: 1, exp: "La capacidad se manifiesta en la renta, el patrimonio y el consumo." }
      ]
    }
  ]
};

/* =====================================================================
   SEGUNDO PARCIAL — Unidades VI a XI
   ===================================================================== */
window.CURSO.parcial2 = {
  titulo: "2º Parcial — Unidades VI a XI",
  intro: "Actividades del segundo parcial de la cátedra (imposición sobre la renta, el patrimonio y el consumo; crédito y deuda pública; presupuesto y federalismo fiscal). <strong>Las respuestas están verificadas según la teoría de la materia.</strong> Probá resolverlas antes de mirar la solución.",
  bloques: [
    {
      unidad: "VI", titulo: "Imposición sobre la renta",
      actividades: [
        { tema: "Teorías de la renta (6.1)", fuente: "2º Parcial · teoría", html: `
<p class="tp-consigna">Clasificar los tipos de ingreso según las teorías de la renta (fuente / incremento patrimonial + consumo / Irving Fisher).</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Teoría</th><th>Qué grava</th></tr>
  <tr><td><strong>Renta-producto</strong> (de la fuente)</td><td>El producto neto y periódico de una fuente permanente. Deja fuera plusvalías, herencias y ganancias eventuales.</td></tr>
  <tr><td><strong>Incremento patrimonial neto + consumo</strong> (Haig-Simons)</td><td>Todo aumento del patrimonio del período más el consumo; incluye plusvalías, herencias y ganancias de capital.</td></tr>
  <tr><td><strong>Irving Fisher</strong></td><td>El flujo de servicios efectivamente consumidos; no grava el ahorro.</td></tr>
</table>
<p class="muted">La conceptualización de la renta como «incremento patrimonial neto más consumo» es el <em>concepto económico</em>: se grava según lo que se considera revelador de la capacidad contributiva.</p>
</details>` },
        { tema: "Impuesto a la renta personal y societaria (6.3 / 6.6)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Marcar V o F sobre las características del impuesto a la renta de personas físicas y sociedades.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">• El impuesto a las personas físicas es personal y aplica alícuota <em>proporcional</em> → <strong>F</strong> (es <em>progresiva</em>).<br>
• El impuesto a las personas físicas aplica tasas progresivas y contempla un mínimo no imponible → <strong>V</strong>.<br>
• El impuesto a las sociedades aplica alícuota proporcional y no admite deducciones personales de los directivos → <strong>V</strong>.</p>
<p class="muted">El sistema argentino de imposición a la renta es <strong>mixto</strong> (categorías + base global con deducciones y escala progresiva).</p>
</details>` }
      ]
    },
    {
      unidad: "VII", titulo: "Imposición sobre el patrimonio",
      actividades: [
        { tema: "Aspectos negativos de los tributos patrimoniales (7.1)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Describir dos aspectos negativos vinculados con la aplicación de los tributos patrimoniales.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<ul>
  <li>Problemas de <strong>valuación</strong> de los bienes (mantener valuaciones fiscales actualizadas).</li>
  <li>Problemas de <strong>ocultación</strong> de los bienes.</li>
  <li>Problemas de <strong>iliquidez</strong> (grava riqueza, no ingresos líquidos).</li>
  <li><strong>Doble imposición</strong> según los criterios jurisdiccionales de vinculación del sujeto con la materia gravada.</li>
</ul>
</details>` },
        { tema: "Rasgos de los impuestos patrimoniales (7.2 / 7.6)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Marcar las afirmaciones verdaderas sobre los impuestos al patrimonio.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">• Aplican alícuotas progresivas altas → <strong>F</strong>.<br>
• Son de baja recaudación → <strong>V</strong>.<br>
• Son fuentes importantes de recaudación para las provincias y municipios → <strong>V</strong>.<br>
• El patrimonio es una base presunta adecuada para tributar el impuesto a la renta → <strong>F</strong>.</p>
<p class="muted">Gravar el patrimonio <em>neto</em> (descontando deudas) es más equitativo que el bruto. El impuesto a la herencia fue derogado a nivel nacional (1976) y hoy es facultad provincial.</p>
</details>` },
        { tema: "Justificación de los tributos patrimoniales (7.1)", fuente: "2º Parcial 2023", html: `
<p class="tp-consigna">Identificar, según la ventaja señalada, la justificación del impuesto patrimonial (económica, de administración tributaria o de equidad).</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Ventaja / afirmación</th><th>Justificación</th></tr>
  <tr><td>Desalienta la adquisición de bienes improductivos</td><td>Económica (eficiencia)</td></tr>
  <tr><td>Es neutral en relación al riesgo</td><td>Económica (eficiencia)</td></tr>
  <tr><td>Es un adecuado complemento del impuesto a la renta a nivel federal</td><td>De administración tributaria (control cruzado)</td></tr>
  <tr><td>Impulsa la coordinación de las administraciones tributarias nacionales y provinciales</td><td>De administración tributaria</td></tr>
  <tr><td>Grava los rendimientos psíquicos / la capacidad de pago</td><td>De equidad</td></tr>
</table>
</details>` }
      ]
    },
    {
      unidad: "VIII", titulo: "Imposición sobre el consumo",
      actividades: [
        { tema: "Clasificación de los impuestos al consumo (8.2)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Completar la clasificación de los impuestos al consumo.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Criterio</th><th>Clases</th></tr>
  <tr><td>Según pueda deducirse el impuesto pagado en la etapa anterior</td><td>Acumulativos / No acumulativos</td></tr>
  <tr><td>Según grave la inversión o no</td><td>A la renta bruta / Al consumo</td></tr>
  <tr><td>Según sea una suma fija o un % del precio</td><td>Unitarios (específicos) / Ad-valorem</td></tr>
</table>
</details>` },
        { tema: "IVA: clasificación teórica (Jorge Macón) (8.3)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Completar la clasificación teórica del IVA según Jorge Macón.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Según…</th><th>Tipos</th></tr>
  <tr><td>Forma de liquidación</td><td>Por adición o por sustracción</td></tr>
  <tr><td>Forma de computar el crédito</td><td>Base contra base / Impuesto contra impuesto</td></tr>
  <tr><td>Tratamiento de los bienes de capital</td><td>Tipo producto / tipo renta / tipo consumo</td></tr>
  <tr><td>Tratamiento de las exportaciones</td><td>Origen / destino</td></tr>
</table>
<p class="muted">El IVA argentino es tipo <strong>consumo</strong> (deduce todo el bien de capital), <strong>impuesto contra impuesto</strong> (débito − crédito) y país de <strong>destino</strong> (grava importaciones, exime exportaciones).</p>
</details>` },
        { tema: "IVA vs. Ingresos Brutos y regresividad (8.3)", fuente: "2º Parcial 2023", html: `
<p class="tp-consigna">Completar: características de un impuesto tipo IVA y de uno tipo Ingresos Brutos, y medidas para atenuar la regresividad que el tributo al consumo impone al sistema.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<table>
  <tr><th>Concepto</th><th>Respuesta</th></tr>
  <tr><td>Impuesto tipo IVA</td><td>Real, indirecto, general; recae sobre múltiples etapas pero <strong>sin</strong> efecto acumulativo ni piramidal; proporcional.</td></tr>
  <tr><td>Impuesto tipo Ingresos Brutos</td><td>Real, indirecto, proporcional; <strong>con</strong> efecto acumulativo y piramidal (en cascada).</td></tr>
  <tr><td>Medidas para atenuar la regresividad</td><td>Incluir <strong>exenciones</strong> a los bienes de primera necesidad; y elevar el <strong>mínimo no imponible</strong> del impuesto a la renta para dejar fuera a los sujetos de menor capacidad contributiva.</td></tr>
</table>
</details>` }
      ]
    },
    {
      unidad: "IX", titulo: "Crédito y deuda pública",
      actividades: [
        { tema: "Origen de la deuda pública (9.1)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Marcar la respuesta correcta: la deuda pública puede originarse en…</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Todas las anteriores</strong>: emisión de títulos/bonos de largo y mediano plazo; Letras del Tesoro cuyo vencimiento supere el ejercicio; contratación de préstamos; avales, fianzas y garantías cuyo vencimiento supere el ejercicio; consolidación, conversión y renegociación de otras deudas.</p>
<p class="muted">Distinguir: <em>crédito público</em> (aptitud para endeudarse) → <em>empréstito</em> (la operación) → <em>deuda</em> (la obligación). Toda operación requiere autorización legal (Ley 24.156).</p>
</details>` },
        { tema: "Deuda interna vs. externa (9.3)", fuente: "2º Parcial · teoría", html: `
<p class="tp-consigna">¿Por qué la deuda externa es más riesgosa que la interna?</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">En la deuda <strong>interna</strong> el pago es una transferencia entre residentes («nos la debemos a nosotros mismos»), sin reducir la riqueza agregada. En la <strong>externa</strong>, al pagarla <strong>salen divisas reales</strong> del país (transferencia de riqueza al exterior y presión sobre la balanza de pagos), y genera dependencia y vulnerabilidad ante shocks de tipo de cambio y tasa internacional.</p>
</details>` }
      ]
    },
    {
      unidad: "X", titulo: "Presupuesto público",
      actividades: [
        { tema: "Ejecución del gasto y cuenta de inversión (10.4)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Etapas de la ejecución del gasto y órgano que elabora la Cuenta de Inversión.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Etapas del gasto:</strong> compromiso → devengado → pago. El <em>compromiso</em> requiere: origen de una relación jurídica con terceros, intervención de un funcionario competente, existencia de crédito presupuestario y su afectación (preventiva), e identificación de la persona.</p>
<p><strong>Cuenta de Inversión:</strong> la elabora la <strong>Contaduría General de la Nación</strong>; se presenta al Congreso <strong>antes del 30 de junio</strong>; el informe técnico lo produce la <strong>AGN</strong>; la aprueba el <strong>Poder Legislativo</strong>.</p>
</details>` },
        { tema: "Principio de equilibrio (10.3)", fuente: "2º Parcial 2022 · Fila B", html: `
<p class="tp-consigna">Marcar V o F sobre el principio de equilibrio presupuestario.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp">• Implica que puede haber déficit porque se debe gastar todo lo autorizado → <strong>F</strong>.<br>
• Habilita a ejecutar todo el presupuesto en el primer trimestre → <strong>F</strong>.<br>
• Al aprobarse el presupuesto, los gastos deben ser iguales a los recursos → <strong>V</strong>.<br>
• No está contemplado en la Ley 24.156 → <strong>F</strong>.</p>
<p class="muted">El presupuesto es una <strong>ley formal</strong> (autoriza y limita gastos). Si no se aprueba a tiempo, rige el del año anterior (<em>reconducción</em>, art. 27 Ley 24.156).</p>
</details>` }
      ]
    },
    {
      unidad: "XI", titulo: "Federalismo fiscal",
      actividades: [
        { tema: "Centralizar / descentralizar (11.1)", fuente: "2º Parcial · teoría", html: `
<p class="tp-consigna">¿Qué funciones conviene centralizar y cuáles descentralizar?</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Estabilización y distribución → Nación</strong> (manejo macro; evita la competencia entre jurisdicciones). <strong>Asignación de bienes públicos locales → niveles subnacionales</strong> (conocen mejor las preferencias de su población).</p>
</details>` },
        { tema: "Coparticipación (11.5)", fuente: "2º Parcial · teoría", html: `
<p class="tp-consigna">Distribución primaria y secundaria; base constitucional de la coparticipación.</p>
<details class="tp-toggle"><summary>Ver respuesta</summary>
<p class="tp-resp"><strong>Primaria:</strong> reparto Nación vs. conjunto de provincias. <strong>Secundaria:</strong> entre las provincias. <strong>Base:</strong> <span class="cn">art. 75 inc. 2</span> CN: ley-convenio, con el <strong>Senado</strong> como cámara de origen, mayoría absoluta, no modificable unilateralmente; rige la transitoria Ley 23.548.</p>
<p class="muted"><strong>Desequilibrio vertical:</strong> brecha entre lo que un nivel recauda y gasta. <strong>Horizontal:</strong> diferencias entre jurisdicciones del mismo nivel. La <em>correspondencia fiscal</em> es baja en Argentina porque las provincias gastan con fondos que recauda la Nación.</p>
</details>` }
      ]
    }
  ],

  modelos: [
    {
      id: "2022b2",
      titulo: "2º Parcial 2022 · Fila B — completo (Unidades VI a X)",
      html: `
<div class="ex-head">UNNE · FCE — Finanzas Públicas — 2º Parcial — 14-11-2022 — Fila B</div>
<div class="ex-datos">Apellido y Nombres: ....................................................... &nbsp; L.U. Nº ...........</div>

<div class="ex-unidad">Unidad VI — Imposición sobre la renta (2,5 p)</div>
<div class="ex-q"><span class="n">1.</span> Consignar V o F: la renta según la definición «ingreso» o del «incremento patrimonial neto más el consumo» (concepto económico) depende de lo que se considere revelador de la capacidad contributiva.</div>
<div class="ex-sol"><span class="ex-ans">VERDADERO.</span> Es el «concepto económico» o del acrecentamiento: se grava según lo que se quiere considerar revelador de la capacidad contributiva.</div>
<div class="ex-q"><span class="n">2.</span> Marcar las opciones correctas sobre el impuesto a las rentas de personas físicas y sociedades.</div>
<table>
  <tr><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>a) Personas físicas: personal y con alícuota proporcional.</td><td><span class="ex-ans">F (es progresiva)</span></td></tr>
  <tr><td>b) Personas físicas: tasas progresivas y con mínimo no imponible.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>d) Sociedades: alícuota proporcional, sin deducciones personales de los directivos.</td><td><span class="ex-ans">V</span></td></tr>
</table>

<div class="ex-unidad">Unidad VII — Imposición sobre el patrimonio (1,5 p)</div>
<div class="ex-q"><span class="n">3.</span> Describir 2 aspectos negativos de los tributos patrimoniales.</div>
<div class="ex-sol">Problemas de valuación; de ocultación; de iliquidez; y doble imposición según criterios jurisdiccionales.</div>
<div class="ex-q"><span class="n">4.</span> V o F: «según el sistema de integración parcial se grava el patrimonio individual con alícuotas progresivas y en su declaración no agrega la participación en empresas».</div>
<div class="ex-sol"><span class="ex-ans">FALSO.</span> Eso describe el sistema de <em>no integración</em> (separación).</div>
<div class="ex-q"><span class="n">5.</span> Marcar las verdaderas.</div>
<table>
  <tr><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>a) Los impuestos al patrimonio aplican alícuotas progresivas altas.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>b) Son de baja recaudación.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>c) Son fuentes importantes para provincias y municipios.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>d) El patrimonio es base presunta adecuada para tributar la renta.</td><td><span class="ex-ans">F</span></td></tr>
</table>

<div class="ex-unidad">Unidad VIII — Imposición sobre el consumo (1 p)</div>
<div class="ex-q"><span class="n">6.</span> Completar la clasificación de los impuestos al consumo.</div>
<table>
  <tr><th>Criterio</th><th>Clases</th></tr>
  <tr><td>Según pueda deducirse el impuesto pagado antes</td><td><span class="ex-ans">Acumulativos / No acumulativos</span></td></tr>
  <tr><td>Según grave la inversión o no</td><td><span class="ex-ans">A la renta bruta / Al consumo</span></td></tr>
  <tr><td>Según suma fija o % del precio</td><td><span class="ex-ans">Unitarios / Ad-valorem</span></td></tr>
</table>
<div class="ex-q"><span class="n">7.</span> IVA: clasificación teórica según Jorge Macón.</div>
<table>
  <tr><th>Según…</th><th>Tipos</th></tr>
  <tr><td>Forma de liquidación</td><td><span class="ex-ans">Por adición o sustracción</span></td></tr>
  <tr><td>Forma de computar el crédito</td><td><span class="ex-ans">Base contra base / impuesto contra impuesto</span></td></tr>
  <tr><td>Tratamiento de los bienes de capital</td><td><span class="ex-ans">Tipo producto / renta / consumo</span></td></tr>
  <tr><td>Tratamiento de las exportaciones</td><td><span class="ex-ans">Origen / destino</span></td></tr>
</table>

<div class="ex-unidad">Unidad IX — Crédito y deuda pública (1 p)</div>
<div class="ex-q"><span class="n">8.</span> Marcar la respuesta correcta: la deuda pública puede originarse en… (a–f).</div>
<div class="ex-sol"><span class="ex-ans">f) Todas las opciones anteriores</span> (títulos/bonos, Letras del Tesoro, préstamos, avales, consolidación/conversión/renegociación).</div>
<div class="ex-q"><span class="n">9.</span> V o F: «la Oficina Nacional de Presupuesto tiene competencia para participar en la formulación de los aspectos crediticios de la política financiera».</div>
<div class="ex-sol"><span class="ex-ans">FALSO.</span> Esa competencia es de la <strong>Oficina Nacional de Crédito Público</strong>.</div>

<div class="ex-unidad">Unidad X — Presupuesto público (4 p)</div>
<div class="ex-q"><span class="n">11.</span> Proceso presupuestario: atribuciones de los órganos de gobierno.</div>
<table>
  <tr><th>Órgano</th><th>Facultad</th><th>Norma</th></tr>
  <tr><td>Poder Ejecutivo</td><td>Elabora el anteproyecto y lo presenta al Poder Legislativo.</td><td><span class="ex-ans">CN art. 99 inc. 10; art. 100 inc. 6 y 7</span></td></tr>
  <tr><td>Poder Legislativo</td><td>Control preventivo, aprueba, control concomitante y posterior.</td><td><span class="ex-ans">CN art. 75 inc. 8; art. 100 inc. 11</span></td></tr>
</table>
<div class="ex-q"><span class="n">12.</span> Ejecución: requisitos de la etapa de compromiso.</div>
<div class="ex-sol">Origen de una relación jurídica con terceros; intervención de un funcionario competente; existencia de crédito presupuestario y su afectación (preventiva); identificación de la persona.</div>
<div class="ex-q"><span class="n">13.</span> Aprobación de la Cuenta de Inversión.</div>
<div class="ex-sol">La elabora la <span class="ex-ans">Contaduría General de la Nación</span>; se presenta <span class="ex-ans">antes del 30 de junio</span>; informe técnico de la <span class="ex-ans">AGN</span>; la aprueba el <span class="ex-ans">Poder Legislativo</span>.</div>
<div class="ex-q"><span class="n">14.</span> Principios presupuestarios (equilibrio): V/F.</div>
<table>
  <tr><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>Puede haber déficit porque se debe gastar todo lo autorizado.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>Habilita a ejecutar todo el presupuesto en el primer trimestre.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>Al aprobarse, los gastos deben ser iguales a los recursos.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>El órgano rector debe hacer autorizaciones parciales para la ejecución.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>No está contemplado en la Ley 24.156.</td><td><span class="ex-ans">F</span></td></tr>
</table>`
    },
    {
      id: "2024b",
      titulo: "2º Parcial 2024 · completo (Unidades V a X)",
      html: `
<div class="ex-head">UNNE · FCE — Finanzas Públicas — 2º Parcial — 13-11-24</div>
<div class="ex-datos">Apellido y Nombres: ....................................................... &nbsp; L.U. Nº ...........</div>
<div class="ex-nota">Puntuación: V (1,5) · VI (2,5) · VII (2,5) · VIII (1,5) · IX (1) · X (1). Tiempo: 2 horas.</div>

<div class="ex-unidad">Unidad V — La teoría de la imposición</div>
<div class="ex-q"><span class="n">a)</span> Impuesto: definición, estructura (describir) y teorías que lo fundamentan.</div>
<div class="ex-sol"><strong>Definición:</strong> prestación obligatoria exigida por el Estado, sin contraprestación directa al obligado, para financiar el gasto público. <strong>Estructura:</strong> sujeto activo (el Estado, que exige), sujeto pasivo (el obligado al pago), hecho imponible (hecho que da origen a la obligación), base imponible (valor sobre el que se aplica la alícuota) y alícuota. <strong>Teorías:</strong> del beneficio, de la capacidad de pago (contributiva) y del bienestar social (además, del cambio y de la prima de seguro).</div>
<div class="ex-q"><span class="n">b)</span> Señalar si son V o F.</div>
<table>
  <tr><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>Los impuestos que gravan el patrimonio parcial son indirectos.</td><td><span class="ex-ans">F (son directos)</span></td></tr>
  <tr><td>Un impuesto con alícuotas proporcionales y mínimo no imponible puede tener efecto progresivo.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>Los impuestos selectivos al consumo son neutrales.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>Un impuesto personal a la renta no tiene en cuenta mínimos exentos ni las rentas ganadas.</td><td><span class="ex-ans">F</span></td></tr>
</table>
<div class="ex-q"><span class="n">c)</span> Clasificar en Directos/Indirectos y Reales/Personales.</div>
<table>
  <tr><th>Impuesto</th><th>Directo/Indirecto</th><th>Real/Personal</th></tr>
  <tr><td>Al consumo de tipo acumulativo y piramidal</td><td><span class="ex-ans">Indirecto</span></td><td><span class="ex-ans">Real</span></td></tr>
  <tr><td>Al patrimonio bruto de las empresas</td><td><span class="ex-ans">Directo</span></td><td><span class="ex-ans">Real</span></td></tr>
  <tr><td>Impuestos aduaneros</td><td><span class="ex-ans">Indirecto</span></td><td><span class="ex-ans">Real</span></td></tr>
  <tr><td>Al consumo específico de determinados bienes</td><td><span class="ex-ans">Indirecto</span></td><td><span class="ex-ans">Real</span></td></tr>
  <tr><td>Sobre el patrimonio neto global de las personas físicas</td><td><span class="ex-ans">Directo</span></td><td><span class="ex-ans">Personal</span></td></tr>
</table>
<div class="ex-sol"><strong>Ojo:</strong> los <em>aduaneros</em> son <strong>indirectos</strong> (gravan transacciones y se trasladan al precio), no directos.</div>

<div class="ex-unidad">Unidad VI — Imposición sobre los ingresos</div>
<div class="ex-q"><span class="n">a)</span> Describir la estructura de un impuesto a la Renta Global de las Personas Humanas.</div>
<div class="ex-sol">Sujeto activo, sujeto pasivo, hecho imponible, base imponible, tasa/alícuota, cuota tributaria, exenciones y deducciones. Se aplica a la totalidad de las rentas/bienes que posee la persona.</div>
<div class="ex-q"><span class="n">b)</span> Clasificar los tipos de ingreso según las teorías de la renta (marcar con X).</div>
<table>
  <tr><th>Tipo de ingreso</th><th>Fuente</th><th>Increm. patrim. + consumo</th><th>Irving Fisher</th></tr>
  <tr><td>Ingreso por el ejercicio profesional</td><td><span class="ex-ans">X</span></td><td><span class="ex-ans">X</span></td><td><span class="ex-ans">X</span></td></tr>
  <tr><td>Ganancias de capital realizadas</td><td><span class="ex-ans">—</span></td><td><span class="ex-ans">X</span></td><td><span class="ex-ans">—</span></td></tr>
  <tr><td>Ingresos de naturaleza eventual</td><td><span class="ex-ans">—</span></td><td><span class="ex-ans">X</span></td><td><span class="ex-ans">X</span></td></tr>
  <tr><td>Ingresos a título gratuito</td><td><span class="ex-ans">—</span></td><td><span class="ex-ans">X</span></td><td><span class="ex-ans">X</span></td></tr>
  <tr><td>Valorización de bienes de capital</td><td><span class="ex-ans">—</span></td><td><span class="ex-ans">X</span></td><td><span class="ex-ans">X</span></td></tr>
  <tr><td>Consumo (alquileres, gastos particulares, renta imputada)</td><td><span class="ex-ans">—</span></td><td><span class="ex-ans">X</span></td><td><span class="ex-ans">X</span></td></tr>
</table>
<div class="ex-sol">La teoría de la <em>fuente</em> solo grava el producto periódico del trabajo/capital; la de <em>incremento + consumo</em> (Haig-Simons) grava todo (Δpatrimonio + consumo); <em>Fisher</em> grava el consumo (no el ahorro), por eso no incluye las ganancias de capital realizadas (ahorro).</div>
<div class="ex-q"><span class="n">c)</span> Criterio de renta mundial: liquidar Ganancias (Sucesión Josefina Domínguez, residente). Rentas: Argentina $35.000, Uruguay $45.000, Paraguay $20.000. Impuestos abonados en el exterior: a la renta $10.000; al consumo $7.000.</div>
<div class="ex-sol">
Impuesto sobre la renta argentina (35.000): 2.500 + (5.000 × 15%) = <strong>$3.250</strong>.<br>
Impuesto sobre la renta mundial total (100.000): 7.000 + (40.000 × 17%) = <strong>$10.800</strong>.<br>
Crédito por el impuesto a la renta pagado en el exterior (con tope) = 10.800 − 3.250 = <strong>$7.550</strong> computable como pago a cuenta.<br>
El impuesto al <em>consumo</em> pagado afuera ($7.000) <strong>no</strong> se computa.</div>
<div class="ex-q"><span class="n">d)</span> Rentas societarias: completar el cuadro (características / criterios de gravabilidad / ventajas y desventajas).</div>
<div class="ex-sol"><strong>Características:</strong> la sociedad es sujeto pasivo con personalidad fiscal propia. <strong>Criterios de gravabilidad:</strong> sistema clásico (grava la sociedad y el dividendo), integración total (transparencia fiscal) e integración parcial. <strong>Ventajas/desventajas:</strong> el clásico es simple pero genera doble imposición e incentiva la subcapitalización; la integración elimina o atenúa la doble imposición, pero es más compleja.</div>

<div class="ex-unidad">Unidad VII — Imposición sobre el patrimonio</div>
<div class="ex-q"><span class="n">a)</span> Justificación desde la equidad: V/F.</div>
<table>
  <tr><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>Mantiene totalmente los beneficios de la equidad cuando sustituye al impuesto a la renta.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>La equidad está presente porque se gravan las rentas ganadas.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>La equidad está presente porque se gravan los rendimientos psíquicos.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>Porque tiene alícuota proporcional.</td><td><span class="ex-ans">F</span></td></tr>
</table>
<div class="ex-q"><span class="n">b)</span> Impuesto al patrimonio de las personas físicas: completar (características / sistemas de evaluación / limitaciones).</div>
<div class="ex-sol"><strong>Características:</strong> periodicidad, sujeto pasivo, base imponible, tasa, exenciones (impuesto integral). <strong>Evaluación:</strong> inmuebles → valor de mercado o valor de referencia que asigna el Estado; acciones/participaciones → cotización en bolsa a fin de año y valor contable; propiedad intelectual → valor presente de los ingresos futuros; bienes del hogar → valor de adquisición menos depreciaciones. <strong>Limitaciones:</strong> valores desactualizados; el valor contable no refleja el valor preciso; difícil valuación por su naturaleza; depreciación difícil de calcular.</div>
<div class="ex-q"><span class="n">c)</span> Rol del impuesto al patrimonio en el sistema tributario (progresividad).</div>
<div class="ex-sol">Funciona <strong>como complemento del impuesto a la renta</strong> (no como reemplazo): refuerza la progresividad y la equidad del sistema.</div>
<div class="ex-q"><span class="n">d)</span> Tratamientos alternativos de imposición al patrimonio: V/F.</div>
<table>
  <tr><th>Afirmación</th><th>V/F</th></tr>
  <tr><td>Separación / no integración: grava el patrimonio individual e incluye la participación en sociedades de personas, con alícuotas progresivas.</td><td><span class="ex-ans">V</span></td></tr>
  <tr><td>Integración total: grava el patrimonio individual e incluye la participación en sociedades de capital.</td><td><span class="ex-ans">F</span></td></tr>
  <tr><td>Integración parcial: grava el patrimonio individual y grava las sociedades (de K o de P) con alícuotas proporcionales en forma separada.</td><td><span class="ex-ans">V</span></td></tr>
</table>
<div class="ex-q"><span class="n">e)</span> Completar cuadro (características / ventajas / desventajas).</div>
<table>
  <tr><th>Impuesto</th><th>Característica / ventaja / desventaja</th></tr>
  <tr><td>Al patrimonio de las empresas</td><td><span class="ex-ans">Se aplica sobre el activo de la empresa · grava a las de mayor capacidad económica · puede desincentivar la inversión.</span></td></tr>
  <tr><td>Al patrimonio global de las personas físicas</td><td><span class="ex-ans">Sobre el total de bienes de la persona · progresividad y equidad · fuga de capitales o evasión.</span></td></tr>
  <tr><td>A la parcialidad del patrimonio</td><td><span class="ex-ans">Sobre algunos bienes (no la totalidad) · tributación focalizada · puede no ser equitativo.</span></td></tr>
</table>

<div class="ex-unidad">Unidad VIII — Imposición sobre el consumo</div>
<div class="ex-q"><span class="n">a)</span> Completar cuadro (características / ventajas / desventajas).</div>
<table>
  <tr><th>Impuesto</th><th>Características / ventajas / desventajas</th></tr>
  <tr><td>General a las ventas — tipo IVA</td><td><span class="ex-ans">Neutral, proporcional, indirecto, con créditos fiscales · fácil de recaudar y menor distorsión del consumo · fácil de evadir y regresivo.</span></td></tr>
  <tr><td>General a las ventas — acumulativo y piramidal</td><td><span class="ex-ans">Acumulativo, con efecto piramidal, indirecto · genera ingresos constantes y simplicidad administrativa · piramidación que encarece los bienes.</span></td></tr>
  <tr><td>A la importación y exportación (aduaneros)</td><td><span class="ex-ans">Proteccionista, depende de tratados · fácil aplicación en aduanas y protege la industria local · afecta negativamente el comercio internacional.</span></td></tr>
</table>

<div class="ex-unidad">Unidad IX — Crédito y deuda pública</div>
<div class="ex-q"><span class="n">a)</span> Completar: destino y formas de materialización de la deuda; beneficios tributarios de los empréstitos.</div>
<div class="ex-sol"><strong>Destino (Ley 24.156, art. 56):</strong> inversiones reproductivas, atender una necesidad nacional evidente, reestructurar la organización del Estado o refinanciar pasivos. <strong>Formas de materialización:</strong> emisión de títulos/bonos, Letras del Tesoro, préstamos, avales/fianzas/garantías, y consolidación/conversión/renegociación de deudas. <strong>Beneficios tributarios:</strong> los títulos públicos suelen gozar de exenciones impositivas para incentivar su suscripción.</div>

<div class="ex-unidad">Unidad X — Presupuesto público</div>
<div class="ex-q"><span class="n">a)</span> Desarrollar un punto de la unidad: el ciclo presupuestario.</div>
<div class="ex-sol"><strong>Formulación:</strong> el Poder Ejecutivo elabora el anteproyecto reflejando las prioridades y políticas económicas. <strong>Aprobación/sanción:</strong> se envía al Poder Legislativo, que lo revisa, ajusta y aprueba; una vez sancionado se convierte en ley con carácter vinculante. <strong>Ejecución:</strong> se implementa el presupuesto (compromiso → devengado → pago). <strong>Control y supervisión:</strong> interno (SIGEN) y externo (AGN). <strong>Evaluación:</strong> al cierre, mediante la Cuenta de Inversión, se compara lo ejecutado con los objetivos.</div>`
    }
  ],

  mc: [
    {
      unidad: "VI", titulo: "Imposición sobre la renta",
      preguntas: [
        { q: "La teoría de la renta-producto (de la fuente) grava:", ops: ["Todo aumento del patrimonio", "El producto neto y periódico de una fuente permanente", "El consumo total", "Las herencias"], correcta: 1, exp: "Deja fuera plusvalías y ganancias de capital: solo el fruto periódico de la fuente." },
        { q: "El sistema argentino de imposición a la renta es:", ops: ["Cedular puro", "Global puro", "Mixto", "Indiciario"], correcta: 2, exp: "Combina categorías (cédulas) con una base global, deducciones y escala progresiva." },
        { q: "Según Irving Fisher, la renta es:", ops: ["El incremento patrimonial", "El flujo de servicios consumidos (no grava el ahorro)", "El producto de la tierra", "Las ganancias de capital"], correcta: 1, exp: "Al gravar solo el consumo, favorece el ahorro y la inversión." },
        { q: "El criterio de renta mundial implica que los residentes tributan por:", ops: ["Solo rentas de fuente argentina", "Rentas de fuente argentina y extranjera", "Solo rentas del exterior", "Nada"], correcta: 1, exp: "Con cómputo como pago a cuenta del impuesto análogo abonado en el exterior (tax credit)." },
        { q: "El sistema clásico de imposición societaria:", ops: ["Evita la doble imposición", "Grava la sociedad y también el dividendo, generando doble imposición", "Integra totalmente", "Exime a la sociedad"], correcta: 1, exp: "Origina la subcapitalización (incentivo a endeudarse en vez de capitalizar)." }
      ]
    },
    {
      unidad: "VII", titulo: "Imposición sobre el patrimonio",
      preguntas: [
        { q: "Gravar el patrimonio neto (en vez del bruto) es más equitativo porque:", ops: ["Grava más", "Descuenta las deudas y refleja la verdadera capacidad contributiva", "Es más fácil de administrar", "No considera los pasivos"], correcta: 1, exp: "El neto resta los pasivos; el bruto no." },
        { q: "El Impuesto Inmobiliario es un buen impuesto local porque:", ops: ["Su base es móvil", "Su base es inmóvil, estable y de fácil control", "Grava la renta personal", "Es nacional"], correcta: 1, exp: "El inmueble no se puede ocultar ni fugar; su debilidad son las valuaciones desactualizadas." },
        { q: "El Impuesto de Sellos grava:", ops: ["La renta", "La instrumentación de actos onerosos", "El consumo", "El patrimonio neto"], correcta: 1, exp: "Rige el principio de instrumentalidad; se lo critica por distorsivo." },
        { q: "Los impuestos al patrimonio son, en general:", ops: ["De alta recaudación", "De baja recaudación pero importantes para provincias y municipios", "Nacionales exclusivos", "Progresivos altos"], correcta: 1, exp: "Aportan poco al total pero son claves en la tributación subnacional." },
        { q: "El impuesto a la herencia en Argentina:", ops: ["Rige a nivel nacional", "Fue derogado a nivel nacional (1976) y es facultad provincial", "No existe en ninguna jurisdicción", "Es un impuesto al consumo"], correcta: 1, exp: "Lo aplica la provincia de Buenos Aires desde 2010; tensiona equidad y viabilidad." }
      ]
    },
    {
      unidad: "VIII", titulo: "Imposición sobre el consumo",
      preguntas: [
        { q: "El IVA argentino es un impuesto:", ops: ["Directo y personal", "Indirecto, real y plurifásico no acumulativo", "Acumulativo / en cascada", "Monofásico"], correcta: 1, exp: "Grava el valor agregado de cada etapa sin efecto cascada." },
        { q: "El impuesto en cascada (acumulativo, como Ingresos Brutos) se critica porque:", ops: ["Es neutral", "Produce piramidación e incentiva la integración vertical", "No distorsiona", "Es progresivo"], correcta: 1, exp: "El impuesto se acumula etapa a etapa (impuesto sobre impuesto)." },
        { q: "La técnica de liquidación del IVA es:", ops: ["Base contra base", "Débito fiscal menos crédito fiscal", "Suma del valor agregado", "Monto fijo por unidad"], correcta: 1, exp: "IVA de ventas (débito) − IVA de compras (crédito) = impuesto a ingresar." },
        { q: "El IVA tipo consumo:", ops: ["No deduce los bienes de capital", "Deduce todo el bien de capital al comprarlo, siendo neutral para la inversión", "Deduce solo la amortización", "Grava las exportaciones"], correcta: 1, exp: "Es el tipo del IVA argentino: el más neutral respecto de la inversión." },
        { q: "La principal crítica al impuesto al consumo es:", ops: ["Su baja recaudación", "Su regresividad respecto del ingreso", "Que grava el ahorro", "Que es directo"], correcta: 1, exp: "Los sectores de menores ingresos consumen una proporción mayor de su renta." }
      ]
    },
    {
      unidad: "IX", titulo: "Crédito y deuda pública",
      preguntas: [
        { q: "El crédito público es:", ops: ["La deuda misma", "La aptitud o capacidad del Estado para obtener préstamos", "El empréstito", "Un impuesto"], correcta: 1, exp: "Crédito (aptitud) → empréstito (operación) → deuda (obligación)." },
        { q: "La deuda externa es más riesgosa que la interna porque:", ops: ["Se paga en pesos", "Al pagarla salen divisas reales del país", "No genera intereses", "Es voluntaria"], correcta: 1, exp: "Hay transferencia de riqueza al exterior y presión sobre la balanza de pagos." },
        { q: "La tesis keynesiana sobre la deuda interna sostiene que:", ops: ["Siempre es una carga para el futuro", "Nos la debemos a nosotros mismos (transferencia interna)", "Debe repudiarse", "No existe"], correcta: 1, exp: "El pago es una redistribución interna sin reducir la riqueza agregada." },
        { q: "La deuda es sostenible si:", ops: ["Crece indefinidamente", "La relación Deuda/PBI no crece indefinidamente", "La tasa siempre supera al crecimiento", "No se paga"], correcta: 1, exp: "Si r > g se necesita superávit primario para estabilizarla." },
        { q: "La conversión de la deuda consiste en:", ops: ["Pagar el capital", "Cambiar la deuda existente por otra de distintas condiciones", "Desconocerla", "Emitir moneda"], correcta: 1, exp: "Suele bajar la tasa de interés; puede ser forzosa, facultativa u optativa." }
      ]
    },
    {
      unidad: "X", titulo: "Presupuesto público",
      preguntas: [
        { q: "La naturaleza jurídica del presupuesto es:", ops: ["Una ley material que crea tributos", "Una ley formal que autoriza y limita gastos", "Un decreto del Ejecutivo", "Un contrato"], correcta: 1, exp: "No crea tributos ni obligaciones nuevas; autoriza y limita el gasto." },
        { q: "El principio de equilibrio presupuestario clásico exige que:", ops: ["Haya déficit permanente", "Los gastos sean iguales a los recursos", "Haya siempre superávit", "El Estado se endeude"], correcta: 1, exp: "Para Keynes puede sacrificarse con fines de estabilización a lo largo del ciclo." },
        { q: "Las etapas de la ejecución del gasto son:", ops: ["Solo el pago", "Compromiso, devengado y pago", "Formulación y aprobación", "Solo el control"], correcta: 1, exp: "El compromiso afecta preventivamente el crédito presupuestario." },
        { q: "La Cuenta de Inversión es:", ops: ["El presupuesto del año siguiente", "La rendición de cuentas del Ejecutivo al Congreso sobre la ejecución", "Una ley tributaria", "Un empréstito"], correcta: 1, exp: "La elabora la Contaduría General y cierra el ciclo presupuestario." },
        { q: "Si no se aprueba el presupuesto a tiempo (reconducción):", ops: ["No hay presupuesto", "Rige el del año anterior (art. 27, Ley 24.156)", "Se gobierna por decreto", "Se cierra el Estado"], correcta: 1, exp: "La reconducción evita el vacío presupuestario." }
      ]
    },
    {
      unidad: "XI", titulo: "Federalismo fiscal",
      preguntas: [
        { q: "La estabilización y la redistribución conviene asignarlas a:", ops: ["Los municipios", "La Nación (nivel central)", "Las provincias", "El sector privado"], correcta: 1, exp: "Requieren manejo macro y evitan la competencia entre jurisdicciones." },
        { q: "El desequilibrio fiscal vertical es:", ops: ["La diferencia entre provincias", "La brecha entre lo que un nivel recauda y lo que gasta", "La diferencia entre municipios", "Inexistente en Argentina"], correcta: 1, exp: "Las provincias gastan más de lo que recaudan: dependen de transferencias." },
        { q: "La correspondencia fiscal es baja en Argentina porque:", ops: ["Las provincias recaudan todo", "Las provincias gastan con fondos que recauda la Nación (coparticipación)", "No hay coparticipación", "Los municipios son autónomos"], correcta: 1, exp: "Se diluye la responsabilidad y hay incentivo a gastar de más." },
        { q: "La coparticipación se basa en:", ops: ["Un decreto del Ejecutivo", "Una ley-convenio (art. 75 inc. 2 CN) con el Senado como cámara de origen", "El art. 4 de la CN", "Una ordenanza municipal"], correcta: 1, exp: "No puede modificarse unilateralmente ni reglamentarse; rige la Ley 23.548." },
        { q: "La distribución primaria de la coparticipación es:", ops: ["El reparto entre provincias", "El reparto Nación vs. conjunto de provincias", "El reparto entre municipios", "El reparto entre poderes"], correcta: 1, exp: "La secundaria es el reparto entre las provincias." }
      ]
    }
  ]
};
