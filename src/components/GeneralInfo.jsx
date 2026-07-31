function GeneralInfo({ data, setGeneralInfo }) {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </>
  );
}

export default GeneralInfo;
