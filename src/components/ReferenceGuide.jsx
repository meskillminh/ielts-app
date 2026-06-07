import React, { useState } from 'react';

const ReferenceGuide = ({ data }) => {
  const [activeSection, setActiveSection] = useState('why');

  // Determine what reference content is available
  const hasWhyVocab = data.whyVocabulary && data.whyVocabulary.length > 0;
  const hasExpandTable = data.expandTable && data.expandTable.length > 0;
  const hasTemplateBank = data.templateBank;
  const hasTopicSections = data.topicSections && data.topicSections.length > 0;
  const hasTrendRef = data.trendReference;
  const hasDegreeRef = data.degreeReference;
  const hasPrepRef = data.prepositionReference;
  const hasConnectorRef = data.connectorReference;
  const hasEssayStructure = data.essayStructure;
  const hasCommonMistakes = data.commonMistakes;
  const hasApproxWords = data.approximationWords;

  const sections = [];
  if (hasWhyVocab) sections.push({ id: 'why', label: '🎯 WHY Phrases', icon: '🎯' });
  if (hasExpandTable) sections.push({ id: 'expand', label: '📊 5WH1H Table', icon: '📊' });
  if (hasTemplateBank) sections.push({ id: 'templates', label: '📋 Templates', icon: '📋' });
  if (hasTopicSections) sections.push({ id: 'topics', label: '💬 Topic Guide', icon: '💬' });
  if (hasTrendRef) sections.push({ id: 'trends', label: '📈 Trends', icon: '📈' });
  if (hasDegreeRef) sections.push({ id: 'degree', label: '🎚️ Degree', icon: '🎚️' });
  if (hasPrepRef) sections.push({ id: 'preps', label: '🔤 Prepositions', icon: '🔤' });
  if (hasConnectorRef) sections.push({ id: 'connectors', label: '🔗 Connectors', icon: '🔗' });
  if (hasEssayStructure) sections.push({ id: 'essay', label: '📝 Essay Structure', icon: '📝' });
  if (hasCommonMistakes) sections.push({ id: 'mistakes', label: '⚠️ Common Mistakes', icon: '⚠️' });
  if (hasApproxWords) sections.push({ id: 'approx', label: '≈ Approximation', icon: '≈' });

  if (sections.length === 0) {
    return (
      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>
        No reference guides available for this lesson yet.
      </div>
    );
  }

  // Auto-set first available section
  const currentSection = sections.find(s => s.id === activeSection) ? activeSection : sections[0].id;

  return (
    <div className="reference-guide">
      <div className="reference-intro">
        <div className="reference-intro-icon">📚</div>
        <div>
          <h3>Quick Reference Guide</h3>
          <p>Master vocabulary, templates, and patterns for this lesson.</p>
        </div>
      </div>

      <div className="reference-tabs">
        {sections.map(s => (
          <button
            key={s.id}
            className={`reference-tab ${currentSection === s.id ? 'active' : ''}`}
            onClick={() => setActiveSection(s.id)}
          >
            <span className="ref-tab-icon">{s.icon}</span>
            <span className="ref-tab-label">{s.label.replace(/^[^\s]+\s/, '')}</span>
          </button>
        ))}
      </div>

      <div className="reference-content">
        {/* WHY Vocabulary */}
        {currentSection === 'why' && hasWhyVocab && (
          <div className="ref-section">
            <h3 className="ref-title">WHY — Useful Phrases by Category</h3>
            <p className="ref-description">Use these phrases to explain WHY you do something. Mix them up to sound more natural.</p>
            <div className="why-categories">
              {data.whyVocabulary.map((cat, idx) => (
                <div key={idx} className="why-category-card">
                  <div className="why-category-header">{cat.category}</div>
                  <div className="why-phrases">
                    {cat.phrases.map((p, pIdx) => (
                      <div key={pIdx} className="why-phrase-item">
                        <div className="why-phrase-en">{p.phrase}</div>
                        <div className="why-phrase-vi">{p.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5WH1H Expand Table */}
        {currentSection === 'expand' && hasExpandTable && (
          <div className="ref-section">
            <h3 className="ref-title">5WH1H — How to Expand Your Answer</h3>
            <p className="ref-description">After your direct answer, use these WH elements to naturally expand your response.</p>
            <div className="expand-table">
              {data.expandTable.map((item, idx) => (
                <div key={idx} className="expand-row">
                  <div className="expand-wh">{item.wh}</div>
                  <div className="expand-content">
                    <div className="expand-direction">{item.direction}</div>
                    <div className="expand-phrases">
                      {item.phrases.map((ph, phIdx) => (
                        <span key={phIdx} className="expand-phrase-tag">{ph}</span>
                      ))}
                    </div>
                    <div className="expand-example">💡 {item.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Template Bank */}
        {currentSection === 'templates' && hasTemplateBank && (
          <div className="ref-section">
            <h3 className="ref-title">Speaking Templates</h3>
            <p className="ref-description">Fill-in-the-blank templates to build your answers quickly.</p>
            
            {data.templateBank.itDepends && (
              <div className="template-card">
                <div className="template-title">🔄 "It Depends" Template</div>
                <div className="template-flow">
                  <div className="template-step">
                    <span className="step-number">1</span>
                    <span className="step-label">Opening</span>
                    <div className="step-formula">"Well, it really depends on my ___."</div>
                    <div className="step-options">
                      {data.templateBank.itDepends.openers.map((o, i) => (
                        <span key={i} className="option-chip">{o}</span>
                      ))}
                    </div>
                  </div>
                  <div className="template-step positive">
                    <span className="step-number">2</span>
                    <span className="step-label">Positive Situation</span>
                    <div className="step-formula">"If I ___, I usually ___ because ___."</div>
                    <div className="step-row">
                      <div className="step-col">
                        <div className="step-col-label">Condition A</div>
                        {data.templateBank.itDepends.conditionA.slice(0, 5).map((c, i) => (
                          <span key={i} className="option-chip green">{c}</span>
                        ))}
                      </div>
                      <div className="step-col">
                        <div className="step-col-label">Action A</div>
                        {data.templateBank.itDepends.actionA.slice(0, 5).map((a, i) => (
                          <span key={i} className="option-chip blue">{a}</span>
                        ))}
                      </div>
                      <div className="step-col">
                        <div className="step-col-label">Reason</div>
                        {data.templateBank.itDepends.reasonA.slice(0, 5).map((r, i) => (
                          <span key={i} className="option-chip purple">{r}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="template-step negative">
                    <span className="step-number">3</span>
                    <span className="step-label">Negative Situation</span>
                    <div className="step-formula">"But if I ___, I ___ instead because ___."</div>
                    <div className="step-row">
                      <div className="step-col">
                        <div className="step-col-label">Condition B</div>
                        {data.templateBank.itDepends.conditionB.slice(0, 5).map((c, i) => (
                          <span key={i} className="option-chip red">{c}</span>
                        ))}
                      </div>
                      <div className="step-col">
                        <div className="step-col-label">Action B</div>
                        {data.templateBank.itDepends.actionB.slice(0, 5).map((a, i) => (
                          <span key={i} className="option-chip orange">{a}</span>
                        ))}
                      </div>
                      <div className="step-col">
                        <div className="step-col-label">Reason</div>
                        {data.templateBank.itDepends.reasonB.slice(0, 5).map((r, i) => (
                          <span key={i} className="option-chip yellow">{r}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {data.templateBank.negativeAnswer && (
              <div className="template-card" style={{ marginTop: '2rem' }}>
                <div className="template-title">❌ Negative Answer Template</div>
                <div className="template-flow">
                  <div className="template-step">
                    <span className="step-number">1</span>
                    <span className="step-label">Admit</span>
                    <div className="step-options">
                      {data.templateBank.negativeAnswer.openers.map((o, i) => (
                        <span key={i} className="option-chip">{o}</span>
                      ))}
                    </div>
                  </div>
                  <div className="template-step">
                    <span className="step-number">2</span>
                    <span className="step-label">Reason (Why not)</span>
                    <div className="step-options">
                      {data.templateBank.negativeAnswer.reasons.map((r, i) => (
                        <span key={i} className="option-chip red">{r}</span>
                      ))}
                    </div>
                  </div>
                  <div className="template-step">
                    <span className="step-number">3</span>
                    <span className="step-label">Alternative</span>
                    <div className="step-options">
                      {data.templateBank.negativeAnswer.alternatives.map((a, i) => (
                        <span key={i} className="option-chip blue">{a}</span>
                      ))}
                    </div>
                  </div>
                  <div className="template-step">
                    <span className="step-number">4</span>
                    <span className="step-label">Future Plan (Optional)</span>
                    <div className="step-options">
                      {data.templateBank.negativeAnswer.futurePlans.map((f, i) => (
                        <span key={i} className="option-chip green">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Topic Guide */}
        {currentSection === 'topics' && hasTopicSections && (
          <div className="ref-section">
            <h3 className="ref-title">Topic Guide — Templates & Options</h3>
            <p className="ref-description">Ready-made templates for common Part 1 topics. Fill in the blanks with the options below.</p>
            {data.topicSections.map((section, sIdx) => (
              <div key={sIdx} className="topic-section-card">
                <div className="topic-section-header">{section.name}</div>
                {section.questions.map((q, qIdx) => (
                  <div key={qIdx} className="topic-question-card">
                    <div className="topic-question-label">❓ {q.question}</div>
                    <div className="topic-template">{q.template}</div>
                    {q.options && Object.keys(q.options).length > 0 && (
                      <div className="topic-options-grid">
                        {Object.entries(q.options).map(([key, val]) => (
                          <div key={key} className="topic-option-group">
                            <div className="topic-option-label">{key}</div>
                            <div className="topic-option-values">
                              {Array.isArray(val) ? val.map((v, i) => (
                                <span key={i} className="option-chip">{v}</span>
                              )) : typeof val === 'object' ? (
                                <div className="topic-option-detail">
                                  {Object.entries(val).map(([k, v]) => (
                                    <div key={k}><strong>{k}:</strong> {v}</div>
                                  ))}
                                </div>
                              ) : <span className="option-chip">{String(val)}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Trend Reference */}
        {currentSection === 'trends' && hasTrendRef && (
          <div className="ref-section">
            <h3 className="ref-title">Trend Verbs & Nouns — What happened?</h3>
            <p className="ref-description">Choose the right verb and noun to describe the direction of change.</p>
            <div className="trend-grid">
              {Object.entries(data.trendReference).map(([dir, content]) => {
                const icons = { increase: '⬆️', decrease: '⬇️', stable: '➡️', fluctuate: '〰️', peak: '▲', bottom: '▼' };
                const colors = { increase: '#22c55e', decrease: '#ef4444', stable: '#60a5fa', fluctuate: '#f59e0b', peak: '#a855f7', bottom: '#ec4899' };
                return (
                  <div key={dir} className="trend-card" style={{ borderLeft: `4px solid ${colors[dir]}` }}>
                    <div className="trend-header" style={{ color: colors[dir] }}>
                      {icons[dir]} {dir.toUpperCase()}
                    </div>
                    {content.verbs && (
                      <div className="trend-group">
                        <div className="trend-label">Verbs:</div>
                        <div className="trend-items">
                          {content.verbs.map((v, i) => <span key={i} className="trend-tag">{v}</span>)}
                        </div>
                      </div>
                    )}
                    {content.nouns && (
                      <div className="trend-group">
                        <div className="trend-label">Nouns:</div>
                        <div className="trend-items">
                          {content.nouns.map((n, i) => <span key={i} className="trend-tag">{n}</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Degree Reference */}
        {currentSection === 'degree' && hasDegreeRef && (
          <div className="ref-section">
            <h3 className="ref-title">Degree — How much did it change?</h3>
            <p className="ref-description">Band 7 rule: Never use the same degree word twice in one paragraph!</p>
            <div className="degree-grid">
              {Object.entries(data.degreeReference).map(([level, content]) => {
                const labels = { veryStrong: '🔴 Very Strong', strong: '🟠 Strong', medium: '🟡 Medium', small: '🟢 Small' };
                const colors = { veryStrong: '#ef4444', strong: '#f97316', medium: '#eab308', small: '#22c55e' };
                return (
                  <div key={level} className="degree-card" style={{ borderTop: `3px solid ${colors[level]}` }}>
                    <div className="degree-header" style={{ color: colors[level] }}>{labels[level]}</div>
                    <div className="degree-row">
                      <div className="degree-col">
                        <div className="degree-label">Adjectives:</div>
                        {content.adjectives.map((a, i) => <span key={i} className="degree-tag">{a}</span>)}
                      </div>
                      <div className="degree-col">
                        <div className="degree-label">Adverbs:</div>
                        {content.adverbs.map((a, i) => <span key={i} className="degree-tag">{a}</span>)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Prepositions */}
        {currentSection === 'preps' && hasPrepRef && (
          <div className="ref-section">
            <h3 className="ref-title">Prepositions — Numbers & Time</h3>
            <p className="ref-description">⚠️ KEY: "rose TO 50%" (final value) vs "rose BY 20%" (amount of change)</p>
            <div className="prep-grid">
              <div className="prep-card">
                <div className="prep-card-title">📊 For Numbers</div>
                {data.prepositionReference.numbers.map((p, i) => (
                  <div key={i} className="prep-item">
                    <span className="prep-keyword">{p.prep}</span>
                    <span className="prep-usage">{p.usage}</span>
                    <span className="prep-meaning">{p.meaning}</span>
                  </div>
                ))}
              </div>
              <div className="prep-card">
                <div className="prep-card-title">⏱️ For Time</div>
                {data.prepositionReference.time.map((p, i) => (
                  <div key={i} className="prep-item">
                    <span className="prep-keyword">{p.prep}</span>
                    <span className="prep-usage">{p.usage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Connectors */}
        {currentSection === 'connectors' && hasConnectorRef && (
          <div className="ref-section">
            <h3 className="ref-title">Connectors — Linking Ideas</h3>
            <p className="ref-description">Use connectors within sentences (comma) and between sentences (full stop).</p>
            
            <div className="connector-grid">
              <div className="connector-card">
                <div className="connector-card-title">Within a Sentence</div>
                <div className="connector-group">
                  <div className="connector-group-label">⏱️ Time</div>
                  {data.connectorReference.withinSentence.time.map((c, i) => (
                    <div key={i} className="connector-item">
                      <div className="connector-formula">{c.connector}</div>
                      <div className="connector-example">💡 {c.example}</div>
                    </div>
                  ))}
                </div>
                <div className="connector-group">
                  <div className="connector-group-label">↔️ Contrast</div>
                  {data.connectorReference.withinSentence.contrast.map((c, i) => (
                    <div key={i} className="connector-item">
                      <div className="connector-formula">{c.connector}</div>
                      <div className="connector-example">💡 {c.example}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="connector-card">
                <div className="connector-card-title">Between Sentences</div>
                {Object.entries(data.connectorReference.betweenSentences).map(([type, items]) => (
                  <div key={type} className="connector-group">
                    <div className="connector-group-label">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                    <div className="connector-tags">
                      {items.map((item, i) => (
                        <span key={i} className="connector-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Essay Structure */}
        {currentSection === 'essay' && hasEssayStructure && (
          <div className="ref-section">
            <h3 className="ref-title">Full Essay Structure (Band 7)</h3>
            <p className="ref-description">Target: {data.essayStructure.target}</p>
            <div className="essay-structure">
              {[
                { label: 'PARAGRAPH 1 — Introduction', content: data.essayStructure.introduction, color: '#3b82f6' },
                { label: 'PARAGRAPH 2 — Overview', content: data.essayStructure.overview, color: '#8b5cf6' },
                { label: 'PARAGRAPH 3 — Body 1', content: data.essayStructure.body1, color: '#22c55e' },
                { label: 'PARAGRAPH 4 — Body 2', content: data.essayStructure.body2, color: '#f59e0b' }
              ].map((p, i) => (
                <div key={i} className="essay-para-card" style={{ borderLeft: `4px solid ${p.color}` }}>
                  <div className="essay-para-label" style={{ color: p.color }}>{p.label}</div>
                  <div className="essay-para-content">{p.content}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Mistakes */}
        {currentSection === 'mistakes' && hasCommonMistakes && (
          <div className="ref-section">
            <h3 className="ref-title">Common Mistakes</h3>
            <div className="mistakes-table">
              <div className="mistakes-header">
                <span>❌ Wrong</span>
                <span>✅ Right</span>
                <span>📏 Rule</span>
              </div>
              {data.commonMistakes.map((m, i) => (
                <div key={i} className="mistakes-row">
                  <span className="mistake-wrong">{m.wrong}</span>
                  <span className="mistake-right">{m.right}</span>
                  <span className="mistake-rule">{m.rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Approximation Words */}
        {currentSection === 'approx' && hasApproxWords && (
          <div className="ref-section">
            <h3 className="ref-title">Approximation Words</h3>
            <p className="ref-description">When data points are between gridlines, use these words to describe approximate values.</p>
            <div className="approx-grid">
              {data.approximationWords.map((cat, i) => (
                <div key={i} className="approx-card">
                  <div className="approx-category">{cat.category}</div>
                  <div className="approx-words">
                    {cat.words.map((w, j) => (
                      <span key={j} className="approx-word">{w}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferenceGuide;
