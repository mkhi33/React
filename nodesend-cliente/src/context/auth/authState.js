import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import { USER_AUTHENTICATED } from "@/types";
import axiosClient from "@/config/axios";
const AuthState = ({children}) => {

    const initialState = {
        token: '',
        authenticated: null,
        user: null,
        message: null,
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const registerUser = async (data) => {
        try {
            const response = await axiosClient.post('/users', data);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
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
                userAuthenticated,
                registerUser
            }}
        >
            {children}
        </authContext.Provider>
    )

}

export default AuthState;