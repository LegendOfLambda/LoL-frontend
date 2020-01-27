import React, {Component} from 'react';
import { connect } from 'react-redux';

import store from '../../redux/store';
import { AppState } from '../../redux';
import { MOVE_PLAYER } from '../../redux/actions/types/player-types';
import { PlayerLocation } from '../../redux/models/player_model';
import { rooms } from '../../maps/one';

import './player.scss';
import walkSprite from '../../assetts/link1.png';

import {
    SPRITE_HEIGHT,
    SPRITE_WIDTH,
    MAP_BOUNDARY_WIDTH,
    MAP_BOUNDARY_HEIGHT
} from '../../constants';
import { Room } from '../../redux/models/map_model';
import { SET_ROOM } from '../../redux/actions/types/map-types';


interface IProps {
    room: Room;
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
                walkIndex: walkIndex,
                level: 0
            }
        })
    }

    // determines the new position of the sprite on the map
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
        const tile = this.props.room.tiles;
        let y: number;
        let x: number;
        let nextTile: number;
        y = newPos[1] / SPRITE_HEIGHT
        x = newPos[0] / SPRITE_WIDTH

        nextTile = tile[y][x]
        return nextTile < 1
    }

    // determines the position that the sprite will spawn in in the new map
    getNextRoomPosition = (direction: string, oldPos: number[]): number[] => {
        switch(direction) {
            case 'NORTH':
                console.log(oldPos)
                return [oldPos[0], 350]

            case 'EAST':
                console.log(oldPos)
                return [0, oldPos[1]]

            case 'SOUTH':
                console.log(oldPos)
                return [oldPos[0], 0]

            case 'WEST':
                console.log(oldPos)
                return [750, oldPos[1]]

            default:
                return oldPos
        }
    }

    // determines that the next room will be based on the direction travelling and the room objects adjoined rooms
    getNextRoom = (direction: string) => {
        console.log(direction)
        switch(direction) {
            case 'NORTH':
                if(this.props.room.n >= 0) {
                    return rooms[this.props.room.n]
                } else {
                    return this.props.room
                };

            case 'EAST':
                if(this.props.room.e >= 0) {
                    return rooms[this.props.room.e]
                } else {
                    return this.props.room
                };

            case 'SOUTH':
                if(this.props.room.s >= 0) {
                    return rooms[this.props.room.s]
                } else {
                    return this.props.room
                };

            case 'WEST':
                if(this.props.room.w >= 0) {
                    return rooms[this.props.room.w]
                } else {
                    return this.props.room
                };

            default:
                return this.props.room
        }
    }

    // checks to see if the sprite will be within map bounds and that it is not walking into an impassable object
    attemptMove = (direction: string) => {
        const { position } = this.props.geo
        const oldPos = [position[0], position[1]]
        const newPos = this.getNewPosition(oldPos, direction)
        const walkIndex = this.getWalkIndex()
        const location = this.getSpriteLocation(direction, walkIndex)

        // first statement will check to see if the position is out of bounds but still passable,
        // in order to test if it is going to be a doorway to next room
        if(this.checkNewPositions(newPos) && this.observeImpassable(oldPos, newPos)) {
                const newRoom = this.getNextRoom(direction)
                const newPosition = this.getNextRoomPosition(direction, oldPos);

                this.dispatchNewRoom(newRoom)
                this.dispatchMove(location, direction, newPosition, walkIndex);

        // any other time we just check to make sure we are not out of bounds and aren't walking into a wall
        } else if(this.observeBounds(oldPos, newPos) && this.observeImpassable(oldPos, newPos)) {
            this.dispatchMove(location, direction, newPos, walkIndex);
        }
    }

    // checks for doorway
    checkNewPositions = (newPos: number[]): boolean => {
        return newPos[0] === 0 || newPos[0] === 775 || newPos[1] === 0 || newPos[1] === 385
    }

    dispatchNewRoom = (room: Room) => {
        store.dispatch({
            type: SET_ROOM,
            payload: room
        })
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
    room: state.map.rooms,
})

export default connect(mstp, null)(Player)