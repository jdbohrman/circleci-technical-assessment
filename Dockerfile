# build stage
FROM node:10.15.0 as build-stage
WORKDIR /public
ENV PATH /public/node_modules/.bin:$PATH
COPY /public/package.json /public
RUN npm install
RUN npm install -g @vue/cli
COPY /public/src/ /public/src/
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /public/dist /public/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]