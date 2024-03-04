"use client";

import { products_tabs } from "@/app/constants";
import { useState } from "react";
import Tabs from "../Tabs";
import Title from "../Title";

type Props = {};

export default function Products({}: Props) {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section className="custom-lg:max-container">
      <Title>Our Products</Title>

      <Tabs
        tabs={products_tabs}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
    </section>
  );
}
