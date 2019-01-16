import React, { Component } from 'react';

export default class ForecastExtended extends Component {
    constructor(props) {
        super(props);
        const {city} = props;
        this.state = {
            city
        }
    }
    render() {
        return <div>Pronostico extendido para {this.state.city}</div>;
    }
}