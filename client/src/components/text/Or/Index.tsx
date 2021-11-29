import Text from "../Text/Text";
import './styles.scss';

interface props {
  margin?:string;
}

const Or = (props:props) => {
  return (
    <div className='or-conteiner' style={{ margin:props.margin }}>
      <div className='line'/>
      <Text color='gray' text='OU'/>
      <div className='line'/>
    </div>
  )
}

export default Or;