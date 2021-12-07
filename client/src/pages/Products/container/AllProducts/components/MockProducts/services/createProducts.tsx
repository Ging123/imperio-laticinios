import Product from "../../../../../../../components/containers/Product/Index";

export default function createProducts(name:string, price:number, src:string, 
description:string) {
  return (
    <Product
      name={name}
      price={price}
      src={src}
      description={description}
      key={name}
    />
  );
}