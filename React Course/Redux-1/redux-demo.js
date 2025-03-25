const redux = require('redux');

const counterReducer = (state, action) =>{
    return {
        counter: state.counter + 1
    };
};