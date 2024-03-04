import { copyright_links } from "@/app/constants";

function Copyright() {
  return (
    <div className="border-t p-3 md:p-8 text-custom-gray-500">
      <div className="max-container flex gap-y-4 flex-col justify-between items-center sm:items-stretch sm:flex-row">
        <p className="order-last sm:order-none">© {new Date().getFullYear()} Furniking - All rights reserved.</p>

        <ul className="flex justify-between gap-x-7 flex-wrap">
          {copyright_links.map((link) => (
            <li key={link.title}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Copyright;
