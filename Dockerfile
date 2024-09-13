FROM node:18

LABEL maintainer="Lucas Barbosa <barbosa.lucas1996@gmail.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]