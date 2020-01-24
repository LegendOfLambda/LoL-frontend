import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import store from '../../redux/store';
import { SET_PLAYER_DATA } from '../../redux/actions/types/player-types';
import { PlayerInfo } from '../../redux/models/player_model';

interface IProps {
    show: boolean
}

const NameForm = (props: IProps) => {
    let history = useHistory();
    const [name, setName] = useState('')
    const [showNext, setShowNext] = useState(false);
    const [d_index, setDIndex] = useState(0);

    const dialogue = [
        `all the names in the world and you came up with ${name}?`,
        'Lord, alright let\'s get this over with kid.',
        '** The mage starts chanting in some weird language and you can feel your body begin to tighten **',
        ''
    ]

    useEffect(() => {
        if(d_index < dialogue.length-1 && showNext) {
            setTimeout(() => {
                setDIndex(d_index + 1)
            }, 5000)
        }

        if(d_index === dialogue.length -1) {
            history.push('/intro/2');
        }

    }, [showNext, d_index, dialogue, history])

    const handleEnter = (e: React.KeyboardEvent) => {
        e.preventDefault();

        if(e.keyCode === 13) {
            setTimeout(() => {
                setShowNext(true);
                const player: PlayerInfo = { name: name }
                store.dispatch({
                    type: SET_PLAYER_DATA,
                    payload: player
                })
            }, [1000])
        }
    }

    return (
        <div className={props.show ? 'name-form' : 'no_show'}>
            <div className={!showNext ? 'form-wrap' : 'no_show'}>
                <h3>What is your name?</h3>
                <div className='input-field'>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyUp={(e) => handleEnter(e)}
                    />
                </div>
            </div>

            <div className={showNext ? 'chat' : 'no_show'}>
                <p>{dialogue[d_index]}</p>
            </div>

        </div>
    )
}

export default NameForm