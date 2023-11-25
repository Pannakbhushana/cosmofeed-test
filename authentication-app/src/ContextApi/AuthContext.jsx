import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [state, setState]=useState(false);

    const logIn=()=>{
        setState(true);
    }

    const logOut=()=>{
        setState(false);
    }

    return <AuthContext.Provider value={{state,logIn,logOut}} >{children}</AuthContext.Provider>
}