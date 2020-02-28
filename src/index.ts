import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema/index';

const server = new ApolloServer({
  schema,
  playground: true,
});

const app = express();

server.applyMiddleware({ 
  app,
  path: '/graphql',
});

app.listen( { port:7077 }, () => {
  console.log('server 7077 port start');
})

