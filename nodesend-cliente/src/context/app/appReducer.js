import { 
    SHOW_ALERT,
    CLEAN_ALERT,
    SUCCESSFULLY_UPLOAD_FILE,
    ERROR_UPLOAD_FILE,
    UPLOAD_FILE,
    SUCCESSFULLY_CREATE_LINK,
    ERROR_CREATE_LINK,
    CLEAN_STATE,
    ADD_PASSWORD,
    ADD_DOWNLOADS
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

        case CLEAN_STATE:
            return {
                message_file: null,
                error: null,
                name: '',
                original_name: '',
                loading: false,
                downloads: 1,
                password: '',
                author: null,
                url: ''
            }

        case ADD_PASSWORD:
            return {
                ...state,
                password: action.payload
            }

        case ADD_DOWNLOADS:
            return {
                ...state,
                downloads: action.payload
            }
        
    
        default:
            return state;
    }
}