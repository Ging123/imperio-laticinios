interface config {
  API_HOST:string,
  CLIENT_HOST:string;
  MODE:'DEV'|'PRO'
}

const config:config = {
  API_HOST:'http://localhost:5000/',
  CLIENT_HOST:'http://localhost:3000/',
  MODE:'DEV'
}

export default config;