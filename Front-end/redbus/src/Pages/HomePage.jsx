import React from 'react'
import Number from '../Components/numberPage/number'
import Travels from '../Components/Travels/Travels'
import Loginpage from '../Components/LoginPage/Loginpage'


export const HomePage = ({showLogin,setShowLogin}) => {
    return (
        <div>
            {showLogin? <Loginpage showLogin={showLogin} setShowLogin={setShowLogin}/>:<></>}
            <Number />
            <Travels />
        </div>
    )
}
