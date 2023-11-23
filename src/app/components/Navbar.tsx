import BellIcon from "../icons/BellIcon";
import CartIcon from "../icons/CartIcon";
import ProfileIcon from "../icons/ProfileIcon";
import Logo from "./Logo";
import Search from "./Search";

const langs = [{ title: "English (USD)", mark: "en" }];

function Navbar() {
  return (
    <header className="text-base">
      <div className="bg-custom-green-500 text-white ">
        <div className="max-container flex justify-between items-center">
          <h1>Welcome to our online shop</h1>

          <div className="flex items-center gap-5 py-4">
            <select
              name="lang"
              id="lang"
              className="bg-inherit cursor-pointer"
            >
              {langs.map((lang) => (
                <option value={lang.mark}>{lang.title}</option>
              ))}
            </select>

            <div className="bg-white w-[2.2px] h-[19px]"></div>

            <a href="/auth">Login or Sign up</a>
          </div>
        </div>
      </div>

      <div className="max-container py-6 flex items-center justify-between">
        <Logo></Logo>
        <Search></Search>

        <div className="flex gap-5">
          <CartIcon></CartIcon>
          <BellIcon></BellIcon>
          <ProfileIcon></ProfileIcon>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
