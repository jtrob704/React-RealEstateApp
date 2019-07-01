import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faSquare as faSquareRegular } from '@fortawesome/free-regular-svg-icons';


export default class Listings extends Component {
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
    return (<section className="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>

      <section className="sortby-area">
        <div>390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
          <div className="view">
            <FontAwesomeIcon icon={faList} />
            <FontAwesomeIcon icon={faTh} />
          </div>
        </div>
      </section>

      <section className="listings-results">
        <div className="listing">
          <div className="listing-img">
            <span className="address">Address</span>
            <div className="details">
              <div className="user-img"> </div>
              <div className="user-details">
                <span className="user-name">Martha Smith</span>
                <span className="post-date">06/30/2019</span>
              </div>
              <div className="listing-details">
                <div className="floor-space">
                  <i className="square"><FontAwesomeIcon icon={faSquareRegular} /></i>
                  <span>1000 ft&sup2;</span>
                </div>
                <div className="bedrooms">
                  <i className="bed"><FontAwesomeIcon icon={faBed} /></i>
                  <span>3 Bedrooms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span>$1200 / month</span>
            <span><i className="mapMarker"><FontAwesomeIcon icon={faMapMarkerAlt} /></i> Charlotte, NC </span>
            
          </div>
        </div>
      </section>

      <section className="pagination">
        <ul className="page-no">
          <li>Prev</li>
          <li>1</li>
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
