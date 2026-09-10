/* Apartado de referencia: leyes y normas (nacionales, interjurisdiccionales y
   provinciales/municipales) que aparecen en las unidades de Finanzas Públicas,
   con qué regula cada una y con qué unidad/tema se relaciona.
   Se agrega a window.CURSO.leyes y lo renderiza app.js (mismo motor que la CN). */
window.CURSO = window.CURSO || { unidades: [] };

window.CURSO.leyes = {
  intro: "Leyes y normas que aparecen en el programa, con qué regulan y con qué unidad/tema se relacionan. Incluye normativa tributaria nacional, de administración financiera, de federalismo y provincial/municipal (Chaco/NEA).",
  grupos: [
    {
      titulo: "1. Normativa tributaria nacional general",
      leyes: [
        { art: "Ley 11.683", dice: "Ley de Procedimiento Tributario. Hace las veces de \"código\" de los tributos nacionales: regula la determinación, verificación y percepción de los tributos, los deberes formales, la prescripción (arts. 56/57), las infracciones y el principio de la realidad económica (art. 2).", rel: "Unidad IV (4.2, 4.3 codificación) · Unidad V (administración, evasión)" },
        { art: "Régimen Penal Tributario (Ley 27.430, Tít. IX; antes Ley 24.769)", dice: "Tipifica como delitos la evasión tributaria y previsional, la apropiación indebida de tributos y otros fraudes fiscales, con penas privativas de la libertad según montos.", rel: "Unidad V (evasión y elusión) · Unidad IV (derecho tributario penal)" },
        { art: "Código Aduanero (Ley 22.415)", dice: "Regula el tráfico internacional de mercaderías: los derechos de importación y exportación, los regímenes y destinaciones aduaneras, y las infracciones y delitos aduaneros.", rel: "Unidad VIII (imposición al comercio exterior)" },
        { art: "Modelo de Código Tributario para América Latina (OEA/BID, 1967)", dice: "Documento doctrinario de referencia. Define tributo, impuesto, tasa y contribución especial, y sistematiza los principios generales del derecho tributario.", rel: "Unidad III (especies tributarias) · Unidad IV (codificación)" }
      ]
    },
    {
      titulo: "2. Leyes de los principales impuestos nacionales",
      leyes: [
        { art: "Ley 20.628 — Impuesto a las Ganancias", dice: "Grava las ganancias/rentas de personas humanas y jurídicas. Adopta un sistema mixto (categorías + base global con escala progresiva para personas humanas) y el criterio de renta mundial para residentes.", rel: "Unidad VI (imposición sobre los ingresos)" },
        { art: "Ley 23.349 — Impuesto al Valor Agregado (IVA)", dice: "Impuesto general al consumo, plurifásico no acumulativo (débito fiscal menos crédito fiscal), tipo consumo. Grava venta de cosas muebles, obras/servicios y las importaciones.", rel: "Unidad VIII (imposición sobre el consumo)" },
        { art: "Ley 23.966", dice: "Título VI: Impuesto sobre los Bienes Personales (patrimonio bruto de personas humanas al 31/12, en el país y el exterior). Título III: Impuesto sobre los Combustibles Líquidos.", rel: "Unidad VII (imposición al patrimonio) · Unidad VIII (impuestos específicos)" },
        { art: "Ley 24.674 — Impuestos Internos", dice: "Impuestos selectivos al consumo de ciertos bienes (tabaco, bebidas alcohólicas y analcohólicas, seguros, electrónica, automotores, etc.), en general monofásicos y con fin extrafiscal.", rel: "Unidad VIII (impuestos selectivos)" },
        { art: "Ley 25.413 — Débitos y Créditos bancarios (\"impuesto al cheque\")", dice: "Grava los movimientos de fondos (débitos y créditos) en cuentas bancarias y otras operatorias. Es un impuesto a la circulación de la riqueza, distorsivo y con efecto cascada.", rel: "Unidad VII (circulación de la riqueza) · Unidad VIII" }
      ]
    },
    {
      titulo: "3. Administración financiera, presupuesto y responsabilidad fiscal",
      leyes: [
        { art: "Ley 24.156 — Administración Financiera y Sistemas de Control", dice: "Organiza los sistemas de presupuesto, crédito público (arts. 56-71), tesorería y contabilidad, y el control interno (SIGEN) y externo (AGN). Estructura la ley de presupuesto (art. 19) y sus principios.", rel: "Unidad IX (crédito público) · Unidad X (presupuesto y control)" },
        { art: "Ley 25.152 — Solvencia Fiscal", dice: "Estableció metas de reducción del déficit, la elaboración de un presupuesto plurianual (mín. 3 años, art. 6) y la creación de un fondo anticíclico fiscal.", rel: "Unidad X (concepciones actuales; presupuesto plurianual)" },
        { art: "Ley 25.917 — Régimen Federal de Responsabilidad Fiscal", dice: "Coordina las finanzas de Nación y provincias: reglas sobre el crecimiento del gasto, el endeudamiento y la transparencia; creó el Consejo Federal de Responsabilidad Fiscal. El Chaco adhirió por Ley 5483.", rel: "Unidad X (reglas fiscales) · Unidad XI (federalismo)" }
      ]
    },
    {
      titulo: "4. Federalismo fiscal y coordinación",
      leyes: [
        { art: "Ley 23.548 — Coparticipación Federal de Recursos Fiscales", dice: "Régimen transitorio (aún vigente) que distribuye la masa coparticipable: distribución primaria (Nación / conjunto de provincias) y secundaria (entre provincias). Su art. 9 obliga a las provincias y municipios a no aplicar tributos análogos a los coparticipados (salvo tasas por servicios efectivos).", rel: "Unidad XI (coparticipación) · Unidad IV (4.6 límites municipales) · Unidad VIII" },
        { art: "Convenio Multilateral (1977)", dice: "Acuerdo interjurisdiccional que evita la múltiple imposición del Impuesto sobre los Ingresos Brutos cuando una actividad se ejerce en varias provincias: distribuye la base (régimen general 50% ingresos / 50% gastos, y regímenes especiales). Su art. 35 rige la tasa municipal de seguridad e higiene.", rel: "Unidad VIII (Ingresos Brutos) · Unidad IV (4.6)" },
        { art: "Pactos Fiscales", dice: "Acuerdos entre la Nación y las provincias (p. ej. 1992, 1993 y el Consenso Fiscal de 2017 y siguientes) para armonizar tributos, derogar gravámenes distorsivos y ordenar las relaciones financieras interjurisdiccionales.", rel: "Unidad XI (coordinación) · Unidad VIII (Ingresos Brutos, Sellos)" }
      ]
    },
    {
      titulo: "5. Normativa provincial y municipal (Chaco / NEA / otras)",
      leyes: [
        { art: "Código Tributario de la Provincia del Chaco (Ley 2444/1979)", dice: "Regula los tributos provinciales (Impuesto Inmobiliario, Ingresos Brutos, Sellos, etc.), sus principios generales, la interpretación (art. 9) y la realidad económica. No contiene un título de contribución de mejoras (ver ley especial de vialidad).", rel: "Unidad III (recursos, tasas y contribuciones) · Unidad IV (potestad provincial)" },
        { art: "Ley Orgánica Municipal del Chaco N.º 4233", dice: "Regula la organización y las competencias de los municipios chaqueños, incluida su potestad tributaria (tasas y contribuciones) dentro del marco de la autonomía municipal reglada.", rel: "Unidad IV (4.6 potestad tributaria municipal)" },
        { art: "Ley de Administración Financiera del Chaco N.º 4787", dice: "Organiza el sistema presupuestario y de control de la Provincia del Chaco (equivalente provincial de la Ley 24.156).", rel: "Unidad X (presupuestos provinciales del NEA)" },
        { art: "Constitución de la Provincia del Chaco (Secc. Séptima, arts. 187-206)", dice: "Establece el régimen municipal de la provincia y el alcance de la autonomía de los municipios (institucional, político, administrativo, económico y financiero).", rel: "Unidad IV (4.6) · Unidad XI" },
        { art: "Carta Orgánica de la Ciudad de Resistencia (Tít. IV, Cap. II, arts. 194-195)", dice: "Norma de máximo rango del municipio de Resistencia: fija sus recursos y su potestad tributaria (tasas retributivas de servicios y contribuciones).", rel: "Unidad IV (4.6 potestad municipal)" },
        { art: "Ley 14.044 (Provincia de Buenos Aires)", dice: "Restableció (2010) el Impuesto a la Transmisión Gratuita de Bienes (herencias, legados y donaciones), único caso vigente de imposición sucesoria en el país.", rel: "Unidad VII (imposición a la transmisión gratuita de bienes)" }
      ]
    }
  ]
};
