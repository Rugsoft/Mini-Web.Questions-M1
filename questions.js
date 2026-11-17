const QUESTIONS_BANK = [
  // ==================== UF1841 (1 - 20) ====================
  {
    id: 1,
    uf: "UF1841",
    question: "¿Qué elemento HTML5 identifica el contenido principal y único de una página web?",
    options: [
      "&lt;header&gt;",
      "&lt;main&gt;",
      "&lt;footer&gt;",
      "&lt;nav&gt;"
    ],
    correct: 1,
    explanation: "La etiqueta <main> envuelve el contenido principal del documento, diferenciándolo de la cabecera (<header>), la navegación (<nav>) y el pie (<footer>)."
  },
  {
    id: 2,
    uf: "UF1841",
    question: "¿Para qué sirve principalmente una hoja de estilos CSS?",
    options: [
      "Para guardar los datos de los formularios",
      "Para definir el aspecto visual y la presentación de la página",
      "Para crear la estructura semántica del contenido",
      "Para validar contraseñas en el servidor"
    ],
    correct: 1,
    explanation: "HTML define la estructura y el significado del contenido, mientras que CSS define la presentación visual (colores, fuentes, márgenes y diseño)."
  },
  {
    id: 3,
    uf: "UF1841",
    question: "Queremos enlazar un texto con otra página web. ¿Qué etiqueta HTML debemos utilizar?",
    options: [
      "&lt;a&gt;",
      "&lt;link&gt;",
      "&lt;nav&gt;",
      "&lt;src&gt;"
    ],
    correct: 0,
    explanation: "La etiqueta <a> con el atributo href crea enlaces clicables hacia otras páginas o secciones; <link> se usa en <head> para enlazar recursos como CSS."
  },
  {
    id: 4,
    uf: "UF1841",
    question: "En un formulario HTML, ¿qué atributo de un <code>&lt;input&gt;</code> indica el nombre con el que se enviará su dato?",
    options: [
      "id",
      "class",
      "placeholder",
      "name"
    ],
    correct: 3,
    explanation: "El atributo name identifica el dato cuando se envía el formulario (y también agrupa los botones de tipo radio)."
  },
  {
    id: 5,
    uf: "UF1841",
    question: "¿Qué estructura HTML describe mejor una página con varias secciones?",
    options: [
      "Usar &lt;div&gt; para absolutamente todos los elementos",
      "Usar encabezados (&lt;h1&gt;–&lt;h6&gt;) y etiquetas semánticas según la función de cada bloque",
      "Colocar todo el contenido visible dentro de &lt;head&gt;",
      "Usar una &lt;table&gt; para maquetar toda la página"
    ],
    correct: 1,
    explanation: "Combinar encabezados jerárquicos con etiquetas semánticas (<header>, <nav>, <main>, <footer>) facilita la lectura a navegadores, buscadores y lectores de pantalla."
  },
  {
    id: 6,
    uf: "UF1841",
    question: "¿Qué selector CSS aplica un estilo a todos los elementos que tengan <code>class=\"aviso\"</code>?",
    options: [
      "#aviso",
      "aviso",
      ".aviso",
      "*aviso"
    ],
    correct: 2,
    explanation: "En CSS, el punto (.) selecciona clases (.aviso), mientras que la almohadilla (#) selecciona un id único (#aviso)."
  },
  {
    id: 7,
    uf: "UF1841",
    question: "¿Qué función cumple la etiqueta <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code>?",
    options: [
      "Adapta la visualización de la página al ancho real del dispositivo",
      "Convierte todas las imágenes a formato SVG",
      "Bloquea el uso de CSS en ordenadores",
      "Sustituye por completo a las media queries"
    ],
    correct: 0,
    explanation: "Sin esta etiqueta, los móviles simulan una pantalla de escritorio (~980px) y reducen la página haciendo que todo se vea diminuto."
  },
  {
    id: 8,
    uf: "UF1841",
    question: "¿Cuál de las siguientes declaraciones debe aparecer obligatoriamente al principio de un documento HTML5?",
    options: [
      "&lt;meta charset=\"HTML5\"&gt;",
      "&lt;!DOCTYPE html&gt;",
      "&lt;html version=\"5\"&gt;",
      "&lt;body start&gt;"
    ],
    correct: 1,
    explanation: "<!DOCTYPE html> indica al navegador que debe interpretar el documento según el estándar HTML5."
  },
  {
    id: 9,
    uf: "UF1841",
    question: "¿Para qué se deben utilizar las tablas HTML (<code>&lt;table&gt;</code>)?",
    options: [
      "Para organizar datos tabulares en filas y columnas, como horarios o listados",
      "Para centrar el menú principal de la web",
      "Para dividir la página en cabecera, contenido y pie",
      "Para sustituir a Flexbox y CSS Grid"
    ],
    correct: 0,
    explanation: "Las tablas solo deben usarse para mostrar datos tabulares, nunca para maquetar el diseño general de una página."
  },
  {
    id: 10,
    uf: "UF1841",
    question: "Queremos insertar una imagen y que no se deforme al cambiar su tamaño. ¿Qué es lo más recomendable?",
    options: [
      "Definir solo el width y dejar height: auto",
      "Poner siempre width: 100px y height: 500px",
      "Eliminar el atributo alt",
      "Usar la etiqueta &lt;table&gt; alrededor de la imagen"
    ],
    correct: 0,
    explanation: "Si fijas solo la anchura y dejas height: auto, el navegador mantiene automáticamente la proporción original (aspect ratio)."
  },
  {
    id: 11,
    uf: "UF1841",
    question: "¿Cuál es la forma más profesional y mantenible de aplicar estilos CSS en un sitio web con varias páginas?",
    options: [
      "Escribir style=\"...\" en cada etiqueta HTML",
      "Enlazar un archivo .css externo desde el &lt;head&gt; con &lt;link&gt;",
      "Repetir una etiqueta &lt;style&gt; al final de cada párrafo",
      "Usar atributos HTML antiguos como bgcolor"
    ],
    correct: 1,
    explanation: "Una hoja CSS externa enlazada con <link rel=\"stylesheet\" href=\"...\"> permite controlar el diseño de todo el sitio desde un único archivo."
  },
  {
    id: 12,
    uf: "UF1841",
    question: "En CSS, ¿qué es la «cascada» cuando varias reglas afectan al mismo elemento y propiedad?",
    options: [
      "Un error que borra todos los estilos de la página",
      "El sistema por el cual el navegador decide qué regla gana según prioridad, especificidad y orden",
      "Una animación que hace caer el texto hacia abajo",
      "Un método para comprimir imágenes"
    ],
    correct: 1,
    explanation: "La cascada determina qué estilo se aplica finalmente según su origen (inline, interno, externo), su especificidad y el orden en que aparece."
  },
  {
    id: 13,
    uf: "UF1841",
    question: "Queremos que un enlace (<code>&lt;a&gt;</code>) parezca un botón con relleno (<code>padding</code>) y bordes redondeados sin ocupar todo el ancho de la pantalla. ¿Qué <code>display</code> conviene usar?",
    options: [
      "display: none",
      "display: inline-block",
      "display: table",
      "display: hidden"
    ],
    correct: 1,
    explanation: "display: inline-block mantiene el elemento en línea pero permite darle padding, ancho y alto como un bloque."
  },
  {
    id: 14,
    uf: "UF1841",
    question: "En el modelo de caja (Box Model) de CSS, ¿qué propiedad controla el espacio <strong>interior</strong> entre el contenido y el borde?",
    options: [
      "margin",
      "padding",
      "outline",
      "gap"
    ],
    correct: 1,
    explanation: "padding es el espacio interior entre el contenido y el borde; margin es el espacio exterior que separa la caja de otros elementos."
  },
  {
    id: 15,
    uf: "UF1841",
    question: "¿Qué efecto tiene la pseudo-clase <code>:hover</code> en CSS?",
    options: [
      "Oculta el elemento al cargar la página",
      "Aplica un estilo cuando el usuario pasa el cursor por encima del elemento",
      "Solo funciona en dispositivos móviles sin ratón",
      "Cambia el texto del HTML permanentemente"
    ],
    correct: 1,
    explanation: ":hover permite dar respuesta visual interactiva (por ejemplo, cambiar el color de un botón) cuando el puntero está encima."
  },
  {
    id: 16,
    uf: "UF1841",
    question: "¿Para qué sirve principalmente <strong>Flexbox</strong> (<code>display: flex</code>)?",
    options: [
      "Para alinear y distribuir elementos en una sola dirección (fila o columna)",
      "Para crear bases de datos en el navegador",
      "Para sustituir las etiquetas semánticas de HTML",
      "Para validar formularios sin JavaScript"
    ],
    correct: 0,
    explanation: "Flexbox está pensado para maquetación unidimensional (una fila o una columna), ideal para menús, barras y alineación de componentes."
  },
  {
    id: 17,
    uf: "UF1841",
    question: "Dentro de un contenedor Flexbox en fila, ¿qué propiedad centra los elementos horizontalmente en el eje principal?",
    options: [
      "justify-content: center",
      "text-decoration: none",
      "position: fixed",
      "margin: 0"
    ],
    correct: 0,
    explanation: "justify-content controla la alineación en el eje principal (horizontal cuando flex-direction es row)."
  },
  {
    id: 18,
    uf: "UF1841",
    question: "¿Cuándo conviene elegir <strong>CSS Grid</strong> frente a Flexbox?",
    options: [
      "Cuando solo necesitamos centrar un botón",
      "Cuando necesitamos organizar un diseño bidimensional controlando filas y columnas a la vez",
      "Cuando no queremos usar un archivo CSS",
      "Solo para listas numeradas"
    ],
    correct: 1,
    explanation: "CSS Grid es bidimensional: permite definir filas, columnas y áreas de página al mismo tiempo."
  },
  {
    id: 19,
    uf: "UF1841",
    question: "¿Qué valor de <code>position</code> mantiene una barra o botón fijo en la ventana del navegador aunque hagamos scroll?",
    options: [
      "position: static",
      "position: fixed",
      "position: inline",
      "position: block"
    ],
    correct: 1,
    explanation: "position: fixed fija el elemento respecto a la ventana del navegador (viewport), por lo que permanece visible al desplazarse."
  },
  {
    id: 20,
    uf: "UF1841",
    question: "¿Por qué se recomienda usar unidades relativas como <code>rem</code> o <code>%</code> en diseño responsive?",
    options: [
      "Porque se adaptan mejor a distintos tamaños de pantalla y preferencias de texto del usuario",
      "Porque los píxeles están prohibidos en HTML5",
      "Porque hacen que la web no necesite CSS",
      "Porque solo funcionan en pantallas de 4K"
    ],
    correct: 0,
    explanation: "Las unidades relativas (%, rem, em, vw, vh) permiten diseños fluidos que escalan correctamente en móviles, tabletas y escritorios."
  },

  // ==================== UF1842 (21 - 40) ====================
  {
    id: 21,
    uf: "UF1842",
    question: "¿Qué método de JavaScript selecciona el <strong>primer</strong> elemento del DOM que coincide con un selector CSS?",
    options: [
      "addEventListener()",
      "createElement()",
      "querySelector()",
      "setAttribute()"
    ],
    correct: 2,
    explanation: "document.querySelector() devuelve el primer elemento que coincide con el selector CSS indicado (o null si no existe)."
  },
  {
    id: 22,
    uf: "UF1842",
    question: "Si queremos ejecutar una función cuando el usuario pulsa un botón, ¿qué evento escuchamos normalmente?",
    options: [
      "load",
      "click",
      "submit",
      "change"
    ],
    correct: 1,
    explanation: "El evento click se dispara al pulsar un botón u otro elemento interactivo."
  },
  {
    id: 23,
    uf: "UF1842",
    question: "¿Qué ventaja tiene crear una función para una tarea que se repite varias veces en nuestro código?",
    options: [
      "Elimina la necesidad de probar el programa",
      "Hace que JavaScript se ejecute en la base de datos",
      "Impide que otros archivos usen ese código",
      "Permite reutilizar la lógica y mantenerla en un único lugar"
    ],
    correct: 3,
    explanation: "Agrupar tareas repetitivas en funciones evita duplicar código y facilita corregirlo o ampliarlo desde un solo sitio."
  },
  {
    id: 24,
    uf: "UF1842",
    question: "¿Cuál de estas expresiones convierte un texto JSON válido en un objeto o array de JavaScript?",
    options: [
      "JSON.parse(texto)",
      "JSON.stringify(texto)",
      "document.parse(texto)",
      "Object.toJSON(texto)"
    ],
    correct: 0,
    explanation: "JSON.parse() transforma una cadena JSON en datos de JavaScript; JSON.stringify() hace el proceso inverso (de objeto a texto)."
  },
  {
    id: 25,
    uf: "UF1842",
    question: "Un formulario debe comprobar un dato antes de enviarse. ¿Qué afirmación es correcta?",
    options: [
      "La validación con JavaScript sustituye siempre a la del servidor",
      "Basta con ocultar el botón de envío si el dato es erróneo",
      "JavaScript ofrece respuesta inmediata al usuario, pero el servidor también debe validar",
      "HTML no permite ninguna validación inicial"
    ],
    correct: 2,
    explanation: "La validación en cliente mejora la experiencia dando aviso inmediato, pero nunca sustituye a la validación en servidor por seguridad."
  },
  {
    id: 26,
    uf: "UF1842",
    question: "¿Qué propiedad podemos modificar para cambiar el texto visible de un elemento sin interpretar etiquetas HTML?",
    options: [
      "innerHTML",
      "textContent",
      "styleSheet",
      "datasetHTML"
    ],
    correct: 1,
    explanation: "textContent inserta texto plano de forma segura, mientras que innerHTML interpreta cualquier etiqueta HTML que contenga la cadena."
  },
  {
    id: 27,
    uf: "UF1842",
    question: "En una página con un reproductor <code>&lt;video&gt;</code> o <code>&lt;audio&gt;</code>, ¿qué permite hacer JavaScript?",
    options: [
      "Convertir cualquier vídeo en libre de derechos",
      "Traducir automáticamente todos los diálogos",
      "Evitar que el navegador descargue archivos",
      "Responder a eventos y controlar acciones como reproducir o pausar"
    ],
    correct: 3,
    explanation: "JavaScript permite controlar la reproducción (.play(), .pause(), volumen, tiempo actual) y reaccionar a eventos como timeupdate o ended."
  },
  {
    id: 28,
    uf: "UF1842",
    question: "¿Qué método se llama dentro del evento <code>submit</code> de un formulario para evitar que la página se recargue?",
    options: [
      "event.preventDefault()",
      "form.reload()",
      "window.alert()",
      "event.clear()"
    ],
    correct: 0,
    explanation: "event.preventDefault() detiene el envío tradicional del formulario para poder validarlo o procesarlo con JavaScript."
  },
  {
    id: 29,
    uf: "UF1842",
    question: "¿Qué hace el método <code>.trim()</code> aplicado al valor de un campo de texto (<code>input.value.trim()</code>)?",
    options: [
      "Convierte el texto a mayúsculas",
      "Elimina los espacios en blanco al principio y al final del texto",
      "Corta el texto a un máximo de 10 caracteres",
      "Borra todas las vocales del campo"
    ],
    correct: 1,
    explanation: "trim() limpia espacios sobrantes al inicio y al final, evitando que un campo con solo espacios pase por válido."
  },
  {
    id: 30,
    uf: "UF1842",
    question: "¿Para qué sirven las expresiones regulares (RegEx) con el método <code>.test()</code> en un formulario?",
    options: [
      "Para cambiar el color de fondo del formulario",
      "Para comprobar si un texto cumple un patrón, como un correo, teléfono o DNI",
      "Para guardar los datos en localStorage",
      "Para animar los botones al hacer clic"
    ],
    correct: 1,
    explanation: "patron.test(texto) devuelve true o false según si la cadena encaja con el formato esperado."
  },
  {
    id: 31,
    uf: "UF1842",
    question: "¿Cuál es la práctica recomendada para declarar variables que NO van a reasignarse en JavaScript?",
    options: [
      "Usar const",
      "Usar var",
      "No declarar la variable",
      "Usar style"
    ],
    correct: 0,
    explanation: "Se recomienda usar const por defecto y let cuando el valor deba cambiar, evitando var por sus problemas de ámbito."
  },
  {
    id: 32,
    uf: "UF1842",
    question: "¿Cuál es la ventaja de usar el operador de igualdad estricta <code>===</code> en lugar de <code>==</code>?",
    options: [
      "Compara tanto el valor como el tipo de dato, evitando conversiones automáticas inesperadas",
      "Solo funciona con cadenas de texto",
      "Asigna un valor nuevo a la variable",
      "Hace que el código se ejecute en CSS"
    ],
    correct: 0,
    explanation: "=== exige que ambos operandos tengan el mismo valor y el mismo tipo (por ejemplo, 5 === \"5\" es false)."
  },
  {
    id: 33,
    uf: "UF1842",
    question: "¿Dónde conviene enlazar nuestro archivo <code>&lt;script src=\"app.js\"&gt;</code> para que pueda acceder sin problemas a los elementos HTML?",
    options: [
      "Al final del &lt;body&gt; o en el &lt;head&gt; con el atributo defer",
      "Dentro de una etiqueta &lt;p&gt;",
      "Dentro del archivo .css",
      "Antes de &lt;!DOCTYPE html&gt;"
    ],
    correct: 0,
    explanation: "Colocar el script antes de </body> o usar defer en <head> garantiza que el DOM ya esté cargado cuando se ejecute el JS."
  },
  {
    id: 34,
    uf: "UF1842",
    question: "¿Para qué sirve <code>localStorage</code> en el navegador?",
    options: [
      "Para guardar datos en el navegador del usuario de forma persistente aunque recargue o cierre la pestaña",
      "Para almacenar contraseñas en un servidor remoto",
      "Para compilar archivos HTML en PDF",
      "Para sustituir las hojas de estilo CSS"
    ],
    correct: 0,
    explanation: "localStorage guarda pares clave-valor en texto dentro del navegador del usuario y persiste entre recargas."
  },
  {
    id: 35,
    uf: "UF1842",
    question: "Si queremos guardar un array de objetos en <code>localStorage</code>, ¿qué paso es necesario?",
    options: [
      "Convertirlo primero a texto con JSON.stringify()",
      "Pasarlo por console.log() antes de guardarlo",
      "Cambiarle la extensión a .html",
      "Guardarlo directamente sin convertirlo"
    ],
    correct: 0,
    explanation: "localStorage solo almacena strings; sin JSON.stringify() un objeto se guarda como \"[object Object]\"."
  },
  {
    id: 36,
    uf: "UF1842",
    question: "Queremos buscar el <strong>primer</strong> producto cuyo id coincida dentro de un array de objetos. ¿Qué método de array es el más directo?",
    options: [
      "find()",
      "join()",
      "push()",
      "split()"
    ],
    correct: 0,
    explanation: "find() recorre el array y devuelve el primer elemento que cumple la condición (o undefined si no hay coincidencias)."
  },
  {
    id: 37,
    uf: "UF1842",
    question: "¿Qué hace el método <code>filter()</code> sobre un array?",
    options: [
      "Elimina el primer elemento del array original",
      "Devuelve un nuevo array con todos los elementos que cumplen una condición",
      "Convierte el array en un número entero",
      "Ordena alfabéticamente las palabras"
    ],
    correct: 1,
    explanation: "filter() crea un nuevo array con todas las coincidencias sin modificar el array original."
  },
  {
    id: 38,
    uf: "UF1842",
    question: "Dentro de un evento, ¿qué diferencia hay entre <code>e.target</code> y <code>e.currentTarget</code>?",
    options: [
      "e.target es el elemento exacto donde se hizo clic y e.currentTarget es el elemento que tiene el addEventListener",
      "Son exactamente lo mismo en cualquier situación",
      "e.target solo sirve para teclado y e.currentTarget para ratón",
      "e.currentTarget devuelve siempre null"
    ],
    correct: 0,
    explanation: "Si haces clic en un icono dentro de una tarjeta, e.target es el icono y e.currentTarget es la tarjeta que escucha el evento."
  },
  {
    id: 39,
    uf: "UF1842",
    question: "¿Qué utilidad tiene <code>classList.toggle(\"activo\")</code> en JavaScript?",
    options: [
      "Añade la clase \"activo\" si no está presente, o la quita si ya la tiene",
      "Borra todas las clases del documento",
      "Cambia el id del elemento por \"activo\"",
      "Recarga la hoja CSS"
    ],
    correct: 0,
    explanation: "classList.toggle() alterna una clase CSS cómodamente, muy útil para abrir/cerrar menús o marcar elementos activos."
  },
  {
    id: 40,
    uf: "UF1842",
    question: "¿Por qué los navegadores modernos bloquean la reproducción automática de audio con sonido al abrir una página?",
    options: [
      "Por la Política de Autoplay: exigen un gesto previo del usuario (como un clic) para iniciar audio",
      "Porque HTML5 no soporta etiquetas &lt;audio&gt;",
      "Porque solo se permite reproducir vídeo sin imagen",
      "Porque falta instalar un plugin externo"
    ],
    correct: 0,
    explanation: "La Política de Autoplay protege al usuario de sonidos inesperados; un clic en un botón o modal inicial desbloquea la reproducción."
  },

  // ==================== UF1843 (41 - 60) ====================
  {
    id: 41,
    uf: "UF1843",
    question: "Una persona rellena un formulario con lector de pantalla. ¿Qué mejora ayuda a identificar claramente cada campo?",
    options: [
      "Poner un &lt;label&gt; asociado al control correspondiente",
      "Usar solo un texto placeholder dentro del campo",
      "Indicar el campo únicamente mediante un icono",
      "Cambiar solo el color del borde al escribir"
    ],
    correct: 0,
    explanation: "Un <label for=\"...\"> siempre visible y enlazado al input permite que los lectores de pantalla anuncien qué pide cada campo."
  },
  {
    id: 42,
    uf: "UF1843",
    question: "¿Cuál es una buena prueba inicial de accesibilidad en cualquier página web?",
    options: [
      "Comprobarla únicamente en el navegador más reciente",
      "Desactivar todas las imágenes",
      "Intentar recorrer y utilizar todas sus funciones únicamente con el teclado",
      "Aumentar la ventana al máximo en un monitor grande"
    ],
    correct: 2,
    explanation: "Navegar solo con teclado (Tab, Enter, Espacio, flechas) comprueba rápidamente si la web es operable y si el foco es visible."
  },
  {
    id: 43,
    uf: "UF1843",
    question: "Una imagen informa de que una incidencia está resuelta. ¿Qué debería comunicar su atributo <code>alt</code>?",
    options: [
      "Solo el nombre del archivo de imagen",
      "La información que transmite, por ejemplo «Incidencia resuelta»",
      "La frase «imagen de un icono» sin más detalle",
      "Nada, porque todas las imágenes deben llevar alt=\"\""
    ],
    correct: 1,
    explanation: "Cuando una imagen aporta información, el texto alternativo debe transmitir exactamente ese significado."
  },
  {
    id: 44,
    uf: "UF1843",
    question: "¿Por qué no conviene señalar un error de formulario únicamente con el color rojo?",
    options: [
      "Porque CSS no admite el color rojo en formularios",
      "Porque el navegador borrará el contenido del campo",
      "Porque todos los usuarios perciben los colores igual",
      "Porque algunas personas pueden no distinguir el color; también hace falta un mensaje claro"
    ],
    correct: 3,
    explanation: "Las personas con daltonismo o que usan lectores de pantalla necesitan un texto descriptivo o icono además del color."
  },
  {
    id: 45,
    uf: "UF1843",
    question: "¿Qué opción facilita más la tarea de corregir un error en un formulario?",
    options: [
      "Mostrar junto al campo qué falla y cómo solucionarlo",
      "Mostrar únicamente «Error» al final de la página",
      "Borrar todos los datos introducidos tras cada fallo",
      "Desactivar el formulario sin dar explicaciones"
    ],
    correct: 0,
    explanation: "Los mensajes de error inline junto al campo afectado, en lenguaje claro y constructivo, ayudan al usuario a recuperarse rápido."
  },
  {
    id: 46,
    uf: "UF1843",
    question: "En una web que debe funcionar también en móvil, ¿qué solución mejora la usabilidad?",
    options: [
      "Mantener siempre el mismo ancho fijo de escritorio",
      "Reducir toda la página hasta que quepa aunque el texto sea diminuto",
      "Adaptar la disposición y conservar textos y controles fáciles de leer y pulsar",
      "Ocultar el contenido principal en pantallas pequeñas"
    ],
    correct: 2,
    explanation: "El diseño responsive adapta el layout evitando el scroll horizontal y manteniendo tipografías legibles y botones amplios."
  },
  {
    id: 47,
    uf: "UF1843",
    question: "Un enlace muestra solo el texto «Haz clic aquí». ¿Qué alternativa resulta más clara y accesible?",
    options: [
      "«Enlace»",
      "«Consulta el estado de tu incidencia»",
      "«Pulsa»",
      "«Más»"
    ],
    correct: 1,
    explanation: "Los enlaces descriptivos explican por sí mismos a dónde llevan, lo cual ayuda a todos los usuarios y especialmente a lectores de pantalla."
  },
  {
    id: 48,
    uf: "UF1843",
    question: "¿Qué diferencia principal existe entre <strong>UX</strong> (Experiencia de Usuario) y <strong>UI</strong> (Interfaz de Usuario)?",
    options: [
      "UI se centra en el aspecto visual y UX en cómo se siente e interactúa el usuario con todo el flujo",
      "UX es solo programación backend y UI es solo HTML",
      "UI solo existe en aplicaciones móviles",
      "No hay diferencia, significan exactamente lo mismo"
    ],
    correct: 0,
    explanation: "UI trata la apariencia visual (colores, tipografía, botones) y UX evalúa la facilidad, fluidez y satisfacción global al usar el producto."
  },
  {
    id: 49,
    uf: "UF1843",
    question: "¿Qué es el <strong>Diseño Centrado en el Usuario (DCU)</strong>?",
    options: [
      "Diseñar pensando únicamente en lo que es más rápido de programar",
      "Una filosofía iterativa que pone las necesidades y pruebas con usuarios reales en el centro del proceso",
      "Copiar el diseño de la web más popular sin probarlo",
      "Evitar hacer prototipos antes de programar"
    ],
    correct: 1,
    explanation: "El DCU comprende el contexto del usuario, diseña prototipos, los evalúa con personas reales e itera según el feedback."
  },
  {
    id: 50,
    uf: "UF1843",
    question: "¿Para qué sirve un <strong>Wireframe</strong> al diseñar una interfaz?",
    options: [
      "Para definir la estructura y distribución básica en escala de grises antes de elegir colores o programar",
      "Para medir la velocidad del servidor",
      "Para escribir las consultas SQL de la base de datos",
      "Para sustituir las pruebas de accesibilidad"
    ],
    correct: 0,
    explanation: "Un wireframe es un boceto de baja fidelidad centrado en la arquitectura y jerarquía de la pantalla sin distracciones estéticas."
  },
  {
    id: 51,
    uf: "UF1843",
    question: "Según las 10 Heurísticas de Jakob Nielsen, mostrar una barra de progreso o «Cargando...» mientras se procesa una acción corresponde a:",
    options: [
      "Visibilidad del estado del sistema",
      "Estética y diseño minimalista",
      "Flexibilidad y eficiencia de uso",
      "Ayuda y documentación"
    ],
    correct: 0,
    explanation: "El sistema debe informar siempre al usuario de lo que está ocurriendo mediante feedback claro y oportuno."
  },
  {
    id: 52,
    uf: "UF1843",
    question: "Mostrar el mensaje técnico <code>\"Error 0x4F23: NullPointer\"</code> al usuario final incumple la heurística de:",
    options: [
      "Correspondencia entre el sistema y el mundo real",
      "Prevención de errores",
      "Atajos de teclado",
      "Diseño responsive"
    ],
    correct: 0,
    explanation: "La interfaz debe hablar el idioma del usuario con palabras comprensibles y no mostrar jerga o códigos internos."
  },
  {
    id: 53,
    uf: "UF1843",
    question: "¿Qué permiten hacer herramientas como <strong>Hotjar</strong> o <strong>Microsoft Clarity</strong>?",
    options: [
      "Analizar el comportamiento real mediante mapas de calor y grabaciones de sesiones",
      "Convertir código HTML en aplicaciones nativas de iOS",
      "Crear diagramas de base de datos",
      "Enviar correos masivos a usuarios"
    ],
    correct: 0,
    explanation: "Estas herramientas muestran dónde hacen clic los usuarios, hasta dónde hacen scroll o dónde se frustran (rage clicks)."
  },
  {
    id: 54,
    uf: "UF1843",
    question: "¿Qué significan las siglas <strong>POUR</strong> en los 4 principios de accesibilidad WCAG?",
    options: [
      "Perceptible, Operable, Comprensible y Robusto",
      "Público, Ordenado, Único y Rápido",
      "Privado, Optimizado, Usable y Responsive",
      "Práctico, Orientado, Universal y Reutilizable"
    ],
    correct: 0,
    explanation: "Las pautas WCAG se organizan en 4 principios: Perceptible, Operable, Comprensible (Understandable) y Robusto."
  },
  {
    id: 55,
    uf: "UF1843",
    question: "¿Cuál de los siguientes niveles de conformidad WCAG es el estándar legal habitualmente exigido?",
    options: [
      "Nivel A",
      "Nivel AA",
      "Nivel AAA",
      "Nivel C"
    ],
    correct: 1,
    explanation: "El nivel AA es el estándar de referencia legal para la accesibilidad web (A es mínimo y AAA el máximo)."
  },
  {
    id: 56,
    uf: "UF1843",
    question: "¿Qué regla debe seguirse con los encabezados (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>) para mantener una buena accesibilidad?",
    options: [
      "Seguir un orden jerárquico sin saltar niveles (por ejemplo, no pasar de &lt;h1&gt; a &lt;h4&gt; solo por estética)",
      "Elegir el nivel de encabezado únicamente según el tamaño de letra que queramos",
      "Usar siempre &lt;h6&gt; para el título principal",
      "Evitar usar encabezados y usar solo &lt;p&gt; en negrita"
    ],
    correct: 0,
    explanation: "Los lectores de pantalla usan la jerarquía de encabezados para navegar por el documento; el tamaño visual debe ajustarse con CSS."
  },
  {
    id: 57,
    uf: "UF1843",
    question: "¿Para qué sirve el atributo <code>aria-expanded=\"false\"</code> en un botón que abre un menú desplegable?",
    options: [
      "Para indicar a las tecnologías de asistencia si el menú controlado está abierto o cerrado",
      "Para duplicar el tamaño del botón en CSS",
      "Para ocultar el botón en ordenadores de escritorio",
      "Para enviar el formulario automáticamente"
    ],
    correct: 0,
    explanation: "Los atributos ARIA comunican el estado dinámico de componentes interactivos a los lectores de pantalla."
  },
  {
    id: 58,
    uf: "UF1843",
    question: "¿Qué herramienta integrada en Chrome DevTools permite auditar Rendimiento, Accesibilidad, Buenas Prácticas y SEO?",
    options: [
      "Google Lighthouse",
      "Balsamiq",
      "Miro",
      "jsPDF"
    ],
    correct: 0,
    explanation: "Lighthouse genera informes automáticos de calidad web, incluyendo comprobaciones de contraste, alt y semántica."
  },
  {
    id: 59,
    uf: "UF1843",
    question: "En dispositivos móviles, ¿por qué conviene evitar botones demasiado pequeños?",
    options: [
      "Porque dificultan la pulsación con el dedo y provocan toques accidentales",
      "Porque ocupan más memoria RAM en el navegador",
      "Porque JavaScript no detecta clics en botones pequeños",
      "Porque CSS no permite usar padding en móviles"
    ],
    correct: 0,
    explanation: "Los controles táctiles necesitan suficiente tamaño (recomendación mínima ~44×44px) para evitar el «problema de los dedos gordos»."
  },
  {
    id: 60,
    uf: "UF1843",
    question: "Si usamos un modal personalizado en lugar de <code>window.confirm()</code>, ¿qué detalle de accesibilidad conviene cuidar al abrirlo?",
    options: [
      "Mover el foco al modal o a su botón principal con .focus() para que pueda usarse con teclado",
      "Eliminar todos los botones del modal",
      "Impedir que el texto pueda leerse",
      "Ocultar el modal con display: block"
    ],
    correct: 0,
    explanation: "A diferencia de confirm(), un modal propio requiere gestionar el foco manualmente (.focus()) para usuarios de teclado y lectores de pantalla."
  }
];
