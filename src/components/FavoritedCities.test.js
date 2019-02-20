import React from 'react'
import { shallow } from 'enzyme'
import FavoritedCities from './FavoritedCities'

describe('<FavoritedCities />', () => {
  it('renders favorited cities', () => {
    const cities = [
      'Helsinki',
      'Tampere',
      'Oulu'
    ]

    const mockHandler = jest.fn()

    const favoritesComponent = shallow(<FavoritedCities favorites={cities} getCurrentTemp={mockHandler}/>)
    const contentDiv = favoritesComponent.find('.favoritesContent')

    expect(contentDiv.text()).toContain('Helsinki')
    expect(contentDiv.text()).toContain('Tampere')
    expect(contentDiv.text()).toContain('Oulu')
  })
})