const ModernWardrobe = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center pb-16">
      <div className="text-center px-auto py-20">
        <h2 className="text-lg mb-4">Modern Dandy Wardrobe</h2>
        <div>
          <p>From Virginia to Paris, Pharrell Williams unveils a series of tailored silhouettes</p>
          <p>evoking the radiance of the sun. Emblematic motifs and a striking color palette</p>
          <p>introduce this collection as the future Louis Vuitton Men's aesthetic, boldly</p>
          <p>embellished with quintessential details.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 pb-12">
        <div>
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG03_LVCOM_1600x2000_DII_V2.jpeg?imwidth=2400" 
            alt="LV image"
            className="w-[42vw]" />
        </div>

        <div className="ml-[8vw] mt-[6vw]">
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG14_LVCOM_1600x2000_DII.jpeg?imwidth=2400" 
            alt="Nano Steamer"
            className="w-[34vw]" />
          <div>
            <h3 className="my-2">Nano Steamer</h3>
            <p>21,700</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG07_LVCOM_1600x2000_DII.jpeg?imwidth=1440" 
            alt="Damier Denim Skate Pants" />
          <div className="ml-4 pb-8">
            <h3 className="my-4">Damier Denim Skate Pants</h3>
            <p>15,500</p>
          </div>
        </div>

        <div>
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG23_LVCOM_1600x2000_DII.jpeg?imwidth=1440" 
            alt="Damier Pop Mini Speedy Bag Charm" />
          <div className="ml-4 pb-8">
            <h3 className="my-4">Damier Pop Mini Speedy Bag Charm</h3>
            <p>9,200</p>
          </div>
        </div>

        <div>
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG09_LVCOM_1600x2000_DII.jpeg?imwidth=1440" 
            alt="Crystals Beanie" />
          <div className="ml-4 pb-8">
            <h3 className="my-4">Crystals Beanie</h3>
            <p>40,500</p>
          </div>
        </div>

        <div>
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG17_LVCOM_1600x2000_DII.jpeg?imwidth=1440" 
            alt="LV Dynasty Necklace" />
          <div className="ml-4 pb-8">
            <h3 className="my-4">LV Dynasty Necklace</h3>
            <p>9,600</p>
          </div>
        </div>

        <div>
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG15_LVCOM_1600x2000_DII.jpeg?imwidth=1440" 
            alt="LV Lovers Beret" />
          <div className="ml-4 pb-8">
            <h3 className="my-4">LV Lovers Beret</h3>
            <p>7,550</p>
          </div>
        </div>
        
        <div>
          <img 
            src="https://hk.louisvuitton.com/content/dam/lv/online/high-end/men/collection/M_FA_SS24_Collection.html/jcr:content/assets/MEN_MENSS24_CAMPAIGN_EDITORIALIZATION_IMG18_LVCOM_1600x2000_DII.jpeg?imwidth=1440" 
            alt="Cropped Damier Wool Dandy Jacket" />
          <div className="ml-4 pb-8">
            <h3 className="my-4">Cropped Damier Wool Dandy Jacket</h3>
            <p>29,900</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernWardrobe;
