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

  return (
    <header className='header' id='header'>
      <Search/>
      <Logo content="Laticínios Delivery"/> 
      <div>
        <Cart/>
        <Logout/>
      </div>
    </header>
  )
}

export default Header;