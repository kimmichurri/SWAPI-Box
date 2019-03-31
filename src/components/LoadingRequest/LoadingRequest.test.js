import React from 'react';
import { shallow } from 'enzyme';
import LoadingRequest from './LoadingRequest'

describe('LoadingRequest', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingRequest />)
  })

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})