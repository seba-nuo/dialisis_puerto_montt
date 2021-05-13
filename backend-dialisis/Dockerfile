FROM strapi/base

WORKDIR /app 

COPY ./package*.json ./
COPY ./ /app 

RUN npm install

CMD npm run develop