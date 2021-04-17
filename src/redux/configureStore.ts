import createSagaMiddleware from 'redux-saga'
import { compose, applyMiddleware, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import rootSaga from './saga'

export default function configureStore() {
    const saga = createSagaMiddleware()
    const store = createStore(rootReducer, compose(applyMiddleware(saga)))
    saga.run(rootSaga)
    return store
}