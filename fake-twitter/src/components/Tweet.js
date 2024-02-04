import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Tweet = () => {
  const { tweetId } = useParams();
  const tweets = useSelector((state) => state.tweets);

  const tweet = tweets.find((t) => t.id === parseInt(tweetId));

  if (!tweet) {
    return <div>Tweet not found!</div>;
  }

  return (
    <div>
      <h1>Tweet Details</h1>
      <p>ID: {tweet.id}</p>
      <p>Text: {tweet.text}</p>
      <p>Posted by: {tweet.userId}</p>
      <p>Timestamp: {tweet.timestamp}</p>
    </div>
  );
};

export default Tweet;
