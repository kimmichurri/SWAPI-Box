import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll'

describe('Scroll', () => {
  let wrapper;
  const mockOpeningFilm = {
    title: 'Movie',
    date: 2019,
    crawl: 'crawl'
  }

  beforeEach(() => {
    wrapper = shallow(<Scroll openingFilm={mockOpeningFilm} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})