import React from 'react';
import Group from '../../groups.json';

const Groups = ({ listGroups }) => {
  const groupName = Group.map((obj) => {
    const { group } = obj;
    if (group === 'Group A') {
      return <h2>{group}</h2>;
    }
  });
  // groupName.filter((el) => {
  //   return el;
  // });

  return (
    <React.Fragment>
      <div>
        <div>
          <h1>GROUPS</h1>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
        <h2>{groupName}</h2>
        <ul>{listGroups}</ul>
      </div>
    </React.Fragment>
  );
};

export default Groups;
