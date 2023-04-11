import React from "react";

const About = () => {
  return (
    <div
      name="sobre mi"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre mí
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Soy un joven apasionado por la tecnología y la programación, con
          habilidades en HTML, CSS, JavaScript, React y GitHub. Desde que
          finalicé la escuela secundaria como técnico electromecánico, he
          trabajado en diferentes áreas, incluyendo ferretería, cableado y
          colocación de alarmas anti-incendios y cámaras de seguridad, y empleo
          en el sector de comercio.
        </p>
        <br />

        <p className="text-xl">
          Como estudiante de sociología, siempre he estado interesado en
          entender cómo la tecnología impacta nuestras vidas diarias. La verdad
          es que la tecnología está en todas partes, desde nuestras computadoras
          hasta nuestros teléfonos inteligentes, y su impacto en la sociedad es
          enorme. Por eso, estoy super emocionado por aprender más habilidades
          en el campo de la tecnología. Me encanta experimentar con nuevas
          herramientas y tecnologías, y siempre estoy buscando maneras de
          aplicar lo que he aprendido para hacer un cambio positivo en el mundo.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
