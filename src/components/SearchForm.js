import React from 'react'

const SearchForm = ({search, handleChange, handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Hae kaupunki" value={search} onChange={handleChange}/>
        <input type="submit" value="Hae" />
      </form>
    </div>
  )
}

export default SearchForm