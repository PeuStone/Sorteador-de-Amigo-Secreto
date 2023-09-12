import { erroState, listaPaticipantesState } from "../atom"
import { useSetRecoilState, useRecoilValue } from 'recoil'

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaPaticipantesState)
    const lista = useRecoilValue(listaPaticipantesState)
    const setErro = useSetRecoilState(erroState)
    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}