import { gql } from 'apollo-server-express';

export const teamSchema = gql`
  type Member {
    name: String
    email: String
  }
  extend type Query {
    members: [Member]
  }
`;