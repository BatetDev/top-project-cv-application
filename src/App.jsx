import './App.css';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  });

  return (
    <>
      <h1>Project CV Application</h1>
      <GeneralInfo data={generalInfo} setGeneralInfo={setGeneralInfo} />
    </>
  );
}

export default App;
