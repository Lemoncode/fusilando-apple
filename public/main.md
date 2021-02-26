## 6.2 Main

---

[6.2.2 Sección dispositivos (iPhone, iPhone Pro y iPad).](main-devices.md)

[6.2.3 Sección collection.](main-collection.md)

---

Imágenes con el diseño:

- [Vista main en dispositivos móviles](main-mobile.png)

- [Vista main en tablets](main-tablet.png)

- [Vista main para PC](main-desktop.png)

Si nos fijamos en el [diseño general](desktop-design.png) vemos que los enlaces tienen diferentes estilos en el main y en footer por lo que definiremos estos dentro de su bloque correspondiente.

Este bloque a su vez lo vamos a dividir en tres secciones:

- Compra online
- Dispositivos
- Colección

Hemos creado tres archivos `Sass` :

- `main.scss` que contiene los estilos comunes de estos bloques, los de compra online y los estilos del contenedor padre `<main>`. Esta será la hoja de estilos que importaremos en la principal `styles.scss` y aquí importaremos las siguientes:
  - `_main-devices.scss` -> sección de dispositivos.
  - `_main-collection.scss` -> sección de colección.

Este planteamiento en el CSS no estaba previsto al iniciar el proyecto, se comenzó a trabajar en un único archivo pero al llegar a un determinado número de líneas de código se optó por dividirlo ( divide y vencerás ). De esta manera todo queda más a mano y la implementación y el mantenimiento son menos engorrosos.

**main.scss**

```scss
@import "./_main-devices.scss";
@import "./_main-collection.scss";

main {
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;

	.link {
		color: $link;
		text-decoration: none;
		cursor: pointer;
	}

	.header-wrapper {
		font-size: 1.335em;
		padding: 1.313em 0.938em 0;

		@media (min-width: 720px) {
			font-size: 2em;
		}

		@media (min-width: 1020px) {
			font-size: 2.335em;
			padding: 0.6em 0.938em 0;
		}
	}

	.headline {
		font-family: $SFProDisplaySemibold;
		color: $primaryDark;
		text-align: center;
		display: block;
		margin: 0.5em auto 0;
	}

	.subhead {
		font-family: $SFProDisplayRegular;
		font-weight: 400;
		font-size: 0.9em;
		line-height: 1.4211;
		letter-spacing: 0.012em;
		color: $primaryDark;
		text-align: center;
		display: block;
		width: 100%;
		margin: 0 auto;

		@media (min-width: 720px) {
			font-size: 0.75em;
		}
	}

	.price {
		max-width: 250px;
		margin: 0.5em auto;
		font-family: $SFProTextRegular;
		font-size: 0.65em;
		color: $secondary;
		text-align: center;

		@media (min-width: 720px) {
			max-width: none;
			font-size: 0.545em;
		}
		@media (min-width: 1020px) {
			font-size: 0.445em;
		}

		a {
			color: inherit;
		}
	}

	.links-container {
		font-size: 0.9em;
		font-family: $SFProDisplayRegular;
		margin-top: 0.7em;
		text-align: center;

		:first-child {
			margin-right: 0.5em;
		}

		::after {
			font-size: 0.8em;
			font-family: $SFProDisplaySemibold;
			content: ">";
			margin: 0 0.4em;
		}

		@media (min-width: 720px) {
			font-size: 0.6em;
		}

		@media (min-width: 1020px) {
			font-size: 0.555em;
		}
	}

	//online shopping
	.online-shopping-container {
		background-color: $primaryLight;
		color: $primaryDark;
		width: 100%;
		margin: 2.7em auto 0;

		.online-shopping-wrapper {
			padding: 0.9em 0;
			width: 80%;
			max-width: 650px;
			margin: 0 auto;
			box-sizing: border-box;
			text-align: center;
			line-height: 1.47059;
			letter-spacing: -0.032em;
			font-family: $SFProTextRegular;
			font-size: 0.9em;
		}
	}
}
```

Este es el resultado final de `main.scss` al cual hemos ido añadiendo las clases promocionadas a generales, es decir aquellas que afectan a más de un elemento el las distintas secciones. También hemos metido aquí los estilos del primer bloque `compra online` ya que al ser algo pequeño no merece la pena crear unos estilos a parte.

En cuanto a la utilización de los `media queries` podrían utilizarse de manera general y en cada `@media` incluir cada clase de nuevo.

### 6.2.1 Texto compra online.

El primer bloque es un pequeño texto con un enlace de `Compra online`. No es más que un `div` contenedor y un párrafo con una etiqueta `<a>` para el enlace.

**index.html**

```html
<main>
	<div class="online-shopping-container">
		<p class="online-shopping-wrapper">
			<a href="#" class="link">Compra online</a> con la ayuda de un Especialista
			y disfruta de envío gratuito sin contacto físico.
		</p>
	</div>
	<section class="devices-container"></section>
	<section class="collection-container"></section>
</main>
```

---

[6.2.2 Sección dispositivos (iPhone, iPhone Pro y iPad).](main-devices.md)

[6.2.3 Sección collection.](main-collection.md)
