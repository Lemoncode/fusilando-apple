## 6.2 Main

---

Imágenes con el diseño:

[**Vista main en dispositivos móviles**](public/main-movile.png)

[**Vista main en tablets**](public/main-tablet.png)

[**Vista main para PC**](public/main-desktop.png)

Si nos fijamos en el [diseño general](public/desktop-design.png) vemos que los enlaces tienen diferentes estilos en el main y en footer por lo que definiremos estos dentro de su bloque correspondiente.

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

### 6.2.3 Colección de dispositivos

Esta sección tiene un estructura similar a la anterior pero como veremos en el CSS la distribución cambia.

**index.html**

```html
<section class="collection-container">
			<div class="content watch">
				<div class="header-collection-wrapper">
					<h4 class="headline-image">
						<span class="visuallyhidden">Apple Watch Series 6</span>
					</h4>
					<h5 class="subhead" role="presentation">
						Presentamos la Black Unity Collection.
					</h5>

					<div class="links-container">
						<a class="link" href="#"
							aria-label="Más información sobre el Apple Watch Series 6 Black Unity">Más información</a>
						<a class="link" href="#" aria-label="Comprar Apple Watch Series 6 Black Unity">Comprar</a>
					</div>
				</div>
				<div class="img-container">
					<figure class="image-watch"></figure>
				</div>
			</div>
			<div class="content one">
				<div class="header-collection-wrapper">
					<h4 class="headline-image">
						<span class="visuallyhidden">Apple One</span>
					</h4>
					<h5 class="subhead" role="presentation">
						Disfruta de cuatro servicios de Apple en una sola
						suscripción. Te llevarás más por menos.
					</h5>
					<div class="links-container">
						<a class="link" href="#" aria-label="Más información sobre Apple One">Más información</a>
						<a class="link" href="#" aria-label="Prueba Apple One gratis">Pruébalo gratis</a>
					</div>
				</div>
				<div class="img-container">
					<figure class="image-one"></figure>
				</div>
			</div>
			<div class="content watch2">
				<div class="header-collection-wrapper">
					<p class="offert">
						Oferta disponible por tiempo limitado
					</p>
					<h4 class="headline">Diseñado con tu corazón en mente.</h4>
					<h5 class="subhead" role="presentation">
						En febrero, llévate un Apple Watch por menos con los
						descuentos por renovación. Compra un Apple Watch
						Series 6 desde 259 €
						o un Apple Watch SE
						desde 229 €.
					</h5>

					<div class="links-container">
						<a class="link" aria-label="Ver oferta de febrero para el Apple Watch" href="#">Comprar</a>
					</div>
				</div>
				<div class="img-container">
					<figure class="image-watch2"></figure>
				</div>
			</div>
			<div class="content airpods">
				<div class="header-collection-wrapper">
					<h4 class="headline">AirPods Max</h4>
					<div class="links-container">
						<a class="link" href="#" aria-label="Más información sobre los AirPods Max">Más información</a>
						<a class="link" href="#" aria-label="Comprar AirPods Max">Comprar</a>
					</div>
				</div>
				<div class="img-container">
					<figure class="image-airpods"></figure>
				</div>
			</div>
			<div class="content tv">
				<div class="header-collection-wrapper">
					<h4 class="headline-image">
						<span class="visuallyhidden">Apple TV plus</span>
					</h4>

					<div class="play">
						<h5 class="visuallyhidden">
							Nueva Serie, El Show de Snoopy
						</h5>

						<span class="" href="#""
									aria-label=" Estreno de un Apple Original. Disfruta de «El Show de Snoopy» en la app Apple TV.">Ver
							ahora</span>
						<figure class="play-icon"></figure>

					</div>
				</div>
				<div class="img-container">
					<figure class="image-tv"></figure>
				</div>
			</div>
			<div class="content macbook">
				<div class="header-collection-wrapper">
					<h4 class="headline">MacBook Air</h4>
					<h5 class="subhead" role="presentation">
						El poder no ocupa lugar.
					</h5>
					<div class="links-container">
						<a class="link" href="#" aria-label="Más información sobre el MacBook Air">Más información</a>
						<a class="link" href="#" aria-label="Comprar MacBook Air">Comprar</a>
					</div>
				</div>
				<div class="img-container">
					<figure class="image-macbook"></figure>
				</div>
			</div>
		</section>
```

**\_main-collection.scss**

```scss
main {
	.collection-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
		box-sizing: border-box;

		@media (min-width: 720px) {
			grid-template-columns: 1fr 1fr;
			padding: 1em;
		}

		@media (min-width: 1020px) {
			gap: 1em;
			padding: 1em;
		}

		.visuallyhidden {
			visibility: hidden;
			position: absolute;
		}

		.headline-image {
			position: relative;
			background-repeat: no-repeat;
			background-position: center center;
		}
		.headline {
			font-size: 2em;
			margin: 0 auto;
			max-width: 320px;

			@media (min-width: 1020px) {
				font-size: 2.5em;
				max-width: 430px;
			}
		}
		.subhead {
			font-size: 1.18em;
			max-width: 310px;
			line-height: 1.21053;

			@media (min-width: 1020px) {
				max-width: 430px;
				margin-top: 11px;
				font-size: 1.3em;
			}
		}

		.links-container {
			font-size: 1.075em;
		}
		.content {
			overflow: hidden;
			background-color: $backgroundLight;
			z-index: -1;
			height: 500px;

			@media (min-width: 720px) {
				height: 490px;
			}
			@media (min-width: 1020px) {
				height: 580px;
			}
		}

		.img-container {
			position: relative;
			width: 100%;
			height: 100%;
			z-index: -1;
			font-size: 1rem;

			figure {
				width: 734px;
				height: 548px;
				background-size: 734px 548px;
				background-position: center center;
				background-repeat: no-repeat;
				position: relative;
				margin: 0;
				padding: 0;
				left: calc(50% + 0px);
				right: auto;
				bottom: 0;
				top: -45%;
				transform: translatex(-50%);

				@media (min-width: 720px) {
					width: 516px;
					height: 490px;
					background-size: 516px 490px;
					top: -35%;
				}
				@media (min-width: 1020px) {
					width: 1262px;
					height: 580px;
					background-size: 1262px 580px;
					top: -30%;
				}
			}
		}

		.watch {
			.headline-image {
				background-image: url(../assets/promo_logo_watch_black_small.png);
				height: 47px;
				background-size: 121px 47px;
				top: 1.25em;

				@media (min-width: 720px) {
					background-image: url(../assets/promo_logo_watch_black_medium.png);
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/promo_logo_watch_black_large.png);
					height: 57px;
					background-size: 148px 57px;
					top: 2em;
				}
			}

			.subhead {
				color: $light;
				margin-top: 1.5em;
				position: relative;

				@media (min-width: 1020px) {
					margin-top: 2em;
					font-size: 1.3em;
				}
			}

			.links-container {
				.link {
					color: $linkLight;
				}
			}
			.image-watch {
				background-image: url(../assets/promo_watch_small.jpg);

				@media (min-width: 720px) {
					background-image: url(../assets/promo_watch_medium.jpg);
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/promo_watch_large.jpg);
				}
			}
		}
		.one {
			.headline-image {
				background-image: url(../assets/one-small.png);
				height: 27px;
				background-size: 108px 27px;
				top: 2em;

				@media (min-width: 720px) {
					background-image: url(../assets/one-medium.png);
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/one-large.png);
					height: 35px;
					background-size: 135px 35px;
				}
			}

			.subhead {
				margin-top: 2.5em;
				@media (min-width: 1020px) {
					margin-top: 2em;
					font-size: 1.3em;
				}
			}

			.image-one {
				background-image: url(../assets/tile_small.jpg);
				width: 350px;
				height: 260px;
				background-size: 350px 260px;
				top: 5%;

				@media (min-width: 720px) {
					background-image: url(../assets/tile_medium.jpg);
					top: -10%;
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/tile_large.jpg);
					width: 562px;
					height: 330px;
					background-size: 562px 330px;
					top: 2em;
				}
			}
		}
		.watch2 {
			.offert {
				color: $offer;
				font-family: $SFProTextRegular;
				font-size: 0.7em;
				text-align: center;
				margin: 2em 0 0;

				@media (min-width: 720px) {
					font-size: 0.75em;
				}
			}

			.subhead {
				font-size: 1.063em;
				top: 0.3em;

				@media (min-width: 720px) {
					max-width: 500px;
					font-size: 1.1em;
					margin-top: 0.5em;
				}
			}

			.image-watch2 {
				background-image: url(../assets/promo_watch_heart_small.jpg);
				top: -52%;

				@media (min-width: 720px) {
					background-image: url(../assets/promo_watch_heart_medium.jpg);
					top: -47%;
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/promo_watch_heart_large.jpg);
					top: -40%;
				}
			}
		}
		.airpods {
			.headline {
				margin-top: 1em;
			}
			.image-airpods {
				background-image: url(../assets/tile_airpods_small.jpg);
				top: -30%;

				@media (min-width: 720px) {
					background-image: url(../assets/tile_airpods_medium.jpg);
					top: -23%;
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/tile_airpods_large.jpg);
				}
			}
		}
		.tv {
			.headline-image {
				background-image: url(../assets/logo_apple-tv_small.png);
				height: 27px;
				background-size: 69px 27px;
				top: 1em;

				@media (min-width: 720px) {
					background-image: url(../assets/logo_apple-tv_medium.png);
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/logo_apple-tv_large.png);
				}
			}
			.header-collection-wrapper {
				position: relative;
			}
			.play {
				cursor: pointer;
				position: absolute;
				top: 22em;
				width: 100%;
				font-family: $SFProTextRegular;
				display: flex;
				flex-flow: row;
				justify-content: center;
				align-content: center;

				@media (min-width: 1020px) {
					top: 24em;
				}

				span {
					color: $light;
					text-decoration: none;
					display: block;
					padding: 0;
					margin: 0 0.5em;
				}

				.play-icon {
					background-image: url(../assets/icons/play.svg);
					background-size: 18px 18px;
					width: 18px;
					height: 18px;
					border-radius: 50%;
					padding: 0;
					margin: 0;
				}
			}
			.image-tv {
				background-image: url(../assets/promo_snoopy_small.jpg);
				top: -24%;

				@media (min-width: 720px) {
					background-image: url(../assets/promo_snoopy_medium.jpg);
					top: -20%;
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/promo_snoopy_large.jpg);
				}
			}
		}
		.macbook {
			background-color: $dark;

			.headline {
				color: $light;
				margin: 1.5em auto 0.2em;
			}
			.subhead {
				color: $light;
				margin: 0.2em auto;
			}
			.links-container {
				.link {
					color: $linkLight;
				}
			}
			.image-macbook {
				background-image: url(../assets/macbook_air_small.jpg);
				top: -35%;

				@media (min-width: 720px) {
					background-image: url(../assets/macbook_air_medium.jpg);
				}
				@media (min-width: 1020px) {
					background-image: url(../assets/macbook_air_large.jpg);
				}
			}
		}
	}
}
```

Prácticamente lo mismo que en la anterior sección. Aquí la imágen discordante es la de `One`. Particularidades de esta sección es que algunos bloques incluyen una imagen en la cabecera que es utilizada de la misma manera, estas incluyen una etiqueta `span` que se oculta y es utilizada para accesibilidad.

La distribución cambia a partir de la vista para tablets, pasando de una a dos columnas y por ello utilizamos un grid en el contenedor padre. Con la propiedad `grid-template-columns` definimos las columnas y el espacio que ocupan.
