# Fusilando Apple

En este ejemplo veremos cómo maquetar una página web desde cero.

Los pasos que vamos a seguir son:

- Instalación de dependencias necesarias.
- Creación de una estructura aproximada de archivos y directorios.
- Recopilación de recursos (imágenes, fuentes, etc..).
- Definición html de la estructura básica de la página (sin estilos).
- Definición de estilos generales (colores y tipografías principalmente).
- Maquetación y estilado por bloque o componente de nuestra página.
-

## 1. Instalación de dependencias.

En esta parte no vamos a pararnos mucho, es algo que se verá más adelante pero sí quería dejar claro lo que vamos a estar utilizando en este ejemplo.
Hemos instalado `Parcel` que no es más que un servidor local de desarrollo que nos ayudará a ser más ágiles en nuestro trabajo.
Como vamos a utilizar `Sass` como preprocesador css necesitaremos instalarlo y también algo que transpile el código para que el navegador lo entienda. De esto se encargará `Webpack`.

## 2. Creación de la estructura.

Una vez conocemos los requisitos y el diseño del proyecto podemos empezar a crear una estructura básica (la cual iremos ampliando) donde poder empezar a colocar y crear nuestros archivos y recursos necesarios.

Este proyecto está definido de la siguiente manera:

- Un directorio raíz llamado `src`, aquí irá por ejemplo nuestro **index.html**.
- Un subdirectorio `assets` donde colocaremos las fuentes, imágenes y todos los recursos estáticos que necesitamos.
- Un subdirectorio `styles` para nuestros archivos css, sass, etc...
- Quedaría algo como esto:

      ```
      SRC
      |   index.html
      |   index.js
      |
      +---assets
      |   |   tile_small.jpg
      |   |
      |   +---fonts
      |   |       SFProDisplay-Bold.ttf
      |   |
      |   \---icons
      |           search.svg
      |
      \---styles
              style.scss
      ```

## 3. Recopilación de recursos

Tener todos los recursos que vamos a necesitar ya importados y listos en nuestro proyecto es algo que nos agilizará mucho en el desarrollo.
En un caso real estos recursos los extraeríamos de nuestro diseño o en el mejor de los casos nos los proporcionaría el diseñador.
Cuando hablo de recursos me refiero a imágenes, fuentes, vídeos, paleta de color, etc.

## 4. Definición html básico.

Personalmente me gusta crear una estructura básica de lo que será la página, con esto me refiero, por ejemplo, a añadir un header, un body y un footer inicial a los cuales añado un borde o un fondo para diferenciarlos y luego de la misma forma ir profundizando en cada uno de ellos. Esto no es algo estático ya que según vayamos añadiendo contenido en cada capa surgirán distintas necesidades para la colocación y distribución de los elementos.

La estructura básica inicial para esta página es la siguiente:

```html
<body>
	<nav class="container">Hello top menu</nav>
	<div class="container">Hello container</div>
	<section class="container">Hello section iPhone 12</section>
	<section class="container">Hello section iPhone 12 pro</section>
	<section class="container">Hello section iPad Air</section>
	<section class="container">Hello section watch and more</section>
	<section class="container">Hello section watch and more</section>
	<footer class="container"></footer>
</body>
```

## 5. Creación de estilos globales

Este punto lo podemos afrontar de dos formas, una si utilizamos CSS y otra si utilizamos Sass.

> En cualquiera de los dos casos vamos a añadir un `_normalize.css` para resetear los estilos que cada navegador implementa por defecto, de esta manera minimizamos las diferencias al mostrar la página en cada uno de ellos.

> _El guión bajo en el nombre lo utilizo para diferenciar los archivos con estilos globales o variables de los específicos de cada bloque o componente... a parte de por convención_ :-)

Si optamos por usar CSS crearemos un archivo `_global.css` que tendrá las clases e Ids globales para títulos, párrafos, enlaces, etc... otro para las fuentes `_fonts.css` y uno principal llamado `styles.css` que será el que cargue el resto de CSSs y el cual será llamado en el **html**.

Quedaría algo así:

### CSS

**\_fonts.css**

```css
@font-face {
	font-family: "SF Pro Display Regular";
	font-style: normal;
	font-weight: 400;
	src: url("../assets/fonts/SFProDisplay-Regular.ttf");
}
@font-face {
	font-family: "SF Pro Display Semibold";
	font-style: normal;
	font-weight: 600;
	src: url("../assets/fonts/SFProDisplay-Semibold.ttf");
}
@font-face {
	font-family: "SF Pro Text Regular";
	font-style: normal;
	font-weight: 400;
	src: url("../assets/fonts/SFProText-Regular.ttf");
}
@font-face {
	font-family: "SF Pro Text Semibold";
	font-style: normal;
	font-weight: 600;
	src: url("../assets/fonts/SFProText-Semibold.ttf");
}
@font-face {
	font-family: "SF Pro Text Bold";
	font-style: normal;
	font-weight: 800;
	src: url("../assets/fonts/SFProText-Bold.ttf");
}
```

**\_global.css**

```css
@import './_fonts.css';

.title {
      font-family: 'SF Pro Display Regular',
      color: #000,
      ....
}
.subtitle {
      ....
}
```

**styels.css**

```css
@import "./_normalize.css";
@import '_fonts.css';
@import '_global.css';

...
```

Como se puede observar el CSS que define las fuentes lo hemos **importado** en `_global.css` para poder utilizarlo. Esto es algo que iremos viendo y repitiendo durante el ejercicio con los distintos estilos de cada bloque, de esta manera sólo necesitaremos añadir a nuestro **html** un único archivo.

Nosotros vamos a trabajar con `Sass` y será de una manera similar a la anterior solo que aquí vamos a poder utilizar variables como en cualquier lenguage de programación convencional.

Más adelante iremos viendo las virtudes y la potencia de utilizar un preprocesador para nuestros estilos pero de momento nos centraremos en definir nuestras variables.

Vamos a crear un archivo llamado `_vars.scss` donde importaremos `_fonts.css` y el cual iremos incrementando a lo largo del proyecto, y un archivo principal `styles.scss` que será el que cargue el resto de archivos SCSS y el cual será llamado en el **html**.

### SASS

**\_vars.scss**

```scss
@import "./_fonts.css";

//Fonts
$title: "SF Pro Display Regular";

//colors
$primary: rgba(0, 0, 0, 0.92);
$secondary: #f5f5f7;
$textDark: #1d1d1f;
$textGrey: #86868b;
$textGreyDark: #515154;
$link: #06c;
```

**styles.scss**

```scss
@import "./_normalize.css";
@import './_fonts.scss';
@import './vars.scss';

...
```

## 6. Maquetación y estilado por bloques

### 6.1 Top Menú
