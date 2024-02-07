type ProductType = {
  img: string;
  name: string;
  price: string;
}

const ProductThumbnail = (props: { key: string; product: ProductType}) => {
  const key = props.key;
  const { img, name, price } = props.product;

  return (
    <div key={key} className="flex flex-col justify-between font-mono bg-[url('https://au.louisvuitton.com/static_lvfront/product-card-gradients/gradient_floor_square.svg')] bg-cover">
      <div className="mt-20">
        <img src={img} alt={name} />
      </div>
      <div className="flex flex-col gap-2 pl-4 pb-4 text-gray-700">
        <p>{name}</p>
        <p>AUD {price}</p>
      </div>
    </div>
  )
}

export default ProductThumbnail;
