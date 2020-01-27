import React from 'react';

interface IProps {
    content: IContent
}

interface IContent {
    title: string;
    description: string;
}

const OutputContent = (props: IProps) => {
    return (
        <div>
            <p>{props.content.title}</p>
            <p>{props.content.description}</p>
        </div>
    )
}

export default OutputContent