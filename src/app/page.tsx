import Navbar from "@/src/Components/elements/Navbar/Navbar";
import HeroSlider from "@/src/Components/elements/Slider/Slider";
import MainCard from "@/src/Components/fragments/mainCard";
import NewArrivalsLayouts from "@/src/Components/layouts/newArrivalCardLayouts";
import InformationLayouts from "../Components/layouts/informationLayouts";
import BannerLayouts from "../Components/layouts/bannerLayouts";
import ArticleLayouts from "../Components/layouts/articleLayouts";
import Footer from "../Components/elements/Footer/Footer";
import TopProductCardLayouts from "../Components/layouts/topProductCardLayouts";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <MainCard />
      <NewArrivalsLayouts />
      <TopProductCardLayouts />
      <InformationLayouts />
      <BannerLayouts />
      <ArticleLayouts />
      <Footer />
    </>
  );
}
