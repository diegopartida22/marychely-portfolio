import "./Services.css";
import tarot from "../images/tarot.png";
import angel from "../images/angel.png";
import numerology from "../images/numerologia.png";

function Services() {
  return (
    <section id="services">
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
                      data-target="#numerologia"
                    >
                      Ver más
                    </button>
                    {/* <button type="button" class="btn btn-light">
                    Calculadora
                  </button> */}

                    <div
                      class="modal fade"
                      id="numerologia"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="numerologiaTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="numerologiaLongTitle">
                              Numerología
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
                          <div class="modal-body" className="modal-description">
                            La numerología es una práctica esotérica que utiliza
                            números para entender los patrones y energías de la
                            vida. Como numeróloga, puedo ayudarte a descubrir
                            tus fortalezas y debilidades, así como a identificar
                            las oportunidades y desafíos que podrías enfrentar
                            en el futuro. A través del análisis de tu fecha de
                            nacimiento y/o nombre completo, puedo proporcionarte
                            información valiosa sobre tu personalidad, carrera,
                            relaciones y mucho más. Con mi enfoque personalizado
                            y mi profundo conocimiento de la numerología, puedo
                            ayudarte a tomar decisiones informadas y a tener una
                            mejor comprensión de ti misma y de tu vida en
                            general.
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
                      Te ayudaré a conectarte con tus ángeles y a recibir su
                      guía amorosa y sabia para superar cualquier desafío o
                      bloqueo.
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#terapia"
                    >
                      Ver más
                    </button>

                    <div
                      class="modal fade"
                      id="terapia"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="terapiaTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title"
                              id="terapiaLongTitle"
                              className="modal-title"
                            >
                              Terapia de ángeles
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
                          <div class="modal-body" className="modal-description">
                            La terapia de ángeles es una técnica de curación
                            espiritual que utiliza la conexión con los ángeles
                            para aliviar el estrés, la ansiedad y otros
                            problemas emocionales. Como terapeuta de ángeles,
                            puedo ayudarte a conectarte con tus ángeles y a
                            recibir su guía y apoyo. Trabajo con una variedad de
                            técnicas, como la meditación, la visualización y la
                            comunicación directa con los ángeles, para ayudarte
                            a sanar y encontrar la paz interior. Ya sea que
                            estés lidiando con problemas emocionales,
                            espirituales o físicos, puedo ayudarte a encontrar
                            el camino hacia la sanación y la felicidad.
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Cerrar
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
                      data-target="#CartasModal"
                    >
                      Ver más
                    </button>

                    <div
                      class="modal fade"
                      id="CartasModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="CartasTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title"
                              id="CartasLongTitle"
                              className="modal-title"
                            >
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
                          <div class="modal-body" className="modal-description">
                            La lectura de cartas es una práctica adivinatoria
                            que utiliza cartas especiales, como el Tarot, para
                            obtener información sobre el pasado, el presente y
                            el futuro. Como lectora de cartas, puedo ayudarte a
                            comprender mejor tus circunstancias actuales y a
                            tomar decisiones informadas sobre tu futuro. Utilizo
                            mi intuición y conocimientos especializados para
                            interpretar las cartas y proporcionarte información
                            valiosa sobre tus relaciones, carrera, finanzas y
                            más. Ya sea que busques respuestas a preguntas
                            específicas o simplemente estés interesada en
                            explorar tus posibilidades, puedo ayudarte a
                            encontrar las respuestas que buscas.
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Cerrar
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
    </section>
  );
}

export default Services;
