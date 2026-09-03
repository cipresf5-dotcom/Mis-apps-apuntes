/* ============================================================================
   TEORÍA - INFERENCIA ESTADÍSTICA (LE)  ·  Unidades 1 a 7
   Reescritura propia (fiel a la teoría del profesor) con fórmulas en LaTeX
   (MathJax) y gráficos SVG. Cada unidad incluye además las diapositivas
   originales del profe como referencia (carpeta teoria/uN/).

   Estructura:
     { unidad, titulo, intro, temas:[{titulo, html}], slides:[archivos...] }
   En "html" se usa LaTeX entre \( \) (en línea) y \[ \] (centrado), y se
   pueden incluir <svg> y <table>. Se escribe con String.raw para preservar
   las barras invertidas de LaTeX. Dentro de fórmulas: \lt \gt \le \ge \ne.
   ============================================================================ */

/* ---- Gráficos SVG reutilizables (se adaptan al tema con var(--...)) ---- */
const G = {};

G.normal = String.raw`
<svg viewBox="0 0 460 210" class="fig" role="img" aria-label="Curva normal con regla 68-95-99,7">
  <line x1="20" y1="170" x2="440" y2="170" stroke="var(--line2)"/>
  <!-- bandas -->
  <rect x="160" y="40" width="140" height="130" fill="var(--gold)" opacity="0.20"/>
  <rect x="100" y="40" width="260" height="130" fill="var(--gold)" opacity="0.10"/>
  <path d="M30,170 C150,168 150,55 230,55 C310,55 310,168 430,170" fill="none" stroke="var(--gold2)" stroke-width="2.5"/>
  <g stroke="var(--line2)" stroke-dasharray="3 3">
    <line x1="230" y1="55" x2="230" y2="170"/>
    <line x1="160" y1="80" x2="160" y2="170"/><line x1="300" y1="80" x2="300" y2="170"/>
    <line x1="100" y1="140" x2="100" y2="170"/><line x1="360" y1="140" x2="360" y2="170"/>
  </g>
  <g fill="var(--muted)" font-size="12" text-anchor="middle">
    <text x="230" y="188">μ</text>
    <text x="160" y="188">μ−σ</text><text x="300" y="188">μ+σ</text>
    <text x="100" y="188">μ−2σ</text><text x="360" y="188">μ+2σ</text>
  </g>
  <g fill="var(--txt)" font-size="11" text-anchor="middle">
    <text x="230" y="120">68,26%</text>
    <text x="230" y="35">95,44% (±2σ) · 99,74% (±3σ)</text>
  </g>
</svg>`;

G.chi = String.raw`
<svg viewBox="0 0 460 200" class="fig" role="img" aria-label="Familia chi-cuadrado">
  <line x1="30" y1="165" x2="445" y2="165" stroke="var(--line2)"/>
  <line x1="30" y1="20" x2="30" y2="165" stroke="var(--line2)"/>
  <path d="M30,30 C45,120 70,160 200,163" fill="none" stroke="var(--gold2)" stroke-width="2"/>
  <path d="M30,150 C70,55 110,150 230,163" fill="none" stroke="var(--gold)" stroke-width="2"/>
  <path d="M30,164 C120,150 150,70 250,95 C330,115 360,160 440,163" fill="none" stroke="var(--muted)" stroke-width="2"/>
  <g font-size="11">
    <text x="70" y="40" fill="var(--gold2)">n=2</text>
    <text x="120" y="48" fill="var(--gold)">n=5</text>
    <text x="300" y="92" fill="var(--muted)">n grande → ~ normal</text>
  </g>
  <text x="235" y="188" fill="var(--muted)" font-size="11" text-anchor="middle">media = n · varianza = 2n · asimétrica a la derecha</text>
</svg>`;

G.tstudent = String.raw`
<svg viewBox="0 0 460 200" class="fig" role="img" aria-label="t de Student vs normal">
  <line x1="20" y1="165" x2="440" y2="165" stroke="var(--line2)"/>
  <path d="M30,165 C150,162 150,40 230,40 C310,40 310,162 430,165" fill="none" stroke="var(--muted)" stroke-width="2"/>
  <path d="M30,165 C140,158 165,70 230,70 C295,70 320,158 430,165" fill="none" stroke="var(--gold2)" stroke-width="2.5"/>
  <g font-size="11">
    <text x="250" y="45" fill="var(--muted)">Normal N(0,1)</text>
    <text x="60" y="120" fill="var(--gold2)">t de Student</text>
  </g>
  <text x="230" y="188" fill="var(--muted)" font-size="11" text-anchor="middle">colas más pesadas; \( n\to\infty \Rightarrow t\to N(0,1) \)</text>
</svg>`;

G.colas = String.raw`
<svg viewBox="0 0 460 190" class="fig" role="img" aria-label="Regiones de rechazo dos colas">
  <line x1="20" y1="150" x2="440" y2="150" stroke="var(--line2)"/>
  <path d="M30,150 C150,147 150,30 230,30 C310,30 310,147 430,150" fill="none" stroke="var(--gold2)" stroke-width="2.5"/>
  <path d="M30,150 C90,148 108,120 120,150 Z" fill="var(--bad)" opacity="0.5"/>
  <path d="M430,150 C370,148 352,120 340,150 Z" fill="var(--bad)" opacity="0.5"/>
  <g stroke="var(--bad)" stroke-dasharray="3 3"><line x1="118" y1="40" x2="118" y2="150"/><line x1="342" y1="40" x2="342" y2="150"/></g>
  <g fill="var(--muted)" font-size="11" text-anchor="middle">
    <text x="100" y="170">−z_{α/2}</text><text x="360" y="170">z_{α/2}</text>
    <text x="230" y="170">no se rechaza H₀</text>
    <text x="90" y="110" fill="var(--bad)">α/2</text><text x="372" y="110" fill="var(--bad)">α/2</text>
  </g>
</svg>`;

G.regresion = String.raw`
<svg viewBox="0 0 440 220" class="fig" role="img" aria-label="Diagrama de dispersión y recta de regresión">
  <line x1="40" y1="190" x2="420" y2="190" stroke="var(--line2)"/>
  <line x1="40" y1="20" x2="40" y2="190" stroke="var(--line2)"/>
  <g fill="var(--gold2)">
    <circle cx="80" cy="165" r="4"/><circle cx="120" cy="150" r="4"/><circle cx="150" cy="158" r="4"/>
    <circle cx="180" cy="130" r="4"/><circle cx="210" cy="120" r="4"/><circle cx="240" cy="128" r="4"/>
    <circle cx="270" cy="100" r="4"/><circle cx="300" cy="85" r="4"/><circle cx="340" cy="78" r="4"/><circle cx="380" cy="60" r="4"/>
  </g>
  <line x1="60" y1="172" x2="400" y2="55" stroke="var(--gold)" stroke-width="2.5"/>
  <g fill="var(--muted)" font-size="12">
    <text x="410" y="205">X</text><text x="22" y="30">Y</text>
    <text x="250" y="150" fill="var(--gold)">Ŷ = B₀ + B₁X</text>
  </g>
</svg>`;

G.corrTable = String.raw`
<table class="ttab">
  <tr><th>Rango de \(r\)</th><th>Intensidad de la relación</th></tr>
  <tr><td>\(r=1\)</td><td>Correlación perfecta</td></tr>
  <tr><td>\(0{,}8\lt r\lt 1\)</td><td>Correlación muy alta</td></tr>
  <tr><td>\(0{,}6\lt r\lt 0{,}8\)</td><td>Correlación alta</td></tr>
  <tr><td>\(0{,}4\lt r\lt 0{,}6\)</td><td>Correlación moderada</td></tr>
  <tr><td>\(0{,}2\lt r\lt 0{,}4\)</td><td>Correlación baja</td></tr>
  <tr><td>\(0\lt r\lt 0{,}2\)</td><td>Correlación muy baja</td></tr>
  <tr><td>\(r=0\)</td><td>Correlación nula</td></tr>
</table>`;

G.errores = String.raw`
<table class="ttab">
  <tr><th></th><th>H₀ es verdadera</th><th>H₀ es falsa</th></tr>
  <tr><th>No se rechaza H₀</th><td>Decisión correcta \((1-\alpha)\)</td><td class="err">Error tipo II \((\beta)\)</td></tr>
  <tr><th>Se rechaza H₀</th><td class="err">Error tipo I \((\alpha)\)</td><td>Decisión correcta \((1-\beta)\): potencia</td></tr>
</table>`;

/* ============================ TEORÍA ==================================== */
const TEORIA = [

/* ---------------------------- UNIDAD 1 -------------------------------- */
{
  unidad:1, titulo:"Distribuciones de probabilidad",
  intro:String.raw`Modelos de probabilidad de las variables aleatorias que sustentan toda la inferencia: Bernoulli, Binomial, Normal, Chi-cuadrado, t de Student y F, junto con los teoremas límite (De Moivre, TCL) y la ley de los grandes números.`,
  temas:[
    { titulo:"Variable aleatoria y distribución",
      html:String.raw`Una <b>variable aleatoria</b> asigna un número a cada resultado de un experimento aleatorio. Su comportamiento se describe con una <b>distribución de probabilidad</b>: la función de cuantía \(g(x)\) si es discreta, o la función de densidad \(f(x)\) si es continua.
\(\;\)Una densidad es <b>legítima</b> si cumple dos condiciones: \(f(x)\ge 0\) para todo \(x\), y \(\displaystyle\int_{-\infty}^{\infty} f(x)\,dx=1\).
La <b>función generatriz de momentos</b> (FGM) \(M(\theta)=E(e^{\theta\tilde{x}})\) permite obtener la media y la varianza derivando y evaluando en \(\theta=0\): \(E(\tilde{x})=M'(0)\), \(E(\tilde{x}^2)=M''(0)\).` },

    { titulo:"Bernoulli y Binomial",
      html:String.raw`La <b>binomial</b> cuenta el número de éxitos en \(N\) pruebas independientes de Bernoulli, cada una con probabilidad de éxito \(p\) (\(q=1-p\)):
\[g_B(n;N,p)=\binom{N}{n}\,p^{n}q^{\,N-n},\quad n=0,1,\dots,N.\]
Su FGM es \(M_B(\theta)=(p e^{\theta}+q)^{N}\), de donde \(\;\mu_B=Np\;\) y \(\;V_B=Npq.\)
La <b>Bernoulli</b> es el caso \(N=1\): \(\;\mu_b=p\;\) y \(\;V_b=p(1-p)=pq.\)` },

    { titulo:"Distribución Normal",
      html:String.raw`Modelo continuo con forma de campana, simétrico respecto de la media:
\[f_N(x;\mu,\sigma)=\dfrac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}},\quad -\infty\lt x\lt\infty.\]
Su FGM es \(M_N(\theta)=e^{\mu\theta+\frac{\sigma^2\theta^2}{2}}\), de donde \(E(\tilde{x})=\mu\) y \(V(\tilde{x})=\sigma^2\).
<b>Propiedades:</b> simétrica respecto de \(\mu\); media = moda = mediana; puntos de inflexión en \(\mu\pm\sigma\) (cóncava entre \(\mu-\sigma\) y \(\mu+\sigma\), convexa fuera). <b>Regla empírica:</b>
${G.normal}` },

    { titulo:"Normal estándar y estandarización",
      html:String.raw`La <b>normal estándar</b> \(N(0,1)\) tiene \(\mu=0\) y \(\sigma=1\):
\[f_{N^*}(x)=\dfrac{1}{\sqrt{2\pi}}\,e^{-x^2/2},\qquad F_{N^*}(x)=\dfrac{1}{\sqrt{2\pi}}\int_{-\infty}^{x} e^{-t^2/2}\,dt.\]
<b>Teorema de estandarización:</b> si \(\tilde{x}\sim N(\mu,\sigma)\), entonces
\[\tilde{z}=\dfrac{\tilde{x}-\mu}{\sigma}\sim N(0,1).\]
<b>Limitación:</b> la integral de \(F_{N^*}\) no tiene primitiva elemental; se resuelve numéricamente y por eso se usan <b>tablas</b>.` },

    { titulo:"Teorema de De Moivre (Normal como límite de la Binomial)",
      html:String.raw`Cuando \(N\) crece, la binomial se aproxima a una normal de media \(Np\) y varianza \(Npq\):
\[\lim_{N\to\infty} P\!\left(c\lt \dfrac{\tilde{x}-Np}{\sqrt{Npq}}\lt d\right)=\dfrac{1}{\sqrt{2\pi}}\int_c^d e^{-x^2/2}\,dx.\]
La aproximación es buena cuando \(N\) es grande y \(p\) no es muy cercana a 0 ó 1; en la práctica, cuando \(Np\ge 5\) y \(Nq\ge 5\).` },

    { titulo:"Ley de los grandes números",
      html:String.raw`Garantiza que la media muestral converge a la media poblacional al crecer \(n\):
• <b>Forma débil</b> (convergencia en probabilidad): \(\displaystyle\lim_{n\to\infty}P\big(|\tilde{m}_n-\mu_b|\lt\varepsilon\big)=1\) — el límite va <i>afuera</i> de la probabilidad.
• <b>Forma fuerte</b> (convergencia casi segura): \(P\!\left(\displaystyle\lim_{n\to\infty}\tilde{m}_n=\mu_b\right)=1\) — el límite va <i>adentro</i>.` },

    { titulo:"Distribución Chi-cuadrado",
      html:String.raw`Surge al sumar cuadrados de normales estándar independientes; depende de los <b>grados de libertad</b> \(n\). Su FGM es \(M_{\chi^2}(\theta;n)=(1-2\theta)^{-n/2}\) (con \(\theta\lt 1/2\)), de donde:
\[\mu_{\chi^2}=n,\qquad V_{\chi^2}=2n.\]
Es asimétrica a la derecha y, al crecer \(n\) (\(n\ge 30\)), tiende a la normal; se tipifica con \(z=\dfrac{\chi^2-n}{\sqrt{2n}}\). Se usa para estimar varianzas y en pruebas de independencia y de bondad de ajuste.
${G.chi}` },

    { titulo:"Distribución t de Student",
      html:String.raw`Se usa para inferencias sobre la media con \(\sigma\) desconocida y muestras pequeñas. Es simétrica respecto de \(t=0\), unimodal y con <b>colas más pesadas</b> que la normal (mayor variabilidad). Su valor esperado es 0 (si \(n\gt 1\)) y su varianza \(\dfrac{n}{n-2}\) (sólo existe si \(n\gt 2\)).
Con \(n=1\) coincide con la <b>distribución de Cauchy</b>, \(f(t)=\dfrac{1}{\pi(1+t^2)}\), que no tiene media ni varianza. Al crecer \(n\), \(t\to N(0,1)\).
${G.tstudent}` },

    { titulo:"Distribución F de Fisher",
      html:String.raw`Es el cociente de dos varianzas (chi-cuadrado) independientes divididas por sus grados de libertad. Se denota \(f_F(x;\,n_1-1,\,n_2-1)\) y se utiliza para <b>comparar varianzas</b> de dos poblaciones:
\[F=\dfrac{\hat{S}_1^2}{\hat{S}_2^2}\sim F_{(n_1-1,\,n_2-1)}.\]
Toma valores no negativos y es asimétrica a la derecha. También aparece en el análisis de varianza (ANOVA) y en el contraste global del modelo de regresión.` },

    { titulo:"Distribución muestral de la media · TCL",
      html:String.raw`Si se extraen muestras de tamaño \(n\), el estadístico media muestral \(\bar{x}\) cumple:
\[E(\bar{x})=\mu,\qquad V(\bar{x})=\dfrac{\sigma^2}{n},\qquad \bar{x}\sim N\!\left(\mu,\dfrac{\sigma}{\sqrt{n}}\right),\qquad z=\dfrac{\bar{x}-\mu}{\sigma/\sqrt{n}}.\]
<b>Teorema Central del Límite (TCL):</b> cualquiera sea la distribución de la variable de partida, la distribución de \(\bar{x}\) tiende a la normal a medida que \(n\to\infty\). Por eso la desviación del estimador es el <b>error estándar</b> \(\sigma/\sqrt{n}\).` },

    { titulo:"Distribución de la diferencia de medias",
      html:String.raw`Al comparar dos poblaciones se estudia la distribución de \(\bar{x}_1-\bar{x}_2\). Según los supuestos:
• <b>Poblaciones normales con varianzas conocidas:</b> \(z=\dfrac{(\bar{x}_1-\bar{x}_2)-(\mu_1-\mu_2)}{\sqrt{\dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2}}}\sim N(0,1).\)
• <b>No normales pero \(n_1\gt30\) y \(n_2\gt30\):</b> ídem caso anterior (por TCL).
• <b>Varianzas desconocidas y muestras grandes:</b> se reemplazan \(\sigma^2\) por las cuasivarianzas \(\hat{S}^2\) y se mantiene la \(N(0,1)\).
• <b>Normales, varianzas iguales y desconocidas, muestras pequeñas:</b> sigue una \(t\) de Student con \(n_1+n_2-2\) grados de libertad.
• <b>Normales, varianzas distintas y desconocidas, muestras pequeñas:</b> \(t\) con grados de libertad aproximados (fórmula de Welch).` },

    { titulo:"Resumen: estadísticos y sus distribuciones muestrales",
      html:String.raw`A cada estadístico le corresponde una distribución muestral, que es la que permite calcular probabilidades y valores críticos en estimación y contraste:
<table class="ttab">
  <tr><th>Estadístico</th><th>Distribución muestral</th></tr>
  <tr><td>Media muestral \(\bar{x}\) (\(n\to\infty\))</td><td>Normal (por el TCL)</td></tr>
  <tr><td>Proporción de éxitos \(\hat{p}\)</td><td>Binomial → Normal (aproximación)</td></tr>
  <tr><td>Varianza muestral \(\hat{S}^2\)</td><td>Chi-cuadrado con \(n-1\) g.l.</td></tr>
  <tr><td>Diferencia de medias (normales, \(n\lt30\), \(\sigma\) desconocida)</td><td>t de Student</td></tr>
  <tr><td>Cociente de dos varianzas</td><td>F de Fisher</td></tr>
</table>` }
  ],
  slides:["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png","09.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png","33.png"]
},

/* ---------------------------- UNIDAD 2 -------------------------------- */
{
  unidad:2, titulo:"Estimación e intervalos de confianza",
  intro:String.raw`Cómo aproximar parámetros poblacionales desconocidos a partir de una muestra: estimación puntual, propiedades deseables de los estimadores e intervalos de confianza.`,
  temas:[
    { titulo:"Estimador vs. estimación",
      html:String.raw`Se llama <b>estimación</b> al conjunto de técnicas que permiten dar un valor aproximado de un parámetro poblacional a partir de los datos de una muestra.
• El <b>estimador</b> es un <i>estadístico</i> y, por tanto, una <b>variable aleatoria</b> con su distribución muestral (por ejemplo \(\hat{\theta}\)).
• La <b>estimación puntual</b> es el <i>valor concreto</i> que toma ese estadístico para una muestra particular \((\tilde{x}_{i1},\dots,\tilde{x}_{in})\).
El <b>parámetro</b>, en cambio, es el valor poblacional, fijo y desconocido.` },

    { titulo:"Propiedades de un buen estimador",
      html:String.raw`• <b>Insesgadez:</b> \(E(\hat{\theta})=\theta\) (en promedio acierta el parámetro).
• <b>Eficiencia:</b> menor varianza / <b>mínimo error estándar</b>. Entre dos estimadores insesgados, es más eficiente el de <i>menor</i> varianza.
• <b>Consistencia:</b> se aproxima al parámetro al crecer \(n\).
Estimadores insesgados de \(\mu\) y \(p\) son la media y la proporción muestral. La varianza muestral es <b>sesgada</b>; el estimador insesgado de \(\sigma^2\) es la <b>cuasivarianza</b>: \(\hat{S}^2=\dfrac{\sum(x-\bar{x})^2}{n-1}.\)` },

    { titulo:"Intervalos de confianza (concepto)",
      html:String.raw`Un <b>intervalo de confianza</b> (IC) busca un rango de escasa amplitud con <b>alta probabilidad</b> de contener al parámetro. El valor \((1-\alpha)\) es el <b>coeficiente / nivel de confianza</b> (p.ej. 95%). La <b>amplitud</b> depende del nivel de confianza, de la variabilidad \(\sigma\) y del tamaño de muestra \(n\).` },

    { titulo:"IC para la media",
      html:String.raw`• Con \(\sigma\) <b>conocida</b> (o \(n\) grande): \(\;\bar{x}\pm z_{\alpha/2}\,\dfrac{\sigma}{\sqrt{n}}.\)
• Con \(\sigma\) <b>desconocida</b> y \(n\) pequeño: se usa la \(t\) de Student con \(n-1\) g.l.: \(\;\bar{x}\pm t_{\alpha/2,\,n-1}\,\dfrac{\hat{S}}{\sqrt{n}}.\)
El <b>error máximo de estimación</b> es \(E=z_{\alpha/2}\,\dfrac{\sigma}{\sqrt{n}}.\)` },

    { titulo:"IC para la proporción y tamaño de muestra",
      html:String.raw`Para una proporción, el error es \(E=z_{\alpha/2}\sqrt{\dfrac{p_0\,q_0}{n}}\), y el <b>tamaño de muestra</b> necesario:
\[n=\left(\dfrac{z_{\alpha/2}}{E}\right)^{2}p_0\,q_0.\]
Con 95% de confianza \(z_{\alpha/2}=1{,}96\). Si no se conoce \(p_0\), se adopta el caso más conservador \(p_0=0{,}5\).` },

    { titulo:"IC para la varianza",
      html:String.raw`Con muestra normal y \(\sigma\) desconocida, el IC para \(\sigma^2\) al \((1-\alpha)\cdot100\%\) usa la \(\chi^2\) con \(n-1\) g.l.:
\[\left(\dfrac{(n-1)\hat{S}^2}{\chi^2_{n-1,\,\alpha/2}}\;,\;\dfrac{(n-1)\hat{S}^2}{\chi^2_{n-1,\,1-\alpha/2}}\right).\]` },

    { titulo:"Diferencia de medias y de varianzas",
      html:String.raw`• <b>Diferencia de medias</b> (varianzas distintas, poblaciones normales): el error estándar es \(\sqrt{\dfrac{S_1^2}{n_1}+\dfrac{S_2^2}{n_2}}\). Si el IC para \(\mu_1-\mu_2\) <b>incluye el 0</b>, no puede afirmarse que haya diferencia.
• <b>Igualdad de varianzas</b>: se contrasta con \(F=\dfrac{\hat{S}_1^2}{\hat{S}_2^2}\sim F_{(n_1-1,\,n_2-1)}\), con \(H_0:\sigma_1^2=\sigma_2^2\).` }
  ],
  slides:["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png","09.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"]
},

/* ---------------------------- UNIDAD 3 -------------------------------- */
{
  unidad:3, titulo:"Tests de hipótesis",
  intro:String.raw`Procedimiento para decidir, con un riesgo controlado, entre dos hipótesis sobre un parámetro a partir de la evidencia muestral.`,
  temas:[
    { titulo:"Planteo del contraste",
      html:String.raw`Se enfrentan la <b>hipótesis nula</b> \(H_0\) (la que se somete a prueba) y la <b>alternativa</b> \(H_1\). El procedimiento es: <b>1°</b> especificar y calcular el <b>estadístico de prueba</b>; <b>2°</b> determinar si el <b>valor observado</b> cae en la <b>zona de rechazo</b> o de no rechazo. (El orden importa: primero el estadístico, después la decisión.)` },

    { titulo:"Errores tipo I y II · potencia",
      html:String.raw`Al decidir se puede acertar o cometer dos tipos de error:
${G.errores}
El <b>nivel de significación</b> \(\alpha\) es la probabilidad de error tipo I. La <b>potencia</b> \((1-\beta)\) es la probabilidad de rechazar \(H_0\) cuando es falsa.` },

    { titulo:"Nivel de significación α y valor p",
      html:String.raw`El <b>valor p</b> (o <b>grado de significación</b>) es la probabilidad atribuida al <b>valor observado</b> del estadístico: la probabilidad de que el estadístico asuma ese valor o uno más extremo. Tanto \(p\) como \(\alpha\) son áreas bajo la curva de la distribución del estadístico. Regla de decisión:
\[p\lt\alpha \Rightarrow \text{se rechaza } H_0;\qquad p\gt\alpha \Rightarrow \text{no se rechaza } H_0.\]` },

    { titulo:"Colas del contraste",
      html:String.raw`Según \(H_1\), el contraste puede ser de <b>dos colas</b> (\(\ne\)) o de <b>una cola</b> (\(\lt\) ó \(\gt\)). En dos colas se reparte \(\alpha\) en ambos extremos:
${G.colas}` },

    { titulo:"Test para la media y diferencia de medias",
      html:String.raw`• Una media (\(\sigma\) conocida): \(z=\dfrac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}.\)
• <b>Diferencia de medias</b> con varianzas conocidas y \(n_1+n_2\ge 30\):
\[z=\dfrac{\bar{x}_1-\bar{x}_2}{\sqrt{\dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2}}}\sim N(0,1),\qquad H_0:\mu_1=\mu_2.\]` },

    { titulo:"Test para diferencia de proporciones",
      html:String.raw`Con \(H_0:p_1=p_2\), proporciones muestrales \(\hat{p}_1=\dfrac{x_1}{n_1}\), \(\hat{p}_2=\dfrac{x_2}{n_2}\) y estimador común \(\hat{p}=\dfrac{x_1+x_2}{n_1+n_2}\):
\[z=\dfrac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}\sim N(0,1).\]
Se rechaza \(H_0\) (dos colas) si \(z\gt z_{\alpha/2}\) ó \(z\lt -z_{\alpha/2}\).` },

    { titulo:"Test de igualdad de varianzas (F)",
      html:String.raw`Con \(H_0:\sigma_1^2=\sigma_2^2\) se usa \(F=\dfrac{\hat{S}_1^2}{\hat{S}_2^2}\sim F_{(n_1-1,\,n_2-1)}\). En dos colas se rechaza si \(F\gt F_{\alpha/2}\) ó \(F\lt F_{1-\alpha/2}\); en una cola (\(H_1:\sigma_1^2\gt\sigma_2^2\)) si \(F\gt F_{\alpha}\).` }
  ],
  slides:["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png","09.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png"]
},

/* ---------------------------- UNIDAD 4 -------------------------------- */
{
  unidad:4, titulo:"Tests estadísticos no paramétricos",
  intro:String.raw`Pruebas que no exigen una distribución poblacional conocida ni parámetros: útiles con muestras pequeñas, variables ordinales/nominales o cuando no se cumplen los supuestos paramétricos.`,
  temas:[
    { titulo:"¿Cuándo usar pruebas no paramétricas?",
      html:String.raw`Se aplican cuando la muestra <b>tiene pocas observaciones</b>, <b>no se conoce</b> la distribución de la población de origen, o las variables están medidas en escala <b>ordinal o nominal</b> (no métrica).` },

    { titulo:"Chi-cuadrado de bondad de ajuste (una muestra)",
      html:String.raw`Comprueba el ajuste de la distribución de frecuencias de una variable discreta/categorizada a una distribución teórica. Compara frecuencias observadas \(Fo_i\) con esperadas \(Fe_i\):
\[\chi^2=\sum_{i=1}^{K}\dfrac{(Fo_i-Fe_i)^2}{Fe_i},\]
donde \(K\) es el número de categorías. Cuanto mayor es \(\chi^2\), peor es el ajuste.` },

    { titulo:"Kolmogorov-Smirnov (una muestra)",
      html:String.raw`Evalúa si la muestra procede de una población con una distribución determinada. El estadístico se calcula a partir de la <b>diferencia máxima, en valor absoluto</b>, entre la distribución de frecuencias acumuladas <b>observadas</b> y las <b>teóricas</b>.` },

    { titulo:"Dos muestras independientes",
      html:String.raw`• <b>U de Mann-Whitney:</b> alternativa para dos muestras con datos <b>independientes</b>; no parte de ningún requisito previo. \(H_0\): no hay diferencias significativas entre los grupos.
• <b>Rachas de Wald-Wolfowitz:</b> también para dos muestras independientes, basada en el número de rachas.` },

    { titulo:"Dos muestras relacionadas",
      html:String.raw`• <b>T de Wilcoxon:</b> contrasta la \(H_0\) de no diferencias entre dos muestras con datos <b>relacionados</b> (apareados); incorpora la <b>magnitud</b> de las diferencias mediante los rangos.
• <b>Prueba de los signos:</b> usa únicamente el <b>signo</b> de las diferencias; \(H_0\): igual porcentaje de diferencias positivas y negativas. Es <b>menos potente</b> que Wilcoxon.` },

    { titulo:"Varias muestras independientes (Kruskal-Wallis)",
      html:String.raw`La <b>H de Kruskal-Wallis</b> es una extensión de la U de Mann-Whitney para <b>tres o más grupos independientes</b>. El estadístico \(H\) sigue aproximadamente una \(\chi^2\) bajo la \(H_0\) de que todos los grupos provienen de la misma distribución (no hay diferencias). Cuanto más semejantes los promedios, más probable que \(H_0\) sea verdadera.` },

    { titulo:"Varias muestras relacionadas (Friedman · Kendall)",
      html:String.raw`• <b>χ² de Friedman:</b> generaliza Wilcoxon y los signos a tres o más variables relacionadas. Cuanto más semejantes las medias, más probable que \(H_0\) (no diferencia) sea verdadera.
• <b>W de Kendall:</b> mide la <b>concordancia / coherencia</b> entre los resultados de los casos en las distintas variables; es una prueba de <i>relación</i> más que de comparación. Sus valores van de 0 (nula) a 1 (concordancia perfecta).` },

    { titulo:"Test de rachas de Wald-Wolfowitz",
      html:String.raw`Sirve para decidir si <b>dos muestras independientes</b> proceden de la misma población (o si una secuencia es aleatoria). Se ordenan conjuntamente todas las observaciones y se cuenta el número de <b>rachas</b> (tramos seguidos de elementos de una misma muestra). <b>Pocas rachas</b> indican que los grupos están separados (poblaciones distintas); <b>muchas rachas</b>, que están mezclados (misma población). \(H_0\): ambas muestras proceden de la misma distribución.` },

    { titulo:"¿Qué prueba no paramétrica usar? · Ventajas y limitaciones",
      html:String.raw`<table class="ttab">
  <tr><th>Situación</th><th>Prueba</th></tr>
  <tr><td>Ajuste de una variable discreta a una distribución</td><td>\(\chi^2\) de bondad de ajuste</td></tr>
  <tr><td>Ajuste a una distribución con nombre propio</td><td>Kolmogorov-Smirnov</td></tr>
  <tr><td>2 muestras independientes</td><td>U de Mann-Whitney · Rachas de Wald-Wolfowitz</td></tr>
  <tr><td>2 muestras relacionadas</td><td>T de Wilcoxon · Prueba de los signos</td></tr>
  <tr><td>3 o más muestras independientes</td><td>H de Kruskal-Wallis</td></tr>
  <tr><td>3 o más muestras relacionadas</td><td>\(\chi^2\) de Friedman</td></tr>
  <tr><td>Concordancia entre casos/variables</td><td>W de Kendall</td></tr>
</table>
<b>Ventajas:</b> no exigen una distribución conocida ni normalidad; sirven con muestras pequeñas y con variables ordinales o nominales. <b>Limitaciones:</b> son <b>menos potentes</b> que las paramétricas cuando los supuestos de éstas se cumplen, porque al trabajar con rangos o signos desaprovechan parte de la información.` }
  ],
  slides:["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png"]
},

/* ---------------------------- UNIDAD 5 -------------------------------- */
{
  unidad:5, titulo:"Correlación y Regresión",
  intro:String.raw`Estudio de la relación entre variables: la correlación mide la fuerza de la asociación; la regresión modela y predice una variable en función de otras.`,
  temas:[
    { titulo:"Correlación lineal",
      html:String.raw`La <b>correlación lineal</b> mide el grado de relación entre dos variables y su sentido (directo si crecen juntas, inverso si una crece y la otra decrece). La medida más usada es el <b>coeficiente de correlación de Pearson \(r\)</b>, que toma valores entre \(-1\) y \(+1\): el signo indica el sentido y el valor absoluto la fuerza.` },

    { titulo:"Intensidad de la relación",
      html:String.raw`Según el valor de \(r\) se interpreta la intensidad:
${G.corrTable}` },

    { titulo:"Coeficiente de determinación",
      html:String.raw`El <b>coeficiente de determinación</b> \(r^2\,(R^2)\) indica el <b>grado de ajuste</b> del modelo a los datos: cuantifica en qué medida la variable dependiente queda <b>explicada</b> por la independiente (o por el modelo). Por ejemplo \(R^2=0{,}957\) significa que el modelo explica el 95,7% de la variabilidad.` },

    { titulo:"Supuestos de la correlación",
      html:String.raw`Para aplicar la correlación lineal se requiere: observaciones <b>aleatorias y cuantitativas</b>, <b>linealidad</b> en la relación de las variables, <b>independencia</b> de las observaciones y <b>homocedasticidad</b>.` },

    { titulo:"Regresión lineal: el modelo",
      html:String.raw`Participan una variable <b>dependiente</b> \(Y\) (a predecir/explicar) y variables <b>independientes</b> \(X_1,\dots,X_n\). El modelo es:
\[Y=B_0+B_1X_1+B_2X_2+\dots+B_nX_n+\varepsilon.\]
\(B_0\) es el <b>intercepto</b>, \(B_1,\dots,B_n\) los <b>coeficientes</b>, y \(\varepsilon\) el <b>error aleatorio</b> (residual), de media 0 y varianza constante (<b>homocedasticidad</b> \(\sigma^2\)).
${G.regresion}` },

    { titulo:"Contraste global del modelo (F)",
      html:String.raw`El primer test determina si el <b>modelo completo</b> tiene sentido. Se usa el estadístico <b>F de Fisher</b> (a partir de un análisis de varianza):
\[H_0:\text{el modelo no se ajusta a los datos};\qquad H_1:\text{el modelo se ajusta}.\]` },

    { titulo:"Contraste de los coeficientes (t)",
      html:String.raw`El segundo test determina, de manera <b>individual</b>, si algún coeficiente es estadísticamente distinto de cero. Se usa el estadístico <b>t de Student</b>:
\[H_0:\text{los coeficientes son nulos};\qquad H_1:\text{existen coeficientes no nulos}.\]` },

    { titulo:"Supuestos del modelo de regresión",
      html:String.raw`<b>Sobre las variables:</b> observaciones aleatorias que siguen la normal; linealidad en la relación; no colinealidad entre las independientes.
<b>Sobre los residuos:</b> deben seguir una distribución \(N(0,\sigma^2)\); no estar autocorrelacionados; tener varianza constante (homocedasticidad); y media cero.` },

    { titulo:"Coeficiente de correlación de Pearson (cálculo)",
      html:String.raw`Mide la fuerza y el sentido de la relación lineal entre dos variables:
\[r=\dfrac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum (x_i-\bar{x})^2}\,\sqrt{\sum (y_i-\bar{y})^2}}=\dfrac{\operatorname{cov}(x,y)}{s_x\,s_y}.\]
\(r\in[-1,1]\): el <b>signo</b> indica el sentido (\(+\) directa, \(-\) inversa) y el <b>valor absoluto</b> la intensidad. \(r=0\) indica ausencia de relación <i>lineal</i> (podría existir otra no lineal).` },

    { titulo:"Predicción y residuos",
      html:String.raw`Estimados los coeficientes, la recta \(\hat{Y}=B_0+B_1X\) permite <b>predecir</b> \(Y\) para un valor de \(X\). El <b>residuo</b> es la diferencia entre lo observado y lo predicho: \(e_i=y_i-\hat{y}_i\). Un buen ajuste tiene residuos pequeños, sin patrón, con media cero, varianza constante (homocedasticidad) y sin autocorrelación. La proporción de variabilidad de \(Y\) que el modelo explica se mide con el coeficiente de determinación:
\[R^2=\dfrac{\text{variabilidad explicada}}{\text{variabilidad total}}\in[0,1].\]` }
  ],
  slides:["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png"]
},

/* ---------------------------- UNIDAD 6 -------------------------------- */
{
  unidad:6, titulo:"Técnicas de análisis multivariante",
  intro:String.raw`Conjunto de métodos para analizar simultáneamente varias variables (tres o más) medidas en cada individuo u objeto de estudio.`,
  temas:[
    { titulo:"Definición y objetivos",
      html:String.raw`El <b>análisis multivariante</b> agrupa métodos cuya finalidad es analizar simultáneamente datos <b>multidimensionales</b> (varias variables por individuo). Sus objetivos: investigar de forma conjunta múltiples características que el análisis univariado/bivariado no permite captar, y ayudar a <b>tomar decisiones óptimas</b> según la información del conjunto de datos.` },

    { titulo:"Supuestos",
      html:String.raw`Requieren los <b>supuestos paramétricos</b>: normalidad, linealidad, independencia y homocedasticidad. No obstante, en <b>muestras grandes</b> (\(N\gt 30\)) los métodos multivariados son robustos frente a ligeras desviaciones de esos supuestos.` },

    { titulo:"Técnicas de dependencia vs. interdependencia",
      html:String.raw`• <b>Explicativas o de dependencia:</b> investigan la relación entre dos grupos de variables (dependientes e independientes); buscan establecer si el conjunto de independientes afecta al de dependientes.
• <b>Descriptivas o de interdependencia:</b> se usan cuando <b>no</b> se distingue entre dependientes e independientes; interesa cómo y por qué las variables están correlacionadas entre sí.
Para elegir la técnica conviene saber: ¿las variables son métricas o no métricas?, ¿cuántas dependientes hay?, ¿cuántas relaciones se plantean?` },

    { titulo:"Análisis discriminante",
      html:String.raw`Técnica de <b>dependencia</b> que obtiene una <b>combinación lineal</b> de las variables independientes (la <b>función discriminante</b>) que permite clasificar a los individuos en categorías definidas a priori (p.ej. <i>hombre/mujer</i>). Con dos categorías hay una sola función (número de grupos menos uno). La magnitud de los <b>coeficientes estandarizados</b> indica la importancia de cada variable. Para contrastar la igualdad de medias entre grupos se usa la <b>λ de Wilks</b> y el <b>F de Fisher</b>. Sus supuestos son los de la regresión múltiple (en especial, normalidad de las independientes).` },

    { titulo:"Análisis factorial",
      html:String.raw`Técnica de <b>interdependencia</b> y de <b>reducción de la dimensionalidad</b>: explica un conjunto de variables observadas mediante un número menor de <b>factores</b> (variables latentes no observables) que recogen la información común. Indicadores de adecuación: <b>índice KMO</b>, <b>test de esfericidad de Bartlett</b> (rechazar \(H_0\) de variables incorrelacionadas), y los coeficientes <b>MSA</b> de la matriz anti-imagen. La <b>comunalidad</b> (entre 0 y 1) es la parte de varianza de una variable explicada por los factores; \(1-\text{comunalidad}\) es la <b>unicidad</b> o factor único.` },

    { titulo:"La función discriminante y la clasificación",
      html:String.raw`El análisis discriminante busca una <b>combinación lineal</b> de las variables independientes (métricas) que separe al máximo los grupos definidos a priori (variable dependiente <b>no métrica/categórica</b>):
\[D=\beta_0+\beta_1 X_1+\beta_2 X_2+\dots+\beta_k X_k.\]
Con \(G\) grupos se obtienen <b>\(G-1\)</b> funciones discriminantes (con 2 grupos, una sola). La <b>magnitud de los coeficientes estandarizados</b> indica la importancia relativa de cada variable. Para contrastar si los grupos difieren en sus medias se usan la <b>\(\lambda\) de Wilks</b> y el <b>F de Fisher</b> (\(H_0\): el modelo no discrimina). <b>Estimar</b> la función y <b>clasificar</b> son aspectos distintos: una función bien obtenida no garantiza una buena tasa de aciertos.` },

    { titulo:"Análisis factorial: adecuación de los datos",
      html:String.raw`Antes de extraer factores conviene comprobar que las variables están suficientemente correlacionadas:
• <b>Correlaciones de Pearson</b> en su mayoría significativas.
• <b>Determinante</b> de la matriz de correlaciones <b>próximo a 0</b> (alta intercorrelación).
• Índice <b>KMO</b> (Kaiser-Meyer-Olkin) <b>\(\gt0{,}5\)</b> (cuanto más alto, mejor).
• <b>Test de esfericidad de Bartlett</b> con <b>\(p\lt0{,}05\)</b> (rechaza la \(H_0\) de variables incorrelacionadas).
• Coeficientes <b>MSA</b> altos en la diagonal de la <b>matriz anti-imagen</b> (y valores bajos fuera de la diagonal).` },

    { titulo:"Comunalidad, autovalores y cargas factoriales",
      html:String.raw`• <b>Comunalidad:</b> proporción de la varianza de una variable explicada por los factores comunes (entre 0 y 1); el resto, \(1-\text{comunalidad}\), es la <b>unicidad</b>.
• <b>Autovalor</b> de un factor: cantidad de varianza total que recoge. Suelen retenerse los factores con <b>autovalor \(\gt1\)</b> (criterio de Kaiser).
• <b>Cargas factoriales:</b> correlaciones entre cada variable y cada factor; indican qué variables "pesan" en cada factor.
Autovalores, % de varianza explicada (y acumulada), comunalidades y cargas son los <b>indicadores clave</b> de la estructura factorial.` },

    { titulo:"Rotación de factores (Varimax)",
      html:String.raw`La <b>rotación</b> facilita la interpretación buscando que cada variable cargue alto en un solo factor y bajo en los demás. La rotación <b>Varimax</b> (ortogonal) <b>maximiza la varianza de las cargas al cuadrado</b> dentro de cada factor. La rotación <b>no altera las comunalidades ni el porcentaje total de varianza explicada</b>: sólo <b>redistribuye</b> esa varianza entre los factores para hacerlos más interpretables.` }
  ],
  slides:["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png","09.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png"]
},

/* ---------------------------- UNIDAD 7 -------------------------------- */
{
  unidad:7, titulo:"Nociones sobre estadística bayesiana",
  intro:String.raw`Enfoque que incorpora información previa (subjetiva) y la actualiza con la evidencia experimental, integrando inferencia y decisión.`,
  temas:[
    { titulo:"Inferencia y decisión bayesiana",
      html:String.raw`• La <b>inferencia bayesiana</b> describe en forma cuantitativa la información que aporta una evidencia experimental (una muestra observada) ante un hecho desconocido (p.ej. el valor de un parámetro).
• La <b>teoría bayesiana de la decisión</b> se ocupa de <b>decidir entre cursos de acción</b>, eventualmente tras acceder a esa evidencia.` },

    { titulo:"Asignación de probabilidades",
      html:String.raw`A diferencia del enfoque clásico, el bayesiano asigna probabilidades (a priori) a los estados del mundo, que pueden ser <b>subjetivas</b> (basadas en la experiencia/juicio del decisor) y que luego se <b>actualizan</b> con la evidencia experimental mediante el Teorema de Bayes, dando las probabilidades a posteriori.` },

    { titulo:"Teoría bayesiana de la decisión (procedimiento)",
      html:String.raw`Pasos para adoptar una acción óptima:
<b>1°</b> Asignación subjetiva de probabilidades sobre los estados del mundo.
<b>2°</b> Cálculo de las funciones de ganancia con la matriz de consecuencias y esas probabilidades.
<b>3°</b> Si hay evidencia experimental, se recalculan las ganancias con la distribución a priori actualizada por la evidencia.
<b>4°</b> Se elige la acción cuya función de ganancia es óptima (mayor valor). En el caso discreto, para cada acción \(a_i\):
\[G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j),\]
donde \(u_{ij}\) son las componentes de la <b>matriz de consecuencias</b> y \(g_{\tilde{e}}(e_j)\) las <b>probabilidades a priori</b> de los estados \(e_j\).` },

    { titulo:"Análisis de decisiones",
      html:String.raw`En la <b>estadística clásica</b> se excluye voluntariamente el problema de recomendar una decisión (ante un parámetro desconocido ofrece un intervalo y un nivel de confianza). En el <b>enfoque bayesiano</b>, en cambio, se concede máxima importancia a la decisión, vinculándola con el cálculo de las distribuciones posteriores.` },

    { titulo:"Objeciones al enfoque bayesiano",
      html:String.raw`Las objeciones son de dos tipos:
• <b>Filosóficas:</b> nacen de la negación de las probabilidades subjetivas.
• <b>Prácticas:</b> la decisión "óptima" depende de la distribución a priori, de modo que distintas personas con distribuciones distintas llegarían a decisiones distintas; y la determinación de la función de consecuencia es muy compleja salvo en ejemplos artificiales.` },

    { titulo:"Paralelo entre métodos clásicos y bayesianos",
      html:String.raw`• <b>Estimación de parámetros:</b> el bayesiano da una distribución a posteriori (no un único estimativo, salvo que la decisión consista en elegir un valor). El estimativo de máxima verosimilitud coincide con la moda de la posterior si la a priori no está determinada.
• <b>Intervalos de confianza:</b> clásico y bayesiano llegan con frecuencia a las mismas respuestas numéricas si la a priori es indeterminada; la diferencia es de <b>interpretación</b>.
• <b>Pruebas de hipótesis:</b> de nuevo coinciden numéricamente aunque se interpreten distinto. Si la prueba implica una decisión con consecuencias cuantificables, el bayesiano recomienda decidir; si no involucra decisiones (p.ej. bondad de ajuste), no es tratable desde el punto de vista bayesiano.` },

    { titulo:"Matriz de consecuencias y función de ganancia",
      html:String.raw`Para decidir entre acciones \(a_i\) frente a estados del mundo \(e_j\) se construye la <b>matriz de consecuencias</b> \(u_{ij}\) (ganancia o utilidad de la acción \(a_i\) si ocurre el estado \(e_j\)). Con las probabilidades \(g_{\tilde{e}}(e_j)\) de cada estado, la <b>ganancia esperada</b> de cada acción (caso discreto) es:
\[G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j).\]
La <b>acción óptima</b> es la que <b>maximiza</b> \(G_i\).` },

    { titulo:"Probabilidades a priori y a posteriori (Teorema de Bayes)",
      html:String.raw`El enfoque bayesiano parte de probabilidades <b>a priori</b> (subjetivas) sobre los estados del mundo. Tras observar la evidencia experimental, las actualiza con el <b>Teorema de Bayes</b> para obtener las probabilidades <b>a posteriori</b>:
\[P(e_j\mid \text{dato})=\dfrac{P(\text{dato}\mid e_j)\,P(e_j)}{\displaystyle\sum_k P(\text{dato}\mid e_k)\,P(e_k)}.\]
Con esas probabilidades a posteriori se recalculan las ganancias y se vuelve a elegir la acción óptima. Las probabilidades a posteriori son el <b>producto de la inferencia bayesiana</b>; la <b>decisión</b> óptima es el producto de la teoría de la decisión.` }
  ],
  slides:["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png"]
}

];

/* ----- Diapositivas originales del profe asignadas a CADA tema -----
   Helpers: s(1,3,5) -> ["01.png","03.png","05.png"] ; rg(10,26) -> rango.
   El índice de cada arreglo coincide con el orden de los temas de la unidad. */
function s(){ return [].slice.call(arguments).map(function(n){return (n<10?'0':'')+n+'.png';}); }
function rg(a,b){ var o=[]; for(var i=a;i<=b;i++) o.push((i<10?'0':'')+i+'.png'); return o; }

const TEORIA_TOPIC_SLIDES = {
  1:[ [], s(1), s(2), s(3,4,5,6), s(7), [], s(13,14,15,16,17), s(18,19,20,21,22,23), s(28,29,30,31,32,33), s(8,9,10,11,12), s(24,25,26,27) ],
  2:[ s(1,2,3), s(4,5,6), s(7,8,9), s(10,11,12), s(18,19,20,21), s(17), s(13,14,15,16) ],
  3:[ s(1,2,3,4,5,7), s(6), s(8,9), [], s(10,15,16), s(14,17), s(11,12,13) ],
  4:[ s(1,2,3), s(4,5,6,7,8), s(9,10,11,12,13), s(14,15,16,17,18,19,20), s(24,25,26,27,28,29,30), s(21,22,23), s(31,32,33,34,35) ],
  5:[ s(1,2,3,4,5), [], [], [], s(6,7,8,9), s(11,12,13,14,15), s(16,17,18,19,20,21), s(10) ],
  6:[ s(1,2,9), [], s(3,4,5,6,7,8), rg(10,26), rg(27,50) ],
  7:[ s(1,2), s(3,4,5,6), s(8,9,10,11,12), s(7), s(13,14,15), s(16,17,18) ]
};

/* Total de diapositivas por unidad (para la galería "ver todas") */
const TEORIA_NSLIDES = {1:33,2:21,3:17,4:35,5:22,6:52,7:18};

if (typeof window !== "undefined") {
  window.TEORIA = TEORIA;
  window.TEORIA_TOPIC_SLIDES = TEORIA_TOPIC_SLIDES;
  window.TEORIA_NSLIDES = TEORIA_NSLIDES;
}
