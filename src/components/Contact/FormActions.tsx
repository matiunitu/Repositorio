import SocialCard from "../Hero/SocialCard";
import InstagramIcon from "../../assets/social/instagram.svg?react";
import LinkedinIcon from "../../assets/social/linkedin.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";

export default function FormActions({ clicked }: { clicked: boolean }) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <button
        type="submit"
        disabled={clicked}
        className="group text-primary-white bg-primary-black hover:text-primary-black hover:bg-primary-white hover:shadow-bottom flex-center disabled:text-primary-black disabled:bg-primary-white disabled:shadow-bottom relative h-14 w-[153px] cursor-pointer gap-2 rounded px-4 py-3 font-semibold transition-all active:translate-y-1 md:border-2 xl:w-44"
      >
        {clicked ? "Enviando..." : "Enviar mensaje"}
      </button>
      <div className="flex gap-3 md:justify-evenly md:gap-5">
        <SocialCard path="https://co.linkedin.com/in/mathew-kelsey-g">
          <LinkedinIcon className="group-hover:fill-primary-white h-5 w-5" />
        </SocialCard>
        <SocialCard path="https://github.com/matiunitu">
          <GitHubIcon className="group-hover:fill-primary-white h-5 w-5" />
        </SocialCard>
        <SocialCard path="https://www.instagram.com/by_mathewrb/">
          <InstagramIcon className="group-hover:stroke-primary-white h-5 w-5" />
        </SocialCard>
      </div>
    </div>
  );
}
