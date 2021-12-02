FROM node

RUN apt-get update -y
RUN apt-get install bash -y

RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package*.json ./

RUN npm install

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

ENTRYPOINT [ "/bin/bash" ]

EXPOSE 3001

RUN npm install --only=dev

CMD ["./build-then-start.sh"]
