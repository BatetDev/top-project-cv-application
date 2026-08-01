import './App.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';

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

  return (
    <>
      <h1>Project CV Application</h1>
      <GeneralInfo data={generalInfo} setGeneralInfo={setGeneralInfo} />
      <EducationSection educationList={educationList} />
    </>
  );
}

export default App;
