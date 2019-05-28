# build stage
FROM node:10.15.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @vue/cli
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
