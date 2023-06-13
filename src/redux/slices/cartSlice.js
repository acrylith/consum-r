const { createSlice, current } = require("@reduxjs/toolkit")

const initialState = {
    vares: [],
    notif: false,
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        reset: () => initialState,
        addVare: (state, action) => {
            const { id } = action.payload
            const index = current(state.vares).findIndex(v => v.id === id)
            if(index === -1) {
                state.vares.push(action.payload)
                state.notif = true
            }
        },
        delVare: (state, action) => {
            const targetId = state.vares.findIndex(v => v.id === action.payload)
            state.vares.splice(targetId, 1)
        },
        lessVare: (state, action) => {
            const target = state.vares.find(v => v.id === action.payload)
            if(target.quantity > 1) {
                target.quantity--
            }
        },
        moreVare: (state, action) => {
            const target = state.vares.find(v => v.id === action.payload)
            if(target.quantity < 10) {
                target.quantity++
            }
        },
        checked: (state) => {
            state.notif = false
        },
        log: (state, action) => {
            const index = state.vares.find(v => v.id === action.payload)
            console.info('Action index:', index.quantity)
        }
    }
})

export const { reset, addVare, delVare, lessVare, moreVare, checked, log } = cart.actions
export default cart.reducer