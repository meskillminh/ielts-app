import React, { useState, useEffect } from 'react';

const Flashcard = ({ data }) => {
  // Combine vocabulary and structures for practice
  const vocabItems = data.vocabulary ? data.vocabulary.map(v => ({ type: 'Vocabulary', front: v.word, phonetic: v.pronunciation, backDef: v.definition, backEx: v.example })) : [];
  const structItems = data.structures ? data.structures.map(s => ({ type: 'Grammar', front: s.name, phonetic: s.formula, backDef: "Structure formula used for complexity.", backEx: s.example })) : [];
  
  const items = [...vocabItems, ...structItems];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset state when data (lesson) changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [data]);

  const playPronunciation = (word) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < items.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 150);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex - 1), 150);
    }
  };

  if (items.length === 0) return <div style={{textAlign: "center", color: "var(--text-secondary)", marginTop: "2rem"}}>No flashcards available for this lesson yet.</div>;

  const currentItem = items[currentIndex];

  return (
    <div className="flashcard-view">
      <div className="flashcard-scene" onClick={handleFlip}>
        <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
          
          {/* Front Face */}
          <div className="flashcard-face flashcard-front">
            <span className="card-type">{currentItem.type}</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <h2 className="card-title" style={{ margin: 0 }}>{currentItem.front}</h2>
              <button 
                className="pronounce-btn" 
                onClick={(e) => { e.stopPropagation(); playPronunciation(currentItem.front); }}
                title="Listen to pronunciation"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', transition: 'transform 0.2s' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                🔊
              </button>
            </div>
            {currentItem.phonetic && <div className="card-pronunciation">{currentItem.phonetic}</div>}
            <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Click to flip</div>
          </div>

          {/* Back Face */}
          <div className="flashcard-face flashcard-back">
            <span className="card-type">Definition & Example</span>
            <div className="card-definition">{currentItem.backDef}</div>
            <div className="card-example">"{currentItem.backEx}"</div>
          </div>

        </div>
      </div>

      <div className="flashcard-controls">
        <button className="control-btn" onClick={handlePrev} disabled={currentIndex === 0}>
          &#8592;
        </button>
        <div className="progress">
          {currentIndex + 1} / {items.length}
        </div>
        <button className="control-btn" onClick={handleNext} disabled={currentIndex === items.length - 1}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
