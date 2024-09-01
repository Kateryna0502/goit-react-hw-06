import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    profiles: [],
};

const profileSlice = createSlice({
    name: "profiles",
    initialState: INITIAL_STATE,
    reducers: {
        addProfile: (state, action) => {
            state.profiles.push(action.payload);
        },
        deleteProfile: (state, action) => {
            state.profiles = state.profiles.filter((profile) => profile.id !== action.payload);
        },
    },

});


export const profilesReducer = profileSlice.reducer;
export const { addProfile, deleteProfile } = profileSlice.actions;
    
    
//     (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case "profiles/add": {
//             return {
//                 ...state,
//                 profiles: [...state.profiles, action.payload],
//             };
//         }
//             case "profiles/delete": {
//             return {
//                 ...state,
//                 profiles: ...state.profiles.filter(
//                     (profile) => profileId !== action.payload ),
//             };
//         }
//         default: state;
// }
  
// }


// export const addProfile = (payload) => {
//     return {
//         type: "profiles/add",
//         payload,
//     }
// };
// export const deleteProfile = (profileId) => {
//     return {
//         type: "profiles/",
//         payload: profileId,
//     }
// };