/**
 * Section for displaying and editing general CV information.
 *
 * @param {Object}   data           - The current general info { name, email, phone, location }
 * @param {Function} setGeneralInfo - Updates generalInfo state in App
 */

import { useState } from 'react';

function GeneralInfo({ data, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...data });

  const handleToggle = () => {
    if (isEditing) {
      setGeneralInfo(formData);
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
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='John Doe'
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='john@example.com'
          />

          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='123-456-7890'
          />

          <label htmlFor='location'>Location</label>
          <input
            type='text'
            id='location'
            name='location'
            value={formData.location}
            onChange={handleChange}
            placeholder='New York, NY'
          />
        </>
      ) : (
        <>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.location}</p>
        </>
      )}

      <button onClick={handleToggle}>{isEditing ? 'Submit' : 'Edit'}</button>
    </>
  );
}

export default GeneralInfo;
