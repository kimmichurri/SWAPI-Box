import React from 'react';
import { shallow } from 'enzyme';
import Favorite from './Favorite';

describe('Favorite', () => {
  let wrapper;
  const mockProps = {
    favorites: 4
  }

  beforeEach(() => {
    wrapper = shallow(<Favorite props={mockProps}/>)
  })

  it ('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})