import googleIcone from '../../../../../global/images/google-icone.png';

interface props {
  link?:string;
  margin?:string;
}

const GoogleCircle = (props:props) => {
  const styles = { margin:props.margin };
  return (
    <a className='social-media-circle' href={props.link} style={styles}>
      <img 
        alt='Não foi possível carregar essa imagem :('
        className='social-media-icone' 
        draggable="false"
        src={googleIcone} 
      />
    </a>
  );
} 

export default GoogleCircle;