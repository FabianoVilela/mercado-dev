import React from 'react' 
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const LinkCategory = ({category}) => {
  return (
    <List.Item>
      <Link to={`/categories/${category.url}`}>
        {category.name}
      </Link>
    </List.Item>
  )
}

export default LinkCategory
