import SpeakButton from './SpeakButton';

const Summary = ({ data }) => {
  return (
    <div className="summary-container">
      <div className="summary-card">
        <h2>Key Takeaways</h2>
        <ul className="vocab-list" style={{listStyleType: "disc", paddingLeft: "1.5rem"}}>
          {data.summary?.map((point, idx) => (
            <li key={idx} style={{color: "var(--text-secondary)", marginBottom: "0.5rem"}}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="summary-card">
        <h2>Grammar Structures (Band 6.5+)</h2>
        <div className="structure-list">
          {data.structures?.length > 0 ? data.structures.map((struct) => (
            <div key={struct.id} className="structure-item">
              <div className="structure-name">{struct.name}</div>
              <div className="structure-formula">{struct.formula}</div>
              <div className="example">"{struct.example}"</div>
            </div>
          )) : <div style={{color: "var(--text-secondary)"}}>No grammar structures listed for this lesson.</div>}
        </div>
      </div>

      <div className="summary-card">
        <h2>Target Vocabulary</h2>
        <div className="vocab-list">
          {data.vocabulary?.length > 0 ? data.vocabulary.map((vocab) => (
            <div key={vocab.id} className="vocab-item">
              <span className="vocab-word">{vocab.word}</span> <span style={{fontSize: "0.9rem", color: "var(--text-secondary)"}}>({vocab.type})</span>
              <SpeakButton text={vocab.word} className="sm" size={18} />
              <div className="vocab-def">{vocab.definition}</div>
            </div>
          )) : <div style={{color: "var(--text-secondary)"}}>No vocabulary listed for this lesson.</div>}
        </div>
      </div>
    </div>
  );
};

export default Summary;
