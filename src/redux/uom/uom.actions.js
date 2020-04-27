import UOMActionTypes from './uom.types';

export const addUOM = item => ({
    type: UOMActionTypes.ADD_UOM,
    payload: item
});

export const removeUom = item => ({
    type: UOMActionTypes.REMOVE_UOM,
    payload: item
});

export const updateUOMList = item => ({
    type: UOMActionTypes.UPDATE_UOM_LIST,
    payload: item
});