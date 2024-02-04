import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTweet } from '../redux/actions';

const Timeline = () => {
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();
  const [tweetText, setTweetText] = useState('');

  const handleAddTweet = () => {
    // Basic validation, you might want to add more checks
    if (tweetText.trim() !== '') {
      const newTweet = {
        id: tweets.length + 1,
        userId: user,
        text: tweetText,
        timestamp: new Date().toLocaleString(),
      };

      dispatch(addTweet(newTweet));
      setTweetText('');
    }
  };

  return (
    <div>
      <h1>Timeline</h1>
      <p>Welcome, {user}!</p>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="What's happening?"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        ></textarea>
        <br />
        <button onClick={handleAddTweet}>Tweet</button>
      </div>
      <div>
        <h2>Tweets</h2>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <p>{tweet.text}</p>
            <p>Posted by: {tweet.userId}</p>
            <p>Timestamp: {tweet.timestamp}</p>
            {/* Add Edit and Delete buttons with appropriate functionalities */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
