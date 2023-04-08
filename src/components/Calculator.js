import React, { useState } from "react";
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-scroll";
import "./Calculator.css";

function Calculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [result, setResult] = useState("");
  const [description, setDescription] = useState("");

  const actualYear = new Date().getFullYear();

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSubmit = (event) => {
    let date = new Date();
    let year = date.getFullYear();
    let yearSum = 0;
    year = year.toString().split("");

    // get the sum of the digits of the year
    year.forEach((element) => {
      yearSum += parseInt(element);
    });

    event.preventDefault();
    setSelectedDay(day);
    setSelectedMonth(month);
    let sum = parseInt(day) + parseInt(month) + yearSum;
    const digits = Array.from(String(sum), Number);
    let newResult = digits.reduce((acc, curr) => acc + curr, 0);
    if (newResult === 10) {
      newResult = 1;
    } else if (newResult === 11) {
      newResult = 2;
    }
    setResult(newResult);

    let description = new Map([
      [
        1,
        "Es el momento de tomar decisiones, ser independiente y actuar con determinación. Debes estar abierto/a a lo nuevo, tomar la iniciativa y emprender cosas nuevas y diferentes. Es un buen momento para mejorar tu salud y bienestar. Es un año para transformarte en una persona nueva y renovada.",
      ],
      [
        2,
        "Se trata de colaboración, alianzas y trabajo en equipo. Es un año idal para asociarse y enamorarse, debes cuidar tus emociones y no tomar las cosas personal. Es un año de despertar de conciencia y cooperación. Aceptar cambiar o salir de una relación, darte cuenta de lo que no te dabas cuenta.",
      ],
      [
        3,
        "Se trata de celebrar, divertirse y expresar alegría. Es un año de éxito social en el que es importante confiar en ti mismo/a y creer en tus sueños. Es un momento para expandirse y compartir tu entusiasmo con los demás.",
      ],
      [
        4,
        "El año personal 4 se trata de disciplina, trabajo y organización. Es importante definir tus metas y hacer un plan de trabajo para cumplirlas, y poner orden en diferentes áreas de tu vida. La organización y la planificación son clave para lograr tus objetivos y tu mejor aliada será tu agenda.",
      ],
      [
        5,
        "Es un período de cambios, comunicación y movimiento. Es un año de progreso en diferentes áreas de tu vida, y los viajes pueden ser frecuentes. Debes estar atento/a a los cambios e imprevistos y soltar aquello que te mantiene atado/a. Es un momento para fluir con los acontecimientos y disfrutar de la vida.",
      ],
      [
        6,
        "El año personal 6 se enfoca en el amor, la estabilidad y la familia. Debes trabajar en fortalecer tus relaciones familiares y cuidar de tu salud. Es un año para expandir tus proyectos y conectarte con tus seres queridos, y también para hacer mejoras en tu hogar. Brindar amor y cuidado a tu familia es clave, al igual que nutrirte física y emocionalmente. Planear viajes que te permitan conectarte con la naturaleza es recomendable.",
      ],
      [
        7,
        "El año 7 es un tiempo de introspección y crecimiento personal. Es importante prepararse para crecer y aprender a través del autoconocimiento y el estudio. Es un momento para curar la mente, cuidar los pensamientos y adquirir mayor conciencia. La meditación y los temas espirituales pueden ser de gran ayuda. Este ciclo también puede ser un buen momento para tomar cursos y enfocarse en el desarrollo personal.",
      ],
      [
        8,
        "El año 8 es de abundancia y fortuna, con mejoras en la economía y buenos resultados en proyectos. Es un momento ideal para alcanzar metas ambiciosas y avanzar en el trabajo o en la vida personal. Se debe tener confianza en merecer lo que se recibe y prestar atención a pensamientos, palabras y acciones ya que todo será concedido. Es un ciclo para vivir y disfrutar la abundancia en todos los aspectos de la vida.",
      ],
      [
        9,
        "Este es un año de transformación, purificación y terminación. Es el momento de hacer una evaluación profunda de tu vida y dejar ir todo lo que ya no te sirve. Es importante soltar hábitos, pensamientos y comportamientos que te están limitando. Es un año para hacer una limpieza profunda de tu casa, mente y vida en general. Todo lo que esté inconcluso debe tener un desenlace. Agradece por las experiencias que has tenido y por todo lo que has aprendido. Es el momento de transformarte en una mejor versión de ti mismo. Da gracias por todo lo que viene y por lo que se fue.",
      ],
    ]);

    setDescription(description.get(newResult));
  };

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(<option key={i}>{i}</option>);
  }

  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(<option key={i}>{i}</option>);
  }

  return (
    <section id="calculator">
      <div className="container">
        <h1 className="calculator-title">Tu año personal</h1>
        <h3 className="year-title">
          ¿Cómo será tu año personal este {actualYear}?
        </h3>
        <p className="calculator-description">
          Al conocer cuál es tu año personal, puedes prepararte mental y
          emocionalmente para las experiencias que puedan surgir, identificar
          las lecciones que puedes aprender y enfocarte en tus metas y objetivos
          específicos para ese año.
        </p>
        <div class="row">
          <div class="col-lg-6 col-12">
            <form onSubmit={handleSubmit} className="form-container">
              <div controlId="dayInput" className="form-group">
                <label htmlFor="dayInput" className="label-input">
                  Día de nacimiento:
                </label>
                <select
                  value={day}
                  onChange={handleDayChange}
                  className="form-control"
                >
                  <option value="">Selecciona un día</option>
                  {days}
                </select>
              </div>
              <div controlId="monthInput" className="form-group">
                <label htmlFor="monthInput" className="label-input">
                  Mes de nacimiento:
                </label>
                <select
                  value={month}
                  onChange={handleMonthChange}
                  className="form-control month-input"
                >
                  <option value="">Selecciona un mes</option>
                  {months}
                </select>
              </div>

              <Link
                to="personalYear"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={handleSubmit}
                className="calculator-button"
              >
                Calcular
              </Link>
            </form>
          </div>

          <div className="col-lg-6 col-12">
            <div className="year-description">
              {!selectedDay && !selectedMonth && (
                <section id="personalYear">
                  <h3>¿Cuál es tu año personal?</h3>
                  <p className="p-description">
                    Para saber cómo será tu año personal, selecciona un día y un
                    mes.
                  </p>
                </section>
              )}
              {selectedDay && selectedMonth && result && (
                <section id="personalYear">
                  {/* Día: {selectedDay}, Mes: {selectedMonth}, Año {actualYear}, */}
                  <h3>
                    Tu año personal es{" "}
                    <span className="result-span">{result}</span>
                  </h3>
                  <p className="p-description">{description}</p>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
