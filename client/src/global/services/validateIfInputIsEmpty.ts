export default function validateIfInputIsEmpty(inputValue:string, inputName:string) {
  if(!inputValue) throw `Campo de ${inputName} não foi preenchido`;
}