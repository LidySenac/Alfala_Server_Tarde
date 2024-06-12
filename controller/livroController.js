
export const getLivro = (req, res) =>{
    try {
        res.send('Lista de Livro')
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    