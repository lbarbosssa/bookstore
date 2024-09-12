import express from "express"
import AuthorControllers from "../controllers/authorControllers.js"

const routes = express.Router();

routes.get("/authors", AuthorControllers.listAuthors);
routes.get("/authors/:id", AuthorControllers.listAuthorById);
routes.post("/authors", AuthorControllers.addAuthor);
routes.put("/authors/:id", AuthorControllers.uptadeAuthor);
routes.delete("/authors/:id", AuthorControllers.deleteAuthor);

export default routes