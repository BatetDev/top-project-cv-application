import { useState } from 'react';

function GeneralInfo({ data, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      {isEditing ? (
        <>
          <input type='text' name='name' defaultValue={data.name} />
          <input type='text' name='email' defaultValue={data.email} />
          <input type='text' name='phone' defaultValue={data.phone} />
        </>
      ) : (
        <>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </>
      )}

      <button onClick={handleToggle}>{isEditing ? 'Submit' : 'Edit'}</button>
    </>
  );
}

export default GeneralInfo;
