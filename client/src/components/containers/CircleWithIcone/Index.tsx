import './styles.scss';

interface props {
  background?:string;
  disable?:boolean;
  iconeClass:string;
}

const CircleWithIcone = (props:props) => {
  const styles = { background:props.background }
  const classes = props.disable ? 'circle-with-icone-disable' : 'circle-with-icone';
  return (
    <div className={classes} style={styles}>
      <i className={ props.iconeClass }/>
    </div>
  )
}

export default CircleWithIcone;