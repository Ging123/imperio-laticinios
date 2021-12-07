const loginPath = '/start';

export default function setVisibility(currentPath:string) {
  const loginContainer = document.getElementById('login-container')!;
  if(currentPath !== loginPath) return loginContainer.className = 'is-not-open';
  loginContainer.className = 'is-open';
}