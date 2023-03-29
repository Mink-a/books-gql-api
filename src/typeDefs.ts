export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Book {
    id: Int
    title: String
    author: String
  }

  input bookIdInput {
    id: Int
  }

  input newBookDetailsInput {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(data: bookIdInput): Book
  }

  type Mutation {
    addnewBook(data: newBookDetailsInput): Book
    updateBook(id: Int!,data: newBookDetailsInput): Book
  }
`;
