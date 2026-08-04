/**
 * Displays and edits a single education entry.
 *
 * @param {Object}   data   - Education entry { id, school, title, location, dateFrom, dateTo }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */
import { useState } from 'react';
import { SquarePen, Trash2, MapPin } from 'lucide-react';

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
    <div className='mb-4 bg-gray-800 rounded-lg p-4 border border-gray-700'>
      {isEditing ? (
        <div className='space-y-3'>
          <div>
            <label
              htmlFor={`school-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              School
            </label>
            <input
              type='text'
              id={`school-${data.id}`}
              name='school'
              value={formData.school}
              onChange={handleChange}
              placeholder='Massachusetts Institute of Technology'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor={`title-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              Degree / Title
            </label>
            <input
              type='text'
              id={`title-${data.id}`}
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder='BSc Computer Science'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor={`location-edu-${data.id}`}
              className='block text-sm text-gray-400 mb-1'
            >
              Location
            </label>
            <input
              type='text'
              id={`location-edu-${data.id}`}
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Cambridge, MA'
              className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label
                htmlFor={`dateFrom-edu-${data.id}`}
                className='block text-sm text-gray-400 mb-1'
              >
                Start Date
              </label>
              <input
                type='month'
                id={`dateFrom-edu-${data.id}`}
                name='dateFrom'
                value={formData.dateFrom}
                onChange={handleChange}
                className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
              />
            </div>
            <div>
              <label
                htmlFor={`dateTo-edu-${data.id}`}
                className='block text-sm text-gray-400 mb-1'
              >
                End Date
              </label>
              <input
                type='month'
                id={`dateTo-edu-${data.id}`}
                name='dateTo'
                value={formData.dateTo}
                onChange={handleChange}
                className='w-full bg-gray-700 text-gray-100 rounded px-3 py-2 border border-gray-600 focus:outline-none focus:border-blue-500'
              />
            </div>
          </div>
        </div>
      ) : (
        /* --- NEW READ-ONLY LAYOUT --- */
        <div className='space-y-1.5'>
          {/* Row 1: School & Dates */}
          <div className='flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1'>
            <p className='text-base font-semibold text-gray-100'>
              {data.school || 'No school set'}
            </p>
            <p className='text-sm text-gray-400 whitespace-nowrap'>
              {data.dateFrom || 'Start'} — {data.dateTo || 'End'}
            </p>
          </div>

          {/* Row 2: Title & Location */}
          <div className='flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 text-sm'>
            <p className='text-gray-300 italic'>
              {data.title || 'No title set'}
            </p>
            {data.location && (
              <p className='text-gray-400 flex items-center gap-1'>
                <MapPin size={14} />
                {data.location}
              </p>
            )}
          </div>
        </div>
      )}

      <div className='flex gap-2 mt-4'>
        <button
          onClick={handleToggle}
          className='px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors flex items-center gap-1.5'
        >
          <SquarePen size={16} />
          {isEditing ? 'Save' : 'Edit'}
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

export default EducationItem;
