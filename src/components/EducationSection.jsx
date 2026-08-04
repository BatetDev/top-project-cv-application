/**
 * Renders a list of EducationItem components.
 *
 * @param {Array}    educationList - Array of education objects { id, school, title, location, dateFrom, dateTo }
 * @param {Function} onUpdate      - Called with an updated entry object
 * @param {Function} onAdd         - Creates a new blank entry
 * @param {Function} onDelete      - Called with the entry's id to remove it
 */

import EducationItem from './EducationItem';
import { GraduationCap } from 'lucide-react';

function EducationSection({ educationList, onUpdate, onAdd, onDelete }) {
  return (
    <>
      <h2 className='text-lg font-semibold mb-3 text-gray-200 flex items-center gap-2'>
        <GraduationCap size={24} />
        Education
      </h2>
      {educationList.map((entry) => (
        <EducationItem
          key={entry.id}
          data={entry}
          onSave={onUpdate}
          onDelete={onDelete}
        />
      ))}
      <button
        onClick={onAdd}
        className='w-full mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors'
      >
        + Add Education
      </button>
    </>
  );
}

export default EducationSection;
