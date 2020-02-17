const initialState={
    loaderIsActive:false,
    spinnerIsActive:false,
}


const loaders = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE_LOADER_STATE':
            return { ...state,
                loaderIsActive: !state.loaderIsActive
            }
        case 'CHANGE_SPINNER_STATE':
            return { ...state,
                spinnerIsActive: !state.spinnerIsActive
            }
        default: return state
    }
}


export default loaders