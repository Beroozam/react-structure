import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from 'Components/Authentication/Slice'
import dashboardSlice from 'Components/Dashboard/Slice'
import {logoutAction} from "Components/Authentication/Slice"
import {baseApi} from "Services/BaseApi";
import { isRejectedWithValue,isPending,isAsyncThunkAction,isFulfilled } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import appSlice, {backDropAction} from 'Components/Slice'
import widgetSlice from "Components/Dashboard/Setting/Slice";
import contextSlice from "Components/Dashboard/Contexts/Slice";

const authMiddleware = api  => next => action => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401) {
      api.dispatch(logoutAction());
    }else{
      toast.error(`${action.payload.status} | ${((Array.isArray(action.payload.data) || typeof action.payload.data==="object") && Object.values(action.payload.data)) || action.payload.data}`)
    }
  }
  if (isAsyncThunkAction(action)){
    // @ts-ignore
    if (action.meta.arg.endpointName!=="search") api.dispatch(backDropAction(isPending(action)))
    isFulfilled(action) && action.meta.arg.type==="mutation" && action.meta.arg?.endpointName!=="login"  && action.meta.arg?.endpointName!=="user" && setTimeout(()=>{toast.success("Done successfully.")},0)
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    widget:widgetSlice.reducer,
    authentication: authenticationSlice,
    dashboard: dashboardSlice,
    app: appSlice,
    context: contextSlice,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(authMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch