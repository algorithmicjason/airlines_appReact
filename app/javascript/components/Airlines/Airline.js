import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Airline = (props) => {
    // debugger
    return (
        <div className="Card">
            <h1>{props.attributes.name}</h1>
            <p>RATE: {props.attributes.avg_rate}</p>
            <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/5b/cb/e0/5bcbe0db-018b-32b8-5fd6-13b5925bb6df/source/256x256bb.jpg" alt="airline logo"/>
            <Link to={`/airlines/${props.attributes.slug}`}> View Airline </Link>
        </div>
    )
}

export default Airline