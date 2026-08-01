/**
 * Section for displaying and editing general CV information.
 *
 * @param {Object}   data           - The current general info { name, email, phone }
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
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </>
      )}

      <button onClick={handleToggle}>{isEditing ? 'Submit' : 'Edit'}</button>
    </>
  );
}

export default GeneralInfo;
