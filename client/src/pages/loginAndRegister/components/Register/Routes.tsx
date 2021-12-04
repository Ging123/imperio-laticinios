import { Switch, Route } from 'react-router-dom';
import RegisterEmail from './pages/RegisterEmail/Index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/register/address'/>
      <Route path='/' render={() => <RegisterEmail/>}/>
    </Switch>
  );
}

export default Routes;