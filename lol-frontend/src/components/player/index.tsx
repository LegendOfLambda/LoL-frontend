import React, {Component} from 'react';
import walkSprite from '../../assetts/link1.png';
import { AppState } from '../../redux';
import { connect } from 'react-redux';
import './player.scss';
import store from '../../redux/store';
import { SET_PLAYER_POSITION } from '../../redux/actions/types/player-types';
import { SPRITE_HEIGHT, SPRITE_WIDTH } from '../../constants';

interface IProps {
    position: string[]
}

class Player extends Component<IProps>{

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            this.handleKeyDown(e);
        })
    }

    handleKeyDown = (e: KeyboardEvent) => {
        e.preventDefault();

        switch(e.keyCode) {
            case 37:
                return this.dispatchMove('WEST')
            case 38:
                return this.dispatchMove('NORTH')
            case 39:
                return this.dispatchMove('EAST')
            case 40:
                return this.dispatchMove('SOUTH')
            default:
                return console.log(e.keyCode)
        }
    }

    dispatchMove = (direction: string) => {
        store.dispatch({
            type: SET_PLAYER_POSITION,
            payload: this.getNewPosition(direction)
        })
    }

    getNewPosition = (direction: string): number[] => {
        const oldPos = this.props.position;
        switch(direction) {
            case 'WEST':
                return [(parseInt(oldPos[0]))-SPRITE_WIDTH, parseInt(oldPos[1])]
            case 'EAST':
                return [parseInt(oldPos[0])+SPRITE_WIDTH, parseInt(oldPos[1])]
            case 'SOUTH':
                return [parseInt(oldPos[0]), parseInt(oldPos[1])+SPRITE_HEIGHT]
            case 'NORTH':
                return [parseInt(oldPos[0]), parseInt(oldPos[1])-SPRITE_HEIGHT]
            default:
                return [parseInt(oldPos[0]), parseInt(oldPos[1])]
        }
    }

    public render() {

        return (
            <div
                className='player'
                style={{
                    border: '1px solid red',
                    position: 'absolute',
                    top: this.props.position[1],
                    left: this.props.position[0],
                    backgroundImage: `url('${walkSprite}')`,
                    backgroundPosition: '',
                    width: '25px',
                    height: '35px'
                }}>
            </div>
        )
    }
}

const mstp = (state: AppState) => ({
    position: state.player.position,
})

export default connect(mstp, null)(Player)