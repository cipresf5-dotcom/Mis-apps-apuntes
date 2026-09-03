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
        { q: "Respecto de los bienes públicos puros y los bienes preferentes, es correcto afirmar que:", ops: ["Ambos son bienes privados que el Estado decide subsidiar por igual", "Los puros no admiten exclusión ni rivalidad; los preferentes son bienes privados que el Estado provee por razones extraeconómicas o externalidades", "Los preferentes cumplen las condiciones de no rivalidad y no exclusión, a diferencia de los puros", "La diferencia entre ambos es puramente jurídica, no económica"], correcta: 1, exp: "Los puros (defensa) cumplen no rivalidad/no exclusión; los preferentes (educación, vacunación) son técnicamente privados pero el Estado los provee por externalidades o paternalismo." },
        { q: "El primer teorema de la economía del bienestar establece que:", ops: ["El Estado debe redistribuir siempre el ingreso", "Los monopolios naturales son eficientes por definición", "Todo equilibrio de un mercado en competencia perfecta es eficiente en el sentido de Pareto", "Los bienes públicos se proveen eficientemente por el mercado"], correcta: 2, exp: "Es la base teórica del laissez-faire: sin fallas de mercado, la competencia perfecta conduce a una asignación eficiente (aunque no necesariamente equitativa)." },
        { q: "El Teorema de Imposibilidad de Arrow, dentro de la Teoría de la Elección Pública, demuestra que:", ops: ["Ningún mecanismo de votación satisface a la vez todas las condiciones razonables de racionalidad y equidad al agregar preferencias individuales", "El votante mediano siempre representa el óptimo social", "La democracia directa resuelve cualquier paradoja de preferencias", "Los burócratas no influyen en las decisiones colectivas"], correcta: 0, exp: "Se vincula con la paradoja de Condorcet: las preferencias colectivas pueden ser cíclicas e inconsistentes." },
        { q: "¿Cuál de las siguientes situaciones constituye un «fallo del Estado» y no una falla del mercado?", ops: ["La existencia de un monopolio natural", "Una externalidad negativa no corregida", "La provisión insuficiente de un bien público por el problema del free rider", "La captura de una política pública por un grupo de presión (rent seeking)"], correcta: 3, exp: "Los fallos del Estado remiten a información limitada, burocracia y captura por grupos de interés; los otros tres son fallas clásicas del mercado." },
        { q: "Para la escuela marginalista, un impuesto se justifica cuando:", ops: ["El Estado tiene déficit fiscal", "La utilidad que el gasto público obtiene de esa riqueza supera la utilidad que le darían los particulares", "La renta nacional decrece", "Existe un tratado internacional que lo exige"], correcta: 1, exp: "Es la regla central del marginalismo aplicada a las finanzas públicas: comparar la utilidad marginal del uso público y del uso privado del mismo peso." },
        { q: "Frente al anarcocapitalismo, la objeción de Robert Nozick sostiene que:", ops: ["El mercado de seguridad privada nunca genera concentración de poder", "Los bienes públicos se proveerían eficientemente sin Estado", "La competencia entre agencias privadas de protección tiende a que una domine el territorio, haciendo renacer un «Estado mínimo»", "No hay ninguna crítica teórica posible al anarcocapitalismo"], correcta: 2, exp: "Es la tesis central de «Anarquía, Estado y Utopía»: el propio proceso de mercado de la seguridad reconstituye espontáneamente un Estado." },
        { q: "Según el Teorema de Coase, una externalidad puede internalizarse sin intervención estatal si:", ops: ["Los derechos de propiedad están bien definidos y los costos de transacción son bajos", "El Estado aplica siempre un impuesto pigouviano", "El bien involucrado es un bien público puro", "Existe un monopolio natural regulado"], correcta: 0, exp: "Con propiedad clara y negociación sin fricciones, las partes acuerdan una solución eficiente; en la práctica, los costos de transacción suelen impedirlo." }
      ]
    },
    {
      unidad: "II", titulo: "Gastos públicos",
      preguntas: [
        { q: "La clasificación económica del gasto público permite identificar, principalmente:", ops: ["Qué organismo ejecuta el gasto", "La naturaleza del gasto (corriente, de capital o de transferencia) y su impacto macroeconómico", "El programa presupuestario al que pertenece", "El artículo de la Constitución que lo autoriza"], correcta: 1, exp: "La clasificación institucional identifica quién gasta; la programática, en qué programa; la económica, la naturaleza y el efecto macro." },
        { q: "La Ley de Wagner explica el crecimiento del sector público a medida que aumenta la renta nacional por tres razones, EXCEPTO:", ops: ["Mayor demanda de funciones administrativas y de protección", "Mayor gasto redistributivo y en bienes superiores (educación, salud)", "La necesidad de regular monopolios derivados de la tecnología", "La obligación constitucional de mantener el presupuesto siempre equilibrado"], correcta: 3, exp: "El equilibrio presupuestario no es una de las razones de Wagner; su ley describe, precisamente, un crecimiento tendencial del gasto." },
        { q: "La «rigidez a la baja» del gasto público se explica, entre otras causas, por:", ops: ["La ausencia total de gastos fijados por ley", "La posibilidad de recortar sueldos sin ninguna restricción jurídica", "Derechos adquiridos y gastos fijados por ley (jubilaciones, intereses de la deuda) que no pueden recortarse discrecionalmente", "El bajo costo político de reducir el gasto social"], correcta: 2, exp: "El gasto es fácil de aumentar y difícil de bajar: hay restricciones jurídicas, políticas, sociales y económicas al recorte." },
        { q: "Si la propensión marginal a consumir (PMC) es 0,75, el multiplicador del gasto público (k) es:", ops: ["4", "0,75", "1,75", "3"], correcta: 0, exp: "k = 1 / (1 − PMC) = 1 / 0,25 = 4." },
        { q: "Un aumento del gasto público motivado exclusivamente por la inflación del período, sin que se provean más bienes o servicios, se clasifica como:", ops: ["Crecimiento real y absoluto", "Crecimiento real y relativo", "Crecimiento estructural", "Crecimiento aparente (nominal)"], correcta: 3, exp: "El aumento aparente sube la cifra nominal sin que haya más bienes ni servicios detrás." },
        { q: "Cuando el gasto público se financia con emisión de deuda en una economía en pleno empleo, el principal riesgo es:", ops: ["La deflación generalizada", "El desplazamiento de la inversión privada (crowding-out) por la suba de la tasa de interés", "La caída automática de la recaudación", "La reducción del multiplicador a cero"], correcta: 1, exp: "El Estado compite por el ahorro disponible, sube la tasa y desplaza inversión privada." },
        { q: "El análisis costo-beneficio, aplicado a proyectos de gasto público, tiene como criterio de decisión:", ops: ["Elegir siempre el proyecto de menor costo, sin importar los beneficios", "Financiar todos los proyectos que el Poder Ejecutivo proponga", "Comparar los costos y beneficios sociales llevados a valor presente, priorizando el mayor beneficio neto", "Evitar cualquier proyecto que requiera financiamiento externo"], correcta: 2, exp: "Busca maximizar el bienestar social por peso gastado, no solo minimizar costos." }
      ]
    },
    {
      unidad: "III", titulo: "Recursos del Estado",
      preguntas: [
        { q: "Las tres características identificatorias de un tributo son:", ops: ["Voluntariedad, onerosidad y temporalidad", "Ser un precio, requerir contraprestación equivalente y ser regresivo", "Ser una prestación en dinero, exigida coactivamente por el poder de imperio del Estado y en virtud de una ley", "Ser recaudado exclusivamente por la Nación"], correcta: 2, exp: "En dinero, coactivo (poder de imperio) y con base legal (principio de legalidad, art. 17 CN)." },
        { q: "Respecto de la relación entre la tasa y el costo del servicio, la jurisprudencia de la Corte Suprema exige que la proporción sea:", ops: ["«Razonable, prudente y discreta», no una equivalencia matemática estricta", "Una igualdad exacta entre lo recaudado y el costo total", "Irrelevante, ya que la tasa no tiene relación con el costo", "Determinada exclusivamente por el Poder Ejecutivo"], correcta: 0, exp: "La Corte admite que el cálculo del costo real es aproximado; exige una relación razonable, no una equivalencia estricta." },
        { q: "En la contribución de mejoras, el importe exigido a cada contribuyente debe ser proporcional a:", ops: ["Su capacidad contributiva general", "El costo total del servicio público brindado", "El consumo que realiza del bien", "El beneficio o mayor valor que la obra pública produce en su inmueble, dentro de la zona beneficiada"], correcta: 3, exp: "Es el principio del beneficio: se paga por la valorización, no por la capacidad de pago." },
        { q: "Los recursos parafiscales se caracterizan porque:", ops: ["Son voluntarios y no requieren ley", "Son obligatorios y los recauda un ente público distinto del fisco central para su financiamiento autónomo", "Ingresan siempre a rentas generales", "Solo existen a nivel municipal"], correcta: 1, exp: "Seguridad social, colegios profesionales, INTA/INTI: no van a rentas generales, sino al ente que los recauda." },
        { q: "Un recurso originario del Estado se diferencia de uno derivado en que:", ops: ["El originario siempre requiere ley del Congreso", "El derivado proviene del patrimonio propio del Estado", "El originario proviene del propio patrimonio o actividad del Estado (rentas, regalías); el derivado se detrae coactivamente del sector privado", "No existe diferencia relevante entre ambos"], correcta: 2, exp: "Originarios: venta de bienes, rentas, regalías. Derivados: los tributos, detraídos del sector privado." },
        { q: "El «impuesto inflacionario» se considera un recurso atípico porque:", ops: ["No requiere ley del Congreso, violando el principio de legalidad, y distorsiona la asignación de recursos", "Es el único recurso originario del Estado", "Solo pueden aplicarlo los municipios", "Es jurídicamente equivalente a una tasa"], correcta: 0, exp: "Surge de la emisión monetaria, sin ley, y actúa como un tributo oculto sobre los activos monetarios." },
        { q: "Desde el punto de vista de los recursos públicos, el crédito público se clasifica como un ingreso:", ops: ["Corriente, que debe aplicarse a gastos corrientes", "Tributario derivado", "Parafiscal", "De capital, que en principio debe destinarse a gastos de capital"], correcta: 3, exp: "El crédito es un ingreso de capital; su servicio (intereses) se afronta con rentas generales." }
      ]
    },
    {
      unidad: "IV", titulo: "Marco jurídico de la Hacienda Pública",
      preguntas: [
        { q: "Conforme a la distribución constitucional de facultades tributarias, los impuestos directos corresponden:", ops: ["Exclusivamente a la Nación en forma permanente", "En principio a las provincias (poder no delegado); la Nación solo por tiempo determinado y ante causas excepcionales", "Exclusivamente a los municipios", "Solo pueden crearse por ley-convenio"], correcta: 1, exp: "Art. 121 (poder no delegado) y art. 75 inc. 2 (excepción nacional por tiempo determinado)." },
        { q: "El principio de legalidad tributaria («nullum tributum sine lege») implica que:", ops: ["El Poder Ejecutivo puede crear tributos por decreto en casos de urgencia", "Las provincias no pueden ejercer poder tributario propio", "Los usos y costumbres pueden crear un hecho imponible", "Todos los elementos esenciales del tributo (hecho imponible, sujetos, base, alícuota) deben surgir de una ley del Congreso"], correcta: 3, exp: "Ningún elemento esencial del tributo puede crearse ni modificarse por decreto (arts. 4, 17 y 75 CN)." },
        { q: "El hecho imponible, según Jarach, se integra por los aspectos:", ops: ["Material, personal, espacial y temporal", "Económico, político y jurídico", "Fiscal, extrafiscal y mixto", "Objetivo, subjetivo y procesal"], correcta: 0, exp: "Estos cuatro aspectos definen cuándo, dónde, sobre qué y respecto de quién nace la obligación." },
        { q: "A diferencia del método de interpretación según la realidad económica, la analogía en materia tributaria:", ops: ["Es el método principal para interpretar cualquier norma fiscal", "Permite crear exenciones cuando la ley es ambigua", "No puede crear ni extender hechos imponibles, por ser incompatible con el principio de legalidad", "Solo puede aplicarla el Poder Judicial"], correcta: 2, exp: "La realidad económica mira la sustancia de los actos; la analogía, en cambio, está vedada por la legalidad." },
        { q: "El «efecto liberatorio del pago» en materia tributaria significa que:", ops: ["El contribuyente nunca puede ser fiscalizado", "Un pago realizado conforme a la ley vigente al momento del vencimiento libera al contribuyente y crea un derecho adquirido frente a cambios retroactivos", "El Estado puede exigir el pago dos veces", "El tributo deja de ser exigible desde la sanción de la ley"], correcta: 1, exp: "Protege el derecho de propiedad (art. 17 CN) frente a la retroactividad de nuevas normas." },
        { q: "El principio de no confiscatoriedad tributaria:", ops: ["Prohíbe cualquier impuesto directo", "Solo se aplica a las tasas municipales", "Impide gravar el consumo de bienes de lujo", "Impide que el tributo absorba una parte sustancial de la propiedad o la renta (tope pretoriano cercano al 33%)"], correcta: 3, exp: "Deriva de la protección de la propiedad (art. 17 CN); el tope del 33% es un criterio pretoriano, no legal." },
        { q: "Respecto de la autonomía municipal reconocida en el art. 123 de la CN, es correcto afirmar que:", ops: ["Su alcance y contenido lo reglamenta cada Constitución provincial, por lo que puede variar entre provincias", "Es idéntica en todo el país por mandato federal directo", "Habilita a los municipios a crear impuestos análogos a los coparticipados", "Elimina la necesidad de ordenanzas tributarias"], correcta: 0, exp: "Cada provincia asegura la autonomía municipal reglando su alcance y contenido en el orden institucional, político, administrativo, económico y financiero." }
      ]
    },
    {
      unidad: "V", titulo: "Teoría de la imposición",
      preguntas: [
        { q: "La teoría de la capacidad contributiva, como fundamento del tributo, sostiene que:", ops: ["Cada uno debe pagar en proporción al beneficio que recibe del Estado", "El tributo es un precio por los servicios estatales", "Los impuestos deben distribuirse según la aptitud económica de cada persona, manifestada en la renta, el patrimonio y el consumo", "Solo debe pagar quien usa efectivamente un servicio público"], correcta: 2, exp: "Es la base de la progresividad moderna; se opone a la teoría del beneficio (opción a)." },
        { q: "La curva de Laffer describe que:", ops: ["A partir de cierto punto, subir la alícuota puede reducir la recaudación total", "La recaudación crece siempre en forma proporcional a la alícuota", "Los impuestos indirectos no afectan la recaudación", "La presión tributaria no tiene relación con la evasión"], correcta: 0, exp: "Pasado el punto óptimo (t*), tasas más altas desalientan la actividad y estimulan la evasión, bajando lo recaudado." },
        { q: "El «exceso de carga» o pérdida de bienestar (triángulo de Harberger) que genera un impuesto se debe a que:", ops: ["El Estado recauda menos de lo previsto por errores administrativos", "El impuesto es siempre trasladado íntegramente hacia adelante", "El bien gravado se vuelve perfectamente inelástico", "Cae la cantidad transada del bien, generando una pérdida social que no se convierte en recaudación para nadie"], correcta: 3, exp: "Es la ineficiencia pura del impuesto: bienestar perdido por la caída de la cantidad de equilibrio." },
        { q: "El «error de salto», típico de la progresividad global (por clases), se produce porque:", ops: ["La alícuota es siempre constante", "Un peso adicional de base imponible puede hacer «saltar» de tramo y aumentar desproporcionadamente el impuesto total", "Solo ocurre en la progresividad escalonada", "El impuesto se vuelve regresivo automáticamente"], correcta: 1, exp: "La progresividad escalonada (por importe fijo + % sobre el excedente) evita justamente este problema." },
        { q: "En el estudio de los efectos económicos de los impuestos, la «traslación» es el momento en que:", ops: ["El legislador anuncia la creación del tributo", "El sujeto de derecho paga el impuesto al fisco (percusión)", "El contribuyente de derecho transfiere la carga económica del impuesto a un tercero, vía precios", "El impuesto se extingue por prescripción"], correcta: 2, exp: "Secuencia: anuncio → percusión → traslación → incidencia → difusión → remoción." },
        { q: "La presión tributaria se calcula, en su fórmula más simple, como:", ops: ["El cociente entre el total de tributos recaudados y la renta nacional (o el PBI)", "El producto entre la alícuota y el número de contribuyentes", "La diferencia entre gasto público y recursos", "El total de tributos menos las transferencias"], correcta: 0, exp: "P = T / R (tributos sobre renta nacional o PBI)." },
        { q: "A diferencia de un impuesto real (objetivo) como el IVA, un impuesto personal (subjetivo) como Ganancias de personas humanas:", ops: ["No admite ningún tipo de deducción", "Grava una cosa o actividad sin mirar a quién la realiza", "Siempre es indirecto", "Considera la situación particular del contribuyente, admitiendo mínimo no imponible y cargas de familia"], correcta: 3, exp: "Lo personal atiende al sujeto; lo real, a la cosa o la actividad, sin considerarlo." }
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
        { q: "La teoría de la renta-incremento patrimonial neto más consumo (Haig-Simons), a diferencia de la teoría de la fuente, se caracteriza por:", ops: ["Gravar únicamente el producto periódico de una fuente permanente", "Ser un concepto amplio que incluye plusvalías, herencias y ganancias eventuales, además del producto habitual", "Excluir el consumo del concepto de renta", "Aplicarse solo a personas jurídicas"], correcta: 1, exp: "La teoría de la fuente («el capital es el árbol, la renta el fruto») es más estrecha; Haig-Simons amplía la base gravable." },
        { q: "El impuesto a las Ganancias en Argentina responde a un sistema:", ops: ["Cedular puro, con alícuotas independientes por categoría", "Global puro, sin distinción de categorías", "Indiciario, basado en signos externos de riqueza", "Mixto: categorías (cédulas) integradas en una base global con deducciones y escala progresiva"], correcta: 3, exp: "Combina lo mejor de ambos sistemas: discrimina el origen por categoría y aplica progresividad sobre el total." },
        { q: "Para Irving Fisher, la renta gravable debe identificarse con:", ops: ["El flujo de servicios efectivamente consumidos, dejando fuera el ahorro", "Todo incremento patrimonial, incluidas las ganancias de capital no realizadas", "El producto neto de una fuente permanente", "El valor total del patrimonio al cierre del ejercicio"], correcta: 0, exp: "Al gravar solo lo consumido, la teoría de Fisher no penaliza el ahorro ni la inversión." },
        { q: "Bajo el criterio de renta mundial, un residente argentino que pagó impuesto a la renta en el exterior:", ops: ["No puede computar nada de lo pagado afuera", "Debe pagar el impuesto argentino sin ningún atenuante", "Puede computar lo pagado en el exterior como pago a cuenta (tax credit), con tope, del impuesto argentino sobre esa misma renta", "Queda eximido de tributar en Argentina por cualquier renta"], correcta: 2, exp: "Evita la doble imposición internacional; el impuesto al consumo pagado afuera no se computa, solo el de la renta." },
        { q: "El problema de las «rentas irregulares» bajo un sistema progresivo consiste en que:", ops: ["Nunca se puede corregir", "Quien concentra en un solo año un ingreso generado en varios períodos tributa proporcionalmente más que quien lo percibió en forma pareja; se corrige con promediación", "Solo afecta a las sociedades", "Reduce artificialmente el impuesto a pagar"], correcta: 1, exp: "Con igual ingreso total, la progresividad castiga más a quien lo concentra en un solo ejercicio." },
        { q: "En el sistema clásico de imposición a la renta societaria (se grava la sociedad y luego el dividendo), el principal efecto no deseado es:", ops: ["La eliminación total de la doble imposición", "El incentivo a distribuir el 100% de las utilidades", "La reducción de la carga fiscal total del grupo económico", "La doble imposición económica, que incentiva la subcapitalización (endeudarse en vez de capitalizar)"], correcta: 3, exp: "Se opone al sistema de integración total o parcial, pensados para atenuar ese efecto." },
        { q: "El mínimo no imponible y las cargas de familia son deducciones propias de:", ops: ["Los impuestos personales a la renta, que consideran la situación particular del contribuyente", "Los impuestos reales sobre el consumo", "Las contribuciones de mejoras", "Los derechos aduaneros"], correcta: 0, exp: "Son deducciones subjetivas: solo tienen sentido en un impuesto que mira al sujeto, no a la cosa." }
      ]
    },
    {
      unidad: "VII", titulo: "Imposición sobre el patrimonio",
      preguntas: [
        { q: "Gravar el patrimonio neto, en lugar del bruto, resulta más equitativo porque:", ops: ["Aumenta la recaudación total", "Simplifica la administración tributaria", "Descuenta las deudas (pasivos), reflejando mejor la verdadera capacidad contributiva del sujeto", "Elimina la necesidad de valuar los bienes"], correcta: 2, exp: "El patrimonio bruto no considera las deudas del contribuyente; el neto sí." },
        { q: "Que un impuesto patrimonial «desaliente la adquisición de bienes improductivos» es una justificación de tipo:", ops: ["Económica (eficiencia)", "De administración tributaria", "De equidad", "Extrafiscal ambiental"], correcta: 0, exp: "Se vincula con la eficiencia en la asignación de recursos, no con la equidad ni el control fiscal." },
        { q: "El Impuesto Inmobiliario es considerado un buen tributo para los gobiernos locales porque:", ops: ["Grava la renta personal global", "Es de fácil traslación al consumidor final", "Puede eludirse trasladando el bien a otra jurisdicción", "Su base es inmóvil, estable y de fácil control, aunque depende de valuaciones fiscales actualizadas"], correcta: 3, exp: "Al ser un bien raíz, no se puede ocultar ni fugar; su debilidad son los valores catastrales desactualizados." },
        { q: "El Impuesto de Sellos grava, conforme al principio de instrumentalidad:", ops: ["La renta obtenida por la operación", "La instrumentación (el documento) de actos y contratos onerosos", "El patrimonio neto del firmante", "El consumo final de bienes"], correcta: 1, exp: "Se critica por distorsivo: encarece las operaciones y puede generar doble imposición." },
        { q: "Respecto del impuesto a la herencia en Argentina, es correcto que:", ops: ["Rige a nivel nacional desde 1976", "Está prohibido constitucionalmente", "Fue derogado a nivel nacional en 1976 y hoy es una facultad provincial, aplicada por ejemplo en Buenos Aires desde 2010", "Es un impuesto indirecto al consumo"], correcta: 2, exp: "Es muy equitativo (grava riqueza no ganada) pero enfrenta problemas de liquidez y elusión." },
        { q: "En el sistema de «separación o no integración» del impuesto al patrimonio, se grava el patrimonio individual de las personas humanas y en su declaración jurada se incluye:", ops: ["La participación en sociedades de personas, con alícuotas progresivas", "Solo los bienes inmuebles", "Nada relacionado con sociedades", "Únicamente el patrimonio de las sociedades de capital"], correcta: 0, exp: "Se diferencia de la integración total (incluye sociedades de capital) y la parcial (grava las sociedades por separado)." },
        { q: "En un sistema tributario, el impuesto al patrimonio de las personas humanas cumple, respecto del impuesto a la renta, un rol de:", ops: ["Sustituto pleno, ya que grava exactamente lo mismo", "Impuesto exclusivamente extrafiscal, sin fin recaudatorio", "Recurso parafiscal", "Complemento, reforzando la progresividad y la equidad del sistema"], correcta: 3, exp: "No lo reemplaza: lo complementa, porque grava una manifestación distinta (el stock, no el flujo) de capacidad contributiva." }
      ]
    },
    {
      unidad: "VIII", titulo: "Imposición sobre el consumo",
      preguntas: [
        { q: "El IVA argentino se clasifica técnicamente como un impuesto:", ops: ["Directo, personal y monofásico", "Indirecto, real y plurifásico no acumulativo", "Directo, real y en cascada", "Indirecto, personal y proporcional al patrimonio"], correcta: 1, exp: "Grava múltiples etapas sin efecto acumulativo, a diferencia de un impuesto tipo Ingresos Brutos." },
        { q: "El principal defecto de un impuesto plurifásico acumulativo (en cascada), como Ingresos Brutos, es que:", ops: ["Es completamente neutral respecto de la estructura empresarial", "No permite ningún tipo de crédito fiscal en ningún caso", "Solo grava la última etapa de comercialización", "Genera piramidación (impuesto sobre impuesto) e incentiva la integración vertical de las empresas para evitar etapas"], correcta: 3, exp: "El impuesto se acumula etapa a etapa, distorsionando precios relativos y penalizando las cadenas largas de producción." },
        { q: "La técnica de liquidación del IVA argentino consiste en:", ops: ["Restar el débito fiscal (IVA de las ventas) menos el crédito fiscal (IVA de las compras)", "Sumar todos los componentes del valor agregado (salarios, rentas, beneficios)", "Aplicar la alícuota sobre el valor bruto de producción sin deducciones", "Cobrar un monto fijo por unidad vendida"], correcta: 0, exp: "Es el método «impuesto contra impuesto», el usado en la Argentina (a diferencia de «base contra base»)." },
        { q: "Que el IVA argentino sea de «tipo consumo» significa que, respecto de los bienes de capital:", ops: ["No admite ningún crédito fiscal", "Solo permite deducir la amortización anual", "Permite deducir la totalidad del crédito fiscal en el momento de la compra, siendo neutral para la decisión de invertir", "Los excluye completamente del impuesto"], correcta: 2, exp: "Es el tipo más neutral respecto de la inversión, a diferencia del tipo renta (solo amortización) o producto bruto (sin deducción)." },
        { q: "La principal crítica que recibe la imposición general al consumo es su:", ops: ["Baja capacidad recaudatoria", "Regresividad: los sectores de menores ingresos destinan al consumo una proporción mayor de su renta", "Imposibilidad de administrarse", "Incompatibilidad con el comercio exterior"], correcta: 1, exp: "Se atenúa con exenciones a bienes de primera necesidad y alícuotas diferenciales." },
        { q: "La solución de Cosciani del «crédito fiscal presunto» para el sector agropecuario consiste en:", ops: ["Eximir totalmente al sector de IVA", "Aplicar una alícuota del 0% a todas las ventas del sector", "Gravar solo la última etapa de comercialización agrícola", "Presumir que un porcentaje de las ventas del productor corresponde a insumos con IVA ya pagado, reconociéndole ese crédito"], correcta: 3, exp: "El problema central es elegir bien ese porcentaje presunto: si es alto, subsidia al sector; si es bajo, lo penaliza." },
        { q: "A diferencia del IVA, el impuesto al gasto propuesto por Kaldor es:", ops: ["Personal, directo y progresivo, calculado como Ingresos menos Ahorro neto", "Real, indirecto y proporcional", "Un impuesto exclusivamente aduanero", "Idéntico en su técnica de liquidación al IVA"], correcta: 0, exp: "Es conceptualmente atractivo (no castiga el ahorro y permite progresividad) pero de muy difícil aplicación práctica." }
      ]
    },
    {
      unidad: "IX", titulo: "Crédito y deuda pública",
      preguntas: [
        { q: "El «crédito público», a diferencia del «empréstito» y la «deuda pública», se define como:", ops: ["La obligación concreta de devolver el capital más intereses", "La operación crediticia específica mediante la cual el Estado obtiene el préstamo", "La aptitud o capacidad política, económica y jurídica del Estado para obtener préstamos", "Un tributo sobre las operaciones financieras"], correcta: 2, exp: "Crédito (aptitud/confianza) → empréstito (la operación) → deuda (la obligación resultante)." },
        { q: "Conforme la Ley 24.156, el crédito público debe utilizarse para:", ops: ["Inversiones reproductivas, atender casos de evidente necesidad nacional, reestructurar la organización estatal o refinanciar pasivos", "Cualquier gasto corriente sin restricción", "Financiar exclusivamente el pago de sueldos", "Sustituir de forma permanente a los recursos tributarios"], correcta: 0, exp: "Es la finalidad que fija el art. 56 de la Ley de Administración Financiera." },
        { q: "La deuda externa resulta más riesgosa que la interna, principalmente, porque:", ops: ["No genera intereses", "Se contrae siempre en moneda local", "No requiere autorización legal", "Al pagarla salen divisas reales del país, presionando sobre la balanza de pagos y generando dependencia externa"], correcta: 3, exp: "La interna, en cambio, es una transferencia dentro del propio país (tesis keynesiana)." },
        { q: "La tesis keynesiana sobre la deuda pública interna («nos la debemos a nosotros mismos») sostiene que:", ops: ["Nunca debe emitirse deuda interna", "Su pago es una transferencia interna entre contribuyentes y tenedores de títulos, sin reducir la riqueza agregada del país", "Siempre traslada la carga íntegramente a las generaciones futuras", "Equivale, en sus efectos, a la deuda externa"], correcta: 1, exp: "Buchanan matiza esta tesis: sostiene que la deuda sí puede trasladar carga y afectar decisiones presentes." },
        { q: "La sostenibilidad de la deuda pública, en términos de la relación Deuda/PBI, depende centralmente de que:", ops: ["El país nunca tome deuda nueva", "El déficit primario sea siempre positivo", "Cuando la tasa de interés (r) supera al crecimiento económico (g), se necesita un superávit primario para estabilizarla", "El Banco Central emita moneda para pagarla"], correcta: 2, exp: "Es la condición clásica de sostenibilidad de la deuda (r vs. g)." },
        { q: "La «conversión» de la deuda pública, como forma de extinción, consiste en:", ops: ["Cambiar la deuda existente por otra de distintas condiciones, generalmente con menor tasa de interés", "El desconocimiento unilateral de la deuda", "Transformar deuda de corto en deuda de largo plazo", "El pago íntegro y anticipado del capital"], correcta: 0, exp: "La consolidación transforma deuda flotante en deuda de largo plazo; la conversión, en cambio, cambia las condiciones de una deuda existente." },
        { q: "En Argentina, el control externo del endeudamiento público (posterior a su ejecución) está a cargo de:", ops: ["La Oficina Nacional de Crédito Público", "El Banco Central", "La SIGEN", "La Auditoría General de la Nación (AGN), que depende del Congreso"], correcta: 3, exp: "La SIGEN es control interno (Poder Ejecutivo); la AGN es el control externo, que depende del Congreso." }
      ]
    },
    {
      unidad: "X", titulo: "Presupuesto público",
      preguntas: [
        { q: "La naturaleza jurídica del presupuesto público es la de:", ops: ["Una ley material que crea tributos y obligaciones nuevas", "Una ley formal: para los gastos es autorización y límite; para los recursos, una mera estimación", "Un decreto reglamentario del Poder Ejecutivo", "Un contrato entre la Nación y las provincias"], correcta: 1, exp: "No crea tributos: los gastos requieren autorización previa; los recursos solo se estiman." },
        { q: "El principio clásico de equilibrio presupuestario exigía que gastos y recursos fueran iguales; la visión keynesiana lo matiza al sostener que:", ops: ["El equilibrio debe lograrse mes a mes sin excepción", "El déficit está prohibido en cualquier circunstancia", "Solo importa el resultado primario, nunca el financiero", "El equilibrio puede sacrificarse con fines de estabilización (déficit en la recesión, superávit en el auge), buscándose a lo largo del ciclo económico"], correcta: 3, exp: "Es la política fiscal anticíclica aplicada al principio de equilibrio." },
        { q: "En la ejecución presupuestaria, la etapa del «compromiso» del gasto implica:", ops: ["La afectación preventiva del crédito presupuestario ante el origen de una relación jurídica con un tercero", "El pago efectivo al proveedor", "El reconocimiento de la obligación de pagar (devengado)", "La sanción de la ley de presupuesto"], correcta: 0, exp: "Las etapas son compromiso (afectación preventiva) → devengado (nace la obligación) → pago (cancelación)." },
        { q: "La Cuenta de Inversión, elaborada por la Contaduría General de la Nación, es:", ops: ["El anteproyecto de presupuesto del año siguiente", "Una ley que crea nuevos tributos", "La rendición de cuentas del Poder Ejecutivo al Congreso sobre cómo se ejecutó el presupuesto, cerrando el ciclo presupuestario", "Un instrumento exclusivo del crédito público"], correcta: 2, exp: "Debe presentarse antes del 30 de junio; el informe técnico previo está a cargo de la AGN." },
        { q: "La diferencia entre el resultado fiscal «primario» y el «financiero» radica en que:", ops: ["El primario incluye los intereses de la deuda y el financiero no", "El primario no incluye los intereses de la deuda pública, mientras que el financiero sí", "Son exactamente lo mismo", "El financiero solo se calcula a nivel municipal"], correcta: 1, exp: "El financiero determina la verdadera necesidad de financiamiento del Estado." },
        { q: "Cuando el presupuesto no se aprueba antes del inicio del ejercicio, el mecanismo de «reconducción» (art. 27, Ley 24.156) establece que:", ops: ["El Estado no puede realizar ningún gasto", "Se gobierna exclusivamente por decreto de necesidad y urgencia", "Se convoca automáticamente a elecciones", "Rige el presupuesto del ejercicio anterior hasta que se sancione el nuevo"], correcta: 3, exp: "Evita el vacío presupuestario ante la demora del Congreso." },
        { q: "El principio presupuestario de «no afectación de recursos» significa que:", ops: ["Los recursos, en general, no deben destinarse por anticipado a un gasto determinado, sino ingresar a rentas generales", "Ningún recurso puede ser gravado con impuestos", "El presupuesto debe aprobarse antes de su ejercicio (es el principio de anticipación)", "Los gastos deben especificarse partida por partida (es el principio de especificación)"], correcta: 0, exp: "Distinto de anticipación (aprobarlo antes del ejercicio) y de especificación (detallar cada crédito)." }
      ]
    },
    {
      unidad: "XI", titulo: "Federalismo fiscal",
      preguntas: [
        { q: "El «teorema de la descentralización» de Oates sostiene que, en ausencia de economías de escala y externalidades interjurisdiccionales:", ops: ["Siempre conviene centralizar la provisión de bienes públicos", "La Nación debe manejar toda la política de asignación", "Es más eficiente que cada bien público local sea provisto por el nivel de gobierno que abarca exactamente a la población beneficiada", "Los municipios no deberían tener ningún poder tributario"], correcta: 2, exp: "Permite ajustar la provisión a las preferencias locales, en lugar de una oferta uniforme central." },
        { q: "Según la teoría del federalismo fiscal, las funciones de estabilización y redistribución conviene asignarlas al nivel central porque:", ops: ["Requieren manejo macroeconómico y evitan la competencia entre jurisdicciones (que los ricos «se vayan» y los pobres «lleguen»)", "Solo la Nación tiene facultades tributarias", "Las provincias no pueden cobrar impuestos directos", "Los municipios carecen de presupuesto propio"], correcta: 0, exp: "Si una provincia redistribuye sola, altera los incentivos migratorios dentro del país." },
        { q: "El mecanismo de «votar con los pies», descripto por Tiebout como ventaja de la descentralización, consiste en que:", ops: ["Los ciudadanos eligen representantes en elecciones locales", "El Estado central impone la misma canasta de bienes a todas las jurisdicciones", "Las provincias compiten bajando impuestos indefinidamente", "Las personas se mudan a la jurisdicción cuya combinación de impuestos y servicios prefieren, revelando sus preferencias"], correcta: 3, exp: "Revela preferencias y disciplina a los gobiernos locales, de modo análogo a elegir entre productos en el mercado." },
        { q: "El desequilibrio fiscal horizontal, a diferencia del vertical, se refiere a:", ops: ["La brecha entre lo que un nivel de gobierno recauda y lo que gasta", "Las diferencias de capacidad fiscal y necesidades entre jurisdicciones de un mismo nivel (por ejemplo, provincias ricas y pobres)", "El déficit del Tesoro Nacional", "La diferencia entre gasto corriente y de capital"], correcta: 1, exp: "El vertical es entre niveles (Nación-provincias); el horizontal, entre jurisdicciones del mismo nivel." },
        { q: "La baja «correspondencia fiscal» que caracteriza al federalismo argentino se explica porque:", ops: ["Las provincias recaudan la totalidad de lo que gastan", "No existe régimen de coparticipación", "Las provincias gastan en gran medida con fondos que recauda la Nación (coparticipación), lo que diluye la responsabilidad fiscal", "Los municipios concentran toda la recaudación"], correcta: 2, exp: "A menor correspondencia, mayor incentivo a gastar de más (el que gasta no es quien recauda ni asume el costo político)." },
        { q: "El régimen de coparticipación federal de impuestos, según el art. 75 inc. 2 de la CN, se instrumenta mediante:", ops: ["Una ley-convenio, con el Senado como cámara de origen, que no puede modificarse unilateralmente ni reglamentarse", "Un decreto del Poder Ejecutivo Nacional", "Ordenanzas municipales coordinadas", "Un tratado internacional"], correcta: 0, exp: "Requiere mayoría absoluta de cada cámara y la adhesión de las provincias; rige transitoriamente la Ley 23.548." },
        { q: "En el régimen de coparticipación, la «distribución secundaria» corresponde a:", ops: ["El reparto entre la Nación y el conjunto de las provincias", "El reparto entre los tres poderes del Estado", "El financiamiento del sistema de seguridad social", "El reparto de lo coparticipable entre las distintas provincias"], correcta: 3, exp: "La primaria es Nación vs. conjunto de provincias; la secundaria, entre las provincias entre sí." }
      ]
    }
  ]
};
