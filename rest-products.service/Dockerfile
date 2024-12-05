FROM node:20-alpine

RUN apk add --no-cache bash

WORKDIR /rest-products

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npx prisma generate

EXPOSE 3000

COPY wait-for-db.sh /rest-products/wait-for-db.sh
RUN chmod +x /rest-products/wait-for-db.sh

CMD ["/bin/bash", "/rest-products/wait-for-db.sh"]
