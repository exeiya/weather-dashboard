import React from 'react'

const FavoriteCities = ({favorites, getCurrentTemp}) => {
  if(favorites.length === 0) {
    return (
      <div className="favoritesContent">
      <h3>Tallennetut sijainnit</h3>
        <i>Yhtään sijaintia ei ole tallennettu</i>
      </div>
    )
  }

  return (
    <div className="favoritesContent">
      <h3>Tallennetut sijainnit</h3>
      <i>Klikkaamalla kaupungin nimeä näet tämänhetkisen säätilan</i>
      {favorites.map(city => <p key={city} name={city} onClick={getCurrentTemp(city)}>{city}</p>)}
    </div>
  )
}

export default FavoriteCities