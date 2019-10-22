FROM node:8.16.1

RUN mkdir /app
WORKDIR /app
COPY package.json /app/

RUN npm install

CMD [ "npm", "start" ]
