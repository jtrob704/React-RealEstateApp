webpackJsonp([0],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '3530  Saint Francis Way',
    city: 'Charlotte',
    state: 'NC',
    rooms: 3,
    price: 180000,
    floorspace: 2200,
    extras: ['elevator', 'gym'],
    hometype: 'Condominium',
    image: 'https://assets.dnainfo.com/photo/2017/5/1495581226-299792/larger.jpg'
}, {
    address: '2348  Nixon Avenue',
    city: 'Charlotte',
    state: 'NC',
    rooms: 2,
    price: 140000,
    floorspace: 1800,
    extras: ['elevator', 'swimming pool', 'gym'],
    hometype: 'Condominium',
    image: 'https://www.amli.com/AMLIcontent/files/apartments/dallas/escena/amenity-exterior/escena-amenity-exterior-building-exterior-2_B.jpg?w=320&h=237'
}, {
    address: '768  Wilkinson Street',
    city: 'Huntersville',
    state: 'NC',
    rooms: 4,
    price: 280000,
    floorspace: 3200,
    extras: ['swimming pool', 'finished basement'],
    hometype: 'Single-family home',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1xw:1xh;center,top&resize=480:*'
}, {
    address: '3859  Walt Nuzum Farm Road',
    city: 'Knoxville',
    state: 'TN',
    rooms: 3,
    price: 150000,
    floorspace: 1800,
    extras: ['finished basement', 'gym'],
    hometype: 'Single-family home',
    image: 'https://ap.rdcpix.com/462642208/ddcf38d12e7d148a3cc0f20a189b7f68l-m0xd-w480_h480_q80.jpg'
}, {
    address: '4625  Kincheloe Road',
    city: 'Hampton',
    state: 'VA',
    rooms: 4,
    price: 210000,
    floorspace: 1800,
    extras: ['elevator', 'swimming pool', 'gym'],
    hometype: 'Townhome',
    image: 'https://i.pinimg.com/736x/da/95/01/da9501057f20f97a2594f61d382bbd51--luxury-townhomes-brick-facade.jpg'
}, {
    address: '3302  Christie Way',
    city: 'Rock Hill',
    state: 'SC',
    rooms: 2,
    price: 140000,
    floorspace: 1600,
    extras: ['finished basement'],
    hometype: 'Townhome',
    image: 'https://ap.rdcpix.com/1300778947/707abb9bbff253667c53d5de726f4b06l-m0xd-w480_h480_q80.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'select',
            { name: 'neighborhood', className: 'filters neighborhood' },
            _react2.default.createElement(
              'option',
              null,
              'Southpark'
            )
          ),
          _react2.default.createElement(
            'select',
            { name: 'housetype', className: 'filters housetype' },
            _react2.default.createElement(
              'option',
              null,
              'Ranch'
            )
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms' },
            _react2.default.createElement(
              'option',
              null,
              '2 Bedrooms'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min-price', className: 'min-price' }),
            _react2.default.createElement('input', { type: 'text', name: 'max-price', className: 'max-price' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min-floor-space', className: 'min-floor-space' }),
            _react2.default.createElement('input', { type: 'text', name: 'max-floor-space', className: 'max-floor-space' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { type: 'checkbox', name: 'extras', value: 'elevator' })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { type: 'checkbox', name: 'extras', value: 'swimming-pool' })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { type: 'checkbox', name: 'extras', value: 'finished-basement' })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { type: 'checkbox', name: 'extras', value: 'gym' })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(240);

var _freeSolidSvgIcons = __webpack_require__(239);

var _freeRegularSvgIcons = __webpack_require__(238);

var _listingsData = __webpack_require__(151);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url(' + listing.image + ') no-repeat center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-img' },
                    ' '
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Martha Smith'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '06/30/2019'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement(
                        'i',
                        { className: 'fa square' },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faSquare })
                      ),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.floorspace,
                        ' ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement(
                        'i',
                        { className: 'fa bed' },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed })
                      ),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.rooms,
                        ' Bedrooms'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn' },
                    'View Listing'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                '$',
                listing.price
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement(
                  'i',
                  null,
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt })
                ),
                ' ',
                listing.city,
                ', ',
                listing.state,
                ' '
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faList, className: 'fa' }),
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faTh, className: 'fa' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { className: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(47);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(232);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(231);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(233);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(151);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, null),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.listingsData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[241]);