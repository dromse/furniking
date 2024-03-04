import { Dispatch, SetStateAction } from "react";
import { Tab } from "../constants";

import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ["latin"] });

type Props = {
  tabs: Tab[];
  activeTabId: number;
  setActiveTabId: Dispatch<SetStateAction<number>>;
};

export default function Tabs({ tabs, activeTabId, setActiveTabId }: Props) {
  return (
    <ul className={`flex ${mulish.className} text-2xl font-semibold text-custom-gray-300 gap-x-20 w-full justify-center pt-11`}>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={`${activeTabId === tab.id ? "text-custom-green-500" : ""}`}
        >
          <button onClick={() => setActiveTabId(tab.id)}>{tab.title}</button>
        </li>
      ))}
    </ul>
  );
}
