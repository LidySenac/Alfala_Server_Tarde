import { getLivros, getLivro, postLivro, patchLivro, deletaLivro } from '../controller/livroController.js';
import {Router} from 'express'
import { insereLivro } from '../service/livroService.js';

const router = Router();

// Rotas GET POST PATCH DELETE //

// GET - Retornar livros

router.get('/', getLivros)

router.get('/:id', getLivro)

// POST - Criar livros

router.post('/', postLivro)

// PATCH - Atualizar um livro 

router.patch("/:id", patchLivro)

// DELETE - Apagar um livro

router.delete('/:id', deletaLivro);

export default router;