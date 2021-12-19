import AddressRepository from '../../repositories/addressRepository';

export default class Base {

  protected readonly address = new AddressRepository();

}