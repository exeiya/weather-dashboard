import React from 'react'

const SearchForm = ({search, handleChange, handleSubmit}) => {
  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Hae kaupunki" value={search} onChange={handleChange}/>
        <button type="submit">Hae</button>
      </form>
    </div>
  )
}

export default SearchForm