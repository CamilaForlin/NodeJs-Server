import { getTodosPosts } from "../model/postsModel.js";

export async function listarTodosPosts(req, res){
        // Obtém todos os posts usando a função getTodosPosts
        const posts = await getTodosPosts();
        // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
        res.status(200).json(posts);
    ;
    
}