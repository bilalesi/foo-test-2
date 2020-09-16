import React, { createContext, useContext, useReducer } from 'react';
const DISPLAY_SUB_MENU_LEFT = 'DISPLAY_SUB_MENU_LEFT';


const displaySubMenuLeftAction = (change) =>{
    return {
        type: DISPLAY_SUB_MENU_LEFT,
        payload: change
    }
}

const defaultState = {
    displaySubMenuLeft: false,
}

const StateReducer = ( state = defaultState , action) => {
    switch(action.type){       
        case DISPLAY_SUB_MENU_LEFT:
            return{
                ...state,
                displaySubMenuLeft: typeof action.payload !== 'undefined' ? action.payload : !state.displaySubMenuLeft
            }
    }
}

const HeaderDispatchContext = createContext();
const HeaderStateContext = createContext();

const HeaderContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StateReducer, defaultState)
    return(
        <HeaderDispatchContext.Provider value={dispatch}>
            <HeaderStateContext.Provider value={state}>
                { children }
            </HeaderStateContext.Provider>
        </HeaderDispatchContext.Provider>
    )
}

const useDispatchHeaderContext = () => {
    const context = useContext(HeaderDispatchContext);
    if(context === undefined)
        throw new Error('useDispatchHeaderContext must be used within the HeaderProvider')
    return context;    
}

const useStateHeaderContext = () => {
    const context = useContext(HeaderStateContext);
    if(context === undefined)
        throw new Error('useStateHeaderContext must be used within the HeaderProvider')
    return context;    
}

export {
    HeaderContextProvider,
    useDispatchHeaderContext,
    useStateHeaderContext,
    displaySubMenuLeftAction
}