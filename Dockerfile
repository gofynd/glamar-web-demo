# build stage
FROM node:15-alpine as build-stage
RUN apk update && apk add python3 make alpine-sdk gcc g++ git build-base openssh openssl bash
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --legacy-peer-deps
# COPY yarn.lock ./
# RUN yarn

COPY . .
ENV NODE_ENV=production
RUN npm run build:prod

# serve stage
FROM nginx:alpine
RUN mkdir -p /srv/app/build
WORKDIR /srv/app
COPY config.js .
COPY entrypoint.sh .
COPY nginx.conf .
COPY ci-test.sh .
COPY --from=build-stage /app/tools .
COPY --from=build-stage /app/build ./build
ENTRYPOINT [ "sh", "entrypoint.sh" ]
