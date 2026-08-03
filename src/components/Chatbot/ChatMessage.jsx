import { RiUserLine, RiRobot2Line } from "react-icons/ri";

const renderFormattedText = (str) => {
  if (!str) return null;

  // Render items like "1. Discovery & Planning — We understand..." or "- Keyword Research — Find..."
  const emDashParts = str.split(" — ");
  if (emDashParts.length === 2) {
    const headingPart = emDashParts[0];
    const descPart = emDashParts[1];

    // Check for bold terms in headingPart like "1. Discovery & Planning"
    return (
      <p className="msg-line">
        <strong className="bold-txt">{headingPart}</strong> — {descPart}
      </p>
    );
  }

  // Check if string contains bold markers like Pricing starts at just ₹9,999
  if (str.includes("Pricing starts at just ₹9,999")) {
    return (
      <p className="msg-line">
        <strong className="bold-txt">Pricing starts at just ₹9,999</strong> for a
        Basic Website and goes up to ₹59,999 for a Premium package with
        unlimited pages and custom integrations.
      </p>
    );
  }

  if (str.includes("30-50% increase in organic traffic")) {
    return (
      <p className="msg-line">
        Most clients see a{" "}
        <strong className="bold-txt">30-50% increase in organic traffic</strong>{" "}
        within 6 months. Want an SEO audit of your current website?
      </p>
    );
  }

  if (str.includes("earn ₹1,000 for every successful referral!")) {
    return (
      <p className="msg-line">
        Our Referral Partner Program is simple:{" "}
        <strong className="bold-txt">
          earn ₹1,000 for every successful referral!
        </strong>
      </p>
    );
  }

  return <p className="msg-line">{str}</p>;
};

const ChatMessage = ({ msg }) => {
  const isUser = msg.type === "user";

  return (
    <div className={`message-row ${isUser ? "user" : "bot"}`}>
      {!isUser && (
        <div className="avatar bot-avatar">
          <RiRobot2Line />
        </div>
      )}

      <div className="message-content-wrapper">
        <div className={`bubble ${isUser ? "user-bubble" : "bot-bubble"}`}>
          {isUser ? (
            <p className="user-text">{msg.text}</p>
          ) : (
            <div className="bot-content">
              {msg.data?.text && <p className="bot-lead">{msg.data.text}</p>}

              {msg.data?.sections?.map((sec, sIdx) => (
                <div key={sIdx} className="bot-section">
                  {sec.title && (
                    <p className="section-title">
                      <strong className="bold-txt">{sec.title}</strong>
                    </p>
                  )}

                  {sec.items && (
                    <div className="section-items">
                      {sec.items.map((item, iIdx) => (
                        <div key={iIdx}>{renderFormattedText(item)}</div>
                      ))}
                    </div>
                  )}

                  {sec.subSections && (
                    <div className="sub-sections">
                      {sec.subSections.map((sub, subIdx) => (
                        <div key={subIdx} className="sub-section-box">
                          <p className="sub-heading">
                            <strong className="bold-txt">{sub.heading}</strong>
                          </p>
                          {sub.lines?.map((line, lIdx) => (
                            <p key={lIdx} className="sub-line">
                              {line}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {sec.highlight && (
                    <div className="highlight-box">
                      {renderFormattedText(sec.highlight)}
                    </div>
                  )}

                  {sec.text && <p className="section-text">{sec.text}</p>}
                </div>
              ))}

              {!msg.data?.text && !msg.data?.sections && (
                <p className="bot-lead">{msg.text}</p>
              )}
            </div>
          )}
        </div>
        <p className="message-time">{msg.time}</p>
      </div>

      {isUser && (
        <div className="avatar user-avatar">
          <RiUserLine />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
