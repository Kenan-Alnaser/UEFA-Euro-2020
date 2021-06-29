import React from 'react';

const Groups = ({ groups }) => {
  return (
    <React.Fragment>
      <div>
        <div>
          <h1>GROUPS</h1>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
        <div>{groups}</div>
      </div>
    </React.Fragment>
  );
};

export default Groups;
