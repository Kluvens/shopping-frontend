import { GiftsForWomen } from '../../assets/GiftsForWomen';

const Items = () => {
  return (
    <section>
      <div>
        <div className='overflow-hidden sticky top-0'>
          <img
            className='w-full' 
            src="https://au.louisvuitton.com/content/dam/lv/online/high-end/unisex/gift/U_Gift_Guide_Valentines_Day_2024.html/jcr:content/assets/VALENTINESDAY2024_110_women_romantic_symphony_DI3.jpg?imwidth=4096" 
            alt="Romantic Symphoney" />
        </div>
        <div className='flex flex-col items-center justify-center relative z-1 w-full h-screen text-white'>
          <h3 className='text-5xl'>Romantic Symphony</h3>
          <div className='text-lg'>
            <p>bags</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 bg-gray-200 p-4">
        {GiftsForWomen.map((product, index) => (
          <a key={index} href='#' className={product.featured ? "col-span-2 row-span-2 rounded-3xl bg-white text-center" : "col-span-1 row-span-1 rounded-3xl bg-white text-center"}>
            <img className='rounded-3xl' src={product.image} alt={product.name} />
            {!product.featured && (
              <div className='pb-2 text-gray-500'>
                <h3>{product.name}</h3>
                <p>AUD {product.price}</p>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Items;
