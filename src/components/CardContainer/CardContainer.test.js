import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper;
  const mockCards = [{
    name: 'card',
  }]

  beforeEach(() => {
    wrapper = shallow(<CardContainer cards={mockCards}/>)
  })

  it ('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})