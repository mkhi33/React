import { 
    SHOW_ALERT,
    CLEAN_ALERT,
    SUCCESSFULLY_UPLOAD_FILE,
    ERROR_UPLOAD_FILE,
    UPLOAD_FILE,
    SUCCESSFULLY_CREATE_LINK,
    ERROR_CREATE_LINK
 } from '../../types';

export default ( state, action ) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                message_file: action.payload
            }
            break;

        case CLEAN_ALERT:
            return {
                ...state,
                message_file: null,
                error: null
            }

        case SUCCESSFULLY_UPLOAD_FILE:
            return {
                ...state,
                name: action.payload.name,
                original_name: action.payload.original_name,
                loading: false
            }

        case ERROR_UPLOAD_FILE:
            return {
                ...state,
                message_file: action.payload,
                loading: false,
                error: true,
            }
        case UPLOAD_FILE:
            return {
                ...state,
                loading: true
            }

        case SUCCESSFULLY_CREATE_LINK:
            return {
                ...state,
                url: action.payload,
                loading: false
            }
        
    
        default:
            return state;
    }
}