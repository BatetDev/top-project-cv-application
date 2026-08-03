/**
 * Renders a list of PracticalItem components.
 *
 * @param {Array}    practicalList - Array of practical objects { id, companyName, positionTitle, responsibilities, dateFrom, dateTo }
 * @param {Function} onUpdate      - Called with an updated entry object
 * @param {Function} onAdd         - Creates a new blank entry
 * @param {Function} onDelete      - Called with the entry's id to remove it
 */

import PracticalItem from './PracticalItem';

function PracticalSection({ practicalList, onUpdate, onAdd, onDelete }) {
  return (
    <>
      <h2>Practical Section</h2>
      {practicalList.map((entry) => (
        <PracticalItem
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

export default PracticalSection;
