import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Conteudo from './components/Conteudo'
export default function App() {
    let meuNome = 'Cauã'
    return (
        <>
            <div className="container">
                <Cabecalho nomeDoUsuario={meuNome}>Hello World!</Cabecalho>
                <Conteudo />
                <Rodape />
            </div>
        </>
    )
}
