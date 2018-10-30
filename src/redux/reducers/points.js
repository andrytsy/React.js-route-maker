import { ADD_POINT, REMOVE_POINT, UPDATE_POINT, SWAP_POINTS } from '../constants'

export default function (points = [], action) {
    let index

    switch (action.type) {
        case ADD_POINT:
            points.push(action.point)
            break
        case REMOVE_POINT:
            index = points.findIndex(item => item.id === action.point)
            if (index !== undefined)
                points.splice(index, 1)
            break
        case UPDATE_POINT:
            index = points.findIndex(item => item.id === action.point.id)
            if (index !== undefined)
                points.splice(index, 1, action.point)
            break
        case SWAP_POINTS:
            break
        default:
            return points
    }

    return points
}
