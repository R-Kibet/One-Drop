import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./userSlice"
import productSlideRed from "./productSlide"

export const store = configureStore({
    reducer: { 
        user: userSliceReducer,
        product : productSlideRed
    }
  })