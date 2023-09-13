import { useNavigate, useParams } from 'react-router-dom'
import { getProdutoById, listaProdutos } from '../components/ListaProdutos'
import { useState } from 'react'


export default function EditarProdutos() {
    document.title = 'Editar Produtos'
    const navigate = useNavigate()
    const { id } = useParams()
    const [produto, setProduto] = useState(getProdutoById(id))
    const handleChange = event => {
        const { name, value } = event.target
        const novoProduto = { ...produto }
        novoProduto[name] = value
        setProduto(novoProduto)
    }
    const handleSubmit = event => {
        event.preventDefault()
        listaProdutos[listaProdutos.indexOf(getProdutoById(id))] = produto
        navigate('/produtos')
    }
    return (
        <>
            <main>
                <h1>Editar Produtos</h1>
                <form onSubmit={handleSubmit}>
                    <legend>Editar Produto</legend>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            onChange={handleChange}
                            value={produto.nome}
                            defaultValue={produto.nome}
                        />
                        <label htmlFor="desc">Descrição</label>
                        <input
                            type="text"
                            name="desc"
                            id="desc"
                            value={produto.desc}
                            onChange={handleChange}
                            defaultValue={produto.desc}
                        />
                        <label htmlFor="preco">Preço</label>
                        <input
                            type="text"
                            name="preco"
                            id="preco"
                            onChange={handleChange}
                            value={produto.preco}
                            defaultValue={produto.preco}
                        />

                        <button type="submit">Editar</button>
                    </div>
                </form>
                <div>
                    <p>Nome: {produto.nome}</p>
                    <p>Preço: {produto.preco}</p>
                    <p>Desc: {produto.desc}</p>
                </div>
            </main>
        </>
    )
}
