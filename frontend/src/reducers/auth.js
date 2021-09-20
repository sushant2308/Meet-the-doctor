const initialState = localStorage.getItem('token')?true:false;

const updatelogin = (state = initialState, action) => {
    if(action.type==="LOGIN") return true;
    else if(action.type==="LOGOUT") return false;
    return state;

}

export default updatelogin;