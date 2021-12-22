import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LoginAndRegister = lazy(() => import('./pages/loginAndRegister/Index'));
const Products = lazy(() => import('./pages/Products/Index'));
const Admin = lazy(() => import('./pages/Admin/Index'));
const Address = lazy(() => import('./pages/Address/Index'));

const Pages = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Carregando...</div>}>
        <Route path='/address' render={() => <Address/>}/>
        <Route path='/admin' render={() => <Admin/>}/>
        <Route exact path='/products' render={() => <Products/>}/> 
        <Route path='/start' render={() => <LoginAndRegister/>}/>
        <Route exact path='/'>
          <Redirect exact from='/' to='/start'/>
        </Route> 
      </Suspense>
    </Switch>
  ) 
}

export default Pages;