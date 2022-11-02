# Backend
REST-Api to store, load and modifiy todos
## Route
### `/todo`
#### Create a new todo
#### Get all todos
#### Get a todo by id
#### Update a todos title
#### Delete a todo by id
## Quickstart
### Dev
> Requires yarn

```bash
git clone https://github.com/xnacly/cloudstart-fork
yarn
yarn prisma migrate dev --name init
yarn start
```

### Production
```bash
docker build . -t cloudstart/backend
docker run 8080:8080 -d cloudstart/backend
```
