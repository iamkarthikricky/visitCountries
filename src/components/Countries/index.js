import {Component} from 'react'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const CountriesList = props => {
  const {country, addToVisitedList} = props
  const toggleVisited = () => {
    country.isVisited = !country.isVisited
    addToVisitedList()
  }
  return (
    <li className="list-item">
      <p className="country-name">{country.name}</p>
      {country.isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={toggleVisited}>
          Visit
        </button>
      )}
    </li>
  )
}

const VisitedCountries = props => {
  const {visitedCountry, addToVisitedList} = props
  const {name, imageUrl} = visitedCountry
  const removeCountry = () => {
    visitedCountry.isVisited = !visitedCountry.isVisited
    addToVisitedList()
  }
  return (
    <li className="visited-country-list">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="flex-row-container">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

class CountriesView extends Component {
  state = {visitedCountriesList: []}

  componentDidMount() {
    this.addToVisitedList()
  }

  addToVisitedList = () => {
    const visitedCountry = initialCountriesList.filter(
      country => country.isVisited === true,
    )
    visitedCountry.sort()
    this.setState({visitedCountriesList: visitedCountry})
  }

  render() {
    const {visitedCountriesList} = this.state
    return (
      <div className="countries-main-container">
        <h1 className="sub-heading">Countries</h1>
        <ul className="ul-list">
          {initialCountriesList.map(eachCountry => (
            <CountriesList
              key={eachCountry.id}
              country={eachCountry}
              addToVisitedList={this.addToVisitedList}
            />
          ))}
        </ul>
        <h1 className="sub-heading">Visited Countries</h1>
        {visitedCountriesList.length === 0 ? (
          <p className="no-countries-visited">No Countries Visited Yet</p>
        ) : (
          <ul className="visited-ul-list">
            {visitedCountriesList.map(country => (
              <VisitedCountries
                key={country.id}
                visitedCountry={country}
                addToVisitedList={this.addToVisitedList}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CountriesView
