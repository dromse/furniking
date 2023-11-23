import { social_links } from "@/app/constants";

function Social() {
  return (
    <ul className="flex gap-3 items-center">
      {social_links.map((link) => (
        <li
          key={link.href}
          className="p-2"
        >
          <a href={link.href}>
            <link.icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
