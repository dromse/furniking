import { benefits } from "@/app/constants";
import { BenefitItem } from "./BenefitItem";

export default function Benefits() {
  return (
    <section className="flex justify-center custom-lg:max-container py-16">
      <ul className="flex flex-col min-[500px]:flex-row content-center sm:justify-between w-full flex-wrap gap-y-6">
        {benefits.map((benefit) => (
          <BenefitItem {...benefit} key={benefit.title} />
        ))}
      </ul>
    </section>
  );
}
