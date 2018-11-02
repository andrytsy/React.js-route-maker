import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Menu from './index.js'

const initialState = {}; 
const mockStore = configureStore();
let MenuContainer;
let store;

beforeEach(() => {
    store = mockStore(initialState)
    MenuContainer = shallow(<Menu store={store}/>)
})

describe('Menu component', () => {
    it('render content', () => {
        expect(MenuContainer.find('input')).toHaveLength(0)
        expect(MenuContainer.find('SortableList')).toHaveLength(0)
    })
})