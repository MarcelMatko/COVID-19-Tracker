import React from 'react';
import axios from 'axios';
import '../../App.css';
import NumberFormat from 'react-number-format';
export default class CountryList extends React.Component {
    state = {
        countries: []
    }

    async componentDidMount() {
       await axios.get('https://disease.sh/v3/covid-19/countries?sort=cases').then(res => {
            this.setState({ countries: res.data });
        });
    }


    render() {
        return (
            <div className="wrap">
                {this.state.countries.map((country, index) =>
                        <div className="card" key={index}>
                            <div className="flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }}></div>
                            <h2 className="country_name">{country.country}</h2>
                            <table className="stats-table">
                                <tbody>
                                <tr>
                                    <th>Total cases</th>
                                    <td><NumberFormat value={country.cases} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Cases today</th>
                                    <td><NumberFormat value={country.todayCases} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Total deaths</th>
                                    <td><NumberFormat value={country.deaths} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Deaths today</th>
                                    <td><NumberFormat value={country.todayDeaths} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Recovered</th>
                                    <td><NumberFormat value={country.recovered} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Active</th>
                                    <td><NumberFormat value={country.active} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Critical</th>
                                    <td><NumberFormat value={country.critical} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Cases per 1 million</th>
                                    <td><NumberFormat value={country.casesPerOneMillion} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                <tr>
                                    <th>Deaths per 1 million</th>
                                    <td><NumberFormat value={country.deathsPerOneMillion} displayType={'text'} thousandSeparator={true}/></td>
                                </tr>
                                </tbody>
                            </table>



                        </div>
                )}
            </div>
        )
    }


}