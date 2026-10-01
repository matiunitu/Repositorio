import heroImage from "../../assets/hero.png";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <img src={heroImage} alt="Mathew Kelsey illustration" className="max-h-[500px] object-contain" />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span>{" "}
          <span className="font-extrabold">Me</span>
        </h3>
        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            Soy un desarrollador full-stack apasionado por crear aplicaciones web eficientes, seguras y fáciles de usar. Puedo trabajar tanto en interfaces de usuario como en servicios backend, conectando cada parte para ofrecer experiencias completas.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            En el frontend trabajo con React, Next.js, JavaScript y TypeScript para construir interfaces web. En el backend he desarrollado APIs con Node.js, Express.js y Python, además de trabajar con bases de datos como MongoDB y PostgreSQL.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            Entre mis proyectos hay un sistema de inventarios con gestión de productos, roles de usuario y autenticación JWT, y una aplicación de gestión de peticiones PQRS desarrollada con FastAPI y PostgreSQL. Estas experiencias me han permitido participar en distintas capas de aplicaciones web.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            viewport={{ once: true }}
          >
            También utilizo herramientas de inteligencia artificial como OpenAI, Claude de Anthropic y Google Antigravity para apoyar mi proceso de desarrollo y explorar nuevas formas de crear soluciones.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
