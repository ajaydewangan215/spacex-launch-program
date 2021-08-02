import { types } from "../constants/types";

const initialData = {
    dataList: []
}

const DataReducer = (state=initialData, action) => {
    switch (action.type) {
        case types.FETCH_DATA:
            return {...state, dataList:action.payload};       
        default:
            return state;
    }
}

export default DataReducer