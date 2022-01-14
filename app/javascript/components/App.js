import React, { Fragment } from 'react' 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom' 
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const App = () => {
    return (  
        <Fragment>
            <Router>
                <Routes>
                    <Route exact path="/" element={ <Airlines />} />
                    <Route exact path="/airlines/:slug" element={ <Airline />} />
                </Routes>
            </Router>
         </Fragment>
        
    
    )
}

export default App