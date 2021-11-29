import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const LoginAndRegister = lazy(() => import('../src/pages/loginAndRegister/Index'));

const Pages = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Carregando...</div>}>
        <Route path='/' render={() => <LoginAndRegister/>}/> 
      </Suspense>
    </Switch>
  ) 
}

export default Pages;