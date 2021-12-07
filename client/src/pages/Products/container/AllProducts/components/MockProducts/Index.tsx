import cheese1 from './images/queijo_suiço.jpg';
import cheese2 from './images/muçarela.jpg';
import chesse3 from './images/provolone.jpg';
import cheese4 from './images/cottage.jpg';
import cheese5 from './images/brie.jpg';
import cheese6 from './images/gorgonzola.jpg';
import chesse7 from './images/ricota.jpg';
import chess8 from './images/prato.jpg';
import createProducts from './services/createProducts';

const MockProducts = () => {
  const src = [cheese1, cheese2, chesse3, cheese4, cheese5, cheese6, chesse7,
  chess8]; 
  const name = ['queijo suiço', 'muçarela', 'Provolone', 'Cottage',
  'Brie', 'Gorgonzola', 'Ricota', 'Prato']
  const price = [2, 3, 10, 50, 6.20, 90, 300, 9.99];
  const description = ['Queijo suiço', 'Esse aqui é bom hein', 
  'Um queijo para toda familia', 'Parece pipoca mas, é queijo', 
  'Um queijo de sabor fenomenal', 'Sabor super natural', 'Rico em proteínas',
  'Queijo vindo do sul, fresco e natural']; 

  return (
    <>
      {
        src.map((value, i) => 
          createProducts(name[i], price[i], value, description[i])
        ) 
      }
    </>
  );
}



export default MockProducts;