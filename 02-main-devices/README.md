## 6.2 Main

---

Partimos del ejemplo anterior **01-top-menu**

Este bloque lo vamos a dividir en tres secciones:

- Compra online
- Dispositivos
- Colección

Imágenes con el diseño:

- [Vista main en dispositivos móviles](../public/main-mobile.png)

- [Vista main en tablets](../public/main-tablet.png)

- [Vista main para PC](../public/main-desktop.png)

El html para esta sección dentro de `<main>`:

```diff
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Fusilando Apple</title>
		<script src="index.js"></script>
		<link rel="stylesheet" href="./styles/styles.scss" />
	</head>

	<body>
		<nav class="container top-menu-container">
			<ul class="top-menu">
				<li id="toggle-button" class="item-menu item-open-menu">
					<span class="menu-line-one">
						<span></span>
					</span>
					<span class="menu-line-two">
						<span></span>
					</span>
				</li>
				<li class="item-menu item-apple">
					<a href="#" class="link-icon"><span class="link-text">Apple</span></a>
				</li>
				<li class="item-menu item-mac">Mac</li>
				<li class="item-menu item-ipad">IPad</li>
				<li class="item-menu item-iphone">IPhone</li>
				<li class="item-menu item-watch">Watch</li>
				<li class="item-menu item-tv">TV</li>
				<li class="item-menu item-music">Music</li>
				<li class="item-menu item-support">Soporte</li>
				<li class="item-menu item-search">
					<a href="#" class="link-icon">
						<span class="link-text">Buscar</span>
					</a>
					<div class="input-container">
						<a href="#" class="link-icon-movile">
							<span class="link-text">Buscar</span>
						</a>
						<input
							type="search"
							class="input-search"
							placeholder="Buscar en apple.com"
						/>
					</div>
				</li>
				<li class="item-menu item-store icon-store">
					<a href="#" class="link-icon"
						><span class="link-text">Tienda</span></a
					>
				</li>
			</ul>
		</nav>
		<main>
-		Hello main
-			<div class="online-shop">Hello online-shop</div>
-			<section class="devices">
-				Hello devices
-				<div>Hello iPhone 12</div>
-				<div>Hello iPhone Pro</div>
-				<div>Hello iPad</div>
-			</section>
+			<div class="online-shopping-container">
+				<p class="online-shopping-wrapper">
+					<a href="#" class="link">Compra online</a> con la ayuda de un
+					Especialista y disfruta de envío gratuito sin contacto físico.
+				</p>
+			</div>
+			<section class="devices-container">
+				<div class="content iphone-12">
+					<div class="header-wrapper">
+						<h2 class="headline">iPhone 12</h2>
+						<h3 class="subhead" role="presentation">
+							Más allá de la velocidad.
+						</h3>
+						<p class="price">
+							<span
+								aria-label="Desde 33,71 €/mes o desde 809 € sin renovación"
+								role="text"
+								>Desde 33,71 €/mes o desde 809 € sin renovación.</span
+							><sup><a href="#" class="link">1</a></sup>
+						</p>
+						<div class="links-container">
+							<a
+								class="link"
+								href="#"
+								aria-label="Más información sobre el iPhone 12"
+								>Más información</a
+							>
+							<a class="link" href="#" aria-label="Comprar un iPhone 12"
+								>Comprar</a
+							>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-iphone-12"></figure>
+					</div>
+				</div>
+				<div class="content iphone-pro">
+					<div class="header-wrapper">
+						<h2 class="headline">iPhone 12 Pro</h2>
+						<h3 class="subhead" role="presentation">Un salto al mañana.</h3>
+						<p class="price">
+							<span
+								aria-label="Desde 48,29 €/mes o desde 1.159 € sin renovación"
+								role="text"
+								>Desde 48,29 €/mes o desde 1.159 € sin renovación.</span
+							><sup><a href="#" class="link">2</a></sup>
+						</p>
+						<div class="links-container">
+							<a
+								class="link"
+								href="#"
+								aria-label="Más información sobre el iPhone 12 Pro"
+								>Más información</a
+							>
+							<a class="link" href="#" aria-label="Comprar un iPhone 12 Pro"
+								>Comprar</a
+							>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-iphone-pro"></figure>
+					</div>
+				</div>
+				<div class="content ipad">
+					<div class="header-wrapper">
+						<h2 class="headline">iPad Air</h2>
+						<h3 class="subhead" role="presentation">
+							El color. La potencia. La maravilla.
+						</h3>
+						<div class="links-container">
+							<a
+								class="link"
+								href="#"
+								aria-label="Más información sobre el iPad Air"
+								>Más información</a
+							>
+							<a class="link" href="#" aria-label="Comprar iPad Air">Comprar</a>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-ipad"></figure>
+					</div>
+				</div>
+			</section>
			<section class="collection">
				Hello section collection
				<div>Hello watch</div>
				<div>Hello One</div>
				<div>Hello watch2</div>
				<div>Hello AirPods</div>
				<div>Hello Tv</div>
				<div>Hello MacBook</div>
			</section>
		</main>
		<footer class="container">Hello footer</footer>
		<script>
			document.querySelector("#toggle-button").addEventListener("click", () => {
				document
					.querySelector("#toggle-button")
					.classList.toggle("item-close-menu");
				document
					.querySelector(".top-menu-container")
					.classList.toggle("collapsed");
				document
					.querySelector(".menu-line-one")
					.classList.toggle("menu-line-one-close");
				document
					.querySelector(".menu-line-two")
					.classList.toggle("menu-line-two-close");
				document
					.querySelector(".icon-store")
					.classList.toggle("icon-store-visibility");
			});
		</script>
	</body>
</html>

```

### 6.2.1 Texto compra online.

El primer bloque es un pequeño texto con un enlace de `Compra online`. No es más que un `div` contenedor y un párrafo con una etiqueta `<a>` para el enlace.

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
<main>
	<div class="online-shopping-container">
		<p class="online-shopping-wrapper">
			<a href="#" class="link">Compra online</a> con la ayuda de un Especialista
			y disfruta de envío gratuito sin contacto físico.
		</p>
	</div>
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
					<a
						class="link"
						href="#"
						aria-label="Más información sobre el iPhone 12"
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
					<a
						class="link"
						href="#"
						aria-label="Más información sobre el iPad Air"
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
	<section class="collection-container">
		Hello section collection
		<div>Hello watch</div>
		<div>Hello One</div>
		<div>Hello watch2</div>
		<div>Hello AirPods</div>
		<div>Hello Tv</div>
		<div>Hello MacBook</div>
	</section>
</main>
```

Hemos creado tres archivos `Sass` :

- `main.scss` que contiene los estilos comunes de estos bloques, los de compra online y los estilos del contenedor padre `<main>`. Esta será la hoja de estilos que importaremos en la principal `styles.scss` y aquí importaremos las siguientes:
  - `_main-devices.scss` -> sección de dispositivos.
  - `_main-collection.scss` -> sección de colección.

Este planteamiento en el CSS no estaba previsto al iniciar el proyecto, se comenzó a trabajar en un único archivo pero al llegar a un determinado número de líneas de código se optó por dividirlo ( divide y vencerás ). De esta manera todo queda más a mano y la implementación y el mantenimiento son menos engorrosos.

**styles/main.scss**

```diff
	@import "./_main-devices.scss";
	@import "./_main-collection.scss";

-	main {
-		border: 1px solid black;
-		display: block;
-		box-sizing: border-box;
-		width: 100%;
-		padding: 2%;
-		margin: 0 auto;
-		background-color: cadetblue;
-
-		.online-shop {
-			border: 1px solid black;
-			display: block;
-			box-sizing: border-box;
-			width: 100%;
-			padding: 2%;
-			margin: 0 auto;
-			background-color: deeppink;
-		}
-	}

+	main {
+		width: 100%;
+		overflow: hidden;
+		box-sizing: border-box;
+
+		.link {
+			color: $link;
+			text-decoration: none;
+			cursor: pointer;
+		}
+
+		.header-wrapper {
+			font-size: 1.335em;
+			padding: 1.313em 0.938em 0;
+
+			@media (min-width: 720px) {
+				font-size: 2em;
+			}
+
+			@media (min-width: 1020px) {
+				font-size: 2.335em;
+				padding: 0.6em 0.938em 0;
+			}
+		}
+
+		.headline {
+			font-family: $SFProDisplaySemibold;
+			color: $primaryDark;
+			text-align: center;
+			display: block;
+			margin: 0.5em auto 0;
+		}
+
+		.subhead {
+			font-family: $SFProDisplayRegular;
+			font-weight: 400;
+			font-size: 0.9em;
+			line-height: 1.4211;
+			letter-spacing: 0.012em;
+			color: $primaryDark;
+			text-align: center;
+			display: block;
+			width: 100%;
+			margin: 0 auto;
+
+			@media (min-width: 720px) {
+				font-size: 0.75em;
+			}
+		}
+
+		.price {
+			max-width: 250px;
+			margin: 0.5em auto;
+			font-family: $SFProTextRegular;
+			font-size: 0.65em;
+			color: $secondary;
+			text-align: center;
+
+			@media (min-width: 720px) {
+				max-width: none;
+				font-size: 0.545em;
+			}
+			@media (min-width: 1020px) {
+				font-size: 0.445em;
+			}
+
+			a {
+				color: inherit;
+			}
+		}
+
+		.links-container {
+			font-size: 0.9em;
+			font-family: $SFProDisplayRegular;
+			margin-top: 0.7em;
+			text-align: center;
+
+			:first-child {
+				margin-right: 0.5em;
+			}
+
+			::after {
+				font-size: 0.8em;
+				font-family: $SFProDisplaySemibold;
+				content: ">";
+				margin: 0 0.4em;
+			}
+
+			@media (min-width: 720px) {
+				font-size: 0.6em;
+			}
+
+			@media (min-width: 1020px) {
+				font-size: 0.555em;
+			}
+		}
+
+		//online shopping
+		.online-shopping-container {
+			background-color: $primaryLight;
+			color: $primaryDark;
+			width: 100%;
+			margin: 2.7em auto 0;
+
+			.online-shopping-wrapper {
+				padding: 0.9em 0;
+				width: 80%;
+				max-width: 650px;
+				margin: 0 auto;
+				box-sizing: border-box;
+				text-align: center;
+				line-height: 1.47059;
+				letter-spacing: -0.032em;
+				font-family: $SFProTextRegular;
+				font-size: 0.9em;
+			}
+		}
+	}
```

**styles/main.scss**

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

**styles/main-devices.scss**

```diff
-	main {
-		.devices {
-			border: 1px solid black;
-			display: block;
-			box-sizing: border-box;
-			width: 100%;
-			padding: 2%;
-			margin: 2% auto;
-			background-color: deeppink;
-
-			div {
-				border: 1px solid black;
-				padding: 1%;
-				margin: 1% auto;
-				background-color: lavenderblush;
-			}
-		}
-	}

+	main {
+		.devices-container {
+			.img-container {
+				position: relative;
+				width: 100%;
+				height: 100%;
+				z-index: -1;
+
+				figure {
+					height: 548px;
+					background-size: 734px 548px;
+					background-position: center center;
+					position: relative;
+					margin: 0;
+					padding: 0;
+					left: calc(50% + 0px);
+					right: auto;
+					bottom: 0px;
+					top: 0;
+					margin-top: -225px;
+					background-repeat: no-repeat;
+					transform: translatex(-50%);
+
+					@media (min-width: 720px) {
+						width: 1068px;
+						height: 698px;
+						background-size: 1068px 698px;
+						top: -15px;
+						margin-top: -260px;
+					}
+					@media (min-width: 1020px) {
+						width: 3010px;
+						height: 736px;
+						background-size: 3010px 736px;
+					}
+				}
+			}
+
+			//iPhone section
+			.iphone-12 {
+				.image-iphone-12 {
+					background-image: url(../assets/iphone_12_small.jpg);
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/iphone_12_medium.jpg);
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/iphone_12_large.jpg);
+					}
+				}
+			}
+			.iphone-pro {
+				background-color: $dark;
+				position: relative;
+				z-index: -5;
+				overflow: hidden;
+
+				.headline,
+				.subhead {
+					color: $light;
+				}
+				.links-container {
+					.link {
+						color: $linkLight;
+					}
+				}
+				.image-iphone-pro {
+					background-image: url(../assets/iphone_12_pro_small.jpg);
+					margin-top: -250px;
+
+					@media (min-width: 720px) {
+						margin-top: -280px;
+						background-image: url(../assets/iphone_12_pro_medium.jpg);
+					}
+					@media (min-width: 1020px) {
+						margin-top: -300px;
+						top: -15px;
+						background-image: url(../assets/iphone_12_pro_large.jpg);
+					}
+				}
+			}
+			//ipad section
+			.ipad {
+				display: flex;
+				flex-flow: column-reverse;
+				background-color: $backgroundLight;
+				z-index: -1000;
+				position: relative;
+
+				@media (min-width: 720px) {
+					flex-flow: column;
+				}
+
+				.header-wrapper {
+					margin-top: -170px;
+					margin-bottom: 50px;
+					.headline {
+						display: none;
+						@media (min-width: 720px) {
+							display: block;
+						}
+					}
+					@media (min-width: 720px) {
+						margin-top: 0;
+					}
+				}
+				.image-ipad {
+					background-image: url(../assets/ipad_small.jpg);
+					background-position-y: -40px;
+					margin-top: 0px;
+
+					@media (min-width: 720px) {
+						width: 796px;
+						height: 450px;
+						background-size: 796px 450px;
+						background-image: url(../assets/ipad_medium.jpg);
+					}
+					@media (min-width: 1020px) {
+						width: 1155px;
+						height: 495px;
+						background-size: 1155px 495px;
+						background-image: url(../assets/ipad_large.jpg);
+					}
+				}
+			}
+		}
+	}
```

**styles/main-devices.scss**

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

### Documentación por partes

- [00 Boilerplate](../00-boilerplate/readme.md)
- [Top menu](../01-top-menu/readme.md)
- [Main collection](../03-main-collection/readme.md)
