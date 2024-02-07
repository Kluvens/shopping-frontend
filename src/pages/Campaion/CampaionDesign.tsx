const CampaionDesign = () => {
  return (
    <section>
      <div className="py-24">
        <h1 className="text-center text-2xl mb-4">The Art of Innovative Design</h1>
        <div className="flex justify-center items-center text-center">
          <p className="w-2/3 xl:w-2/5">
          Infused with the Maison’s unparalleled innovation, the audacious pieces reveal a contemporary rendition of the Monogram motif through masterful laser cutting – 
          elegantly outlining its contours with extreme precision. 
          Showcasing striking designs that dare to be different, the distinctive Fine Jewellery Collection evokes a modern allure.
          </p>
        </div>
      </div>

      <div className="w-full">
        <video
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/dtxFx8zRuL_HD.mp4"
          loop 
          aria-hidden="true"
          className="w-full" 
          playsInline
          autoPlay
          muted
        ></video>
        <div className="grid grid-cols-4">
          <img
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_2/JEWELRY_LES_GASTONS_50_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
            alt="Campaion creativity first image"/>
          <img 
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_2/JEWELRY_LES_GASTONS_40_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
            alt="Campaion creativity second image" />
          <img 
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_2/JEWELRY_LES_GASTONS_40_030_LVCOM_2048x1152_DI3.jpg?imwidth=2400" 
            alt="Campaion creativity third image"
            className="col-span-2 h-full bg-cover overflow-hidden" />
        </div>
      </div>
    </section>
  )
}

export default CampaionDesign;