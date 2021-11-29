import { Switch, Route } from 'react-router-dom';
import RegisterEmail from './pages/RegisterEmail/Index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <RegisterEmail/>}/>
      <Route exact path='/register/address'/>
    </Switch>
  );
}

export default Routes;