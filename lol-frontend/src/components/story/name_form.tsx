import React from 'react';

interface IProps {
    show: boolean
}

const NameForm = (props: IProps) => {
    return <div className={props.show && props.show ? 'show-form' : 'no-form'}></div>
}

export default NameForm