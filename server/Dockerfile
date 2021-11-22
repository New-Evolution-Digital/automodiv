FROM node as base

RUN apt-get update -y
RUN apt install -y netcat

RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package*.json .

RUN npm install
RUN npm install -g ts-node

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

ENTRYPOINT [ "sh", "-c" ]

FROM base as dev

EXPOSE 4000

RUN npm install -g nodemon

RUN npm install --only=dev

ENTRYPOINT [ "sh", "-c" ]

CMD [ "./wait.sh server_db:3306 -- npm run dev" ]
