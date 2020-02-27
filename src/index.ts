import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import teamData from './mockup/teamData.json';

const typeDefs = gql`
  type Member {
    name: String
    email: String
  }

  type Query {
    members: [Member]
  }
`;

const resolver = {
  Query: {
    members: () => teamData,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers: resolver,
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

