import AddressForm from './components/AddressForm/Index';
import Title from '../../components/text/Title/Index';
import './styles.scss';

const Index = () => {
  return (
    <div id="address-page">
      <Title 
        margin='20px 0px' 
        text="Registre seu endereço"
      />
      <div id='sub-text-of-address'>
      Antes de fazer um pedido precisamos saber onde devemos te entregar os 
      laticínios
      </div>
      <AddressForm/>
    </div>
  )
}

export default Index;