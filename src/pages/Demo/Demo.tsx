import { Carousel } from 'flowbite-react';

// text truncate
// grow
// flex basis
// tracking (letter spacing)
// line clamp
// leading (line height)
// list-image-[]
// vertical align
// box shadow
// svg fill stroke stroke-width
// container

// underline offset
// divide width (border)
// space

const Demo = () => {
  return (
    <section>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>

      <section className="flex items-center justify-center w-full h-screen overflow-hidden bg-fixed bg-center bg-cover custom-img bg-[url('src/assets/Bgimgs/LV_GIFTING_Package_DI3.avif')]">
        <div className='text-white'>
          Welcome to my site!
        </div>
      </section>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a magna non varius. Proin leo felis, euismod non porta eget, varius sit amet sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.

Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum ipsum, id consequat nulla nunc in ligula.

Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim neque.

Parralax inline
      </p>

      <section className="flex items-center justify-center w-full h-screen overflow-hidden bg-fixed bg-center bg-cover custom-img bg-[url('src/assets/Bgimgs/LV_GIFTING_Package_DI3.avif')]">
        <div className='text-white'>
          Parallax line
        </div>
      </section>
    </section>
  )
}

export default Demo;
