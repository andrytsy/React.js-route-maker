import { createStore } from 'redux'

function reducer(state = [], action) {
    if (action.type === 'add') {
        state.push(action.value)
    } else if (action.type === 'remove') {
        let index = state.findIndex(item => item.id === action.value)
        state.splice(index, 1)
    }

    return state
}
   
let store = createStore(reducer)
 
export default store