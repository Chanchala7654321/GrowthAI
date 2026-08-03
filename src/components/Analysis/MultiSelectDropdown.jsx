import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaTimes, FaCheck } from "react-icons/fa";
import "./MultiSelectDropdown.css";

const MultiSelectDropdown = ({
  options,
  selectedOptions = [],
  onChange,
  placeholder,
  variant = "yellow",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  const handleRemoveChip = (e, option) => {
    e.stopPropagation();
    onChange(selectedOptions.filter((item) => item !== option));
  };

  return (
    <div className={`multi-select-container ${variant}`} ref={dropdownRef}>
      <div
        className={`multi-select-box ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length === 0 ? (
          <span className="placeholder-text">{placeholder}</span>
        ) : (
          <div className="selected-chips">
            {selectedOptions.map((option) => (
              <span key={option} className={`chip chip-${variant}`}>
                <span>{option}</span>
                <button
                  type="button"
                  className="chip-remove"
                  onClick={(e) => handleRemoveChip(e, option)}
                  aria-label={`Remove ${option}`}
                >
                  <FaTimes />
                </button>
              </span>
            ))}
          </div>
        )}
        <FaChevronDown className={`chevron-icon ${isOpen ? "rotate" : ""}`} />
      </div>

      {isOpen && (
        <div className="multi-select-menu">
          {options.map((option) => {
            const isChecked = selectedOptions.includes(option);
            return (
              <div
                key={option}
                className={`select-item ${isChecked ? "checked" : ""}`}
                onClick={() => handleToggleOption(option)}
              >
                <div className="checkbox-custom">
                  {isChecked && <FaCheck className="check-icon" />}
                </div>
                <span className="option-label">{option}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
