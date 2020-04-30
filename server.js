const express = require("express")
const recipeRouter = require("./recipe/recipe-router")
const server  = express()

server.use(express.json())
server.use("/api/recipes", recipeRouter)

server.use((req, res) => {
    res.status(404).json({message: "No route found"})
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({error: "something went wrong"})
})

module.exports = server