import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
    let wrapper;

    it('should match the snapshot', () => {
        wrapper = shallow(
            <Button />
        )
        expect(wrapper).toMatchSnapshot()
    })
})