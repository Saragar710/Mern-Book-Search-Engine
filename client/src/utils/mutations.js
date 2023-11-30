import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
{ /*// mutation loginUser(username: String!, password: String!,) {
    //     addUser(username: String!, email: String!, bookCount: Int!, savedBooks: []):
    //     saveBook(input: BookInput!): User
    //     removeBook(bookId: ID!): User
// */}
mutation loginUser($username: String!, $email: String, $bookCount: Int!, $ savedBook: []) {
    loginUser(username: $username, email: $email, bookCount: $bookCount, savedBook: $savedBook) {
        _id
        username
        email
        bookCount
        savedBook
    }
}
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $savedBook: []) {
    addUser(username: $username, email: $email, password: $password, savedBook: $savedBook) {
        _id
        username
        email
        password
        savedBook
    }
}
`;
export SAVE_BOOK = gql`
 mutation saveBook($description: String!, $bookId: String!, $)
`

// export const ADD_USER = gql`
// mutation addUser(_id: String!, usename: String!, password: String!, bookCount: Int,saveBook: Int, ) 

// `