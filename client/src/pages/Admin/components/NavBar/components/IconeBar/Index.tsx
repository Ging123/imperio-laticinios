import './styles.scss';

interface props {
  content:string;
  icone:string;
  onClick?:() => void;
}

const IconeBar = (props:props) => {
  return (
    <div className='icone-bar darker-on-hover-or-click' onClick={props.onClick}>
      <i className={`${props.icone} icone`}/>
      <div className='icone-bar-content'>{props.content}</div>
    </div>
  )
}

export default IconeBar;