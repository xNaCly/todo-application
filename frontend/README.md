# Frontend

React.js app to act as a gui for the backend

## Quickstart

### Dev

> requires yarn

```bash
git clone https://github.com/xnacly/todo-application
# switch to frontend directory
cd frontend
# install dependencies
yarn
# start react app
yarn start
```

### Production

```bash
cd frontend
docker build . -t cloudstart/frontend
docker run -p 80:3000 -d cloudstart/frontend
```
