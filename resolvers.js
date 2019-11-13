const Cosmonaut = require('./cosmonaut');

const resolvers = {
    Query: {
      cosmonauts: () => Cosmonaut.find()
    },
    Mutation: {
        addCosmonaut: (_, { name, surname, birth, powers }) => {
            const cosmonaut = new Cosmonaut({name, surname, birth, powers});
            cosmonaut.save();
            return cosmonaut;
        },
        removeCosmonaut: (_, {id}) => {
            Cosmonaut.deleteOne({_id: id})
                .then(result => console.log(result))
                .catch(err => console.log(err))
            return;
        },
        updateCosmonaut: (_, { id, name, surname, birth, powers }) => {
            Cosmonaut.updateOne(
                { _id: id },
                { $set:
                   {
                     name: name,
                     surname: surname,
                     birth: birth,
                     powers: powers
                   }
                }
            ).then(result => console.log(result));
            return;
        },
    }
};

module.exports = resolvers;