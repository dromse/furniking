import {
  FreeShipping,
  QuickPayment,
  SmartGiftCard,
  Support,
} from "../icons/benefits";
import { Facebook, Instagram, Pinterest, Twitter } from "../icons/social";

export const langs = [
  { title: "English (USD)", mark: "en" },
  { title: "Українська (ГРН)", mark: "ua" },
];

export const footer_links = [
  {
    title: "Help",
    links: [
      { title: "Privacy Policy", href: "/policy/privacy" },
      { title: "Shipping & Delivery", href: "/ship_and_deliver" },
      { title: "Refund Policy", href: "/policy/refund" },
      { title: "Track Your Order", href: "/track_order" },
    ],
  },
  {
    title: "Store",
    links: [
      { title: "Furniture", href: "/collections/furniture" },
      { title: "Table", href: "/collections/table" },
      { title: "Sofa", href: "/collections/sofa" },
      { title: "Other", href: "/collections/other" },
    ],
  },
  {
    title: "Supports",
    links: [
      { title: "Feedback", href: "/feedback" },
      { title: "Contact us", href: "/contact_us" },
      { title: "Download app", href: "/download_app" },
      { title: "Terms & Conditions", href: "/terms_conditions" },
    ],
  },
];

export const social_links = [
  { icon: Facebook, href: "https://www.facebook.com" },
  { icon: Twitter, href: "https://www.twitter.com" },
  { icon: Instagram, href: "https://www.instagram.com" },
  { icon: Pinterest, href: "https://www.pinterest.com" },
];

export const copyright_links = [
  { title: "Privacy", href: "/privacy" },
  { title: "Security", href: "/security" },
  { title: "Terms", href: "/terms" },
];

export type Benefit = {
  icon: React.JSX.ElementType;
  title: string;
  desc: string;
};

export const benefits: Benefit[] = [
  { title: "Free Shipping", desc: "Orders over $100", icon: FreeShipping },
  {
    title: "Smart Gift Card",
    desc: "Buy $1000 to get card",
    icon: SmartGiftCard,
  },
  { title: "Quick Payment", desc: "100% secure payment", icon: QuickPayment },
  { title: "24/7 Support", desc: "Quick support", icon: Support },
];

export type Tab = {
  id: number;
  title: string;
};

export const trending_tabs: Tab[] = [
  { id: 0, title: "Top Products" },
  { id: 1, title: "New Arrivals" },
  { id: 2, title: "Best Sellers" },
];

export const products_tabs: Tab[] = [
  { id: 0, title: "All Products" },
  { id: 1, title: "Best Sellers" },
  { id: 2, title: "New Arrivals" },
  { id: 3, title: "Today's Deals" },
];
