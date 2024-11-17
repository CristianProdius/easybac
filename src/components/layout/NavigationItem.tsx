"use client";
import React from "react";

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
