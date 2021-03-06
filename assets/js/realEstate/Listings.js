import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faSquare as faSquareRegular } from '@fortawesome/free-regular-svg-icons';
import listingsData from './data/listingsData';


export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
  }
  loopListings() {
    var { listingsData } = this.props

    if (listingsData == undefined || listingsData.length == 0) {
      return "Sorry, no matches found. Try expanding your search parameters."
    }
    // Display box view
    return listingsData.map((listing, index) => {
      if (this.props.globalState.view == 'box') {
        return (<div className="col-md-3" key={index}>
          <div className="listing">
            <div className="listing-img" style={{ background: `url(${listing.image}) no-repeat center center` }}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Martha Smith</span>
                    <span className="post-date">06/30/2019</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa square"><FontAwesomeIcon icon={faSquareRegular} /></i>
                      <span>{listing.floorspace} ft&sup2;</span>
                    </div>
                    <div className="rooms">
                      <i className="fa bed"><FontAwesomeIcon icon={faBed} /></i>
                      <span>{listing.rooms} Bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn">
                    View Listing
            </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"><i><FontAwesomeIcon icon={faMapMarkerAlt} /></i> {listing.city}, {listing.state} </span>
            </div>
          </div>
        </div>)
      } else {
        // Display the list view
        return (<div className="col-md-12 col-lg-6" key={index}>
          <div className="listing">
            <div className="listing-img" style={{ background: `url(${listing.image}) no-repeat center center` }}>
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img"> </div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">Martha Smith</span>
                    <span className="post-date">06/30/2019</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa square"><FontAwesomeIcon icon={faSquareRegular} /></i>
                      <span>{listing.floorspace} ft&sup2;</span>
                    </div>
                    <div className="rooms">
                      <i className="fa bed"><FontAwesomeIcon icon={faBed} /></i>
                      <span>{listing.rooms} Bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn">
                    View Listing
            </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location"><i><FontAwesomeIcon icon={faMapMarkerAlt} /></i> {listing.city}, {listing.state} </span>
            </div>
          </div>
        </div>)
      }
    })
  }

  render() {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" onChange={this.props.change} />
      </section>

      <section className="sortby-area">
        <div className="results">{this.props.globalState.filteredData.length} results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby" onChange={this.props.change}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest Price</option>
          </select>
          <div className="view">
            <FontAwesomeIcon icon={faList} className="fa fa-th-list" onClick={this.props.changeView.bind(null, "list")} />
            <FontAwesomeIcon icon={faTh} className="fa fa-th" onClick={this.props.changeView.bind(null, "box")} />
          </div>
        </div>
      </section>

      <section className="listings-results">
        {this.loopListings()}
        <div className="row"></div>
      </section>

      <section className="pagination">
        
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>        
      </section>
    </section>)
  }
}
