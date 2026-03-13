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
            Soy un desarrollador Backend de nivel intermedio, apasionado por crear aplicaciones web eficientes, seguras y escalables. Tengo experiencia desarrollando la parte backend de páginas web, utilizando tecnologías modernas para construir APIs, gestionar bases de datos y manejar la lógica de negocio de las aplicaciones.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            He trabajado con Node.js, Express.js, Prisma y MongoDB Atlas desarrollando sistemas backend que incluyen autenticación, gestión de usuarios y manejo de datos. Uno de mis proyectos fue un sistema de inventarios, donde desarrollé un CRUD completo con roles de usuario y autenticación mediante JWT. En este sistema es posible agregar, editar y eliminar productos, así como gestionar su precio a través de una API que controla todo el inventario.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            También desarrollé una aplicación web para la gestión de peticiones PQRS de una universidad, donde implementé un backend completo utilizando Python y FastAPI. En este proyecto trabajé con una base de datos PostgreSQL usando Neon, desarrollando una API más grande con múltiples endpoints y operaciones CRUD para manejar solicitudes, usuarios y estados de las peticiones.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            viewport={{ once: true }}
          >
            Estas experiencias me han permitido fortalecer mis habilidades en desarrollo de APIs, diseño de bases de datos y construcción de sistemas backend robustos, además de mejorar mi capacidad para resolver problemas y desarrollar soluciones prácticas para proyectos reales.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
