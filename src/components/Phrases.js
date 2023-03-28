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
                  Te ayudaré a conectarte con tus ángeles y a recibir su guía
                  amorosa y sabia para superar cualquier desafío o bloqueo.
                </p>
              </div>
              <div class="carousel-item">
                <p class="phrase">
                  Te ayudaré a conectarte con tus ángeles y a recibir su guía
                  amorosa y sabia para superar cualquier desafío o bloqueo.
                </p>
              </div>
              <div class="carousel-item">
                <p class="phrase">
                  Te ayudaré a conectarte con tus ángeles y a recibir su guía
                  amorosa y sabia para superar cualquier desafío o bloqueo.
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
