import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  it ('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
