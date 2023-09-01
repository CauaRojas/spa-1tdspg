import { useParams } from 'react-router-dom'
import { getProdutoById } from '../components/ListaProdutos'

export default function EditarProdutos() {
    document.title = 'Editar Produtos'

    const { id } = useParams()
    const produto = getProdutoById(id)

    return (
        <>
            <div>
                <h1>EDITAR-PRODUTOS</h1>
                <p>Produto selecionado - {produto.nome}</p>
                <p>Preço - {produto.preco}</p>
            </div>
        </>
    )
}
