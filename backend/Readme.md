# Backend

REST-Api to store, load and modifiy todos

## Route documentation

### Create a new todo

```bash
curl --request POST \
  --url http://localhost:8080/todo/ \
  --header 'Content-Type: application/json' \
  --data '{ "title": "this is a title" }'
```

### Get all todos

```bash
curl --request GET --url http://localhost:8080/todo
```

### Get a todo by id

```bash
curl --request GET --url http://localhost:8080/todo/1
```

### Update a todos title

```bash
curl --request PATCH \
  --url http://localhost:8080/todo/2 \
  --header 'Content-Type: application/json' \
  --data '{ "title": "test" }'
```

### Delete a todo by id

```bash
curl --request DELETE --url http://localhost:8080/todo/1
```

## Quickstart

### Dev

> Requires yarn

```bash
git clone https://github.com/xnacly/cloudstart-fork
# switch to backend directory
cd backend
# install dependencies
yarn
# setup database
yarn prisma migrate dev --name init
# start server
yarn start
```

### Production

```bash
docker build . -t cloudstart/backend
docker run -p 8080:8080 -d cloudstart/backend
```
