# Initializing

## Postgres

1. Setup db instance: `docker-compose up -d`.

## Project

1. `npm install` to install packges.
2. `npm run migrate` to init postgres schema.
3. `npm run dev` to start client and api dev.
4. 
Frontend: `http://localhost:3000/`

Graphiql: `http://localhost:3005/graphiql`

## Testing

- `npm run test:client` run unit tests in CLI.
- `npm run test:client:ui` run unit tests with web interface.
