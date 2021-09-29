import React from 'react'
import Number from '../Components/numberPage/number'
import Travels from '../Components/Travels/Travels'
import Global from '../Components/GlobalPresence/global'
import Award from '../Components/awards/awards'
import Advantage from '../Components/Advantage/Advantage'


export const HomePage = () => {
    return (
        <div>
            <Advantage />
            <Award />
            <Global />
            <Number />
            <Travels />
        </div>
    )
}
