import './style.scss';

interface props {
  children?:any;
  flex?:'row'|'column';
}

const MainContainer = (props:props) => {
  const flexDirection = getFlexDirection(props.flex);
  return (
    <main className={`main-container ${flexDirection}`}>
      {props.children}
    </main>
  );
}

function getFlexDirection(direction?:'row'|'column') {
  if(direction === 'row' || direction === 'column') return `flex-${direction}`;
  return 'block';
}

export default MainContainer;