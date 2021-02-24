## 6.2 Main

---

Imágenes con el diseño:

[**Vista main en dispositivos móviles**](public/main-movile.png)

[**Vista main en tablets**](public/main-tablet.png)

[**Vista main para PC**](public/main-desktop.png)

Si nos fijamos en el [diseño general](public/desktop-design.png) vemos que los enlaces tienen diferentes estilos en el main y en footer por lo que definiremos estos dentro de su bloque correspondiente.

### 6.2.1 Texto compra online.

El primer bloque que nos encontramos es un pequeño texto con un enlace `Compra online`.

> Definimos los estilos generales para los enlaces de este bloque.

**index.html**

```html
<main>
	<div class="online-shop-container section">
		<span class="link">Compra online</span> con la ayuda de un Especialista y
		disfruta de envío gratuito sin contacto físico.
	</div>
	<section class="container iphone"></section>
	<section class="container collection"></section>
</main>
```

**main.scss**

```scss
@import "./vars";

main {
	width: 100%;
	overflow: hidden;
	box-sizing: border-box;

	.link {
		color: $link;
		text-decoration: none;
		cursor: pointer;
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

Primero hemos definido los estilos de `<main>` que actua de contenedor. A continuación los estilos generales para los links. Seguido están los estilos del propio componente.

### 6.2.2 Sección iPhone, iPhone Pro y iPad
