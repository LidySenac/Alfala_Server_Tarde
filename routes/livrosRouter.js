import { getLivro } from '../controller/livroController.js';
import {Router} from 'express'

const router = Router();

// Rotas GET POST PATCH DELETE //

// GET - Retornar livros

router.get('/', getLivro)

// POST - Criar livros

router.post('/', (req, res) =>{
    res.send('Estou na rota Post')
});

// PATCH - Atualizar um livro 

router.patch('/', (req, res) =>{
    res.send('Estou na rota Patch')
});

// DELETE - Apagar um livro

router.delete('/', (req, res) =>{
    res.send('Estou na rota Delete')
});

export default router;