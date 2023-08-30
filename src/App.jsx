import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
export default function App() {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}
