FROM node:lts as base

RUN apt-get update -y
RUN apt-get install bash -y

RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package*.json ./

RUN npm install
RUN npm install -g ts-node

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN /bin/bash install.sh

ENTRYPOINT [ "/bin/bash" ]

FROM base as dev

EXPOSE 3000

RUN npm install --only=dev

CMD ["./build-then-start.sh"]
