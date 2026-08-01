/**
 * Renders a list of EducationItem components.
 *
 * @param {Array}    educationList - Array of education objects { id, school, title, date }
 * @param {Function} onUpdate      - Called with an updated entry object
 */

import { useState } from 'react';
import EducationItem from './EducationItem';

function EducationSection({ educationList, onUpdate }) {
  return (
    <>
      <h2>Education Section</h2>
      {educationList.map((entry) => (
        <EducationItem key={entry.id} data={entry} onSave={onUpdate} />
      ))}
    </>
  );
}

export default EducationSection;
