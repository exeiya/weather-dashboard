import React from 'react'

const FavoriteCities = ({favorites, getCurrentTemp}) => {
  return (
    <div>
      <h3>Tallennetut sijainnit</h3>
      <i>Klikkaamalla kaupungin nimeä näet tämänhetkisen säätilan</i>
      {favorites.map(city => <p key={city} onClick={getCurrentTemp(city)}>{city}</p>)}
    </div>
  )
}

export default FavoriteCities