# API 

## INTRODUÇÃO
Criei essa api por causa que estava tendo problemas com a api do urias na hora
de autenticar um usuário, sendo mais especifico no problema, a antiga api estava
retornando tokens inválidos. Essa nova api está usando typescript como linguagem
e mongodb como banco de dados.

## CONFIGURANDO API LOCALMENTE
Para se configurar a api localmente você deve primeiro instalar todas 
dependências da api usando o seguinte comando
```
cd api
npm install
```
Após intalar as dependências da api você, só é necessario que você crie um 
arquivo **.env** no root da api. Leve como base o **example.env** que está
no root da api, para construir o seu **.env**

## COMO USAR
Após configurar a api, para se usa-la é bem simples, você só precisa executar os seguintes comandos
```
cd api
npm run start
```

## ESTRUTURA DA API
Os principais código da api estão dentro do pasta **src** e ele está estruturado da seguinte forma

1 - configs
Possui todas as configurações da api.

2 - controllers
Os primeiros a serem chamados em uma requisição qualquer. Eles são responsaveis por receber requests e enviar responses

3 - middlewares
Aqui é onde ficam métodos que podem ser executados antes de se chamar algum controller para validar algum dado

4 - Models 
Possuem toda a estrutura de cada **collection** do mongo db e métodos que interagem diretamente com o mongo.
Obs: **collections** no mongo é o equivalente de **tables** de algum banco de dados relacional

5 - Repositories
Aqui é onde fica os métodos que vão interagir com os models.

6 - Use cases
Essa pasta é onde fica todos os casos de uso, validações e regras de negocios da aplicação