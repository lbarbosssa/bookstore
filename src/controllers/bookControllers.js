import book from '../models/Book.js';
import { author } from '../models/Author.js';

class BookController {
    // Listar todos
    static async listBooks(req, res) {
        try {
            const listBooks = await book.find({})
            res.status(200).json(listBooks)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao listar livros` })
        }
    }

    // Buscar por id
    static async listBookById(req, res) {
        try {
            const id = req.params.id
            const bookFound = await book.findById(id)
            res.status(200).json(bookFound)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao buscar livro` })
        }
    }

    // Adicionar
    static async addBook(req, res) {
        const newBook = await req.body
        try {
            const authorFound = await author.findById(newBook.author);
            const completeBook = {
                ...newBook,
                author: {
                    // ...authorFound._doc
                    ...authorFound
                }
            }
            const createdBook = await book.create(completeBook)
            res.status(201).json({
                message: "Cadastrado com sucesso", book: createdBook
            })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastra livro` })
        }
    }

    //Atualizar
    static async uptadeBook(req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: 'Livro atualizado!' })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao alterar livro` })
        }
    }

    //Deletar
    static async deleteBook(req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndDelete(id)
            res.status(200).json({ message: 'Livro apagado!' })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao apagar livro` })
        }
    }

    //Buscar por editora
    static async listBookByPublishingHouse(req, res) {
        const publishingHouse = req.query.publishingHouse
        try {
            const bookByPublishingHouse = await book.find({ publishingHouse })
            res.status(200).json(bookByPublishingHouse)

        } catch (error) {
            res.status(500).json({ message: `${err.message} - falha ao buscar livro` })
        }
    }
}

export default BookController