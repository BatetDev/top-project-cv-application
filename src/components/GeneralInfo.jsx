function GeneralInfo({ data }) {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </>
  );
}

export default GeneralInfo;
