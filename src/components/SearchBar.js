import React from "react";

const SearchBar = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 br2 ba b--green bg-lightest-blue tc'  
        type='search'
        placeholder='SEARCH ROBOTS'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBar;