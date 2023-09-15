import { Link } from 'react-router-dom'
import { listaProdutos } from '../components/ListaProdutos'
import {
    AiOutlineEdit as EditarIcon,
    AiOutlineDelete as ExcluirIcon,
} from 'react-icons/ai'
import tableStyle from './Produtos.module.css'
import { useEffect, useState } from 'react'

export default function Produtos() {
    document.title = 'Produtos'
    const [counter, setCounter] = useState(0)
    const [novaLista, setNovaLista] = useState([{}])
    const [counter2, setCounter2] = useState(0)
    useEffect(() => {
        setNovaLista(listaProdutos)
    }, [])
    useEffect(() => {
        console.log('Counter 2: ', counter2)
    }, [counter2])
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
                <div>
                    <button onClick={() => setCounter(counter + 1)}>
                        Counter - {counter}
                    </button>
                    <button onClick={() => setCounter2(counter2 + 1)}>
                        Counter2 - {counter2}
                    </button>
                </div>

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
                    <tbody className={tableStyle['tabela-body']}>
                        {novaLista.map((produto, index) => (
                            <tr
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
