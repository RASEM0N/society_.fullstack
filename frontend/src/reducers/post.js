import {
    GET_POSTS,
    POST_ERROR,
    POST_LOADING,
    UPDATE_LIKES,
} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    isLoading: true,
    error: {},
};

function Post(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS: {
            return { ...state, posts: payload, isLoading: false };
        }
        case POST_ERROR: {
            return { ...state, error: payload, isLoading: false };
        }
        case POST_LOADING: {
            return { ...state, isLoading: true };
        }
        case UPDATE_LIKES: {
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === payload.postId
                        ? { ...post, likes: payload.likes }
                        : post
                ),
            };
        }

        default: {
            return state;
        }
    }
}
export default Post;
