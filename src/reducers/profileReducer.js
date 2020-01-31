const initialState = {
    userName: 'Denis',
    userEmail: 'den@gmail.com',
    isLogged: true,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_PROFILE':
            return Object.assign({}, state, {
                userName: '',
                userEmail: ''
            })
        default: return state
    }
}

export default profileReducer;