import React, {Component} from 'react';
import { connect } from 'react-redux';

import store from '../../redux/store';
import { AppState } from '../../redux';
import { MOVE_PLAYER } from '../../redux/actions/types/player-types';
import { PlayerLocation } from '../../redux/models/player_model';

import './player.scss';
import walkSprite from '../../assetts/link1.png';

import {
    SPRITE_HEIGHT,
    SPRITE_WIDTH,
    MAP_BOUNDARY_WIDTH,
    MAP_BOUNDARY_HEIGHT
} from '../../constants';


interface IProps {
    tiles: Array<Array<number>>;
    geo: PlayerLocation;
}

class Player extends Component<IProps>{

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            this.handleKeyDown(e);
        })
    }

    // checks the key that was pressed and attempts a move in that direction
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

    // dispatches the new position to the redux store
    dispatchMove = (
        location: string,
        direction: string,
        newPos: number[],
        walkIndex: number
    ) => {
        store.dispatch({
            type: MOVE_PLAYER,
            payload: {
                position: newPos,
                direction: direction,
                spriteLocation: location,
                walkIndex: walkIndex
            }
        })
    }

    // determines the new position of the sprite
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

    // checks to make sure the sprite is within the map bounds
    observeBounds = (oldPos: number[], newPos: number[]): boolean => {
        return ( newPos[0] >= 0 && newPos[0] <= MAP_BOUNDARY_WIDTH ) &&
               ( newPos[1] >=0 && newPos[1] <= MAP_BOUNDARY_HEIGHT)
    }

    // checks the next tile to see if it is a passable object
    observeImpassable = (oldPos: number[], newPos: number[]): boolean => {
        const tile = this.props.tiles;
        const y = newPos[1] / SPRITE_HEIGHT
        const x = newPos[0] / SPRITE_WIDTH
        const nextTile = tile[y][x]
        return nextTile < 5
    }

    // checks to see if the sprite will be within map bounds and that it is not walking into an impassable object
    attemptMove = (direction: string) => {
        const { position } = this.props.geo
        const oldPos = [position[0], position[1]]
        const newPos = this.getNewPosition(oldPos, direction)

        if(this.observeBounds(oldPos, newPos) && this.observeImpassable(oldPos, newPos)) {
            const walkIndex = this.getWalkIndex()
            const location = this.getSpriteLocation(direction, walkIndex)
            this.dispatchMove(location, direction, newPos, walkIndex);
        }
    }

    // determines the portion of the sprite sheet to render based on the direction and walk index
    getSpriteLocation = (direction: string, walkIndex: number) => {
        switch(direction) {
            case 'NORTH':
                return `${24*walkIndex}px 0px`

            case 'EAST':
                return `${24*walkIndex}px -32px`

            case 'SOUTH':
                return `${24*walkIndex}px 64px`

            case 'WEST':
                return `${24*walkIndex}px 32px`

            default:
                return ''
        }
    }

    // determines whether or not we have reached the end of the sprite sheet,
    // if not it will increase the walk index by one
    getWalkIndex = () => {
        const currentWalkIndex = this.props.geo.walkIndex
        return currentWalkIndex >= 11 ? 0 : currentWalkIndex + 1
    }


    public render() {
        const { position, spriteLocation } = this.props.geo
        return (
            <div
                className='player'
                style={{
                    position: 'absolute',
                    top: position[1] || 0,
                    left: position[0] || 0,
                    backgroundImage: `url('${walkSprite}')`,
                    backgroundPosition: `${spriteLocation}`,
                    width: '25px',
                    height: '35px'
                }}>
            </div>
        )
    }
}

const mstp = (state: AppState) => ({
    geo: state.player.geo,
    tiles: state.map.tiles,
})

export default connect(mstp, null)(Player)