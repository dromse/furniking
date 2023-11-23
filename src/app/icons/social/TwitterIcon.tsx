import Image from "next/image";
import svg from "public/social/twitter.svg";

function TwitterIcon() {
  return (
    <Image
      src={svg}
      alt="Twitter"
    />
  );
}

export default TwitterIcon;
