import { types } from '../constants/types'

export const getData = (data) => {
    return {
        type: types.FETCH_DATA,
        payload: data
    }
}