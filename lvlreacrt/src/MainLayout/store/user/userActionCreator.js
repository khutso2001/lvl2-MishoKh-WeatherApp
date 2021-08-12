import {SET_USER,SET_TOKEN,SET_LOGED,SET_LOGININ} from "./userActionConst";
export const  setUser =(user)=>{
    return{
        type:SET_USER,
        user
    }
}
export const  setToken=(token)=>{
    return{
        type:SET_TOKEN,
        token,
    }
}
export const setLogin = (bool) => {
    return {
        type:SET_LOGED,
        isLoggedIn:bool,
    }
}

export const setLoginIn = (bool) => {
    return {
        type:SET_LOGININ,
        isLoggingIn:bool,
    }
}