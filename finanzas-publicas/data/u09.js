window.CURSO.unidades.push({
  id: 9,
  numero: "IX",
  titulo: "Crédito y Deuda Pública",
  bibliografia: [
    "Jarach, D. (2013) Parte XII, Cap. I",
    "Villegas, H. B. (2021) Cap. V",
    "Stiglitz & Rosengard (2016) 6ª parte, pto. 24"
  ],
  temas: [
    {
      id: "9.1",
      titulo: "Crédito Público. Concepto. Características y evolución. Organismos de control. Materialización",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Crédito público:</b> es la <strong>aptitud o capacidad del Estado para obtener préstamos</strong>, basada en la confianza que inspira (su patrimonio, sus ingresos futuros y su conducta como deudor). El <strong>empréstito</strong> es la operación concreta; la <strong>deuda pública</strong> es la obligación resultante.</div>
<p>Distinguir: <em>crédito</em> (capacidad/confianza) → <em>empréstito</em> (operación) → <em>deuda</em> (obligación de devolver con intereses).</p>

<h3>Evolución del concepto</h3>
<ul>
  <li><strong>Finanzas clásicas:</strong> el crédito era un recurso <strong>extraordinario</strong>, solo admisible para gastos excepcionales (guerras, catástrofes) o inversiones reproductivas; el presupuesto debía equilibrarse con tributos.</li>
  <li><strong>Finanzas modernas (keynesianas):</strong> el crédito es un recurso <strong>ordinario</strong> y un <strong>instrumento de política económica</strong> (financiar el desarrollo, regular la liquidez, política anticíclica).</li>
</ul>

<h3>Características</h3>
<ul>
  <li>Es un recurso <strong>derivado</strong> (proviene del patrimonio de terceros) y, en principio, de fuente <strong>voluntaria/contractual</strong> (a diferencia del tributo, coactivo).</li>
  <li>Genera una <strong>obligación de devolución</strong> (amortización) más el pago de <strong>intereses</strong> (servicio de la deuda).</li>
  <li>Implica <strong>transferir carga al futuro</strong>: se usa hoy y se paga mañana (problema intergeneracional).</li>
</ul>

<h3>Formas de materialización</h3>
<ul>
  <li><strong>Títulos públicos</strong> (bonos, letras, obligaciones): el instrumento típico, colocados en el mercado.</li>
  <li><strong>Préstamos de organismos internacionales</strong> (FMI, BM, BID).</li>
  <li><strong>Préstamos bancarios</strong> y adelantos del Banco Central.</li>
  <li><strong>Deuda con proveedores</strong> y emisión de instrumentos de corto plazo (Letras del Tesoro).</li>
</ul>

<h3>Organismos de control y marco legal</h3>
<p>En Argentina, la <strong>Ley 24.156</strong> (Administración Financiera) regula el sistema de crédito público (arts. 56 a 71): toda operación requiere <strong>autorización legal</strong> (en la ley de presupuesto o ley especial). Controlan: la <strong>Oficina Nacional de Crédito Público</strong> (órgano rector), la <strong>SIGEN</strong> (control interno) y la <strong>AGN</strong> (control externo, depende del Congreso). Rige el principio de legalidad: no hay endeudamiento válido sin ley.</p>
`
    },
    {
      id: "9.2",
      titulo: "Deuda Pública. Concepto. Clasificación. Interna y externa. Directa e indirecta. Extinción",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Deuda pública:</b> conjunto de obligaciones que asume el Estado como consecuencia del uso del crédito público (capital adeudado más intereses).</div>

<h3>Clasificaciones</h3>
<h4>Interna y externa</h4>
<table>
  <tr><th>Criterio</th><th>Interna</th><th>Externa</th></tr>
  <tr><td><strong>Económico</strong> (el más relevante)</td><td>El acreedor reside en el país; los fondos provienen del ahorro nacional. No hay transferencia de riqueza al exterior.</td><td>El acreedor reside en el exterior; implica entrada de divisas al contraerla y <strong>salida de divisas</strong> al pagarla (afecta la balanza de pagos).</td></tr>
  <tr><td><strong>Jurídico</strong></td><td>Se rige por el derecho y la jurisdicción nacional, moneda local.</td><td>Sujeta a ley y jurisdicción extranjera, moneda extranjera.</td></tr>
</table>

<h4>Otras clasificaciones</h4>
<ul>
  <li><strong>Directa e indirecta:</strong> <em>directa</em> es la asumida por el propio Estado central; <em>indirecta</em> la que asume un ente y el Estado <strong>garantiza/avala</strong> (deuda de empresas públicas, provincias avaladas).</li>
  <li><strong>Administrativa y financiera:</strong> según provenga de la gestión administrativa (proveedores) o de operaciones de crédito (títulos).</li>
  <li><strong>Flotante y consolidada:</strong> <em>flotante</em> es la de corto plazo / tesorería; <em>consolidada</em> la de largo plazo e incorporada de forma permanente.</li>
  <li><strong>A corto, mediano y largo plazo.</strong></li>
  <li><strong>Perpetua y redimible:</strong> la <em>perpetua</em> solo paga renta sin obligación de devolver el capital en fecha cierta (casi en desuso); la <em>redimible</em> tiene plazo de devolución.</li>
</ul>

<h3>Formas de extinción</h3>
<ul>
  <li><strong>Amortización:</strong> el pago/devolución del capital. Puede ser <em>obligatoria</em> (en fecha fija), <em>facultativa</em> (el Estado elige cuándo, dentro de un plazo) o <em>indirecta</em> (por emisión monetaria).</li>
  <li><strong>Conversión:</strong> cambio de la deuda existente por otra de distintas condiciones (suele bajar la tasa de interés). Forzosa, facultativa u optativa.</li>
  <li><strong>Consolidación:</strong> transformar deuda de corto plazo (flotante) en deuda de largo plazo.</li>
  <li><strong>Renegociación / reestructuración:</strong> acordar nuevas condiciones (quita, espera, canje) ante dificultades de pago.</li>
  <li><strong>Repudio:</strong> desconocimiento unilateral de la deuda (acto ilícito, salvo deuda "odiosa"); <strong>moratoria/default:</strong> cesación de pagos.</li>
</ul>
`
    },
    {
      id: "9.3",
      titulo: "Efectos económicos de la deuda pública. Interna y externa",
      contenido: `
<p>El endeudamiento tiene efectos distintos según sea interno o externo, el destino de los fondos y la coyuntura.</p>

<h3>¿Traslada carga a las generaciones futuras?</h3>
<div class="callout">Debate clásico:
<ul>
  <li><strong>Tesis clásica:</strong> la deuda <strong>traslada la carga al futuro</strong>, porque las generaciones venideras deberán pagar capital e intereses (vía impuestos).</li>
  <li><strong>Tesis keynesiana / "deuda interna no es carga":</strong> en la deuda <em>interna</em>, "nos debemos a nosotros mismos": el pago es una <strong>transferencia interna</strong> (de contribuyentes a tenedores de títulos), sin disminuir la riqueza agregada del país. La verdadera carga es la del <em>presente</em> (los recursos reales se usan ahora).</li>
  <li><strong>Buchanan / equivalencia ricardiana:</strong> matizan: la deuda sí puede trasladar carga y afectar decisiones presentes (los agentes anticipan impuestos futuros).</li>
</ul>
</div>

<h3>Efectos de la deuda interna</h3>
<ul>
  <li>No hay salida de riqueza al exterior; el pago es una <strong>redistribución interna</strong> (puede ser regresiva: de contribuyentes a tenedores de bonos, generalmente de mayores ingresos).</li>
  <li>Riesgo de <strong>"crowding out" (efecto desplazamiento):</strong> el Estado compite por el ahorro interno, sube la tasa de interés y <strong>desplaza la inversión privada</strong>.</li>
  <li>En recesión con capacidad ociosa, puede ser <strong>expansiva</strong> sin desplazar (keynesiano).</li>
</ul>

<h3>Efectos de la deuda externa</h3>
<ul>
  <li>Al contraerla: <strong>ingresan divisas</strong> (alivia la restricción externa, permite importar/invertir).</li>
  <li>Al pagarla: <strong>salen divisas</strong> reales del país → <strong>sí</strong> hay transferencia de riqueza al exterior y carga sobre la balanza de pagos.</li>
  <li>Genera <strong>dependencia</strong> y vulnerabilidad ante shocks (tipo de cambio, tasa internacional).</li>
  <li>Es beneficiosa si financia <strong>inversiones reproductivas</strong> que generan la capacidad de repago (divisas); peligrosa si financia gasto corriente.</li>
</ul>
<p class="muted"><strong>Regla de oro:</strong> endeudarse para <em>inversión</em> (que se autofinancia y beneficia también a quienes pagarán) es más justificable que endeudarse para <em>gasto corriente</em>.</p>
`
    },
    {
      id: "9.4",
      titulo: "Presión relativa de la deuda pública. Indicadores",
      contenido: `
<h3>Concepto</h3>
<p>La magnitud absoluta de la deuda dice poco; importa su tamaño <strong>relativo</strong> a la capacidad de pago del país. Para ello se usan <strong>indicadores</strong> de sostenibilidad y solvencia.</p>

<h3>Principales indicadores</h3>
<ul>
  <li><strong>Deuda / PBI:</strong> el más usado. Relaciona el stock de deuda con el tamaño de la economía. Mide la <strong>solvencia</strong> de largo plazo.</li>
  <li><strong>Servicios de la deuda (intereses + amortizaciones) / Ingresos públicos:</strong> qué porción de los recursos se destina a pagar la deuda (rigidez del presupuesto).</li>
  <li><strong>Intereses / PBI</strong> e <strong>Intereses / Gasto total.</strong></li>
  <li><strong>Deuda externa / Exportaciones</strong> y <strong>Servicios / Exportaciones:</strong> miden la capacidad de generar las <strong>divisas</strong> para pagar la deuda externa (<em>liquidez externa</em>).</li>
  <li><strong>Deuda per cápita:</strong> deuda total / población.</li>
  <li><strong>Riesgo país</strong> (spread sobre bonos del Tesoro de EE.UU.): refleja la <strong>percepción de los mercados</strong> sobre la probabilidad de default.</li>
</ul>

<h3>Sostenibilidad de la deuda</h3>
<div class="callout">La deuda es <strong>sostenible</strong> si el cociente Deuda/PBI no crece indefinidamente. Depende de: la <strong>tasa de interés (r)</strong>, la <strong>tasa de crecimiento de la economía (g)</strong> y el <strong>resultado fiscal primario</strong>. <br><strong>Condición clave:</strong> si la tasa de interés supera el crecimiento (r &gt; g), se necesita <strong>superávit primario</strong> para estabilizar la deuda; si g &gt; r, la deuda puede estabilizarse aun con déficit primario moderado.</div>
<p class="muted">Una crisis de deuda no surge solo del nivel, sino de la <strong>dinámica</strong> (perfil de vencimientos, moneda, tasa) y de la <strong>confianza</strong> (acceso al refinanciamiento).</p>
`
    },
    {
      id: "9.5",
      titulo: "Teoría del Empréstito. Concepto. Naturaleza. Clasificación. Técnicas",
      contenido: `
<h3>Concepto</h3>
<div class="def"><b>Empréstito:</b> es la <strong>operación</strong> mediante la cual el Estado recurre al mercado de capitales en demanda de fondos, comprometiéndose a devolver el capital y a pagar intereses según las condiciones pactadas.</div>

<h3>Naturaleza jurídica (debate)</h3>
<ul>
  <li><strong>Tesis contractualista (dominante):</strong> el empréstito es un <strong>contrato</strong> (un préstamo) entre el Estado y el suscriptor; hay acuerdo de voluntades.</li>
  <li><strong>Tesis del acto de soberanía (Jarach y otros):</strong> es un <strong>acto unilateral</strong> de soberanía del Estado (sobre todo en empréstitos forzosos o cuando el Estado modifica condiciones); no sería un contrato común.</li>
  <li><strong>Postura mixta:</strong> es contractual en su origen pero el Estado conserva prerrogativas de derecho público.</li>
</ul>

<h3>Clasificación del empréstito</h3>
<ul>
  <li><strong>Voluntario:</strong> el suscriptor presta libremente (el normal).</li>
  <li><strong>Patriótico:</strong> voluntario pero con presión moral/política (apelando al patriotismo), en condiciones menos ventajosas.</li>
  <li><strong>Forzoso:</strong> el Estado obliga a suscribir (coactivo). Se asemeja a un <strong>tributo</strong> (por eso requiere ley y respeto de garantías constitucionales).</li>
</ul>

<h3>Técnicas del empréstito</h3>
<ul>
  <li><strong>Emisión:</strong> creación y puesta en circulación de los títulos. Colocación <em>directa</em>, por <em>banca</em> o por <em>licitación/suscripción pública</em>.</li>
  <li><strong>Valor de emisión:</strong>
    <ul>
      <li><em>A la par:</em> se vende al valor nominal.</li>
      <li><em>Bajo la par (con descuento):</em> se vende por menos del nominal (aumenta el rendimiento real para el inversor).</li>
      <li><em>Sobre la par:</em> por más del nominal (poco frecuente).</li>
    </ul>
  </li>
  <li><strong>Beneficios y garantías para el suscriptor:</strong> tipo de interés, primas de reembolso, exenciones impositivas, garantías reales o de organismos, cláusulas de ajuste (indexación, dólar).</li>
  <li><strong>Negociación/cotización:</strong> los títulos se negocian en el mercado secundario; su precio refleja la confianza (riesgo).</li>
  <li><strong>Servicio:</strong> el pago periódico de <em>renta</em> (interés) y la <em>amortización</em> del capital según el plan (sistema francés, alemán, americano, bullet).</li>
</ul>
`
    },
    {
      id: "9.6",
      titulo: "La deuda pública en la República Argentina: evolución y estado actual",
      contenido: `
<h3>Rasgos históricos de la deuda argentina</h3>
<p>La deuda pública ha sido un problema recurrente y estructural de las finanzas argentinas, marcada por ciclos de <strong>endeudamiento, crisis, default y reestructuración</strong>.</p>
<ul>
  <li><strong>Empréstito Baring Brothers (1824):</strong> el primer gran endeudamiento externo, símbolo del origen del problema.</li>
  <li><strong>Décadas de 1970-1980:</strong> fuerte aumento de la deuda externa; la <strong>crisis de la deuda latinoamericana (1982)</strong> y la "década perdida".</li>
  <li><strong>Plan Brady (1992):</strong> reestructuración de la deuda en bonos.</li>
  <li><strong>Convertibilidad y crisis de 2001:</strong> el <strong>default</strong> más grande de la historia (≈ US$ 100.000 millones).</li>
  <li><strong>Canjes 2005 y 2010:</strong> reestructuración con fuerte quita; conflicto posterior con los <em>holdouts</em> ("fondos buitre") y los fallos en Nueva York, resuelto en 2016.</li>
  <li><strong>2018:</strong> nuevo acuerdo <em>stand-by</em> con el FMI (el mayor de su historia).</li>
  <li><strong>2020:</strong> reestructuración de deuda en moneda extranjera con acreedores privados.</li>
</ul>

<h3>Conceptos para analizar la deuda argentina</h3>
<ul>
  <li><strong>Composición por moneda:</strong> la fuerte proporción en <strong>moneda extranjera</strong> es una vulnerabilidad central (el repago depende de generar divisas y del tipo de cambio).</li>
  <li><strong>Composición por acreedor:</strong> organismos internacionales (FMI, BM, BID), tenedores privados (bonos), e <strong>intra-sector público</strong> (deuda con el BCRA, ANSES, etc., que para algunos es deuda "que nos debemos a nosotros mismos").</li>
  <li><strong>Indicadores:</strong> Deuda/PBI, deuda en manos de privados, perfil de vencimientos, riesgo país (ver 9.4).</li>
</ul>

<h3>Lecciones</h3>
<div class="callout">La experiencia argentina ilustra los conceptos teóricos: la deuda <strong>externa</strong> y en moneda dura es la más riesgosa; endeudarse para <strong>gasto corriente</strong> (y no inversión) compromete la sostenibilidad; y la <strong>confianza</strong> (acceso al refinanciamiento) es tan importante como el nivel de deuda. La política de deuda debe articularse con la política fiscal (resultado primario) y la externa (generación de divisas).</div>
<p class="muted">Para la práctica de la cátedra conviene actualizar los datos (Deuda/PBI, composición y riesgo país) con la información más reciente de la Secretaría de Finanzas, ya que el "estado actual" varía año a año.</p>
`
    }
  ],
  practicos: `
<p class="muted">No hay un archivo de trabajos prácticos de la cátedra para esta unidad en el material disponible. Estas son <strong>preguntas de repaso</strong> elaboradas a partir de la teoría.</p>

<div class="tp">
  <h4>Cuadro comparativo — Deuda interna vs. externa</h4>
  <table>
    <tr><th>Criterio</th><th>Deuda interna</th><th>Deuda externa</th></tr>
    <tr><td>Acreedor / moneda</td><td>Residentes; suele ser en moneda local.</td><td>No residentes; generalmente en divisas.</td></tr>
    <tr><td>Carga sobre el país</td><td>Transferencia interna («nos la debemos a nosotros mismos»).</td><td>Salida real de riqueza y divisas al exterior.</td></tr>
    <tr><td>Riesgo macro</td><td>Presión sobre tasas y crowding-out.</td><td>Balanza de pagos, tipo de cambio, vulnerabilidad externa.</td></tr>
    <tr><td>Jurisdicción</td><td>Tribunales locales.</td><td>Suele pactarse ley y tribunales extranjeros.</td></tr>
  </table>

  <h4>Preguntas de repaso</h4>
  <p class="tp-consigna">1) Diferencia entre crédito público, empréstito y deuda pública.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Crédito público = aptitud/confianza para obtener préstamos; empréstito = la operación concreta; deuda = la obligación resultante (capital + intereses).</p></details>
  <p class="tp-consigna">2) ¿La deuda <em>interna</em> es una carga para las generaciones futuras?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Debate clásico: la tesis clásica dice que sí (habrá que pagar capital e intereses); la keynesiana sostiene que "nos la debemos a nosotros mismos" (es una transferencia interna, sin reducir la riqueza agregada), siendo la carga real la del presente. Buchanan matiza que sí puede trasladar carga.</p></details>
  <p class="tp-consigna">3) ¿Por qué la deuda externa es más riesgosa que la interna?</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Al pagarla salen divisas reales del país (transferencia de riqueza al exterior, presión sobre la balanza de pagos) y genera dependencia y vulnerabilidad ante shocks de tipo de cambio y tasa internacional.</p></details>
  <p class="tp-consigna">4) ¿Cuándo es sostenible la deuda? Indicadores.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Es sostenible si Deuda/PBI no crece indefinidamente; depende de la tasa de interés (r), el crecimiento (g) y el resultado primario: si r > g se necesita superávit primario. Indicadores: Deuda/PBI, servicios/ingresos, deuda externa/exportaciones, riesgo país.</p></details>
  <p class="tp-consigna">5) Formas de extinción de la deuda.</p>
  <details class="tp-toggle"><summary>Ver respuesta</summary><p class="tp-resp">Amortización, conversión, consolidación, renegociación/reestructuración (quita, espera, canje) y, como situaciones límite, moratoria/default y repudio.</p></details>
</div>
`
});
