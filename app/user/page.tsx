import Link from "next/link";

import { IconChevronRight, IconCogTooth } from "@/public/svgs";

export default function User() {
  return (
    <main className="flex flex-col flex-nowrap w-full max-w-screen-md p-4 md:p-6">
      <section className="flex w-full h-20 md:h-24 my-2 space-x-4">
        <div className="flex">
          <div className="w-20 md:w-24 h-auto border dark:border-0 rounded-full bg-blue-300"></div>
        </div>

        <div className="flex flex-col space-y-1 md:space-y-2 w-full">
          <div className="flex justify-between items-center">
            <span className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-300">
              디그다
            </span>

            <Link
              href="/setting"
              className="p-1 text-xs md:text-sm text-gray-700 dark:text-gray-300"
            >
              <IconCogTooth />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="rounded-xl py-1 px-2 border dark:border-gray-700 bg-white dark:bg-gray-800">
              <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                팔로워 17843 · 팔로잉 2444
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full my-2">
        <div className="flex flex-col w-full bg-gray-100 dark:bg-gray-800 border dark:border-0 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex justify-between px-2 py-3 font-bold text-sm text-gray-700 dark:text-gray-300">
            <span>작성한 평가</span>
            <div className="flex space-x-2 items-center">
              <span>152</span>
              <IconChevronRight />
            </div>
          </div>
          <div className="flex justify-between px-2 py-3 font-bold text-sm text-gray-700 dark:text-gray-300">
            <span>작성한 코멘트</span>
            <div className="flex space-x-2 items-center">
              <span>42</span>
              <IconChevronRight />
            </div>
          </div>
          <div className="flex justify-between px-2 py-3 font-bold text-sm text-gray-700 dark:text-gray-300">
            <span>기대되는 작품</span>
            <div className="flex space-x-2 items-center">
              <span>12</span>
              <IconChevronRight />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full my-3 space-y-4 md:space-y-1">
        <div className="flex justify-between font-bold text-gray-700 dark:text-gray-300">
          <span>캘린더</span>
          <div className="flex items-center">
            <IconChevronRight />
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="flex w-full justify-between text-center pb-2 space-x-2 border-b dark:border-gray-700">
            <li className="w-full font-bold text-red-500">Sun</li>
            <li className="w-full font-bold text-gray-700 dark:text-gray-300">
              Mon
            </li>
            <li className="w-full font-bold text-gray-700 dark:text-gray-300">
              Tue
            </li>
            <li className="w-full font-bold text-gray-700 dark:text-gray-300">
              Wed
            </li>
            <li className="w-full font-bold text-gray-700 dark:text-gray-300">
              Thu
            </li>
            <li className="w-full font-bold text-gray-700 dark:text-gray-300">
              Fri
            </li>
            <li className="w-full font-bold text-blue-500">Sat</li>
          </ul>

          <ul className="flex w-full justify-between">
            <li className="flex w-full h-20 md:h-36 items-center">
              <span className="w-full text-center">
                <div className="w-full">
                  이미지영역
                  {/* 
                  <img
                    src="https://an2-img.amz.wtchn.net/image/v2/zwpTmsbbFAEspq7wmapvRQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UWXdPREUwTlRNNU5EZ3hOVEV4TXpraWZRLkpaLTdVbjloczBlUEp6bHZTQnpQQ2NMNDU3ZUs0V1QtVHVmZlVnRHJsd3c"
                    alt="이미지 1"
                    className="w-full h-auto"
                  />
                  */}
                </div>
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                2
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                3
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                4
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                5
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                6
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                7
              </span>
            </li>
          </ul>
          <ul className="flex w-full justify-between">
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                8
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                9
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                10
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                <div className="w-full">
                  이미지영역
                  {/* 
                  <img
                    src="https://an2-img.amz.wtchn.net/image/v2/zwpTmsbbFAEspq7wmapvRQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UWXdPREUwTlRNNU5EZ3hOVEV4TXpraWZRLkpaLTdVbjloczBlUEp6bHZTQnpQQ2NMNDU3ZUs0V1QtVHVmZlVnRHJsd3c"
                    alt="이미지 1"
                    className="w-full h-auto"
                  />
                  */}
                </div>
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                12
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                13
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                14
              </span>
            </li>
          </ul>
          <ul className="flex w-full justify-between">
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                15
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                16
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                17
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                18
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                19
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                20
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                <div className="w-full">
                  이미지영역
                  {/* 
                  <img
                    src="https://an2-img.amz.wtchn.net/image/v2/zwpTmsbbFAEspq7wmapvRQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UWXdPREUwTlRNNU5EZ3hOVEV4TXpraWZRLkpaLTdVbjloczBlUEp6bHZTQnpQQ2NMNDU3ZUs0V1QtVHVmZlVnRHJsd3c"
                    alt="이미지 1"
                    className="w-full h-auto"
                  />
                  */}
                </div>
              </span>
            </li>
          </ul>
          <ul className="flex w-full justify-between">
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                22
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                23
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                24
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                <div className="w-full">
                  이미지영역
                  {/* 
                  <img
                    src="https://an2-img.amz.wtchn.net/image/v2/zwpTmsbbFAEspq7wmapvRQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UWXdPREUwTlRNNU5EZ3hOVEV4TXpraWZRLkpaLTdVbjloczBlUEp6bHZTQnpQQ2NMNDU3ZUs0V1QtVHVmZlVnRHJsd3c"
                    alt="이미지 1"
                    className="w-full h-auto"
                  />
                  */}
                </div>
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                <div className="w-full">
                  이미지영역
                  {/* 
                  <img
                    src="https://an2-img.amz.wtchn.net/image/v2/zwpTmsbbFAEspq7wmapvRQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UWXdPREUwTlRNNU5EZ3hOVEV4TXpraWZRLkpaLTdVbjloczBlUEp6bHZTQnpQQ2NMNDU3ZUs0V1QtVHVmZlVnRHJsd3c"
                    alt="이미지 1"
                    className="w-full h-auto"
                  />
                  */}
                </div>
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                27
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                28
              </span>
            </li>
          </ul>
          <ul className="flex w-full justify-between">
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                29
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300">
                <div className="w-full">
                  이미지영역
                  {/* 
                  <img
                    src="https://an2-img.amz.wtchn.net/image/v2/zwpTmsbbFAEspq7wmapvRQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UWXdPREUwTlRNNU5EZ3hOVEV4TXpraWZRLkpaLTdVbjloczBlUEp6bHZTQnpQQ2NMNDU3ZUs0V1QtVHVmZlVnRHJsd3c"
                    alt="이미지 1"
                    className="w-full h-auto"
                  />
                  */}
                </div>
              </span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300"></span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300"></span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300"></span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300"></span>
            </li>
            <li className="flex w-full h-20 md:h-24 items-center">
              <span className="w-full text-center text-gray-700 dark:text-gray-300"></span>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col w-full my-6 mb-16 space-y-2">
        <div className="flex justify-between text-lg font-bold text-gray-700 dark:text-gray-300">
          <span>취향분석</span>
          <div className="flex items-center">
            <IconChevronRight />
          </div>
        </div>
        <div className="flex w-full h-32 items-center justify-center bg-gray-200 dark:bg-gray-700">
          <span>차트영역</span>
        </div>
      </section>
    </main>
  );
}
