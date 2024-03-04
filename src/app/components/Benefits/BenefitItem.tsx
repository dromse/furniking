import { Benefit } from "@/app/constants";

export function BenefitItem({ icon, title, desc }: Benefit) {
  const Icon = icon;

  return (
    <li className="flex flex-col items-center min-[280px]:flex-row gap-x-4 px-3 text-center">
      <Icon className=""/>

      <dl className="my-auto">
        <dt className="text-xl text-custom-gray-500 font-medium">{title}</dt>
        <dd className="text-sm text-custom-gray-450">{desc}</dd>
      </dl>
    </li>
  );
}
