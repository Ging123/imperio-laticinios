import Text from '../../../../../../components/text/Text/Text';
import { useHistory } from 'react-router';

const LoginText = () => {
  const history = useHistory();
  const goToLoginPage = () => history.push('/start');
  return (
    <Text margin='20px 0px'>
      Já possui uma conta ?
      <Text 
        className='darker-on-hover-or-click'
        color='#FF6700'
        inline={true}
        onClick={() => goToLoginPage()}
        text=' Entre Aqui'
      />
    </Text>
  );
}

export default LoginText;