FROM alpine:latest
WORKDIR /usr/src/cloudstart-backend
COPY package.json ./
COPY yarn.lock ./
COPY prisma ./
COPY .env ./
RUN apk add --no-cache nodejs
RUN apk add --no-cache yarn
RUN yarn install
RUN yarn prisma migrate dev --name init
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
