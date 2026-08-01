import { useState } from 'react';
import EducationItem from './EducationItem';

function EducationSection({ educationList }) {
  return (
    <>
      <h2>Education Section</h2>
      {educationList.map((entry) => (
        <EducationItem key={entry.id} data={entry} onSave={() => {}} />
      ))}
    </>
  );
}

export default EducationSection;
