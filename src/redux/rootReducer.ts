import { combineReducers } from 'redux'
import { birhtdaysReducer } from './birthdaysReducer'

export const rootReducer = combineReducers({
    birthdays: birhtdaysReducer
})

export type RootState = ReturnType<typeof rootReducer>