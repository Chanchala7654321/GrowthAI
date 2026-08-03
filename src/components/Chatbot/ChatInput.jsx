import { FiSend } from "react-icons/fi";

const ChatInput = ({ inputVal, setInputVal, onSend }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal && inputVal.trim()) {
      onSend(inputVal);
    }
  };

  return (
    <div className="chat-input-wrapper">
      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input-field"
          placeholder="Type your question..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          type="submit"
          className="chat-send-btn"
          disabled={!inputVal || !inputVal.trim()}
        >
          <FiSend />
        </button>
      </form>
      <p className="chat-disclaimer">
        Powered by AI — responses are simulated for demo purposes
      </p>
    </div>
  );
};

export default ChatInput;
