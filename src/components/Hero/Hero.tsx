import SocialMedia from "./SocialMedia";
import heroImage from "../../assets/hero.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex-center bg-primary-white flex-col-reverse justify-evenly px-4 sm:px-6 md:flex-row md:px-20 md:pt-10 lg:px-28">
      <motion.section
        className="flex flex-col gap-8 md:w-1/2"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3 text-[28px]/[114%] tracking-tight lg:gap-5 lg:text-5xl/[117%]">
          <h1>
            <span>Hola, soy</span>{" "}
            <TypeAnimation
              sequence={["Mathew", 3000, "", 1000, "Mathew Kelsey", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontWeight: 800, display: "inline-block" }}
              repeat={0}
              preRenderFirstString={true}
            />
          </h1>
          <p>
            <span className="font-extrabold">Desarrollador </span>
            <span className="text-primary-white text-stroke-1 text-stroke-primary-black font-extrabold">
              Backend
            </span>
          </p>
          <p>
            <span>de </span>
            <span className="font-extrabold">Colombia.</span>
          </p>
        </div>
        <p className="text-base/6 font-normal text-zinc-500">
          Soy un entusiasta de la tecnología apasionado y altamente motivado, con un fuerte enfoque en el desarrollo de soluciones innovadoras. Me especializo en desarrollo backend y también cuento con habilidades en desarrollo web, trabajando con lógica de negocio, APIs, bases de datos y arquitectura de sistemas para crear aplicaciones eficientes, seguras y escalables.
          <br /><br />
          Mi objetivo es seguir creciendo como desarrollador y contribuir a proyectos significativos dentro de la dinámica y siempre cambiante industria tecnológica, aplicando mis habilidades para resolver problemas del mundo real y construir sistemas sólidos y confiables.
        </p>
        <div className="lg:mt-10">
          <SocialMedia />
        </div>
      </motion.section>

      <motion.div
        className="flex-center md:w-1/2"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <img
          src={heroImage}
          alt="Mathew Kelsey - Backend Developer"
          fetchPriority="high"
          className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630"
        />
      </motion.div>
    </div>
  );
}
