import React, {useState, useEffect} from 'react';

function Person(props) {
    const [value, setValue] = useState(0);

    useEffect(()=>{
        setValue(value+1)
    }, [])

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
            <p>Current State: {value}</p>
            Person: {personDetails()}
        </div>
    )
}

export default Person;