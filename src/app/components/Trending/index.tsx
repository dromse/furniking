"use client";

import { trending_tabs } from "@/app/constants";
import { useState } from "react";
import Tabs from "../Tabs";
import Title from "../Title";

type Props = {};

export default function Trending({}: Props) {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section className="custom-lg:max-container">
      <Title>Trending</Title>

      <Tabs
        tabs={trending_tabs}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
    </section>
  );
}
