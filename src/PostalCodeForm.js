import React, { useState } from 'react';

const PostalCodeForm = ({ onSubmit, onClear }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
  };

  const handleClear = () => {
    setPostalCode('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Postal Code:
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default PostalCodeForm;
