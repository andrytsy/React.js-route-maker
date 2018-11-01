import { ADD_POINT, REMOVE_POINT, UPDATE_POINT, SWAP_POINTS } from '../constants'

export default function (points = [], action) {
    const { type, point, pointId, swapedPoints } = action
    let index

    switch (type) {
        case ADD_POINT:
            return [point].concat(points)

        case REMOVE_POINT:
            return points.filter(item => item.id !== pointId)

        case UPDATE_POINT:
            index = points.findIndex(item => item.id === point.id)
            return points.splice(index, 1, point)

        case SWAP_POINTS:
            return swapedPoints

        default:
            return points
    }

    return points
}
