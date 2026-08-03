/**
 * Renders a list of ExperienceItem components.
 *
 * @param {Array}    experienceList - Array of experience objects { id, companyName, positionTitle, location, description, dateFrom, dateTo }
 * @param {Function} onUpdate      - Called with an updated entry object
 * @param {Function} onAdd         - Creates a new blank entry
 * @param {Function} onDelete      - Called with the entry's id to remove it
 */

import ExperienceItem from './ExperienceItem';

function ExperienceSection({ experienceList, onUpdate, onAdd, onDelete }) {
  return (
    <>
      <h2>Experience Section</h2>
      {experienceList.map((entry) => (
        <ExperienceItem
          key={entry.id}
          data={entry}
          onSave={onUpdate}
          onDelete={onDelete}
        />
      ))}
      <button onClick={onAdd}>Add Experience</button>
    </>
  );
}

export default ExperienceSection;
