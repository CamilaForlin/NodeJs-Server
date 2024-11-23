import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

async function getTodosPosts() {
    const db = conexao.db("alura-instabytes")
    const colecao = db.collection("posts")
        return colecao.find().toArray()
    
};

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando");
});

app.get("/posts",async (req,res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts);
});

function buscarporid(id){
    return posts.findIndex((post)=>{
        return post.id===Number(id)
    });
};


app.get("/posts/:id",(req,res) => {
    const index = buscarporid(req.params.id)
    res.status(200).json(posts[index]);
});