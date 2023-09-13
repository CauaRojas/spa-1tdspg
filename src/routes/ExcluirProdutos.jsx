import { useNavigate, useParams } from 'react-router-dom'
import { getProdutoById, listaProdutos } from '../components/ListaProdutos'

export default function ExcluirProdutos() {
    document.title = 'Excluir Produtos'
    const { id } = useParams()
    const navigate = useNavigate()
    const produto = getProdutoById(id)
    const handleDelete = () => {
        listaProdutos.splice(listaProdutos.indexOf(produto), 1)
        navigate('/produtos')
    }
    const handleCancel = () => {
        navigate('/produtos')
    }
    return (
        <>
            <main>
                <h1>EXCLUIR PRODUTOS</h1>
                <p>{`Deseja realmente excluir o produto: ${produto.nome}`}</p>
                <div>
                    <button onClick={handleDelete}>Sim</button>
                    <button onClick={handleCancel}>Não</button>
                </div>
            </main>
        </>
    )
}
