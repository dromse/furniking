import BellIcon from "@/app/icons/BellIcon";
import CartIcon from "@/app/icons/CartIcon";
import ProfileIcon from "@/app/icons/ProfileIcon";

function Menu() {
  return (
    <div className="flex gap-5">



      <CartIcon />
      <BellIcon />
      <ProfileIcon />
    </div>
  )
}

export default Menu;
