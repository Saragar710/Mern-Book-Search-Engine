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
};

module.exports = resolvers;