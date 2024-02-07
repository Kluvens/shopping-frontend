import { useNavigate } from "react-router-dom";

const HomeHighlights = () => {
  const navigate = useNavigate();

  const redirectPage = (pageLink: string) => {
    navigate(pageLink);
  }

  return (
    <section className="overflow-visible">
      <div className="relative">
          <div className="relative">
            <img
              className="h-full w-full"
              src="https://hk.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_january/central/Men_SS24_Campaign_WW_HP_Push_V1201_DI3.jpg?wid=4096" 
              alt="spring-summer-2024-cover" />
          </div>
          
          <div className="absolute inset-x-0 bottom-0 w-full p-[3.3vw]">
            <div className="m-auto text-center text-white">
              <div className="mb-4">
                <p>MEN</p>
                <h3 className="text-3xl">Spring Summer 2024</h3>
              </div>
              <div className="m-auto text-center text-white">
                <button className="w-64 h-12 border-2 rounded-full text-center box-content" onClick={() => redirectPage('/summer-2024')}>Discover the Collection</button>
              </div>
            </div>
          </div>
      </div>

      <div className="relative">
        <div className="relative">
          <img
            className="w-full"
            src="https://hk.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_january/central/Women_Cruise_2024_WW_HP_Push_V0108_DI3.jpg?wid=4096"
            alt="cruise-2024-cover" />
        </div>
        
        <div className="absolute inset-x-0 bottom-0 w-full p-[3.3vw]">
          <div className="m-auto text-center text-white">
            <div className="mb-4">
              <p>WOMEN</p>
              <h3 className="text-3xl">Gifts for Women</h3>
            </div>
            <div className="flex justify-center gap-4 m-auto text-center text-white">
              <button className="w-64 h-12 border-2 rounded-full text-center box-content" onClick={() => redirectPage('/gifts-for-women')}>Discover the Collection</button>
              <button className="w-64 h-12 border-2 rounded-full text-center box-content" onClick={() => redirectPage('/campaion')}>Explore the Campion</button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative">
          <img
            className="w-full"
            src="https://hk.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2023/2023_november/LV_Services_WW_HP_Push_DI3.jpg?wid=4096"
            alt="lv-services-cover" />
        </div>
        
        <div className="absolute inset-x-0 bottom-0 w-full p-[3.3vw]">
          <div className="m-auto text-center text-white">
            <div className="mb-4">
              <h3 className="text-3xl">Louis Vuitton Services</h3>
            </div>
            <div className="m-auto text-center text-white">
              <button className="w-64 h-12 border-2 rounded-full text-center box-content" onClick={() => redirectPage('/services')}>Discover</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHighlights;
