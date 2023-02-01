import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import { USER_AUTHENTICATED, SUCCESSFULLY_LOGIN, SUCCESSFULLY_REGISTERED_USER, ERROR_REGISTERING_USER, CLEAN_ALERT, ERROR_AUTH_USER, CLOSE_SESSION } from "@/types";
import axiosClient from "@/config/axios";
import tokenAuth from "@/config/tokenAuth";
const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        authenticated: null,
        user: null,
        message: null,
        error: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const registerUser = async (data) => {
        try {
            const response = await axiosClient.post('/users', data);
            dispatch({
                type: SUCCESSFULLY_REGISTERED_USER,
                payload: {
                    message: response.data.message,
                    error: false
                }
            })
        } catch (error) {
            dispatch({
                type: ERROR_REGISTERING_USER,
                payload: {
                    error: true,
                    message: error.response.data.msg
                }
            })
        }

        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000)
    }

    const authUser = async (data) => {
        try {
            const response = await axiosClient.post('/auth', data);
            dispatch({
                type: SUCCESSFULLY_LOGIN,
                payload: response.data.token
            })
        } catch (error) {
            dispatch({
                type: ERROR_AUTH_USER,
                payload: {
                    error: true,
                    message: error.response.data.msg
                }
            })
        }

        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000)
    }

    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if( token ) {
            tokenAuth(token);
        }

        try {
            const respense = await axiosClient.get('/auth');
            if( respense.data.user ) {
                dispatch({
                    type: USER_AUTHENTICATED,
                    payload: respense.data.user
                })
            }
        } catch (error) {
            
        }
    }

    const closeSession = () => {
        dispatch({
            type: CLOSE_SESSION
        })
    }

    return(
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                error: state.error,
                userAuthenticated,
                registerUser,
                authUser,
                closeSession
            }}
        >
            {children}
        </authContext.Provider>
    )

}

export default AuthState;