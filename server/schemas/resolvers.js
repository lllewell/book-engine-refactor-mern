const { User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return await User.find({}).populate('savedBooks');
        },

    }
};

module.exports = resolvers;