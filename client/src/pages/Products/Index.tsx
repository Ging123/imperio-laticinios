import ImageSlider from '../../components/containers/ImageSlider/Index';
import Header from '../../components/containers/Header/Index';
import AllProducts from './container/AllProducts/Index';

const Products = () => {
  document.title = 'Produtos';

  return (
    <div>
      <Header/>
      <ImageSlider/>
      <AllProducts/>
    </div>
  );
}

export default Products;