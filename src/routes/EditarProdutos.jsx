import { useParams } from 'react-router-dom'
import { getProdutoById } from '../components/ListaProdutos'
import { useState } from 'react'

export default function EditarProdutos() {
    document.title = 'Editar Produtos'

    const { id } = useParams()
    const [produto, setProduto] = useState(getProdutoById(id))
    return (
        <>
            <main>
                <h1>Editar Produtos</h1>
                <form action="#" method="get">
                    <legend>Editar Produto</legend>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            
                            defaultValue={produto.nome}
                        />
                        <label htmlFor="desc">Descrição</label>
                        <input
                            type="text"
                            name="desc"
                            id="desc"
                            defaultValue={produto.desc}
                        />
                        <label htmlFor="preco">Preço</label>
                        <input
                            type="text"
                            name="preco"
                            id="preco"
                            defaultValue={produto.preco}
                        />
                        <label htmlFor="img">Imagem</label>
                        <input
                            type="text"
                            name="img"
                            id="img"
                            defaultValue={produto.img}
                        />
                        
                        <button type="submit">Editar</button>
                    </div>
                </form>
            </main>
        </>
    )
}
