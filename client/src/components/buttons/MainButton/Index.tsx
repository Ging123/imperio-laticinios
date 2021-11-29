import './styles.scss';

interface props {
  disable?:boolean;
  onClick?:() => void;
  text?:string;
  type?:'button'|'reset'|'submit';
}

const MainButton = (props:props) => {
  const className = props.disable ? 'main-button-disable' : 'main-button';
  const content = props.disable ? 'Carregando' : props.text;
  return (
    <button 
      className={className} 
      type={ props.type } 
      onClick={ props.onClick }>
      { content }
    </button>
  )
}

export default MainButton;