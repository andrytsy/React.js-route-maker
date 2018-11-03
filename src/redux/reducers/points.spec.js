import { ADD_POINT, REMOVE_POINT, SWAP_POINTS } from '../constants'
import pointsReducer from './points.js'

describe('Test points reducer', () => {
    it('+++ ADD_POINT', () => {
        let state = []
        let result = pointsReducer(state, {type: ADD_POINT, point: {}})
        expect(result).toEqual([{}])
    })

    it('+++ REMOVE_POINT', () => {
        let state = [{id: '1'}]
        let result = pointsReducer(state, {type: REMOVE_POINT, pointId: '1'})
        expect(result).toEqual([])
    })

    it('+++ SWAP_POINTS', () => {
        let state = [1,2,3]
        let result = pointsReducer(state, {type: SWAP_POINTS, swapedPoints: [3,2,1]})
        expect(result).toEqual([3,2,1])
    })
})