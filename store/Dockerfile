FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN pm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY  --from=angular app/dist/SportsStore /usr/share/nginx/html
