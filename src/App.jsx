import './styles/app.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import CvPreview from './components/CvPreview';
import { Printer, FileText, Eraser, CodeXml } from 'lucide-react';

/**
 * Root component. Owns all CV state:
 *   - generalInfo
 *   - educationList
 *   - experienceList
 */

const sampleGeneralInfo = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
};

const sampleEducation = [
  {
    id: crypto.randomUUID(),
    school: 'University of California, Berkeley',
    title: 'BSc Computer Science',
    location: 'Berkeley, CA',
    dateFrom: '2016-08',
    dateTo: '2020-05',
  },
  {
    id: crypto.randomUUID(),
    school: 'Stanford University',
    title: 'MSc Software Engineering',
    location: 'Stanford, CA',
    dateFrom: '2020-09',
    dateTo: '2022-06',
  },
];

const sampleExperience = [
  {
    id: crypto.randomUUID(),
    companyName: 'Tech Solutions Inc.',
    positionTitle: 'Frontend Developer',
    location: 'San Francisco, CA',
    description:
      'Built and maintained responsive web applications using React. Collaborated with designers to improve the UI and cut page load times by 30%.',
    dateFrom: '2022-07',
    dateTo: '2024-03',
  },
  {
    id: crypto.randomUUID(),
    companyName: 'Innovate Labs',
    positionTitle: 'Full Stack Developer',
    location: 'Remote',
    description:
      'Developed REST APIs and integrated third-party services. Mentored junior developers and led code reviews across the team.',
    dateFrom: '2024-04',
    dateTo: '',
  },
];

const emptyGeneralInfo = {
  name: '',
  email: '',
  phone: '',
  location: '',
};

function App() {
  const [generalInfo, setGeneralInfo] = useState(sampleGeneralInfo);
  const [educationList, setEducationList] = useState(sampleEducation);
  const [experienceList, setExperienceList] = useState(sampleExperience);
  const [formResetKey, setFormResetKey] = useState(0);

  const handleClearAll = () => {
    setGeneralInfo(emptyGeneralInfo);
    setEducationList([]);
    setExperienceList([]);
    setFormResetKey((prev) => prev + 1);
  };

  const handleEducationUpdate = (updatedEntry) => {
    const updatedList = educationList.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });
    setEducationList(updatedList);
  };

  const handleEducationAdd = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      school: '',
      title: '',
      location: '',
      dateFrom: '',
      dateTo: '',
    };
    setEducationList([...educationList, newEntry]);
  };

  const handleEducationDelete = (id) => {
    setEducationList(educationList.filter((entry) => entry.id !== id));
  };

  const handleExperienceUpdate = (updatedEntry) => {
    const updatedList = experienceList.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });
    setExperienceList(updatedList);
  };

  const handleExperienceAdd = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      companyName: '',
      positionTitle: '',
      location: '',
      description: '',
      dateFrom: '',
      dateTo: '',
    };

    setExperienceList([...experienceList, newEntry]);
  };

  const handleExperienceDelete = (id) => {
    setExperienceList(experienceList.filter((entry) => entry.id !== id));
  };

  return (
    <div className='app-shell flex min-h-screen flex-col bg-gray-900 text-gray-100 lg:h-screen lg:flex-row lg:overflow-hidden'>
      {/* Editor Panel */}
      <div className='editor-panel flex flex-col w-full border-b border-gray-700 p-4 sm:p-6 lg:w-[30%] lg:min-h-0 lg:overflow-y-auto lg:border-b-0 lg:border-r'>
        {/* Header */}
        <div className='mb-6 flex items-center justify-between gap-4'>
          <h1 className='flex items-center gap-2 text-2xl font-bold'>
            <FileText
              size={26}
              className='text-indigo-300'
              aria-hidden='true'
            />
            CV Application
          </h1>

          <button
            onClick={handleClearAll}
            className='btn btn-danger btn-header'
          >
            <Eraser size={16} />
            Clear CV
          </button>
        </div>

        {/* Form Content (flex-1 pushes the footer down) */}
        <div className='flex-1'>
          <GeneralInfo
            key={formResetKey}
            data={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />

          <EducationSection
            educationList={educationList}
            onUpdate={handleEducationUpdate}
            onAdd={handleEducationAdd}
            onDelete={handleEducationDelete}
          />

          <ExperienceSection
            experienceList={experienceList}
            onUpdate={handleExperienceUpdate}
            onAdd={handleExperienceAdd}
            onDelete={handleExperienceDelete}
          />
        </div>

        {/* Footer */}
        <footer className='mt-8 border-t border-gray-800 pt-4 text-center text-sm text-emerald-500 print:hidden'>
          <a
            href='https://github.com/BatetDev/top-project-cv-application'
            className='inline-flex items-center justify-center gap-2 transition-colors hover:text-emerald-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='font-medium'>BatetDev</span>
            <CodeXml size={18} />
          </a>
        </footer>
      </div>

      {/* Preview Panel */}
      <main className='preview-panel flex w-full items-start justify-center p-4 sm:p-6 lg:w-[70%] lg:min-h-0 lg:overflow-y-auto'>
        <div className='print-content w-full max-w-3xl pb-10 sm:pb-12 lg:pb-16'>
          <div className='print-toolbar mb-4 flex justify-end'>
            <button
              onClick={() => window.print()}
              className='flex items-center gap-2 rounded border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-gray-100 transition-colors hover:bg-gray-600'
            >
              <Printer size={16} />
              Print / Save PDF
            </button>
          </div>

          <CvPreview
            generalInfo={generalInfo}
            educationList={educationList}
            experienceList={experienceList}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
