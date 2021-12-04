const registerEmailPath = '/register/email';
const registerAddressPath = '/register/address';

export default function setVisibility(currentPath:string) {
  const registerContainer = document.getElementById('register-container')!;
  if(currentPath === registerEmailPath) return registerContainer.className = 'is-open';
  if(currentPath === registerAddressPath) return registerContainer.className = 'is-open';
  registerContainer.className = 'is-not-open';
}