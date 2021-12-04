import Text from '../../../../../../components/text/Text/Text';
import { useHistory } from 'react-router';

const DontHaveAnAccount = () => {
  const history = useHistory();
  const openSignUpPage = () => history.push('/register/email')
  return (
    <Text margin='20px 0px'>
      Não tem uma conta ?
      <Text 
        className='darker-on-hover-or-click'
        color='#FF6700'
        inline={true}
        onClick={() => openSignUpPage()}
        text=' Cadastre-se'
      />
    </Text>
  );
}

export default DontHaveAnAccount;