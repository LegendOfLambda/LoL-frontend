import React, { useState, useEffect } from 'react';

import './steps.scss';
import Sprite from './sprite';
import Mage from './mage';

const StepOne = () => {

    const [showMage, setShowMage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowMage(true)
        }, 5000)
    }, [])

    return(
        <div className='step-wrapper'>
            <div className='headline'>
                <h2>Welcome Adventurer!</h2>
            </div>
            <Sprite />
            <Mage show={showMage && showMage} />

        </div>
    )
}

export default StepOne