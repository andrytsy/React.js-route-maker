import { ADD_POINT, REMOVE_POINT, UPDATE_POINT, SWAP_POINTS } from '../constants'

export function addPoint(point) {
    return { type: ADD_POINT, point }
}

export function removePoint(pointId) {
    return { type: REMOVE_POINT, pointId }
}

export function updatePoint(point) {
    return { type: UPDATE_POINT, point }
}

export function swapPoints(swapedPoints) {
    return { type: SWAP_POINTS, swapedPoints }
}