import "./AboutMe.css";
import img from "../images/image2.jpeg";

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="aboutme-container">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col">
              <h1 className="aboutme-title">¿Quién Soy?</h1>
              <p className="aboutme-description">
                Soy una Numeróloga y Tarotista que ofrece lecturas
                personalizadas para ayudarte a descubrir tu propósito y
                encontrar claridad en tu presente y futuro. Con mi enfoque único
                en la interpretación de números y cartas, puedo ayudarte a
                superar obstáculos y tomar decisiones para alcanzar tus metas y
                objetivos. Permíteme guiarte hacia la claridad y el propósito
                que estás buscando.
              </p>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <img src={img} alt="Marychely" className="aboutme-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
