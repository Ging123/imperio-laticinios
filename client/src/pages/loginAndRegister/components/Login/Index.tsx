import LoginWithASocialMedia from '../../../../components/text/LoginWithASocialMedia/Index';
import DontHaveAnAccount from './components/DontHaveAnAccountText/Index';
import Title from '../../../../components/text/Title/Index';
import Or from '../../../../components/text/Or/Index';
import setVisibility from './services/setVisibility';
import FormToLogin from './components/form/Index';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import './style.scss';


const Login = () => {
  const location = useLocation();
  useEffect(() => { setVisibility(location.pathname) } ,[location])
  return (
    <div id='login-container'>
      <div className='container'>
        <Title text='Entrar' margin='40px 0px'/>
        <FormToLogin/>
        <DontHaveAnAccount/>
        <Or/>
        <LoginWithASocialMedia/>
      </div>
    </div>
  );
}

export default Login;