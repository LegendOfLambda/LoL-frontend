import React, { useState, useEffect } from 'react';
import sprite from '../../assetts/big-link.png'

const Sprite = () => {
    const sprite_rotation = [
        '250px 620px',
        '-870px -260px',
        '850px 870px',
        '500px 850px',
    ]
    const [a_index, setAIndex] = useState(0);

    useEffect(() => {

        if(a_index < sprite_rotation.length) {
            setTimeout(() => {
                setAIndex(a_index + 1)
            }, [1000])
        }

    }, [a_index, sprite_rotation])


    return (
        <div className='sprite-wrap'>
            <div
                className='sprite'
                style={{
                    backgroundImage: `url('${sprite}')`,
                    backgroundPosition: `${sprite_rotation[a_index]}`,
                    backgroundSize: '1000px',
                }}
            />
        </div>
    )
}

export default Sprite