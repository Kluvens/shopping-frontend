const CollectionCover = () => {
  return (
    <section className="flex flex-col items-center bg-black text-white pb-24">
      <div className="relative w-full">
        <div className="">
          <img
            className="w-screen-md mx-auto"
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_SS24_CAMPAIGN_LJ_IMG01_LVCOM_1600x2000_DII.jpg?imwidth=1090" 
            alt="spring-summer-2024-cover" />
        </div>

        <div className="sticky bottom-0 w-full">
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/logo-lv.svg" 
            alt="Louis Vuitton" 
            className="absolute w-[96vw] transform -translate-x-1/2 left-1/2 bottom-6" />
        </div>
      </div>

      <div className="w-2/3 md:w-1/2 lg:w-1/3 flex flex-col items-center text-center my-24">
        <p>
          Embodying the audacious energy of Pharrell Williams' debut collection, LeBron
          James personifies the trailblazing vision of the Maison's next menswear chapter.
          </p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-lg my-6">Digital Exclusives</h3>
        <p>Revisited Damier creations.</p>
      </div>
    </section>
  )
}

export default CollectionCover;
