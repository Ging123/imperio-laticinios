import Description from './components/Description/Index';
import Modal from '../../../Modal/Index';
import './styles.scss';

interface props {
  className:string;
  description:string;
  id:string;
  title:string;
}

const Image = (props:props) => {
  const classes = `container-of-image-to-slide ${props.className || ''}`;

  return (
    <div className={classes} id={props.id}>
      <Modal background="#00000067"/>
      <Description
        className={props.className}
        description={props.description}
        title={props.title}
      />
    </div>
  )
}

export default Image;