import AppLogo from "../assets/logo.svg";
export default function Header() {
  return (
    <header className="w-full  flex justify-center items-center mt-12.5 mb-10.5 lg:mt-40.75 lg:mb-22">
      <img className="w-[86.66px] h-[53.14px]" src={AppLogo} alt="app logo" />
    </header>
  );
}
