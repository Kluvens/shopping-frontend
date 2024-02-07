import ProductsList from "../../assets/ProductsList";
import ProductThumbnail from "./ProductThumbnail/ProductThumbnail";
import Footer from "../../components/Footer/Footer";

const Products = () => {
  return (
    <section>
      <div className="grid grid-cols-4">
        <div className="col-span-2 row-span-2">
          <img className="object-cover w-full h-full" src="https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_WOMEN_EDITORIALISATION_NOVEMBRE_0647_MILKY-WAY_LVCOM_1600x2000_DII.jpg?wid=2400" alt="first image" />
        </div>
        {ProductsList.map((product) => (
          <ProductThumbnail key={product.img} product={product}></ProductThumbnail>
        ))}
      </div>

      <Footer></Footer>
    </section>
  )
}

export default Products;
