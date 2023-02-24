const reducer = (state, action)=>{
    switch(action.type){
        case "RENDER_PAGE" :
            return {
                ...state,
                menu :  action.payload
            } 
    }
    return state;
}

export default reducer;