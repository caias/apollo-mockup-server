import { gql } from 'apollo-server-express';

export const teamSchema = gql`
  type Member {
    name: String
    email: String
  }
  extend type Query {
    members: [Member]
  }
  extend type Mutation {
    addMember(name: String!, email: String!): Member!
    deleteMember(name: String!): Boolean!
    editMemberName(name: String!, editName: String!): String!
  }
`;