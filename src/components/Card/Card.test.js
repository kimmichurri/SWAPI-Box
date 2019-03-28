import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockCard;

  beforeEach(() => {
    mockCard= {
      species: 'Human',
      homeworld: 'Earth',
      population: '100',
      language: 'Spanish',
      terrain: 'dirt',
      climate: 'wet',
      residents: 'me',
      model: 'jeep',
      class: 'suv',
      passengers: '4'
    }
    wrapper = shallow(<Card card={mockCard}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
