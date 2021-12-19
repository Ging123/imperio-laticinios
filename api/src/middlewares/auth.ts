export default function authUser(req:any, res:any, next:()=>void) {
  if(req.session.user) return next();
  res.status(401).json("Usuário não está logado");
}