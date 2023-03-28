import "./Phrases.css";

function Phrases() {
  return (
    <section id="phrases">
      <div className="phrases-container">
        <div class="container">
          <h1 className="phrases-title">Mis frases favoritas</h1>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p class="phrase">
                  "Los ángeles son nuestros guías divinos, siempre dispuestos a
                  ayudarnos a encontrar nuestro camino en la vida."
                </p>
                {/* <p className="author">
                  - Radleigh Valentine, experto en ángeles
                </p> */}
              </div>
              <div class="carousel-item">
                <p class="phrase">
                  "La numerología nos recuerda que cada número tiene una
                  vibración única y que somos parte de un universo
                  interconectado."
                </p>
              </div>
              <div class="carousel-item">
                <p class="phrase">
                  "Cuando sientas que has llegado al final de tu camino,
                  recuerda que los ángeles están contigo, iluminando tu camino
                  hacia una nueva dirección."
                </p>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phrases;
