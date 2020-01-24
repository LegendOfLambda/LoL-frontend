import React, { useEffect } from 'react';
import sprite from '../../assetts/big-link.png'
import { useHistory } from "react-router-dom";


const StepTwo = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/play-now');
        }, [5500])
    }, [history])

    return (
        <div className='step-two'>
            <div className='spin-wrap'>
                <div
                    className='spinning-sprite'
                    style={{
                        position: 'absolute',
                        backgroundImage: `url('${sprite}')`,
                        backgroundPosition: '500px 850px',
                        backgroundSize: '1000px',
                    }}
                >
                </div>
            </div>
            <p>** As soon as the old mage finished chanting you feel yourself start to fall and can feel your body shrinking as you spin into oblivion... **</p>
        </div>

    )
}

export default StepTwo
