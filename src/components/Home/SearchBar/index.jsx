import { Search } from '@material-ui/icons'
import React from 'react'
import './styles.css'
const SearchBar = ({value,changeInput}) => {
  return (
    <div className='searchBar-wrap'>
      <Search className='searchBar-icon'/>
      <input type="text" placeholder='beep boop beep' value={value} onChange={changeInput}/>
    </div>
  )
}

export default SearchBar