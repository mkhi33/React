import { SUCCESSFULLY_REGISTERED_USER, ERROR_REGISTERING_USER, CLEAN_ALERT } from "@/types";
export default ( state, action ) => {
    switch (action.type) {
        case SUCCESSFULLY_REGISTERED_USER, ERROR_REGISTERING_USER:
            return {
                ...state,
                message: action.payload.message,
                error: action.payload.error
            }
        case CLEAN_ALERT:
            return {
                ...state,
                message: null,
                error: false
            }
    
        default:
            return state;
    }
}

