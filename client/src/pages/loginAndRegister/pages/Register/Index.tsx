import LoginWithASocialMedia from '../../../../components/text/LoginWithASocialMedia/Index';
import RegisterEmail from './components/RegisterEmail/Index';
import Title from '../../../../components/text/Title/Index';
import Or from '../../../../components/text/Or/Index';
import LoginText from './components/LoginText/Index';
import setVisibility from './services/setVisibility';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import './styles.scss';

const Register = () => {
  const location = useLocation();
  useEffect(() => { 
    if(location.pathname === '/start/register/email') document.title = 'Registrar-se';
    setVisibility(location.pathname) }, 
  [location]);
  
  return (
    <div id='register-container'>
      <div className='container'>
        <Title margin='40px 0px' text='Cadastre-se'/>
        <RegisterEmail/>
        <LoginText/>
        <Or margin='15px 0px 0px 0px'/>
        <LoginWithASocialMedia/>
      </div>
    </div>
  );
}

export default Register;