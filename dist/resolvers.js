import { prisma } from "./db";
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
        books: () => prisma.book.findMany(),
        book: (_, { data }) => {
            const { id } = data;
            return prisma.book.findFirst({
                where: {
                    id: Number(id),
                },
            });
        },
    },
    Mutation: {
        addnewBook: async (_, { data }) => {
            const { title, author } = data;
            const newBook = await prisma.book.create({
                data: { title, author },
            });
            return newBook;
        },
        updateBook: async (_, { id, data }) => {
            const { title, author } = data;
            const updateBook = await prisma.book.update({
                where: {
                    id,
                },
                data: { title, author },
            });
            return updateBook;
        },
    },
};
