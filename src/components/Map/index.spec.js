import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Map from './index.js'

describe('Component > Map',()=>{
    const initialState = { points: [] }
    const mockStore = configureStore()
    let wrapper, store

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow(<Map store = {store} />)
    })

    it('+++ capturing snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('+++ render the connected component', () => {
        expect(wrapper.length).toEqual(1)
    })
})