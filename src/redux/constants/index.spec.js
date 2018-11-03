import { ADD_POINT, REMOVE_POINT, SWAP_POINTS } from './index.js'

describe('Test availability of constants', () => {
    it('+++ ADD_POINT', () => {
        expect(ADD_POINT).toEqual('ADD_POINT')
    })

    it('+++ REMOVE_POINT', () => {
        expect(REMOVE_POINT).toEqual('REMOVE_POINT')
    })

    it('+++ SWAP_POINTS', () => {
        expect(SWAP_POINTS).toEqual('SWAP_POINTS')
    })
})