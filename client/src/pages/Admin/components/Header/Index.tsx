import logout from '../../../../global/services/logout';
import { useHistory } from 'react-router-dom';
import './styles.scss'; 

const Header = () => {
  const history = useHistory();
  const goToProductPage = () => history.push('/admin/products');
  const goToOrderPage = () => history.push('/admin/orders');
  const goToHomePage = () => history.push('/');

  return (
    <header className='admin-header'>
      <div className='products-and-orders'>
        <div className='orange_on_hover' onClick={() => goToOrderPage()}>
          Pedidos
        </div>
        <div className='orange_on_hover' onClick={() => goToProductPage()}>
          Produtos
        </div>
      </div>
      <div className='orange_on_hover' onClick={() => logout(goToHomePage)}>
        Sair
      </div>
    </header>
  )
}

export default Header;