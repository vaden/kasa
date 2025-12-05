import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Markdown = ({ title, content, contentType = "paragraph" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="desc-equip-art">
      <div className="markdown" onClick={toggleContent}>
        <h2>{title}</h2>
        <span className={`markdown-arrow ${isOpen ? "markdown-active" : ""}`}>
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </div>

      {/* Contenu avec classe conditionnelle */}
      <div className={`markdown-content ${isOpen ? "markdown-open" : ""}`}>
        {contentType === "paragraph" && (
          <p className="markdown-child">{content}</p>
        )}
        {contentType === "list" && (
          <ul className="markdown-child">
            {content.map((item, index) => (
              <li className="markdown-child-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Markdown;
