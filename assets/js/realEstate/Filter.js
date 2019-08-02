import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="city">City</label>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All</option>
          <option value="Charlotte">Charlotte</option>
          <option value="Hampton">Hampton</option>
        </select>
        <label htmlFor="homeType">Home Type</label>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">All</option>
          <option value="Single-family home">Single-family home</option>
          <option value="Townhome">Townhome</option>
          <option value="Condominium">Condominium</option>
        </select>
        <label htmlFor="bedrooms">Bedrooms</label>
        <select name="rooms" className="filters rooms" onChange={this.props.change}>
          <option value="0">0+ Bedrooms</option>
          <option value="1">1+ Bedrooms</option>
          <option value="2">2+ Bedrooms</option>
          <option value="3">3+ Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
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
