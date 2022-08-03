const { Router } = require("express");
const {graphqlHTTP}  = require("express-graphql")
const {buildSchema}  = require("graphql")
const express = require("express")
const app = require("express")()
const path = require("path")


app.use(express.static('dist'));



app.use("/api", Router().get("/api", (req, res) => {
   res.send("some files")
}))

app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.listen(process.env.PORT || 5000, () => console.log("APP runs"))