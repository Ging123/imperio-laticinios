import dismountAfterTwoSeconds from './services/dismountAfterTwoSeconds';
import { useEffect } from 'react';
import './styles.scss';

interface props {
  background?:string;
  color?:string;
  message:string;
  visible:boolean;
  setVisibility:React.Dispatch<React.SetStateAction<boolean>>
}

const SquareWithSomeMessage = (props:props) => {
  useEffect(() => { dismountAfterTwoSeconds(props.setVisibility) }, [props.visible]);
  const styles = { background:props.background, color:props.color }
  return (
    <>
    {
      props.visible &&
      <div className='square-with-some-message not-able-to-select' style={styles}>
        { props.message }
      </div>
    }
    </>
  );
}

export default SquareWithSomeMessage;