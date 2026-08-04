/**
 * Displays a live CV preview using the current application state.
 *
 * @param {Object}   generalInfo     - { name, email, phone, location }
 * @param {Array}    educationList   - Array of education objects { id, school, title, location, dateFrom, dateTo }
 * @param {Array}    experienceList  - Array of experience objects { id, companyName, positionTitle, location, description, dateFrom, dateTo }
 */

import { MapPin, Phone, Mail, GraduationCap, Briefcase } from 'lucide-react';

function CvPreview({ generalInfo, educationList, experienceList }) {
  return (
    <div className='bg-white text-gray-900 rounded-lg shadow-2xl p-8 w-full max-w-2xl mx-auto'>
      {/* Header */}
      <h2 className='text-3xl font-bold text-center border-b-2 border-gray-300 pb-2 mb-4'>
        {generalInfo.name || 'Your Name'}
      </h2>
      <div className='flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600 mb-6'>
        {generalInfo.email && (
          <span className='flex items-center gap-1'>
            <Mail size={16} />
            {generalInfo.email}
          </span>
        )}
        {generalInfo.phone && (
          <span className='flex items-center gap-1'>
            <Phone size={16} />
            {generalInfo.phone}
          </span>
        )}
        {generalInfo.location && (
          <span className='flex items-center gap-1'>
            <MapPin size={16} />
            {generalInfo.location}
          </span>
        )}
      </div>
      {/* Education */}
      <h3 className='text-lg font-semibold uppercase tracking-wide text-gray-700 border-b border-gray-200 pb-1 mb-3 flex items-center gap-2'>
        <GraduationCap size={20} />
        Education
      </h3>
      {educationList.length === 0 && (
        <p className='text-gray-400 italic text-sm mb-4'>
          No education added yet.
        </p>
      )}
      {educationList.map((entry) => (
        <div key={entry.id} className='mb-4'>
          <div className='flex justify-between items-baseline'>
            <p className='font-semibold'>{entry.school}</p>
            <p className='text-sm text-gray-500'>
              {entry.dateFrom} — {entry.dateTo}
            </p>
          </div>
          <p className='text-gray-600'>{entry.title}</p>
          {entry.location && (
            <p className='text-sm text-gray-500'>{entry.location}</p>
          )}
        </div>
      ))}

      {/* Experience */}
      <h3 className='text-lg font-semibold uppercase tracking-wide text-gray-700 border-b border-gray-200 pb-1 mb-3 flex items-center gap-2'>
        <Briefcase size={20} />
        Experience
      </h3>
      {experienceList.length === 0 && (
        <p className='text-gray-400 italic text-sm mb-4'>
          No experience added yet.
        </p>
      )}
      {experienceList.map((entry) => (
        <div key={entry.id} className='mb-4'>
          <div className='flex justify-between items-baseline'>
            <p className='font-semibold'>{entry.companyName}</p>
            <p className='text-sm text-gray-500'>
              {entry.dateFrom} — {entry.dateTo}
            </p>
          </div>
          <p className='text-gray-600'>{entry.positionTitle}</p>
          {entry.location && (
            <p className='text-sm text-gray-500'>{entry.location}</p>
          )}
          {entry.description && (
            <p className='text-sm text-gray-600 mt-1'>{entry.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CvPreview;
