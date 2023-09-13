import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante"
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro"
import './Formulario.css'

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <div className="conjuntoBotaoInput">
            <form onSubmit={adicionarParticipante}>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adicionar</button>
                {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
            </form>
        </div>
    )
}

export default Formulario