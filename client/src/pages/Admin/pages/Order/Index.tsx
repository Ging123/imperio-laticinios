import { useEffect } from 'react';
import Title from '../../../../components/text/Title/Index';
import Table from './components/Table/Index';

const Order = () => {
  document.title = 'Gerenciar Pedidos';

  useEffect(() => {
    
  });

  return (
    <div>
      <Title 
        margin="120px 0px 20px 0px"
        text="Pedidos"
      />
      <Table/>
    </div>
  )
}

export default Order;