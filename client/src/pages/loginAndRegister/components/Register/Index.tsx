import LoginWithASocialMedia from '../../../../components/text/LoginWithASocialMedia/Index';
import ProgressBar from '../../../../components/containers/ProgressBar/Index';
import getStatusOfCurrentPage from './services/getStatusOfCurrentPage';
import Title from '../../../../components/text/Title/Index';
import Or from '../../../../components/text/Or/Index';
import LoginText from './components/LoginText/Index';
import { useLocation } from 'react-router';
import Routes from './Routes';
import './styles.scss';


const Register = () => {
  const location = useLocation();
  const currentPage = getStatusOfCurrentPage(location.pathname);
  return (
    <div className='flex-column' id='register-container'>
      <div className='container'>
        <Title text={currentPage.title}/>
        <ProgressBar level={0} margin='40px 0px'/>
        <Routes/>
        <LoginText/>
        <Or margin='15px 0px 0px 0px'/>
        <LoginWithASocialMedia/>
      </div>
    </div>
  );
}

export default Register;