import React from 'react'
import { shallow } from 'enzyme'
import Main from './index.js'

describe('Main component', () => {
    const MainContainer = shallow(<Main />)

    it('render content', () => {
        expect(MainContainer.find('Menu')).toHaveLength(0)
        expect(MainContainer.find('Map')).toHaveLength(0)
    })

})