FROM node as base

RUN apt-get update -y

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

FROM base as dev

EXPOSE 4000

RUN npm install -g nodemon

RUN npm install --only=dev

CMD ["npm","run","dev"]