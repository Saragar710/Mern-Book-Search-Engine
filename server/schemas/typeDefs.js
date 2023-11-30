const typeDefs = `
    type me{
         username: String
         email: String
         password: String
         savedBooks: []

    }
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