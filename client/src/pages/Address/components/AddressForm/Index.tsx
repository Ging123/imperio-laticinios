import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom';
import MainButton from '../../../../components/buttons/MainButton/Index';
import DefaultInput from '../../../../components/inputs/DefaultInput/Index';
import config from '../../../../config';

const AddressForm = () => {
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [num, setNum] = useState<number>();
  const history = useHistory();
  const goToLoginPage = () => history.push('/');
  const goToProductPage = () => history.push('/products');

  async function send(e:FormEvent) {
    e.preventDefault();
    const address = `bairro: ${district}, rua: ${street}, número:${num}`;
    const url = `${config.API_HOST}address`;
    await axios.post(url, {address:address}, {withCredentials:true})
    .then(() => goToProductPage())
    .catch((err) => {
      const error = err.response;
      if(error.status === 401) return goToLoginPage();
    });
  }

  return (
    <form onSubmit={send}>
      <DefaultInput
        leftIconeClass='fas fa-city'
        onChange={(e) => setDistrict(e.target.value)}
        placeholder='Bairro'
        required={true}
        value={district}
      />
      <DefaultInput
        leftIconeClass='fas fa-road'
        margin='10px 0px'
        onChange={(e) => setStreet(e.target.value)}
        placeholder='Rua'
        required={true}
        value={street}
      />
      <DefaultInput
        leftIconeClass='fas fa-house-user'
        margin='0px 0px 15px 0px'
        type='number'
        onChange={(e) => setNum(parseInt(e.target.value))}
        placeholder='Número'
        required={true}
        value={num}
      />
      <MainButton 
        text='Registrar Endereço'
        type='submit'
      />
    </form>
  )
}

export default AddressForm;