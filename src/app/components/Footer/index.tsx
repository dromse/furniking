import { copyright_links, footer_links } from "../../constants";
import LogoIcon from "../../icons/LogoIcon";
import LinksColumn from "./LinksColumn";
import Social from "./Social";

function Footer() {
  return (
    <footer className="flex flex-col gap-12">
      <div className="max-container flex gap-20 w-full">
        <div className="2xl:max-w-xs">
          <div className="mb-4">
            <LogoIcon />
          </div>

          <p className="text-custom-gray-500 leading-8 mb-[6px]">
            Furniking is the a popular Ecommerce site. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>

          <Social />
        </div>

        <div className="flex justify-between w-full">
          {footer_links.map((links) => (
            <LinksColumn
              key={links.title}
              links={links}
            />
          ))}
        </div>
      </div>

      <div className="border-t p-8 text-custom-gray-500">
        <div className="max-container flex justify-between">
          <p className="">© 2021 Funking - All rights reserved.</p>

          <ul className="flex gap-12">
            {copyright_links.map((link) => (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
