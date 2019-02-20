import React from 'react'
import { shallow } from 'enzyme'
import City from './City'

describe('<City />', () => {
  it('renders city name, temperature and a favorite button', () => {
    const city = {
      name: 'Helsinki',
      temperature: 10
    }

    const mockHandler = jest.fn()

    const cityComponent = shallow(<City city={city} favorite={mockHandler}/>)
    const contentDiv = cityComponent.find('.cityContent')

    expect(contentDiv.text()).toContain(city.name)
    expect(contentDiv.text()).toContain(city.temperature)
    expect(contentDiv.text()).toContain('Lisää suosikkeihin')
  })

  it('calls onClick handler once when the button is clicked', () => {
    const city = {
      name: 'Tampere',
      temperature: 12
    }

    const mockHandler = jest.fn()

    const cityComponent = shallow(<City city={city} favorite={mockHandler}/>)
    const button = cityComponent.find('button')
    button.simulate('click')

    expect(mockHandler.mock.calls.length).toBe(1)
  })

  it('renders only a help message when no city is selected', () => {
    const cityComponent = shallow(<City city={null} />)
    const contentDiv = cityComponent.find('.helperContent')

    expect(contentDiv.text())
      .toContain('Hae kaupungin sää kirjoittamalla kaupungin nimi lomakkeeseen ja paina "Hae"')
    expect(contentDiv.text()).not.toContain('Lisää suosikkeihin')
  })
})