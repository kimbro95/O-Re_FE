import { IconChevronRight } from "@/public/svgs";

import Swiper from "./Swiper";

// force-cache > getStaticProps와 유사
const fetchBoxOffice = async () => {
  const response = await fetch("http://localhost:3002/api/contents/ranking", {
    cache: "no-cache",
  });

  return await response.json();
};

export default async function BoxOffice() {
  const data = await fetchBoxOffice();
  const boxOfficeMovies = await JSON.parse(data);

  return (
    <section className="w-full space-y-2">
      <div className="flex space-x-1">
        <h2 className="flex font-bold text-gray-700 dark:text-gray-300">
          박스오피스 순위
        </h2>
        <div className="flex items-center font-bold text-gray-700 dark:text-gray-300">
          <IconChevronRight />
        </div>
      </div>
      <Swiper movies={boxOfficeMovies} />
    </section>
  );
}
