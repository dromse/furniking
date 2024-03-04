import Image from "next/image";
import svg from "public/menu/bell.svg";

function BellIcon() {
  return (
    <Image
      src={svg}
      alt="Notifications"
    />
  );
}


export default BellIcon;
