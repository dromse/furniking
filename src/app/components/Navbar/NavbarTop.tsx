import { langs } from "@/app/constants";

function NavbarTop() {
  return (
    <div className="bg-custom-green-500 text-white">
      <div className="flex flex-col px-3 pt-4 sm:pt-0 sm:flex-row sm:items-center sm:justify-between custom-lg:px-0 custom-lg:max-container">
        <h1>Welcome to our online shop</h1>

        <div className="flex items-center gap-5 py-4">
          <select
            name="lang"
            id="lang"
            className="bg-custom-green-500 cursor-pointer"
          >
            {langs.map((lang) => (
              <option
                key={lang.mark}
                value={lang.mark}
              >
                {lang.title}
              </option>
            ))}
          </select>

          <div className="bg-white w-[2.2px] h-[19px]" />

          <a href="/auth">Login or Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
