"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Links = [
  {
    href: "/",
    label: "Home",
    id: 1,
  },
  {
    href: "/roadmap",
    label: "RoadMap",
    id: 2,
  },
];

const NavBar = ({}) => {
  const pathname = usePathname();

  return (
    <ul className="flex justify-center gap-8 md:gap14">
      {Links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li
            key={link.id}
            className={
              isActive
                ? "text-custom-color-yellow font-semibold "
                : "font-semibold"
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
