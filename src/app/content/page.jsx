import Hero from "./hero/Hero";
import LatestNews from "./latest_news/LatestNews";
import SliderHow from "./SliderHow/SliderHow";
import SeeLater from "./see_later/SeeLater";
import SummerSale from "./summer_sale/SummerSale";
import ReadMoreSlider from "./readmore_slider/ReadMoreSlider";

function Content() {
  return (
    <div className="border-2 flex-col flex gap-20 text-black dark:text-white relative top-0 mt-[110px] overflow-hidden">
      {/* <TopTrending />
      <Try /> */}
      {/* 
      <SwiperSlider /> */}

      <Hero />
      <SeeLater />
      <LatestNews />
      {/* <TopTrending /> */}
      <SliderHow />
      <ReadMoreSlider />
      {/* <LiveProdcast /> */}
      <SummerSale />
    </div>
  );
}
export default Content;
