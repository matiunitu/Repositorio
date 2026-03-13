import Logo from "../Header/Logo";

export default function Footer() {
  return (
    <footer className="bg-primary-black text-primary-white flex items-center justify-between px-5 py-5 md:px-20 lg:px-[112px]">
      <Logo />
      <div className="flex flex-col">
        <p className="flex items-center gap-2">
          <span className="text-lg">&#169;</span>{" "}
          <span>2026 Personal Portfolio</span>
        </p>
        <span>
          Design inspired by{" "}
          <span className="font-semibold">Mathew Kelsey</span>
        </span>
      </div>
    </footer>
  );
}
