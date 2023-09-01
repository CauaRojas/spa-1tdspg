import { Link } from 'react-router-dom'
import { listaProdutos } from '../components/ListaProdutos'
import './Produtos.css'

export default function Produtos() {
    return (
        <>
            <div>
                <h1>PRODUTOS</h1>

                <table className="tabelaProd">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                            <th>EDITAR/EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdutos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>
                                    <Link to={`/editar/produto/${produto.id}`}>
                                        EDITAR
                                    </Link>
                                    /{' '}
                                    <Link to={`/excluir/produto/${produto.id}`}>
                                        EXCLUIR
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
