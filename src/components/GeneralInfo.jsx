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
    <section className='mb-6 bg-gray-800 rounded-lg p-4 border border-gray-700'>
      <h2 className='text-lg font-semibold mb-3 text-gray-200 flex items-center gap-2'>
        <User size={24} />
        Personal Details
      </h2>

      {isEditing ? (
        <div className='space-y-3'>
          <div>
            <label htmlFor='name' className='block text-sm text-gray-400 mb-1'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='John Doe'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm text-gray-400 mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='john@example.com'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label htmlFor='phone' className='block text-sm text-gray-400 mb-1'>
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='123-456-7890'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor='location'
              className='block text-sm text-gray-400 mb-1'
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='New York, NY'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
        </div>
      ) : (
        <div className='text-gray-400 text-sm space-y-1'>
          <p>{data.name || 'No name set'}</p>
          <p>{data.email || 'No email set'}</p>
          <p>{data.phone || 'No phone set'}</p>
          <p>{data.location || 'No location set'}</p>
        </div>
      )}

      <button
        onClick={handleToggle}
        className='mt-3 px-4 py-1.5 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors'
      >
        <PenSquare size={16} />
        {isEditing ? 'Submit' : 'Edit'}
      </button>
    </section>
  );
}

export default GeneralInfo;
