import {
  RiGlobalLine,
  RiSearchEyeLine,
  RiMegaphoneLine,
  RiHandCoinLine,
  RiSmartphoneLine,
  RiLineChartLine,
} from "react-icons/ri";

const questions = [
  { text: "What does a basic website cost?", icon: RiGlobalLine },
  { text: "How does your SEO package work?", icon: RiSearchEyeLine },
  { text: "Tell me about digital marketing", icon: RiMegaphoneLine },
  { text: "How does the referral program work?", icon: RiHandCoinLine },
  { text: "Are your websites mobile-friendly?", icon: RiSmartphoneLine },
  { text: "What are the latest market trends?", icon: RiLineChartLine },
];

const SuggestedQuestions = ({ onSelectQuestion }) => {
  return (
    <div className="suggestions">
      <p className="suggestions-title">Suggested Questions</p>
      <div className="suggestion-list">
        {questions.map((q, idx) => {
          const Icon = q.icon;
          return (
            <button
              key={idx}
              className="suggestion-btn"
              onClick={() => onSelectQuestion(q.text)}
              type="button"
            >
              <span className="suggestion-icon">
                <Icon />
              </span>
              <span>{q.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
