import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { Room } from '../../redux/models/map_model';
import OutputContent from './output-content';
import './output.scss';

interface IProps {
    map: Room
}

interface IState {
    output: OutputContent[]
}

interface OutputContent {
    title: string;
    description: string;
}

class GameOuput extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            output: [
                {title: '', description: ''},
            ]
        }
    }

    componentDidMount() {
        console.log(this.props.map)
        this.setState((state, props) => {
            const temp = state.output
            temp.push({
                title: props.map.title,
                description: props.map.description
            })
            return {
                output: temp
            }
        })
    }

    componentDidUpdate(prevProps: IProps) {
        if(this.props.map.title !== prevProps.map.title) {
            this.setState((state, props) => {
                const temp = state.output
                temp.push({
                    title: props.map.title,
                    description: props.map.description
                })
                return {
                    output: temp
                }
            })
        }
    }

    render() {
        return (
            <div className='output-wrap'>
                <p className='header'>Game Log</p>
                <div className='content'>
                    {this.state.output.map((item, index) => {
                        return <OutputContent
                            key={`${index}item.title`}
                            content={item} />
                    })}
                </div>
            </div>
        )
    }
}

const mstp = (state: AppState) => {
    return ({
        map: state.map.rooms
    });
}

export default connect(mstp, null)(GameOuput)