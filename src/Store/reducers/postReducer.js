const initState = {
  posts: [],
};

function postReducer(state = initState, action) {
  if (action.type === "CREATE") {
    return {
      ...state,
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === "UPDATE") {
    return {
      ...state,
      posts: state.posts.map((post) =>
        post.name === action.payload.name ? action.payload : post
      ),
    };
  } else if (action.type === "DELETE") {
    return {
      ...state,
      posts: state.posts.filter((post) => post.name !== action.payload),
    };
  } else {
    return state;
  }
}
export default postReducer;
