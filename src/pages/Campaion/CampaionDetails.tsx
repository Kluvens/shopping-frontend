const CampaionDetails = () => {
  return (
    <section className="mt-24">
      <div className="mb-24">
        <h1 className="text-center text-2xl mb-4">Cutting Edge Details</h1>
        <div className="flex justify-center items-center text-center">
          <p className="w-2/3 xl:w-2/5">
          Reframing the Maison’s heritage through a free-spirited contemporary lens, 
          the eye-catching pieces captivate with meticulous details.
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
        <div className="grid grid-cols-3">
          <img
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_3/JEWELRY_LES_GASTONS_10_349_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
            alt="Campaion creativity first image" />
          <img 
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_3/JEWELRY_LES_GASTONS_20_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
            alt="Campaion creativity second image" />
          <img 
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/men/jewelry/M_Jwl_Les_Gastons.html/jcr:content/assets/section_3/JEWELRY_LES_GASTONS_30_056_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
            alt="Campaion creativity third image" />
        </div>
      </div>
    </section>
  )
}

export default CampaionDetails;