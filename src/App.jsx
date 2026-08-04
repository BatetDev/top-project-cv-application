import './App.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import CvPreview from './components/CvPreview';
import { Printer, FileText } from 'lucide-react';

/**
 * Root component. Owns all CV state:
 *   - generalInfo
 *   - educationList
 *   - experienceList
 */

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

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
      <div className='editor-panel w-full border-b border-gray-700 p-4 sm:p-6 lg:w-[30%] lg:min-h-0 lg:overflow-y-auto lg:border-b-0 lg:border-r'>
        <h1 className='mb-6 flex items-center gap-2 text-2xl font-bold'>
          <FileText size={26} className='text-indigo-300' aria-hidden='true' />
          CV Application
        </h1>

        <GeneralInfo data={generalInfo} setGeneralInfo={setGeneralInfo} />

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

      {/* Preview Panel */}
      <div className='preview-panel flex w-full items-start justify-center p-4 sm:p-6 lg:w-[70%] lg:min-h-0 lg:overflow-y-auto'>
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
      </div>
    </div>
  );
}

export default App;
