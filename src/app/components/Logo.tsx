import Image from "next/image";
import furnikingLogo from "public/furniking.svg";

function Logo() {
  return (
    <Image
      src={furnikingLogo}
      alt="Furniking"
    />
  );
}

export default Logo;
