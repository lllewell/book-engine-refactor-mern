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
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input saveBook  {
    bookAuthors:  [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Query {
    me: [User]
    books: [Book]
  }

  type Mutations {
    login: (email: String!, password: String!):Auth
    addUser: (username: String!, email: String!, password: String!):Auth
    saveBook: (input: saveBook): User
    removeBook: (bookId: String!): User
  }
`;

module.exports = typeDefs;