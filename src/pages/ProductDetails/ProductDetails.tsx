import Footer from "../../components/Footer/Footer";

const ProductDetails = () => {
  return (
    <section className="font-mono">
      <div className="flex">
        <div className="w-1/2 bg-blue-200">
          <img className="w-full bg-[url('https://au.louisvuitton.com/static_lvfront/product-card-gradients/gradient_floor_square.svg')] bg-cover" src="https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nano-speedy-bicolour-monogram-empreinte-leather-wallets-and-small-leather-goods--M24169_PM2_Front%20view.png?wid=1090&hei=1090" alt="" />
          <img className="w-full bg-[url('https://au.louisvuitton.com/static_lvfront/product-card-gradients/gradient_floor_square.svg')] bg-cover" src="https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nano-speedy-bicolour-monogram-empreinte-leather-wallets-and-small-leather-goods--M24169_PM1_Side%20view.png?wid=1090&hei=1090" alt="" />
          <img className="w-full bg-[url('https://au.louisvuitton.com/static_lvfront/product-card-gradients/gradient_floor_square.svg')] bg-cover" src="https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nano-speedy-bicolour-monogram-empreinte-leather-wallets-and-small-leather-goods--M24169_PM1_Interior%20view.png?wid=1090&hei=1090" alt="" />
          <img className="w-full bg-[url('https://au.louisvuitton.com/static_lvfront/product-card-gradients/gradient_floor_square.svg')] bg-cover" src="https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nano-speedy-bicolour-monogram-empreinte-leather-wallets-and-small-leather-goods--M24169_PM1_Interior2%20view.png?wid=1090&hei=1090" alt="" />
          <img className="w-full bg-[url('https://au.louisvuitton.com/static_lvfront/product-card-gradients/gradient_floor_square.svg')] bg-cover" src="https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nano-speedy-bicolour-monogram-empreinte-leather-wallets-and-small-leather-goods--M24169_PM1_Detail%20view.png?wid=1090&hei=1090" alt="" />
          <img className="w-full bg-[url('https://au.louisvuitton.com/static_lvfront/product-card-gradients/gradient_floor_square.svg')] bg-cover" src="https://au.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nano-speedy-bicolour-monogram-empreinte-leather-wallets-and-small-leather-goods--M24169_PM1_Back%20view.png?wid=1090&hei=1090" alt="" />
        </div>

        <div className="w-1/2 bg-white h-screen flex justify-center items-center sticky top-0 overflow-hidden">
          <div className="w-2/5">
            <div className="flex justify-between w-full">
              <p>N40548</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>

            <div>
              <h1 className="text-xl">Nano Speedy</h1>
              <p>AUD 3,600</p>
            </div>

            <div className="flex flex-col my-12">
              <div className="flex justify-between items-center h-16 border-b">
                <p>Colours</p>
                <div className="flex gap-2 items-center">
                  <p>Blue Hour</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center h-16 border-b">
                <p>Materials</p>
                <div className="flex gap-2 items-center">
                  <p>Manogram Empreinte Leather</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center h-16 border-b">
                <p>More sizes</p>
                <div className="flex gap-2 items-center">
                  <p>Nano Speedy</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center my-4">
              <button className="w-full bg-black text-white rounded-full p-4">Add to shopping bag</button>
              <div className="w-full flex justify-start mt-4">
                <p className="text-sm text-gray-400">Free Express delivery until eligible postcodes only</p>
              </div>
            </div>

            <div className="flex flex-col mt-12 gap-4 text-sm">
              <p>Check availability in store</p>
              <p>Product Details</p>
              <p>Delivery & Returns</p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  )
}

export default ProductDetails;
