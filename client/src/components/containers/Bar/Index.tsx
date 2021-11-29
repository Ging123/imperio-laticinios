interface props {
  className?:string;
  color?:string;
  disable?:boolean;
  width?:string;
}
 
const Bar = (props:props) => {
  const enableStyles = getStyles(props.width, props.color);
  const disableStyles = getStyles(props.width);
  const styles = props.disable ? disableStyles : enableStyles;
  return <div className={`${props.className || ''}`} style={styles}/>
}

function getStyles(width='100%', color='var(--darker-gray)') {
  return {
    borderBottom:`2px solid ${color}`,
    width:width
  }
}

export default Bar;