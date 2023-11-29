import {gql} from '@apollo/client';
 
export const  User =gql`
   query me{
        user{
            _id
            username
            email
            password
            bookcount
            savedBooks
        }
        query Book {
            book{
                bookId
                authors
                description
                title
                image
                link
            }
            query Auth {
                auth{
                    token
                    user
                }
            }
        }
    }`