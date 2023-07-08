"useClient"
import React, { useState } from 'react';

const LikeDislikeComponent = () => {
  const [count, setCount] = useState(0);

  const like = () => {
    setCount(count + 1);
  };

  const dislike = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={like}>like</button>
      <button onClick={dislike}>dislike</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default LikeDislikeComponent;
