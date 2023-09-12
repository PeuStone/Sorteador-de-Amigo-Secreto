import { useRecoilValue } from "recoil"
import { listaPaticipantesState } from "../atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(listaPaticipantesState)
}