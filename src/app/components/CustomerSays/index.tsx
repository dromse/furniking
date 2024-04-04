import { customersays } from "@/app/constants";
import { NextIcon, PrevIcon } from "@/app/icons/customersays";
import Title from "../Title";
import TestimonialSlide from "./TestimonialSlide";

type Props = {};

export default function CustomerSays({}: Props) {
  return (
    <section className="custom-lg:max-container flex flex-col items-center">
      <Title>What Our Customer Says</Title>

      {/* {customersays.map((customer) => ( */}
      {/*   <TestimonialSlide */}
      {/*     key={customer.id} */}
      {/*     {...customer} */}
      {/*   /> */}
      {/* ))} */}

      <div className="flex gap-7">
        <button>
          <PrevIcon />
        </button>

        <TestimonialSlide {...customersays[0]} />

        <button>
          <NextIcon />
        </button>
      </div>
    </section>
  );
}
