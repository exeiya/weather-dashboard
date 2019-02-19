import React from 'react'

const City = ({city}) => {
  const cityStyle = {
    'width': 250,
    'padding': 5,
    'margin': 10,
    'textAlign': 'Center',
    'border': '3px solid #006a79'
  }

  if (!city) {
    return (
      <div style={{'width': 250, 'margin': 20}}>
        <i>Etsi kaupunki kirjoittamalla kaupungin nimi lomakkeeseen ja paina "Etsi".
        Vaihtoehtoisesti voit valita jo tallennetun sijainnin klikkaamalla sitä. </i>
      </div>
    )
  }

  return (
    <div style={cityStyle}>
      Sää nyt kaupungissa
      <h2>{city.name}</h2>
      <h2>{city.temperature} &deg;C</h2>
    </div>
  )
}

export default City