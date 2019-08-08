import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'JT',
      listingsData,
      city: 'All',
      homeType: 'All',
      rooms: 0,
      min_price: 0,
      max_price: 2000000,
      min_floor_space: 0,
      max_floor_space: 25000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData,
      populateFormData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForm = this.populateForm.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {

    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      listingsData
    })
  }
  change(event) {
    var name = event.target.name
    var value = (event.target.type == 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price &&
        item.floorspace >= this.state.min_floor_space && item.floorspace <= this.state.max_floor_space &&
        item.rooms >= this.state.rooms
    })

    if (this.state.elevator) {
      newData = newData.filter((item) => {
        return item.extras.includes('elevator') == this.state.elevator
      })
    }

    if (this.state.swimming_pool) {
      newData = newData.filter((item) => {
        return item.extras.includes('swimming pool') == this.state.swimming_pool
      })
    }

    if (this.state.finished_basement) {
      newData = newData.filter((item) => {
        return item.extras.includes('finished basement') == this.state.finished_basement
      })
    }

    if (this.state.gym) {
      newData = newData.filter((item) => {
        return item.extras.includes('gym') == this.state.gym
      })
    }

    if (this.state.city != 'All') {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if (this.state.homeType != 'All') {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    if (this.state.sortby == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (this.state.sortby == 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (this.state.search != '') {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)

        if (n != null) {
          return true
        }

      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForm() {
    // City
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    cities = cities.sort()

    // Hometype
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort()

    // Bedrooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    this.setState({
      populateFormData: {
        cities,
        homeTypes,
        bedrooms
      }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForm} />
        <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
