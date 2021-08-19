export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const MEMORY_FUNCTION = 'MEMORY_FUNCTION';
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyMemoryFunction = memoryFunction => {
    return ({type:MEMORY_FUNCTION, payload:memoryFunction});
}

export const applyClearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}

export const applyOperator = operator => {
    return ({type:CHANGE_OPERATION, payload:operator});
}

export const applyNumber = (number) => {
    return ({type:APPLY_NUMBER, payload:number});
}