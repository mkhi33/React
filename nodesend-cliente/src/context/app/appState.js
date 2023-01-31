import { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './appReducer';
import axiosClient from '../../config/axios';
import { 
    SHOW_ALERT,
    CLEAN_ALERT,
    SUCCESSFULLY_UPLOAD_FILE,
    ERROR_UPLOAD_FILE,
    UPLOAD_FILE,
    SUCCESSFULLY_CREATE_LINK,
    ERROR_CREATE_LINK,
 } from '../../types';

const AppState = ({children}) => {

    const initialState = {
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

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const showAlert = (msg) => {
        dispatch({
            type: SHOW_ALERT,
            payload: msg
        });

        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000);
    }

    const uploadFile = async (formData, original_name) => {
        dispatch({
            type: UPLOAD_FILE

        });
        try {
            const result = await axiosClient.post('/files', formData);
            dispatch({
                type: SUCCESSFULLY_UPLOAD_FILE,
                payload: {
                    name: result.data.file,
                    original_name
                }
            })
        } catch (error) {
            dispatch({
                type: ERROR_UPLOAD_FILE,
                payload: error.response.data.msg
            })
        }
    }

    const createLink = async () => {
        const data = {
            name: state.name,
            original_name: state.original_name,
            downloads: state.downloads,
            password: state.password,
            author: state.author
        }

        try {
            const result = await axiosClient.post('/links', data);
            dispatch({
                type: SUCCESSFULLY_CREATE_LINK,
                payload: result.data.msg
            });
        } catch (error) {
            
        }
    }

    return (
        <AppContext.Provider
            value={{
                message_file: state.message_file,
                error: state.error,
                loading: state.loading,
                url: state.url,
                showAlert,
                uploadFile,
                createLink,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppState;
