FROM node:10

ENV PORT="8175"

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8175
CMD [ "yarn", "run", "prod" ]
