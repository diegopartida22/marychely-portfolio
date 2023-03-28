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
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Ver más
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
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
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Ver más
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
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
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#cartasModal"
                  >
                    Ver más
                  </button>

                  <div
                    class="modal fade"
                    id="cartasModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="cartasModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="cartasModalLongTitle">
                            Lectura de cartas
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>
                            La lectura de cartas es una herramienta que te ayuda
                            a explorar tu futuro y descubrir las opciones y las
                            oportunidades que se presentan ante ti.
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
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
