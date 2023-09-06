import { Link } from 'react-router-dom'
import { listaProdutos } from '../components/ListaProdutos'
import {
    AiOutlineEdit as EditarIcon,
    AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'
import './Produtos.css'

export default function Produtos() {
    return (
        <>
            <div>
                <h1
                    style={{
                        textAlign: 'center',
                    }}
                >
                    PRODUTOS
                </h1>

                <table
                    className="tabela-produtos"
                    style={{
                        margin: '0 auto',
                    }}
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>IMG</th>
                            <th>EDITAR/EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdutos.map((produto, index) => (
                            <tr
                                style={{
                                    backgroundColor:
                                        produto.id % 2 == 0 ? '#ccc' : '#fff',
                                }}
                                key={index}
                            >
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.desc}</td>
                                <td>{produto.preco}</td>
                                <td>
                                    <img
                                        style={{
                                            width: '100px',
                                            height: '66px',
                                            objectFit: 'cover',
                                        }}
                                        src={produto.img}
                                        alt={produto.desc}
                                    />
                                </td>
                                <td>
                                    <Link to={`/editar/produto/${produto.id}`}>
                                        <EditarIcon />
                                    </Link>
                                    <span> / </span>
                                    <Link to={`/excluir/produto/${produto.id}`}>
                                        <ExcluirIcon />
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
