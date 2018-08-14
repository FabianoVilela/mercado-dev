import React from 'react'
import { Route, Link } from 'react-router-dom'

import Header from './Header';
import Category from './Category'
import Advertisement from './Advertisement'

const Categories = (props) => {
  return(
    <div>
      <Header />
      <h1>Categories</h1>
      <div>
        <ul>
          {props.categories.map(
            (category, key) => {
              return (
                <li key={key}>
                  <Link  to={`/categories/${category.url}`}>{category.name}</Link>
                </li>
              )
            }
          )}
        </ul>
      </div>
      <div>
          <Route path='/categories/:urlCategory' exact component={Category} />
          <Route path='/categories/:urlCategory/:idAdvertisement' render={(props) => <Advertisement {...props} />} />
      </div>
    </div>
  )
}

export default Categories