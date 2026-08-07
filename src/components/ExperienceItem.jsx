/**
 * Displays and edits a single experience entry.
 *
 * @param {Object}   data   - Experience entry { id, companyName, positionTitle, location, description, dateFrom, dateTo }
 * @param {Function} onSave - Called with the updated entry on submit
 * @param {Function} onDelete - Called with the entry's id to remove it
 */
import { useState } from 'react';
import { SquarePen, Trash2, MapPin } from 'lucide-react';
import { formatDateRange } from '../utils/formatDate';

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
    <div className='card mb-4'>
      {isEditing ? (
        <div className='space-y-3'>
          <div>
            <label htmlFor={`company-${data.id}`} className='form-label'>
              Company Name
            </label>
            <input
              type='text'
              id={`company-${data.id}`}
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              placeholder='Google'
              className='form-input'
            />
          </div>

          <div>
            <label htmlFor={`position-${data.id}`} className='form-label'>
              Position Title
            </label>
            <input
              type='text'
              id={`position-${data.id}`}
              name='positionTitle'
              value={formData.positionTitle}
              onChange={handleChange}
              placeholder='Software Engineer'
              className='form-input'
            />
          </div>

          <div>
            <label htmlFor={`location-exp-${data.id}`} className='form-label'>
              Location
            </label>
            <input
              type='text'
              id={`location-exp-${data.id}`}
              name='location'
              value={formData.location}
              onChange={handleChange}
              placeholder='Mountain View, CA'
              className='form-input'
            />
          </div>

          <div>
            <label htmlFor={`description-${data.id}`} className='form-label'>
              Description
            </label>
            <textarea
              id={`description-${data.id}`}
              name='description'
              value={formData.description}
              onChange={handleChange}
              placeholder='Main responsibilities and achievements'
              rows={4}
              className='form-textarea'
            />
          </div>

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            <div>
              <label htmlFor={`dateFrom-exp-${data.id}`} className='form-label'>
                Start Date
              </label>
              <input
                type='month'
                id={`dateFrom-exp-${data.id}`}
                name='dateFrom'
                value={formData.dateFrom}
                onChange={handleChange}
                className='form-input'
              />
            </div>

            <div>
              <label htmlFor={`dateTo-exp-${data.id}`} className='form-label'>
                End Date
              </label>
              <input
                type='month'
                id={`dateTo-exp-${data.id}`}
                name='dateTo'
                value={formData.dateTo}
                onChange={handleChange}
                className='form-input'
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='space-y-2'>
          <div className='space-y-1.5'>
            <div className='flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1'>
              <p className='text-base font-semibold text-gray-100'>
                {data.companyName || 'No company set'}
              </p>
              <p className='text-sm text-gray-300 whitespace-nowrap'>
                {formatDateRange(data.dateFrom, data.dateTo, 'Present')}
              </p>
            </div>

            <div className='flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 text-sm'>
              <p className='text-gray-200 italic'>
                {data.positionTitle || 'No position set'}
              </p>

              {data.location && (
                <p className='text-gray-300 flex items-center gap-1'>
                  <MapPin size={14} />
                  {data.location}
                </p>
              )}
            </div>
          </div>

          {data.description && (
            <p className='text-sm text-gray-300 leading-relaxed whitespace-pre-line'>
              {data.description}
            </p>
          )}
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

export default ExperienceItem;
