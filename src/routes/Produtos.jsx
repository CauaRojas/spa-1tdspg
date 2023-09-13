import { Link } from 'react-router-dom'
import { listaProdutos } from '../components/ListaProdutos'
import {
    AiOutlineEdit as EditarIcon,
    AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'
import tableStyle from './Produtos.module.css'

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

                <table className={tableStyle['tabela-produtos']}>
                    <thead>
                        <tr>
                            <th className={tableStyle['tabela-cell']}>ID</th>
                            <th className={tableStyle['tabela-cell']}>NOME</th>
                            <th className={tableStyle['tabela-cell']}>
                                DESCRIÇÃO
                            </th>
                            <th className={tableStyle['tabela-cell']}>PREÇO</th>
                            <th className={tableStyle['tabela-cell']}>IMG</th>
                            <th className={tableStyle['tabela-cell']}>
                                EDITAR/EXCLUIR
                            </th>
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
                                className={tableStyle['tabela-cell']}
                            >
                                <td className={tableStyle['tabela-cell']}>
                                    {produto.id}
                                </td>
                                <td className={tableStyle['tabela-cell']}>
                                    {produto.nome}
                                </td>
                                <td className={tableStyle['tabela-cell']}>
                                    {produto.desc}
                                </td>
                                <td className={tableStyle['tabela-cell']}>
                                    {produto.preco}
                                </td>
                                <td className={tableStyle['tabela-cell']}>
                                    <img
                                        className={tableStyle['img-produto']}
                                        src={produto.img}
                                        alt={produto.desc}
                                    />
                                </td>
                                <td className={tableStyle['tabela-cell']}>
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
