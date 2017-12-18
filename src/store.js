import {createStore} from 'redux';

const reducer = state => state;

const initialState = {
    loggedInAs: 'aa',
    isCreditCardHolder: true,
}

const store = createStore(reducer, initialState);

export default store;