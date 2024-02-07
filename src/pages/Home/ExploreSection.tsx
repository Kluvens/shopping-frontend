import { useNavigate } from "react-router-dom";

const ExploreSection = () => {
  const navigate = useNavigate();

  const redirectPage = (path: string) => {
    navigate(path);
  }

  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-8 p-[3.3vw]">
      <div className="group relative cursor-pointer" onClick={() => redirectPage('/')}>
        <div className="relative overflow-hidden group-hover:opacity-75">
          <img src="https://au.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_february/central/Women_Bags_WW_HP_Product_Push_0202_DI2.jpg?wid=730" 
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." 
            className="h-full w-full object-cover object-center"/>
        </div>
        <h3 className="my-6 text-md">Women's Bags</h3>
        <div className="pt-0">
          <p className=" text-sm underline underline-offset-4">Discover the Selection</p>
        </div>
      </div>

      <div className="group relative cursor-pointer" onClick={() => redirectPage('/')}>
        <div className="relative overflow-hidden group-hover:opacity-75">
          <img src="https://hk.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_january/central/Nano_Speedy_Denim_WW_HP_Product_Push_V0102_DI2.jpg?wid=1440" 
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." 
            className="h-full w-full object-cover object-center"/>
        </div>
        <h3 className="my-6 text-md">Chess Messenger Damier</h3>
        <div className="pt-0">
          <p className=" text-sm underline underline-offset-4">Discover the Digital Exclusive</p>
        </div>
      </div>

      <div className="group relative cursor-pointer" onClick={() => redirectPage('/')}>
        <div className="relative overflow-hidden group-hover:opacity-75">
          <img src="https://au.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/Homepage/2024/2024_february/central/Women_Perfumes_WW_HP_Product_Push_V0202_DI2.jpg?wid=730" 
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." 
            className="h-full w-full object-cover object-center"/>
        </div>
        <h3 className="my-6 text-md">Women's Perfumes</h3>
        <div className="pt-0">
          <p className=" text-sm underline underline-offset-4">Explore the Selection</p>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection; 
