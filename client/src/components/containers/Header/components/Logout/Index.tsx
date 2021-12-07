import Icone from '../../../../buttons/Icone/Index';

const Logout = () => {
  const classes = 'fas fa-door-open orange_on_hover';
  return <Icone className={classes} onClick={() => console.log('logout')}/>
}

export default Logout;