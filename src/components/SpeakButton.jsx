import Icon from './Icon';

// Accessible pronunciation control. Real <button>, keyboard + screen-reader friendly,
// 44x44 tap target, British accent, slightly slowed for learners.
const SpeakButton = ({ text, size = 20, className = '' }) => {
  const speak = (e) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-GB';
    utter.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  return (
    <button
      type="button"
      className={`speak-btn ${className}`.trim()}
      onClick={speak}
      aria-label={`Pronounce ${text}`}
      title="Listen to pronunciation"
    >
      <Icon name="speaker" size={size} />
    </button>
  );
};

export default SpeakButton;
