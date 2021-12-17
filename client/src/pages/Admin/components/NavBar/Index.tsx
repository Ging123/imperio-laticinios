import IconeBar from './components/IconeBar/Index';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  const history = useHistory();
  const goToProductPage = () => history.push('/admin/products');
  const goToOrderPage = () => history.push('/admin/orders');

  return (
    <div className="nav-bar">
      <IconeBar
        content="Produtos"
        icone="fas fa-archive"
        onClick={() => goToProductPage()}
      />
      <IconeBar
        content="Pedidos"
        icone="fas fa-truck-moving"
        onClick={() => goToOrderPage()}
      />
      <IconeBar
        content="Sair"
        icone="fas fa-door-open"
      />
    </div>
  )
}

export default NavBar;