import foodImage2 from '../../images/laticinios_alto_portas.jpg';
import foodImage1 from '../../images/derivados_de_leite.jpg';
import foodImage4 from '../../images/leite-e-derivadoss.jpg';
import foodImage3 from '../../images/leite-e-derivados.jpg';

const Images = () => {
  const imagesSrc = [foodImage1, foodImage2, foodImage3, foodImage4];
  return <>{ imagesSrc.map((src, index) => createImageTag(src, index)) }</>
}

function createImageTag(src:string, index:number) {
  const alt = 'Não foi possível carregar essa imagem :(';
  const className = index === 0 ? 'show' : 'hide';
  return <img key={index} src={src} alt={alt} className={className}/>
}

export default Images;