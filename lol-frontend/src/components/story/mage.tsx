import React from 'react'
import mage from '../../assetts/mage.png';
import './steps.scss';

interface IProps {
    show: boolean;
}

const Mage = (props: IProps) => {
    return (
        <div
            className={props.show && props.show ?
                        'mage-wrap' : 'no_show'}>
            <img src={mage} alt='mage' />
            <p>Some snarky comment will go here!</p>
        </div>
    )
}

export default Mage
