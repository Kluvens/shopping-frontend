import { useNavigate } from "react-router-dom";

const CampaionHeading = () => {
  const navigate = useNavigate();

  const redirectPage = (pageLink: string) => {
    navigate(pageLink);
  }

  return (
    <section className="p-16">
      <div className="py-24">
        <h1 className="text-center text-2xl">Les Gastons Vuitton</h1>
      </div>
      <div className="flex items-center justify-center">
        <img 
          src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/masthead/JEWELRY_LES_GASTONS_50_146_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
          alt="Les Gastons Vuitton"
          className="w-3/5 xl:w-2/5" />
      </div>
      <div className="flex justify-center items-center text-center py-16">
        <p className="w-2/3 xl:w-2/5 text-xl font-semibold">
          In homage to the boundless creativity and curiosity of collector Gaston-Louis Vuitton, 
          grandson of Louis Vuitton, the Maison unveils a Fine Jewellery Collection imbued with a contemporary flair. 
          Revealing audacious materials and innovative savoir-faire, 
          the singular range created for all is a celebration of modern individuals.
        </p>
      </div>
      <div className="m-auto text-center text-white">
        <button className="w-64 h-12 border-2 rounded-full text-center box-content" onClick={() => redirectPage("/gifts-for-women")}>Discover the Collection</button>
      </div>
    </section>
  )
}

export default CampaionHeading;