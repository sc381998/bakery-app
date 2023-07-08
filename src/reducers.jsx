import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const INITIAL_STATE = {
    selectedData: [],
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_TO_CART:
           return {
            ...state,
            selectedData: [...state.selectedData, action.payload]
           };
        case REMOVE_FROM_CART:
            const filtertedData = state.selectedData.filter(ele => ele !== action.payload);
            return {
                ...state,
                selectedData: filtertedData
            };
         default: return state;
    }
};

const reducers = combineReducers({
    cartData: reducer,
});

export default reducers;