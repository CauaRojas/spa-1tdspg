export default function Cabecalho(props) {
    return (
        <>
            <header className="cabecalho">
                <h1>
                    {props.children} - {props.nomeDoUsuario}
                </h1>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Mais</a>
                    </li>
                </ul>
            </header>
        </>
    )
}
