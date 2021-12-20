import logout from '../../../../../global/services/logout';
import Icone from '../../../../buttons/Icone/Index';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();
  const goToLoginPage = () => history.push('/');
  const classes = 'fas fa-door-open orange_on_hover';
  return (
  <Icone 
    className={classes} 
    onClick={() => logout(goToLoginPage)}
  />
  );
}

export default Logout;