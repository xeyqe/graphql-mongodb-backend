const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require("mongoose");


const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect("mongodb+srv://new-user:MeOX1hkzsS4yHrGb@cluster0-1mlyp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
