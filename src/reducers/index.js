import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_FUNCTION} from './../actions';

export const initialState = {
    total: 100,
    operation: "*",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const applyFunction = (state, func) => {
    switch(func) {
        case('M+'):
            return state.total;
        case('MR'):
            // Applies it to the memory, not the total
            return calculateResult(state.total, state.memory, state.operation);
        case('MC'):
            return 0;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });

        case(MEMORY_FUNCTION):
            return ({
                ...state,
                memory: applyFunction(state, action.payload)
            });

        default:
            return state;
    }
}

export default reducer;