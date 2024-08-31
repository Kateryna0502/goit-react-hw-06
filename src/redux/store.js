import { configureStore } from "@reduxjs/toolkit";
import { profilesReducer } from "./profiles/profileReducer";

export const store = configureStore({
    reducer: {
        profiles: profilesReducer
    },
});