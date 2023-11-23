import Image from "next/image";
import svg from "public/social/facebook.svg";

function FacebookIcon() {
  return (
    <Image
      src={svg}
      alt="Facebook"
    />
  );
}

export default FacebookIcon;
