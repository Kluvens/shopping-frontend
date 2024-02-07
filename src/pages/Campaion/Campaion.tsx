import Footer from "../../components/Footer/Footer";
import CampaionHeading from "./CampaionHeading";
import CampaionCreativity from "./CampaionCreativity";
import CampaionDesign from "./CampaionDesign";
import CampaionDetails from "./CampaionDetails";

const Campaion = () => {
  return (
    <section className="bg-blue-950 text-white font-mono">
      <CampaionHeading></CampaionHeading>
      <CampaionCreativity></CampaionCreativity>
      <CampaionDesign></CampaionDesign>
      <CampaionDetails></CampaionDetails>
      <Footer></Footer>
    </section>
  )
}

export default Campaion;
