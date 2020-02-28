import { gql } from 'apollo-server-express';

export const eventSchema = gql`
  type Duration {
    date: String!
    time: String!
  }

  type Value {
    type: String
    link: String
    imgUrl: String
    imgAlt: String
    imgWidth: Int
    imgHeight: Int
  }

  type Event {
    duration: Duration
    value: Value
    pushAgree: Boolean!
  }

  extend type Query {
    events: [Event]
  }
`;