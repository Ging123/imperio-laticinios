import LoginWithASocialMedia from '../../../../components/text/LoginWithASocialMedia/Index';
import DontHaveAnAccount from './components/DontHaveAnAccountText/Index';
import Title from '../../../../components/text/Title/Index';
import Or from '../../../../components/text/Or/Index';
import FormToLogin from './components/form/Index';
import './style.scss';

const Login = () => {
  return (
    <div className='flex-column' id='login-container'>
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