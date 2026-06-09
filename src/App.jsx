import { useState, useEffect, useRef } from 'react'
import Summary from './components/Summary'
import Flashcard from './components/Flashcard'
import Methodology from './components/Methodology'
import PracticeExamples from './components/PracticeExamples'
import ReferenceGuide from './components/ReferenceGuide'
import Icon from './components/Icon'
import { allLessons as originalAllLessons } from './data'
import { speakingLesson4, speakingLesson5, speakingLesson6, extraWritingLesson4 } from './extraLessons'
import { writingLessonParaphrase, writingLessonTimeCharts } from './weekLessons'
import { writingTask2Lesson, grammarLesson, vocabularyLesson, pronunciationLesson } from './knowledgeLessons'
import VocabTopics from './components/VocabTopics'
import { vocabTopics } from './vocabData'
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
// New Writing lessons added this week (from uploaded docs)
if (!allLessons.find(l => l.id === 'write_5')) allLessons.push(writingLessonParaphrase);
if (!allLessons.find(l => l.id === 'write_6')) allLessons.push(writingLessonTimeCharts);
// Knowledge-enrichment lessons (Task 2, Grammar, Vocabulary, Pronunciation)
if (!allLessons.find(l => l.id === 'write_7')) allLessons.push(writingTask2Lesson);
if (!allLessons.find(l => l.id === 'speak_pron')) allLessons.push(pronunciationLesson);
if (!allLessons.find(l => l.id === 'grammar_1')) allLessons.push(grammarLesson);
if (!allLessons.find(l => l.id === 'vocab_collo')) allLessons.push(vocabularyLesson);

const TABS = [
  { id: 'methodology', label: 'How To Study', icon: 'bookopen' },
  { id: 'summary', label: 'Lesson Summary', icon: 'clipboard' },
  { id: 'reference', label: 'Reference Guide', icon: 'book' },
  { id: 'practice', label: 'Practice', icon: 'target' },
  { id: 'vocabulary', label: 'Vocabulary', icon: 'bookmarked' },
  { id: 'flashcards', label: 'Flashcards', icon: 'layers' },
]

// Tabs that relate to a specific lesson (vs. the global Methodology / Vocabulary views)
const LESSON_TABS = ['summary', 'reference', 'practice', 'flashcards']

function App() {
  const [activeTab, setActiveTab] = useState('methodology')
  const [selectedLessonId, setSelectedLessonId] = useState(allLessons[0].id)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ielts.completed') || '{}') } catch { return {} }
  })
  const tablistRef = useRef(null)

  useEffect(() => {
    try { localStorage.setItem('ielts.completed', JSON.stringify(completed)) } catch { /* storage unavailable */ }
  }, [completed])

  const currentLesson = allLessons.find(l => l.id === selectedLessonId)

  const speakingLessons = allLessons.filter(l => l.category === 'Speaking')
  const writingLessons = allLessons.filter(l => l.category === 'Writing')
  const foundationLessons = allLessons.filter(l => l.category === 'Foundations')

  const totalVocab = allLessons.reduce((sum, l) => sum + (l.vocabulary?.length || 0), 0)
  const totalStructures = allLessons.reduce((sum, l) => sum + (l.structures?.length || 0), 0)

  const completedCount = allLessons.filter(l => completed[l.id]).length
  const progressPct = allLessons.length ? Math.round((completedCount / allLessons.length) * 100) : 0
  const toggleComplete = (id) => setCompleted(c => ({ ...c, [id]: !c[id] }))

  const isLessonTab = LESSON_TABS.includes(activeTab)

  // Roving arrow-key navigation across tabs
  const onTabKeyDown = (e) => {
    const idx = TABS.findIndex(t => t.id === activeTab)
    let next
    if (e.key === 'ArrowRight') next = (idx + 1) % TABS.length
    else if (e.key === 'ArrowLeft') next = (idx - 1 + TABS.length) % TABS.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = TABS.length - 1
    else return
    e.preventDefault()
    const nextId = TABS[next].id
    setActiveTab(nextId)
    const btn = tablistRef.current?.querySelector(`#tab-${nextId}`)
    if (btn) btn.focus()
  }

  const renderLessonItem = (lesson) => {
    const isActive = selectedLessonId === lesson.id && activeTab !== 'methodology' && activeTab !== 'vocabulary'
    const isDone = !!completed[lesson.id]
    return (
      <li
        key={lesson.id}
        className={`${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
        onClick={() => {
          setSelectedLessonId(lesson.id)
          setActiveTab(prev => (LESSON_TABS.includes(prev) ? prev : 'summary'))
          setIsSidebarOpen(false)
        }}
      >
        {isDone
          ? <Icon name="check" size={16} className="lesson-check" />
          : <span className="lesson-indicator"></span>}
        {lesson.title}
      </li>
    )
  }

  return (
    <div className="app-layout">
      {/* Mobile Sidebar Toggle */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-expanded={isSidebarOpen}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        <Icon name="menu" size={18} /> Menu
      </button>

      {/* Backdrop — dims content and closes sidebar on outside tap (mobile) */}
      <div
        className={`sidebar-backdrop ${isSidebarOpen ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar for Lesson Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2 style={{ cursor: 'pointer' }} onClick={() => { setActiveTab('methodology'); setIsSidebarOpen(false); }}>
          IELTS Target 6.5
        </h2>

        <button
          type="button"
          className={`vocab-nav-btn ${activeTab === 'vocabulary' ? 'active' : ''}`}
          onClick={() => { setActiveTab('vocabulary'); setIsSidebarOpen(false); }}
        >
          <Icon name="bookmarked" size={16} /> Vocabulary Bank
        </button>

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
            <span className="category-icon"><Icon name="mic" size={15} /></span> Speaking
          </h3>
          <ul>
            {speakingLessons.map(renderLessonItem)}
          </ul>
        </div>

        <div className="category-section">
          <h3>
            <span className="category-icon"><Icon name="pen" size={15} /></span> Writing
          </h3>
          <ul>
            {writingLessons.map(renderLessonItem)}
          </ul>
        </div>

        {foundationLessons.length > 0 && (
          <div className="category-section">
            <h3>
              <span className="category-icon"><Icon name="book" size={15} /></span> Grammar &amp; Vocabulary
            </h3>
            <ul>
              {foundationLessons.map(renderLessonItem)}
            </ul>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header>
          {activeTab === 'methodology' ? (
            <>
              <div className="header-badge"><Icon name="bookopen" size={14} /> Study Guide</div>
              <h1>Learning Method</h1>
              <p>How to efficiently jump from Band 5 to Band 6.5+</p>
            </>
          ) : activeTab === 'vocabulary' ? (
            <>
              <div className="header-badge"><Icon name="bookmarked" size={14} /> Vocabulary</div>
              <h1>IELTS Vocabulary</h1>
              <p>Master essential vocabulary across {vocabTopics.length} common IELTS topics</p>
            </>
          ) : (
            <>
              <div className="header-badge">
                <Icon name={currentLesson?.category === 'Speaking' ? 'mic' : 'pen'} size={14} /> {currentLesson?.category}
              </div>
              <h1>{currentLesson?.category} Band 6.5+ Target</h1>
              <p>{currentLesson?.title}</p>
            </>
          )}

          {/* Course progress */}
          <div className="header-progress">
            <div className="progress-row">
              <span className="progress-label">Course progress · {completedCount} / {allLessons.length} lessons</span>
              {isLessonTab && currentLesson && (
                <button
                  type="button"
                  className={`mark-complete-btn ${completed[selectedLessonId] ? 'done' : ''}`}
                  aria-pressed={!!completed[selectedLessonId]}
                  onClick={() => toggleComplete(selectedLessonId)}
                >
                  <Icon name="check" size={15} /> {completed[selectedLessonId] ? 'Completed' : 'Mark complete'}
                </button>
              )}
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </header>

        <div className="tabs" role="tablist" aria-label="Lesson sections" ref={tablistRef} onKeyDown={onTabKeyDown}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls="lesson-panel"
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon"><Icon name={tab.icon} size={16} /></span> {tab.label}
            </button>
          ))}
        </div>

        <div className="content-area" id="lesson-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          {activeTab === 'methodology' && <Methodology />}
          {activeTab === 'vocabulary' && <VocabTopics />}
          {activeTab === 'summary' && currentLesson && <Summary data={currentLesson} />}
          {activeTab === 'reference' && currentLesson && <ReferenceGuide data={currentLesson} />}
          {activeTab === 'practice' && currentLesson && <PracticeExamples data={currentLesson} />}
          {activeTab === 'flashcards' && currentLesson && <Flashcard key={selectedLessonId} data={currentLesson} />}
        </div>
      </main>
    </div>
  )
}

export default App
