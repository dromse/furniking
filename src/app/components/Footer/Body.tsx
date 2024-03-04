import LogoIcon from "@/app/icons/LogoIcon";
import Social from "./Social";

function Body() {
  return (
    <div className="">
      <div className="mb-4">
        <LogoIcon />
      </div>

      <p className="text-custom-gray-500 leading-8 mb-[6px] max-w-xs custom-lg:w-80">
        Furniking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor
      </p>

      <Social />
    </div>
  );
}

export default Body;
