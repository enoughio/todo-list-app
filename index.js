import express from "express"
import bodyParser from "body-parser"
import pg from "pg";

const db = pg.clint({
    database = "postgres",
    host = "localhost",
    port = 5432,
    password = ""
})

const app = express()
const PORT = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res)=.{
    res.render("index.js")
})

app

app.add

app.listen(PORT, (req, res) => {
    console.log("on the go")
})