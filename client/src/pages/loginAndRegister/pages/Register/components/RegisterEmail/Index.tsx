import SquareWithSomeMessage from "../../../../../../components/containers/SquareWithSomeMessage/Index";
import DefaultInput from "../../../../../../components/inputs/DefaultInput/Index";
import MainButton from "../../../../../../components/buttons/MainButton/Index";
import Text from "../../../../../../components/text/Text/Text";
import goBackToLoginPage from "./services/goBackToLoginPage";
import Request from "./services/registerEmail";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./styles.scss";

const RegisterEmail = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function send(e:FormEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const request = new Request();
      await request.registerEmail(firstName, lastName, email, username, password);
      goBackToLoginPage({history, setError, setSuccess});
    }
    catch(err:any) {
      setError(err);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <form id='email-form' onSubmit={async (e) => await send(e)}>
      <div id='first-and-last-name-container'>
        <DefaultInput
          leftIconeClass='fas fa-user'
          maxLength={50}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='Nome'
          value={firstName}
        />
        <DefaultInput
          leftIconeClass='fas fa-user'
          maxLength={50}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Sobrenome'
          value={lastName}
        />
      </div>
      <DefaultInput
        leftIconeClass='fas fa-at'
        margin='10px 0px'
        maxLength={100}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        type='email'
        value={email}
      />
      <DefaultInput
        leftIconeClass='fas fa-id-badge'
        maxLength={50}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Nome de usuário'
        type='text'
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
        text='Próximo'
        type='submit'
      />
      <SquareWithSomeMessage  
        background='#078307cc'
        message={"Registrado"}
        setVisibility={setSuccess}
        visible={success}
      />
      {error && <Text color='red' text={error} margin='15px 0px 0px 0px'/>}
    </form>
  );
}

export default RegisterEmail;