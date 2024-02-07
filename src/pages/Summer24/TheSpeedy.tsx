const TheSpeedy = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center">
      <div className="w-full">
        <video 
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/xTE5K6CcaC_HD.mp4" 
          loop 
          aria-hidden="true" 
          className="w-full"
          playsInline
          autoPlay
          muted
        ></video>
      </div>

      <div className="text-center px-auto py-20">
        <h2 className="text-lg mb-4">The Speedy</h2>
        <div>
          <p>Enrobed in graphic Monogram-adorned leather, the iconic Speedy bag is</p>
          <p>reinvented through audacious hues. Fusing heritage savoir-faire and a</p>
          <p>contemporary flair, the model is imbued with the vivacious spirit of New York</p>
          <p>City.</p>
        </div>
      </div>

      <div className="w-full max-w-screen-lg pb-20">
        <img 
          src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_SS24_DL1_27_LVCOM_1600x2000_DII.jpg?imwidth=2400" 
          alt="Speedy page" 
          className="w-full"/>
      </div>
    </section>
  )
}

export default TheSpeedy;
