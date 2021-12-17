import Header from './components/Header/Index';
import Routes from './Routes';
import './styles.scss';

const Admin = () => {
  document.title = 'Gerenciar';
  
  return (
    <>
      <Header/>
      <Routes/>
    </>
  );
}

export default Admin;