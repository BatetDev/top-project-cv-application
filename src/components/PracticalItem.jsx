import { useState } from 'react';

/**
 * Displays and edits a single practical entry.
 *
 * @param {Object}   data   - Practical entry { id, companyName, positionTitle, responsibilities, dateFrom, dateTo }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */

function PracticalItem({ data, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(
    data.companyName === '' &&
      data.positionTitle === '' &&
      data.responsibilities === '' &&
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
          <input
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            placeholder='Company Name'
          />
          <input
            type='text'
            name='positionTitle'
            value={formData.positionTitle}
            onChange={handleChange}
            placeholder='Position Title'
          />
          <input
            type='text'
            name='responsibilities'
            value={formData.responsibilities}
            onChange={handleChange}
            placeholder='Responsibilities'
          />
          <input
            type='text'
            name='dateFrom'
            value={formData.dateFrom}
            onChange={handleChange}
            placeholder='Date From'
          />
          <input
            type='text'
            name='dateTo'
            value={formData.dateTo}
            onChange={handleChange}
            placeholder='Date To'
          />
        </>
      ) : (
        <>
          <p>{data.companyName}</p>
          <p>{data.positionTitle}</p>
          <p>{data.responsibilities}</p>
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

export default PracticalItem;
