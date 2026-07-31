import './App.css';
import GeneralInfo from './components/GeneralInfo';

const dummyGeneral = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '123-456-7890',
};

function App() {
  return (
    <>
      <h1>Project CV Application</h1>
      <GeneralInfo data={dummyGeneral} />
    </>
  );
}

export default App;
