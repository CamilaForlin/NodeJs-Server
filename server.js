import express from "express";

const posts =[
    {
        id: 1,
        descricao: "um gatinho numa caixa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "um cachorro correndo no parque",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "um peixe nadando no aquário",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "um pássaro voando no céu",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "um coelho comendo uma cenoura",
        imagem: "https://placecats.com/millie/300/150"
    }

]

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("servidor escutando");
});

app.get("/posts",(req,res) => {
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