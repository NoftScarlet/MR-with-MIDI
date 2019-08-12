import {Component} from 'react';
import axios from 'axios';

const API_URI = 'https://www.alphavantage.co/';
const queryParam = 'query?function=TIME_SERIES_INTRADAY&symbol=DJIA&interval=30min'
const apiKey = '&apikey=ZVKUOOEW8SAG41F8';

export default class ApiContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            error: null,
        };
    }

    getPrices() {
        this.setState({ isLoading: true });

        axios.get(API_URI + queryParam + apiKey)
            .then(result => this.setState({
                hits: result.data.hits,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }

}