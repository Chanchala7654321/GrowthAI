import ChatHeader from "../components/Chatbot/ChatHeader";
import ChatWindow from "../components/Chatbot/ChatWindow";
import "../components/Chatbot/ChatHeader.css";
import "../components/Chatbot/ChatWindow.css";

const GrowthAssistant = () => {
  return (
    <div className="growth-assistant-page">
      <div className="container">
        <ChatHeader />
        <ChatWindow />
      </div>
    </div>
  );
};

export default GrowthAssistant;
