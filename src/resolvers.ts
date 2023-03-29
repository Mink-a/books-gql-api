const books = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const resolvers = {
  Query: {
    books: () => books,
    book: (_, { data }) => {
      const { id } = data;
      return books.find((book) => book.id === id);
    },
  },
  Mutation: {
    addnewBook: (_, { data }) => {
      const { title, author } = data;
      const id = books.length + 1;
      const newBook = { id, title, author };
      books.push(newBook);
      return newBook;
    },
    updateBook: (_, { id, data }) => {
      const { title, author } = data;
      const updateBook = books.find((book) => book.id === id);
      updateBook.title = title;
      updateBook.author = author;
      return updateBook;
    },
  },
};
