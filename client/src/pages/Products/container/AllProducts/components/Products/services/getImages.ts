//CHEESES
import cheese1 from '../images/cheese/brie.jpg';
import cheese2 from '../images/cheese/cottage.jpg';
import cheese3 from '../images/cheese/gorgonzola.jpg';
import cheese4 from '../images/cheese/muçarela.jpg';
import cheese5 from '../images/cheese/prato.jpg';
import cheese6 from '../images/cheese/provolone.jpg';
import cheese7 from '../images/cheese/queijo_suiço.jpg';
import cheese8 from '../images/cheese/queijos-brasileiros.jpg';
import cheese9 from '../images/cheese/queijos-duros-capa.jpg';
import cheese10 from '../images/cheese/ricota.jpg';
//MILK
import milk1 from '../images/milk/26443_Leite-faz-mal-a-saude_BANNER_Alimentacao-Saudavel-729x410.png';
import milk2 from '../images/milk/26709-tanto-o-leite-de-vaca-quanto-o-de-cabra-article_block_media-1.jpg';
import milk3 from '../images/milk/download (1).jpg';
import milk4 from '../images/milk/download.jpg';
import milk5 from '../images/milk/images (1).jpg';
import milk6 from '../images/milk/images.jpg';
import milk7 from '../images/milk/leite-.jpg';
import milk8 from '../images/milk/leite-de-caixinha-e-saudavel-e-nao-deve-ser-evitado.jpg';
import milk9 from '../images/milk/leite.jpg.webp';
import milk10 from '../images/milk/size_960_16_9_leite1-e1531400056443.jpg';
//BUTTER
import butter1 from '../images/butter/31180-a-manteiga-e-fonte-de-vitamina-a-protei-article_block_media-2.jpg';
import butter2 from '../images/butter/beurre.1600x900.jpg';
import butter3 from '../images/butter/corante-para-manteiga_11150_70888_1546533483581_cover.jpg';
import butter4 from '../images/butter/depositphotos_5525735-stock-photo-butter-curls.jpg';
import butter5 from '../images/butter/destaque-item-margarina-cremosa-e3809a73e.jpg';
import butter6 from '../images/butter/download (2).jpg';
import butter7 from '../images/butter/images (1).jpg';
import butter8 from '../images/butter/images.jpg';
import butter9 from '../images/butter/istockphoto-690154332-612x612.jpg';
import butter10 from '../images/butter/manteiga-970x472.jpg';
//CREAM CHEESE
import creamCheese1 from '../images/cream cheese/11904eb24e2ab49746a77a2d0271b9cb_requeijao-cremoso-caseiro-receitas-nestle_1200_600.jpg';
import creamCheese2 from '../images/cream cheese/816197f1521a54788d48.png';
import creamCheese3 from '../images/cream cheese/delicias-de-minas-requeijao-em-barra-lara-500g--p-1604696597272.jpg';
import creamCheese4 from '../images/cream cheese/download.jpg';
import creamCheese5 from '../images/cream cheese/images (1).jpg';
import creamCheese6 from '../images/cream cheese/images (2).jpg';
import creamCheese7 from '../images/cream cheese/images.jpg';
import creamCheese8 from '../images/cream cheese/receitas-de-requeijao-caseiro.jpg';
import creamCheese9 from '../images/cream cheese/requeijao-cremoso-caseiro-1024x576.jpg';
import creamCheese10 from '../images/cream cheese/requeijão-cremoso-caseiro-3.jpg';
//YOGURT
import yogurt1 from '../images/yogurt/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__06__20190614-yogu.jpg';
import yogurt2 from '../images/yogurt/berries-nondairy-yogurt.jpg';
import yogurt3 from '../images/yogurt/download (1).jpg';
import yogurt4 from '../images/yogurt/download.jpg';
import yogurt5 from '../images/yogurt/easy-greek-yogurt-dips-familyfreshmeals.com--483x500.png';
import yogurt7 from '../images/yogurt/images (1).jpg';
import yogurt8 from '../images/yogurt/images.jpg';
import yogurt9 from '../images/yogurt/No-brand-to-date-has-really-nailed-Greek-in-plant-based-yogurt-until-now-.-Danone-unveils-Silk-Greek-style.jpg';
import yogurt10 from '../images/yogurt/yogurt.jpg';

const cheese = [cheese1, cheese2, cheese3, cheese4, cheese5, cheese6, cheese7,
cheese8, cheese9, cheese10];
const milk = [milk1, milk2, milk3, milk4, milk5, milk6, milk7, milk8, milk9,
milk10];
const butter = [butter1, butter2, butter3, butter4, butter5, butter6, butter7,
butter8, butter9, butter10];
const creamCheese = [creamCheese1, creamCheese2, creamCheese3, creamCheese4,
creamCheese5, creamCheese6, creamCheese7, creamCheese8, creamCheese9, 
creamCheese10];
const yogurt = [yogurt1, yogurt2, yogurt3, yogurt4, yogurt5, yogurt7,
yogurt8, yogurt9, yogurt10];

export default function getImages(tag:string, quantity:number) {
  if(tag === 'queijo') return getRandomImages(cheese, quantity);
  if(tag === 'leite') return getRandomImages(milk, quantity);
  if(tag === 'manteiga') return getRandomImages(butter, quantity);
  if(tag === 'requeijão') return getRandomImages(creamCheese, quantity);
  return getRandomImages(yogurt, quantity);
}

function getRandomImages(images:string[], quantity:number) {
  let randomImages:string[] = [];
  for(let i = 0; i < quantity; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImages[i] = images[randomIndex];
  }
  return randomImages;
}