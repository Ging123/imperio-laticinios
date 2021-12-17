import Title from '../../../../components/text/Title/Index';
import Table from './components/Table/Index';

const Product = () => {
  document.title = 'Gerenciar Produtos';

  return (
    <div>
      <Title 
        margin="120px 0px 20px 0px"
        text="Produtos"
      />
      <Table/>
    </div>
  )
}

export default Product;