import { ADD_POINT, REMOVE_POINT, SWAP_POINTS } from '../constants'

export function addPoint(point) {
    return { type: ADD_POINT, point }
}

export function removePoint(pointId) {
    return { type: REMOVE_POINT, pointId }
}

export function swapPoints(swapedPoints) {
    return { type: SWAP_POINTS, swapedPoints }
}