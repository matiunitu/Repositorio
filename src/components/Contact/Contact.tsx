import Form from "./Form";
import EmailIcon from "../../assets/email.svg?react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <>
      <section className="bg-primary-black text-primary-black h-20 md:h-25"></section>
      <section
        id="contact"
        className="bg-primary-white relative px-4 py-10 sm:px-6 md:px-10 md:py-20 lg:px-20 xl:px-28"
      >
        <h2 className="text-primary-black mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">Contact</span>{" "}
          <span className="font-extrabold">Me</span>
        </h2>
        <div className="md:flex-row-reverse md:items-center md:gap-15 lg:flex xl:gap-28">
          <div className="my-8 flex w-full flex-col gap-8">
            <motion.h2
              className="text-[28px]/[114%] font-extrabold tracking-tight lg:text-5xl/[117%]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              Hablemos
              <span className="text-stroke-1 text-stroke-primary-black text-primary-white px-3">
                sobre
              </span>
              algo
              <br /> especial
            </motion.h2>
            <p className="text-base/[150%] text-zinc-500">
              Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. 
              ¡Ya sea que tengas una pregunta o simplemente quieras saludar, haré lo mejor para responderte!
            </p>
            <div className="flex flex-col gap-4 text-primary-black">
              <p className="flex items-center transition-all duration-300 hover:pl-3">
                <EmailIcon className="mr-3 h-5 w-5" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mathewkel06@gmail.com&su=Connect%20Request&body=Hola%20Mathew!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  mathewkel06@gmail.com
                </a>
              </p>
              <p className="flex items-center transition-all duration-300 hover:pl-3">
                <span className="mr-3 text-xl">📞</span>
                <a
                  href="tel:+573166456304"
                  className="font-semibold"
                >
                  +57 316 645 6304
                </a>
              </p>
            </div>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
