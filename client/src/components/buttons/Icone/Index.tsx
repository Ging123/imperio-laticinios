import './styles.scss';

interface props {
  className:string;
  fontSize?:string;
  onClick?:() => void;
}

const Icone = (props:props) => {
  const styles = { fontSize:props.fontSize };
  const className = `icone ${props.className || ''}`;
  return <i className={className} onClick={props.onClick} style={styles}/>
}

export default Icone;