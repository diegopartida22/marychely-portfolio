import "./AboutMe.css";
import img from "../images/image3.jpeg";

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="aboutme-container">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col">
              <h1 className="aboutme-title">¿Quién Soy?</h1>
              <p className="aboutme-description">
                Como profesional de la numerología y la consultoría 
                en superación personal, mi objetivo es ayudar a las 
                personas a alcanzar su máximo potencial. Además, 
                como coach y mentor de certámenes de belleza, 
                me apasiona potenciar los talentos y habilidades 
                de las participantes para reforzar su autoconfianza, 
                entrenamiento mental y empoderamiento personal. 
                Creo en el poder de la mente y en la importancia 
                del desarrollo personal constante para lograr una 
                vida plena y satisfactoria. Si estás buscando mejorar 
                tu vida y alcanzar tus metas, estoy aquí para ayudarte 
                en el camino. 
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
