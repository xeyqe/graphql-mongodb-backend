const { gql } = require('apollo-server');


const typeDefs = gql`
  
  type Cosmonaut {
    id: ID!
    name: String
    surname: String!
    birth: String!
    powers: String!
  }

  type Query {
    cosmonauts: [Cosmonaut]
  }

  type Mutation {
    addCosmonaut(name: String!, surname: String!, birth: String!, powers: String!): Cosmonaut!
    updateCosmonaut(id: String!, name: String!, surname: String!, birth: String!, powers: String!): Cosmonaut
    removeCosmonaut(id: String!): Cosmonaut
  }
`;

module.exports = typeDefs;
