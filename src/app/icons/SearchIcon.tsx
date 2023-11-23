import Image from "next/image";
import svg from "public/menu/search.svg";

function SearchIcon() {
  return (
    <Image
      src={svg}
      alt="Search"
    />
  );
}

export default SearchIcon;
