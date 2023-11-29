import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser(username: String!, password: String!,) {
    addUser(username: String!, email: String!, password: String!):
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
}


`