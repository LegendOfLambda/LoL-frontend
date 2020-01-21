import React, {Component} from 'react';
import walkSprite from '../../assetts/link1.png';
import { AppState } from '../../redux';
import { connect } from 'react-redux';
import './player.scss';
import store from '../../redux/store';
import { SET_PLAYER_POSITION } from '../../redux/actions/types/player-types';
import { SPRITE_HEIGHT, SPRITE_WIDTH, MAP_BOUNDARY_WIDTH, MAP_BOUNDARY_HEIGHT } from '../../constants';

interface IProps {
    position: string[];
    tiles: Array<Array<number>>
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
                return this.attemptMove('WEST')
            case 38:
                return this.attemptMove('NORTH')
            case 39:
                return this.attemptMove('EAST')
            case 40:
                return this.attemptMove('SOUTH')
            default:
                return console.log(e.keyCode)
        }
    }

    dispatchMove = (newPos: number[]) => {
        store.dispatch({
            type: SET_PLAYER_POSITION,
            payload: newPos
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

    observeBounds = (oldPos: number[], newPos: number[]): boolean => {
        return ( newPos[0] >= 0 && newPos[0] <= MAP_BOUNDARY_WIDTH ) &&
               ( newPos[1] >=0 && newPos[1] <= MAP_BOUNDARY_HEIGHT)
    }

    observeImpassable = (oldPos: number[], newPos: number[]): boolean => {
        const tile = this.props.tiles;
        const y = newPos[1] / SPRITE_HEIGHT
        const x = newPos[0] / SPRITE_WIDTH
        const nextTile = tile[y][x]
        return nextTile < 5
    }

    attemptMove = (direction: string) => {
        const oldPos = [parseInt(this.props.position[0]), parseInt(this.props.position[1])]
        const newPos = this.getNewPosition(oldPos, direction)

        if(this.observeBounds(oldPos, newPos) && this.observeImpassable(oldPos, newPos)) {
            this.dispatchMove(newPos);
        }
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
    tiles: state.map.tiles
})

export default connect(mstp, null)(Player)