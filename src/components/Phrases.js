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
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p class="phrase">
                  "Ha llegado el momento de poner en práctica lo aprendido."
                </p>
                {/* <p className="author">
                  - Radleigh Valentine, experto en ángeles
                </p> */}
              </div>
              <div class="carousel-item">
                <p class="phrase short">
                  "Donde está tu pasión, está tu misión."
                </p>
              </div>
              <div class="carousel-item">
                <p class="phrase">
                  "Sé feliz con lo que tienes para conseguir lo que quieres."
                </p>
              </div>
              <div class="carousel-item">
                <p class="phrase short">
                  "Pies en la tierra y ojos en el cielo."
                </p>
              </div>
              <div class="carousel-item">
                <p class="phrase">"Entre hacer y no hacer es mejor hacer."</p>
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
