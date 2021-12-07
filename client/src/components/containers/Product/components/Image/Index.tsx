import './styles.scss';

interface props {
  src:string;
}

const Images = (props:props) => {
  const alt = 'Não foi possivel carregar essa imagem';

  return (
    <div className="product-image-container">
      <img alt={alt} src={props.src}/>
    </div>
  )
}

export default Images
