import ListItem from './ListItem'
import './styles.css'
import React from 'react'

const List = ({list}) => {
  return (
    <div className='list-wrap'>
      {
        list.map(item=> <ListItem key={item.id} item={item}/>)
      }
    </div>
  )
}

export default List