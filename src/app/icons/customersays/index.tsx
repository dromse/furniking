import Image from "next/image";
import prev from "public/customersays/prev-icon.svg";
import next from "public/customersays/next-icon.svg";

export function PrevIcon() {
  return (
    <Image
      src={prev}
      alt="previous slide icon"
    />
  );
}

export function NextIcon() {
  return (
    <Image
      src={next}
      alt="next slide icon"
    />
  );
}
