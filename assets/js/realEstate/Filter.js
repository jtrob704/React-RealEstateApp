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
        <select name="neighborhood" className="filters neighborhood" onChange={this.props.change}>
          <option value="Southpark">Southpark</option>
          <option value="Ballantyne">Ballantyne</option>
        </select>
        <select name="housetype" className="filters housetype" onChange={this.props.change}>
          <option>Ranch</option>
        </select>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option>2 Bedrooms</option>
        </select>
        <div className="filters price">
          <span className="title">Price ($)</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space (sq. ft.)</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input type="checkbox" name="elevator" value="elevator" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input type="checkbox" name="swimming_pool" value="swimming_pool" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input type="checkbox" name="finished_basement" value="finished_basement" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input type="checkbox" name="gym" value="gym" onChange={this.props.change} />
          </label>
        </div>
      </div>
    </section>)
  }
}
