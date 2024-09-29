const { User, bookSchema } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('savedBooks');
        },
        savedBooks: async () => {
            return await bookSchema.find({}).populate()
        }

    }
};

module.exports = resolvers;