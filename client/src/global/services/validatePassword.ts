export default function validatePassword(password:string, isLogin=true) {
  if(!password) throw 'Campo de senha não foi preenchido';
  if(isLogin && password.length < 7) throw 'Senha errada';
  if(password.length < 7) throw 'A senha deve ter no mínimo 7 caracteries';
}