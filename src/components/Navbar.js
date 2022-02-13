import React from 'react'
import { Input } from 'reactstrap'
import AddMovie from './AddMovie'

const SearchBar = ({handleSearch ,  handleAdd}) => {
  return (
    <div className='row m-2 '>
      <div className='col-md-6'>
        <Input
          type="text"
          placeholder='Search for a movie ...'
          onChange={handleSearch}
        />
      </div>
      <div className='col-md-4'>
      <AddMovie handleAdd={handleAdd}/>
      </div>
    <div className='col-md-4'>
    
    </div>
    </div>
  )
}

export default SearchBar;