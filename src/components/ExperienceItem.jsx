/**
 * Displays and edits a single experience entry.
 *
 * @param {Object}   data   - Experience entry { id, companyName, positionTitle, location, description, dateFrom, dateTo }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */

import { useState } from 'react';
import { SquarePen, Trash2 } from 'lucide-react';

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
    <div className='mb-4 bg-gray-800 rounded-lg p-4 border border-gray-700'>
      {isEditing ? (
        <div className='space-y-3'>
          <div>
            <label
              htmlFor={`company-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              Company Name
            </label>
            <input
              type='text'
              id={`company-${data.id}`}
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              placeholder='Google'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor={`position-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              Position Title
            </label>
            <input
              type='text'
              id={`position-${data.id}`}
              name='positionTitle'
              value={formData.positionTitle}
              onChange={handleChange}
              placeholder='Software Engineer'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor={`location-exp-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              Location
            </label>
            <input
              type='text'
              id={`location-exp-${data.id}`}
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Mountain View, CA'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor={`description-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              Description
            </label>
            <textarea
              id={`description-${data.id}`}
              name='description'
              value={formData.description}
              onChange={handleChange}
              placeholder='Main responsibilities and achievements'
              rows={4}
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500 resize-none'
            />
          </div>
          <div>
            <label
              htmlFor={`dateFrom-exp-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              Start Date
            </label>
            <input
              type='month'
              id={`dateFrom-exp-${data.id}`}
              name='dateFrom'
              value={formData.dateFrom}
              onChange={handleChange}
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor={`dateTo-exp-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              End Date
            </label>
            <input
              type='month'
              id={`dateTo-exp-${data.id}`}
              name='dateTo'
              value={formData.dateTo}
              onChange={handleChange}
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
        </div>
      ) : (
        <div className='text-gray-400 text-sm space-y-0.5'>
          <p className='text-gray-200 font-medium'>
            {data.companyName || 'No company set'}
          </p>
          <p>{data.positionTitle || 'No position set'}</p>
          {data.location && <p>{data.location}</p>}
          {data.description && (
            <p className='text-gray-500'>{data.description}</p>
          )}
          <p className='text-gray-500'>
            {data.dateFrom} — {data.dateTo}
          </p>
        </div>
      )}

      <div className='flex gap-2 mt-3'>
        <button
          onClick={handleToggle}
          className='px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors flex items-center gap-1.5'
        >
          <SquarePen size={16} />
          {isEditing ? 'Submit' : 'Edit'}
        </button>
        <button
          onClick={() => onDelete(data.id)}
          className='px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors flex items-center gap-1.5'
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExperienceItem;
