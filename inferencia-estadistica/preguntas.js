/* ============================================================================
   BANCO DE PREGUNTAS - 1° PARCIAL INFERENCIA ESTADÍSTICA (LE)
   Transcripción fiel de los exámenes y "Preguntas a desarrollar" del profesor.
   Cobertura: Unidad 1 -> mitad de Unidad 4.

   Tipos:
     "multiple"     -> una sola opción correcta
     "multi"        -> varias opciones correctas (marcar todas)
     "vf"           -> verdadero/falso por afirmación
     "desarrollar"  -> pregunta de desarrollo (respuesta modelo)  [SECCIÓN APARTE]

   FÓRMULAS: se escriben en LaTeX entre  \( ... \)  y las renderiza MathJax,
   de modo que se vean igual que en las fotos. Por eso cada texto usa
   String.raw`...` (preserva las barras invertidas de LaTeX).
   Dentro de las fórmulas se usa \lt \gt \le \ge \ne en vez de < > para no
   romper el HTML.

   Convención de corrección de los exámenes escaneados:
     "?" junto a una opción  = esa opción ES correcta (sólo faltó marcarla).
     "m" junto a una opción  = esa opción está MAL (incorrecta).
   ============================================================================ */

const PREGUNTAS = [

/* ========================= UNIDAD 1 - DISTRIBUCIONES ===================== */

{
  id: "U1-D1", unidad: 1, tema: "Bernoulli / Binomial", tipo: "desarrollar",
  enunciado: String.raw`Obtener la varianza de la distribución de Bernoulli.`,
  respuesta: String.raw`<b>Idea.</b> La Bernoulli es el caso \(N=1\) de la binomial; conviene obtener primero media y varianza de la binomial mediante su función generatriz de momentos (FGM) y luego hacer \(N=1\).

<b>FGM de la binomial:</b> \(M_B(\theta)=(p\,e^{\theta}+q)^{N}\), con \(q=1-p\).

<b>1° momento (media):</b>
\(M_B'(\theta)=N\,(p e^{\theta}+q)^{N-1}\,p\,e^{\theta}\;\Rightarrow\; \mu_B=M_B'(0)=N(p+q)^{N-1}p=Np.\)

<b>2° momento:</b>
\(M_B''(\theta)=N p\,e^{\theta}\big[(N-1)(p e^{\theta}+q)^{N-2}p e^{\theta}+(p e^{\theta}+q)^{N-1}\big]\)
\(\Rightarrow\; E(\tilde{x}^2)=M_B''(0)=Np\,[(N-1)p+1]=N(N-1)p^2+Np.\)

<b>Varianza de la binomial:</b>
\(V_B=E(\tilde{x}^2)-[E(\tilde{x})]^2=\big[N(N-1)p^2+Np\big]-(Np)^2=Np-Np^2=Np(1-p)=Npq.\)

<b>Caso Bernoulli \((N=1)\):</b> \(\;\mu_b=p\;\) y
\[\boxed{\,V_b=E(\tilde{x}^2)-[E(\tilde{x})]^2=p-p^2=p(1-p)=pq\,.}\]`,
  explicacion: String.raw`Clave: la varianza de Bernoulli es el caso \(N=1\) de la binomial. Resultado: \(V=p\,q=p(1-p)\).`
},
{
  id: "U1-D2", unidad: 1, tema: "Distribución Normal", tipo: "desarrollar",
  enunciado: String.raw`Enunciar el teorema de la estandarización de una variable aleatoria normal.`,
  respuesta: String.raw`<b>Teorema.</b> Si \(\tilde{x}\) tiene una distribución normal con parámetros \(\mu\) y \(\sigma\) (\(\tilde{x}\sim N(\mu,\sigma)\)), entonces la variable aleatoria
\[\tilde{z}=\dfrac{\tilde{x}-\mu}{\sigma}\]
tiene una distribución <b>normal estándar</b> \(N(0,1)\) (media 0 y desviación estándar 1).

<b>Justificación.</b> La transformación es lineal, así que \(\tilde{z}\) sigue siendo normal; además:
\(E(\tilde{z})=\dfrac{E(\tilde{x})-\mu}{\sigma}=\dfrac{\mu-\mu}{\sigma}=0\) \(\;\) y \(\;\) \(V(\tilde{z})=\dfrac{V(\tilde{x})}{\sigma^2}=\dfrac{\sigma^2}{\sigma^2}=1.\)

<b>Utilidad.</b> Permite calcular cualquier probabilidad de una normal con una única tabla (la de \(N(0,1)\)):
\[P(a\le\tilde{x}\le b)=F_{N^*}\!\left(\dfrac{b-\mu}{\sigma}\right)-F_{N^*}\!\left(\dfrac{a-\mu}{\sigma}\right).\]`,
  explicacion: String.raw`La transformación \(z=(x-\mu)/\sigma\) traslada y reescala cualquier normal a la normal estándar \(N(0,1)\).`
},
{
  id: "U1-D3", unidad: 1, tema: "Distribución Normal", tipo: "desarrollar",
  enunciado: String.raw`Comprobar que \(f_N(x;\mu,\sigma)\) define una densidad legítima. (Pregunta multi-parte; suele venir con):
a) A partir de la función generatriz de momentos de la normal, obtener la varianza.
b) Escribir la expresión correspondiente a la función de distribución normal estándar.
c) ¿Qué limitación tiene y cuál es la utilidad que posee esta función?
e) Enunciar el Teorema de De Moivre, en forma coloquial y simbólica, e indicar los aspectos característicos.`,
  respuesta: String.raw`Una densidad es <b>legítima</b> si cumple: (1) \(f(x)\ge 0\) para todo \(x\), y (2) \(\displaystyle\int_{-\infty}^{\infty} f(x)\,dx=1\).
Para la normal \(f_N(x;\mu,\sigma)=\dfrac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}\) se verifica \(f_N(x)\gt 0\;\forall x\in\mathbb{R}\) (el exponencial es siempre positivo) y \(\displaystyle\int_{-\infty}^{+\infty} f_N(x)\,dx=1\); por lo tanto es una densidad legítima.

<b>a) Varianza vía FGM.</b> \(M_N(\theta)=e^{\mu\theta+\frac{\sigma^2\theta^2}{2}}\).
\(M_N'(\theta)=(\mu+\sigma^2\theta)\,M_N(\theta)\Rightarrow E(\tilde{x})=M_N'(0)=\mu.\)
\(M_N''(\theta)=\big[(\mu+\sigma^2\theta)^2+\sigma^2\big]M_N(\theta)\Rightarrow E(\tilde{x}^2)=M_N''(0)=\mu^2+\sigma^2.\)
\(\Rightarrow V_N=E(\tilde{x}^2)-[E(\tilde{x})]^2=(\mu^2+\sigma^2)-\mu^2=\sigma^2.\)

<b>b) Función de distribución normal estándar:</b> \(F_{N^*}(x)=\dfrac{1}{\sqrt{2\pi}}\displaystyle\int_{-\infty}^{x} e^{-t^2/2}\,dt.\)

<b>c) Limitación y utilidad.</b> La integral no tiene primitiva elemental (se resuelve por procedimientos numéricos); su utilidad es que existen tablas muy completas con las que puede calcularse la probabilidad de cualquier suceso de interés.

<b>e) Teorema de De Moivre.</b> Coloquial: cuando \(N\) es grande, la binomial puede aproximarse mediante una normal de media \(\mu=Np\) y varianza \(\sigma^2=Npq\).
Simbólico:  \(\displaystyle\lim_{N\to\infty} P\!\left(c \lt \dfrac{\tilde{x}-Np}{\sqrt{Npq}} \lt d\right)=\dfrac{1}{\sqrt{2\pi}}\int_c^d e^{-x^2/2}\,dx.\)
Aspectos característicos: la aproximación es muy precisa cuando \(N\) es grande y \(p\) no muy cercana a 0 ó 1; como referencia práctica, es buena si \(Np\ge 5\) y \(Nq\ge 5\).`,
  explicacion: String.raw`Densidad legítima = positiva e integra 1. La FGM de la normal es \(e^{\mu\theta+\sigma^2\theta^2/2}\); de allí \(\mu\) y \(\sigma^2\). La \(F\) estándar no tiene primitiva elemental (se usa tabla).`
},
{
  id: "U1-D4", unidad: 1, tema: "Distribución Chi-cuadrado", tipo: "desarrollar",
  enunciado: String.raw`Obtener la Función Generatriz de Momentos (FGM) de la distribución Chi-cuadrado.`,
  respuesta: String.raw`<b>Definición.</b> Si \(\tilde{x}\sim\chi^2_n\), su densidad es \(f(x)=\dfrac{1}{2^{n/2}\,\Gamma(n/2)}\,e^{-x/2}\,x^{(n/2)-1}\) (para \(x\gt0\)). Entonces:
\(M_{\chi^2}(\theta;n)=E(e^{\theta\tilde{x}})=\dfrac{1}{2^{n/2}\,\Gamma(n/2)}\displaystyle\int_0^{\infty} e^{\theta x}\,e^{-x/2}\,x^{(n/2)-1}\,dx=\dfrac{1}{2^{n/2}\,\Gamma(n/2)}\int_0^{\infty} e^{-(1/2-\theta)x}\,x^{(n/2)-1}\,dx.\)

<b>Cambio de variable</b> \(t=(1/2-\theta)x\) \(\left(x=\dfrac{t}{1/2-\theta},\; dx=\dfrac{dt}{1/2-\theta}\right)\), usando \(\Gamma(k)=\displaystyle\int_0^\infty e^{-t}t^{k-1}dt\):
\(=\dfrac{1}{2^{n/2}\,\Gamma(n/2)\,(1/2-\theta)^{n/2}}\displaystyle\int_0^{\infty} e^{-t}\,t^{(n/2)-1}\,dt=\dfrac{\Gamma(n/2)}{2^{n/2}\,\Gamma(n/2)\,(1/2-\theta)^{n/2}}.\)

Como \((1/2-\theta)^{n/2}=\dfrac{(1-2\theta)^{n/2}}{2^{n/2}}\), el factor \(2^{n/2}\) se cancela:
\[\boxed{\,M_{\chi^2}(\theta;n)=(1-2\theta)^{-n/2}\,}\qquad \theta\lt 1/2.\]`,
  explicacion: String.raw`Resultado clave: \(M_{\chi^2}(\theta;n)=(1-2\theta)^{-n/2}\), válida para \(\theta\lt 1/2\). Se usa el cambio \(t=(1/2-\theta)x\) y la definición de \(\Gamma\).`
},
{
  id: "U1-D5", unidad: 1, tema: "Distribución Chi-cuadrado", tipo: "desarrollar",
  enunciado: String.raw`A partir de la FGM, hallar la media y la varianza de la distribución Chi-cuadrado.`,
  respuesta: String.raw`Con \(M_{\chi^2}(\theta;n)=(1-2\theta)^{-n/2}\) se deriva por regla de la cadena:

<b>1ª derivada:</b> \(M'(\theta)=\Big(-\dfrac{n}{2}\Big)(1-2\theta)^{-n/2-1}\cdot(-2)=n\,(1-2\theta)^{-(n/2+1)}.\)
<b>2ª derivada:</b> \(M''(\theta)=n\Big(-\dfrac{n}{2}-1\Big)(1-2\theta)^{-(n/2+2)}\cdot(-2)=n(n+2)\,(1-2\theta)^{-(n/2+2)}.\)

<b>Evaluando en \(\theta=0\):</b>
Media: \(\mu_{\chi^2}=E(\tilde{x})=M'(0)=n.\)
\(E(\tilde{x}^2)=M''(0)=n(n+2)=n^2+2n.\)
Varianza: \(V_{\chi^2}=E(\tilde{x}^2)-[E(\tilde{x})]^2=(n^2+2n)-n^2=2n.\)

\[\boxed{\;\mu_{\chi^2}=n\,,\qquad V_{\chi^2}=2n\;}\]`,
  explicacion: String.raw`Media \(=n\)  y  Varianza \(=2n\) (\(n=\) grados de libertad).`
},
{
  id: "U1-D6", unidad: 1, tema: "Ley de los grandes números", tipo: "desarrollar",
  enunciado: String.raw`¿Es correcto o incorrecto afirmar que la expresión  \(P\!\left(\displaystyle\lim_{n\to\infty}\tilde{m}_n=\mu_b\right)=1\)  representa la ley de los grandes números (teorema de Bernoulli) en su forma débil? (Si es incorrecto, justificar).`,
  respuesta: String.raw`<b>INCORRECTO.</b> Siendo \(\tilde{m}_n\) la media (o proporción) experimental tras \(n\) repeticiones, esa expresión —convergencia con probabilidad 1, con el límite DENTRO de la probabilidad— corresponde a la ley <b>FUERTE</b> de los grandes números, no a la débil.

• <b>Forma DÉBIL</b> (convergencia en probabilidad): \(\displaystyle\lim_{n\to\infty} P\big(\,|\tilde{m}_n-\mu_b|\lt\varepsilon\,\big)=1\) para todo \(\varepsilon\gt0\).
• <b>Forma FUERTE</b> (convergencia casi segura): \(P\!\left(\displaystyle\lim_{n\to\infty}\tilde{m}_n=\mu_b\right)=1.\)

La diferencia clave está en la posición del límite: en la <b>débil</b> está <i>afuera</i> de la probabilidad (para cada \(\varepsilon\)); en la <b>fuerte</b> está <i>adentro</i>.`,
  explicacion: String.raw`El límite DENTRO de \(P(\cdot)=1\) es la ley FUERTE. La forma débil es \(\lim P(|\tilde{m}_n-\mu_b|\lt\varepsilon)=1\) (límite afuera).`
},
{
  id: "U1-MC1", unidad: 1, tema: "Distribución Binomial", tipo: "multi",
  enunciado: String.raw`Para una variable aleatoria binomial, indicar el/los modelo/s que identifica/n correctamente la distribución de dicha variable. Siendo \(N\): pruebas independientes de Bernoulli, y \(p\): probabilidad de un éxito en cada prueba.`,
  opciones: [
    String.raw`\(g_B(n;N,p)=\dbinom{N}{n}\,p^{n}(1-p)^{N-n}\,;\; n=0,1,2,\dots,N\)`,
    String.raw`\(g_B(n;N,p)=\dbinom{N}{n}\,q^{\,N-n}p^{\,n}\,;\; n=0,1,2,\dots,N\)`,
    String.raw`\(g_B(n;N,p)=C_n^{N}\,p^{n}(1-p)^{N-n}\,;\; n=0,1,2,\dots,N\)`,
    String.raw`\(g_B(n;N,p)=\dbinom{N}{n}\,(1-p)^{n}p^{\,N-n}\,;\; n=0,1,2,\dots\)`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Correctas a), b) y c): a) y b) son algebraicamente IDÉNTICAS (\(q^{N-n}p^n=p^n q^{N-n}\)) y la c) usa la notación \(C_n^{N}\) (combinaciones), todas describen bien la binomial. En el examen se marca la b). La d) intercambia \(p\) y \(q\), por eso es incorrecta.`
},
{
  id: "U1-MC2", unidad: 1, tema: "Distribución Normal", tipo: "multi",
  enunciado: String.raw`Marcar las DOS opciones que, al comprobarse, permiten afirmar que \(f_N(x;\mu,\sigma)\) es una densidad legítima, para cualquier \(\mu\) y para cualquier \(\sigma\gt0\).`,
  opciones: [
    String.raw`\(f_N(x;\mu,\sigma)\gt 0\,;\; -\infty\lt x\lt\infty\)`,
    String.raw`\(\displaystyle\int_{-\infty}^{\infty} f_N(x;\mu,\sigma)\,dx=1\)`,
    String.raw`\(\dfrac{e^{-(x-\mu)^2/2\sigma^2}}{\sigma\sqrt{2\pi}}\ge 0\,;\; -\infty\lt x\lt\infty\) (repite la condición de positividad)`,
    String.raw`\(f_N(x;\mu,\sigma)\ge 0\) sólo para \(x=\mu\)`
  ],
  correctas: [0,1],
  explicacion: String.raw`Una densidad legítima exige: (1) \(f(x)\ge0\) (aquí \(f_N\gt0\;\forall x\)) y (2) que integre 1. Esas son las dos condiciones.`
},
{
  id: "U1-MC3", unidad: 1, tema: "Distribución Normal estándar", tipo: "multi",
  enunciado: String.raw`De las opciones, marcar la/s que, al comprobarse, permite/n afirmar que la distribución normal estándar es una densidad legítima.`,
  opciones: [
    String.raw`\(f_{N^*}(x)\ge 0\,;\; x\in\mathbb{R}\)`,
    String.raw`\(\dfrac{e^{-x^2/2}}{\sqrt{2\pi}}\ge 0\,;\; -\infty\lt x\lt\infty\)`,
    String.raw`\(\dfrac{e^{-x^2/2}}{2\pi}\gt 0\,;\; x\in\mathbb{R}\)`,
    String.raw`\(f_{N^*}(x)\gt 0\,;\; -\infty\lt x\lt\infty\)`,
    String.raw`\(\dfrac{1}{2\pi}\displaystyle\int_{-\infty}^{\infty} e^{-x^2/2}\,dx=1\)`,
    String.raw`\(\displaystyle\int_{-\infty}^{\infty} f_{N^*}(x)\,dx=1\)`
  ],
  correctas: [0,1,3,5],
  explicacion: String.raw`Una densidad es legítima si \(f(x)\ge0\) (positividad) e integra 1, usando la densidad BIEN escrita con \(1/\sqrt{2\pi}\). ⚠️ Trampa del profe: las que escriben \(2\pi\) en lugar de \(\sqrt{2\pi}\) — \(e^{-x^2/2}/(2\pi)\) y \(\frac{1}{2\pi}\int e^{-x^2/2}dx\) — están MAL. En el examen el "?" marca \(\int f_{N^*}(x)dx=1\) (correcta, faltó marcarla) y la "m" marca las dos del \(2\pi\).`
},
{
  id: "U1-MC4a", unidad: 1, tema: "Propiedades de la Normal", tipo: "multi",
  enunciado: String.raw`Indicar los enunciados que NO corresponden a propiedades o características de la distribución normal.`,
  opciones: [
    String.raw`En el intervalo \((\mu-2\sigma,\;\mu+2\sigma)\) se encuentra comprendido, aproximadamente, el 96,44% de la distribución.`,
    String.raw`Proporciona una aproximación precisa a la binomial cuando \(N\) es pequeña y \(p\) es cercana a 0 o 1.`,
    String.raw`Es simétrica respecto de su media.`,
    String.raw`La moda y la mediana son ambas iguales a la media.`,
    String.raw`La curva es convexa entre \(x=-\infty\) y \(x=\mu-\sigma\), también entre \(x=\mu+\sigma\) y \(x=+\infty\), y cóncava en el resto del dominio.`
  ],
  correctas: [0,1],
  explicacion: String.raw`NO corresponden (son falsas): el intervalo \((\mu\pm2\sigma)\) cubre \(\approx 95,44\%\) (no 96,44%); y la aproximación a la binomial es buena con \(N\) GRANDE y \(p\) cercana a 0,5 (no \(N\) pequeña, \(p\) cercana a 0/1). Las otras tres sí son propiedades verdaderas.`
},
{
  id: "U1-MC4b", unidad: 1, tema: "Propiedades de la Normal", tipo: "multi",
  enunciado: String.raw`Indicar cuáles de los enunciados SÍ corresponden a propiedades o características de la distribución normal.`,
  opciones: [
    String.raw`Es simétrica respecto de su media.`,
    String.raw`La moda y la mediana son ambas iguales a la media.`,
    String.raw`La curva es convexa entre \(x=-\infty\) y \(x=\mu-\sigma\), también entre \(x=\mu+\sigma\) y \(x=+\infty\), y cóncava en el resto del dominio.`,
    String.raw`En \((\mu-2\sigma,\;\mu+2\sigma)\) se encuentra el 96,44% de la distribución.`,
    String.raw`Proporciona una aproximación precisa a la distribución binomial cuando \(N\) es pequeña y \(p\) es cercana a 0 o 1.`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Verdaderas: simetría respecto a la media; moda = mediana = media; y los puntos de inflexión en \(\mu\pm\sigma\) (convexa fuera, cóncava entre \(\mu-\sigma\) y \(\mu+\sigma\)). Falsas: el 96,44% (es \(\approx95,44\%\)); y la aproximación a la binomial es buena con \(N\) GRANDE y \(p\) cercana a 0,5.`
},
{
  id: "U1-MC5", unidad: 1, tema: "Varianza de la Normal", tipo: "multi",
  enunciado: String.raw`Indicar la/s opción/es que permite/n obtener correctamente la varianza de la distribución normal.`,
  opciones: [
    String.raw`\(V_n(\sigma)=E(\tilde{x}^2)-[E(\tilde{x})]^2=(\mu^2+\sigma^2)-\mu^2=\sigma^2\)`,
    String.raw`\(V_n(\sigma)=-[E(\tilde{x})]^2+E(\tilde{x}^2)=-\mu^2+(\mu^2+\sigma^2)=\sigma^2\)`,
    String.raw`\(V_n(\sigma)=E(\tilde{x}^2)-[E(\tilde{x})]^2=(\mu\cdot\mu+\sigma\cdot\sigma)-\mu\cdot\mu=\sigma^2\)`,
    String.raw`\(V_n(\sigma)=E(\tilde{x}^2)-[E(\tilde{x})]^2=\mu^2\!\left[\left(1+\dfrac{\sigma^2}{\mu^2}\right)-1\right]=\sigma^2\)`
  ],
  correctas: [0,1,2,3],
  explicacion: String.raw`Las CUATRO opciones son escrituras algebraicamente equivalentes que llegan correctamente a \(\sigma^2=E(\tilde{x}^2)-[E(\tilde{x})]^2=(\mu^2+\sigma^2)-\mu^2\). En el examen, c) y d) llevan "?" (correctas, sólo faltó marcarlas con X).`
},
{
  id: "U1-MC6", unidad: 1, tema: "Distribución Normal", tipo: "multi",
  enunciado: String.raw`Si la v.a. \(\tilde{X}\) tiene distribución normal con media \(\mu\) y desviación estándar \(\sigma\), ¿cuáles opciones se verifican?`,
  opciones: [
    String.raw`\(P(\mu-\sigma\le\tilde{X}\le\mu+\sigma)=F_{N^*}(1)-F_{N^*}(-1)=0{,}6826\)`,
    String.raw`La v.a. \(\tilde{z}=\dfrac{\tilde{X}-\mu}{\sigma}\) tiene distribución normal estándar.`,
    String.raw`\(P(b\le\tilde{X}\le c)=F_{N^*}\!\left(\dfrac{b-\mu}{\sigma}\right)-F_{N^*}\!\left(\dfrac{c-\mu}{\sigma}\right)\)`,
    String.raw`Aproximadamente el 99,74% del área bajo la curva está entre \(\pm2\) desviaciones estándar respecto de la media.`
  ],
  correctas: [0,1],
  explicacion: String.raw`Verdaderas: \(\pm1\sigma\) contiene \(\approx68,26\%\); y la estandarización \(z=(X-\mu)/\sigma\sim N(0,1)\). Falsas: c) invierte el orden (debe ser \(F((c-\mu)/\sigma)-F((b-\mu)/\sigma)\)); d) el 99,74% corresponde a \(\pm3\sigma\), no a \(\pm2\sigma\) (que es \(\approx95,44\%\)).`
},
{
  id: "U1-MC7", unidad: 1, tema: "Normal como límite de Binomial", tipo: "multiple",
  enunciado: String.raw`En el marco de la distribución normal como límite de la binomial, indicar el enunciado correcto.`,
  opciones: [
    String.raw`La distribución normal resulta una aproximación conveniente a la binomial cuando esta última toma la forma de campana de Gauss.`,
    String.raw`La aproximación será correcta cuando el tamaño de la muestra sea grande y la probabilidad de éxito esté próxima a cero o a uno.`,
    String.raw`En caso que el tamaño de muestra sea pequeño y la probabilidad de éxito no esté cercana a 0,5, la aproximación será correcta.`,
    String.raw`La aproximación es buena cuando \(Np\) y \(Nq\) son ambos menores a 5.`
  ],
  correctas: [0],
  explicacion: String.raw`La aproximación normal es buena cuando la binomial tiene forma acampanada (\(N\) grande y \(p\) no extrema), lo que en la práctica equivale a \(Np\ge5\) y \(Nq\ge5\). Las demás invierten las condiciones.`
},
{
  id: "U1-MC8", unidad: 1, tema: "Distribución muestral de la media", tipo: "multiple",
  enunciado: String.raw`Indicar cuál de los siguientes enunciados, para el estadístico media muestral, es correcto.`,
  opciones: [
    String.raw`El modelo de distribución es: \(N\!\left(\mu,\;\dfrac{\sigma^2}{n}\right)\)`,
    String.raw`Su valor esperado es: \(\bar{x}\)`,
    String.raw`La desviación estándar vale: \(\dfrac{\sigma}{n}\)`,
    String.raw`La tipificación se realiza mediante: \(z=\dfrac{x-\mu}{\sigma/n}\)`
  ],
  correctas: [0],
  explicacion: String.raw`La media muestral se distribuye \(N(\mu,\sigma^2/n)\). Errores: \(E(\bar{x})=\mu\) (no \(\bar{x}\)); desviación \(=\sigma/\sqrt{n}\) (no \(\sigma/n\)); tipificación \(z=\dfrac{\bar{x}-\mu}{\sigma/\sqrt{n}}\).`
},
{
  id: "U1-MC9", unidad: 1, tema: "Distribución muestral de la media", tipo: "multi",
  enunciado: String.raw`¿Cuáles de los siguientes enunciados son correctos para el estadístico media muestral \(\bar{x}\)?`,
  opciones: [
    String.raw`\(E(\bar{x})=\mu\)`,
    String.raw`\(\sigma^2(\bar{x})=\dfrac{\sigma^2}{n}\)`,
    String.raw`\(\bar{x}\to N\!\left(\mu,\;\dfrac{\sigma}{\sqrt{n}}\right)\)`,
    String.raw`\(\tilde{z}=\dfrac{\bar{x}-\mu}{\sigma}\to N(0,1)\)`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`\(E(\bar{x})=\mu\), \(\operatorname{Var}(\bar{x})=\sigma^2/n\) y \(\bar{x}\sim N(\mu,\sigma/\sqrt{n})\) son correctas. La d) está mal: la tipificación correcta es \(z=\dfrac{\bar{x}-\mu}{\sigma/\sqrt{n}}\), no dividir por \(\sigma\).`
},
{
  id: "U1-MC10", unidad: 1, tema: "Teorema Central del Límite", tipo: "multiple",
  enunciado: String.raw`Entre las siguientes posibilidades para el estadístico media muestral (\(\bar{x}\)), elegir la que sea correcta.`,
  opciones: [
    String.raw`Independientemente de cómo sea la distribución de la variable aleatoria, la distribución muestral de \(\bar{x}\) tiende a la normal a medida que el tamaño de las muestras tiende a infinito.`,
    String.raw`Variable de partida: \(\tilde{X}\to N(0,1)\)`,
    String.raw`Varianza: \(\dfrac{\sigma}{n^2}\)`,
    String.raw`Modelo de distribución: \(N\!\left(\mu,\;\dfrac{\sigma}{n^2}\right)\)`
  ],
  correctas: [0],
  explicacion: String.raw`Es el Teorema Central del Límite: sea cual sea la distribución de partida, \(\bar{x}\) tiende a la normal cuando \(n\to\infty\). Las demás tienen fórmulas incorrectas (varianza \(\sigma^2/n\), modelo \(N(\mu,\sigma^2/n)\)).`
},
{
  id: "U1-MC11", unidad: 1, tema: "Teorema de De Moivre", tipo: "multiple",
  enunciado: String.raw`¿Qué cambio haría en la expresión  \(\displaystyle\lim_{n\to\infty} P\!\left(c \lt \dfrac{(Npq)^{1/2}}{x-Np} \lt d\right)=\int_c^d \dfrac{e^{-x^2/2}}{\sqrt{2\pi}}\,dx\)  para que responda al Teorema de De Moivre?`,
  opciones: [
    String.raw`Cambiar el cociente por \(\dfrac{x-Np}{(Npq)^{1/2}}\)`,
    String.raw`Cambiar el cociente por \(\dfrac{\sqrt{Npq}}{x-Np}\)`,
    String.raw`Cambiar el integrando por \(\sqrt{2\pi}\,e^{-x^2/2}\)`,
    String.raw`No es necesario ningún cambio`
  ],
  correctas: [0],
  explicacion: String.raw`La variable estandarizada de De Moivre es \(\dfrac{x-Np}{\sqrt{Npq}}\). En el enunciado el cociente está invertido; corregirlo lo hace correcto.`
},
{
  id: "U1-MC12a", unidad: 1, tema: "Distribución Chi-cuadrado", tipo: "multi",
  enunciado: String.raw`Indicar la/s característica/s CORRECTA/s correspondiente/s a la distribución chi-cuadrado.`,
  opciones: [
    String.raw`Por su uso habitual está tabulada para distintos valores del parámetro \(n\).`,
    String.raw`Para valores de \(n\ge30\), la variable chi-cuadrado tiene aproximadamente una distribución normal.`,
    String.raw`La variable \(\chi^2\) se tipifica mediante \(z=\dfrac{\chi^2-n}{\sqrt{2n}}\).`,
    String.raw`Su media es \(2n\) y su varianza es \(n\).`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Verdaderas: está tabulada por \(n\); para \(n\ge30\) se aproxima a la normal; se tipifica con \(z=(\chi^2-n)/\sqrt{2n}\). Falsa la última: media \(=n\) y varianza \(=2n\) (están invertidas).`
},
{
  id: "U1-MC12b", unidad: 1, tema: "Distribución Chi-cuadrado", tipo: "multi",
  enunciado: String.raw`Indicar la/s característica/s INCORRECTA/s correspondiente/s a la distribución chi-cuadrado.`,
  opciones: [
    String.raw`Se utiliza para efectuar pruebas de hipótesis sólo cuando se conoce la distribución de la población de origen.`,
    String.raw`La variable \(\chi^2\) se tipifica mediante \(z=(\chi^2-n)\,(2n)\) (sin raíz ni cociente).`,
    String.raw`Por su uso habitual está tabulada para distintos valores del parámetro \(n\).`,
    String.raw`Para \(n\ge30\) tiene aproximadamente una distribución normal.`
  ],
  correctas: [0,1],
  explicacion: String.raw`Incorrectas: el uso del \(\chi^2\) (p.ej. bondad de ajuste) no requiere conocer de antemano la distribución de origen; y la tipificación correcta es \(z=(\chi^2-n)/\sqrt{2n}\), no \((\chi^2-n)(2n)\). Las otras dos son correctas.`
},
{
  id: "U1-MC13", unidad: 1, tema: "Distribución Chi-cuadrado", tipo: "multiple",
  enunciado: String.raw`En el marco de la distribución Chi-cuadrado, indicar cuál de los enunciados es correcto.`,
  opciones: [
    String.raw`Es muy útil en la estimación de la varianza, en pruebas de independencia y de bondad de ajuste.`,
    String.raw`La media de la variable aleatoria es \(2n\) y la varianza vale \(n\).`,
    String.raw`Si bien la curva es inicialmente simétrica, según aumenta \(n\) tiende rápidamente a hacerse asimétrica.`,
    String.raw`La forma correcta de tipificar, para \(n\ge30\), es \(z=\dfrac{\chi^2-2n}{\sqrt{n}}\).`
  ],
  correctas: [0],
  explicacion: String.raw`Correcta: el \(\chi^2\) sirve para estimar varianzas y para pruebas de independencia y bondad de ajuste. Errores: media \(=n\) y var \(=2n\); la curva empieza asimétrica y se vuelve más simétrica al crecer \(n\); la tipificación es \(z=(\chi^2-n)/\sqrt{2n}\).`
},
{
  id: "U1-MC14", unidad: 1, tema: "Distribución t de Student", tipo: "multiple",
  enunciado: String.raw`Sobre propiedades y condiciones de aplicación de la distribución t de Student, señalar la que NO es verdadera.`,
  opciones: [
    String.raw`La función de distribución puede calcularse en forma analítica y ha sido tabulada para diferentes valores.`,
    String.raw`El valor esperado de \(\tilde{t}\) es cero si \(n\gt1\), y su varianza es \(\dfrac{n}{n-2}\), que sólo existe para \(n\gt2\).`,
    String.raw`Tiene la misma forma de campana simétrica que la normal estándar, pero refleja mayor variabilidad en muestras pequeñas.`,
    String.raw`Para su utilización, la población principal debe tener una distribución esencialmente normal.`,
    String.raw`Si las muestras provienen de poblaciones normales, con \(\sigma_1^2=\sigma_2^2\), y denominadas (con \(n_1\le30\) y \(n_2\le30\)), la distribución de la diferencia de medias sigue una distribución \(f_s(t;\,n_1+n_2-2)\).`
  ],
  correctas: [0],
  explicacion: String.raw`NO es verdadera: la función de distribución \(t\) NO tiene forma analítica cerrada (se obtiene numéricamente / por tablas). Las demás afirmaciones son correctas.`
},
{
  id: "U1-MC15", unidad: 1, tema: "Distribución t de Student", tipo: "multi",
  enunciado: String.raw`En el contexto de la distribución t de Student, marcar la/s afirmación/es que NO se cumple/n.`,
  opciones: [
    String.raw`Se conoce como distribución multimodal.`,
    String.raw`La varianza no depende del tamaño de la muestra.`,
    String.raw`La gráfica es simétrica respecto de \(t=0\).`,
    String.raw`Salvo excepciones, posee varianza finita.`,
    String.raw`Si \(n=1\) \(\Rightarrow\) \(f_s(t)=\big[(1+t^2)\,\pi\big]^{-1}\,;\; t\in\mathbb{R}\).`,
    String.raw`No siempre es posible calcular la media.`
  ],
  correctas: [0,1],
  explicacion: String.raw`NO se cumplen: la \(t\) es UNImodal (no multimodal); y su varianza \(\dfrac{n}{n-2}\) SÍ depende de \(n\). Las otras cuatro sí se cumplen (simétrica en \(t=0\); varianza finita para \(n\gt2\); con \(n=1\) es la distribución de Cauchy; y la media sólo existe para \(n\gt1\)).`
},
{
  id: "U1-MC16", unidad: 1, tema: "t de Student (n=1, Cauchy)", tipo: "multiple",
  enunciado: String.raw`En el contexto de la distribución t de Student con \(n=1\), indicar la afirmación que se cumple.`,
  opciones: [
    String.raw`La función de densidad es: \(f_s(t;1)=\big[(1+t^2)\,\pi\big]^{-1}\,;\; -\infty\lt t\lt\infty\)`,
    String.raw`Posee varianza finita.`,
    String.raw`Su valor esperado (media) está bien definido.`,
    String.raw`Es una distribución bimodal.`
  ],
  correctas: [0],
  explicacion: String.raw`Con \(n=1\) la \(t\) es la distribución de Cauchy: \(f(t)=\dfrac{1}{\pi(1+t^2)}\). En ese caso NO existen la media ni la varianza, y es unimodal.`
},
{
  id: "U1-MC17a", unidad: 1, tema: "Estadísticos y sus distribuciones", tipo: "multi",
  enunciado: String.raw`Los siguientes enunciados relacionan estadísticos con distribuciones. Marcar el/los VERDADERO/s.`,
  opciones: [
    String.raw`Distribución de la varianza muestral \(\rightarrow\) Distribución chi-cuadrado`,
    String.raw`Distribución de la diferencia de medias en poblaciones normales (\(n\lt30\)) \(\rightarrow\) Distribución t de Student`,
    String.raw`Distribución del cociente de dos varianzas \(\rightarrow\) Distribución F de Fisher`,
    String.raw`Distribución de la media muestral (\(n\to+\infty\)) \(\rightarrow\) Distribución normal`,
    String.raw`Distribución de la media muestral \(\rightarrow\) Distribución binomial`,
    String.raw`Distribución de la proporción de éxitos \(\rightarrow\) Distribución binomial`
  ],
  correctas: [0,1,2,3,5],
  explicacion: String.raw`Verdaderas: varianza muestral\(\to\chi^2\); diferencia de medias (\(n\lt30\))\(\to t\); cociente de varianzas\(\to F\); media muestral (\(n\to\infty\))\(\to\) normal (TCL); proporción de éxitos\(\to\) binomial. Falsa: media muestral \(\to\) binomial.`
},
{
  id: "U1-MC17b", unidad: 1, tema: "Estadísticos y sus distribuciones", tipo: "multi",
  enunciado: String.raw`Los siguientes enunciados relacionan estadísticos con distribuciones. Señalar el/los FALSO/s.`,
  opciones: [
    String.raw`Distribución de la varianza muestral \(\rightarrow\) Distribución F de Fisher`,
    String.raw`Distribución del cociente de dos varianzas \(\rightarrow\) Distribución chi-cuadrado`,
    String.raw`Distribución de la media muestral \(\rightarrow\) Distribución binomial`,
    String.raw`Distribución de la media muestral (\(n\to\infty\)) \(\rightarrow\) Distribución normal`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Falsas: varianza muestral\(\to\chi^2\) (no F); cociente de varianzas\(\to F\) (no \(\chi^2\)); media muestral\(\to\) normal por TCL (no binomial). La última es verdadera.`
},
{
  id: "U1-MC18", unidad: 1, tema: "Ley de los grandes números", tipo: "multiple",
  enunciado: String.raw`En el marco de la Ley de los grandes números para poblaciones dicotomicas, seleccionar la opcion correcta.`,
  opciones: [
    String.raw`En forma fuerte: \(\tilde{m}_n\) tiende en probabilidad a \(E(\tilde{x})\).`,
    String.raw`La media experimental tiende a la media teorica a medida que aumenta el numero de repeticiones.`,
    String.raw`En forma debil: \(\tilde{m}_n\) converge al numero \(\mu_B\).`,
    String.raw`La probabilidad empirica se aproxima a la teorica siempre que el numero de repeticiones permanezca constante.`
  ],
  correctas: [1],
  explicacion: String.raw`Correcta: la media experimental tiende a la teorica al aumentar las repeticiones (esencia de la ley de los grandes numeros). Errores: la forma fuerte es convergencia casi segura (no "en probabilidad"); la debil es convergencia en probabilidad (no "converge al numero"); y la probabilidad empirica se aproxima cuando las repeticiones AUMENTAN (no permanecen constantes).`
},
{
  id: "U1-MC19", unidad: 1, tema: "Proporcion de exitos", tipo: "multi",
  enunciado: String.raw`Indicar la/s opcion/es, para el estadistico \(\hat{p}\) (proporcion de exitos con probabilidad \(\pi\)), que sea/n verdadera/s.`,
  opciones: [
    String.raw`Valor esperado: \(n\cdot\pi\).`,
    String.raw`Modelo de distribucion: \(N\!\left(\pi,\;\sqrt{\dfrac{\pi(1-\pi)}{n}}\right)\).`,
    String.raw`Estandarizacion: \(z=\dfrac{\hat{p}-\pi}{\sqrt{(\pi-\pi^2)/n}}\).`,
    String.raw`Varianza: \(\sqrt{\dfrac{\pi(1-\pi)}{n}}\).`
  ],
  correctas: [1,2],
  explicacion: String.raw`Verdaderas: b) el modelo \(N\!\left(\pi,\sqrt{\pi(1-\pi)/n}\right)\) (usando la convencion media-desvio, como \(\bar{x}\sim N(\mu,\sigma/\sqrt{n})\)); y c) la estandarizacion \(z=(\hat{p}-\pi)/\sqrt{\pi(1-\pi)/n}\) (notar \(\pi-\pi^2=\pi(1-\pi)\)). Errores: a) \(E(\hat{p})=\pi\), no \(n\pi\); d) \(\sqrt{\pi(1-\pi)/n}\) es la DESVIACION estandar, no la varianza (la varianza es \(\pi(1-\pi)/n\), sin raiz).`
},
{
  id: "U1-MC20", unidad: 1, tema: "Distribucion F de Fisher", tipo: "multi",
  enunciado: String.raw`En la distribucion F de Fisher, indicar la/s afirmacion/es correcta/s.`,
  opciones: [
    String.raw`La densidad de F no se calcula analiticamente, pero esta tabulada para valores de probabilidad acumulada y grados de libertad del numerador y denominador.`,
    String.raw`La curva de F depende solamente de los grados de libertad \(m_1\) y \(m_2\).`,
    String.raw`La grafica de F es unimodal, continua, con sesgo a la derecha y centrada en 1.`,
    String.raw`Solo es posible obtener la media para \(m_1>0\) y la varianza para \(m_2>2\).`,
    String.raw`Al aumentar \(m_1\) o \(m_2\), la curva se hace menos asimetrica a la izquierda y tiende a simetrica.`
  ],
  correctas: [0,2],
  explicacion: String.raw`Correctas: la densidad no es analitica pero esta tabulada; y la grafica es unimodal, continua, con sesgo a la derecha. Falsas: la curva depende de \(n_1\), \(n_2\) y del ORDEN; la media existe para \(n_2>2\) (no \(m_1>0\)); y la asimetria es a la DERECHA (no a la izquierda). Recordar \(\mu_F=n_2/(n_2-2)\) y \(V_F=2n_2^2(n_1+n_2-2)/[n_1(n_2-2)^2(n_2-4)]\).`
},
{
  id: "U1-MC21", unidad: 1, tema: "Distribucion Binomial (propiedades)", tipo: "multi",
  enunciado: String.raw`En el contexto de la distribucion binomial, indicar el/los enunciado/s correcto/s.`,
  opciones: [
    String.raw`Funcion de probabilidad: \(g_B(n;N,p)=\dbinom{N}{n}\,p^n\,(1-p)^{N-n}\).`,
    String.raw`Funcion generatriz de momentos: \(M_B(\theta)=(p\,e^{\theta}+q)^N\).`,
    String.raw`Media: \(\mu_B=N(1-p)\).`,
    String.raw`Varianza: \(V_B=Np(1-p)\).`
  ],
  correctas: [0,1,3],
  explicacion: String.raw`Correctas: la funcion de probabilidad, la FGM y la varianza \(V_B=Npq\). Incorrecta: la media es \(\mu_B=Np\), NO \(N(1-p)\).`
},

/* ============== UNIDAD 2 - ESTIMACIÓN E INTERVALOS DE CONFIANZA ========== */

{
  id: "U2-D1", unidad: 2, tema: "Estimación", tipo: "desarrollar",
  enunciado: String.raw`a) ¿A qué se llama estimación?  b) ¿Cuál es la diferencia entre estimador y estimación?`,
  respuesta: String.raw`<b>a)</b> En inferencia estadística se llama <b>ESTIMACIÓN</b> al conjunto de técnicas que permiten dar un valor aproximado de un parámetro de una población a partir de los datos proporcionados por una muestra.

<b>b)</b> Conviene distinguir tres conceptos:
• <b>Parámetro:</b> el valor poblacional, fijo y desconocido (p.ej. \(\mu\), \(\sigma^2\), \(p\)).
• <b>Estimador:</b> es un <i>estadístico</i> y, por tanto, una <b>variable aleatoria</b> con su distribución muestral (p.ej. \(\hat{\theta}\), \(\bar{x}\)); cambia de una muestra a otra.
• <b>Estimación (puntual):</b> es el <b>valor concreto</b> que toma ese estadístico para una muestra particular \((\tilde{x}_{i1},\tilde{x}_{i2},\dots,\tilde{x}_{in})\).

En síntesis: el estimador es la <i>fórmula</i> (variable aleatoria); la estimación es el <i>número</i> que resulta al aplicarla a una muestra dada.`,
  explicacion: String.raw`Estimador = estadístico/variable aleatoria (\(\hat{\theta}\)). Estimación = el valor concreto que toma para una muestra dada.`
},
{
  id: "U2-D2", unidad: 2, tema: "Intervalo para la varianza", tipo: "desarrollar",
  enunciado: String.raw`Se tiene una muestra aleatoria de tamaño \(n\) de una distribución normal. Si la desviación estándar es desconocida, ¿cómo se estima un intervalo para la varianza poblacional al nivel de confianza del \((1-\alpha)\times100\%\)?`,
  respuesta: String.raw`<b>Cantidad pivotal.</b> Para una muestra aleatoria de una población normal, la cuasi-varianza \(\hat{S}^2=\dfrac{\sum(x_i-\bar{x})^2}{n-1}\) cumple
\[\dfrac{(n-1)\hat{S}^2}{\sigma^2}\sim \chi^2_{n-1}.\]
Tomando los puntos críticos que dejan un área \(\alpha/2\) en cada cola:
\[P\!\left(\chi^2_{n-1,\,1-\alpha/2}\le \dfrac{(n-1)\hat{S}^2}{\sigma^2}\le \chi^2_{n-1,\,\alpha/2}\right)=1-\alpha.\]
Despejando \(\sigma^2\) se obtiene el <b>intervalo de confianza</b> al \((1-\alpha)\cdot100\%\):
\[\left(\;\dfrac{(n-1)\hat{S}^2}{\chi^2_{n-1,\,\alpha/2}}\;,\;\dfrac{(n-1)\hat{S}^2}{\chi^2_{n-1,\,1-\alpha/2}}\;\right).\]
El valor crítico mayor \(\chi^2_{n-1,\,\alpha/2}\) (cola superior) queda en el denominador del extremo <i>inferior</i>, y el menor \(\chi^2_{n-1,\,1-\alpha/2}\) (cola inferior) en el del extremo <i>superior</i>.`,
  explicacion: String.raw`Se usa la \(\chi^2\) con \(n-1\) g.l.: \(IC=\left(\dfrac{(n-1)\hat{S}^2}{\chi^2_{\alpha/2}},\dfrac{(n-1)\hat{S}^2}{\chi^2_{1-\alpha/2}}\right)\).`
},
{
  id: "U2-MC1a", unidad: 2, tema: "Estimación (conceptos)", tipo: "multi",
  enunciado: String.raw`Señalar el/los enunciado/s INCORRECTO/s sobre estimadores de parámetros poblacionales.`,
  opciones: [
    String.raw`El estimador es un parámetro (una variable aleatoria con distribución muestral), mientras que su valor, para una muestra concreta, será la estimación puntual.`,
    String.raw`Se llama estimación al conjunto de técnicas que permiten dar un valor aproximado del parámetro de una población a partir de una muestra.`,
    String.raw`La estimación puntual consiste en obtener puntos, calculados mediante una fórmula determinada a partir de las observaciones muestrales, usados como estimación del valor del parámetro.`,
    String.raw`Dos características sobresalientes de un buen estimador son que sea insesgado y eficiente.`,
    String.raw`El objetivo que se pretende con los intervalos de confianza es lograr un espacio métrico de escasa amplitud y con una alta probabilidad de que el parámetro se encuentre en su interior.`,
    String.raw`El valor resultante de \((1-\alpha)\) se denomina coeficiente de confianza y representa una probabilidad relacionada con la estimación por intervalos, de un parámetro real.`
  ],
  correctas: [0],
  explicacion: String.raw`Incorrecto: el estimador NO es un parámetro, es un ESTADÍSTICO (variable aleatoria). El parámetro es el valor poblacional (fijo y desconocido). Las demás afirmaciones son correctas.`
},
{
  id: "U2-MC1b", unidad: 2, tema: "Estimación (conceptos)", tipo: "multi",
  enunciado: String.raw`Señalar el/los enunciado/s CORRECTO/s sobre estimadores de parámetros poblacionales.`,
  opciones: [
    String.raw`Se llama estimación al conjunto de técnicas que permiten dar un valor aproximado del parámetro de una población a partir de los datos proporcionados por una muestra.`,
    String.raw`La estimación puntual consiste en obtener puntos, calculados mediante una fórmula determinada a partir de las observaciones muestrales, usados como estimación del valor del parámetro.`,
    String.raw`Dos características sobresalientes de un buen estimador son que sea insesgado y eficiente.`,
    String.raw`El objetivo que se pretende con los intervalos de confianza es lograr un espacio métrico de escasa amplitud y con una alta probabilidad de que el parámetro se encuentre en su interior.`,
    String.raw`El valor resultante de \((1-\alpha)\) se denomina coeficiente de confianza y representa una probabilidad relacionada con la estimación por intervalos, de un parámetro real.`,
    String.raw`El estimador es un parámetro (una variable aleatoria con distribución muestral), mientras que su valor, para una muestra concreta, será la estimación puntual.`
  ],
  correctas: [0,1,2,3,4],
  explicacion: String.raw`Correctas las cinco primeras. Incorrecta la última: el estimador NO es un parámetro, es un ESTADÍSTICO (variable aleatoria).`
},
{
  id: "U2-MC2", unidad: 2, tema: "Propiedades de estimadores", tipo: "multiple",
  enunciado: String.raw`Indicar el enunciado VERDADERO relacionado con estimadores de parámetros poblacionales.`,
  opciones: [
    String.raw`Un estimador es eficiente cuando genera una distribución muestral con el mínimo error estándar.`,
    String.raw`Si tenemos dos estimadores insesgados de un parámetro, es más eficiente el de mayor varianza.`,
    String.raw`La estimación de la media de una muestra de tamaño \(n\) es siempre igual a la media poblacional de tamaño \(N\).`,
    String.raw`Un estimador insesgado nunca puede ser eficiente.`
  ],
  correctas: [0],
  explicacion: String.raw`Eficiencia = mínimo error estándar (mínima varianza). Entre dos insesgados, el más eficiente es el de MENOR varianza (no mayor).`
},
{
  id: "U2-MC3", unidad: 2, tema: "Propiedades de estimadores", tipo: "vf",
  enunciado: String.raw`Indicar V (verdadero) o F (falso) en los siguientes enunciados sobre estimadores.`,
  opciones: [
    String.raw`La estimación de la media de una característica en una muestra de tamaño \(n\) podría ser la media de esa misma característica para una población de tamaño \(N\).`,
    String.raw`Un estimador es eficiente cuando genera una distribución muestral con el mínimo error estándar.`,
    String.raw`Si tenemos dos estimadores insesgados de un parámetro, es menos eficiente el de mayor varianza.`,
    String.raw`Estimadores insesgados para la media, varianza y proporción poblacional son, respectivamente, la media, la varianza y la proporción muestral.`
  ],
  correctas: [1,2],
  explicacion: String.raw`F la 1ª (la media muestral no coincide necesariamente con la poblacional). V la 2ª (eficiente = mínimo error estándar) y la 3ª (a mayor varianza, menos eficiente). F la 4ª: la varianza muestral es sesgada; el estimador insesgado de \(\sigma^2\) es la CUASI-varianza \(\hat{S}^2=\dfrac{\sum (x-\bar{x})^2}{n-1}\).`
},
{
  id: "U2-MC4", unidad: 2, tema: "Tamaño de muestra (proporción)", tipo: "multi",
  enunciado: String.raw`Se desea estimar un porcentaje con un error máximo del 5% y un nivel de confianza del 95%. Indicar la/s opción/es CORRECTA/s del procedimiento.`,
  opciones: [
    String.raw`El tamaño de muestra se calcula con \(n=\left(\dfrac{z_{\alpha/2}}{E}\right)^{2}\,p_0(1-p_0)\).`,
    String.raw`Se utilizó \(z_{\alpha/2}=1{,}96\) y, al no proporcionarse \(p_0\), se adoptó el valor \(0{,}50\).`,
    String.raw`El contexto conceptual es la determinación del tamaño de muestra para estimar proporciones.`,
    String.raw`Se utilizó \(z_{\alpha/2}=1{,}65\) para el 95% de confianza.`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Para proporciones \(n=(z/E)^2\,p_0 q_0\); con 95% \(z=1{,}96\) (no 1,65); ante \(p_0\) desconocido se usa \(0{,}5\) (caso más conservador). El contexto es determinar el tamaño muestral para estimar proporciones.`
},
{
  id: "U2-MC5", unidad: 2, tema: "Error máximo (proporción)", tipo: "multiple",
  enunciado: String.raw`Para determinar el error máximo admisible, a cierto nivel de confianza, en la estimación de un porcentaje (que se sabe es \(3/4\)), a partir de una muestra de tamaño \(n\), se utilizó: \(E=z_{\alpha/2}\sqrt{\dfrac{p_0\,q_0}{n}}\). ¿Es correcta o incorrecta la fórmula?`,
  opciones: [
    String.raw`Correcta.`,
    String.raw`Incorrecta: debería ser \(E=z_{\alpha/2}\dfrac{p_0\,q_0}{n}\).`,
    String.raw`Incorrecta: debería ser \(E=z_{\alpha/2}\sqrt{p_0\,q_0}\;n\).`,
    String.raw`Incorrecta: debería ser \(E=\dfrac{z_{\alpha/2}}{\sqrt{p_0\,q_0\,n}}\).`
  ],
  correctas: [0],
  explicacion: String.raw`Es CORRECTA. El error de estimación de una proporción es \(E=z_{\alpha/2}\sqrt{\dfrac{p_0 q_0}{n}}\).`
},
{
  id: "U2-MC6", unidad: 2, tema: "Tamaño de muestra (proporción)", tipo: "multi",
  enunciado: String.raw`Para estimar un porcentaje con error aleatorio máximo del 5%, indicar la/s opción/es INCORRECTA/s de ser seleccionada/s.`,
  opciones: [
    String.raw`Se utilizó \(z_{\alpha/2}=1{,}65\) (para 95% de confianza).`,
    String.raw`Se calculó el tamaño con \(n=\left(\dfrac{z_{\alpha/2}}{E}\right)^{2}(1-p_0)\,q_0\) (es decir \(q_0\cdot q_0\)).`,
    String.raw`Se adoptó \(p_0=0{,}50\) al no disponer de información previa.`,
    String.raw`El objeto del trabajo fue determinar el tamaño muestral para estimar una proporción.`
  ],
  correctas: [0,1],
  explicacion: String.raw`Incorrectas: para 95% \(z=1{,}96\) (no 1,65); y la fórmula debe llevar \(p_0 q_0=p_0(1-p_0)\), no \((1-p_0)q_0=q_0^2\). Las otras dos son correctas.`
},
{
  id: "U2-MC7", unidad: 2, tema: "IC diferencia de medias", tipo: "multiple",
  enunciado: String.raw`Dos cementos A y B: \(n_1=15\) (media 92, cuasi-varianza 6) y \(n_2=14\) (media 89, cuasi-varianza 5); poblaciones normales con varianzas distintas. Elegir la afirmación razonablemente correcta.`,
  opciones: [
    String.raw`La fórmula \(\sqrt{\dfrac{S_1^2}{n_1}+\dfrac{S_2^2}{n_2}}\) fue parte de la expresión para obtener un intervalo de confianza del 99% para la diferencia entre los pesos promedios reales de A y B.`,
    String.raw`No hay información suficiente para estimar un IC para la diferencia de medias de dos normales con varianzas desconocidas y distintas.`,
    String.raw`Se concluye que existe diferencia entre las medias, aun cuando el intervalo encontrado incluyera el valor cero.`,
    String.raw`Con varianzas distintas no puede construirse ningún intervalo de confianza.`
  ],
  correctas: [0],
  explicacion: String.raw`El error estándar de la diferencia de medias (varianzas distintas) usa \(\sqrt{\dfrac{S_1^2}{n_1}+\dfrac{S_2^2}{n_2}}\). Si el IC incluye el 0 NO puede afirmarse que haya diferencia (contradice la opción c).`
},
{
  id: "U2-MC8", unidad: 2, tema: "Prueba de igualdad de varianzas (F)", tipo: "multi",
  enunciado: String.raw`Se realizó una prueba de hipótesis (dos colas) y se comprobó que las varianzas de los pesos de calcio en ambos cementos eran iguales. Indicar la/s opción/es CORRECTA/s del procedimiento.`,
  opciones: [
    String.raw`Se establecieron las hipótesis: \(H_0:\sigma_1^2=\sigma_2^2\)  y  \(H_1:\sigma_1^2\ne\sigma_2^2\).`,
    String.raw`Se utilizó el estadístico de prueba \(F=\dfrac{\hat{S}_1^2}{\hat{S}_2^2}\).`,
    String.raw`Para el valor crítico (dos colas) se consideran \(F_{\alpha/2,\,n_1-1,\,n_2-1}\) y \(F_{1-\alpha/2,\,n_1-1,\,n_2-1}\).`,
    String.raw`No es posible realizar la prueba porque faltan datos.`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`La prueba de igualdad de varianzas usa \(F=\hat{S}_1^2/\hat{S}_2^2\sim F\) de Fisher con \((n_1-1,n_2-1)\) g.l.; las hipótesis son \(H_0:\sigma_1^2=\sigma_2^2\) vs \(H_1:\sigma_1^2\ne\sigma_2^2\); en dos colas se usan los críticos \(F_{\alpha/2}\) y \(F_{1-\alpha/2}\).`
},
{
  id: "U2-MC9", unidad: 2, tema: "Calidad de estimadores", tipo: "multiple",
  enunciado: String.raw`Indicar el enunciado VERDADERO sobre estimadores parametricos.`,
  opciones: [
    String.raw`La estimacion de la media de una muestra de tamano \(n\) podria ser la media de esa caracteristica para una poblacion de tamano \(N\).`,
    String.raw`Un estimador es eficiente si genera una distribucion POBLACIONAL con el minimo error estandar.`,
    String.raw`La calidad de un estimador de \(\theta\) no solo esta dada por que su media sea el parametro, sino por una alta probabilidad de que los valores observados de \(\hat{\theta}\) sean proximos a \(\theta\).`,
    String.raw`Estimadores insesgados de media, varianza y proporcion serian la media, varianza y proporcion muestral.`,
    String.raw`Si hay dos estimadores insesgados, es mas eficiente el de mayor varianza.`
  ],
  correctas: [2],
  explicacion: String.raw`Correcta: la calidad de un estimador depende de que sea insesgado Y de que sus valores observados esten proximos al parametro (baja varianza). Errores: eficiencia se refiere a la distribucion MUESTRAL (no poblacional); la varianza muestral es sesgada (el insesgado es la cuasi-varianza); y el mas eficiente es el de MENOR varianza.`
},
{
  id: "U2-MC10", unidad: 2, tema: "Estimacion (incorrecto)", tipo: "multiple",
  enunciado: String.raw`En estadistica inferencial, senalar el enunciado INCORRECTO.`,
  opciones: [
    String.raw`La estimacion es el conjunto de tecnicas que dan un valor aproximado al parametro poblacional a partir de datos muestrales.`,
    String.raw`La estimacion puntual consiste en obtener distintos puntos que se usan para estimar el verdadero valor del parametro.`,
    String.raw`El objetivo de los intervalos de confianza es lograr un espacio de escasa amplitud con alta probabilidad de contener al parametro.`,
    String.raw`El valor \((1-\alpha)\cdot100\%\) se denomina nivel de confianza.`,
    String.raw`El estimador es un estadistico, mientras que la estimacion es su valor para una muestra especifica.`
  ],
  correctas: [1],
  explicacion: String.raw`Incorrecta: la estimacion puntual es UN numero (un unico valor), no "distintos puntos". Las demas son correctas.`
},

/* =============== UNIDAD 3 - PRUEBAS DE HIPÓTESIS ======================== */

{
  id: "U3-D1", unidad: 3, tema: "Valor p", tipo: "desarrollar",
  enunciado: String.raw`a) ¿A qué se denomina valor p?  b) ¿Cuál es la relación entre valor p y nivel de significación?`,
  respuesta: String.raw`<b>a)</b> El <b>valor \(p\)</b> (o grado de significación) es la probabilidad atribuida al <b>VALOR OBSERVADO</b> del estadístico de contraste: la probabilidad de que dicho estadístico asuma el valor observado o uno <b>más extremo</b> (en el sentido de \(H_1\)).

<b>b)</b> Tanto \(p\) como el <b>nivel de significación \(\alpha\)</b> son <b>áreas</b> bajo la curva de la distribución muestral del estadístico: \(p\) corresponde al valor <i>observado</i> y \(\alpha\) al valor <i>crítico</i> (fijado de antemano). La regla de decisión es:
• Si \(p\lt\alpha\) \(\Rightarrow\) se <b>rechaza</b> \(H_0\) (resultado estadísticamente significativo).
• Si \(p\gt\alpha\) \(\Rightarrow\) <b>no</b> se rechaza \(H_0\).
Cuanto menor es \(p\), mayor es la evidencia en contra de \(H_0\).`,
  explicacion: String.raw`Valor \(p\) = probabilidad del valor observado o más extremo. Decisión: \(p\lt\alpha\) rechaza \(H_0\); \(p\gt\alpha\) no rechaza \(H_0\).`
},
{
  id: "U3-D2", unidad: 3, tema: "Test diferencia de proporciones", tipo: "desarrollar",
  enunciado: String.raw`Desarrollar el tema: Test de hipótesis para la diferencia de proporciones.`,
  respuesta: String.raw`Se contrasta \(H_0:p_1=p_2\) vs \(H_1:p_1\ne p_2\) (también puede ser de una cola).

Se toman dos muestras aleatorias <b>independientes</b> de tamaños \(n_1\) y \(n_2\); sean \(x_1\) y \(x_2\) las observaciones de la clase de interés en cada una.
• <b>Proporciones muestrales:</b> \(\hat{p}_1=\dfrac{x_1}{n_1}\,,\;\hat{p}_2=\dfrac{x_2}{n_2}\).
• <b>Estimador del parámetro común</b> (bajo \(H_0\), \(p_1=p_2=p\)): \(\hat{p}=\dfrac{x_1+x_2}{n_1+n_2}\) (combina ambas muestras porque, si \(H_0\) es cierta, estiman la misma \(p\)).
• <b>Estadístico de prueba:</b>
\[z=\dfrac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}\;\to\; f_N(z;0,1)\ \text{(normal estándar),}\]
válido para muestras grandes (\(n_1\hat{p}\), \(n_1(1-\hat{p})\), \(n_2\hat{p}\), \(n_2(1-\hat{p})\ge5\)).
• <b>Regla de rechazo:</b>
— Dos colas: se rechaza \(H_0\) si \(z\gt z_{\alpha/2}\) ó \(z\lt -z_{\alpha/2}\).
— Una cola: si \(z\gt z_{\alpha}\) (para \(p_1\gt p_2\)) ó \(z\lt -z_{\alpha}\) (para \(p_1\lt p_2\)).`,
  explicacion: String.raw`Estadístico \(z=\dfrac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})(1/n_1+1/n_2)}}\), con \(\hat{p}=\dfrac{x_1+x_2}{n_1+n_2}\). Se rechaza si \(|z|\gt z_{\alpha/2}\).`
},
{
  id: "U3-D3", unidad: 3, tema: "Test diferencia de medias", tipo: "desarrollar",
  enunciado: String.raw`Plantear el tema: Test de hipótesis para la diferencia de medias, cuando las varianzas de las muestras son conocidas y la suma de los tamaños muestrales es mayor o igual a 30.`,
  respuesta: String.raw`<b>Hipótesis.</b> Nula: \(H_0:\mu_1=\mu_2\). Alternativa: \(H_1:\mu_1\ne\mu_2\) (dos colas), o \(\mu_1\lt\mu_2\), o \(\mu_1\gt\mu_2\) (una cola).

<b>Condiciones.</b> Varianzas poblacionales \(\sigma_1^2\) y \(\sigma_2^2\) <b>conocidas</b>, muestras independientes y \(n_1+n_2\ge30\) (por el TCL, \(\bar{x}_1-\bar{x}_2\) es aproximadamente normal).

<b>Estadístico de prueba:</b>
\[z=\dfrac{(\bar{x}_1-\bar{x}_2)-(\mu_1-\mu_2)}{\sqrt{\dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2}}}\;\xrightarrow{H_0}\;\dfrac{\bar{x}_1-\bar{x}_2}{\sqrt{\dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2}}}\;\to\; f_N(z;0,1),\]
ya que bajo \(H_0\) es \(\mu_1-\mu_2=0\).

<b>Decisión.</b> Se compara \(z\) con el valor crítico \(z_{\alpha}\) (una cola) ó \(z_{\alpha/2}\) (dos colas): si cae en la región de rechazo se rechaza \(H_0\) y se concluye que las medias difieren; en caso contrario, no se rechaza.`,
  explicacion: String.raw`Con varianzas conocidas y \(n_1+n_2\ge30\): \(z=\dfrac{\bar{x}_1-\bar{x}_2}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}\sim N(0,1)\).`
},
{
  id: "U3-D4", unidad: 3, tema: "Test igualdad de varianzas (F)", tipo: "desarrollar",
  enunciado: String.raw`Se desea contrastar la hipótesis nula de igualdad de varianzas (\(\alpha=5\%\)). Indicar: a) el estadístico de prueba y su distribución; b) el planteo de las hipótesis nula y alternativa; c) las opciones de desigualdad del estadístico que podrían verificarse al rechazar \(H_0\).`,
  respuesta: String.raw`<b>a) Estadístico y distribución.</b> \(F=\dfrac{\hat{S}_1^2}{\hat{S}_2^2}\to f_F(x;\,n_1-1,\,n_2-1)\): distribución F de Fisher con \(n_1-1\) (numerador) y \(n_2-1\) (denominador) grados de libertad. Requiere que ambas poblaciones sean normales.

<b>b) Hipótesis (dos colas):</b> \(H_0:\sigma_1^2=\sigma_2^2\)  vs  \(H_1:\sigma_1^2\ne\sigma_2^2\).

<b>c) Región de rechazo.</b> Al rechazar \(H_0\) (dos colas), el estadístico verifica alguna de estas desigualdades:
• \(F\gt F_{\alpha/2,\,n_1-1,\,n_2-1}\) (cola superior), ó
• \(F\lt F_{1-\alpha/2,\,n_1-1,\,n_2-1}\) (cola inferior).
Para una cola (p.ej. \(H_1:\sigma_1^2\gt\sigma_2^2\)) se rechaza si \(F\gt F_{\alpha,\,n_1-1,\,n_2-1}\).
<i>Nota:</i> el orden de los grados de libertad debe coincidir con el del cociente (g.l. del numerador primero).`,
  explicacion: String.raw`\(F=\hat{S}_1^2/\hat{S}_2^2\sim F(n_1-1,n_2-1)\). \(H_0:\sigma_1^2=\sigma_2^2\). Se rechaza si \(F\gt F_{\alpha/2}\) o \(F\lt F_{1-\alpha/2}\).`
},
{
  id: "U3-MC1", unidad: 3, tema: "Errores tipo I y II", tipo: "multiple",
  enunciado: String.raw`Indicar cuál de las siguientes situaciones/afirmaciones NO es correcta (relativas a pruebas de hipótesis).`,
  opciones: [
    String.raw`Primero se determina si el valor observado del estadístico de contraste cae en la zona de rechazo o de no rechazo, y luego se especifica y calcula el estadístico de prueba.`,
    String.raw`Si \(H_0\) es rechazada siendo verdadera, se comete un error de tipo I.`,
    String.raw`Si \(H_0\) no es rechazada siendo verdadera la hipótesis alternativa, ocurre un error de tipo II.`,
    String.raw`Si \(H_0\) es rechazada siendo cierta la alternativa, la decisión es correcta.`,
    String.raw`La formulación de la decisión estadística se realiza a posteriori de determinar si el estadístico de contraste se halla en la zona de rechazo o de no rechazo, para a partir de ello expresar la decisión en términos del problema.`
  ],
  correctas: [0],
  explicacion: String.raw`NO es correcta: el orden está invertido. PRIMERO se especifica y calcula el estadístico de prueba, y RECIÉN DESPUÉS se determina si el valor observado cae en la zona de rechazo o de no rechazo.`
},
{
  id: "U3-MC2", unidad: 3, tema: "Valor p", tipo: "multiple",
  enunciado: String.raw`Sobre el estadístico "valor p", indicar cuál de los enunciados NO es verdadero.`,
  opciones: [
    String.raw`Es la probabilidad atribuida al valor crítico del estadístico de contraste.`,
    String.raw`El valor \(p\) también se denomina grado de significación.`,
    String.raw`Si \(\alpha\lt p\) no se rechaza \(H_0\), y si \(\alpha\gt p\) se rechaza \(H_0\).`,
    String.raw`Indica, por comparación con \(\alpha\), la probabilidad de rechazar o no la hipótesis nula.`,
    String.raw`Cuando el valor observado para el estadístico de contraste se encuentra en la región de no rechazo de la \(H_0\) (prueba de cola derecha), el área de \(p\) es mayor que el área de \(\alpha\).`
  ],
  correctas: [0],
  explicacion: String.raw`NO es verdadero: el valor \(p\) se atribuye al valor OBSERVADO del estadístico, no al valor crítico. Las demás son correctas.`
},
{
  id: "U3-MC3", unidad: 3, tema: "Valor p", tipo: "multi",
  enunciado: String.raw`Sobre el estadístico "valor p", indicar el/los enunciado/s FALSO/s.`,
  opciones: [
    String.raw`Es la probabilidad atribuida al valor crítico para el estadístico de prueba.`,
    String.raw`El valor \(p\) también se denomina coeficiente de significación.`,
    String.raw`Es la probabilidad atribuida al valor observado del estadístico de prueba.`,
    String.raw`Si \(\alpha\lt p\) no se rechaza \(H_0\) y si \(\alpha\gt p\) se rechaza \(H_0\).`,
    String.raw`Si \(V_0\) se encuentra a la izquierda de \(V_c\), no se debe rechazar \(H_0\) (contraste de cola inferior).`
  ],
  correctas: [0,1],
  explicacion: String.raw`Falsas: \(p\) se atribuye al valor OBSERVADO (no al crítico); y se denomina GRADO (o nivel) de significación, no "coeficiente". Las otras tres son verdaderas.`
},
{
  id: "U3-MC4", unidad: 3, tema: "Diferencia de proporciones", tipo: "multi",
  enunciado: String.raw`En el contexto de pruebas de hipótesis para diferencia de proporciones, indicar la/s opción/es INCORRECTA/s.`,
  opciones: [
    String.raw`\(z=\dfrac{\hat{p}_1-\hat{p}_2}{\sqrt{\dfrac{1}{n_1}+\dfrac{1}{n_2}}}\to f_N(z;0,1)\)  (sin el factor \(\hat{p}(1-\hat{p})\))`,
    String.raw`\(\hat{p}=\dfrac{x_1+x_2}{n_1\cdot n_2}\)`,
    String.raw`\(z=\dfrac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}\to f_N(z;0,1)\)`,
    String.raw`\(\hat{p}_1=\dfrac{x_1}{n_1}\)  y  \(\hat{p}_2=\dfrac{x_2}{n_2}\)`
  ],
  correctas: [0,1],
  explicacion: String.raw`Incorrectas: falta el factor \(\hat{p}(1-\hat{p})\) en el denominador de la 1ª; y el estimador común es \(\hat{p}=\dfrac{x_1+x_2}{n_1+n_2}\), no \(n_1\cdot n_2\). Las otras dos son correctas.`
},
{
  id: "U3-MC5", unidad: 3, tema: "Diferencia de proporciones", tipo: "multi",
  enunciado: String.raw`En el contexto de pruebas de hipótesis para diferencia de proporciones, indicar la/s opción/es CORRECTA/s.`,
  opciones: [
    String.raw`Hipótesis a probar: \(H_0:p_1=p_2\)  y  \(H_1:p_1\ne p_2\).`,
    String.raw`Estadístico de prueba: \(z=\dfrac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})\left(\dfrac{1}{n_1}+\dfrac{1}{n_2}\right)}}\to f_N(z;0,1)\).`,
    String.raw`Estimador común: \(\hat{p}=\dfrac{x_1+x_2}{n_1+n_2}\).`,
    String.raw`Proporciones muestrales: \(\hat{p}_1=\dfrac{x_1}{n_1}\), \(\hat{p}_2=\dfrac{x_2}{n_2}\); y rechazo de \(H_0\) si \(z\gt z_{\alpha/2}\) o \(z\lt -z_{\alpha/2}\).`
  ],
  correctas: [0,1,2,3],
  explicacion: String.raw`Todas son correctas: forman el procedimiento estándar del test para diferencia de proporciones.`
},
{
  id: "U3-MC6", unidad: 3, tema: "Diferencia de medias (formula)", tipo: "multiple",
  enunciado: String.raw`Indicar la formula y su respectiva distribucion que sean ADECUADAS para obtener el valor del estadistico de prueba, para la diferencia entre medias de dos poblaciones, en caso de que las varianzas sean desconocidas pero iguales y \(n_1+n_2\lt30\).`,
  opciones: [
    String.raw`\(z=\dfrac{\bar{x}_1-\bar{x}_2}{\sqrt{\dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2}}}\to f_N(z;0,1)\)`,
    String.raw`\(t=\dfrac{\bar{x}_1-\bar{x}_2}{S_p\sqrt{\dfrac{1}{n_1}+\dfrac{1}{n_2}}}\to f_S(t;\,n_1+n_2-2)\quad\text{con }S_p^2=\dfrac{(n_1-1)\hat{S}_1^2+(n_2-1)\hat{S}_2^2}{n_1+n_2-2}\)`,
    String.raw`\(t=\dfrac{\bar{x}_1-\bar{x}_2}{\sqrt{\dfrac{\hat{S}_1^2}{n_1}+\dfrac{\hat{S}_2^2}{n_2}}}\to f_S(t;\,k)\)`,
    String.raw`\(z=\dfrac{\bar{x}_1-\bar{x}_2}{\sqrt{\dfrac{\hat{S}_1^2}{n_1}+\dfrac{\hat{S}_2^2}{n_2}}}\to f_N(z;0,1)\)`
  ],
  correctas: [1],
  explicacion: String.raw`Con varianzas desconocidas e iguales y \(n_1+n_2\lt30\) se usa la \(t\) con cuasi-varianza ponderada \(S_p^2\) y \(n_1+n_2-2\) grados de libertad. La a) usa \(\sigma\) conocidas; la c) es para varianzas DISTINTAS con g.l. aproximados; la d) usa \(z\) (normal) que requiere \(n\) grande o \(\sigma\) conocidas.`
},
{
  id: "U3-MC7", unidad: 3, tema: "IC diferencia de medias", tipo: "multi",
  enunciado: String.raw`Construccion de intervalo de confianza para la diferencia de medias de poblaciones normales. Elegir las opciones CORRECTAS.`,
  opciones: [
    String.raw`Varianzas conocidas, muestras independientes y \(n_1+n_2\ge30\): \((\bar{x}_1-\bar{x}_2)\pm z_{\alpha/2}\sqrt{\dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2}}\).`,
    String.raw`Varianzas distintas (desc.), muestras independientes y \(n_1+n_2\lt30\): \((\bar{x}_1-\bar{x}_2)\pm t_{k,\,\alpha/2}\sqrt{\dfrac{\hat{S}_1^2}{n_1}+\dfrac{\hat{S}_2^2}{n_2}}\).`,
    String.raw`Varianzas iguales (desc.), muestras independientes y \(n_1+n_2\lt30\): \((\bar{x}_1-\bar{x}_2)\pm t_{n_1+n_2-2,\,\alpha/2}\;S_p\sqrt{\dfrac{1}{n_1}+\dfrac{1}{n_2}}\).`,
    String.raw`Varianzas conocidas, muestras DEPENDIENTES y \(n_1+n_2\ge30\): \((\bar{x}_1-\bar{x}_2)\pm z_{\alpha/2}\sqrt{\dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2}}\).`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Las tres primeras son correctas (cada una para su escenario). La cuarta es incorrecta: la formula con \(z\) y varianzas conocidas es para muestras INDEPENDIENTES, no dependientes. Para muestras dependientes (apareadas) se usa la diferencia \(d_i\) con una sola muestra.`
},
{
  id: "U3-MC8", unidad: 3, tema: "Igualdad de varianzas (F)", tipo: "multi",
  enunciado: String.raw`Se desea contrastar la \(H_0\) de igualdad de varianzas (\(\alpha=5\%\)). Senalar la/s decision/es APROPIADA/S del procedimiento.`,
  opciones: [
    String.raw`Hipotesis: \(H_0:\sigma_1^2=\sigma_2^2\) y \(H_1:\sigma_1^2\ne\sigma_2^2\).`,
    String.raw`Estadistico de prueba: \(F=\dfrac{\hat{S}_2^2}{\hat{S}_1^2}\to f_F(x;\,n_1-1,\,n_2-1)\).`,
    String.raw`Rechazo de \(H_0\) (dos colas): \(F\gt F_{\alpha/2,\,n_1-1,\,n_2-1}\) o \(F\lt F_{1-\alpha/2,\,n_1-1,\,n_2-1}\).`
  ],
  correctas: [0,2],
  explicacion: String.raw`Apropiadas: las hipotesis y la regla de rechazo a dos colas. Inapropiada la 2a: si el numerador es \(\hat{S}_2^2\) y el denominador \(\hat{S}_1^2\), los grados de libertad deben ser \((n_2-1,\,n_1-1)\), no \((n_1-1,\,n_2-1)\). Siempre: g.l. del numerador primero, g.l. del denominador segundo.`
},

/* ====== UNIDAD 4 (primera mitad) - PRUEBAS NO PARAMÉTRICAS ============== */

{
  id: "U4-MC1", unidad: 4, tema: "Pruebas no paramétricas", tipo: "multiple",
  enunciado: String.raw`Indicar cuál de las siguientes opciones debe presentarse en una muestra para que sea necesaria la aplicación de una prueba de hipótesis NO paramétrica.`,
  opciones: [
    String.raw`Posee un número pequeño de observaciones.`,
    String.raw`Los datos provienen de una distribución específica (conocida).`,
    String.raw`Las varianzas difieren de manera no significativa.`,
    String.raw`Las variables están medidas en una escala de razón.`
  ],
  correctas: [0],
  explicacion: String.raw`Las pruebas no paramétricas se usan cuando la muestra es pequeña, no se conoce la distribución poblacional o las variables son ordinales/nominales.`
},
{
  id: "U4-MC2", unidad: 4, tema: "Pruebas no paramétricas (PHNP)", tipo: "multi",
  enunciado: String.raw`Sobre las pruebas de hipótesis no paramétricas (PHNP), señalar la/s afirmación/es CORRECTA/s.`,
  opciones: [
    String.raw`Mediante la prueba T de Wilcoxon es posible contrastar la \(H_0\) de no existencia de diferencias significativas entre dos muestras con datos relacionados.`,
    String.raw`La prueba U de Mann-Whitney es una alternativa para dos muestras con datos dependientes, sin requisito previo.`,
    String.raw`La prueba de los signos es más potente que la de Wilcoxon porque tiene en cuenta la magnitud de las diferencias.`,
    String.raw`La prueba Chi-cuadrado permite comprobar el ajuste de la distribución de una variable continua a una distribución teórica.`,
    String.raw`La \(H_0\) en la prueba de Kolmogorov-Smirnov señala que la muestra procede de una población en la cual la variable se ajusta a una distribución con nombre propio.`,
    String.raw`Una opción para contrastar si dos muestras con datos independientes proceden de poblaciones con la misma distribución lo constituye el test de rachas de Wald-Wolfowitz.`
  ],
  correctas: [0,4,5],
  explicacion: String.raw`Correctas: a) Wilcoxon (T) contrasta diferencias en datos RELACIONADOS (apareados); e) la \(H_0\) de Kolmogorov-Smirnov es que la muestra procede de una distribución determinada; f) el test de rachas de Wald-Wolfowitz contrasta si dos muestras INDEPENDIENTES provienen de la misma distribución. Errores: b) Mann-Whitney es para muestras INDEPENDIENTES (no dependientes); c) la de los signos es MENOS potente que Wilcoxon (sólo usa el signo); d) el \(\chi^2\) de bondad de ajuste se aplica a variables discretas/categorizadas (no continuas).`
},
{
  id: "U4-MC3", unidad: 4, tema: "PHNP (Mann-Whitney)", tipo: "multiple",
  enunciado: String.raw`Sobre las pruebas de hipótesis no paramétricas (PHNP), señalar la afirmación INCORRECTA.`,
  opciones: [
    String.raw`La prueba U de Mann-Whitney es una alternativa para dos muestras con datos DEPENDIENTES, ya que no parte de ningún requisito previo.`,
    String.raw`Mediante la prueba T de Wilcoxon se contrasta la \(H_0\) de no diferencias entre dos muestras con datos relacionados.`,
    String.raw`La prueba Chi-cuadrado permite comprobar el ajuste de una variable a una distribución teórica.`,
    String.raw`La prueba de Kolmogorov-Smirnov (K-S) evalúa si la muestra procede de una población con una distribución determinada.`,
    String.raw`Una opción para contrastar si dos muestras con datos independientes proceden de poblaciones con la misma distribución lo constituye el test de rachas de Wald-Wolfowitz.`,
    String.raw`La prueba de los signos es menos potente que la de Wilcoxon ya que sólo tiene en cuenta el signo de las diferencias entre pares; por el contrario, la segunda tiene en cuenta la magnitud de esas diferencias a través de los rangos.`
  ],
  correctas: [0],
  explicacion: String.raw`INCORRECTA: la U de Mann-Whitney se aplica a dos muestras INDEPENDIENTES (no dependientes). Para datos dependientes/apareados se usa Wilcoxon.`
},
{
  id: "U4-MC4", unidad: 4, tema: "PHNP (Kruskal-Wallis / Friedman / Kendall)", tipo: "multi",
  enunciado: String.raw`Sobre los tests no paramétricos para varias muestras, indicar el/los enunciado/s CORRECTO/s.`,
  opciones: [
    String.raw`Cuanto más semejantes sean los grupos, más razonable es no rechazar la hipótesis nula de la prueba \(\chi^2\) de Friedman.`,
    String.raw`El test W de Kendall analiza la concordancia entre los resultados de los distintos casos en las distintas variables; es una prueba de relación más que de comparación.`,
    String.raw`La prueba H de Kruskal-Wallis es una extensión de la U de Mann-Whitney para tres o más grupos de observaciones DEPENDIENTES.`,
    String.raw`La \(H_0\) de Kruskal-Wallis afirma que existen diferencias significativas entre los grupos.`,
    String.raw`La prueba H de Kruskal-Wallis es una extensión de la U de Mann-Whitney para el supuesto de tener que analizar tres o más grupos de observaciones independientes.`,
    String.raw`La \(H_0\) en la prueba H de Kruskal-Wallis hace referencia a la no existencia de diferencias significativas entre los grupos participantes en el contraste de hipótesis.`,
    String.raw`El estadístico H de Kruskal-Wallis sigue aproximadamente una distribución \(\chi^2\) bajo la \(H_0\) de que los grupos que participan en el estudio siguen la misma distribución.`,
    String.raw`La prueba \(\chi^2\) de Friedman corresponde a una generalización de las pruebas de Wilcoxon y de los Signos, aplicable en situaciones en las que se debe analizar más de dos variables relacionadas.`
  ],
  correctas: [0,1,4,5,6,7],
  explicacion: String.raw`Correctas: Friedman con grupos semejantes no rechaza \(H_0\); Kendall es prueba de relación/concordancia; K-W extiende M-W a 3+ grupos INDEPENDIENTES; la \(H_0\) de K-W es no diferencias; el estadístico H sigue \(\chi^2\); Friedman generaliza Wilcoxon y Signos. Incorrectas: K-W para grupos DEPENDIENTES (son independientes); y la \(H_0\) de K-W NO afirma que existan diferencias.`
},
{
  id: "U4-MC5", unidad: 4, tema: "PHNP (Chi-cuadrado de ajuste)", tipo: "multiple",
  enunciado: String.raw`Sobre las PHNP para distintos tipos de muestras, indicar el enunciado CORRECTO.`,
  opciones: [
    String.raw`La prueba Chi-cuadrado para una muestra permite comprobar el ajuste de la distribución de frecuencias de una variable discreta a una distribución teórica.`,
    String.raw`El estadístico de Friedman se calcula con \(\chi^2=\displaystyle\sum\dfrac{(Fo_i-Fe_i)^2}{Fe_i}\).`,
    String.raw`Cuanto más distintas sean las medias, más probable es que sea verdadera la \(H_0\) de no diferencia en el test de Friedman.`,
    String.raw`La prueba de Kruskal-Wallis se aplica a muestras dependientes.`
  ],
  correctas: [0],
  explicacion: String.raw`Correcta: el \(\chi^2\) de bondad de ajuste compara frecuencias observadas con esperadas, \(\chi^2=\sum\dfrac{(Fo-Fe)^2}{Fe}\), para variables discretas/categorizadas. (Esa fórmula es del \(\chi^2\), no del estadístico de Friedman.)`
},
{
  id: "U4-D1", unidad: 4, tema: "Chi-cuadrado de bondad de ajuste", tipo: "desarrollar",
  enunciado: String.raw`Escribir la expresión del estadístico Chi-cuadrado de bondad de ajuste e indicar el significado de sus elementos.`,
  respuesta: String.raw`Los <b>residuos</b> son las diferencias entre frecuencias observadas y esperadas. El estadístico de bondad de ajuste es:
\[\chi^2=\sum_{i=1}^{K}\dfrac{(Fo_i-Fe_i)^2}{Fe_i}\]
donde:
• \(Fo_i\): frecuencia <b>observada</b> en la categoría \(i\).
• \(Fe_i\): frecuencia <b>esperada</b> según la distribución teórica (\(Fe_i=n\cdot p_i\)).
• \(K\): número de categorías de la variable.

<b>Hipótesis.</b> \(H_0\): la variable se ajusta a la distribución teórica; \(H_1\): no se ajusta.
<b>Distribución y decisión.</b> Bajo \(H_0\), el estadístico sigue una \(\chi^2\) con \(K-1-m\) grados de libertad (\(m=\) número de parámetros estimados a partir de la muestra). Se rechaza \(H_0\) si \(\chi^2\gt\chi^2_{K-1-m,\,\alpha}\).
<b>Interpretación.</b> Cuanto mayor es \(\chi^2\), mayor es la discrepancia entre lo observado y lo esperado (peor ajuste). Conviene que las \(Fe_i\ge5\).`,
  explicacion: String.raw`\(\chi^2=\sum\dfrac{(Fo_i-Fe_i)^2}{Fe_i}\), con \(K\) categorías. Mide la discrepancia observado vs. esperado.`
},
{
  id: "U4-MC6", unidad: 4, tema: "PHNP varias muestras (incorrecto)", tipo: "multiple",
  enunciado: String.raw`Los enunciados que siguen corresponden a PHNP para varias muestras. Indicar el que considere INCORRECTO.`,
  opciones: [
    String.raw`La prueba H de Kruskal-Wallis es una extension de la U de Mann-Whitney para tres o mas grupos no relacionados.`,
    String.raw`La \(H_0\) de Kruskal-Wallis refiere a la no existencia de diferencias significativas entre los grupos.`,
    String.raw`El estadistico H de Kruskal-Wallis sigue \(\chi^2\) bajo \(H_0\) de que los grupos siguen la misma distribucion.`,
    String.raw`La prueba \(\chi^2\) de Friedman es una generalizacion de Wilcoxon y de los Signos, para mas de dos variables relacionadas.`,
    String.raw`Cuanto mas distintos sean los promedios, mas probable es que sea verdadera la \(H_0\) de no existencia de diferencia significativa en la prueba de Friedman.`,
    String.raw`Cuanto mas semejantes sean las medias, mas probable es no rechazar la \(H_0\) de la prueba \(\chi^2\) de Friedman.`,
    String.raw`El test W de Kendall analiza la concordancia entre los resultados de los distintos casos en las distintas variables; es una prueba de relacion mas que de comparacion.`
  ],
  correctas: [4],
  explicacion: String.raw`INCORRECTO: cuanto mas distintos los promedios, MENOS probable que la \(H_0\) de no diferencia sea verdadera (la logica esta invertida). Las demas son correctas.`
},

/* ========================= UNIDAD 5 - CORRELACIÓN Y REGRESIÓN ========== */

{
  id: "U5-MC1", unidad: 5, tema: "Supuestos de correlación lineal", tipo: "multi",
  enunciado: String.raw`¿Cuáles de los siguientes supuestos deben cumplirse en el análisis de correlación lineal?`,
  opciones: [
    String.raw`Observaciones aleatorias y cuantitativas.`,
    String.raw`Linealidad en la interrelación de las variables.`,
    String.raw`Independencia de las observaciones.`,
    String.raw`No linealidad en la interrelación de las variables.`,
    String.raw`Dependencia de las observaciones.`,
    String.raw`Homocedasticidad.`
  ],
  correctas: [0,1,2,5],
  explicacion: String.raw`Supuestos de correlación lineal: observaciones aleatorias y cuantitativas, linealidad, independencia y homocedasticidad. NO: no linealidad ni dependencia.`
},
{
  id: "U5-MC2", unidad: 5, tema: "Modelo de regresión lineal", tipo: "multi",
  enunciado: String.raw`En el contexto de un modelo de regresión lineal, indicar la/s afirmación/es que considere correcta/s.`,
  opciones: [
    String.raw`\(Y\): variable para explicar el fenómeno en estudio.`,
    String.raw`\(X_1,\dots,X_k\): variables para modelar el fenómeno bajo análisis.`,
    String.raw`\(\beta_1,\dots,\beta_k\): coeficientes de las variables explicadas.`,
    String.raw`\(\beta_0\): término independiente de las variables explicativas.`,
    String.raw`\(\varepsilon\): error aleatorio (\(M=0;\;\sigma^2=1\)).`
  ],
  correctas: [0,1],
  explicacion: String.raw`Correctas: \(Y\) es la variable dependiente (a explicar) y \(X_1,\dots,X_k\) son las independientes (explicativas). Errores: los \(\beta_k\) son coeficientes de las variables EXPLICATIVAS (no explicadas); \(\beta_0\) es la ordenada al origen (no "término independiente de las explicativas"); el error aleatorio tiene \(\sigma^2\) no necesariamente igual a 1.`
},
{
  id: "U5-MC3", unidad: 5, tema: "Hipótesis nula en regresión", tipo: "multi",
  enunciado: String.raw`Cuando se plantea un contraste de hipótesis mediante el análisis de regresión lineal, para determinar si el modelo en su conjunto tiene sentido para explicar los datos, ¿cuáles de las siguientes alternativas corresponden a la formulación de la hipótesis nula?`,
  opciones: [
    String.raw`El modelo se ajusta a los datos.`,
    String.raw`Los coeficientes del modelo son nulos.`,
    String.raw`No existe relación entre las variables independientes y la variable explicada.`,
    String.raw`Existen algunos coeficientes del modelo no nulos.`
  ],
  correctas: [1,2],
  explicacion: String.raw`La \(H_0\) en regresión plantea que el modelo NO es útil: todos los coeficientes son nulos (\(\beta_1=\beta_2=\dots=0\)) y no existe relación entre las variables. Las otras opciones corresponden a \(H_1\) o a un modelo útil.`
},
{
  id: "U5-MC4", unidad: 5, tema: "Coeficientes en regresión", tipo: "multiple",
  enunciado: String.raw`¿Cuál de los siguientes enunciados respecto de los coeficientes de un modelo de regresión lineal múltiple debería rechazarse para que la ecuación que resulte tenga un correcto ajuste a los datos observados?`,
  opciones: [
    String.raw`Los coeficientes del modelo son nulos.`,
    String.raw`Existen coeficientes del modelo que no son nulos.`,
    String.raw`Algunos coeficientes del modelo son distintos de cero.`,
    String.raw`El modelo posee algunos coeficientes nulos.`
  ],
  correctas: [0],
  explicacion: String.raw`Debe rechazarse que los coeficientes sean nulos (rechazar \(H_0:\beta_1=\dots=\beta_k=0\)). Si se rechaza, el modelo tiene al menos alguna variable significativa.`
},
{
  id: "U5-MC5", unidad: 5, tema: "Hipótesis conjunta (F + t)", tipo: "multiple",
  enunciado: String.raw`¿Cuál de las siguientes combinaciones de hipótesis nulas debería rechazarse para que el contraste de hipótesis de un modelo de regresión lineal (F de Fisher) y sus correspondientes coeficientes (t de Student) sea el mejor posible y el modelo tenga un correcto ajuste a los datos muestrales?`,
  opciones: [
    String.raw`El modelo no es útil para explicar las variables y sus coeficientes son estadísticamente nulos.`,
    String.raw`El modelo no se ajusta a los datos y existen en el modelo coeficientes nulos.`,
    String.raw`El modelo se ajusta a los datos empíricos y los coeficientes del modelo son nulos.`,
    String.raw`El modelo no se ajusta a los datos y existen coeficientes no nulos en el modelo.`
  ],
  correctas: [1],
  explicacion: String.raw`Para el mejor ajuste, debe rechazarse la \(H_0\) conjunta: que el modelo no se ajuste a los datos (F) Y que los coeficientes individuales sean nulos (t). Es decir, rechazar que el modelo no sirve y que existan coeficientes nulos.`
},
{
  id: "U5-MC6", unidad: 5, tema: "Coeficiente de determinación R^2", tipo: "multi",
  enunciado: String.raw`Seleccionar las afirmaciones INCORRECTAS para el coeficiente de determinación de un modelo de regresión.`,
  opciones: [
    String.raw`Cuantifica en qué medida la variable dependiente es explicada por el modelo.`,
    String.raw`Su valor coincide con la raíz cuadrada del coeficiente de correlación.`,
    String.raw`Brinda una idea acerca de la dirección de la relación, así como sobre la intensidad de la misma.`,
    String.raw`Indica el sentido del grado de ajuste entre el modelo y los datos de la muestra.`,
    String.raw`Su valor puede variar entre un negativo \((-1)\) y uno positivo \((+1)\).`
  ],
  correctas: [1,2,3,4],
  explicacion: String.raw`Incorrectas: \(R^2\) NO es la raíz del coeficiente de correlación (es el cuadrado de \(r\)); NO indica dirección/sentido (siempre es positivo); y su rango es \([0,\,1]\), no \([-1,\,+1]\). Sólo la primera es correcta: \(R^2\) cuantifica la proporción de variabilidad explicada.`
},
{
  id: "U5-MC7", unidad: 5, tema: "Coeficiente de determinación R^2", tipo: "multi",
  enunciado: String.raw`Seleccionar las afirmaciones CORRECTAS para el coeficiente de determinación de un modelo de regresión lineal.`,
  opciones: [
    String.raw`Su valor oscila entre 0,00 y 1,00.`,
    String.raw`Cuantifica en qué medida la variable dependiente es explicada por la/s variable/s independiente/s.`,
    String.raw`Evalúa el grado de asociación o relación que presentan las variables que se analizan.`,
    String.raw`Su valor coincide con el cuadrado del coeficiente de correlación (en regresión simple).`,
    String.raw`Indica el sentido del grado de ajuste entre el modelo y los datos.`
  ],
  correctas: [0,1,3],
  explicacion: String.raw`Correctas: \(R^2\in[0,1]\); cuantifica la proporción de variabilidad de \(Y\) explicada por el modelo; y en regresión simple \(R^2=r^2\). Incorrectas: \(R^2\) no evalúa "asociación" en general (eso es \(r\)); y NO indica sentido/dirección (siempre es positivo).`
},
{
  id: "U5-MC8", unidad: 5, tema: "Supuestos de regresión lineal", tipo: "multiple",
  enunciado: String.raw`¿Cuál de los siguientes supuestos básicos NO corresponde al análisis de regresión lineal?`,
  opciones: [
    String.raw`Los residuos no deben hallarse autocorrelacionados.`,
    String.raw`Linealidad en la interrelación de las variables.`,
    String.raw`No colinealidad entre las variables independientes.`,
    String.raw`Los residuos deben seguir una distribución \(N(0,\,1)\).`,
    String.raw`Observaciones aleatorias y que sigan la ley normal.`,
    String.raw`Debe haber homocedasticidad.`
  ],
  correctas: [3],
  explicacion: String.raw`NO corresponde: los residuos siguen \(N(0,\sigma^2)\), no \(N(0,1)\). La varianza del error no es necesariamente 1. Los demás sí son supuestos válidos de regresión (observaciones aleatorias y normales, linealidad, no colinealidad, no autocorrelación y homocedasticidad).`
},
{
  id: "U5-MC9", unidad: 5, tema: "Supuestos de regresión lineal", tipo: "multi",
  enunciado: String.raw`¿Cuáles de los siguientes supuestos básicos corresponden al análisis de regresión lineal?`,
  opciones: [
    String.raw`Observaciones aleatorias y que sigan normalidad.`,
    String.raw`No colinealidad entre las variables independientes.`,
    String.raw`Los residuos pueden hallarse autocorrelacionados.`,
    String.raw`Los residuos siguen una distribución \(N(0,\,\sigma^2)\).`,
    String.raw`Linealidad en la interrelación de las variables.`,
    String.raw`Debe haber homocedasticidad.`
  ],
  correctas: [0,1,3,4,5],
  explicacion: String.raw`Corresponden todos menos "los residuos pueden hallarse autocorrelacionados" — los residuos NO deben estar autocorrelacionados (supuesto de independencia de los errores).`
},

/* ========================= UNIDAD 6 - ANÁLISIS MULTIVARIANTE ============ */

{
  id: "U6-MC1", unidad: 6, tema: "Análisis multivariante", tipo: "multiple",
  enunciado: String.raw`Indicar cuál de las afirmaciones que continúan es correcta en el área del análisis multivariante.`,
  opciones: [
    String.raw`Conjunto de métodos y técnicas estadísticas cuya finalidad es analizar diversos grupos de datos.`,
    String.raw`Proporciona procedimientos centrados en la investigación de múltiples características.`,
    String.raw`Las técnicas descriptivas se aplican para determinar cómo y por qué las variables están correlacionadas.`,
    String.raw`Existe evidencia que cualquiera sea la muestra, los métodos multivariados son suficientemente robustos.`,
    String.raw`Ayuda al investigador a tomar decisiones óptimas dependiendo del ámbito en el que se encuentre.`
  ],
  correctas: [4],
  explicacion: String.raw`Las demás tienen imprecisiones: no es "diversos grupos" sino análisis simultáneo de 3+ variables; no es "múltiples características" sin más; las técnicas descriptivas no explican el "por qué"; y la robustez requiere muestras grandes (\(n>30\)).`
},
{
  id: "U6-MC2", unidad: 6, tema: "Análisis discriminante", tipo: "multiple",
  enunciado: String.raw`Señalar aquella afirmación que en el ámbito de la técnica análisis discriminante considere que es correcta.`,
  opciones: [
    String.raw`Los supuestos paramétricos de esta técnica no son los mismos que los del análisis de regresión múltiple.`,
    String.raw`Es una herramienta que permite reconocer funciones capaces de separar más de dos grupos de individuos.`,
    String.raw`Se trata de un procedimiento de reducción de dimensiones.`,
    String.raw`La expresión que permite diferenciar: \(D=\beta_0+\beta_1 X_1+\beta_2 X_2+\dots+\beta_k X_k\).`,
    String.raw`La cantidad de funciones discriminantes que resultan es igual al número de grupos discriminantes menos uno.`
  ],
  correctas: [4],
  explicacion: String.raw`Correcta: la cantidad de funciones discriminantes = número de grupos MENOS UNO (con dos grupos, una sola función). Errores: los supuestos SÍ son los mismos que los de la regresión múltiple; el discriminante separa 2 o más grupos (no "más de dos"); NO es una técnica de reducción de dimensiones (eso es el factorial); y la expresión \(D=\beta_0+\beta_1X_1+\dots\) está planteada como ecuación de regresión.`
},
{
  id: "U6-MC3", unidad: 6, tema: "Análisis discriminante", tipo: "multiple",
  enunciado: String.raw`Señalar aquella afirmación que en el marco de un modelo discriminante considere que es INCORRECTA.`,
  opciones: [
    String.raw`Es una herramienta que permite reconocer funciones capaces de separar dos o más grupos de individuos.`,
    String.raw`Es un procedimiento que analiza cuáles son las variables que contribuyen en mayor medida a discriminar a los sujetos.`,
    String.raw`Método que posibilita indicar si un individuo debe pertenecer a un grupo o al otro definido de antemano.`,
    String.raw`Variables dependientes: no métricas, de tipo categórica. Variables independientes: métricas.`,
    String.raw`La cantidad de funciones discriminantes que resultan es igual al número de grupos discriminantes.`
  ],
  correctas: [4],
  explicacion: String.raw`INCORRECTA: la cantidad de funciones discriminantes es igual al número de grupos MENOS UNO (con dos grupos, una sola función), no al número de grupos. Las demás son correctas.`
},
{
  id: "U6-MC4", unidad: 6, tema: "Aplicación del análisis discriminante", tipo: "multiple",
  enunciado: String.raw`Seleccionar la opción que considera que NO es correcta, en el contexto de aplicación del análisis discriminante.`,
  opciones: [
    String.raw`La clasificación de casos no es un aspecto equivalente a la estimación de la función discriminante.`,
    String.raw`La magnitud de los coeficientes estandarizados indica la relevancia de cada variable en la función discriminante.`,
    String.raw`Las funciones bien obtenidas pueden no tener una correcta performance clasificatoria.`,
    String.raw`Coeficientes no estandarizados son preferibles por ser independientes de la métrica original de las variables predictoras.`,
    String.raw`La base del análisis discriminante consiste en obtener una combinación lineal de las variables independientes.`,
    String.raw`Se utiliza el test de Chi-cuadrado para probar la \(H_0\) de que el modelo no es útil para discriminar los datos.`
  ],
  correctas: [3],
  explicacion: String.raw`NO es correcta: los coeficientes NO estandarizados dependen de la métrica original; son los ESTANDARIZADOS los que permiten comparar la importancia relativa de cada variable.`
},
{
  id: "U6-MC5", unidad: 6, tema: "Análisis factorial", tipo: "multiple",
  enunciado: String.raw`En el marco de la técnica análisis factorial, indicar la aseveración que considere NO apropiada.`,
  opciones: [
    String.raw`Método de reducción de datos que permite identificar un número relativamente pequeño de factores homogéneos.`,
    String.raw`Busca un número mínimo de dimensiones capaces de explicar el máximo de información contenida en los datos.`,
    String.raw`Los factores subyacentes pueden ser utilizados para representar la relación entre un conjunto grande de variables.`,
    String.raw`Variable \(X_k\) en función de los factores no observables \(F_j\): \(X_k=a_{k1}F_1+a_{k2}F_2+\dots+a_{kj}F_j+U_k\).`,
    String.raw`Los factores se forman con variables que correlacionan entre sí, procurando que unos sean independientes de otros.`
  ],
  correctas: [4],
  explicacion: String.raw`NO apropiada: los factores se forman con variables que correlacionan MUCHO entre sí, y se procura que los factores sean independientes entre sí (no "unos de otros" de manera ambigua). Las demás describen correctamente el análisis factorial.`
},
{
  id: "U6-MC6", unidad: 6, tema: "Fases del análisis factorial", tipo: "multiple",
  enunciado: String.raw`Indicar la fase del análisis factorial que estima INCORRECTA.`,
  opciones: [
    String.raw`Cálculo de una matriz capaz de expresar la variabilidad conjunta de todas las variables.`,
    String.raw`Extracción del número óptimo de factores comunes.`,
    String.raw`Rotación de la solución para facilitar su interpretación.`,
    String.raw`Estimación de las puntuaciones de los sujetos en las nuevas dimensiones.`,
    String.raw`Determinación de estadísticos descriptivos de las variables latentes.`
  ],
  correctas: [4],
  explicacion: String.raw`INCORRECTA: las variables latentes (factores) no se observan directamente, por lo que no se calculan estadísticos descriptivos de ellas. Las cuatro fases correctas son: (1) matriz de variabilidad conjunta, (2) extracción de factores, (3) rotación, (4) puntuaciones factoriales.`
},
{
  id: "U6-MC7", unidad: 6, tema: "Fases del análisis factorial", tipo: "multi",
  enunciado: String.raw`Indicar con X las fases del análisis factorial que estima CORRECTAS.`,
  opciones: [
    String.raw`Determinación de estadísticos descriptivos de las variables observadas.`,
    String.raw`Cálculo de una matriz capaz de expresar la variabilidad conjunta de todas las variables.`,
    String.raw`Extracción del número óptimo de factores comunes.`,
    String.raw`Rotación de la solución para facilitar su interpretación.`,
    String.raw`Estimación de las puntuaciones de los sujetos en las nuevas dimensiones.`
  ],
  correctas: [1,2,3,4],
  explicacion: String.raw`Las cuatro fases del análisis factorial son: (1) cálculo de la matriz, (2) extracción, (3) rotación, (4) puntuaciones. "Determinación de estadísticos descriptivos de las variables observadas" NO es una fase del factorial (es un paso previo general).`
},
{
  id: "U6-MC8", unidad: 6, tema: "Utilidades del análisis factorial", tipo: "multiple",
  enunciado: String.raw`¿Qué opción de las siguientes corresponde a una utilidad principal del análisis factorial?`,
  opciones: [
    String.raw`Clasificación de la información proporcionada por los datos de la muestra.`,
    String.raw`Identificación de estructuras subyacentes conformadas por los factores comunes.`,
    String.raw`Paso intermedio en la obtención de nuevas variables intercorrelacionadas para ser utilizadas en posteriores análisis.`,
    String.raw`Permite que las variables observables puedan ser expresadas como combinación lineal de los factores latentes.`,
    String.raw`Facilita indicadores que dan lugar a confiar que la aplicación de la técnica conduce a una decisión correcta.`
  ],
  correctas: [1],
  explicacion: String.raw`Utilidad principal: la identificación de estructuras subyacentes (factores comunes). Las demás opciones describen pasos secundarios o características, no la utilidad principal que se pide.`
},
{
  id: "U6-MC9", unidad: 6, tema: "Indicadores del análisis factorial", tipo: "multi",
  enunciado: String.raw`Señalar los ítems que hacen referencia a indicadores que resultan adecuados para llevar a cabo un análisis factorial.`,
  opciones: [
    String.raw`Coeficientes de correlación de Pearson en la mayoría de los casos claramente significativos.`,
    String.raw`Determinante de la matriz de correlaciones próximo a la unidad.`,
    String.raw`Test Kaiser-Meyer-Olkin con un valor superior a 0,5.`,
    String.raw`Prueba de esfericidad de Bartlett: valor \(p>0{,}05\).`,
    String.raw`Valores altos por fuera de la diagonal principal en las matrices anti-imagen.`,
    String.raw`Coeficientes MSA bajos en la diagonal de la matriz anti-imagen de correlaciones.`
  ],
  correctas: [0,2],
  explicacion: String.raw`Adecuados: correlaciones significativas (indica relación entre variables) y KMO > 0,5 (indica adecuación muestral). Inadecuados: determinante próximo a 1 implica poca correlación (debe ser próximo a 0); Bartlett debe tener \(p<0{,}05\); valores altos fuera de la diagonal anti-imagen y MSA bajos indican mal ajuste.`
},
{
  id: "U6-MC10", unidad: 6, tema: "Aplicación del análisis factorial", tipo: "multi",
  enunciado: String.raw`Las apreciaciones que siguen contienen texto vinculado con la aplicación de la técnica de análisis factorial. Seleccionar aquella/s que expresa/n una opción VERDADERA.`,
  opciones: [
    String.raw`La comunalidad de una variable es la proporción de su varianza que no puede ser explicada por el modelo factorial.`,
    String.raw`La comunalidad oscila entre 0 y 1, y la parte de varianza explicada por el modelo se conoce como factor único.`,
    String.raw`Si un autovalor se aproxima a uno, su respectivo factor es capaz de explicar una cantidad relevante de varianza.`,
    String.raw`La rotación Varimax altera la comunalidad de las variables, pero no el porcentaje de varianza que explica el modelo.`,
    String.raw`Al aplicar el método de rotación se obtiene una matriz factorial en la que los factores poseen igual distribución.`,
    String.raw`Autovalores, porcentajes de varianza explicada y acumulada, comunalidades y cargas factoriales, se consideran los principales indicadores de la estructura factorial.`
  ],
  correctas: [5],
  explicacion: String.raw`Verdadera: autovalores, varianza explicada, comunalidades y cargas factoriales son los indicadores clave. Falsas: la comunalidad es la varianza EXPLICADA (no la no explicada); la parte no explicada es la unicidad; un autovalor cercano a 1 no es relevante (debe ser >1); la rotación NO altera comunalidades; y la rotación redistribuye la varianza, no da "igual distribución".`
},

/* ========================= UNIDAD 7 - TEORÍA BAYESIANA ================= */

{
  id: "U7-MC1", unidad: 7, tema: "Inferencia Bayesiana", tipo: "multiple",
  enunciado: String.raw`Las siguientes oraciones intentan constituir una explicación del concepto relacionado con la Inferencia Bayesiana. Señalar cuál es la correcta.`,
  opciones: [
    String.raw`Describe en forma cuantitativa la información que aporta la evidencia experimental ante un hecho desconocido.`,
    String.raw`Cualquier incertidumbre respecto de un hecho o valor puede describirse mediante probabilidades objetivas asignadas a las distintas alternativas posibles.`,
    String.raw`Es bastante complicado establecer las probabilidades de los posibles resultados experimentales, condicionadas a los hechos o valores desconocidos.`,
    String.raw`La aplicación del Teorema de Bayes, luego de un resultado experimental específico, nos dará las probabilidades que deben atribuirse a las diversas alternativas.`,
    String.raw`Las probabilidades (a posteriori de la evidencia experimental) constituyen el producto final de la Inferencia Bayesiana.`
  ],
  correctas: [3],
  explicacion: String.raw`Correcta: el Teorema de Bayes transforma probabilidades a priori en probabilidades a posteriori, dado un resultado experimental. Las demás tienen errores: las probabilidades son SUBJETIVAS (no objetivas); NO es complicado establecer las probabilidades condicionadas; y el producto final es la DECISIÓN óptima, no solo las probabilidades.`
},
{
  id: "U7-MC2", unidad: 7, tema: "Objeciones clásicas a la Bayesiana", tipo: "multiple",
  enunciado: String.raw`Se proporcionan las objeciones que el enfoque estadístico clásico realiza a la teoría bayesiana y las respuestas de los bayesianos. Señalar cuál considera que NO es correcta.`,
  opciones: [
    String.raw`La decisión, supuestamente óptima, a que se llega, depende en último término de una distribución subjetiva, lo cual invalida totalmente el método.`,
    String.raw`El hecho de que dos personas con grados de información diferentes, reflejados en distribuciones a priori diferentes, lleguen a decisiones diferentes, no constituye objeción de peso.`,
    String.raw`La determinación de la función de consecuencias es muy compleja, excepto en situaciones no reales.`,
    String.raw`La cuantificación implícita de las consecuencias puede a veces ser difícil; sin embargo, en principio se dispone de la herramienta para llegar a una decisión óptima o aproximada en cualquier problema de decisión.`
  ],
  correctas: [0],
  explicacion: String.raw`NO es correcta: la objeción dice "invalida totalmente" pero los bayesianos responden que las probabilidades subjetivas son útiles y no invalidan el método. Las demás son enunciados correctos del debate clásico-bayesiano.`
},
{
  id: "U7-MC3", unidad: 7, tema: "Objeciones clásicas a la Bayesiana", tipo: "multi",
  enunciado: String.raw`Se listan las objeciones que los estadísticos clásicos plantean a los bayesianos y las respuestas que estos brindan. Señalar cuáles de los enunciados considera que es/son correcto/s.`,
  opciones: [
    String.raw`La decisión, supuestamente óptima, a que se llega, depende en último término de una distribución subjetiva, lo cual invalida totalmente el método.`,
    String.raw`La determinación de la función de consecuencias es muy compleja, cualquiera sea la situación en la que deba ser planteada.`,
    String.raw`La cuantificación implícita de las consecuencias puede a veces ser difícil; sin embargo, en principio se dispone de la herramienta para llegar a una decisión óptima o aproximada en cualquier problema de decisión.`,
    String.raw`El hecho de que dos personas con grados de información diferentes, reflejados en distribuciones a priori diferentes, lleguen a decisiones diferentes, es razonable y no constituye objeción de peso.`
  ],
  correctas: [2,3],
  explicacion: String.raw`Correctas: la cuantificación puede ser difícil pero se dispone de la herramienta; y que dos personas lleguen a decisiones diferentes es razonable. Incorrectas: NO invalida totalmente el método; y la función de consecuencias NO es compleja en cualquier situación (sólo en situaciones no reales).`
},
{
  id: "U7-MC4", unidad: 7, tema: "Enfoque Bayesiano", tipo: "multi",
  enunciado: String.raw`En el marco de la Teoría Bayesiana de la Decisión, señalar los aspectos que se correspondan con la aplicación del Enfoque Bayesiano.`,
  opciones: [
    String.raw`En el procedimiento general se necesita una asignación subjetiva de probabilidades sobre los estados del mundo (variable desconocida).`,
    String.raw`Para cada acción, la función llamada "índice de preferencia" resulta una buena manera de considerar el proceso bayesiano.`,
    String.raw`En el caso discreto, la ganancia esperada está dada por \(G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j)\), donde \(g_{\tilde{e}}(e_j)\) es la probabilidad del \(j\)-ésimo estado del mundo y \(u_{ij}\) es un elemento de la matriz de consecuencias.`,
    String.raw`La acción que maximice el valor esperado de la ganancia \(G_i\) será la acción óptima.`
  ],
  correctas: [0,1,2,3],
  explicacion: String.raw`Todas son correctas: describen el procedimiento bayesiano completo — asignación de probabilidades subjetivas, cálculo de la función de ganancia esperada, y elección de la acción óptima que maximiza \(G_i\).`
},

/* ====== PREGUNTAS A DESARROLLAR (U5, U7) ============================== */

{
  id: "EX-D1", unidad: 7, tema: "Teoría Bayesiana de la Decisión", tipo: "desarrollar",
  enunciado: String.raw`En el contexto de la Teoría Bayesiana de la Decisión, expresar en forma breve los cuatro pasos necesarios del procedimiento que se aplica para adoptar una acción de manera óptima.`,
  respuesta: String.raw`<b>1°)</b> Se efectúa una <b>asignación subjetiva de probabilidades</b> sobre los estados del mundo \(e_j\).
<b>2°)</b> Se calculan las <b>funciones de ganancia</b> \(G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j)\) a partir de la matriz de consecuencias \(u_{ij}\) y esas probabilidades.
<b>3°)</b> Si se dispone de los resultados de un <b>experimento</b>, se <b>recalculan</b> las ganancias usando las probabilidades a priori actualizadas por la evidencia (probabilidades a posteriori, vía Teorema de Bayes).
<b>4°)</b> La <b>acción óptima</b> es la correspondiente a la función de ganancia de <b>mayor valor</b> (o de menor valor absoluto si las consecuencias fueran pérdidas).`,
  explicacion: String.raw`Pasos: (1) probabilidades subjetivas a priori, (2) ganancias con la matriz de consecuencias, (3) actualización con evidencia experimental, (4) elegir la acción de ganancia óptima.`
},
{
  id: "EX-D2", unidad: 7, tema: "Teoría Bayesiana de la Decisión", tipo: "desarrollar",
  enunciado: String.raw`En el contexto de distribuciones discretas, escribir la expresión que, para una acción \(a_i\), permite obtener el valor esperado de la ganancia. Indicar el significado de los elementos que integran la función.`,
  respuesta: String.raw`Para cada acción \(a_i\) se calcula el valor esperado de la ganancia \(G_i\). En el caso <b>discreto</b>:
\[G_i=\sum_j u_{ij}\;g_{\tilde{e}}(e_j)\]
donde:
• \(\tilde{e}\): variable aleatoria (subjetiva) que caracteriza el estado del mundo.
• \(u_{ij}\): componentes de la <b>matriz de consecuencias</b> (utilidad/ganancia de la acción \(a_i\) bajo el estado \(e_j\)).
• \(g_{\tilde{e}}(e_j)\): <b>probabilidades</b> (a priori, subjetivas) de cada estado del mundo \(e_j\).

La <b>acción óptima</b> es la \(a_i\) que <b>maximiza</b> \(G_i\). En el caso continuo la suma se reemplaza por una integral: \(G_i=\int u_i(e)\,g_{\tilde{e}}(e)\,de\).`,
  explicacion: String.raw`\(G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j)\): \(u_{ij}=\) matriz de consecuencias; \(g_{\tilde{e}}(e_j)=\) probabilidades a priori. Se elige la acción de mayor \(G_i\).`
},

/* ============ PRIMER PARCIAL TEÓRICO 2026 (transcripción con respuestas) ===== */

{
  id: "P26-01", unidad: 1, tema: "Distribución Binomial", tipo: "multi",
  enunciado: String.raw`En el contexto de la distribución binomial, indicar el/los enunciado/s que considere correcto/s.`,
  opciones: [
    String.raw`Función de probabilidad: \(g_B(n;N,p)=C_N^{\,n}\,p^{n}(1-p)^{N-n}\,;\; n=0,1,\dots,N\)`,
    String.raw`Función generatriz de momentos: \(M_B(\theta;N,p)=\big(p\,e^{\theta}+(1-p)\big)^{N}\)`,
    String.raw`Media: \(\mu_B(N,p)=N(1-p)\)`,
    String.raw`Varianza: \(V_B(N,p)=N\,p\,(1-p)\)`
  ],
  correctas: [0,1,3],
  explicacion: String.raw`Correctas a, b y d. La media correcta es \(\mu_B=Np\); la opción c, \(N(1-p)\), es falsa.`
},
{
  id: "P26-02", unidad: 1, tema: "Ley de los grandes números", tipo: "multi",
  enunciado: String.raw`En el marco de la Ley de los grandes números para poblaciones dicotómicas, seleccionar la/s opción/es INCORRECTA/s.`,
  opciones: [
    String.raw`En forma fuerte: \(\tilde{m}_n\) tiende en probabilidad a \(E(\tilde{x})\).`,
    String.raw`La media experimental tiende a la media teórica a medida que aumenta el número de repeticiones.`,
    String.raw`En forma débil: \(\tilde{m}_n\) converge al número \(\mu_B\).`,
    String.raw`La probabilidad empírica se aproxima a la teórica siempre que el número de repeticiones permanezca constante.`
  ],
  correctas: [0,3],
  explicacion: String.raw`Incorrectas a y d. a) la forma FUERTE es convergencia casi segura, no "en probabilidad". d) la aproximación mejora al AUMENTAR las repeticiones, no manteniéndolas constantes.`
},
{
  id: "P26-03", unidad: 1, tema: "Distribución Normal", tipo: "multi",
  enunciado: String.raw`Si \(\tilde{X}\) tiene distribución normal con media \(\mu\) y desviación \(\sigma\), ¿cuáles de las siguientes opciones NO se verifican?`,
  opciones: [
    String.raw`\(P(b\le\tilde{X}\le c)=F_{N^*}\!\left(\dfrac{b-\mu}{\sigma}\right)-F_{N^*}\!\left(\dfrac{c-\mu}{\sigma}\right)\)`,
    String.raw`\(P(\mu-\sigma\le\tilde{X}\le\mu+\sigma)=F_{N^*}(1)-F_{N^*}(-1)=0{,}6826\)`,
    String.raw`\(\tilde{z}=\dfrac{\mu-\tilde{X}}{\sigma}\) tiene una distribución normal estándar.`,
    String.raw`Aproximadamente el 95,44% del área bajo la curva está dentro de \(\pm2\) desviaciones estándar respecto de la media.`
  ],
  correctas: [0,2],
  explicacion: String.raw`No se verifican a y c. a) los términos de la resta están invertidos: debe ser \(F_{N^*}\!\left(\frac{c-\mu}{\sigma}\right)-F_{N^*}\!\left(\frac{b-\mu}{\sigma}\right)\). c) la estandarización correcta es \(\tilde{z}=(\tilde{X}-\mu)/\sigma\).`
},
{
  id: "P26-04", unidad: 1, tema: "Normal como límite de Binomial", tipo: "multiple",
  enunciado: String.raw`En el marco de la distribución normal como límite de la binomial, indicar el/los enunciado/s correcto/s.`,
  opciones: [
    String.raw`La aproximación será correcta si el tamaño de la muestra es grande y la probabilidad de éxito está próxima a 0 o a 1.`,
    String.raw`Si la muestra es pequeña y \(p\) está cercana a 0,5, la aproximación será correcta.`,
    String.raw`La aproximación normal será buena cuando \(Np\) y \(Nq\) sean ambos menores a 5.`,
    String.raw`La distribución normal es una aproximación conveniente a la binomial cuando ésta toma la forma de campana de Gauss.`
  ],
  correctas: [3],
  explicacion: String.raw`Correcta d. a) describe la condición de la POISSON, no de la normal; para la normal \(Np\) y \(Nq\) deben ser MAYORES a 5. b) y c) invierten las condiciones.`
},
{
  id: "P26-05", unidad: 1, tema: "Media muestral · TCL", tipo: "multi",
  enunciado: String.raw`Entre las posibilidades para el estadístico media muestral (\(\bar{x}\)), elegir la/s que sea/n correcta/s.`,
  opciones: [
    String.raw`Variable de partida: \(\tilde{X}\to N(0,1)\)`,
    String.raw`Varianza: \(\dfrac{\sigma}{n^{2}}\)`,
    String.raw`Modelo de distribución: \(N\!\left(\mu,\;\dfrac{\sigma}{n^{2}}\right)\)`,
    String.raw`Tipificación: \(z=\dfrac{\bar{x}-\mu}{\sigma/\sqrt{n}}\to N(0,1)\)`,
    String.raw`Independientemente de cómo sea la distribución de la variable, la distribución muestral de \(\bar{x}\) tiende a la normal cuando \(n\to\infty\).`
  ],
  correctas: [3,4],
  explicacion: String.raw`Correctas d y e. a) la variable de partida es \(N(\mu,\sigma)\); b) la varianza es \(\sigma^2/n\); c) el modelo es \(N(\mu,\sigma^2/n)\) ó \(N(\mu,\sigma/\sqrt{n})\).`
},
{
  id: "P26-06", unidad: 1, tema: "Proporción de éxitos", tipo: "multi",
  enunciado: String.raw`Para el estadístico \(\hat{p}\) (proporción de éxitos con probabilidad \(\pi\)), indicar la/s opción/es verdadera/s.`,
  opciones: [
    String.raw`Valor esperado: \(n\cdot\pi\)`,
    String.raw`Modelo de distribución: \(N\!\left(n\pi,\;\sqrt{\dfrac{\pi(1-\pi)}{n}}\right)\)`,
    String.raw`Estandarización: \(z=\dfrac{\hat{p}-\pi}{\sqrt{(\pi-\pi^2)/n}}\)`,
    String.raw`Varianza: \(\sqrt{\dfrac{\pi-\pi^2}{n}}\)`
  ],
  correctas: [2],
  explicacion: String.raw`Verdadera c. \(E(\hat{p})=\pi\), no \(n\pi\) (por eso a y b son falsas: b lleva media \(n\pi\)); la varianza es \((\pi-\pi^2)/n\) — la opción d da la DESVIACIÓN estándar (con raíz), no la varianza.`
},
{
  id: "P26-07", unidad: 1, tema: "Distribución Chi-cuadrado", tipo: "multiple",
  enunciado: String.raw`En el marco de la distribución Chi-cuadrado, indicar el/los enunciado/s correcto/s.`,
  opciones: [
    String.raw`La media de la variable es \(2n\) y la varianza vale \(n\).`,
    String.raw`Por su uso habitual en pruebas de hipótesis, está tabulada para infinitos valores del parámetro \(n\).`,
    String.raw`Es muy útil en la estimación de la varianza, en pruebas de independencia y de bondad de ajuste.`,
    String.raw`Si bien la curva es inicialmente simétrica, según aumenta \(n\) tiende rápidamente a hacerse asimétrica.`,
    String.raw`La forma correcta de tipificar para \(n\ge30\) es \(z=\dfrac{\chi^{2}-2n}{\sqrt{n}}\).`
  ],
  correctas: [2],
  explicacion: String.raw`Correcta c. a) la media es \(n\) y la varianza \(2n\); b) está tabulada para valores DISTINTOS, no infinitos; d) arranca asimétrica y se vuelve más simétrica al crecer \(n\); e) la tipificación correcta es \(z=(\chi^2-n)/\sqrt{2n}\).`
},
{
  id: "P26-08", unidad: 1, tema: "Distribución t de Student", tipo: "multi",
  enunciado: String.raw`Propiedades y condiciones de aplicación de la distribución t de Student; señalar la/s que sea/n verdadera/s.`,
  opciones: [
    String.raw`\(E(\tilde{t})=0\) si \(n\gt1\), y su varianza \(\dfrac{n}{n-2}\) sólo existe para \(n\gt2\).`,
    String.raw`Tiene la misma simetría general de campana que la normal estándar, pero refleja una mayor variabilidad en muestras pequeñas.`,
    String.raw`Para su utilización, la población principal debe tener una distribución esencialmente normal.`,
    String.raw`La función de distribución puede calcularse en forma analítica y ha sido tabulada para diferentes valores.`,
    String.raw`Si las muestras provienen de poblaciones normales, con \(\sigma_1^2=\sigma_2^2\) desconocidas (\(n_1\lt30\) y \(n_2\lt30\)), la diferencia de medias sigue \(f_S(\bar{x}_1,\bar{x}_2;\,n_1+n_2-2)\).`
  ],
  correctas: [0,1,2,4],
  explicacion: String.raw`Verdaderas a, b, c y e. La falsa es d: la función de distribución \(t\) NO se calcula en forma analítica; sólo está tabulada.`
},
{
  id: "P26-09", unidad: 1, tema: "Distribución F de Fisher", tipo: "multi",
  enunciado: String.raw`En el contexto de la distribución F de Fisher, indicar la/s afirmación/es correcta/s.`,
  opciones: [
    String.raw`La densidad de F no puede calcularse en forma analítica, pero se halla tabulada para distintos valores de probabilidad acumulada y grados de libertad del numerador y del denominador.`,
    String.raw`La curva de F depende solamente de los grados de libertad \(n_1\) y \(n_2\).`,
    String.raw`La gráfica de F es unimodal, continua, tiene sesgo hacia la derecha y está centrada respecto de 1.`,
    String.raw`Sólo es posible obtener la media para \(n_2\gt2\), y la varianza para \(n_2\gt4\).`,
    String.raw`Según aumenta \(n_1\) o \(n_2\), la curva se hace menos asimétrica a la izquierda y tiende rápidamente a hacerse simétrica.`
  ],
  correctas: [0,2,3],
  explicacion: String.raw`Correctas a, c y d. a) la densidad no es analítica pero está tabulada; c) es unimodal, continua, con sesgo a la derecha; d) \(\mu_F=\dfrac{n_2}{n_2-2}\) existe para \(n_2\gt2\) y \(V_F\) para \(n_2\gt4\). Falsas: b) la curva depende de \(n_1\), \(n_2\) y del ORDEN (no "solamente"); e) la asimetría de F es a la DERECHA, no a la izquierda.`
},
{
  id: "P26-10", unidad: 2, tema: "Tamaño de muestra (media)", tipo: "multiple",
  enunciado: String.raw`Para un IC al \((1-\alpha)\cdot100\%\) y amplitud \(L\) para la media de una población normal con \(\sigma\) conocida, se usó la fórmula \(\dfrac{\sqrt{n}}{4}=\left(\dfrac{z_{\alpha/2}\,\sigma}{L}\right)^{2}\) para el tamaño de muestra. Indicar la opción correcta.`,
  opciones: [
    String.raw`La fórmula usada es correcta.`,
    String.raw`Es incorrecta; lo correcto es \(n=4\left(\dfrac{z_{\alpha/2}\,\sigma}{L}\right)^{2}=\left(\dfrac{2\,z_{\alpha/2}\,\sigma}{L}\right)^{2}\).`,
    String.raw`Es incorrecta; lo correcto es \(n=\left(\dfrac{z_{\alpha/2}\,\sigma}{L}\right)^{2}\).`,
    String.raw`Es incorrecta; lo correcto es \(n=\dfrac{1}{4}\left(\dfrac{z_{\alpha/2}\,\sigma}{L}\right)^{2}\).`
  ],
  correctas: [1],
  explicacion: String.raw`La amplitud es \(L=2\,z_{\alpha/2}\,\sigma/\sqrt{n}\); despejando, \(n=4\left(\dfrac{z_{\alpha/2}\sigma}{L}\right)^{2}=\left(\dfrac{2 z_{\alpha/2}\sigma}{L}\right)^{2}\). La fórmula usada deja \(\sqrt{n}/4=(\cdots)^2\), que es incorrecta.`
},
{
  id: "P26-11", unidad: 2, tema: "Error máximo (proporción)", tipo: "multiple",
  enunciado: String.raw`Para el error máximo admisible en la estimación del porcentaje de empleados de una fábrica (que se sabe es \(0{,}75\)), con una muestra de tamaño \(n\), se usó \(E^{2}=z_{\alpha/2}\sqrt{\dfrac{p_0\,q_0}{n}}\). Indicar la opción correcta.`,
  opciones: [
    String.raw`La fórmula usada es correcta.`,
    String.raw`Es incorrecta; lo correcto es \(E=z_{\alpha/2}\sqrt{\dfrac{p_0\,q_0}{n}}\).`,
    String.raw`Es incorrecta; lo correcto es \(E=z_{\alpha/2}\,\dfrac{p_0\,q_0}{n}\).`,
    String.raw`Es incorrecta; lo correcto es \(E=\dfrac{z_{\alpha/2}}{\sqrt{p_0\,q_0\,n}}\).`
  ],
  correctas: [1],
  explicacion: String.raw`El miembro izquierdo no debe ir al cuadrado: el error es \(E=z_{\alpha/2}\sqrt{p_0 q_0/n}\).`
},
{
  id: "P26-12", unidad: 3, tema: "Valor p", tipo: "multi",
  enunciado: String.raw`Conceptos sobre el estadístico valor p; indicar el/los que es/son verdadero/s.`,
  opciones: [
    String.raw`Es la probabilidad atribuida al valor observado del estadístico de prueba.`,
    String.raw`Indica, por comparación con \(\alpha\), la probabilidad que existe de rechazar o no la hipótesis nula.`,
    String.raw`El valor \(p\) también se denomina medida de significación.`,
    String.raw`Si \(\alpha\lt p\) no se rechaza \(H_0\), y si \(\alpha\gt p\) se rechaza \(H_0\).`,
    String.raw`Cuando el valor observado cae en la región de rechazo de \(H_0\) (cola derecha), el área de \(p\) es mayor que el área de \(\alpha\).`
  ],
  correctas: [0,1,3],
  explicacion: String.raw`Verdaderos a, b y d. c) se denomina GRADO de significación, no "medida". e) si cae en la región de rechazo, \(p\lt\alpha\), por lo que el área de \(p\) es MENOR que la de \(\alpha\).`
},
{
  id: "P26-13", unidad: 3, tema: "Igualdad de varianzas (F)", tipo: "multi",
  enunciado: String.raw`Se desea contrastar la \(H_0\) de igualdad de varianzas; señalar la/s decisión/es que entienda APROPIADA/s.`,
  opciones: [
    String.raw`Hipótesis: \(H_0:\sigma_1^2=\sigma_2^2\) y \(H_1:\sigma_1^2\ne\sigma_2^2\).`,
    String.raw`Estadístico de prueba: \(F=\dfrac{\hat{S}_2^2}{\hat{S}_1^2}\to f_F(x;\,n_1-1,\,n_2-1)\).`,
    String.raw`En caso de rechazar \(H_0\): \(F\gt F_{\alpha/2,\,n_1-1,\,n_2-1}\) ó \(F\lt F_{1-\alpha/2,\,n_1-1,\,n_2-1}\).`
  ],
  correctas: [0,2],
  explicacion: String.raw`Apropiadas a y c. b) es inapropiada: con numerador \(\hat{S}_2^2\) y denominador \(\hat{S}_1^2\), los grados de libertad deben ser \((n_2-1,\,n_1-1)\), no \((n_1-1,\,n_2-1)\).`
},
{
  id: "P26-14", unidad: 3, tema: "Diferencia de proporciones", tipo: "multi",
  enunciado: String.raw`Prueba de hipótesis para la diferencia de proporciones; indicar la/s que considere correcta/s.`,
  opciones: [
    String.raw`Se trata de probar: \(H_0:p_1=p_2\) y \(H_1:p_1\ne p_2\).`,
    String.raw`Estadístico de prueba: \(z=\dfrac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})}\,\sqrt{\dfrac{1}{n_1+n_2}}}\).`,
    String.raw`Estimador común: \(\hat{p}=\dfrac{x_1+x_2}{n_1+n_2}\).`,
    String.raw`Distribución del estadístico \(z\): \(f_S(z;0,1)\).`,
    String.raw`Variables proporción muestral: \(\hat{p}_1=\dfrac{x_1}{n_1}\) y \(\hat{p}_2=\dfrac{x_2}{n_2}\).`,
    String.raw`Rechazo de \(H_0\): \(z\gt-z_{\alpha/2}\) ó \(z\lt z_{\alpha/2}\).`
  ],
  correctas: [0,2,4],
  explicacion: String.raw`Correctas a, c y e. b) el radical debe ser \(\sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}\), no \(\sqrt{1/(n_1+n_2)}\); d) la distribución es \(f_N\) (normal), no \(f_S\); f) el rechazo es \(z\gt z_{\alpha/2}\) ó \(z\lt-z_{\alpha/2}\) (signos invertidos).`
},
{
  id: "P26-15", unidad: 4, tema: "Pruebas no paramétricas", tipo: "multi",
  enunciado: String.raw`¿Qué debe presentarse en una muestra para que sea necesaria la aplicación de pruebas de hipótesis no paramétricas (PHNP)?`,
  opciones: [
    String.raw`El número de observaciones es grande.`,
    String.raw`Procede de una población con distribución desconocida.`,
    String.raw`Las varianzas difieren de manera significativa.`,
    String.raw`Las variables están medidas en una escala de razón.`
  ],
  correctas: [1,2],
  explicacion: String.raw`Correctas b y c. a) las PHNP se usan con POCAS observaciones; d) se aplican con escala ORDINAL/nominal, no de razón.`
},
{
  id: "P26-16", unidad: 4, tema: "PHNP (ajuste · Mann-Whitney · K-S)", tipo: "multi",
  enunciado: String.raw`Enunciados de PHNP para distintos tipos de muestras; indicar el/los correcto/s.`,
  opciones: [
    String.raw`La prueba Chi-cuadrado para una muestra permite comprobar el ajuste de la distribución de frecuencias de una variable discreta a una distribución teórica.`,
    String.raw`El valor del estadístico se obtiene mediante \(\chi^{2}=\displaystyle\sum_{i=1}^{K}\dfrac{(Fo_i-Fe_i)^2}{Fo_i}\).`,
    String.raw`La \(H_0\) de la prueba de K-S señala que la muestra procede de una población que se ajusta a una distribución con nombre propio (normal, uniforme, Poisson, exponencial).`,
    String.raw`La prueba U de Mann-Whitney se utiliza cuando es necesario analizar dos muestras con datos relacionados.`,
    String.raw`La U de Mann-Whitney se emplea para contrastar si las muestras proceden de poblaciones con la misma distribución.`
  ],
  correctas: [0,2,4],
  explicacion: String.raw`Correctas a, c y e. b) el denominador debe ser \(Fe_i\) (frecuencias esperadas), no \(Fo_i\); d) la U de M-W es para datos INDEPENDIENTES, no relacionados.`
},

/* ===== PREGUNTAS U4-U7 (reconstruidas a partir del solucionario, verificadas con la teoría) ===== */

{
  id: "U4-MC7", unidad: 4, tema: "Prueba de Kolmogorov-Smirnov", tipo: "multiple",
  enunciado: String.raw`Sobre la prueba de Kolmogorov-Smirnov (K-S) para una muestra, indicar el enunciado CORRECTO.`,
  opciones: [
    String.raw`Su estadístico se obtiene a partir de la diferencia máxima, en valor absoluto, entre las frecuencias acumuladas observadas y las teóricas.`,
    String.raw`Sólo puede aplicarse a variables nominales.`,
    String.raw`Contrasta la igualdad de varianzas de dos poblaciones.`,
    String.raw`Su \(H_0\) afirma que la muestra NO se ajusta a ninguna distribución conocida.`
  ],
  correctas: [0],
  explicacion: String.raw`K-S evalúa si la muestra procede de una distribución determinada; el estadístico es la diferencia máxima en valor absoluto entre las frecuencias acumuladas observadas y las teóricas. Su \(H_0\) es que la muestra SÍ se ajusta a la distribución especificada.`
},
{
  id: "U4-MC8", unidad: 4, tema: "Prueba de los signos vs Wilcoxon", tipo: "multiple",
  enunciado: String.raw`Respecto de la prueba de los signos y la T de Wilcoxon (dos muestras relacionadas), indicar el enunciado CORRECTO.`,
  opciones: [
    String.raw`La prueba de los signos usa únicamente el signo de las diferencias y su \(H_0\) es que hay igual porcentaje de diferencias positivas y negativas.`,
    String.raw`La prueba de los signos es más potente que la de Wilcoxon.`,
    String.raw`La T de Wilcoxon ignora la magnitud de las diferencias.`,
    String.raw`Ambas pruebas requieren que las poblaciones sean normales.`
  ],
  correctas: [0],
  explicacion: String.raw`La prueba de los signos usa sólo el signo (\(H_0\): igual % de diferencias \(+\) y \(-\)) y es MENOS potente que Wilcoxon, que sí incorpora la magnitud mediante los rangos. Al ser no paramétricas, no exigen normalidad.`
},
{
  id: "U4-MC9", unidad: 4, tema: "Dos muestras independientes", tipo: "multiple",
  enunciado: String.raw`Para contrastar si dos muestras con datos INDEPENDIENTES proceden de poblaciones con la misma distribución, ¿cuál de las siguientes pruebas es apropiada?`,
  opciones: [
    String.raw`Test de rachas de Wald-Wolfowitz.`,
    String.raw`T de Wilcoxon.`,
    String.raw`\(\chi^2\) de Friedman.`,
    String.raw`W de Kendall.`
  ],
  correctas: [0],
  explicacion: String.raw`El test de rachas de Wald-Wolfowitz (y la U de Mann-Whitney) sirven para dos muestras INDEPENDIENTES. Wilcoxon y Friedman son para datos RELACIONADOS; Kendall mide concordancia.`
},
{
  id: "U4-MC10", unidad: 4, tema: "Kruskal-Wallis", tipo: "multiple",
  enunciado: String.raw`Sobre la prueba H de Kruskal-Wallis, señalar el enunciado CORRECTO.`,
  opciones: [
    String.raw`Es una extensión de la U de Mann-Whitney para tres o más grupos independientes; su \(H_0\) es la no existencia de diferencias y el estadístico H sigue aproximadamente una \(\chi^2\).`,
    String.raw`Se aplica a tres o más muestras relacionadas.`,
    String.raw`Su \(H_0\) afirma que existen diferencias significativas entre los grupos.`,
    String.raw`El estadístico H sigue una distribución t de Student.`
  ],
  correctas: [0],
  explicacion: String.raw`K-W extiende la U de Mann-Whitney a tres o más grupos INDEPENDIENTES; su \(H_0\) es la no existencia de diferencias y el estadístico \(H\) sigue aproximadamente una \(\chi^2\).`
},
{
  id: "U5-MC10", unidad: 5, tema: "Intensidad de la correlación", tipo: "multiple",
  enunciado: String.raw`Según la intensidad del coeficiente de correlación de Pearson \(r\), ¿cuál de los siguientes intervalos corresponde a una correlación ALTA?`,
  opciones: [
    String.raw`\(0{,}6\lt r\lt 0{,}8\)`,
    String.raw`\(0{,}2\lt r\lt 0{,}4\)`,
    String.raw`\(0{,}8\lt r\lt 1\)`,
    String.raw`\(0\lt r\lt 0{,}2\)`
  ],
  correctas: [0],
  explicacion: String.raw`Según la tabla de intensidad: \(0{,}6\lt r\lt 0{,}8\) = alta; \(0{,}8\lt r\lt 1\) = muy alta; \(0{,}2\lt r\lt 0{,}4\) = baja; \(0\lt r\lt 0{,}2\) = muy baja.`
},
{
  id: "U5-MC11", unidad: 5, tema: "Coeficiente de correlación r", tipo: "multi",
  enunciado: String.raw`Sobre el coeficiente de correlación de Pearson \(r\), indicar la/s afirmación/es correcta/s.`,
  opciones: [
    String.raw`Toma valores entre \(-1\) y \(+1\).`,
    String.raw`El signo indica el sentido de la relación (directa o inversa).`,
    String.raw`Su valor absoluto indica la fuerza de la asociación.`,
    String.raw`Siempre es positivo.`,
    String.raw`En regresión simple, \(r^2\) coincide con el coeficiente de determinación.`
  ],
  correctas: [0,1,2,4],
  explicacion: String.raw`\(r\in[-1,1]\); el signo da el sentido (directo/inverso) y \(|r|\) la fuerza de la asociación; en regresión simple \(R^2=r^2\). Es falsa "siempre positivo": \(r\) puede ser negativo (relación inversa).`
},
{
  id: "U5-MC12", unidad: 5, tema: "Error aleatorio del modelo", tipo: "multiple",
  enunciado: String.raw`En el modelo de regresión lineal \(Y=B_0+B_1X_1+\dots+B_nX_n+\varepsilon\), ¿cuál es la especificación correcta del error aleatorio \(\varepsilon\)?`,
  opciones: [
    String.raw`\(\varepsilon\) tiene media 0 y varianza constante \(\sigma^2\) (homocedasticidad).`,
    String.raw`\(\varepsilon\) tiene media 0 y varianza \(\sigma^2=1\).`,
    String.raw`\(\varepsilon\) tiene media igual a \(B_0\).`,
    String.raw`\(\varepsilon\) no es una variable aleatoria.`
  ],
  correctas: [0],
  explicacion: String.raw`El error aleatorio \(\varepsilon\) tiene media 0 y varianza constante \(\sigma^2\) (homocedasticidad); la varianza no es necesariamente 1.`
},
{
  id: "U5-MC13", unidad: 5, tema: "Supuestos de regresión múltiple", tipo: "multi",
  enunciado: String.raw`¿Cuáles de los siguientes corresponden a supuestos del análisis de regresión lineal múltiple?`,
  opciones: [
    String.raw`Observaciones aleatorias con distribución normal (multivariante).`,
    String.raw`Linealidad en la interrelación de las variables.`,
    String.raw`Varianza de los términos de error constante (homocedasticidad).`,
    String.raw`Los residuos deben hallarse autocorrelacionados.`,
    String.raw`No colinealidad entre las variables independientes.`
  ],
  correctas: [0,1,2,4],
  explicacion: String.raw`Supuestos: observaciones aleatorias/normales, linealidad, homocedasticidad, no colinealidad y residuos \(N(0,\sigma^2)\) NO autocorrelacionados. Por eso "los residuos deben hallarse autocorrelacionados" es falsa (deben ser independientes).`
},
{
  id: "U5-MC14", unidad: 5, tema: "Contraste global (F) y de coeficientes (t)", tipo: "multiple",
  enunciado: String.raw`En la regresión lineal múltiple se realizan dos contrastes. Indicar el enunciado CORRECTO.`,
  opciones: [
    String.raw`El contraste global usa el estadístico F (con \(H_0\): el modelo no se ajusta a los datos) y el de cada coeficiente usa la t de Student (con \(H_0\): el coeficiente es nulo).`,
    String.raw`El contraste global usa la t de Student y el de los coeficientes la F de Fisher.`,
    String.raw`Ambos contrastes usan la distribución normal.`,
    String.raw`El contraste global prueba \(H_0\): el modelo se ajusta a los datos.`
  ],
  correctas: [0],
  explicacion: String.raw`El contraste global del modelo usa la F de Fisher (\(H_0\): el modelo no se ajusta) y el contraste individual de cada coeficiente usa la t de Student (\(H_0\): el coeficiente es nulo). Para un buen modelo se rechazan ambas \(H_0\).`
},
{
  id: "U6-MC11", unidad: 6, tema: "Definición de análisis multivariante", tipo: "multiple",
  enunciado: String.raw`¿Cuál de los siguientes enunciados define correctamente el análisis multivariante?`,
  opciones: [
    String.raw`Conjunto de métodos que analizan simultáneamente tres o más variables medidas en cada individuo.`,
    String.raw`Conjunto de métodos para analizar una sola variable a la vez.`,
    String.raw`Técnica que sólo describe la relación entre dos variables.`,
    String.raw`Procedimiento exclusivamente descriptivo que no admite variables dependientes.`
  ],
  correctas: [0],
  explicacion: String.raw`El análisis multivariante agrupa métodos que analizan simultáneamente datos multidimensionales (tres o más variables por individuo).`
},
{
  id: "U6-MC12", unidad: 6, tema: "Dependencia vs interdependencia", tipo: "multi",
  enunciado: String.raw`Sobre la clasificación de las técnicas multivariantes, indicar la/s afirmación/es correcta/s.`,
  opciones: [
    String.raw`Las técnicas de dependencia (explicativas) investigan si un conjunto de variables independientes afecta a un conjunto de variables dependientes.`,
    String.raw`Las técnicas de interdependencia (descriptivas) se usan cuando no se distingue entre variables dependientes e independientes.`,
    String.raw`En las técnicas de dependencia, las variables dependientes influyen sobre las independientes.`,
    String.raw`El análisis factorial es una técnica de interdependencia.`,
    String.raw`El análisis discriminante es una técnica de dependencia.`
  ],
  correctas: [0,1,3,4],
  explicacion: String.raw`Dependencia: las variables independientes afectan a las dependientes (no al revés → la tercera es falsa). Interdependencia: no se distingue entre dependientes e independientes. El factorial es de interdependencia; el discriminante, de dependencia.`
},
{
  id: "U6-MC13", unidad: 6, tema: "Variables del análisis discriminante", tipo: "multiple",
  enunciado: String.raw`En el análisis discriminante, ¿cómo son las variables dependiente e independientes?`,
  opciones: [
    String.raw`La dependiente es no métrica (categórica) y las independientes son métricas.`,
    String.raw`La dependiente es métrica y las independientes no métricas.`,
    String.raw`Todas las variables son no métricas.`,
    String.raw`Todas las variables son métricas.`
  ],
  correctas: [0],
  explicacion: String.raw`El discriminante clasifica a los individuos en categorías definidas a priori: la variable dependiente es no métrica (categórica) y las independientes son métricas.`
},
{
  id: "U6-MC14", unidad: 6, tema: "Funciones discriminantes y significación", tipo: "multi",
  enunciado: String.raw`Sobre el análisis discriminante, indicar la/s afirmación/es correcta/s.`,
  opciones: [
    String.raw`La función discriminante es una combinación lineal de las variables independientes.`,
    String.raw`Con dos grupos resulta una sola función discriminante (número de grupos menos uno).`,
    String.raw`La magnitud de los coeficientes estandarizados indica la importancia relativa de cada variable.`,
    String.raw`Para contrastar la igualdad de medias entre grupos se usan la \(\lambda\) de Wilks y el F de Fisher.`,
    String.raw`La cantidad de funciones discriminantes es igual al número de grupos.`
  ],
  correctas: [0,1,2,3],
  explicacion: String.raw`La función discriminante es una combinación lineal de las independientes; el número de funciones es grupos \(-\,1\) (con 2 grupos, una sola); los coeficientes estandarizados dan la importancia relativa; se usan la \(\lambda\) de Wilks y el F. Es falsa "igual al número de grupos" (es grupos menos uno).`
},
{
  id: "U6-MC15", unidad: 6, tema: "Comunalidad (análisis factorial)", tipo: "multiple",
  enunciado: String.raw`En el análisis factorial, ¿qué es la comunalidad de una variable?`,
  opciones: [
    String.raw`La proporción de su varianza explicada por los factores comunes; varía entre 0 y 1.`,
    String.raw`La proporción de su varianza NO explicada por los factores.`,
    String.raw`Un valor que puede ser negativo.`,
    String.raw`La varianza total de todos los factores.`
  ],
  correctas: [0],
  explicacion: String.raw`La comunalidad (entre 0 y 1) es la parte de la varianza de una variable explicada por los factores comunes; \(1-\text{comunalidad}\) es la unicidad (factor único).`
},
{
  id: "U6-MC16", unidad: 6, tema: "Rotación Varimax", tipo: "multiple",
  enunciado: String.raw`Respecto de la rotación Varimax en el análisis factorial, indicar el enunciado CORRECTO.`,
  opciones: [
    String.raw`Maximiza la varianza de las cargas factoriales al cuadrado en cada factor (para facilitar la interpretación), sin alterar las comunalidades ni la varianza total explicada.`,
    String.raw`Minimiza la varianza de las cargas en cada factor.`,
    String.raw`Altera las comunalidades de las variables.`,
    String.raw`Cambia el porcentaje total de varianza explicada por el modelo.`
  ],
  correctas: [0],
  explicacion: String.raw`Varimax maximiza la varianza de las cargas al cuadrado en cada factor (interpretación más clara) y NO modifica las comunalidades ni el total de varianza explicada: sólo la redistribuye entre los factores.`
},
{
  id: "U6-MC17", unidad: 6, tema: "Indicadores de adecuación (factorial)", tipo: "multi",
  enunciado: String.raw`¿Cuáles de los siguientes indicadores sugieren que los datos son ADECUADOS para un análisis factorial?`,
  opciones: [
    String.raw`Índice KMO superior a 0,5.`,
    String.raw`Prueba de esfericidad de Bartlett con \(p\lt0{,}05\).`,
    String.raw`Determinante de la matriz de correlaciones próximo a 0.`,
    String.raw`Determinante de la matriz de correlaciones próximo a 1.`,
    String.raw`Coeficientes MSA altos en la diagonal de la matriz anti-imagen.`
  ],
  correctas: [0,1,2,4],
  explicacion: String.raw`Adecuados: KMO \(\gt0{,}5\); Bartlett con \(p\lt0{,}05\) (rechaza la incorrelación); determinante próximo a 0 (alta intercorrelación); y MSA altos. Un determinante próximo a 1 indica poca correlación → inadecuado.`
},
{
  id: "U7-MC5", unidad: 7, tema: "Acción óptima", tipo: "multiple",
  enunciado: String.raw`En la Teoría Bayesiana de la Decisión (caso discreto), ¿cuál es la acción óptima?`,
  opciones: [
    String.raw`La acción \(a_i\) cuya función de ganancia esperada \(G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j)\) es la de mayor valor.`,
    String.raw`La acción de menor ganancia esperada.`,
    String.raw`La acción elegida al azar entre los estados del mundo.`,
    String.raw`La que minimiza las probabilidades a priori.`
  ],
  correctas: [0],
  explicacion: String.raw`La acción óptima es la que MAXIMIZA la ganancia esperada \(G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j)\).`
},
{
  id: "U7-MC6", unidad: 7, tema: "Procedimiento bayesiano", tipo: "multi",
  enunciado: String.raw`Señalar los pasos que forman parte del procedimiento de la Teoría Bayesiana de la Decisión.`,
  opciones: [
    String.raw`Asignación subjetiva de probabilidades sobre los estados del mundo.`,
    String.raw`Cálculo de las funciones de ganancia a partir de la matriz de consecuencias y esas probabilidades.`,
    String.raw`Si hay evidencia experimental, recálculo de las ganancias con la distribución a priori actualizada por la evidencia.`,
    String.raw`Elección de la acción cuya función de ganancia es óptima (mayor valor).`,
    String.raw`Asignación de probabilidades objetivas determinadas únicamente por la frecuencia.`
  ],
  correctas: [0,1,2,3],
  explicacion: String.raw`Los pasos son: (1) probabilidades subjetivas a priori, (2) ganancias con la matriz de consecuencias, (3) actualización con la evidencia experimental, (4) elegir la acción de ganancia óptima. Las probabilidades son SUBJETIVAS, no objetivas (la última opción es falsa).`
},
{
  id: "U7-MC7", unidad: 7, tema: "Inferencia vs decisión bayesiana", tipo: "multiple",
  enunciado: String.raw`En el enfoque bayesiano, ¿cuál es la diferencia entre inferencia y decisión?`,
  opciones: [
    String.raw`La inferencia bayesiana describe cuantitativamente la información que aporta la evidencia ante un hecho desconocido; la teoría de la decisión se ocupa de elegir entre cursos de acción.`,
    String.raw`Son lo mismo: ambas terminan siempre en una decisión.`,
    String.raw`La inferencia recomienda decisiones y la decisión sólo describe información.`,
    String.raw`Ninguna de las dos utiliza el Teorema de Bayes.`
  ],
  correctas: [0],
  explicacion: String.raw`La inferencia bayesiana describe la información que aporta la evidencia sobre un hecho desconocido; la teoría bayesiana de la decisión se ocupa de decidir entre cursos de acción (eventualmente tras acceder a la evidencia).`
},
{
  id: "U7-MC8", unidad: 7, tema: "Objeciones al enfoque bayesiano", tipo: "multi",
  enunciado: String.raw`Respecto de las objeciones al enfoque bayesiano, indicar la/s afirmación/es correcta/s.`,
  opciones: [
    String.raw`Las objeciones filosóficas nacen de la negación de las probabilidades subjetivas.`,
    String.raw`Una objeción práctica es que la decisión "óptima" depende de la distribución a priori, por lo que personas con distribuciones distintas llegarían a decisiones distintas.`,
    String.raw`Que dos personas con información diferente lleguen a decisiones diferentes es razonable y no constituye una objeción de peso (respuesta bayesiana).`,
    String.raw`La distribución subjetiva invalida totalmente el método.`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Las objeciones son filosóficas (negación de las probabilidades subjetivas) y prácticas (la decisión depende de la a priori; la función de consecuencias es compleja). Los bayesianos responden que llegar a decisiones distintas por información distinta es razonable; NO invalida totalmente el método (la última es falsa).`
},
{
  id: "U7-MC9", unidad: 7, tema: "Paralelo clásico-bayesiano", tipo: "multiple",
  enunciado: String.raw`Sobre el paralelo entre los métodos clásicos y bayesianos, indicar el enunciado CORRECTO.`,
  opciones: [
    String.raw`En estimación por intervalos, clásicos y bayesianos suelen llegar a las mismas respuestas numéricas si la distribución a priori es indeterminada; la diferencia es de interpretación.`,
    String.raw`El enfoque clásico concede máxima importancia a recomendar una decisión.`,
    String.raw`El enfoque bayesiano nunca coincide numéricamente con el clásico.`,
    String.raw`En pruebas de bondad de ajuste (sin decisiones), el enfoque bayesiano es el más apropiado.`
  ],
  correctas: [0],
  explicacion: String.raw`Con una a priori indeterminada, clásico y bayesiano suelen coincidir en los números (difieren en la interpretación). El clásico EXCLUYE recomendar decisiones; y si el problema no involucra decisiones (p.ej. bondad de ajuste) no es tratable desde el punto de vista bayesiano.`
},

/* ===== EXAMEN U4-U7 (transcripción de fotos · respuestas según la teoría del profe) ===== */

{
  id: "U4-MC11", unidad: 4, tema: "Pruebas no paramétricas (correctas)", tipo: "multi",
  enunciado: String.raw`En las siguientes afirmaciones sobre pruebas de hipótesis no paramétricas, indicar la/s que considere correcta/s.`,
  opciones: [
    String.raw`Una opción para contrastar si dos muestras con datos dependientes proceden de poblaciones con la misma distribución la constituye la prueba de rachas de Wald-Wolfowitz.`,
    String.raw`Mediante la prueba T de Wilcoxon es posible contrastar la \(H_0\) de no existencia de diferencias significativas entre dos muestras con datos relacionados.`,
    String.raw`La prueba de los signos es más potente que la de Wilcoxon ya que tiene en cuenta la magnitud de las diferencias a través de los rangos; por el contrario, la segunda solo tiene en cuenta el signo de las diferencias entre pares.`,
    String.raw`La prueba H de Kruskal-Wallis es una extensión de la U de Mann-Whitney para el supuesto de tener que analizar tres o más grupos de observaciones no relacionadas.`,
    String.raw`La \(H_0\) en la prueba H de Kruskal-Wallis hace referencia a la no existencia de diferencias significativas entre los grupos participantes en el contraste.`
  ],
  correctas: [1,3,4],
  explicacion: String.raw`Correctas b, d y e. a) Wald-Wolfowitz es para muestras INDEPENDIENTES (no dependientes); c) está invertida: la prueba de los signos usa sólo el signo y es MENOS potente que Wilcoxon, que es la que incorpora la magnitud mediante los rangos.`
},
{
  id: "U4-MC12", unidad: 4, tema: "Varias muestras (incorrectas)", tipo: "multi",
  enunciado: String.raw`En el contexto de pruebas de hipótesis no paramétricas para varias muestras, señalar la/s opción/es incorrecta/s.`,
  opciones: [
    String.raw`El estadístico H de Kruskal-Wallis sigue una distribución \(\chi^2\) bajo la \(H_0\) de que los grupos que participan en el estudio NO siguen la misma distribución.`,
    String.raw`La prueba \(\chi^2\) de Friedman es una generalización de las pruebas de Wilcoxon y de los Signos, aplicable cuando se debe analizar más de dos variables relacionadas.`,
    String.raw`Cuanto más distintos sean los promedios, más probable es que sea verdadera la \(H_0\) de inexistencia de diferencia significativa en la prueba de Friedman.`,
    String.raw`Cuanto más semejantes sean las medias, más probable es que no se deba rechazar la \(H_0\) de la prueba \(\chi^2\) de Friedman.`,
    String.raw`La prueba W de Kendall analiza la concordancia entre los resultados de los casos en las distintas variables; se trata de una prueba de comparación más que de relación.`
  ],
  correctas: [0,2,4],
  explicacion: String.raw`Incorrectas a, c y e. a) el estadístico H sigue \(\chi^2\) bajo la \(H_0\) de que los grupos SÍ siguen la misma distribución; c) cuanto más distintos los promedios, MENOS probable que la \(H_0\) de no diferencia sea verdadera; e) Kendall es una prueba de RELACIÓN (concordancia), no de comparación.`
},
{
  id: "U5-MC15", unidad: 5, tema: "Supuestos de correlación (incorrectos)", tipo: "multi",
  enunciado: String.raw`¿Cuál/es de los siguientes supuestos básicos son incorrectos en el análisis de correlación lineal?`,
  opciones: [
    String.raw`Observaciones aleatorias y cuantitativas.`,
    String.raw`Homocedasticidad.`,
    String.raw`Independencia de las observaciones.`,
    String.raw`Linealidad en la interrelación de las variables.`,
    String.raw`Observaciones no aleatorias y cualitativas.`
  ],
  correctas: [4],
  explicacion: String.raw`Incorrecto el supuesto e: las observaciones deben ser ALEATORIAS y CUANTITATIVAS (no "no aleatorias y cualitativas"). Los otros cuatro —aleatorias y cuantitativas, homocedasticidad, independencia y linealidad— sí son supuestos de la correlación lineal.`
},
{
  id: "U5-MC16", unidad: 5, tema: "Intensidad de la correlación", tipo: "multi",
  enunciado: String.raw`¿En qué rango de valores se debería encontrar el coeficiente \(r\) de Pearson para que la intensidad de la relación se considere «correlación moderada»?`,
  opciones: [
    String.raw`\(0{,}4\lt r\lt 0{,}5\)`,
    String.raw`\(0{,}5\lt r\lt 0{,}7\)`,
    String.raw`\(-0{,}6\lt r\lt -0{,}4\)`,
    String.raw`\(-0{,}5\lt r\lt -0{,}3\)`,
    String.raw`\(0{,}5\lt r\lt 0{,}6\)`
  ],
  correctas: [0,2,4],
  explicacion: String.raw`La correlación moderada corresponde a \(0{,}4\lt |r|\lt 0{,}6\). Cumplen: a \((0{,}4\text{–}0{,}5)\), c \((|r|\,0{,}4\text{–}0{,}6)\) y e \((0{,}5\text{–}0{,}6)\). No cumplen: b \((0{,}5\text{–}0{,}7)\) entra en la zona alta, y d \((|r|\,0{,}3\text{–}0{,}5)\) entra en la zona baja.`
},
{
  id: "U5-MC17", unidad: 5, tema: "Coeficiente de determinación (incorrectas)", tipo: "multi",
  enunciado: String.raw`Seleccionar la/s afirmación/es incorrecta/s para el coeficiente de determinación \(R^2\) en un modelo de regresión lineal múltiple.`,
  opciones: [
    String.raw`Evalúa el grado de asociación o relación que presentan las variables que se analizan.`,
    String.raw`Su valor puede variar entre 0 y 1.`,
    String.raw`Brinda una idea acerca de la dirección de la relación, así como sobre su intensidad.`,
    String.raw`Indica el sentido del grado de ajuste entre el modelo y los datos de la muestra.`,
    String.raw`Cuantifica en qué medida la variable dependiente es explicada por el modelo.`
  ],
  correctas: [0,2,3],
  explicacion: String.raw`Incorrectas a, c y d. a) evaluar el grado de "asociación o relación" es propio del coeficiente de correlación \(r\), no de \(R^2\); c) y d) \(R^2\) NO indica dirección ni sentido (siempre es positivo). Correctas: b) \(R^2\in[0,1]\) y e) cuantifica la proporción de variabilidad de \(Y\) explicada por el modelo.`
},
{
  id: "U5-MC18", unidad: 5, tema: "Hipótesis nula en regresión", tipo: "multi",
  enunciado: String.raw`En el análisis de regresión lineal múltiple, ¿cuál/es de las siguientes afirmaciones NO está/n vinculada/s con la \(H_0\)?`,
  opciones: [
    String.raw`El modelo se ajusta a los datos.`,
    String.raw`El modelo no se ajusta a los datos.`,
    String.raw`El modelo no es útil para explicar los datos.`,
    String.raw`Existen algunos coeficientes del modelo no nulos.`,
    String.raw`Los coeficientes del modelo no son todos nulos.`
  ],
  correctas: [0,3,4],
  explicacion: String.raw`No están vinculadas con la \(H_0\) (son enunciados de \(H_1\)): a) "el modelo se ajusta", d) "existen coeficientes no nulos" y e) "los coeficientes no son todos nulos". La \(H_0\) plantea que el modelo NO se ajusta / NO es útil (b, c) y que los coeficientes son nulos.`
},
{
  id: "U6-MC18", unidad: 6, tema: "Fases del análisis factorial", tipo: "multi",
  enunciado: String.raw`Indicar la/s fase/s del análisis factorial que estime correcta/s.`,
  opciones: [
    String.raw`Cálculo de una matriz capaz de expresar la variabilidad conjunta de todas las variables.`,
    String.raw`Extracción de un número óptimo de factores comunes.`,
    String.raw`Determinación de estadísticos descriptivos de las variables latentes.`,
    String.raw`Rotación de la solución para facilitar su descripción.`,
    String.raw`Estimación de las puntuaciones de los sujetos en las nuevas dimensiones.`
  ],
  correctas: [0,1,3,4],
  explicacion: String.raw`Las fases son: (a) cálculo de la matriz, (b) extracción de factores, (d) rotación y (e) estimación de puntuaciones. La opción c es falsa: las variables LATENTES (factores) no se observan, no se calculan estadísticos descriptivos de ellas.`
},
{
  id: "U6-MC19", unidad: 6, tema: "Utilidad principal del factorial", tipo: "multi",
  enunciado: String.raw`¿Qué opción/es de las siguientes corresponde/n a una utilidad principal del análisis factorial?`,
  opciones: [
    String.raw`Reducción de información.`,
    String.raw`Las variables observables cumplen el mismo papel y se consideran independientes.`,
    String.raw`Identificación de estructuras subyacentes.`,
    String.raw`Proporciona indicadores que sugieren la ejecución de la técnica.`,
    String.raw`Paso intermedio en la obtención de nuevas variables intercorrelacionadas.`
  ],
  correctas: [0,2,4],
  explicacion: String.raw`Utilidades principales: a) reducción de información, c) identificación de estructuras subyacentes (factores comunes) y e) paso intermedio para obtener nuevas variables (intercorrelacionadas, según la cátedra). b) y d) no son utilidades principales.`
},
{
  id: "U6-MC20", unidad: 6, tema: "Indicadores de adecuación del factorial", tipo: "multi",
  enunciado: String.raw`¿Qué ítem/s hace/n referencia a indicadores que resultan adecuados para llevar a cabo un análisis factorial?`,
  opciones: [
    String.raw`Determinante de la matriz de correlaciones relativamente bajo.`,
    String.raw`Índice Kaiser-Meyer-Olkin con un valor próximo a uno.`,
    String.raw`Prueba de esfericidad de Bartlett: valor alto del estadístico \(\chi^2\) y valor \(p\) bajo.`,
    String.raw`Valores altos por fuera de la diagonal principal en las matrices anti-imagen.`,
    String.raw`Coeficientes MSA bajos en la diagonal de la matriz anti-imagen de correlaciones.`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Adecuados: a) determinante bajo (próximo a 0 → alta intercorrelación), b) KMO próximo a 1 y c) Bartlett con \(\chi^2\) alto y \(p\) bajo (rechaza la incorrelación). Inadecuados: d) valores altos fuera de la diagonal anti-imagen y e) MSA bajos (se buscan MSA altos).`
},
{
  id: "U6-MC21", unidad: 6, tema: "Aplicación del factorial (verdaderas)", tipo: "multi",
  enunciado: String.raw`Las apreciaciones siguientes se vinculan con la aplicación del análisis factorial; seleccionar la/s que expresa/n una opción verdadera.`,
  opciones: [
    String.raw`Las comunalidades indican la medida en que los factores comunes son capaces de explicar las variables originales.`,
    String.raw`La comunalidad oscila entre \(-1\) y \(1\), y la parte de varianza no explicada por el modelo se conoce como unicidad.`,
    String.raw`Si un autovalor es mayor que 1, su respectivo factor es capaz de explicar una cantidad relevante de varianza.`,
    String.raw`La rotación Varimax posibilita que cada variable se encuentre saturada en más de un factor.`,
    String.raw`Al aplicar el método de rotación, el modelo factorial se mantiene inalterable respecto de la estructura no rotada.`
  ],
  correctas: [0,2],
  explicacion: String.raw`Verdaderas a y c. b) es falsa: la comunalidad oscila entre 0 y 1 (no entre \(-1\) y 1). d) falsa: Varimax busca que cada variable cargue alto en UN solo factor, no en más de uno. e) falsa: la rotación cambia el patrón de cargas (aunque conserva comunalidades y varianza total explicada).`
},
{
  id: "U7-MC10", unidad: 7, tema: "Ideas de la Inferencia Bayesiana", tipo: "multi",
  enunciado: String.raw`Los siguientes enunciados sintetizan las ideas en que se basan los métodos de Inferencia Bayesiana; seleccionar la/s correcta/s.`,
  opciones: [
    String.raw`Describe en forma cuantitativa la información que aporta una cierta evidencia experimental ante un hecho desconocido.`,
    String.raw`Cualquier incertidumbre respecto de cierto hecho o valor puede describirse mediante probabilidades subjetivas asignadas a las distintas alternativas posibles.`,
    String.raw`Es sencillo, por lo general, establecer las probabilidades de los posibles resultados experimentales, condicionadas a los hechos o valores desconocidos.`,
    String.raw`Dado un resultado experimental específico, una aplicación del Teorema de Bayes brinda las probabilidades —objetivas, aunque afectadas por la evidencia experimental— que deben atribuirse a las diversas alternativas.`,
    String.raw`Las probabilidades a priori constituyen el producto final de la Inferencia Bayesiana.`
  ],
  correctas: [0,1,2],
  explicacion: String.raw`Correctas a, b y c. d) es falsa: el Teorema de Bayes brinda probabilidades SUBJETIVAS (no objetivas) afectadas por la evidencia. e) es falsa: el producto final son las probabilidades a POSTERIORI, no las a priori.`
},
{
  id: "U7-MC11", unidad: 7, tema: "Teoría Bayesiana de la Decisión (falsos)", tipo: "multi",
  enunciado: String.raw`En el marco de la Teoría Bayesiana de la Decisión, marcar la/s opción/es que corresponda/n a un enunciado falso.`,
  opciones: [
    String.raw`El enfoque Bayesiano concede máxima importancia al problema de recomendar una decisión, vinculándolo con la inferencia o el cálculo de distribuciones posteriores.`,
    String.raw`En el procedimiento para tomar una decisión de manera óptima se efectúa una asignación objetiva de probabilidades sobre los estados del mundo (variable aleatoria).`,
    String.raw`La matriz de consecuencias se define a partir de las funciones de ganancia y la asignación subjetiva de probabilidades.`,
    String.raw`En el caso de variable continua, el valor esperado de la ganancia se calcula mediante la expresión \(G_i=\sum_j u_{ij}\,g_{\tilde{e}}(e_j)\).`,
    String.raw`Se elige el índice \(i\) que corresponde a un mayor valor de \(G_i\); la acción que maximice ese valor esperado es la acción óptima.`
  ],
  correctas: [1,2,3],
  explicacion: String.raw`Falsos b, c y d. b) la asignación de probabilidades es SUBJETIVA, no objetiva. c) está invertida: la función de ganancia se calcula A PARTIR de la matriz de consecuencias y las probabilidades, no al revés. d) esa fórmula con sumatoria es el caso DISCRETO (en el continuo se usa una integral). Verdaderas a y e.`
}

];

// Exponer para el navegador
if (typeof window !== "undefined") { window.PREGUNTAS = PREGUNTAS; }
