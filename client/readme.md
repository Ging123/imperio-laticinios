# FRONT END

## INTRODUÇÃO

Aqui é onde contém todo o front end da nossa aplicação :3. Ele foi escrito em react js
com typescript.

## COMO USAR

Para se usar esse front end é necessario que você execute os seguintes comandos
```
npm install
npm run start
```
- npm install
Com esse comando você irá instalar todas as dependências da aplicação

- npm run start
Com esse comando você irá executar o react podendo assim ver o front end

## ENTENDENDO A ESTRUTURA DO CÓDIGO

### PUBLIC

Nessa pasta está o html que é utilizado pelo react para gerar nossas páginas. Por o 
react js ser um framework **one single page** ele só faz uso de um único arquivo html
que vai sendo alterado conforme necessario.

### SRC 
Essa pasta contém todo o front end feito em react. Dentro dela existe ainda mais 3 
pastas **components**, **global** e **pages**.

- components
Essa pasta possui components como butões, inputs, formulários e etc, que eu criei com
o objetivo de **não escrever o mesmo código** várias vezes.

- global
Essa pasta **contém dados estáticos**, tais como **imagens**, **estilos css** e algumas
**lógicas especificas** como lógica para validar algo e etc

- pages
Essa pasta contem todas as **páginas** do projeto. As páginas nada mais são que um 
**conjunto dos componentes** que estão na pasta components

## ESTRUTURA DE UM COMPONENTE

Todos os componentes do react criados nesse repositorio seguem o seguinte padrão:

- Pasta do componente
  - Index.ts 
  - styles.scss (se necessário)
  - services(se necessário)

obs: O nome da pasta **Deve ser o nome do componente**

1. Index.ts
Aqui é onde está todo o código react

2. styles.scss
Aqui é onde fica o estilo do componente caso tenha algum

3. services 
Essa pasta contém qualquer lógica que o componente possua