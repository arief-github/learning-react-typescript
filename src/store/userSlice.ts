import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api/authenticate";

type State = {
    user: undefined | User,
    permissions: undefined | string[],
    loading: boolean
}
  
const initialState: State = {
    user: undefined,
    permissions: undefined,
    loading: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authenticateAction: (state) => {
            state.loading = true
        },
        authenticatedAction: (state, action:PayloadAction<User | undefined>) => {
            state.loading = false
            state.user = action.payload
        },
        authorizeAction: (state) => {
            state.loading = true
        },
        authorizedAction: (state, action:PayloadAction<string[]>) => {
            state.loading = false
            state.permissions = action.payload
        }
    }
})

export const { authenticateAction, authenticatedAction, authorizeAction, authorizedAction } = userSlice.actions

export default userSlice.reducer