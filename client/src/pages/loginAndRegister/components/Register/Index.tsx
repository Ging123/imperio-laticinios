import LoginWithASocialMedia from '../../../../components/text/LoginWithASocialMedia/Index';
import ProgressBar from '../../../../components/containers/ProgressBar/Index';
import getStatusOfCurrentPage from './services/getStatusOfCurrentPage';
import Title from '../../../../components/text/Title/Index';
import Or from '../../../../components/text/Or/Index';
import LoginText from './components/LoginText/Index';
import setVisibility from './services/setVisibility';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import Routes from './Routes';
import './styles.scss';

const Register = () => {
  const location = useLocation();
  useEffect(() => { setVisibility(location.pathname) }, [location]);
  const currentPage = getStatusOfCurrentPage(location.pathname);
  return (
    <div id='register-container'>
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