import './styles.scss';

interface props {
  className?:string;
  margin?:string;
  text?:string;
}

const Title = (props:props) => {
  const classes = setClasses(props.className);
  return (
    <div className={classes} style={{ margin:props.margin }}>
      {props.text}
    </div>
  );
}

function setClasses(className?:string) {
  if(className) return `title ${className}`;
  return 'title';
}

export default Title;