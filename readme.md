\# Node Application

  

Este é o repositório de uma aplicação node. Aqui você encontrará as instruções para configurar o ambiente de desenvolvimento.

## Requisitos

  
- Node.js (v18 ou superior)

- npm (v6 ou superior)

- nodemon (opcional)

  
## Instalação

Para iniciar o projeto localmente, siga os passos abaixo:

  

1. Clone o projeto da maneira que preferir:


2. Instale as dependências:
```bash
npm install
```

Caso queria otimizar o desenvolvimento, instale o **nodemon** para iniciar a aplicação e não precisar rodar o comando de inicialização a cada alteração

```bash
npm install -g nodemon
```

## Inicie a aplicação com nodemon
Com o **nodemon** instalado, rode um dos comandos
```bash
npm run dev
```
ou
```bash
nodemon server.js
```
## Inicie a aplicação com node

```bash
node server.js
```

Em qualquer um dos casos, a url da aplicação estará disponível em **localhost:3000**

## Collection do Postman
Todos os endpoints estaram disponiveis na collection do postman **Bookstore.postman_collection.json** na raiz do projeto, importe e seja feliz (:


## Autor

Lucas Barbosa

Email: barbosa.lucas1996@gmail.com
