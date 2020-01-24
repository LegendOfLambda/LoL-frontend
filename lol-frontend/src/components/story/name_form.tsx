import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

interface IProps {
    show: boolean
}

const NameForm = (props: IProps) => {
    let history = useHistory();
    const [name, setName] = useState('')

    const handleEnter = (e: React.KeyboardEvent) => {
        e.preventDefault();

        if(e.keyCode === 13) {
            console.log(name)
            setTimeout(() => {
                history.push('/intro/2')
            }, 2000)
        }
    }

    return (
        <div className={props.show ? 'name-form' : 'no_show'}>
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
    )
}

export default NameForm