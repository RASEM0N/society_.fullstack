import {
    CLEAR_PROFILE,
    GET_PROFILE,
    GET_PROFILES,
    GET_REPOS,
    LOAD_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
} from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {},
};

function profile(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PROFILE:
        case GET_PROFILE: {
            return { ...state, profile: payload, loading: false };
        }
        case GET_PROFILES: {
            return { ...state, profiles: payload, loading: false };
        }
        case GET_REPOS: {
            return { ...state, repos: payload, loading: false };
        }

        case PROFILE_ERROR: {
            return { ...state, error: payload, loading: false };
        }
        case CLEAR_PROFILE: {
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false,
            };
        }
        case LOAD_PROFILE: {
            return { ...state, loading: true };
        }

        default: {
            return state;
        }
    }
}

export default profile;
