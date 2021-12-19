import DefaultInput from "../../../../../../components/inputs/DefaultInput/Index";
import MainButton from "../../../../../../components/buttons/MainButton/Index";
import Text from "../../../../../../components/text/Text/Text";
import { FormEvent, useState } from "react";
import Request from "../../services/login";
import { useHistory } from "react-router";

const FormToLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const goToProductPage = () => history.push('/products');
  const goToAdminPage = () => history.push('/admin/orders');

  async function send(e:FormEvent) {
    try {
      setLoading(true);
      e.preventDefault();
      const request = new Request();
      const user = await request.login(username, password);
      setError('');
      setLoading(false);
      if(user.role === 'user') return goToProductPage();
      if(user.role === 'admin') return goToAdminPage();
      goToProductPage();
    }
    catch(err:any) {
      setError(err); 
      setLoading(false);
    }
  }

  return (
    <form onSubmit={async (e) => await send(e)}>
      <DefaultInput
        leftIconeClass='fas fa-user'
        maxLength={50}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Nome de usuário'
        value={username}
      />
      <DefaultInput
        leftIconeClass='fas fa-lock'
        margin='10px 0px 15px 0px'
        maxLength={30}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Senha'
        type='password'
        value={password}
      />
      <MainButton
        disable={loading}
        text='Entrar'
        type='submit'
      />
      {error && <Text color='red' text={error} margin='15px 0px 0px 0px'/>}
    </form>
  )
}

export default FormToLogin;