const CampaionCreativity = () => {
  return (
    <section className="py-16">
      <div className="mb-24">
        <h1 className="text-center text-2xl mb-4">Endless Creativity</h1>
        <div className="flex justify-center items-center text-center text-md">
          <p className="w-2/3 xl:w-2/5">
            Inviting infinite reinvention, the artful designs draw on the Maison’s playful side with the interactive puzzle ring and sophisticated pencil pendant. 
            Adorned in denim-inspired titanium Les Gastons Vuitton Blue, these signature creations elicit a myriad of stylistic variations.
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
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_1/JEWELRY_LES_GASTONS_80_063_LVCOM_2048x1152_DI3.jpg?imwidth=2400" 
            alt="Campaion creativity first image"
            className="col-span-2 h-full bg-cover overflow-hidden" />
          <img 
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_1/JEWELRY_LES_GASTONS_30_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
            alt="Campaion creativity second image" />
          <img 
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_1/JEWELRY_LES_GASTONS_60_116_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
            alt="Campaion creativity third image" />
        </div>
      </div>
    </section>
  )
}

export default CampaionCreativity;
