## 6.2 Main

---

[6.2 Main](main.md)

[6.2.2 Sección dispositivos (iPhone, iPhone Pro y iPad)](main-devices.md)

---

### 6.2.3 Sección Collection.

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

---

[6.2 Main](main.md)

[6.2.2 Sección dispositivos (iPhone, iPhone Pro y iPad)](main-devices.md)

---
