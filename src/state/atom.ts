import { atom } from "recoil";

export const listaPaticipantesState = atom<string[]>({
    key: 'listaPaticipantesState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})