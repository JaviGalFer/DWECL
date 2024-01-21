import React from 'react';
import { SkillList } from './SkillList';
import { Intro } from './Intro';


export function Data() {
  const title = 'CARD 1';
  const description = 'Sint aliquip proident nostrud do officia. Qui ipsum irure aliqua velit tempor pariatur quis in nisi occaecat. Est id incididunt qui duis reprehenderit proident excepteur eu velit culpa magna. Ad deserunt deserunt culpa anim dolore aliquip. Proident ullamco esse sunt proident consectetur pariatur occaecat sit magna. Sit enim mollit ea ad.';

  return (
    <div className='data'>
      <Intro title={title} description={description} />
      <SkillList />
    </div>
  );
}
