FROM node:lts as base

RUN apt-get update -y

RUN npm install -g npm

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

FROM base as dev

EXPOSE 3000

RUN npm install --only=dev

CMD ["npm","run","dev"]