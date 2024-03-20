"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SIDENAV_ITEMS } from "@/app/constants";
import { FaChevronDown } from "react-icons/fa";
import { SideNavItem } from "@/app/types";
import { usePathname } from "next/navigation";

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-5 py-5 w-full ">
        <Link href="/" className="">
          MEET ME 
        </Link>

        <div className="flex">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex gap-3 flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? "bg-zinc-100 " : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center text-[#555555]">
              {item.icon}
              <span className="flex text-[15px] text-[#555555]">
                {item.title}
              </span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180 " : ""} flex`}>
              <FaChevronDown size={13} className="text-[#555555]" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold " : ""
                    }`}
                  >
                    <span className="text-[15px] ">{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`  flex flex-row space-x-4 text-[#555555] items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? "rounded-l-3xl bg-zinc-100 " : ""
          } `}
        >
          {item.icon}
          <span className="text-[15px] flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
