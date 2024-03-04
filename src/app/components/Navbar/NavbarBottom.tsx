import LogoIcon from "../../icons/LogoIcon";
import Menu from "./Menu";
import Search from "./Search";

function NavbarBottom() {
  return (
    <div className="py-6 px-3 flex md:items-center flex-wrap justify-between gap-x-2 gap-y-8 md:justify-between custom-lg:max-container md:flex-row">
      <LogoIcon />

      <Search />

      <Menu />
    </div>
  );
}

export default NavbarBottom;
