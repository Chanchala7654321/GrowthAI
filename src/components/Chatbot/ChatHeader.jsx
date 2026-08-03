import { RiRobot2Line } from "react-icons/ri";
import "./ChatHeader.css";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="chat-icon">
        <RiRobot2Line />
      </div>
      <h1>AI Growth Assistant</h1>
      <p>
        Ask me anything about website development, SEO, digital marketing, or
        our referral program.
      </p>
    </div>
  );
};

export default ChatHeader;
