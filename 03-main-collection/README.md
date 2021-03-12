## 6.2 Main

---

Partimos del ejemplo anterior **02-main-devices**

### 6.2.3 Sección Collection.

Esta sección tiene un estructura similar a la anterior pero como veremos en el CSS la distribución cambia.

**index.html**

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
			<div class="online-shopping-container">
				<p class="online-shopping-wrapper">
					<a href="#" class="link">Compra online</a> con la ayuda de un
					Especialista y disfruta de envío gratuito sin contacto físico.
				</p>
			</div>
			<section class="devices-container">
				<div class="content iphone-12">
					<div class="header-wrapper">
						<h2 class="headline">iPhone 12</h2>
						<h3 class="subhead" role="presentation">
							Más allá de la velocidad.
						</h3>
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
							<a class="link" href="#" aria-label="Comprar un iPhone 12"
								>Comprar</a
							>
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

-			<section class="collection">
-				Hello section collection
-				<div>Hello watch</div>
-				<div>Hello One</div>
-				<div>Hello watch2</div>
-				<div>Hello AirPods</div>
-				<div>Hello Tv</div>
-				<div>Hello MacBook</div>
-			</section>

+			<section class="collection-container">
+				<div class="content watch">
+					<div class="header-collection-wrapper">
+						<h4 class="headline-image">
+							<span class="visuallyhidden">Apple Watch Series 6</span>
+						</h4>
+						<h5 class="subhead" role="presentation">
+							Presentamos la Black Unity Collection.
+						</h5>
+
+						<div class="links-container">
+							<a class="link" href="#"
+								aria-label="Más información sobre el Apple Watch Series 6 Black Unity">Más información</a>
+							<a class="link" href="#" aria-label="Comprar Apple Watch Series 6 Black Unity">Comprar</a>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-watch"></figure>
+					</div>
+				</div>
+				<div class="content one">
+					<div class="header-collection-wrapper">
+						<h4 class="headline-image">
+							<span class="visuallyhidden">Apple One</span>
+						</h4>
+						<h5 class="subhead" role="presentation">
+							Disfruta de cuatro servicios de Apple en una sola
+							suscripción. Te llevarás más por menos.
+						</h5>
+						<div class="links-container">
+							<a class="link" href="#" aria-label="Más información sobre Apple One">Más información</a>
+							<a class="link" href="#" aria-label="Prueba Apple One gratis">Pruébalo gratis</a>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-one"></figure>
+					</div>
+				</div>
+				<div class="content watch2">
+					<div class="header-collection-wrapper">
+						<p class="offert">
+							Oferta disponible por tiempo limitado
+						</p>
+						<h4 class="headline">Diseñado con tu corazón en mente.</h4>
+						<h5 class="subhead" role="presentation">
+							En febrero, llévate un Apple Watch por menos con los
+							descuentos por renovación. Compra un Apple Watch
+							Series 6 desde 259 €
+							o un Apple Watch SE
+							desde 229 €.
+						</h5>
+
+						<div class="links-container">
+							<a class="link" aria-label="Ver oferta de febrero para el Apple Watch" href="#">Comprar</a>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-watch2"></figure>
+					</div>
+				</div>
+				<div class="content airpods">
+					<div class="header-collection-wrapper">
+						<h4 class="headline">AirPods Max</h4>
+						<div class="links-container">
+							<a class="link" href="#" aria-label="Más información sobre los AirPods Max">Más información</a>
+							<a class="link" href="#" aria-label="Comprar AirPods Max">Comprar</a>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-airpods"></figure>
+					</div>
+				</div>
+				<div class="content tv">
+					<div class="header-collection-wrapper">
+						<h4 class="headline-image">
+							<span class="visuallyhidden">Apple TV plus</span>
+						</h4>
+
+						<div class="play">
+							<h5 class="visuallyhidden">
+								Nueva Serie, El Show de Snoopy
+							</h5>
+
+							<span class="" href="#""
+										aria-label=" Estreno de un Apple Original. Disfruta de «El Show de Snoopy» en la app Apple TV.">Ver
+								ahora</span>
+							<figure class="play-icon"></figure>
+
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-tv"></figure>
+					</div>
+				</div>
+				<div class="content macbook">
+					<div class="header-collection-wrapper">
+						<h4 class="headline">MacBook Air</h4>
+						<h5 class="subhead" role="presentation">
+							El poder no ocupa lugar.
+						</h5>
+						<div class="links-container">
+							<a class="link" href="#" aria-label="Más información sobre el MacBook Air">Más información</a>
+							<a class="link" href="#" aria-label="Comprar MacBook Air">Comprar</a>
+						</div>
+					</div>
+					<div class="img-container">
+						<figure class="image-macbook"></figure>
+					</div>
+				</div>
+			</section>
+		</main>
-		<footer class="container">Hello footer</footer>
+        <footer class="footer">
+			<h2 class="visuallyhidden">Pie de página de Apple</h2>
+			<section class="notes" aria-label="Notas a pie de página">
+				<ul>
+					<li>1. La oferta con pago mensual se basa en una financiación de 24 meses al <span
+							class="underline bold">0 % TAE</span>. Financiación ofrecida por Banco Cetelem
+						S.A.U.<br><br> <span class="bold">Ejemplo de financiación: 809 € pagados en 24 meses al 0 % TIN
+							y <span class="underline">0 % TAE</span>. 23 cuotas de 33,71 € y una última cuota de 33,67
+							€. Intereses totales: 0 €. Coste total del crédito: 0 €. Precio de adquisición al contado:
+							809 €. Importe total adeudado: 809 €. Precio total a plazos: 809 €.</span><br><br> Los
+						descuentos dependen del estado, año y configuración del dispositivo que entregues. Para poder
+						cambiar tu dispositivo por un descuento o una tarjeta regalo del Apple Store, tienes que ser
+						mayor de edad. No todos los dispositivos pueden acogerse a esta oferta. Para obtener más
+						información sobre los dispositivos válidos y su reciclaje, consulta a nuestro <a href="#">socio</a>.
+						Puede haber restricciones y limitaciones. El pago dependerá de que el
+						estado del dispositivo coincida con el indicado durante la tasación. Apple se reserva el derecho
+						a rechazar o limitar la cantidad de dispositivos según su criterio. El valor de tu dispositivo
+						se descontará del precio del producto Apple nuevo. Esta oferta puede no estar disponible en
+						todas las tiendas. Algunas tiendas pueden exigir más requisitos.</li>
+
+					<li>2. La oferta con pago mensual se basa en una financiación de 24 meses al <span
+							class="underline bold">0 % TAE</span>. Financiación ofrecida por Banco Cetelem
+						S.A.U.<br><br> <span class="bold">Ejemplo de financiación: 1.159 € pagados en 24 meses al 0 %
+							TIN y <span class="underline">0 % TAE</span>. 23 cuotas de 48,29 € y una última cuota de
+							48,33 €. Intereses totales: 0 €. Coste total del crédito: 0 €. Precio de adquisición al
+							contado: 1.159 €. Importe total adeudado: 1.159 €. Precio total a plazos: 1.159
+							€.</span><br><br> Los descuentos dependen del estado, año y configuración del dispositivo
+						que entregues. Para poder cambiar tu dispositivo por un descuento o una tarjeta regalo del Apple
+						Store, tienes que ser mayor de edad. No todos los dispositivos pueden acogerse a esta oferta.
+						Para obtener más información sobre los dispositivos válidos y su reciclaje, consulta a nuestro
+						<a href="#">socio</a>. Puede haber restricciones y limitaciones. El pago dependerá de que el
+						estado del dispositivo coincida con el indicado durante la tasación. Apple se reserva el derecho
+						a rechazar o limitar la cantidad de dispositivos según su criterio. El valor de tu dispositivo
+						se descontará del precio del producto Apple nuevo. Esta oferta puede no estar disponible en
+						todas las tiendas. Algunas tiendas pueden exigir más requisitos.>
+					</li>
+
+					<li>3. La prueba gratuita de Apple One solo incluye los servicios que no estés
+						utilizando actualmente mediante una suscripción u otra prueba gratuita. Si no se cancela, la
+						suscripción se renueva automáticamente. Sujeto a restricciones y otras <a href="#">condiciones</a>.
+					</li>
+					<li>4. Los valores de renovación pueden variar. El precio promocional del Apple
+						Watch Series 6 está sujeto a la entrega de un Apple Watch Series 4 en buenas condiciones. El
+						precio promocional del Apple Watch SE está sujeto a la entrega de un Apple Watch Series 3 en
+						buenas condiciones. Los descuentos adicionales por renovación requieren la entrega de un Apple
+						Watch Series 3, 4 o 5 (solo modelos de aluminio con GPS) y la compra de un nuevo Apple Watch, y
+						están sujetos a límites y disponibilidad. Tienes que ser mayor de edad. Apple y sus socios se
+						reservan el derecho a rechazar o limitar cualquier transacción de renovación. La entrega en
+						tienda requiere la presentación de un documento de identidad válido (la legislación vigente
+						puede exigir que se guarde esta información). Pueden aplicarse impuestos locales al importe
+						completo del Apple Watch nuevo. Pueden aplicarse condiciones adicionales de Apple o sus
+						socios.</li>
+					<li>Apple TV+ por 4,99 €/mes después de la prueba gratuita. Una sola suscripción por cuenta compartida
+						de En Familia. La oferta tiene validez durante 3 meses desde que se activa un dispositivo válido. Si
+						no se cancela, la suscripción se renueva automáticamente. Sujeto a restricciones y otras <a
+							href="#">condiciones</a>.</li>
+				</ul>
+			</section>
+
+		</footer>
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

```diff
-	main {
-		.collection {
-			border: 1px solid black;
-			display: block;
-			box-sizing: border-box;
-			width: 100%;
-			padding: 2%;
-			margin: 0 auto;
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
+		.collection-container {
+			display: grid;
+			grid-template-columns: 1fr;
+			gap: 1em;
+			box-sizing: border-box;
+
+			@media (min-width: 720px) {
+				grid-template-columns: 1fr 1fr;
+				padding: 1em;
+			}
+
+			@media (min-width: 1020px) {
+				gap: 1em;
+				padding: 1em;
+			}
+
+			.visuallyhidden {
+				visibility: hidden;
+				position: absolute;
+			}
+
+			.headline-image {
+				position: relative;
+				background-repeat: no-repeat;
+				background-position: center center;
+			}
+			.headline {
+				font-size: 2em;
+				margin: 0 auto;
+				max-width: 320px;
+
+				@media (min-width: 1020px) {
+					font-size: 2.5em;
+					max-width: 430px;
+				}
+			}
+			.subhead {
+				font-size: 1.18em;
+				max-width: 310px;
+				line-height: 1.21053;
+
+				@media (min-width: 1020px) {
+					max-width: 430px;
+					margin-top: 11px;
+					font-size: 1.3em;
+				}
+			}
+
+			.links-container {
+				font-size: 1.075em;
+			}
+			.content {
+				overflow: hidden;
+				background-color: $backgroundLight;
+				z-index: -1;
+				height: 500px;
+
+				@media (min-width: 720px) {
+					height: 490px;
+				}
+				@media (min-width: 1020px) {
+					height: 580px;
+				}
+			}
+
+			.img-container {
+				position: relative;
+				width: 100%;
+				height: 100%;
+				z-index: -1;
+				font-size: 1rem;
+
+				figure {
+					width: 734px;
+					height: 548px;
+					background-size: 734px 548px;
+					background-position: center center;
+					background-repeat: no-repeat;
+					position: relative;
+					margin: 0;
+					padding: 0;
+					left: calc(50% + 0px);
+					right: auto;
+					bottom: 0;
+					top: -45%;
+					transform: translatex(-50%);
+
+					@media (min-width: 720px) {
+						width: 516px;
+						height: 490px;
+						background-size: 516px 490px;
+						top: -35%;
+					}
+					@media (min-width: 1020px) {
+						width: 1262px;
+						height: 580px;
+						background-size: 1262px 580px;
+						top: -30%;
+					}
+				}
+			}
+
+			.watch {
+				.headline-image {
+					background-image: url(../assets/promo_logo_watch_black_small.png);
+					height: 47px;
+					background-size: 121px 47px;
+					top: 1.25em;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/promo_logo_watch_black_medium.+	png);
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/promo_logo_watch_black_large.png)+	;
+						height: 57px;
+						background-size: 148px 57px;
+						top: 2em;
+					}
+				}
+
+				.subhead {
+					color: $light;
+					margin-top: 1.5em;
+					position: relative;
+
+					@media (min-width: 1020px) {
+						margin-top: 2em;
+						font-size: 1.3em;
+					}
+				}
+
+				.links-container {
+					.link {
+						color: $linkLight;
+					}
+				}
+				.image-watch {
+					background-image: url(../assets/promo_watch_small.jpg);
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/promo_watch_medium.jpg);
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/promo_watch_large.jpg);
+					}
+				}
+			}
+			.one {
+				.headline-image {
+					background-image: url(../assets/one-small.png);
+					height: 27px;
+					background-size: 108px 27px;
+					top: 2em;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/one-medium.png);
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/one-large.png);
+						height: 35px;
+						background-size: 135px 35px;
+					}
+				}
+
+				.subhead {
+					margin-top: 2.5em;
+					@media (min-width: 1020px) {
+						margin-top: 2em;
+						font-size: 1.3em;
+					}
+				}
+
+				.image-one {
+					background-image: url(../assets/tile_small.jpg);
+					width: 350px;
+					height: 260px;
+					background-size: 350px 260px;
+					top: 5%;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/tile_medium.jpg);
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/tile_large.jpg);
+						width: 562px;
+						height: 330px;
+						background-size: 562px 330px;
+						top: 2em;
+					}
+				}
+			}
+			.watch2 {
+				.offert {
+					color: $offer;
+					font-family: $SFProTextRegular;
+					font-size: 0.7em;
+					text-align: center;
+					margin: 2em 0 0;
+
+					@media (min-width: 720px) {
+						font-size: 0.75em;
+					}
+				}
+
+				.subhead {
+					font-size: 1.063em;
+					top: 0.3em;
+
+					@media (min-width: 720px) {
+						max-width: 500px;
+						font-size: 1.1em;
+						margin-top: 0.5em;
+					}
+				}
+
+				.image-watch2 {
+					background-image: url(../assets/promo_watch_heart_small.jpg);
+					top: -52%;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/promo_watch_heart_medium.jpg);
+						top: -47%;
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/promo_watch_heart_large.jpg);
+						top: -40%;
+					}
+				}
+			}
+			.airpods {
+				.headline {
+					margin-top: 1em;
+				}
+				.image-airpods {
+					background-image: url(../assets/tile_airpods_small.jpg);
+					top: -30%;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/tile_airpods_medium.jpg);
+						top: -23%;
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/tile_airpods_large.jpg);
+					}
+				}
+			}
+			.tv {
+				.headline-image {
+					background-image: url(../assets/logo_apple-tv_small.png);
+					height: 27px;
+					background-size: 69px 27px;
+					top: 1em;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/logo_apple-tv_medium.png);
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/logo_apple-tv_large.png);
+					}
+				}
+				.header-collection-wrapper {
+					position: relative;
+				}
+				.play {
+					cursor: pointer;
+					position: absolute;
+					top: 22em;
+					width: 100%;
+					font-family: $SFProTextRegular;
+					display: flex;
+					flex-flow: row;
+					justify-content: center;
+					align-content: center;
+
+					@media (min-width: 1020px) {
+						top: 24em;
+					}
+
+					span {
+						color: $light;
+						text-decoration: none;
+						display: block;
+						padding: 0;
+						margin: 0 0.5em;
+					}
+
+					.play-icon {
+						background-image: url(../assets/icons/play.svg);
+						background-size: 18px 18px;
+						width: 18px;
+						height: 18px;
+						border-radius: 50%;
+						padding: 0;
+						margin: 0;
+					}
+				}
+				.image-tv {
+					background-image: url(../assets/promo_snoopy_small.jpg);
+					top: -24%;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/promo_snoopy_medium.jpg);
+						top: -20%;
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/promo_snoopy_large.jpg);
+					}
+				}
+			}
+			.macbook {
+				background-color: $dark;
+
+				.headline {
+					color: $light;
+					margin: 1.5em auto 0.2em;
+				}
+				.subhead {
+					color: $light;
+					margin: 0.2em auto;
+				}
+				.links-container {
+					.link {
+						color: $linkLight;
+					}
+				}
+				.image-macbook {
+					background-image: url(../assets/macbook_air_small.jpg);
+					top: -35%;
+
+					@media (min-width: 720px) {
+						background-image: url(../assets/macbook_air_medium.jpg);
+					}
+					@media (min-width: 1020px) {
+						background-image: url(../assets/macbook_air_large.jpg);
+					}
+				}
+			}
+		}
+	}
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

---

## Bonus Track

La colocación, márgenes, espaciados entre elementos, tamaños, etc... son valores de las propiedas que vamos añadiendo y que tendremos que ir probando hasta ajustar nuestro desarrollo lo más fielmente posible al diseño. Para esto vamos a utilizar valores relativos `em`, `rem` y `%` evitando siempre que sea posible el uso de valores absolutos en `px`.

Los valores `rem` utilizan como referencia el `font-size` definido en el elemento raíz del documento `<html>`, es decir si definimos en esta etiqueta un `font-size: 16px` en el resto del documento `1rem` sera equivalente a `16px`, si no se define se toma el valor por defecto del navegador o el valor que el usuario haya establecido en este.

Los valores `em` funcionan igual que `rem` pero relativos al primer `font-size` que se encuentre definido en su contenedor padre. Lo vemos mejor con un ejemplo.

Tenemos el siguiente html:

```html
<html>
	<body>
		<div class="container">
			<p>Soy un elemento hijo de .container</p>
		</div>
	</body>
</html>
```

Y su CSS:

```css
html {
	font-size: 100%; /* 100% = 16px */
}
div.container {
	font-size: 2em;
}
p {
	font-size: 1em;
}
```

Aquí el equivalente en `px` para `div.container` es de `32px` ya que su referencia es el `font-size` de `<html>` pero para `<p>` su referente es `<div class="container">` y su `font-size: 1em;` en `px` es `32px` ya que toma como referencia su contenedor padre más directo.

Si cambiamos en `<p>` su valor a `1rem` su `font-size` en pixels pasaría a ser de `16px`.

> Utilizaremos `em` para conseguir componentes aislados y así poder reutilizarlos.

> Utilizaremos `rem` para establecer el valor inicial desde el componente raíz de nuestro documento.

> La combinación de ambos tipos de valores y su utilización a la hora de definir márgenes o paddings harán que consigamos un diseño mucho más flexible y responsivo ya que a la hora de escalar todo se adaptara de manera proporcional al elemento clave.

---

## Bonuns Track 2

Siempre habrá pequeñas variaciones respecto al diseño original, sobre todo en los textos ya que no es lo mismo ajustar un texto en Photoshop o Illustrator que mediante código. La flexibilidad que nos dan estos programas no la tenemos en CSS, por eso es conveniente que tanto diseñador como programador conozcan un poco el trabajo de ambas partes. Conseguir el "pixel perfect" no solo va ha depender de lo buen maquetador que seas, un buen diseño con perspectiva es fundamental, por que nada es imposible pero sí poco rentable por muy bonito que sea ;-) .

Los iconos están añadidos mediante CSS con la propiedad `background-image`, también se podrían haber añadido como elemento `<image>` en el html. Hemos utilizado el formato `.svg`, este formato nos brinda la ventaja de escalado sin pérdida y la posibilidad de cambiar ciertas propiedades como el color mediante código.

> _Toda imagen basada en mapa de bits (píxeles) sufre una pérdida de calidad y definición al ser escalada. Esto es mucho más evidente cuando el escalado es de ampliación._

> _Las imágenes vectoriales están formadas por vectores. Un vector es un objeto geométrico definido mediante cálculos matemáticos, esta es la razón por la que este tipo de imágenes no tiene pérdidas de calidad al ser escaladas. Una fuente o tipografía es un ejemplo claro de imágen vectorial._

---

**styles/footer.scss**

```diff
-	footer {
-		border: 1px solid black;
-		display: block;
-		box-sizing: border-box;
-		width: 100%;
-		padding: 2%;
-		margin: 0 auto;
-		background-color: darkslategray;
-		color: white;
-	}

+	footer {
+		background-color: $primaryLight;
+		min-width: 320px;
+		font-size: 12px;
+		font-family: $SFProTextRegular;
+		color: $primaryDark;
+		margin-top: 1em;
+
+		.visuallyhidden {
+			visibility: hidden;
+			position: absolute;
+		}
+
+		.bold {
+			font-weight: bold;
+		}
+
+		.underline {
+			text-decoration: underline;
+		}
+
+		ul {
+			border-bottom: 1px solid #d2d2d7;
+			list-style: none;
+			padding: 0 0 1.8em;
+			margin: 0 auto;
+
+			li {
+				padding-bottom: 0.8em;
+			}
+		}
+
+		a {
+			text-decoration: none;
+			color: $secondaryDark;
+		}
+
+		.notes {
+			color: $secondary;
+			padding: 1.2em;
+			max-width: 980px;
+			margin: 0 auto;
+			line-height: 1.33337;
+
+			@media (min-width: 720px) {
+				padding: 1.8em;
+			}
+		}
+	}

```
