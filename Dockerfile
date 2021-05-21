FROM node

WORKDIR /usr/src/shared-canvas 
COPY . /usr/src/shared-canvas

RUN npm install

EXPOSE 3000

CMD ["nodejs","index.js"]

