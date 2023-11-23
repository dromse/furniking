import FacebookIcon from "../icons/social/FacebookIcon";
import InstagramIcon from "../icons/social/InstagramIcon";
import PinterestIcon from "../icons/social/PinterestIcon";
import TwitterIcon from "../icons/social/TwitterIcon";

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
  { icon: FacebookIcon, href: "https://www.facebook.com" },
  { icon: TwitterIcon, href: "https://www.twitter.com" },
  { icon: InstagramIcon, href: "https://www.instagram.com" },
  { icon: PinterestIcon, href: "https://www.pinterest.com" },
];

export const copyright_links = [
  { title: "Privacy", href: "/privacy" },
  { title: "Security", href: "/security" },
  { title: "Terms", href: "/terms" },
];
