import React from "react";

export default function NavItem(props) {
  return (
    <a href={props.href} className="text-base font-medium hover:text-teal-500 transition mx-4 cursor-pointer">
      {props.children}
    </a>
  );
}
