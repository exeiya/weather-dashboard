import React from 'react'

const City = ({city, favorite}) => {
  const cityStyle = {
    'width': 250,
    'padding': 5,
    'margin': 10,
    'textAlign': 'Center',
    'border': '3px solid #007979'
  }

  if (!city) {
    return (
      <div className="helperContent" style={{'width': 250, 'margin': 20}}>
        <i>Hae kaupungin sää kirjoittamalla kaupungin nimi lomakkeeseen ja paina "Hae".
        Vaihtoehtoisesti voit valita jo tallennetun sijainnin klikkaamalla sitä. </i>
      </div>
    )
  }

  return (
    <div className="cityContent" style={cityStyle}>
      Sää nyt kaupungissa
      <h2>{city.name}</h2>
      <h2> {city.temperature} &deg;C</h2>
      <button className="favoriteCity" onClick={favorite(city.name)}>Lisää suosikkeihin</button>
    </div>
  )
}

export default City