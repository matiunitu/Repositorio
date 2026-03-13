import logoImg from "../../assets/logo.png";

export default function Logo() {
  return (
    <div
      className="flex-center cursor-pointer transition-all duration-300 ease-in hover:scale-125"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={logoImg} alt="MK Logo" className="w-[55px] h-[55px] object-contain" />
    </div>
  );
}
