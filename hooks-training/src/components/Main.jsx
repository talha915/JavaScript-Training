import React, { Component } from 'react';

// Components
import Person from './Person';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personDetails: [
                { 'id': 1, 'name': 'A' },
                { 'id': 2, 'name': 'B' },
                { 'id': 3, 'name': 'C' }
            ]
        }
    }

    render() {
        return (
            <div>
                <button>
                    Click Me to update data
                </button>
                <Person details={this.state.personDetails}/>
            </div>
        )
    }
}

export default Main;