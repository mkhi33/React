import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import { USER_AUTHENTICATED, SUCCESSFULLY_REGISTERED_USER, ERROR_REGISTERING_USER, CLEAN_ALERT } from "@/types";
import axiosClient from "@/config/axios";
const AuthState = ({children}) => {

    const initialState = {
        token: '',
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

    const userAuthenticated = (name) => {
        
        dispatch({
            type: USER_AUTHENTICATED,
            payload: name
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
                registerUser
            }}
        >
            {children}
        </authContext.Provider>
    )

}

export default AuthState;