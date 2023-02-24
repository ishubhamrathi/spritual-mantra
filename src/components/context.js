import { createContext, useState , useContext, useReducer} from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState={
    menu : 0
}
const AppProvider = ({children})=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    const renderPage = (value) =>{
        dispatch({type:"RENDER_PAGE", payload : value});
    }
    return (
        <AppContext.Provider value={{...state, renderPage}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};


