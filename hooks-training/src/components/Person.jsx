import React, {useState, useEffect} from 'react';

function Person(props) {
    
    const personDetails=()=> {
        let personData = props.details.map((data, index) => {
            return (
                <li key={index}>
                    Id: {data.id}, Name: {data.name}
                </li>
            )
        })
        return personData;
    }

    return(
        <div>
            Person: {personDetails()}
        </div>
    )
}

export default Person;