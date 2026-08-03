/**
 * Displays and edits a single education entry.
 *
 * @param {Object}   data   - Education entry { id, school, title, location, dateFrom, dateTo }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */

import { useState } from 'react';

function EducationItem({ data, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(
    data.school === '' &&
      data.title === '' &&
      data.location === '' &&
      data.dateFrom === '' &&
      data.dateTo === '',
  );
  const [formData, setFormData] = useState({ ...data });

  const handleToggle = () => {
    if (isEditing) {
      onSave(formData);
    }
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {isEditing ? (
        <>
          <label htmlFor={`school-${data.id}`}>School</label>
          <input
            type='text'
            id={`school-${data.id}`}
            name='school'
            value={formData.school}
            onChange={handleChange}
            placeholder='Massachusetts Institute of Technology'
          />

          <label htmlFor={`title-${data.id}`}>Degree / Title of Study</label>
          <input
            type='text'
            id={`title-${data.id}`}
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='BSc Computer Science'
          />

          <label htmlFor={`location-edu-${data.id}`}>Location</label>
          <input
            type='text'
            id={`location-edu-${data.id}`}
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='Cambridge, MA'
          />

          <label htmlFor={`dateFrom-edu-${data.id}`}>Start Date</label>
          <input
            type='month'
            id={`dateFrom-edu-${data.id}`}
            name='dateFrom'
            value={formData.dateFrom}
            onChange={handleChange}
          />

          <label htmlFor={`dateTo-edu-${data.id}`}>End Date</label>
          <input
            type='month'
            id={`dateTo-edu-${data.id}`}
            name='dateTo'
            value={formData.dateTo}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p>{data.school}</p>
          <p>{data.location}</p>
          <p>{data.title}</p>
          <p>
            {data.dateFrom} — {data.dateTo}
          </p>
        </>
      )}

      <button onClick={handleToggle}>{isEditing ? 'Submit' : 'Edit'}</button>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </>
  );
}

export default EducationItem;
