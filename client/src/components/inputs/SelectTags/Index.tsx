import createOptions from "./services/createOptions";
import './styles.scss';

interface props {
  onChange:any;
  tags:string[];
  value:string;
}

const SelectTags = (props:props) => {
  return (
    <select 
      className='select-tags' 
      onChange={props.onChange}
      value={props.value}
      >
      {props.tags.map(createOptions)}
    </select>
  )
}

export default SelectTags;