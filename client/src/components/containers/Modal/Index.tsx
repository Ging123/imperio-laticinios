import './styles.scss';

interface props {
  background?:string;
  onClick?:() => void;
}

const Index = (props:props) => {
  const style = { background:props.background };
  return <div className='modal' onClick={ props.onClick } style={style}/>
}

export default Index