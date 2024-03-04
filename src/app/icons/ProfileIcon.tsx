import Image from "next/image";
import svg from "public/menu/profile.svg";

function ProfileIcon() {
  return (
    <Image
      src={svg}
      alt="Cart"
    />
  );
}

export default ProfileIcon;
