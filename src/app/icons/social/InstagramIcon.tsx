import Image from "next/image";
import svg from "public/social/instagram.svg";

function InstagramIcon() {
  return (
    <Image
      src={svg}
      alt="Instagram"
    />
  );
}

export default InstagramIcon;
