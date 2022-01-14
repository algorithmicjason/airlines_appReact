import React from 'react'
import { useState, useEffect, Fragment } from 'react'
import { BroweserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Airlines = () => {

    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        async function fetchAPI() {
            let res = await fetch('api/v1/airlines')
            res = await res.json()
            setAirlines(res.data)
            // console.log(res.data)
        }
        fetchAPI()
    }, [airlines.length])
        

    return (
        <div className="Airlines-index">
            <h1 className='Airlines__header'>Top Flights on our site</h1>
            <h2 className='Airlines__subheader'>Honest, unbias, airline reviews.</h2>
            <ul className='Airlines__ul'>
                {airlines.map(airline => <li className='Airlines__li' key={airline.attributes.slug}> {airline.attributes.name} {` ID: ${airline.id}`} </li>)}
            </ul>
        </div>
    )
}

export default Airlines