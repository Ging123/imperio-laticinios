import './styles.scss';

interface props {
  children?:any;
  className?:string;
  color?:string;
  inline?:boolean;
  margin?:string;
  onClick?:() => void;
  text?:string;
}

interface styles {
  color?:string;
  margin?:string;
}

const Text = (props:props) => {
  const styles = { color:props.color, margin:props.margin };
  if(!props.inline) return Div(props, styles);
  return Span(props, styles);
}

const Div = (props:props, styles:styles) => {
  const className = `text ${ props.className || '' }`;
  return (
    <div className={className} onClick={props.onClick} style={styles}>
      {props.text}
      {props.children}
    </div>
  );
}

const Span = (props:props, styles:styles) => {
  const className = `text ${ props.className || '' }`;
  return (
    <span className={className} onClick={props.onClick} style={styles}>
      {props.text}
      {props.children}
    </span>
  );
}

export default Text;