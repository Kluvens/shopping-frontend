import Footer from "../../components/Footer/Footer";

const Services = () => {
  return (
    <section className="font-mono">
      <div className="flex items-center justify-center text-white w-full h-screen overflow-hidden bg-fixed bg-center bg-cover bg-[url('src/assets/Bgimgs/LV_GIFTING_Package_DI3.avif')]">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Signature Louis Vuitton Packaging</h1>
          <div>
            <p>Louis Vuitton offers complementary wrapping on</p>
            <p>all orders, carefully packaged in the Maison’s</p>
            <p>iconic boxes. Add a special touch with a</p>
            <p>personal note when sending a gift.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center -mt-16">
        <div className="w-32 h-32 bg-white transform rotate-45 overflow-hidden flex justify-center items-center">
          <img src="src/assets/Bgimgs/Louis_Vuitton_LV_logo.png" className="w-2/3 h-2/3 border-none object-cover transform -rotate-45 z-10" />
        </div>
      </div>

      <div className="text-center text-lg py-12">
        <p className="h-16 flex items-center justify-center">Louis Vuitton is one of the world's leading international fashion houses.</p>
        <p className="h-16 flex items-center justify-center">We endeavor to provide the best services</p>
        <p className="h-16 flex items-center justify-center">We promise our products beats other brands in terms of quality</p>
      </div>

      <div className="flex items-center justify-center text-white w-full h-screen overflow-hidden bg-fixed bg-center bg-cover bg-[url('src/assets/Bgimgs/LV_GIFTING_Package_DI3.avif')]">
        <div className="text-center">
          <h1 className="text-xl mb-4">How can we help you?</h1>
          <div className="text-5xl">
            <p>Wherever you are, Louis Vuitton</p>
            <p>Client Advisors will be delighted</p>
            <p>to assist you.</p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  )
}

export default Services;
