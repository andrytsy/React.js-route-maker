import { ADD_POINT, REMOVE_POINT, SWAP_POINTS } from '../constants'

export default function (points = [], action) {
    const { type, point, pointId, swapedPoints } = action

    switch (type) {
        case ADD_POINT:
            return points.concat([point])

        case REMOVE_POINT:
            return points.filter(item => item.id !== pointId)

        case SWAP_POINTS:
            return swapedPoints

        default:
            return points
    }
}
