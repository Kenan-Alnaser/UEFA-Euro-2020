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
        <div>
          <h2>Group A</h2>
          {groups}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Groups;
