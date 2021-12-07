import './styles.scss';

interface props {
  content:string;
  onClick?:() => void;
}

const Logo = (props:props) => {
  const classes = 'logo not-able-to-select orange_on_hover';
  return (
    <div className={classes} onClick={props.onClick}>
      { props.content }
    </div>
  )
}

export default Logo;