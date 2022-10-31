FROM alpine:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add --no-cache nodejs
RUN apk add --no-cache yarn
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
