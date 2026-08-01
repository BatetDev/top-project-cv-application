import { useState } from 'react';

function EducationSection({ educationList }) {
  return (
    <>
      <h2>Education Section</h2>
      {educationList.map((entry) => (
        <div key={entry.id}>
          <p>{entry.school}</p>
          <p>{entry.title}</p>
          <p>{entry.date}</p>
        </div>
      ))}
    </>
  );
}

export default EducationSection;
