const INITIAL_STATE = {
    profiles: [],
};
export const profilesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "profiles/add": {
            return {
                ...state,
                profiles: [...state.profiles, action.payload],
            };
        }
            case "profiles/delete": {
            return {
                ...state,
                profiles: ...state.profiles.filter(
                    (profile) => profileId !== action.payload ),
            };
        }
        default state;
}
  
}


export const addProfile = (payload) => {
    return {
        type: "profiles/add",
        payload,
    }
};
export const deleteProfile = (profileId) => {
    return {
        type: "profiles/",
        payload: profileId,
    }
};