import { IconChevronRight } from "@/public/svgs";

import Swiper from "./Swiper";

// force-cache > getStaticProps와 유사
const fetchBoxOffice = async () => {
  const response = await fetch(
    "http://localhost:3002/api/contents/comingSoon",
    {
      cache: "no-cache",
    }
  );

  return await response.json();
};

export default async function ComingSoon() {
  const data = await fetchBoxOffice();
  const comingSoonMovies = await JSON.parse(data);

  return (
    <section className="w-full space-y-2">
      <div className="flex space-x-1">
        <h2 className="flex font-bold text-gray-700 dark:text-gray-300">
          개봉예정작
        </h2>
        <div className="flex items-center font-bold text-gray-700 dark:text-gray-300">
          <IconChevronRight />
        </div>
      </div>
      <Swiper movies={comingSoonMovies} />
    </section>
  );
}
