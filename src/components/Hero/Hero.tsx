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
              Full-Stack
            </span>
          </p>
          <p>
            <span>de </span>
            <span className="font-extrabold">Colombia.</span>
          </p>
        </div>
        <p className="text-base/6 font-normal text-zinc-500">
          Soy un desarrollador full-stack apasionado por crear aplicaciones web completas: desde interfaces modernas y responsivas hasta APIs, lógica de negocio y bases de datos. Trabajo con tecnologías como React, Next.js, Node.js y Python para construir soluciones eficientes y escalables.
          <br /><br />
          También incorporo herramientas de inteligencia artificial en mi flujo de trabajo y sigo creciendo para resolver problemas reales con tecnología.
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
          alt="Mathew Kelsey - Full-Stack Developer"
          fetchPriority="high"
          className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630"
        />
      </motion.div>
    </div>
  );
}
