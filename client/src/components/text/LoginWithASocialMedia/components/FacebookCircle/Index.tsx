import facebookImage from '../../../../../global/images/facebook-icone.png';

interface props {
  link?:string;
  margin?:string;
}

const FacebookCircle = (props:props) => {
  const styles = { margin:props.margin };
  return (
    <a className='social-media-circle' href={props.link} style={styles}>
      <img 
        alt='Não foi possível carregar essa imagem :('
        className='social-media-icone'
        draggable="false"
        src={facebookImage}
      />
    </a>
  );
}

export default FacebookCircle;