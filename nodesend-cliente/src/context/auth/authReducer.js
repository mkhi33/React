import {USER_AUTHENTICATED, SUCCESSFULLY_REGISTERED_USER, ERROR_REGISTERING_USER, CLEAN_ALERT, ERROR_AUTH_USER, SUCCESSFULLY_LOGIN, CLOSE_SESSION} from "@/types";
export default ( state, action ) => {
    switch (action.type) {
        case SUCCESSFULLY_REGISTERED_USER, ERROR_REGISTERING_USER, ERROR_AUTH_USER:
            return {
                ...state,
                message: action.payload.message,
                error: action.payload.error
            }
        case SUCCESSFULLY_LOGIN:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                authenticated: true
            }
        case USER_AUTHENTICATED:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        case CLOSE_SESSION:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                authenticated: null
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

