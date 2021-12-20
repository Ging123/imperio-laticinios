import createProducts from './services/createProducts';
import getImages from './services/getImages';

const Products = ({products, tag}:{products:any, tag:string}) => {
  const src = getImages(tag, products.length);

  return (
    <>
      {
      src?.map((value, i) => {
        return createProducts(
          products[i].name,
          products[i].price,
          value,
          products[i].description
        );
      })
      }
    </>
  )
}

export default Products;