import React, { useState, useEffect } from 'react';

import heart from '../../../assetts/heart.png';
import '../info.scss';

interface IProps {
    hp: number;
}

const Health = (props: IProps) => {
    const [hearts, setHearts] = useState()

    useEffect(() => {
        setHearts(new Array(props.hp).fill(0))
    }, [props.hp])

    return(
        <div className='heart-wrap'>
            {hearts && hearts.map((item: number, i: number) => {
                return <img
                            src={heart}
                            alt='heart'
                            key={i}
                            className='icons'
                            id='hearts'
                        />
            })}
        </div>
    )

}

export default Health