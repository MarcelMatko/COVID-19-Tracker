import React from 'react';
import axios from 'axios';
import '../../App.css';
import CountUp from 'react-countup';

export default class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        await axios.get('https://disease.sh/v3/covid-19/all')
            .then(res => {
                this.setState({ data: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        const { data: { cases, deaths, active, recovered, todayCases, todayDeaths } } = this.state;
        if (!cases) {
            return 'Loading...';
        }
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="statistic">
                            <div className="box_wrapper row d-flex justify-content-center">
                                <div className="box col-md-4 mb-4" id="line-b">
                                    <p className="infected_number"><CountUp start={0} end={cases} duration={1.5} separator="," /></p>
                                    <h4>Total Cases</h4>
                                </div>
                                <div className="box col-md-4 mb-4" id="line-y">
                                    <p className="active_number"><CountUp start={0} end={active} duration={1.5} separator="," /></p>
                                    <h4>Active Cases</h4>
                                </div>
                            </div>
                            <div className="box_wrapper row d-flex justify-content-center">
                                <div className="box col-md-4 mb-4" id="line-g">
                                    <p id="recovered" className="recovered_number"><CountUp start={0} end={recovered} duration={1.5} separator="," /></p>
                                    <h4>Recovered</h4>
                                </div>
                                <div className="box col-md-4 mb-4" id="line-r">
                                    <p className="deaths_number"><CountUp start={0} end={deaths} duration={1.5} separator="," /></p>
                                    <h4>Deaths</h4>
                                </div>
                                <div className="box col-md-4 mb-4" id="line-o">
                                    <p className="today_cases_number"><CountUp start={0} end={todayCases} duration={1.5} separator="," /></p>
                                    <h4>Cases Today</h4>
                                </div>
                                <div className="box col-md-4 mb-4" id="line-r">
                                    <p className="deaths_number" ><CountUp start={0} end={todayDeaths} duration={1.5} separator="," /></p>
                                    <h4>Deaths Today</h4>
                                </div>
                            </div>

        </div>
                    </div>
                </div>
        )
    }


}