import React from 'react';
// import Group from '../../groups.json';
import TeamGroup from '../Group/TeamGroup';

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
        <div>
          <h2>Group A</h2>
          <TeamGroup group="Group A" />
        </div>
        <div>
          <h2>Group B</h2>
          <TeamGroup group="Group B" />
        </div>
        <div>
          <h2>Group C</h2>
          <TeamGroup group="Group C" />
        </div>
        <div>
          <h2>Group D</h2>
          <TeamGroup group="Group D" />
        </div>
        <div>
          <h2>Group E</h2>
          <TeamGroup group="Group E" />
        </div>

        <div>
          <h2>Group F</h2>
          <TeamGroup group="Group F" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Groups;
