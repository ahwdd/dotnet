import Hero from "./hero/Hero";
import HeroSectionContent from "./HeroSectionContent";
import LatestNews from "./latest_news/LatestNews";

function Page() {
  return (
    <div className="border-2 flex-col flex gap-20 text-black dark:text-white relative top-0 mt-[110px] overflow-hidden">
      <Hero />
      <LatestNews />
    </div>
  );
}
export default Page;
