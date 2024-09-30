const typeDefs = `#graphql
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int!
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
    books: [Book]
  }
`;

module.exports = typeDefs;