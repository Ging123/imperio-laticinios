import SelectTags from '../../../../components/inputs/SelectTags/Index';
import QuantityOfProducts from './components/QuantityOfProducts/Index';
import getProductByTagName from './services/getProductByTagName';
import Title from '../../../../components/text/Title/Index';
import MockProducts from './components/MockProducts/Index';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getTitle from './services/getTitle';
import './styles.scss';
import Products from './components/Products/Index';

const AllProducts = () => {
  const [tag, setTag] = useState('queijo');
  const [products, setProducts] = useState<any>([])
  const tags = ['queijo', 'manteiga', 'leite', 'requeijão', 'iorgute'];
  const title = getTitle(tag);
  const history = useHistory();
  const goToLoginPage = () => history.push('/');
  const goToProductPage = () => history.push('/products');

  useEffect(() => {
    (async () => {
      await getProductByTagName(tag)
      .then((productsFound) => setProducts(productsFound.data))
      .catch((err) => {
        const error = err.response;
        if(error.status === 401) return goToLoginPage();
        if(error.status === 403) return goToProductPage();
      })
    })();
  }, [tag]);

  return (
    <div id="products-page-container">
        <Title 
          margin="15px 0px" 
          text={title}
        />
        <div className="container-of-products-info">
          <QuantityOfProducts quantity={products.length || 0}/>
          <SelectTags 
            onChange={(e:any) => setTag(e.target.value)}
            tags={tags} 
            value={tag}
          />
        </div>
        <div className="all-products-container">
          <Products 
            products={products}
            tag={tag}
          />
        </div>
      </div>
  );
}

export default AllProducts;