import FacebookCircle from "./components/FacebookCircle/Index";
import GoogleCircle from "./components/GoogleCircle/Index";
import Text from "../Text/Text";
import './styles.scss';

const LoginWithASocialMedia = () => {
  return (
    <div className='social-media-login-container'>
      <Text
        color='gray'
        margin='20px 0px'
        text='Entre com uma rede social'
      />
      <div className='flex-row'>
        <FacebookCircle
          link=''
          margin='0px 15px 0px 0px'
        />
        <GoogleCircle link=''/>
      </div>
    </div>
  );
}

export default LoginWithASocialMedia;