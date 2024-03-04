import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

function Navbar() {
  return (
    <header className="text-lg md:text-base">
      <NavbarTop />
      <NavbarBottom />
    </header>
  );
}

export default Navbar;
