import express from "express";
import multer from "multer";
import cors from "cors"

import { listarTodosPosts,postarNovoPost,uploadImagem,atualizarNovoPost} from "../controllers/postsController.js";

const corsOptions={
    origin:"http://localhost:8000",
    optionsSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app)=>{
    // Habilita o middleware para analisar JSON no corpo das requisições
    app.use(express.json());
    app.use(cors(corsOptions));
// Define uma rota GET para '/posts'
    app.get("/posts",listarTodosPosts); 
    app.post("/posts",postarNovoPost);
    app.post("/upload",upload.single("imagem"),uploadImagem);
    app.put("/upload/:id",atualizarNovoPost);

}

export default routes;

