import Image from "next/image";
import svg from "public/brand/logo.svg";

function LogoIcon() {
  return (
    <Image
      src={svg}
      alt="Furniking"
    />
  );
}


export default LogoIcon;
