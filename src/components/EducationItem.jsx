/**
 * Displays and edits a single education entry.
 *
 * @param {Object}   data   - Education entry { id, school, title, location, dateFrom, dateTo }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */
import { useState } from 'react';
import { SquarePen, Trash2, MapPin } from 'lucide-react';
import { formatDateRange } from '../utils/formatDate';

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
    <div className='card mb-4'>
      {isEditing ? (
        <div className='space-y-3'>
          <div>
            <label htmlFor={`school-${data.id}`} className='form-label'>
              School
            </label>
            <input
              type='text'
              id={`school-${data.id}`}
              name='school'
              value={formData.school}
              onChange={handleChange}
              placeholder='Massachusetts Institute of Technology'
              className='form-input'
            />
          </div>
          <div>
            <label htmlFor={`title-${data.id}`} className='form-label'>
              Degree / Title
            </label>
            <input
              type='text'
              id={`title-${data.id}`}
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder='BSc Computer Science'
              className='form-input'
            />
          </div>
          <div>
            <label htmlFor={`location-edu-${data.id}`} className='form-label'>
              Location
            </label>
            <input
              type='text'
              id={`location-edu-${data.id}`}
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Cambridge, MA'
              className='form-input'
            />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label htmlFor={`dateFrom-edu-${data.id}`} className='form-label'>
                Start Date
              </label>
              <input
                type='month'
                id={`dateFrom-edu-${data.id}`}
                name='dateFrom'
                value={formData.dateFrom}
                onChange={handleChange}
                className='form-input'
              />
            </div>
            <div>
              <label htmlFor={`dateTo-edu-${data.id}`} className='form-label'>
                End Date
              </label>
              <input
                type='month'
                id={`dateTo-edu-${data.id}`}
                name='dateTo'
                value={formData.dateTo}
                onChange={handleChange}
                className='form-input'
              />
            </div>
          </div>
        </div>
      ) : (
        /* --- READ-ONLY LAYOUT --- */
        <div className='space-y-1.5'>
          {/* Row 1: School & Dates */}
          <div className='flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1'>
            <p className='text-base font-semibold text-gray-100'>
              {data.school || 'No school set'}
            </p>
            <p className='text-sm text-gray-400 whitespace-nowrap'>
              {formatDateRange(data.dateFrom, data.dateTo, 'End')}
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
        <button onClick={handleToggle} className='btn btn-item btn-primary'>
          <SquarePen size={16} />
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => onDelete(data.id)}
          className='btn btn-item btn-danger'
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default EducationItem;
