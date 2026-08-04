/**
 * Renders a list of ExperienceItem components.
 *
 * @param {Array}    experienceList - Array of experience objects { id, companyName, positionTitle, location, description, dateFrom, dateTo }
 * @param {Function} onUpdate      - Called with an updated entry object
 * @param {Function} onAdd         - Creates a new blank entry
 * @param {Function} onDelete      - Called with the entry's id to remove it
 */

import ExperienceItem from './ExperienceItem';
import { Briefcase } from 'lucide-react';

function ExperienceSection({ experienceList, onUpdate, onAdd, onDelete }) {
  return (
    <section className='mb-6'>
      <h2 className='section-title mb-3'>
        <Briefcase size={24} />
        Experience
      </h2>

      {experienceList.map((entry) => (
        <ExperienceItem
          key={entry.id}
          data={entry}
          onSave={onUpdate}
          onDelete={onDelete}
        />
      ))}

      <button onClick={onAdd} className='btn btn-add btn-block'>
        + Add Experience
      </button>
    </section>
  );
}

export default ExperienceSection;
