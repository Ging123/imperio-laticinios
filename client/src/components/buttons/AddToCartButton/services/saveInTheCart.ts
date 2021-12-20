import config from "../../../../config";
import axios from "axios";

export default async function saveInTheCard(name:string, history:any, setClasses:any) {
  const url = `${config.API_HOST}cart/add`;
  const data = {name:name}
  setClasses('add-to-card-button-loading');
  await axios.post(url, data, {withCredentials:true})
  .catch((err) => {
    const error = err.response;
    if(error.status === 401) return history.push('/');
    alert(error.data);
  })
  .finally(() => {
    setClasses('add-to-card-button darker-on-hover-or-click');
  })
}