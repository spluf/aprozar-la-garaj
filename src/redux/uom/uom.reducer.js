import UOMActionTypes from './uom.types';
import {addUOM} from './uom.utils';

const INITIAL_STATE = {
    uoms: []
}

const UOMReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UOMActionTypes.ADD_UOM:
            return {
                ...state,
                uoms: addUOM(state.uoms, action.payload)
            };
        case UOMActionTypes.UPDATE_UOM_LIST:
            return {
                ...state,
                uoms: Object.assign(action.payload)
            }
        default:
            return state;
    }
}

export default UOMReducer;