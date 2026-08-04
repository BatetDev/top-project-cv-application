/**
 * Section for displaying and editing general CV information.
 *
 * @param {Object}   data           - The current general info { name, email, phone, location }
 * @param {Function} setGeneralInfo - Updates generalInfo state in App
 */

import { useState } from 'react';
import { User, PenSquare } from 'lucide-react';

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
    <section className='card mb-6'>
      {/* Flex container to hold Title on left and Button on right */}
      <div className='flex items-center justify-between mb-4'>
        <h2 className='section-title'>
          <User size={24} />
          Personal Details
        </h2>

        <button onClick={handleToggle} className='btn btn-primary btn-header'>
          <PenSquare size={16} />
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      {isEditing ? (
        <div className='space-y-3'>
          <div>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='John Doe'
              className='form-input'
            />
          </div>

          <div>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='john@example.com'
              className='form-input'
            />
          </div>

          <div>
            <label htmlFor='phone' className='form-label'>
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='123-456-7890'
              className='form-input'
            />
          </div>

          <div>
            <label htmlFor='location' className='form-label'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='New York, NY'
              className='form-input'
            />
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-x-6 gap-y-4 text-sm sm:grid-cols-2'>
          <div>
            <p className='field-label'>Name</p>
            <p className='field-value'>{data.name || 'No name set'}</p>
          </div>

          <div>
            <p className='field-label'>Email</p>
            <p className='field-value'>{data.email || 'No email set'}</p>
          </div>

          <div>
            <p className='field-label'>Phone</p>
            <p className='field-value'>{data.phone || 'No phone set'}</p>
          </div>

          <div>
            <p className='field-label'>Location</p>
            <p className='field-value'>{data.location || 'No location set'}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;
