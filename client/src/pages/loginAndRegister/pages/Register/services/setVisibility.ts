const registerEmailPath = '/start/register/email';

export default function setVisibility(currentPath:string) {
  if(currentPath === registerEmailPath) return showThisContainerWith1070px()
  hideThisContainerWith1070px();
}

function showThisContainerWith1070px() {
  const registerContainer = document.getElementById('register-container')!;
  registerContainer.className = 'is-open';
}

function hideThisContainerWith1070px() {
  const registerContainer = document.getElementById('register-container')!;
  registerContainer.className = 'is-not-open';
}