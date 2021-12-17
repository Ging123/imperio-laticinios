import { Route, Switch } from "react-router-dom"
import Product from "./pages/Product/Index";
import Order from "./pages/Order/Index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/admin/products' render={() => <Product/>}/>
      <Route exact path='/admin/orders' render={() => <Order/>}/> 
    </Switch>
  )
}

export default Routes