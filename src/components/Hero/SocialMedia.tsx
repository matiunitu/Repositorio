import SocialCard from "./SocialCard";
import InstagramIcon from "../../assets/social/instagram.svg?react";
import LinkedinIcon from "../../assets/social/linkedin.svg?react";
import GmailIcon from "../../assets/social/gmail.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-black">
      <SocialCard path="https://co.linkedin.com/in/mathew-kelsey-g">
        <LinkedinIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://github.com/matiunitu">
        <GitHubIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://www.instagram.com/by_mathewrb/">
        <InstagramIcon className="group-hover:stroke-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://mail.google.com/mail/?view=cm&fs=1&to=mathewkel06@gmail.com&su=Connect%20Request&body=Hola%20Mathew!">
        <GmailIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
    </div>
  );
}
