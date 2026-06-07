import { useState } from 'react';

const bandColors = {
  '4.0': { bg: 'rgba(239, 68, 68, 0.12)', border: '#ef4444', text: '#fca5a5', label: 'Band 4.0' },
  '5.0': { bg: 'rgba(251, 191, 36, 0.12)', border: '#f59e0b', text: '#fcd34d', label: 'Band 5.0' },
  '6.5': { bg: 'rgba(34, 197, 94, 0.12)', border: '#22c55e', text: '#86efac', label: 'Band 6.5' },
  'IT DEPENDS': { bg: 'rgba(59, 130, 246, 0.12)', border: '#3b82f6', text: '#93c5fd', label: '🔄 It Depends' },
  'NEGATIVE': { bg: 'rgba(239, 68, 68, 0.12)', border: '#ef4444', text: '#fca5a5', label: '❌ Negative Answer' },
};

const PracticeExamples = ({ data }) => {
  const [openQuestion, setOpenQuestion] = useState(0);
  const [revealedBands, setRevealedBands] = useState({});

  const examples = data.practiceExamples || [];

  const toggleReveal = (qIdx, bIdx) => {
    const key = `${qIdx}-${bIdx}`;
    setRevealedBands(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (examples.length === 0) {
    return (
      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>
        No practice examples available for this lesson yet.
      </div>
    );
  }

  return (
    <div className="practice-examples">
      <div className="practice-intro">
        <div className="practice-intro-icon">🎯</div>
        <div>
          <h3>Band-Level Answer Comparison</h3>
          <p>See how the same question is answered at different band levels. Click to reveal each answer and study the differences.</p>
        </div>
      </div>

      {examples.map((ex, qIdx) => (
        <div key={qIdx} className="practice-question-card">
          <div 
            className={`practice-question-header ${openQuestion === qIdx ? 'open' : ''}`}
            onClick={() => setOpenQuestion(openQuestion === qIdx ? -1 : qIdx)}
          >
            <div className="practice-question-number">Q{qIdx + 1}</div>
            <div className="practice-question-text">{ex.question}</div>
            <div className="practice-question-arrow">{openQuestion === qIdx ? '▼' : '▶'}</div>
          </div>

          {openQuestion === qIdx && (
            <div className="practice-answers-container">
              {ex.bands.map((b, bIdx) => {
                const key = `${qIdx}-${bIdx}`;
                const isRevealed = revealedBands[key];
                const colors = bandColors[b.band] || bandColors['6.5'];

                return (
                  <div 
                    key={bIdx} 
                    className="practice-answer-block"
                    style={{ 
                      background: colors.bg,
                      borderLeft: `4px solid ${colors.border}`
                    }}
                  >
                    <div className="practice-answer-header" onClick={() => toggleReveal(qIdx, bIdx)}>
                      <span 
                        className="band-badge" 
                        style={{ background: colors.border, color: '#fff' }}
                      >
                        {colors.label}
                      </span>
                      <span className="reveal-btn" style={{ color: colors.text }}>
                        {isRevealed ? 'Hide' : 'Click to reveal'} 
                        <span className="reveal-icon">{isRevealed ? '👁️' : '👁️‍🗨️'}</span>
                      </span>
                    </div>
                    <div className={`practice-answer-text ${isRevealed ? 'revealed' : ''}`}>
                      {isRevealed ? (
                        <p style={{ color: colors.text, lineHeight: '1.8' }}>{b.answer}</p>
                      ) : (
                        <p className="blurred-text">Click "reveal" to see the answer...</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {data.homeworkQuestions && data.homeworkQuestions.length > 0 && (
        <div className="homework-section">
          <h3>📝 Homework - Practice These Questions</h3>
          <div className="homework-grid">
            {data.homeworkQuestions.map((q, idx) => (
              <div key={idx} className="homework-item">
                <span className="homework-number">{idx + 1}</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeExamples;
