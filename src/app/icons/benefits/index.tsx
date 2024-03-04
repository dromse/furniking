import Image from "next/image";
import freeShippingSvg from "public/benefits/free-shipping.svg";
import quickPaymentSvg from "public/benefits/quick-payment.svg";
import smartGiftCardSvg from "public/benefits/smart-gift-card.svg";
import supportSvg from "public/benefits/support.svg";

export function FreeShipping() {
  return (
    <Image
      src={freeShippingSvg}
      alt="Free shipping"
    />
  );
}

export function QuickPayment() {
  return (
    <Image
      src={quickPaymentSvg}
      alt="Free shipping"
    />
  );
}

export function SmartGiftCard() {
  return (
    <Image
      src={smartGiftCardSvg}
      alt="Free shipping"
    />
  );
}

export function Support() {
  return (
    <Image
      src={supportSvg}
      alt="Free shipping"
    />
  );
}
