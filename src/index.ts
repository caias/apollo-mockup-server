const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddlware({ app });

app.listen( { port:7077 }, () => {
  console.log('server start');
})

