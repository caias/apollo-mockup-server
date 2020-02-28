import { gql, makeExecutableSchema } from 'apollo-server-express';
import { eventSchema } from './event/type';
import { eventResolver } from './event/resolver';
import { teamSchema } from './team/type';
import { teamResolver } from './team/resolver';

const RootSchema = gql`
  type Query {
    root: String
  }
`;

const RootResolver = {
  Query: {
    root: () => 'Root resolver is running!',
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [RootSchema, eventSchema, teamSchema],
  resolvers: [RootResolver, eventResolver, teamResolver],
});