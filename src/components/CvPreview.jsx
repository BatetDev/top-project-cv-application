function CvPreview({ generalInfo, educationList, experienceList }) {
  return (
    <div>
      {/* Header */}
      <h2>{generalInfo.name || 'Your Name'}</h2>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
      <p>{generalInfo.location}</p>

      {/* Education */}
      <h3>Education</h3>
      {educationList.map((entry) => (
        <div key={entry.id}>
          <p>
            <strong>{entry.school}</strong> — {entry.location}
          </p>
          <p>{entry.title}</p>
          <p>
            {entry.dateFrom} — {entry.dateTo}
          </p>
        </div>
      ))}

      {/* Experience */}
      <h3>Experience</h3>
      {experienceList.map((entry) => (
        <div key={entry.id}>
          <p>
            <strong>{entry.companyName}</strong> — {entry.location}
          </p>
          <p>{entry.positionTitle}</p>
          <p>{entry.description}</p>
          <p>
            {entry.dateFrom} — {entry.dateTo}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CvPreview;
