import { useState } from 'react';

/**
 * Displays and edits a single experience entry.
 *
 * @param {Object}   data   - Experience entry { id, companyName, positionTitle, location, description, dateFrom, dateTo }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */

function ExperienceItem({ data, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(
    data.companyName === '' &&
      data.positionTitle === '' &&
      data.location === '' &&
      data.description === '' &&
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
          <label htmlFor={`company-${data.id}`}>Company Name</label>
          <input
            type='text'
            id={`company-${data.id}`}
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            placeholder='Google'
          />

          <label htmlFor={`position-${data.id}`}>Position Title</label>
          <input
            type='text'
            id={`position-${data.id}`}
            name='positionTitle'
            value={formData.positionTitle}
            onChange={handleChange}
            placeholder='Software Engineer'
          />

          <label htmlFor={`location-exp-${data.id}`}>Location</label>
          <input
            type='text'
            id={`location-exp-${data.id}`}
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='Mountain View, CA'
          />

          <label htmlFor={`description-${data.id}`}>Description</label>
          <textarea
            id={`description-${data.id}`}
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Main responsibilities and achievements'
            rows={4}
          />

          <label htmlFor={`dateFrom-exp-${data.id}`}>Start Date</label>
          <input
            type='month'
            id={`dateFrom-exp-${data.id}`}
            name='dateFrom'
            value={formData.dateFrom}
            onChange={handleChange}
          />

          <label htmlFor={`dateTo-exp-${data.id}`}>End Date</label>
          <input
            type='month'
            id={`dateTo-exp-${data.id}`}
            name='dateTo'
            value={formData.dateTo}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p>{data.companyName}</p>
          <p>{data.location}</p>
          <p>{data.positionTitle}</p>
          <p>{data.description}</p>
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

export default ExperienceItem;
