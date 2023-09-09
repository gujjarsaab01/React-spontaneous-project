import React from 'react';

const JokeDisplay = ({ joke }) => {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-semibold mb-2'>Chuck Norris Joke</h2>
      <p className='text-gray-800'>{joke}</p>
    </div>
  );
};

export default JokeDisplay;
