export default function getUser() {
  const userstr = localStorage.getItem('user');
  const user = JSON.parse(userstr!);
  return user;
}