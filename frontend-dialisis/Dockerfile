FROM node:lts-alpine3.13

WORKDIR /frontend

COPY ./package*.json ./

COPY ./ /frontend

RUN npm install

CMD npm start