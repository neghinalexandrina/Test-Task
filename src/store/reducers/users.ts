import { REGISTER_USER, LOGIN, LOGOUT } from "../actions/users"

const initialStore = {
    users: [],
    currentUser: null
}

const usersReducer = (state = initialStore, action: any) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: null
            }
      default:
        return state
    }
  }

  export default usersReducer