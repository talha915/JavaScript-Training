function Person(props) {
    
    const personDetails=()=> {
        console.log("Propsssss: ", props.details);
        let personData = props.details;
        
    }

    return(
        <div>
            Person: {personDetails()}
        </div>
    )
}

export default Person;