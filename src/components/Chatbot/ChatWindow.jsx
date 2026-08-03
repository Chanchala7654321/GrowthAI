import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";
import ChatInput from "./ChatInput";
import { initialMessages, getBotResponse, getCurrentFormattedTime } from "./botData";
import "./ChatWindow.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (textToSend) => {
    if (!textToSend || !textToSend.trim()) return;

    const time = getCurrentFormattedTime();
    const userMsg = {
      type: "user",
      text: textToSend.trim(),
      time: time,
    };

    const botResponseData = getBotResponse(textToSend);
    const botMsg = {
      type: "bot",
      time: time,
      data: botResponseData,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputVal("");
  };

  return (
    <div className="chat-window">
      <div className="messages-area">
        {messages.length === 0 ? (
          <div className="empty-chat-placeholder">
            <div className="empty-chat-icon">💬</div>
            <p className="empty-chat-title">Start a Conversation</p>
            <p className="empty-chat-sub">
              Click a suggested question below or type your question to ask our AI Assistant.
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage key={index} msg={msg} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-footer font-sans">
        <SuggestedQuestions onSelectQuestion={handleSendMessage} />
        <ChatInput
          inputVal={inputVal}
          setInputVal={setInputVal}
          onSend={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
