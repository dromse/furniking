import React from "react";

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const HoverLink: React.FC<Props> = ({ children, ...props }) => {
  return (
    <a
      href="#"
      className="group transition hover:text-custom-green-500 duration-500"
      {...props}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom-green-500"></span>
    </a>
  );
};

export default HoverLink;
