const HomeHeading = () => {
  return (
    <section className="">
      <div className="relative w-full h-[90vh] overflow-clip">
        <video
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/bDKdiubMv7_HD.mp4"
          loop 
          aria-hidden="true" 
          className="absolute w-full"
          playsInline
          autoPlay
          muted
        ></video>
        <div className="absolute bottom-12 text-center text-white transform -translate-x-1/2 left-1/2">
          <h2 className="text-3xl">Valentine's Day</h2>
          <div className="mt-8 space-x-4">
            <button className="inline-block border-2 border-white rounded-full w-64 py-2 bg-[#19110b] bg-opacity-20 border-white text-lg">Gifts for Women</button>
            <button className="inline-block border-2 border-white rounded-full w-64 py-2 bg-[#19110b] bg-opacity-20 border-white text-lg">Gifts for Men</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeading;
