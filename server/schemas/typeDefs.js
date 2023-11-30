const typeDefs = `
    type me{
        _id: ID
         username: String
         email: String
         password: String
         savedBooks: []

    }
    type
    type Mutation {
        login{
            username: String
            email: String
            password: String
            auth: auth
        }
        addUser{
            username: String
            email: String
            password: String
            auth: auth
        } 
            saveBook{
                 
            }
        
        

    }

`
module.exports = typeDefs;