import { combineReducers } from 'redux'
import DataReducer  from './DataReducer'

const reducers = combineReducers({
    allData: DataReducer
})

export default reducers