import './styles.scss';

interface props {
  children?:any;
  className?:string;
  color?:string;
  inline?:boolean;
  margin?:string;
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
  return (
    <div className={`text ${ props.className || '' }`} style={styles}>
      {props.text}
      {props.children}
    </div>
  );
}

const Span = (props:props, styles:styles) => {
  return (
    <span className={`text ${ props.className || '' }`} style={styles}>
      {props.text}
      {props.children}
    </span>
  );
}

export default Text;