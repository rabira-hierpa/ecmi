"use client";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./language-selector";
import React, { useEffect, useState } from "react";
import { PageProps, Department, ResourceType } from "@/types";
import { useTranslation } from "@/app/i18n/client";
import { usePathname } from "next/navigation";
import { SignOutButton, useUser } from "@clerk/nextjs";
import ResourcesMenu from "../ui/resources-menu";
import DepartmentMenu from "../departments/department-menu";
import ExecutiveMenu from "../ui/executive-menu";
import MediaMenu from "./media-menu";
import AdminMenu from "../ui/admin-menu";
import AnnouncementMenu from "./announcement-menu";
import { announcement } from "@prisma/client";

const NavBar: React.FC<PageProps & { executives: { departmentName: string; id: string }[]; announcements: announcement[]; resourceTypes: ResourceType[] }> = ({
  executives,
  announcements,
  resourceTypes,
  params: { lng },
}) => {
  const pathname = usePathname();
  const { t } = useTranslation(lng, "navbar");
  const { user, isLoaded } = useUser();

  const navLinks = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("about"),
      href: "/about",
    },
    {
      title: t("services"),
      href: "/services",
    },
    {
      title: t("contactUs"),
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-primary-light shadow-md flex flex-wrap items-center  px-6 lg:px-16 py-4 lg:py-0 ">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/imgs/logo.png" alt="Logo" width={50} height={140} className="block lg:hidden" />
          <Image src="/assets/imgs/logo-no-bg.png" alt="Logo" width={380} height={480} className="hidden lg:block" />
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <ul className="text-xl text-center items-center gap-x-5 py-6 md:gap-x-4 lg:text-lg lg:flex ">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`py-4 px-2 hover:bg-slate-200 hover:text-primary-main ${
                pathname === `/${lng}${link.href}` ? "font-semibold text-primary-main bg-slate-200 " : "font-normal text-secondary-light"
              }`}
            >
              <Link href={link.href}>{link.title.toUpperCase()}</Link>
            </li>
          ))}
          <MediaMenu params={{ lng }} />
          <ResourcesMenu resourceTypes={resourceTypes} params={{ lng }} />
          <ExecutiveMenu executives={executives} params={{ lng }} />
          <AnnouncementMenu params={{ lng }} announcements={announcements} />
          {/* <DepartmentMenu params={{ lng }} departments={departments} /> */}
          {user && <AdminMenu params={{ lng }} />}
          <li className="py-4">
            <LanguageSelector params={{ lng }} />
          </li>
          {isLoaded && user ? (
            <SignOutButton redirectUrl="/">
              <button className="g-gray-400 text-white rounded-md px-4 py-2 bg-gray-600 hover:bg-gray-500 transition-colors">Sign Out</button>
            </SignOutButton>
          ) : (
            <Link href={"/login"} className="text-white rounded-md px-4 py-2 bg-primary-main font-semibold hover:bg-gray-500 transition-colors">
              {t("login")}
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
