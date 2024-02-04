const initialState = {
    user: null,
    tweets: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return { ...state, user: action.payload.username };
  
      case 'LOGOUT_USER':
        return { ...state, user: null };
  
      case 'ADD_TWEET':
        return { ...state, tweets: [...state.tweets, action.payload] };
  
      case 'EDIT_TWEET':
        return {
          ...state,
          tweets: state.tweets.map((tweet) =>
            tweet.id === action.payload.id ? action.payload : tweet
          ),
        };
  
      case 'DELETE_TWEET':
        return {
          ...state,
          tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  