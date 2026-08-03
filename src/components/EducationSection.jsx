/**
 * Renders a list of EducationItem components.
 *
 * @param {Array}    educationList - Array of education objects { id, school, title, location, dateFrom, dateTo }
 * @param {Function} onUpdate      - Called with an updated entry object
 * @param {Function} onAdd         - Creates a new blank entry
 * @param {Function} onDelete      - Called with the entry's id to remove it
 */

import EducationItem from './EducationItem';

function EducationSection({ educationList, onUpdate, onAdd, onDelete }) {
  return (
    <>
      <h2>Education Section</h2>
      {educationList.map((entry) => (
        <EducationItem
          key={entry.id}
          data={entry}
          onSave={onUpdate}
          onDelete={onDelete}
        />
      ))}
      <button onClick={onAdd}>Add Education</button>
    </>
  );
}

export default EducationSection;
