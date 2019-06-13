import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render() {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name="neighborhood" className="filters neighborhood">
          <option>Southpark</option>
        </select>
        <select name="housetype" className="filters housetype">
          <option>Ranch</option>
        </select>
        <select name="bedrooms" className="filters bedrooms">
          <option>2 Bedrooms</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price" />
          <input type="text" name="max-price" className="max-price" />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min-floor-space" className="min-floor-space" />
          <input type="text" name="max-floor-space" className="max-floor-space" />
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input type="checkbox" name="extras" value="elevator" />
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input type="checkbox" name="extras" value="swimming-pool" />
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input type="checkbox" name="extras" value="finished-basement" />
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input type="checkbox" name="extras" value="gym" />
          </label>
        </div>
      </div>
    </section>)
  }
}
