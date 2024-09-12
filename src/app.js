import express from 'express'
import connectDB from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectDB();

connection.on("error", (err) => console.error("Connection error", err))
connection.once("open", () => console.log("Connected to Mongo - Atlas"))

const app = express();
routes(app);

const checkBookExists = (req, res, next) => {
    const { id } = req.params;
    const bookIndex = getBook(id);

    if (bookIndex < 0) {
        res.status(404).json({ message: `O livro (${id}) não foi encontrado` });
    } else {
        // Armazena o índice do livro no request para uso posterior
        req.bookIndex = bookIndex;
        next();
    }
}


app.delete("/books/:id", checkBookExists, (req, res) => {
    books.splice(req.bookIndex, 1);
    res.status(200).send(`O livro (${req.params.id}) foi deletado!`);
});


export default app