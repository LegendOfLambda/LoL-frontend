import store from '../../redux';
import { SPRITE_HEIGHT, SPRITE_WIDTH } from '../../constants';

const handleMovement = (player) => {

    const getNewPosition = (direction) => {
        const oldPos = store.player;
        console.log(oldPos)
        switch(direction) {
            case 'WEST':
                return [oldPos[0]-SPRITE_WIDTH, oldPos[1]]
            case 'EAST':
                return [oldPos[0]+SPRITE_WIDTH, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1]+SPRITE_HEIGHT]
            case 'SOUTH':
                return [oldPos[0], oldPos[1]-SPRITE_HEIGHT]
            default:
                return oldPos
        }
    }

    const dispatchMove = (direction) => {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    const handleKeyDown = (e) => {
        e.preventDefault();

        switch(e.keyCode) {
            case 37:
                return dispatchMove('WEST')
            case 38:
                return dispatchMove('NORTH')
            case 39:
                return dispatchMove('EAST')
            case 40:
                return dispatchMove('SOUTH')
            default:
                return console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}

export default handleMovement