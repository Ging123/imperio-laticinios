type setter = React.Dispatch<React.SetStateAction<string>>
type setterBoolean = React.Dispatch<React.SetStateAction<boolean>>;

interface config {
  history:any,
  setError:setter;
  setSuccess:setterBoolean;
}

export default function goBackToLoginPage(config:config) {
  config.setError('');
  config.setSuccess(true);
  backToLoginPage(config.history);
}

const backToLoginPage = (history:any) => history.push('/start');