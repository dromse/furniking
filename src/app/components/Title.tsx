import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });
type Props = { children: string };

export default function Title({ children }: Props) {
  return (
    <h2
      className={`text-center font-bold text-4xl text-custom-gray-500 pt-28 ${mulish.className}`}
    >
      {children.toUpperCase()}
    </h2>
  );
}
