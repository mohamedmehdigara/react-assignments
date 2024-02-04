export const loginUser = (username) => ({
    type: 'LOGIN_USER',
    payload: { username },
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  
  export const addTweet = (tweet) => ({
    type: 'ADD_TWEET',
    payload: tweet,
  });
  
  export const editTweet = (tweet) => ({
    type: 'EDIT_TWEET',
    payload: tweet,
  });
  
  export const deleteTweet = (tweetId) => ({
    type: 'DELETE_TWEET',
    payload: tweetId,
  });
  