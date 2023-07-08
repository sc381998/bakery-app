import { combineReducers } from 'redux';

const INITIAL_STATE = {
    selectedData: [],
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // case INCREMENT:
        //    return {
        //      ...state, count: state.count + 1,

        //    };
        // case DECREMENT:
        //    return {
        //       ...state, count: state.count - 1,

        //    };
         default: return state;
    }
};

const reducers = combineReducers({
    data: reducer,
});

export default reducers;