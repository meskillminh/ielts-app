import React from 'react';

const Methodology = () => {
  return (
    <div className="summary-container" style={{maxWidth: '800px', margin: '0 auto'}}>
      <div className="summary-card" style={{borderTop: '4px solid var(--accent-secondary)'}}>
        <h2 style={{fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', borderBottom: 'none'}}>
          🚀 Band 5 ➔ 6.5+ Strategy
        </h2>
        <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem'}}>
          At Band 5, you likely have enough vocabulary for familiar topics but struggle with fluency (pausing to translate), extending your answers, and using complex sentence structures. This application is designed to help you break through those barriers using the following proven methods:
        </p>

        <div className="structure-item" style={{marginBottom: '1.5rem'}}>
          <div className="structure-name">1. The A.R.E. Expansion Method</div>
          <div className="structure-formula" style={{background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)'}}>
            Answer + Reason + Example
          </div>
          <p style={{color: 'var(--text-secondary)'}}>
            Never give a one-word "Yes" or "No" answer. In Speaking Part 1, always start with a direct Answer, provide a Reason, and give a specific Example. This naturally forces you to use complex sentences (because, although, which).
          </p>
        </div>

        <div className="structure-item" style={{marginBottom: '1.5rem'}}>
          <div className="structure-name">2. "Chunking" (Lexical Resource)</div>
          <p style={{color: 'var(--text-secondary)'}}>
            Instead of learning individual words, you must learn <strong>collocations</strong> and <strong>phrases</strong>. 
            For example, don't just learn the word <em>"distance"</em>. Learn the chunk: <em>"within walking distance of"</em>. 
            When you learn in chunks, your fluency improves because you retrieve entire phrases from your memory instead of translating word-by-word.
          </p>
        </div>

        <div className="structure-item">
          <div className="structure-name">3. Spaced Repetition (Flashcards)</div>
          <p style={{color: 'var(--text-secondary)'}}>
            Use the <strong>Flashcards Practice</strong> tab daily. By actively forcing yourself to recall the Definition and Example on the back of the card, you transfer this Band 6.5+ vocabulary from your short-term memory into your long-term memory.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Methodology;
