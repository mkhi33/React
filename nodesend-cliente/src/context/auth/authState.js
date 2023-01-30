import authContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import { USER_AUTHENTICATED } from "@/types";
const AuthState = ({children}) => {

    const initialState = {
        token: '',
        authenticated: null,
        user: null,
        message: null,
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const userAuthenticated = (name) => {
        console.log("Desde state")
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
                userAuthenticated: userAuthenticated
            }}
        >
            {children}
        </authContext.Provider>
    )

}

export default AuthState;