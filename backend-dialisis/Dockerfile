FROM strapi/base

WORKDIR /app 

COPY ./package*.json ./
COPY ./ /app 

RUN npm install

EXPOSE 1337

CMD npm run develop