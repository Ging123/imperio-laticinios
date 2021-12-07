import './styles.scss';

interface props {
  className:string;
  description:string;
  title:string;
}

const Description = (props:props) => {
  const mustShow = `${props.className === 'show' ? 'show' : ''}`;
  const classesOfTitle = `title-of-image-to-slide ${mustShow}`;
  const classesOfDescription = `description-of-image-to-slide ${mustShow}`
  return (
    <div className="image-to-slide-descriptions-container">
      <div className={classesOfTitle}>{props.title}</div>
      <div className={classesOfDescription}>{props.description}</div>
    </div>
  )
}

export default Description;