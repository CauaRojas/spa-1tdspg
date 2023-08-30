import { Link } from 'react-router-dom'
import './Produtos.css'

export default function Produtos() {
    return (
        <>
            <div>
                <h1>Produtos</h1>
                <table className="tabela-produtos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdutos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>
                                    <Link to={`/editar/produto/${produto.id}`}>
                                        {produto.nome}
                                    </Link>
                                </td>
                                <td>{produto.preco}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
const listaProdutos = [
    { id: 1, nome: 'Produto 1', preco: 100 },
    { id: 2, nome: 'Produto 2', preco: 200 },
    { id: 3, nome: 'Produto 3', preco: 300 },
]
