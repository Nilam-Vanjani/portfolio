"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center p-10 text-pink-950 text-2xl font-bold fixed top-0 w-full">
      <h1 className="bi bi-laptop">
        <Link href={"/"}>Nilam</Link>
      </h1>
      <ul className="flex justify-between gap-10 ">
        <li>
          <Link
            className={clsx({
              "bg-sky-100 text-blue-600": pathname === "/home",
            })}
            href={"/home"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "bg-sky-100 text-blue-600": pathname === "/services",
            })}
            href={"/services"}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "bg-sky-100 text-blue-600": pathname === "/projects",
            })}
            href={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "bg-sky-100 text-blue-600": pathname === "/about",
            })}
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "bg-sky-100 text-blue-600": pathname === "/contact",
            })}
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={clsx({
              "bg-sky-100 text-blue-600": pathname === "/skills",
            })}
            href={"/skills"}
          >
            Skills
          </Link>
        </li>
      </ul>
      <button className="bg-pink-950 p-3 rounded-xl text-white">
        <Link href={"/hire_me"}>HIRE ME</Link>
      </button>
    </header>
  );
}

export default Header;
