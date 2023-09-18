# Dockerfile
FROM node:16.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@12.2.7

COPY . /app

EXPOSE 4200

CMD ng serve --host 0.0.0.0
