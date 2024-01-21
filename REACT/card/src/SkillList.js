import React from 'react';
import { SKILLS } from '.';
import { Skill } from './Skill';


export function SkillList() {
  return (
    <div className='skill-list'>
      {SKILLS.length > 0 ?
        SKILLS.map((item_skill) => <Skill objeto_skill={item_skill} />)
        :
        <p>No skills</p>}
    </div>
  );
}
