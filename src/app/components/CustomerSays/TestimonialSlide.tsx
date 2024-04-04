import { Testimonial } from "@/app/constants";
import { dm_sans, mulish } from "@/app/fonts";
import Image from "next/image";

export default function TestimonialSlide({
  imgUrl,
  comment,
  name,
  role,
}: Testimonial) {
  return (
    <div className="bg-custom-gray-150 text-center relative text-custom-gray-500 mt-20 pb-12 rounded-lg custom-lg:w-[812px]">
      <Image
        className="relative -translate-y-1/2 m-auto left-0 right-0"
        src={imgUrl}
        alt={"avatar"}
        width={88}
        height={88}
      />

      <p className={`max-w-xl m-auto pb-8 ${dm_sans.className}`}>{comment}</p>

      <p className={`font-semibold text-2xl pb-2 ${mulish.className}`}>
        {name}
      </p>

      <p>{role}</p>
    </div>
  );
}
