import Body from "./Body";
import Columns from "./Columns";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer className="flex flex-col gap-12">
      <div className="flex flex-col gap-5 px-3 w-full custom-lg:max-container custom-lg:gap-20 md:flex-row">
        <Body />
        <Columns />
      </div>

      <Copyright />
    </footer>
  );
}

export default Footer;
