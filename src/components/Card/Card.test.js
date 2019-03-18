import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

// describe('Card', () => {
//     let wrapper;
//     let mockSelectedCards;

//     it('should match the snapshot', () => {
//         mockSelectedCards = [{name: "Yavin IV", terrain: "jungle, rainforests", population: "1000", climate: "temperate, tropical"}]
//         wrapper = shallow(
//             <Card selectedCards={mockSelectedCards}/>
//         )
//         expect(wrapper).toMatchSnapshot()
//     })
// })