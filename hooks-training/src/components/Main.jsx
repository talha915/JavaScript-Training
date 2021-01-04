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

    updatePersons=()=> {
        this.setState({
            personDetails: [
                { 'id': 4, 'name': 'D' },
                { 'id': 5, 'name': 'E' },
                { 'id': 6, 'name': 'F' }
            ]
        })
    }

    render() {
        return (
            <div>
                <button onClick={(e)=>this.updatePersons()}>
                    Click Me to update data
                </button>
                <Person details={this.state.personDetails}/>
            </div>
        )
    }
}

export default Main;