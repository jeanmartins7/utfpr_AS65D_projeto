import { createSlice } from '@reduxjs/toolkit'

const initalValues = {
    id: null,
    txtName: null,
    txtDate: null,
    image: null
}

export const pesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState: initalValues,
    reducers: {
        reducerSetPesquisa: (state, action) => {
            state.id = action.payload.id
            state.txtName = action.payload.txtName
            state.txtDate = action.payload.txtDate
            state.image = action.payload.image
        }
    }
})

export const { reducerSetPesquisa } = pesquisaSlice.actions

export default pesquisaSlice.reducer