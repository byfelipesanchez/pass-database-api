import React from 'react';
import axios from 'axios';

export default class FetchData extends React.Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get('https://jsonpalceholder.typicode.com/users').then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        });
    }

    render() {
        return <ul>
            {this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>;
    }
}