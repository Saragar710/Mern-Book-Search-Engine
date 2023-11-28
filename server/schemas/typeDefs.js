const typeDefs = `
    type Query {
        me: user
    }
    type Mutation {
        login: auth
        addUser: String
        

    }

`
module.exports = typeDefs;