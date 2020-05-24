import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

export const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //response.data is the list of users
                const usersData = response.data
                dispatch(fetchUsersSuccess(usersData))
            }).catch(error => {
                //Error.Message is the error description
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}