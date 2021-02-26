## 6.2 Main

---

[6.2.1 Texto compra online](main.md)

[6.2.3 Sección Collection](main-collection.md)

---

### 6.2.2 Sección dispositivos (iPhone, iPhone Pro y iPad).

Este segunda parte está compuesta por una sección dividida en tres bloques, uno por cada dispositivo. Los tres tienen una estructura idéntica, un `<div class="content">` por cada dispositivo y dentro un `<div class="header-wrapper">` para el texto y un `<div class="img-container">` para la imagen. Los atributos `role` y `aria-label` son para accesibilidad.
Cada bloque tiene su clase específica que utilizamos para los estilos individuales de cada uno.

**index.html**

```html
<section class="devices-container">
	<div class="content iphone-12">
		<div class="header-wrapper">
			<h2 class="headline">iPhone 12</h2>
			<h3 class="subhead" role="presentation">Más allá de la velocidad.</h3>
			<p class="price">
				<span
					aria-label="Desde 33,71 €/mes o desde 809 € sin renovación"
					role="text"
					>Desde 33,71 €/mes o desde 809 € sin renovación.</span
				><sup><a href="#" class="link">1</a></sup>
			</p>
			<div class="links-container">
				<a class="link" href="#" aria-label="Más información sobre el iPhone 12"
					>Más información</a
				>
				<a class="link" href="#" aria-label="Comprar un iPhone 12">Comprar</a>
			</div>
		</div>
		<div class="img-container">
			<figure class="image-iphone-12"></figure>
		</div>
	</div>
	<div class="content iphone-pro">
		<div class="header-wrapper">
			<h2 class="headline">iPhone 12 Pro</h2>
			<h3 class="subhead" role="presentation">Un salto al mañana.</h3>
			<p class="price">
				<span
					aria-label="Desde 48,29 €/mes o desde 1.159 € sin renovación"
					role="text"
					>Desde 48,29 €/mes o desde 1.159 € sin renovación.</span
				><sup><a href="#" class="link">2</a></sup>
			</p>
			<div class="links-container">
				<a
					class="link"
					href="#"
					aria-label="Más información sobre el iPhone 12 Pro"
					>Más información</a
				>
				<a class="link" href="#" aria-label="Comprar un iPhone 12 Pro"
					>Comprar</a
				>
			</div>
		</div>
		<div class="img-container">
			<figure class="image-iphone-pro"></figure>
		</div>
	</div>
	<div class="content ipad">
		<div class="header-wrapper">
			<h2 class="headline">iPad Air</h2>
			<h3 class="subhead" role="presentation">
				El color. La potencia. La maravilla.
			</h3>
			<div class="links-container">
				<a class="link" href="#" aria-label="Más información sobre el iPad Air"
					>Más información</a
				>
				<a class="link" href="#" aria-label="Comprar iPad Air">Comprar</a>
			</div>
		</div>
		<div class="img-container">
			<figure class="image-ipad"></figure>
		</div>
	</div>
</section>
```

**main-devices.scss**

```scss
main {
	.devices-container {
		.img-container {
			position: relative;
			width: 100%;
			height: 100%;
			z-index: -1;

			figure {
				height: 548px;
				background-size: 734px 548px;
				background-position: center center;
				position: relative;
				margin: 0;
				padding: 0;
				left: calc(50% + 0px);
				right: auto;
				bottom: 0px;
				top: 0;
				margin-top: -225px;
				background-repeat: no-repeat;
				transform: translatex(-50%);

				@media (min-width: 720px) {
					width: 1068px;
					height: 698px;
					background-size: 1068px 698px;
					top: -15px;
					margin-top: -260px;
				}
				@media (min-width: 1020px) {
					width: 3010px;
					height: 736px;
					background-size: 3010px 736px;
				}
			}
		}

		//iPhone section
		.iphone-12 {
			.image-iphone-12 {
				background-image: url(../assets/iphone_12_small.jpg);

				@media (min-width: 720px) {
					background-image: url(../assets/iphone_12_medium.jpg);
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/iphone_12_large.jpg);
				}
			}
		}
		.iphone-pro {
			background-color: $dark;
			position: relative;
			z-index: -5;
			overflow: hidden;

			.headline,
			.subhead {
				color: $light;
			}
			.links-container {
				.link {
					color: $linkLight;
				}
			}
			.image-iphone-pro {
				background-image: url(../assets/iphone_12_pro_small.jpg);
				margin-top: -250px;

				@media (min-width: 720px) {
					margin-top: -280px;
					background-image: url(../assets/iphone_12_pro_medium.jpg);
				}
				@media (min-width: 1020px) {
					margin-top: -300px;
					top: -15px;
					background-image: url(../assets/iphone_12_pro_large.jpg);
				}
			}
		}
		//ipad section
		.ipad {
			display: flex;
			flex-flow: column-reverse;
			background-color: $backgroundLight;
			z-index: -1000;
			position: relative;

			@media (min-width: 720px) {
				flex-flow: column;
			}

			.header-wrapper {
				margin-top: -170px;
				margin-bottom: 50px;
				.headline {
					display: none;
					@media (min-width: 720px) {
						display: block;
					}
				}
				@media (min-width: 720px) {
					margin-top: 0;
				}
			}
			.image-ipad {
				background-image: url(../assets/ipad_small.jpg);
				background-position-y: -40px;
				margin-top: 0px;

				@media (min-width: 720px) {
					width: 796px;
					height: 450px;
					background-size: 796px 450px;
					background-image: url(../assets/ipad_medium.jpg);
				}
				@media (min-width: 1020px) {
					width: 1155px;
					height: 495px;
					background-size: 1155px 495px;
					background-image: url(../assets/ipad_large.jpg);
				}
			}
		}
	}
}
```

A destacar en los estilos es que las imágenes se cargan como `background` en la etiqueta `<figure>` y para ello hay que definir su tamaño, sino no se verán.
He intentado mantener la maquetación original de la página y cuando empezé esta parte de las imágenes, tanto aquí como en la siguiente sección (collection) la sensación era que tenía que hacer malavares para posicionar y ajustar tamaños.

Analizando las imágenes pude comprobar que no tenían el mismo tamaño y eso me parece un error. Igual tiene su razón pero en este caso siendo imágenes con un tamaño establecido y fondo para mi la manera correcta hubiese sido un mismo tamaño en todas con el dispositivo ya posicionado, de esta manera conseguimos que con unos estilos generales quede todo prácticamente en su sitio. Tan solo tendríamos que cambiar la imágen de background y corregir un poco la posición si fuese necesario.

El ejemplo lo podemos ver en la imagen del ipad donde se ha tenido que definir un nuevo tamaño. También aquí podemos ver cómo cambia el orden de los elementos según la vista.

Con este planteamiento las imágenes no escalan, simplemente van cambiando en cada punto de ruptura mediante los media queries.

---

[6.2.1 Texto compra online](main.md)

[6.2.3 Sección Collection](main-collection.md)

---
