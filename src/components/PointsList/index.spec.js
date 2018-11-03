import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import ConnectedPointsList, { PointsList } from './index.js'

describe('Test component: PointsList --- Snapshot', () => {
    it('+++capturing snapshot', () => {
        const renderedValue = renderer.create(<PointsList points = {[]} />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});

describe('Test component: PointsList',() => {
    const initialState = { points: [], pointName: '' }
    const mockStore = configureStore()
    let store, wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount(
            <Provider store={store}>
                <ConnectedPointsList />
            </Provider>
        )
    })

    it('+++ render the connected component', () => {
        expect(wrapper.length).toEqual(1)
    })

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(PointsList).prop('points')).toEqual(initialState.points)
    })
})