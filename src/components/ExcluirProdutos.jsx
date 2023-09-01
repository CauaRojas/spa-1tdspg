import { useParams } from 'react-router-dom'

export default function ExcluirProdutos() {
    document.title = 'Excluir Produtos'
    const { id } = useParams()

    return (
        <>
            <div>
                <h1>EXCLUIR-PRODUTOS</h1>
                <p>Produto selecionado - {id}</p>
            </div>
        </>
    )
}
