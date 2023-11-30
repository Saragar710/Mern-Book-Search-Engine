const { Book, User } = require('../models');


const resolvers = {
    Query: {
        books: async () => {
            return await Book.find({}).populate('users').populate({
                path: 'users',
                populate: 'book'
            });
        }
    }
    Mutation: {
        addUser: async (parent, { loginUserId}) => {
            return User.create({loginUserId, })
        },
        saveBook: async (parent, {saveBookId}) => {
            return saveBook({ userId, saveBookId})
        },
        removeBook: async ()
    }
};

module.exports = resolvers;