import conectarAoBanco from "../config/dbconfig.js";
// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    // Obtém o banco de dados 'alura-instabytes'
    const db = conexao.db("alura-instabytes");
    // Obtém a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}