const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]
  }

# Unsure if we need to have a typeDef for bookSchema if it's just a schema and not a model
  type bookSchema {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: Professor
    link: String
    title: String
  }

  type Query {
    users: [User]
    books: [bookSchema]
  }
`;

module.exports = typeDefs;