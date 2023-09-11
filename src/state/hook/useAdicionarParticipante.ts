import { listaPaticipantesState } from "../atom"
import { useSetRecoilState } from 'recoil'

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaPaticipantesState)
    return (nomeDoParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}