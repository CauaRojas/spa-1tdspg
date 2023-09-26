import { useNavigate } from 'react-router-dom'
import { listaProdutos } from '../components/ListaProdutos'
import styles from './AddProduto.module.css'


export default function AddProduto() {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const id = listaProdutos.length + 1
        console.log(event.target.nome)
        listaProdutos.push({
            id,
            nome: event.target.nome.value,
            desc: event.target.desc.value,
            preco: event.target.preco.value,
            img: `https://picsum.photos/seed/produto${id}/200/300`,
        })
        navigate('/produtos')
    }
    return (
        <div>
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleSubmit} className={styles['form-add']}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input required type="text" name="nome" id="nome" />
                    <label htmlFor="desc">Descrição</label>
                    <input required type="text" name="desc" id="desc" />
                    <label htmlFor="preco">Preço</label>
                    <input
                        required
                        type="text"
                        pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
                        name="preco"
                        id="preco"
                    />

                    <button type="submit">Adicionar</button>
                </div>
            </form>
        </div>
    )
}
