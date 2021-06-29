import React from 'react';
// import Group from '../../groups.json';

const Groups = ({ groups }) => {
  // const groupName = Group.map((obj) => {
  //   const { group } = obj;
  //   // return group.filter((el) => {
  //   if (group === 'Group A') {
  //     return <h2>{group}</h2>;
  //   }
  //   //});
  // });
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
        <h2>Group A</h2>
        {groups}
      </div>
    </React.Fragment>
  );
};

export default Groups;
