/* Apartado de referencia: artículos de la Constitución Nacional necesarios para
   Finanzas Públicas, con qué dice cada uno y con qué unidad/tema se relaciona.
   Se agrega a window.CURSO.constitucion y lo renderiza app.js (botón del menú). */
window.CURSO = window.CURSO || { unidades: [] };

window.CURSO.constitucion = {
  intro: "Artículos e incisos de la Constitución Nacional que conviene aprender para Finanzas Públicas. De cada uno se indica qué dice y con qué unidad/tema se relaciona. Agrupados por temática.",
  grupos: [
    {
      titulo: "1. Tesoro, recursos y crédito público",
      articulos: [
        { art: "Art. 4", dice: "El Gobierno federal provee a los gastos de la Nación con los fondos del Tesoro Nacional, formado por: los derechos de importación y exportación; la venta o locación de tierras de propiedad nacional; la renta de Correos; las demás contribuciones que equitativa y proporcionalmente a la población imponga el Congreso; y los empréstitos y operaciones de crédito que decrete el mismo Congreso para urgencias de la Nación o empresas de utilidad nacional.", rel: "Unidad III (recursos del Estado) · Unidad IX (crédito público) · Unidad IV (4.4)" },
        { art: "Art. 9", dice: "En todo el territorio de la Nación no habrá más aduanas que las nacionales, en las cuales regirán las tarifas que sancione el Congreso.", rel: "Unidad IV (4.4 aduanas, exclusivas de la Nación) · Unidad VIII (comercio exterior)" },
        { art: "Art. 75 inc. 1", dice: "Corresponde al Congreso legislar en materia aduanera y establecer los derechos de importación y exportación, los cuales —así como las avaluaciones sobre las que recaigan— serán uniformes en toda la Nación.", rel: "Unidad IV (4.4) · Unidad VIII (imposición al comercio exterior)" },
        { art: "Art. 75 inc. 4", dice: "Corresponde al Congreso contraer empréstitos sobre el crédito de la Nación.", rel: "Unidad IX (crédito y deuda pública)" },
        { art: "Art. 75 inc. 7", dice: "Corresponde al Congreso arreglar el pago de la deuda interior y exterior de la Nación.", rel: "Unidad IX (deuda pública)" },
        { art: "Art. 75 inc. 11", dice: "Corresponde al Congreso hacer sellar moneda, fijar su valor y el de las extranjeras, y adoptar un sistema uniforme de pesos y medidas.", rel: "Unidad V (inflación como recurso) · Unidad II (recursos monetarios)" }
      ]
    },
    {
      titulo: "2. Libre circulación territorial y comercio",
      articulos: [
        { art: "Art. 10", dice: "En el interior de la República es libre de derechos la circulación de los efectos de producción o fabricación nacional, así como la de los géneros y mercancías de todas clases despachados en las aduanas exteriores.", rel: "Unidad IV (4.4 prohibición de aduanas interiores)" },
        { art: "Art. 11", dice: "Los artículos de producción o fabricación nacional o extranjera, y los ganados, que pasen por el territorio de una provincia a otra, serán libres de los derechos llamados de tránsito.", rel: "Unidad IV (4.4)" },
        { art: "Art. 12", dice: "Los buques destinados de una provincia a otra no serán obligados a entrar, anclar y pagar derechos por causa de tránsito; ni se podrán conceder preferencias a un puerto respecto de otro.", rel: "Unidad IV (4.4)" },
        { art: "Art. 75 inc. 13", dice: "Corresponde al Congreso reglar el comercio con las naciones extranjeras y de las provincias entre sí (cláusula comercial). Límite a los tributos locales que entorpezcan el comercio interjurisdiccional (no pueden funcionar como aduana interior).", rel: "Unidad IV (4.4 distribución implícita) · Unidad VIII (Ingresos Brutos, Convenio Multilateral)" },
        { art: "Art. 126", dice: "Las provincias no ejercen el poder delegado a la Nación. No pueden, entre otras cosas, establecer aduanas provinciales ni acuñar moneda.", rel: "Unidad IV (4.4) · Unidad XI (federalismo)" }
      ]
    },
    {
      titulo: "3. Principios y garantías constitucionales tributarias",
      nota: "Cada principio tributario se apoya en uno o más artículos: legalidad / reserva de ley (arts. 4, 17, 19, 52, 75 inc. 1 y 2, y 99 inc. 3); igualdad y generalidad (art. 16); proporcionalidad y equidad (arts. 4 y 75 inc. 2); no confiscatoriedad (arts. 4 y 17); razonabilidad (art. 28); supremacía constitucional (art. 31).",
      articulos: [
        { art: "Art. 4", dice: "Además de formar el Tesoro Nacional (ver grupo 1), es base de la equidad y la proporcionalidad: las contribuciones deben imponerse \"equitativa y proporcionalmente a la población\"; y de la legalidad (solo el Congreso las establece).", rel: "Unidad IV (4.5 principios) · Unidad V" },
        { art: "Art. 75 inc. 2 (principio)", dice: "Refuerza la proporcionalidad y la legalidad: las contribuciones directas que fija el Congreso deben ser \"proporcionalmente iguales en todo el territorio de la Nación\". (Su alcance sobre coparticipación se detalla en el grupo 4.)", rel: "Unidad IV (4.5) · Unidad V" },
        { art: "Art. 16", dice: "Todos los habitantes son iguales ante la ley. \"La igualdad es la base del impuesto y de las cargas públicas.\" Fundamento de los principios de igualdad y generalidad.", rel: "Unidad IV (4.5) · Unidad V (teoría de la imposición)" },
        { art: "Art. 17", dice: "La propiedad es inviolable. Sólo el Congreso impone las contribuciones que se expresan en el art. 4 (principio de legalidad). Ningún servicio personal es exigible sino en virtud de ley. La confiscación de bienes queda borrada para siempre del Código Penal. Base de la legalidad y de la no confiscatoriedad.", rel: "Unidad IV (4.5 legalidad y no confiscatoriedad) · Unidad V" },
        { art: "Art. 19", dice: "Ningún habitante será obligado a hacer lo que no manda la ley, ni privado de lo que ella no prohíbe (principio de reserva de ley).", rel: "Unidad IV (4.5 legalidad / reserva)" },
        { art: "Art. 28", dice: "Los principios, garantías y derechos reconocidos no podrán ser alterados por las leyes que reglamenten su ejercicio (principio de razonabilidad).", rel: "Unidad IV (4.5 razonabilidad) · Unidad V" },
        { art: "Art. 31", dice: "Esta Constitución, las leyes que en su consecuencia dicte el Congreso y los tratados con las potencias extranjeras son la ley suprema de la Nación (supremacía constitucional).", rel: "Unidad IV (4.2 fuentes; 4.6 límites municipales)" },
        { art: "Art. 99 inc. 3", dice: "El Poder Ejecutivo no podrá, bajo pena de nulidad absoluta e insanable, emitir disposiciones de carácter legislativo. Los DNU están expresamente vedados en materia penal, tributaria, electoral y de partidos políticos. Refuerza la legalidad tributaria.", rel: "Unidad IV (4.5) · Unidad V" }
      ]
    },
    {
      titulo: "4. Distribución de potestades y federalismo fiscal",
      articulos: [
        { art: "Art. 5", dice: "Cada provincia dictará para sí una constitución bajo el sistema representativo republicano, que asegure la administración de justicia, su régimen municipal y la educación primaria.", rel: "Unidad IV (4.6 municipios) · Unidad XI · Unidad X (gastos provinciales)" },
        { art: "Art. 75 inc. 2", dice: "Corresponde al Congreso imponer contribuciones indirectas como facultad concurrente con las provincias, e imponer contribuciones directas por tiempo determinado, proporcionalmente iguales en todo el territorio, siempre que la defensa, la seguridad común y el bien general lo exijan. Estas contribuciones son coparticipables; una ley convenio, sobre la base de acuerdos entre la Nación y las provincias, instituye regímenes de coparticipación, con distribución equitativa, solidaria y según criterios objetivos de reparto.", rel: "Unidad IV (4.4 distribución de facultades) · Unidad XI (coparticipación)" },
        { art: "Art. 75 inc. 3", dice: "Corresponde al Congreso establecer y modificar asignaciones específicas de recursos coparticipables, por tiempo determinado, mediante ley especial aprobada por la mayoría absoluta de la totalidad de los miembros de cada Cámara.", rel: "Unidad XI (coparticipación)" },
        { art: "Art. 75 inc. 9", dice: "Corresponde al Congreso acordar subsidios del Tesoro nacional a las provincias cuyas rentas no alcancen, según sus presupuestos, a cubrir sus gastos ordinarios.", rel: "Unidad XI (transferencias) · Unidad X" },
        { art: "Art. 121", dice: "Las provincias conservan todo el poder no delegado por esta Constitución al Gobierno federal, y el que expresamente se hayan reservado por pactos especiales al tiempo de su incorporación (poder residual / no delegado).", rel: "Unidad IV (4.1 y 4.4) · Unidad XI" },
        { art: "Art. 122", dice: "Las provincias se dan sus propias instituciones locales y se rigen por ellas; eligen sus gobernadores, legisladores y demás funcionarios, sin intervención del Gobierno federal.", rel: "Unidad XI (autonomía provincial)" },
        { art: "Art. 123", dice: "Cada provincia dicta su propia constitución conforme al art. 5, asegurando la autonomía municipal y reglando su alcance y contenido en el orden institucional, político, administrativo, económico y financiero.", rel: "Unidad IV (4.6 autonomía municipal) · Unidad XI" },
        { art: "Art. 129", dice: "La Ciudad de Buenos Aires tendrá un régimen de gobierno autónomo, con facultades propias de legislación y jurisdicción.", rel: "Unidad XI (federalismo; CABA en la coparticipación)" }
      ]
    },
    {
      titulo: "5. Legislación de fondo, tratados y cláusulas de progreso",
      articulos: [
        { art: "Art. 75 inc. 12", dice: "Corresponde al Congreso dictar los códigos Civil y Comercial, Penal, de Minería, y del Trabajo y Seguridad Social (legislación de fondo), sin que ello altere las jurisdicciones locales.", rel: "Unidad IV (4.4 distribución implícita; prescripción de tributos locales)" },
        { art: "Art. 75 inc. 18", dice: "Cláusula del progreso: corresponde al Congreso proveer lo conducente a la prosperidad del país, al adelanto y bienestar de todas las provincias, promoviendo la industria, la inmigración, la construcción de ferrocarriles, la colonización, etc. (habilita exenciones nacionales, salvo tasas y contribuciones de mejoras razonables).", rel: "Unidad IV (4.4) · Unidad III" },
        { art: "Art. 75 inc. 19", dice: "Cláusula del nuevo progreso: proveer lo conducente al desarrollo humano, al progreso económico con justicia social, a la generación de empleo, a la productividad, etc.", rel: "Unidad IV (4.2 fuentes) · Unidad II (gasto social)" },
        { art: "Art. 75 inc. 22", dice: "Aprobar o desechar tratados. Enumera los tratados de derechos humanos que tienen jerarquía constitucional; los demás tratados tienen jerarquía superior a las leyes.", rel: "Unidad IV (4.2 fuentes / pirámide jurídica)" },
        { art: "Art. 75 inc. 24", dice: "Aprobar tratados de integración que deleguen competencias y jurisdicción a organizaciones supraestatales; las normas dictadas en su consecuencia tienen jerarquía superior a las leyes.", rel: "Unidad IV (4.2 fuentes) · doble imposición internacional" },
        { art: "Art. 75 inc. 30", dice: "Dictar la legislación necesaria para el cumplimiento de los fines específicos de los establecimientos de utilidad nacional; las provincias y municipios conservan sus poderes de policía e imposición en tanto no interfieran con esos fines.", rel: "Unidad IV (4.4 establecimientos de utilidad nacional)" }
      ]
    },
    {
      titulo: "6. Presupuesto, ejecución y control",
      articulos: [
        { art: "Art. 52", dice: "A la Cámara de Diputados corresponde exclusivamente la iniciativa de las leyes sobre contribuciones y reclutamiento de tropas (cámara de origen en materia tributaria y presupuestaria).", rel: "Unidad IV (4.5 legalidad) · Unidad X (ciclo presupuestario)" },
        { art: "Art. 75 inc. 8", dice: "Corresponde al Congreso fijar anualmente el presupuesto general de gastos y cálculo de recursos de la administración nacional (conforme al programa general de gobierno y al plan de inversiones), y aprobar o desechar la cuenta de inversión.", rel: "Unidad X (presupuesto y cuenta de inversión)" },
        { art: "Art. 85", dice: "El control externo del sector público nacional es atribución propia del Poder Legislativo. El examen y la opinión sobre la ejecución del presupuesto se sustentan en los dictámenes de la Auditoría General de la Nación (organismo con autonomía funcional).", rel: "Unidad X (control externo · AGN)" },
        { art: "Art. 86", dice: "El Defensor del Pueblo es un órgano independiente cuya misión es la defensa y protección de los derechos, garantías e intereses tutelados por la Constitución, y el control del ejercicio de las funciones administrativas públicas.", rel: "Unidad X (control)" },
        { art: "Art. 99 inc. 10", dice: "El Presidente supervisa el ejercicio de la facultad del Jefe de Gabinete respecto de la recaudación de las rentas de la Nación y de su inversión con arreglo a la ley de presupuesto.", rel: "Unidad X (ejecución y supervisión)" },
        { art: "Art. 100 inc. 6", dice: "El Jefe de Gabinete envía al Congreso el proyecto de ley de presupuesto nacional, previo tratamiento en acuerdo de gabinete y aprobación del Poder Ejecutivo.", rel: "Unidad X (formulación del presupuesto)" },
        { art: "Art. 100 inc. 7", dice: "El Jefe de Gabinete hace recaudar las rentas de la Nación y ejecuta la ley de presupuesto nacional.", rel: "Unidad X (ejecución)" },
        { art: "Art. 116", dice: "Corresponde a la Corte Suprema y a los tribunales inferiores el conocimiento y decisión de todas las causas que versen sobre puntos regidos por la Constitución y las leyes de la Nación (base del control judicial de constitucionalidad).", rel: "Unidad IV (4.1 control jurisdiccional) · Unidad X" },
        { art: "Art. 120", dice: "El Ministerio Público es un órgano independiente que tiene por función promover la actuación de la justicia en defensa de la legalidad y de los intereses generales de la sociedad.", rel: "Unidad X (control / actividad financiera en la CN)" }
      ]
    }
  ]
};
