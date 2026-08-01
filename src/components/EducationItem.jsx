/**
 * Displays and edits a single education entry.
 *
 * @param {Object}   data   - Education entry { id, school, title, date }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */

import { useState } from 'react';

function EducationItem({ data, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(
    data.school === '' && data.title === '' && data.date === '',
  );
  const [formData, setFormData] = useState({ ...data });

  const handleToggle = () => {
    if (isEditing) {
      onSave(formData);
    }
    setIsEditing((prevState) => !prevState);
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
          <input
            type='text'
            name='school'
            value={formData.school}
            onChange={handleChange}
          />
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type='text'
            name='date'
            value={formData.date}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p>{data.school}</p>
          <p>{data.title}</p>
          <p>{data.date}</p>
        </>
      )}

      <button onClick={handleToggle}>{isEditing ? 'Submit' : 'Edit'}</button>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </>
  );
}

export default EducationItem;
