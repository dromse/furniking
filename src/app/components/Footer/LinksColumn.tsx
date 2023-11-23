type Props = { links: { title: string; links: any[] } };

function LinksColumn(props: Props) {
  const { links } = props;

  return (
    <div className="text-lg font-medium text-custom-gray-500 gap-4 flex flex-col">
      {links.title}

      <nav>
        <ul className="font-normal gap-4 flex flex-col">
          {links.links.map((link) => (
            <li key={link.title}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default LinksColumn;
