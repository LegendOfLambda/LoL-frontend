import React, { useState, useEffect } from 'react'
import mage from '../../assetts/mage.png';
import './steps.scss';
import NameForm from './name_form';

interface IProps {
    show: boolean;
}

const Mage = (props: IProps) => {
    const [d_index, setDIndex] = useState(0);
    const [showForm, setShowForm] = useState(false);

    const dialogue = [
        'Oh god, not another "ADVENTURER"..!',
        'Let me guess, you think you can finally save the princess?...',
        'HAHAHAHAHAHAHAHAHHHAAHAHA.....',
        'Look kid, plenty of "Adventurers" have come through here',
        'thinking they were tough stuff and never make it to the princess...',
        'and they were WAY tougher looking than...',
        '** You watch as the mage looks you up and down **',
        '...you. Hahaha but nevermind, just tell me your name kid',
        'so I can shrink you down and send you in.',
    ]

    useEffect(() => {
        if(d_index < dialogue.length) {
            let time: number = d_index === 0 ? 7000 : 5000;
            setTimeout(() => {
                setDIndex(d_index + 1)
            }, time)
        } else setShowForm(true);

    }, [d_index, dialogue])

    return (
        <div className={props.show && props.show ?'mage-wrap' : 'no_show'}>
            <img src={mage} alt='mage' />
            <p className={showForm ? 'no_show' : 'chat'}>
                {dialogue[d_index]}
            </p>
            <NameForm show={showForm} />
        </div>
    )
}

export default Mage
