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
    <section className='mb-6'>
      <h2 className='section-title mb-3'>
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

      <button onClick={onAdd} className='btn btn-add btn-block'>
        + Add Education
      </button>
    </section>
  );
}

export default EducationSection;
