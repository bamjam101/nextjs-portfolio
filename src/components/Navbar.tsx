"use client";

import React, { useState } from "react";
import Link from "next/link";

import { styles } from "@/app/styles";
import { navLinks } from "@/constants";
import { menu, close } from "@/app/assets";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX ? styles.paddingX : "sm:px-16 px-6"}
    w-full
    flex
    items-center
    py-5
    fixed
    top-0
    z-50
    bg-primary
    `}
    >
      <section className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={"/logo.png"}
            width={46}
            height={46}
            alt="Developer Logo"
            className="object-contain rounded-full"
          />
          <p className="text-white flex text-[18px] font-bold cursor-pointer">
            <span className="hidden md:block">Jamil&apos;s&nbsp;</span>
            Portfolio
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title.toLocaleLowerCase()
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="list-none sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="Menu icon"
            width={28}
            height={28}
            className="object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-40 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title.toLocaleLowerCase()
                      ? "text-white"
                      : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
