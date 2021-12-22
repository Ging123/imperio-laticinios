import changeColorWhenNeeded from "./services/changeColorWhenNeeded";
import Logout from "./components/Logout/Index";
import Search from "./components/Search/Index";
import Cart from "./components/Cart/Index";
import Logo from "../../text/Logo/Index";
import { useEffect } from "react";
import "./styles.scss";

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', changeColorWhenNeeded);
    return () => {
      window.removeEventListener('scroll', changeColorWhenNeeded);
    }
  }, []);
  //<Search/> I DIDNT HAVE TIME TO IMPLEMENT IT :(
  return (
    <header className='header' id='header'>
      <Cart/>
      <Logo content="Laticínios Delivery"/> 
      <Logout/>
    </header>
  )
}

export default Header;