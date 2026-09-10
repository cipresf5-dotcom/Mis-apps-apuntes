/* Apartado de referencia: leyes y normas (nacionales, interjurisdiccionales y
   provinciales/municipales) que aparecen en las unidades de Finanzas Públicas,
   con qué regula cada una, sus artículos clave y con qué unidad/tema se relaciona.
   Se agrega a window.CURSO.leyes y lo renderiza app.js (mismo motor que la CN). */
window.CURSO = window.CURSO || { unidades: [] };

window.CURSO.leyes = {
  intro: "Leyes y normas que aparecen en el programa, con qué regulan, sus artículos más importantes y con qué unidad/tema se relacionan. Incluye normativa tributaria nacional, de administración financiera, de federalismo y provincial/municipal (Chaco/NEA).",
  grupos: [
    {
      titulo: "1. Normativa tributaria nacional general",
      leyes: [
        { art: "Ley 11.683", dice: "Ley de Procedimiento Tributario. Hace las veces de \"código\" de los tributos nacionales: regula la determinación, verificación y percepción de los tributos, los deberes formales, la prescripción, las infracciones y sanciones.", rel: "Unidad IV (4.2, 4.3 codificación) · Unidad V (administración, evasión)",
          arts: [
            { n: "Arts. 1 y 2", t: "interpretación de las normas y principio de la realidad económica (se atiende a los actos efectivamente realizados por sobre las formas jurídicas inadecuadas)" },
            { n: "Art. 8", t: "responsables en forma solidaria (responsabilidad por deuda ajena)" },
            { n: "Arts. 16 y 17", t: "determinación de oficio del tributo por parte del fisco" },
            { n: "Arts. 56 y 57", t: "prescripción: 5 años (inscriptos) o 10 (no inscriptos); el cómputo comienza el 1.º de enero siguiente al vencimiento" }
          ] },
        { art: "Régimen Penal Tributario (Ley 27.430, Tít. IX; antes Ley 24.769)", dice: "Tipifica como delitos la evasión tributaria y previsional, la apropiación indebida de tributos y otros fraudes fiscales, con penas privativas de la libertad según montos.", rel: "Unidad V (evasión y elusión) · Unidad IV (derecho tributario penal)",
          arts: [
            { n: "Art. 1", t: "evasión simple (cuando lo evadido supera cierto monto por tributo y ejercicio)" },
            { n: "Art. 2", t: "evasión agravada (montos mayores, interposición de personas, facturas apócrifas, uso de beneficios fiscales)" }
          ] },
        { art: "Código Aduanero (Ley 22.415)", dice: "Regula el tráfico internacional de mercaderías: los derechos de importación y exportación, los regímenes y destinaciones aduaneras, y las infracciones y delitos aduaneros.", rel: "Unidad VIII (imposición al comercio exterior)",
          arts: [
            { n: "Arts. 635 y ss.", t: "derechos de importación" },
            { n: "Arts. 724 y ss.", t: "derechos de exportación" }
          ] },
        { art: "Modelo de Código Tributario para América Latina (OEA/BID, 1967)", dice: "Documento doctrinario de referencia. Define tributo, impuesto, tasa y contribución especial, y sistematiza los principios generales del derecho tributario.", rel: "Unidad III (especies tributarias) · Unidad IV (codificación)" }
      ]
    },
    {
      titulo: "2. Leyes de los principales impuestos nacionales",
      leyes: [
        { art: "Ley 20.628 — Impuesto a las Ganancias", dice: "Grava las ganancias/rentas de personas humanas y jurídicas. Sistema mixto (categorías + base global con escala progresiva para personas humanas) y criterio de renta mundial para residentes.", rel: "Unidad VI (imposición sobre los ingresos)",
          arts: [
            { n: "Art. 1", t: "ámbito: los residentes tributan por sus ganancias de fuente argentina y extranjera (renta mundial); los no residentes, solo por fuente argentina" },
            { n: "Art. 2", t: "concepto de ganancia gravada (renta-producto para personas humanas; incremento patrimonial / teoría del balance para las empresas)" },
            { n: "Deducciones personales", t: "ganancia no imponible, cargas de familia y deducción especial" },
            { n: "Categorías", t: "1.ª rentas del suelo · 2.ª de capitales · 3.ª de empresas · 4.ª del trabajo personal" }
          ] },
        { art: "Ley 23.349 — Impuesto al Valor Agregado (IVA)", dice: "Impuesto general al consumo, plurifásico no acumulativo (débito menos crédito fiscal), tipo consumo. Grava venta de cosas muebles, obras/servicios e importaciones.", rel: "Unidad VIII (imposición sobre el consumo)",
          arts: [
            { n: "Art. 1", t: "objeto: venta de cosas muebles, obras/locaciones/servicios e importaciones definitivas" },
            { n: "Art. 5", t: "momento de perfeccionamiento (nacimiento) del hecho imponible" },
            { n: "Arts. 11 y 12", t: "débito fiscal (IVA de las ventas) y crédito fiscal (IVA de las compras)" },
            { n: "Art. 28", t: "alícuotas: general 21%, diferencial 10,5% y agravada 27%" }
          ] },
        { art: "Ley 23.966", dice: "Título VI: Impuesto sobre los Bienes Personales (patrimonio de personas humanas al 31/12, en el país y el exterior). Título III: Impuesto sobre los Combustibles Líquidos.", rel: "Unidad VII (imposición al patrimonio) · Unidad VIII (impuestos específicos)",
          arts: [
            { n: "Bienes Personales (Tít. VI)", t: "objeto (bienes al 31/12), mínimo no imponible general y para casa-habitación, y alícuotas progresivas" }
          ] },
        { art: "Ley 24.674 — Impuestos Internos", dice: "Impuestos selectivos al consumo de ciertos bienes (tabaco, bebidas alcohólicas y analcohólicas, seguros, electrónica, automotores, etc.), en general monofásicos y con fin extrafiscal.", rel: "Unidad VIII (impuestos selectivos)" },
        { art: "Ley 25.413 — Débitos y Créditos bancarios (\"impuesto al cheque\")", dice: "Grava los movimientos de fondos (débitos y créditos) en cuentas bancarias. Impuesto a la circulación de la riqueza, distorsivo y con efecto cascada.", rel: "Unidad VII (circulación de la riqueza) · Unidad VIII",
          arts: [
            { n: "Alícuota general 0,6%", t: "sobre cada débito y cada crédito; una parte es computable como pago a cuenta de otros impuestos" }
          ] }
      ]
    },
    {
      titulo: "3. Administración financiera, presupuesto y responsabilidad fiscal",
      leyes: [
        { art: "Ley 24.156 — Administración Financiera y Sistemas de Control", dice: "Organiza los sistemas de presupuesto, crédito público, tesorería y contabilidad, y el control interno (SIGEN) y externo (AGN).", rel: "Unidad IX (crédito público) · Unidad X (presupuesto y control)",
          arts: [
            { n: "Art. 12", t: "universalidad: recursos y gastos por sus montos íntegros, sin compensaciones (cifras brutas)" },
            { n: "Art. 19", t: "la ley de presupuesto consta de tres títulos (disposiciones generales; administración central; organismos descentralizados)" },
            { n: "Art. 27", t: "reconducción: si no se aprueba el presupuesto, rige el del año anterior" },
            { n: "Art. 28", t: "equilibrio: todo incremento del gasto debe contar con su financiamiento" },
            { n: "Arts. 56 y 60", t: "crédito público: concepto (56) y datos mínimos que debe fijar la ley de presupuesto —tipo, monto máximo, plazo mínimo y destino— (60)" }
          ] },
        { art: "Ley 25.152 — Solvencia Fiscal", dice: "Estableció metas de reducción del déficit, la elaboración de un presupuesto plurianual y la creación de un fondo anticíclico fiscal.", rel: "Unidad X (concepciones actuales; presupuesto plurianual)",
          arts: [
            { n: "Art. 6", t: "presupuesto plurianual (mínimo 3 años): contenido y proyecciones de recursos, gastos e inversiones" }
          ] },
        { art: "Ley 25.917 — Régimen Federal de Responsabilidad Fiscal", dice: "Coordina las finanzas de Nación y provincias: reglas sobre el crecimiento del gasto, el endeudamiento y la transparencia; creó el Consejo Federal de Responsabilidad Fiscal. El Chaco adhirió por Ley 5483.", rel: "Unidad X (reglas fiscales) · Unidad XI (federalismo)" }
      ]
    },
    {
      titulo: "4. Federalismo fiscal y coordinación",
      leyes: [
        { art: "Ley 23.548 — Coparticipación Federal de Recursos Fiscales", dice: "Régimen (transitorio, aún vigente) que distribuye la masa coparticipable entre la Nación y las provincias.", rel: "Unidad XI (coparticipación) · Unidad IV (4.6) · Unidad VIII",
          arts: [
            { n: "Art. 3", t: "distribución primaria (entre la Nación y el conjunto de las provincias)" },
            { n: "Art. 4", t: "distribución secundaria (entre las provincias, según coeficientes)" },
            { n: "Art. 9", t: "las provincias —y sus municipios— se obligan a no aplicar tributos análogos a los coparticipados, salvo tasas por servicios efectivamente prestados" }
          ] },
        { art: "Convenio Multilateral (1977)", dice: "Acuerdo interjurisdiccional que evita la múltiple imposición del Impuesto sobre los Ingresos Brutos cuando una actividad se ejerce en varias provincias.", rel: "Unidad VIII (Ingresos Brutos) · Unidad IV (4.6)",
          arts: [
            { n: "Art. 2", t: "régimen general: distribuye la base imponible 50% por los ingresos y 50% por los gastos de cada jurisdicción" },
            { n: "Art. 35", t: "tasa municipal de seguridad e higiene: límite a lo que los municipios pueden gravar" }
          ] },
        { art: "Pactos Fiscales", dice: "Acuerdos entre la Nación y las provincias (1992, 1993 y el Consenso Fiscal de 2017 y siguientes) para armonizar tributos, derogar gravámenes distorsivos y ordenar las relaciones financieras interjurisdiccionales.", rel: "Unidad XI (coordinación) · Unidad VIII (Ingresos Brutos, Sellos)" }
      ]
    },
    {
      titulo: "5. Normativa provincial y municipal (Chaco / NEA / otras)",
      leyes: [
        { art: "Código Tributario de la Provincia del Chaco (Ley 2444/1979)", dice: "Regula los tributos provinciales (Inmobiliario, Ingresos Brutos, Sellos, etc.) y sus principios generales. No contiene un título de contribución de mejoras (esa está en la legislación de vialidad).", rel: "Unidad III (recursos, tasas y contribuciones) · Unidad IV (potestad provincial)",
          arts: [
            { n: "Título Preliminar", t: "define impuesto, tasa y contribución (esta última, por beneficios o mejoras derivados de obras o servicios públicos)" },
            { n: "Art. 9", t: "interpretación: admisibles todos los métodos, pero las exenciones se interpretan en forma estricta y no se crea gravamen sino por ley" }
          ] },
        { art: "Ley Orgánica Municipal del Chaco N.º 4233", dice: "Regula la organización y las competencias de los municipios chaqueños, incluida su potestad tributaria (tasas y contribuciones) dentro de la autonomía municipal reglada.", rel: "Unidad IV (4.6 potestad tributaria municipal)" },
        { art: "Ley de Administración Financiera del Chaco N.º 4787", dice: "Organiza el sistema presupuestario y de control de la Provincia del Chaco (equivalente provincial de la Ley 24.156).", rel: "Unidad X (presupuestos provinciales del NEA)" },
        { art: "Constitución de la Provincia del Chaco (Secc. Séptima, arts. 187-206)", dice: "Establece el régimen municipal de la provincia y el alcance de la autonomía de los municipios (institucional, político, administrativo, económico y financiero).", rel: "Unidad IV (4.6) · Unidad XI" },
        { art: "Carta Orgánica de la Ciudad de Resistencia (Tít. IV, Cap. II, arts. 194-195)", dice: "Norma de máximo rango del municipio de Resistencia: fija sus recursos y su potestad tributaria (tasas retributivas de servicios y contribuciones).", rel: "Unidad IV (4.6 potestad municipal)" },
        { art: "Ley 14.044 (Provincia de Buenos Aires)", dice: "Restableció (2010) el Impuesto a la Transmisión Gratuita de Bienes (herencias, legados y donaciones), único caso vigente de imposición sucesoria en el país.", rel: "Unidad VII (imposición a la transmisión gratuita de bienes)" }
      ]
    }
  ]
};
