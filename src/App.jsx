import './App.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';

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
    <>
      <h1>Project CV Application</h1>
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
    </>
  );
}

export default App;
