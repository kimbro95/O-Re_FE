"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconHome,
  IconComment,
  IconSearch,
  IconUserCircle,
  IconArrowUp,
} from "@/public/svgs";

type footerMenuType = {
  [path: string]: {
    name: string;
    icon: JSX.Element;
  };
};

const footerMenu: footerMenuType = {
  "/": {
    name: "홈",
    icon: <IconHome />,
  },
  "/comment": {
    name: "코멘트",
    icon: <IconComment />,
  },
  "/search": {
    name: "검색",
    icon: <IconSearch />,
  },
  "/user": {
    name: "내 정보",
    icon: <IconUserCircle />,
  },
};

export default function Footer() {
  const pathName = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 w-full z-20 h-16 bg-white dark:bg-gray-900">
      <nav className="flex relative items-center justify-between max-w-screen-md h-16 m-auto px-4 md:px-6">
        <ul className="flex justify-between items-center w-full px-6">
          {Object.entries(footerMenu).map(([path, { name, icon }]) => {
            const isActive = path === pathName;

            return (
              <li className="h-10" key={path}>
                <Link
                  href={path}
                  className={`w-full h-full flex flex-col justify-between items-center px-2
                        ${
                          isActive
                            ? "text-gray-700 dark:text-white"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                >
                  {icon}
                  <p className="text-xs">{name}</p>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 스크롤 업 버튼 */}
        <button className="absolute bottom-20 h-13 right-3 p-3 border-0 rounded-full shadow-xl text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
          <IconArrowUp />
        </button>
      </nav>
    </footer>
  );
}
