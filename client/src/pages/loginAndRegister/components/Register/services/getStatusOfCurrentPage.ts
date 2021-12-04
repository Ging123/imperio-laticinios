export default function getStatusOfCurrentPage(pathName:string) {
  if(pathName === '/register/email' || pathName === '/') {
    return objectWithInfo(0, 'Cadastre-se');
  }
  if(pathName === '/register/address') return objectWithInfo(1, 'Digite Seu Endereço');
  return objectWithInfo();
}

function objectWithInfo(level:0|1|2=0, title='') {
  return {
    level:level,
    title:title
  }
}