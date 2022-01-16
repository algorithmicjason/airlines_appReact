import React from 'react'
import { useState, useEffect, Fragment } from 'react'
import { BroweserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Airline from './Airline'

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

    const grid = airlines.map(airline => {
        return (
            <Airline 
            key={airline.attributes.name}
            attributes={airline.attributes}
            />
        )
    })
        

    return (
        <div className="Airlines-index">
            <h1 className='Airlines__header'>Top Flights on our site</h1>
            <h2 className='Airlines__subheader'>Honest, unbias, airline reviews.</h2>
            <div className='Airlines-grid' style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                {grid}
            </div>
        </div>
    )
}

export default Airlines