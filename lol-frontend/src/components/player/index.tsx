import React, {Component} from 'react';
import walkSprite from '../../assetts/link1.png';
import { AppState } from '../../redux';
import { connect } from 'react-redux';
import './player.scss';
import store from '../../redux/store';
import { SET_PLAYER_POSITION } from '../../redux/actions/types/player-types';
import { SPRITE_HEIGHT, SPRITE_WIDTH, MAP_WIDTH, MAP_HEIGHT } from '../../constants';

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
        const oldPos = [parseInt(this.props.position[0]), parseInt(this.props.position[1])]
        store.dispatch({
            type: SET_PLAYER_POSITION,
            payload: this.observeBounds(oldPos, this.getNewPosition(oldPos, direction))
        })
    }

    getNewPosition = (oldPos:number[], direction: string): number[] => {
        switch(direction) {
            case 'WEST':
                return [oldPos[0]-SPRITE_WIDTH, oldPos[1]]
            case 'EAST':
                return [oldPos[0]+SPRITE_WIDTH, oldPos[1]]
            case 'SOUTH':
                return [oldPos[0], oldPos[1]+SPRITE_HEIGHT]
            case 'NORTH':
                return [oldPos[0], oldPos[1]-SPRITE_HEIGHT]
            default:
                return [oldPos[0], oldPos[1]]
        }
    }

    observeBounds = (oldPos: number[], newPos: number[]): number[] => {
        return ( newPos[0] >= 0 && newPos[0] <= MAP_WIDTH ) &&
               ( newPos[1] >=0 && newPos[1] <= MAP_HEIGHT)
               ? newPos : oldPos
    }

    public render() {

        return (
            <div
                className='player'
                style={{
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