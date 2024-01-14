import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginUserRequestApi } from '../../api'
import { TUserRegister } from './registerSlice'


export type TGetUserInfo = {
    id: number
    email: string
    username: string
}

interface IUserSliceState {
    isLoggedIn: boolean
    loginRequest: boolean
    loginFailed: boolean
    loginError: boolean
    username: string
    email: string
    password: string
    isCoach: boolean,
}

const initialState: IUserSliceState = {
    username: '',
    email: '',
    password: '',
    isCoach: false,
    loginRequest: false,
    loginFailed: false,
    isLoggedIn: false,
    loginError: false,
}


export const signIn = createAsyncThunk(
    'user/signin',
    async (
        { email, password }: TUserRegister,
        { dispatch, rejectWithValue }
    ) => {
        try {
            const response = await loginUserRequestApi({
                email,
                password,
            })
            console.log(response)
            dispatch(setUserData(response))
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            Object.assign(state, {
                username: action.payload.username,
                email: action.payload.email,
                isLoggedIn: true,
                isCoach: false,
            })
        },
        logoutUser: (state) => {
            Object.assign(state, {
                loginRequest: false,
                loginFailed: false,
                isLoggedIn: false,
                loginError: false,
                isCoach: false,
            })
        },
        loginUser: (state, action) => {
            Object.assign(state, {
                username: action.payload.username,
                email: action.payload.email,
                isLoggedIn: true,
                isCoach: false,
            })
        },
    },
})

export default userSlice.reducer
export const { setUserData, logoutUser, loginUser } = userSlice.actions
