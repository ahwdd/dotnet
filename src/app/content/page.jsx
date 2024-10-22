import Hero from "./hero/Hero";
import HeroSectionContent from "./HeroSectionContent";
import LatestNews from "./latest_news/LatestNews";
import TopTrending from "./top_trending/topTrending";
import SliderHow from "./SliderHow/SliderHow";
import SeeLater from "./see_later/SeeLater";
import Try from "./Try";
import LiveProdcast from "./live_prodcast/LiveProdcast";
import SummerSale from "./summer_sale/SummerSale";

function Page() {
  return (
    <div className="border-2 flex-col flex gap-20 text-black dark:text-white relative top-0 mt-[110px] overflow-hidden">
      <TopTrending />
      <Try />

      <Hero />
      <SeeLater />
      <LatestNews />
      {/* <TopTrending /> */}
      <SliderHow />
      <LiveProdcast />
      <SummerSale />
    </div>
  );
}
export default Page;
