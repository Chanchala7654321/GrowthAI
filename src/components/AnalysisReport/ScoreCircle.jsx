import "./ScoreCircle.css";

const ScoreCircle = ({ score = 62 }) => {
  return (
    <div className="score-wrapper">
      <div className="score-label-top">OVERALL DIGITAL SCORE</div>
      
      <div className="circle">
        <span className="score-val">{score}</span>
        <span className="score-max">/100</span>
      </div>

      <div className="score-status-badge">
        Moderate Digital Presence
      </div>
    </div>
  );
};

export default ScoreCircle;