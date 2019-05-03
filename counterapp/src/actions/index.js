import * as actionType from './ActionType';

export const addCounter=(newvalue)=>({
    type:actionType.ADD_COUNTER,
    payload:newvalue
});

export const removeCounter=(newvalue)=>({
    type:actionType.REMOVE_COUNTER,
    payload:newvalue
});
export const saveComment=(newvalue)=>({
    type:actionType.SAVE_COMMENT,
    payload: newvalue
});