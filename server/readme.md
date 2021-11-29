# API

## INTRODUÇÃO

Tô escrevendo esse readme para guiar quem for ver essa api que o urias fez. Aqui vai 
ter o passo a passo de como a usar.

## COMO USAR

Para a utilizar você irá precisar primeiro colocar os dados do seu banco de dados 
mysql no .env e no config/config.json. Após isso, você deve executar os seguintes
comandos:
```
npm install
npx sequelize-cli db:migrate
npm run start
```
- npm install
Esse comando irá instalar todas as dependências do projeto

- npx sequelize-cli db:migrate
Esse comando irá criar todas as tabelas que a api vai usar, já configuradas no seu mysql

- npm run start
Inicia a api utilizando o nodemon. O nodemon atualiza o servidor local automaticamente
sempre que alguma mudança no código for salva
