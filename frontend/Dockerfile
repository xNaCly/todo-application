FROM alpine:latest
WORKDIR /usr/src/cloudstart-frontend
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN apk add --no-cache nodejs
RUN apk add --no-cache yarn
RUN yarn global add serve
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["serve", "-s", "build"]
