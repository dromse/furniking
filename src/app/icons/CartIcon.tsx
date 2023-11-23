import Image from "next/image";
import svg from "public/menu/cart.svg";

function CartIcon() {
  return (
    <Image
      src={svg}
      alt="Cart"
    />
  );
}

export default CartIcon;
