import { useState } from 'react'
import Summary from './components/Summary'
import Flashcard from './components/Flashcard'
import Methodology from './components/Methodology'
import PracticeExamples from './components/PracticeExamples'
import ReferenceGuide from './components/ReferenceGuide'
import { allLessons as originalAllLessons } from './data'
import { speakingLesson4, speakingLesson5, speakingLesson6, extraWritingLesson4 } from './extraLessons'
import VocabTopics from './components/VocabTopics'
import './index.css'

const allLessons = originalAllLessons.map(l => {
  if (l.title.includes('Lesson 4 - Prefer')) return { ...l, ...speakingLesson4, id: l.id };
  if (l.title.includes('Lesson 5 - Places + People')) return { ...l, ...speakingLesson5, id: l.id };
  if (l.title.includes('Lesson 4 - Line Graph')) return { ...l, ...extraWritingLesson4, id: l.id };
  return l;
});
if (!allLessons.find(l => l.title.includes('Lesson 6'))) {
  allLessons.push(speakingLesson6);
}

function App() {
  const [activeTab, setActiveTab] = useState('methodology')
  const [selectedLessonId, setSelectedLessonId] = useState(allLessons[0].id)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const currentLesson = allLessons.find(l => l.id === selectedLessonId)

  // Group lessons by category
  const speakingLessons = allLessons.filter(l => l.category === 'Speaking')
  const writingLessons = allLessons.filter(l => l.category === 'Writing')

  // Count total vocabulary and structures
  const totalVocab = allLessons.reduce((sum, l) => sum + (l.vocabulary?.length || 0), 0)
  const totalStructures = allLessons.reduce((sum, l) => sum + (l.structures?.length || 0), 0)

  return (
    <div className="app-layout">
      {/* Mobile Sidebar Toggle */}
      <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰ Menu
      </button>

      {/* Sidebar for Lesson Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2 style={{cursor: 'pointer'}} onClick={() => { setActiveTab('methodology'); setIsSidebarOpen(false); }}>
          IELTS Target 6.5
        </h2>
        
        <div className="vocab-nav-btn" 
             style={{
               marginBottom: '1rem',
               padding: '0.75rem',
               background: activeTab === 'vocabulary' ? 'var(--accent-gradient)' : 'rgba(34, 197, 94, 0.1)',
               color: activeTab === 'vocabulary' ? 'white' : 'var(--accent-green)',
               borderRadius: '8px',
               textAlign: 'center',
               cursor: 'pointer',
               fontWeight: '600'
             }}
             onClick={() => { setActiveTab('vocabulary'); setIsSidebarOpen(false); }}
        >
          📖 Vocabulary Bank
        </div>

        <div className="sidebar-stats">
          <div className="stat-item">
            <span className="stat-number">{allLessons.length}</span>
            <span className="stat-label">Lessons</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalVocab}</span>
            <span className="stat-label">Vocab</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalStructures}</span>
            <span className="stat-label">Structures</span>
          </div>
        </div>
        
        <div className="category-section">
          <h3>
            <span className="category-icon">🗣️</span> Speaking
          </h3>
          <ul>
            {speakingLessons.map(lesson => (
              <li 
                key={lesson.id} 
                className={selectedLessonId === lesson.id && activeTab !== 'methodology' ? 'active' : ''}
                onClick={() => {
                  setSelectedLessonId(lesson.id)
                  setActiveTab('summary')
                  setIsSidebarOpen(false)
                }}
              >
                <span className="lesson-indicator"></span>
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="category-section">
          <h3>
            <span className="category-icon">✍️</span> Writing
          </h3>
          <ul>
            {writingLessons.map(lesson => (
              <li 
                key={lesson.id} 
                className={selectedLessonId === lesson.id && activeTab !== 'methodology' ? 'active' : ''}
                onClick={() => {
                  setSelectedLessonId(lesson.id)
                  setActiveTab('summary')
                  setIsSidebarOpen(false)
                }}
              >
                <span className="lesson-indicator"></span>
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header>
          {activeTab === 'methodology' ? (
            <>
              <div className="header-badge">📘 Study Guide</div>
              <h1>Learning Method</h1>
              <p>How to efficiently jump from Band 5 to Band 6.5+</p>
            </>
          ) : activeTab === 'vocabulary' ? (
            <>
              <div className="header-badge">📖 Vocabulary</div>
              <h1>IELTS Vocabulary</h1>
              <p>Master essential vocabulary across 13 topics</p>
            </>
          ) : (
            <>
              <div className="header-badge">{currentLesson?.category === 'Speaking' ? '🗣️' : '✍️'} {currentLesson?.category}</div>
              <h1>{currentLesson?.category} Band 6.5+ Target</h1>
              <p>{currentLesson?.title}</p>
            </>
          )}
        </header>

        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'methodology' ? 'active' : ''}`}
            onClick={() => setActiveTab('methodology')}
          >
            <span className="tab-icon">📘</span> How To Study
          </button>
          <button 
            className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveTab('summary')}
          >
            <span className="tab-icon">📋</span> Lesson Summary
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reference' ? 'active' : ''}`}
            onClick={() => setActiveTab('reference')}
          >
            <span className="tab-icon">📚</span> Reference Guide
          </button>
          <button 
            className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            <span className="tab-icon">🎯</span> Practice
          </button>
          <button 
            className={`tab-btn ${activeTab === 'vocabulary' ? 'active' : ''}`}
            onClick={() => setActiveTab('vocabulary')}
          >
            <span className="tab-icon">📖</span> Vocabulary
          </button>
          <button 
            className={`tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => setActiveTab('flashcards')}
          >
            <span className="tab-icon">🃏</span> Flashcards
          </button>
        </div>

        <div className="content-area">
          {activeTab === 'methodology' && <Methodology />}
          {activeTab === 'vocabulary' && <VocabTopics />}
          {activeTab === 'summary' && currentLesson && <Summary data={currentLesson} />}
          {activeTab === 'reference' && currentLesson && <ReferenceGuide data={currentLesson} />}
          {activeTab === 'practice' && currentLesson && <PracticeExamples data={currentLesson} />}
          {activeTab === 'flashcards' && currentLesson && <Flashcard data={currentLesson} />}
        </div>
      </main>
    </div>
  )
}

export default App
