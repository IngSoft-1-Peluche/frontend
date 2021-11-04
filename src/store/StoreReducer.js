
const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout'
}

const initialStore = {
    usuario : {id_usuario: null, apodo: '', creador: false },
}


const StoreReducer = (state, action) => {

    switch(action.type) {

        case types.authLogout:
            return {
                ...state,
                usuario: null
            }
        case types.authLogin:
            return {
                ...state,
                usuario: action.payload
            }


        default:
            return state;
    }

} 


export { initialStore, types }
export default StoreReducer;