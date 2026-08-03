import './App.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';
import PracticalSection from './components/PracticalSection';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  });
  const [educationList, setEducationList] = useState([
    { id: 1, school: 'MIT', title: 'BSc Computer Science', date: '2018-2022' },
    {
      id: 2,
      school: 'Harvard',
      title: 'MSc Machine Learning',
      date: '2022-2024',
    },
  ]);
  const [practicalList, setPracticalList] = useState([
    {
      id: 1,
      companyName: 'IBM',
      positionTitle: 'Assistant',
      responsibilities: 'coding',
      dateFrom: '2024',
      dateTo: '2025',
    },
    {
      id: 2,
      companyName: 'Youtube',
      positionTitle: 'Back End',
      responsibilities: 'Server upkeep',
      dateFrom: '2025',
      dateTo: '2026',
    },
  ]);
  console.log('App render - practicalList:', practicalList);

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
      date: '',
    };
    setEducationList([...educationList, newEntry]);
  };

  const handleEducationDelete = (id) => {
    setEducationList(educationList.filter((entry) => entry.id !== id));
  };

  const handlePracticalUpdate = (updatedEntry) => {
    const updatedList = practicalList.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      }
      return entry;
    });
    setPracticalList(updatedList);
  };

  const handlePracticalAdd = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateTo: '',
    };

    setPracticalList([...practicalList, newEntry]);
  };

  const handlePracticalDelete = (id) => {
    setPracticalList(practicalList.filter((entry) => entry.id !== id));
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
      <PracticalSection
        practicalList={practicalList}
        onUpdate={handlePracticalUpdate}
        onAdd={handlePracticalAdd}
        onDelete={handlePracticalDelete}
      />
    </>
  );
}

export default App;
