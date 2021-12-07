import SelectTags from '../../../../components/inputs/SelectTags/Index';
import QuantityOfProducts from './components/QuantityOfProducts/Index';
import MockProducts from './components/MockProducts/Index';
import getTags from './services/getTags';
import { useState } from 'react';
import './styles.scss';
import Title from '../../../../components/text/Title/Index';

const AllProducts = () => {
  let tags = getTags();
  const [tag, setTag] = useState(tags[0]);

  return (
    <div id="products-page-container">
        <Title 
          margin="15px 0px" 
          text={tag}
        />
        <div className="container-of-products-info">
          <QuantityOfProducts/>
          <SelectTags 
            onChange={(e:any) => setTag(e.target.value)}
            tags={tags} 
            value={tag}
          />
        </div>
        <div className="all-products-container">
          <MockProducts/>
        </div>
      </div>
  );
}

export default AllProducts;