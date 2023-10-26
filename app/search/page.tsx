import { IconX_Mark } from "@/public/svgs";

export default function Search() {
  return (
    <main className="flex flex-col flex-nowrap w-full max-w-screen-md px-4 md:px-6 my-16">
      <section className="w-full space-y-3 my-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-700 dark:text-gray-300">
            최근 검색어
          </h2>
          <span className="text-xs text-gray-700 dark:text-gray-300">
            전체삭제
          </span>
        </div>
        <div className="flex space-x-2">
          <div className="flex rounded-md space-x-1 p-2 text-sm border dark:border-0 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">
            <button className="">화란</button>
            <button>
              <IconX_Mark />
            </button>
          </div>
          <div className="flex rounded-md space-x-1 p-2 text-sm border dark:border-0 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">
            <button className="">파리</button>
            <button>
              <IconX_Mark />
            </button>
          </div>
          <div className="flex rounded-md space-x-1 p-2 text-sm border dark:border-0 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">
            <button className="">배트맨</button>
            <button>
              <IconX_Mark />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full space-y-2">
        <div className="items-center space-y-2">
          <div className="font-bold text-gray-700 dark:text-gray-300">
            <h2>박스오피스 순위</h2>
          </div>
          <div className="flex flex-col space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <div className="border-b dark:border-gray-700 py-3">
              <span>그대들은 어떻게 살 것인가</span>
            </div>
            <div className="border-b dark:border-gray-700 py-3">
              <span>30일</span>
            </div>
            <div className="border-b dark:border-gray-700 py-3">
              <span>용감한 시민</span>
            </div>
            <div className="border-b dark:border-gray-700 py-3">
              <span>플라워 킬링 문</span>
            </div>
            <div className="border-b dark:border-gray-700 py-3">
              <span>익스펜더블4</span>
            </div>
            <div className="border-b dark:border-gray-700 py-3">
              <span>화란</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
