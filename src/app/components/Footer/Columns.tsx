import { footer_links } from "@/app/constants";
import HoverLink from "../HoverLink";

function Columns() {
  return (
    <div className="flex flex-wrap gap-y-5 gap-x-8 md:justify-between w-full">
      {footer_links.map((links) => (
        <Column
          key={links.title}
          links={links}
        />
      ))}
    </div>
  );
}

export default Columns;

type Props = { links: { title: string; links: any[] } };

function Column(props: Props) {
  const { links } = props;

  return (
    <div className="text-lg font-medium text-custom-gray-500 gap-4 flex flex-col">
      {links.title}

      <nav>
        <ul className="font-normal gap-4 flex flex-col">
          {links.links.map((link) => (
            <li key={link.title}>
              <HoverLink href={link.href}>{link.title}</HoverLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
