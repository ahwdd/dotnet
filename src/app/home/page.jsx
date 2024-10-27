import Footer from "../components/footer";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import LatestNews from "../components/LatestNews/LatestNews";
import LiveProdcast from "../components/LiveProdcast/LiveProdcast";
import ReadMoreSlider from "../components/ReadMoreSlider/ReadMoreSlider";
import SliderHow from "../components/SliderHow/SliderHow";
import SummerSale from "../components/SummerSale/SummerSale";
import TopTrending from "../components/TopTrending/TopTrending";
import UpComingEvent from "../components/UpComingEvent/UpComingEvent";
import BoxesBg from "../ui/boxes-bg";

function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-20 h-full pb-10">
        <TopTrending />
        <HeroComponent />
        <UpComingEvent />
        <LatestNews />
        <SliderHow />
        <ReadMoreSlider />
        {/* <LiveProdcast /> later */}
        <SummerSale />
        {/* <BoxesBg /> */}
      </div>
    </>
  );
}

export default HomePage;
