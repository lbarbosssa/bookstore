import express from "express"
import booksRoutes from "./booksRoutes.js"
import authorsRoutes from "./authorsRoutes.js"

const routes = app => {
    app.route("/").get((req, res) => res.status(200).send("Curso node JS"));
    app.use(express.json(), booksRoutes)
    app.use(express.json(), authorsRoutes)
}

export default routes