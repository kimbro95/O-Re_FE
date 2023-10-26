"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconAlert,
  IconArrowLeft,
  IconSearch,
  IconX_Circle,
} from "@/public/svgs";

export default function Header() {
  const pathName = usePathname();
  let Header;

  switch (pathName) {
    case "/":
      Header = <MainHeader />;
      break;
    case "/comment":
      Header = <TitleHeader title="코멘트 모아보기" />;
      break;
    case "/search":
      Header = <SearchHeader />;
      break;
    default:
      break;
  }
  return Header;
}

const MainHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 h-16 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between max-w-screen-md h-16 m-auto px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
              O-Re
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <span className="text-gray-700 dark:text-gray-300">
            {/*<IconAlert />*/}
          </span>
        </div>
      </div>
    </header>
  );
};

const TitleHeader = ({ title }: { title: string }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 h-16 bg-white dark:bg-gray-900">
      <div className="flex relative items-center max-w-screen-md h-16 m-auto px-4 md:px-6">
        <button className="absolute left-2 md:left-4 p-2 text-gray-700 dark:text-gray-300">
          <IconArrowLeft />
        </button>
        <div className="items-center w-full text-center font-bold text-gray-700 dark:text-gray-300">
          {title}
        </div>
      </div>
    </header>
  );
};

const SearchHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 h-16 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between max-w-screen-md h-16 m-auto px-4 md:px-6">
        <form className="flex relative items-center w-full">
          <span className="absolute left-2 text-gray-600 dark:text-gray-300">
            <IconSearch />
          </span>
          <label
            htmlFor="search"
            className="border-2 dark:border-0 focus-within:border-gray-300 w-full rounded-md bg-gray-200 dark:bg-gray-800 p-2"
          >
            <input
              id="search"
              type="text"
              placeholder="검색어를 입력해주세요."
              className="w-[85%] outline-none dark:outline-none p-1 mx-7 text-xs bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-300"
            />
          </label>
          <button className="absolute right-2 p-1 text-gray-600 dark:text-gray-300">
            <IconX_Circle />
          </button>
        </form>
      </div>
    </header>
  );
};
