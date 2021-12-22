import changeInputVisibility from './services/changeInputVisibility';
import { useRef, useState } from 'react';
import './style.scss';

interface props {
  className?:string;
  leftIconeClass?:string;
  margin?:string;
  maxLength?:number;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?:string;
  required?:boolean;
  type?:'email'|'number'|'password'|'text';
  value?:string|number;
}

const DefaultInput = (props:props) => {
  const [eyeClass, setEyeClass] = useState('password-eye fas fa-eye');
  const inputRef = useRef(null);
  return (
    <div className='default-input-container' style={{ margin:props.margin }}>
      <input 
        className='default-input'
        maxLength={ props.maxLength }
        onChange={ props.onChange }
        placeholder={ props.placeholder }
        ref={inputRef}
        required={props.required}
        type={ props.type || 'text' } 
        value={ props.value }
      />
      <i className={ `default-input-left-icone ${ props.leftIconeClass || '' }` }/>
      {props.type === 'password' && props.value !== '' &&
        <i 
          className={eyeClass}
          onClick={() => changeInputVisibility(inputRef, setEyeClass)}
        />
      }
    </div>
  );
}

export default DefaultInput;