import CollectionCover from "./CollectionCover";
import CollectionBanner from "./CollectionBanner";
import ExclusiveItems from "./ExclusiveItems";
import TheSpeedy from "./TheSpeedy";
import SpeedyItems from "./SpeedyItems";
import ModernWardrobe from "./ModernWardrobe";
import Footer from "../../components/Footer/Footer";
import BannerCompo from "../../components/Banner";

const Summer24 = () => {
  return (
    <section className="font-mono">
      <BannerCompo></BannerCompo>
      <CollectionBanner></CollectionBanner>
      <CollectionCover></CollectionCover>
      <ExclusiveItems></ExclusiveItems>
      <TheSpeedy></TheSpeedy>
      <SpeedyItems></SpeedyItems>
      <ModernWardrobe></ModernWardrobe>
      <Footer></Footer>
    </section>
  )
}

export default Summer24;
