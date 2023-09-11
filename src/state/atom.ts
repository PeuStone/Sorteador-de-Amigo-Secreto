import { atom } from "recoil";

export const listaPaticipantesState = atom<string[]>({
    key: 'listaPaticipantesState',
    default: []
})