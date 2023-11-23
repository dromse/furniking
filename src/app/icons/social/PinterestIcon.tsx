import Image from "next/image";
import svg from "public/social/pinterest.svg";

function PinterestIcon() {
  return (
    <Image
      src={svg}
      alt="Pinterest"
    />
  );
}

export default PinterestIcon;
