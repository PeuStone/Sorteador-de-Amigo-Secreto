import './estilos.css'

const Cabecalho = () => {
    return (
        <header className='cabecalho'>
            <div className='imagem-logo' role='img' aria-label='Logo do Sorteador'></div>
            <img className='participante' src='/imagens/participante.png' alt="Imagem do participante" />
        </header>
    )
}

export default Cabecalho