import { IconChevronRight } from "@/public/svgs";

export default function Home() {
  return (
    <main className="flex flex-col flex-nowrap w-full max-w-screen-md px-4 md:px-6 my-16">
      <section className="w-full space-y-3 my-2">
        <div className="flex space-x-1">
          <h2 className="flex font-bold text-gray-700 dark:text-gray-300">
            박스오피스 순위
          </h2>
          <div className="flex items-center font-bold text-gray-700 dark:text-gray-300">
            <IconChevronRight />
          </div>
        </div>
        <ul className="flex overflow-x-auto whitespace-nowrap">
          <li className="flex-[0_0_auto] w-1/3 sm:w-1/4 md:w-1/5 mr-4 border dark:border-gray-800 roundedLg h-40">
            이미지영역
            {/*
            li태그 h-40 레이아웃용 임시 지정
            <img src="" alt="이미지 1" className="w-full h-auto" />
            */}
          </li>
          <li className="flex-[0_0_auto] w-1/3 sm:w-1/4 md:w-1/5 mr-4 border dark:border-gray-800 roundedLg h-40">
            이미지영역
            {/*
            li태그 h-40 레이아웃용 임시 지정
            <img src="" alt="이미지 1" className="w-full h-auto" />
            */}
          </li>
          <li className="flex-[0_0_auto] w-1/3 sm:w-1/4 md:w-1/5 mr-4 border dark:border-gray-800 roundedLg h-40">
            이미지영역
            {/*
            li태그 h-40 레이아웃용 임시 지정
            <img src="" alt="이미지 1" className="w-full h-auto" />
            */}
          </li>
          <li className="flex-[0_0_auto] w-1/3 sm:w-1/4 md:w-1/5 mr-4 border dark:border-gray-800 roundedLg h-40">
            이미지영역
            {/*
            li태그 h-40 레이아웃용 임시 지정
            <img src="" alt="이미지 1" className="w-full h-auto" />
            */}
          </li>
          <li className="flex-[0_0_auto] w-1/3 sm:w-1/4 md:w-1/5 mr-4 border dark:border-gray-800 roundedLg h-40">
            이미지영역
            {/*
            li태그 h-40 레이아웃용 임시 지정
            <img src="" alt="이미지 1" className="w-full h-auto" />
            */}
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 my-2">
        <div className="flex space-x-1">
          <h2 className="flex font-bold text-gray-700 dark:text-gray-300">
            코멘트
          </h2>
          <div className="flex items-center font-bold text-gray-700 dark:text-gray-300">
            <IconChevronRight />
          </div>
        </div>
        <article className="rounded-md p-2 space-y-2 bg-gray-100 dark:bg-gray-800 border dark:border-0">
          <div className="flex w-full h-20 md:h-24 space-x-4">
            <div className="flex w-1/3 md:w-1/4 border dark:border-gray-700 roundedLg">
              이미지 영역
              {/*<img src="" alt="이미지 1" className="w-full h-auto roundedLg" /> */}
            </div>
            <div className="flex flex-col space-y-2 md:space-y-3 w-full">
              <span className="text-base md:textLg font-bold text-gray-700 dark:text-gray-300">
                플라워 킬링 문
              </span>

              <div className="flex justify-between items-center">
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  디그다님의 평가
                </span>
                <div className="rounded-xl p-1 border dark:border-gray-700 bgWhite dark:bg-gray-800">
                  <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                    ★ 4.0
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  1시간 전
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <span className="text-base font-bold text-gray-700 dark:text-gray-300">
              간단 한줄평 영역........
            </span>
          </div>
          <div className="w-full">
            <span className="text-xs text-gray-700 dark:text-gray-300">
              긴 리뷰 입니다. 긴 리뷰 입니다. 긴 리뷰 입니다. 긴 리뷰 입니다. 긴
              리뷰 입니다. 긴 리뷰 입니다. 긴 리뷰 입니다.. 긴 리뷰 입니다. 긴
              리뷰 입니다. 긴 리뷰 입니다. 긴 리뷰 입니다.
            </span>
          </div>
        </article>
      </section>
    </main>
  );
}
