import MainContainer from "../../components/containers/MainContainer/Index";
import Register from "./components/Register/Index";
import Login from "./components/Login/Index";
import ImageSquare from "./components/ImageSquare/Index";

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