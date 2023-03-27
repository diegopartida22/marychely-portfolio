import "./Services.css";
import tarot from "../images/tarot.png";
import angel from "../images/angel.png";
import numerology from "../images/numerologia.png";

function Services() {
  return (
    <div className="services">
      <div class="container">
        <h1 className="services-title">Mis Servicios</h1>
        <div class="row">
          <div class="col-lg-4 col-12">
            <div className="services-card">
              <div class="card" className="services-cards">
                <img
                  src={numerology}
                  class="card-img-top"
                  alt="numerology"
                  className="services-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Numerología</h5>
                  <p class="card-text">
                    Te ayudaré a descubrir tu camino de vida y a entender los
                    patrones numéricos que influyen en tu vida.
                  </p>
                  <a
                    href="https://getbootstrap.com/docs/5.3/customize/color-modes/"
                    class="btn btn-primary"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div className="services-card">
              <div class="card" className="services-cards">
                <img
                  src={angel}
                  class="card-img-top"
                  alt="angeles"
                  className="services-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Terapia de ángeles</h5>
                  <p class="card-text">
                    Te ayudaré a conectarte con tus ángeles y a recibir su guía
                    amorosa y sabia para superar cualquier desafío o bloqueo.
                  </p>
                  <a
                    href="https://getbootstrap.com/docs/5.3/customize/color-modes/"
                    class="btn btn-primary"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div className="services-card">
              <div class="card" className="services-cards">
                <img
                  src={tarot}
                  class="card-img-top"
                  alt="tarot"
                  className="services-image"
                />
                <div class="card-body">
                  <h5 class="card-title">Lectura de cartas</h5>
                  <p class="card-text">
                    Te ayudaré a explorar tu futuro y descubrir las opciones y
                    oportunidades que se presentan ante ti.
                  </p>
                  <a
                    href="https://getbootstrap.com/docs/5.3/customize/color-modes/"
                    class="btn btn-primary"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
