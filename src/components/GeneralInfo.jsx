import { useState } from 'react';

function GeneralInfo({ data, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <button onClick={handleToggle}>{isEditing ? 'Submit' : 'Edit'}</button>
    </>
  );
}

export default GeneralInfo;
