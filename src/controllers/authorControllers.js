import {author} from '../models/Author.js';

class AuthorControllers {
    // Listar todos
    static async listAuthors(req, res) {
        try {
            const listAuthors = await author.find({})
            res.status(200).json(listAuthors)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao listar autores` })
        }
    }

    // Buscar por id
    static async listAuthorById(req, res) {
        try {
            const id = req.params.id
            const authorFound = await author.findById(id)
            res.status(200).json(authorFound)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao buscar autor` })
        }
    }

    // Adicionar
    static async addAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body)
            res.status(201).json({
                message: "Cadastrado com sucesso", author: newAuthor
            })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastra autor` })
        }
    }

    //Atualizar
    static async uptadeAuthor(req, res) {
        try {
            const id = req.params.id
            await author.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: 'Autor atualizado!'})
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao alterar autor` })
        }
    }

    //Deletar
    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id
            await author.findByIdAndDelete(id)
            res.status(200).json({message: 'Autor apagado!'})
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao apagar autor` })
        }
    }
}

export default AuthorControllers