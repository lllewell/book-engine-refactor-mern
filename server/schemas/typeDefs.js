const typeDefs = `#graphql
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

# Unsure if we need to have a typeDef for Book if it's just a schema and not a model
  type Book {
    _id: ID
    authors: String
    description: String!
    bookId: String!
    image: Professor
    link: String
    title: String!
  }

  type Query {
    me: [User]
  }
`;

module.exports = typeDefs;