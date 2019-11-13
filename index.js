const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect("mongodb+srv://new-user:MeOX1hkzsS4yHrGb@cluster0-1mlyp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

server.listen(PORT).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
