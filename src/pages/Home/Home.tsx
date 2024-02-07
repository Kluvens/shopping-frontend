import HomeHeading from "./HomeHeading";
import ExploreSection from "./ExploreSection";
import HomeHighlights from "./HomeHighlights";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <section className="font-mono">
      <HomeHeading></HomeHeading>
      <ExploreSection></ExploreSection>
      <HomeHighlights></HomeHighlights>
      <Footer></Footer>
    </section>
  )
}

export default Home;
