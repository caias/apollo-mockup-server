import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import teamMemberData from './mockup/teamData.json';

const typeDefs = gql`
  type Members {
    name: String
    email: String
  }

  type Query {
    getTeamMember: [Members]
  }
`;

const resolvers = {
  Query: {
    getTeamMember: () => teamMemberData,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
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

