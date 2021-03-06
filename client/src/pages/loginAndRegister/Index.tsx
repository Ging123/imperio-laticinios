import MainContainer from "../../components/containers/MainContainer/Index";
import ImageSquare from "./components/ImageSquare/Index";
import Register from "./pages/Register/Index";
import Login from "./pages/Login/Index";

const LoginAndRegister = () => {

  return (
    <MainContainer flex='row'>
      <Login/>
      <Register/>
      <ImageSquare/>
    </MainContainer>
  )
}
 
export default LoginAndRegister;