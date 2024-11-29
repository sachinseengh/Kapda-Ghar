import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER__FAILURE, GET_USER__REQUEST, GET_USER__SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = () => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = () => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {

    dispatch(registerRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)


        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }

        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}

const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = () => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = () => ({ type: LOGIN_FAILURE, payload: error })

export const login = (userData) => async (dispatch) => {

    dispatch(loginRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)


        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }


        dispatch(loginSuccess(user.jwt))
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}

const getUserRequest = () => ({ type: GET_USER__REQUEST })
const getUserSuccess = () => ({ type: GET_USER__SUCCESS, payload: user })
const getUserFailure = () => ({ type: GET_USER__FAILURE, payload: error })

export const getUser = () => async (dispatch) => {

    dispatch(getUserRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/profile`, {
            header: {
                "Authorization": `Bearer ${token}`
            }
        })

        const user = response.data;

        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}


export const logout = () => (dispatch) => {

    dispatch({ type: LOGOUT, payload: null })

}