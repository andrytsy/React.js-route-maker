import { addPoint, removePoint, swapPoints } from './index.js'
import { ADD_POINT, REMOVE_POINT, SWAP_POINTS } from '../constants'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

describe('Actions creator test', () => {
    const store = mockStore({})

    it('+++ addPoint', () => {
        const add = addPoint({})

        expect(add).toEqual({ type: ADD_POINT, point: {}})
        store.dispatch(add)
        expect(store.getActions()[0]).toEqual({ type: ADD_POINT, point: {}})
    })

    it('+++ removePoint', () => {
        const remove = removePoint('')

        expect(remove).toEqual({ type: REMOVE_POINT, pointId: ''})
        store.dispatch(remove)
        expect(store.getActions()[1]).toEqual({ type: REMOVE_POINT, pointId: ''})
    })

    it('+++ swapPoints', () => {
        const swap = swapPoints([])

        expect(swap).toEqual({ type: SWAP_POINTS, swapedPoints: []})
        store.dispatch(swap)
        expect(store.getActions()[2]).toEqual({ type: SWAP_POINTS, swapedPoints: []})
    })
})