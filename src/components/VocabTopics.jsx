import React, { useState, useMemo } from 'react';
import { vocabTopics } from '../vocabData';

const VocabTopics = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const playPronunciation = (word) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleTopicClick = (id) => {
    setSelectedTopicId(id);
    setSearchQuery('');
  };

  const selectedTopic = useMemo(() => {
    return vocabTopics.find(t => t.id === selectedTopicId);
  }, [selectedTopicId]);

  const filteredWords = useMemo(() => {
    if (!selectedTopic) return [];
    if (!searchQuery) return selectedTopic.words;
    
    const query = searchQuery.toLowerCase();
    return selectedTopic.words.filter(w => 
      w.word.toLowerCase().includes(query) || 
      w.meaning.toLowerCase().includes(query) ||
      (w.example && w.example.toLowerCase().includes(query))
    );
  }, [selectedTopic, searchQuery]);

  return (
    <div className="vocab-container">
      {!selectedTopic ? (
        <>
          <div className="vocab-intro">
            <div className="vocab-intro-icon">📚</div>
            <div>
              <h3>IELTS Vocabulary Bank</h3>
              <p>Master essential vocabulary across {vocabTopics.length} common IELTS topics.</p>
            </div>
          </div>
          
          <div className="vocab-topics-grid">
            {vocabTopics.map(topic => (
              <div 
                key={topic.id} 
                className="vocab-topic-card"
                onClick={() => handleTopicClick(topic.id)}
              >
                <div className="vocab-topic-icon">
                  {topic.id.includes('education') ? '🎓' : 
                   topic.id.includes('environment') ? '🌍' :
                   topic.id.includes('health') ? '🏥' :
                   topic.id.includes('tech') ? '💻' :
                   topic.id.includes('work') ? '🧑‍💼' :
                   topic.id.includes('global') ? '🌐' :
                   topic.id.includes('culture') ? '🎭' :
                   topic.id.includes('media') ? '📱' :
                   topic.id.includes('society') ? '🤝' : '📖'}
                </div>
                <div className="vocab-topic-title">{topic.title}</div>
                <div className="vocab-topic-count">{topic.words.length} words</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="vocab-detail-view">
          <div className="vocab-detail-header">
            <button className="back-btn" onClick={() => setSelectedTopicId(null)}>
              ← Back to Topics
            </button>
            <div className="vocab-detail-title-row">
              <h2>{selectedTopic.title}</h2>
              <span className="vocab-count-badge">{selectedTopic.words.length} words</span>
            </div>
            
            <div className="vocab-search">
              <input 
                type="text" 
                placeholder="Search words, meanings or examples..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="vocab-search-input"
              />
            </div>
          </div>

          <div className="vocab-words-list">
            {filteredWords.length === 0 ? (
              <div className="no-results">No words found matching "{searchQuery}"</div>
            ) : (
              filteredWords.map((item, idx) => (
                <div key={idx} className="vocab-word-card">
                  <div className="vocab-word-header">
                    <span className="vocab-word-text">{item.word.replace(/^[A-Z\s]+/, '').trim()}</span>
                    {item.type && <span className="vocab-word-type">({item.type})</span>}
                    <button 
                      className="pronounce-btn" 
                      onClick={(e) => { e.stopPropagation(); playPronunciation(item.word.replace(/^[A-Z\s]+/, '').trim()); }}
                      title="Listen to pronunciation"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', marginLeft: '0.5rem', transition: 'transform 0.2s' }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      🔊
                    </button>
                  </div>
                  <div className="vocab-word-meaning">{item.meaning}</div>
                  
                  {item.example && (
                    <div className="vocab-word-example-box">
                      <div className="vocab-word-example-en">💡 {item.example}</div>
                      {item.example_vi && <div className="vocab-word-example-vi">{item.example_vi}</div>}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabTopics;
