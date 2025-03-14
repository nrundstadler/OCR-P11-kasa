import { useState, useRef, useEffect } from "react";
import chevron from "../../../assets/images/chevron.svg";
import styles from "./Collapse.module.scss";

function Collapse({ title, titleLevel = 2, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const TitleTag = `h${titleLevel}`;

  const handleKeyDown = e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.collapse}>
      <div
        className={styles.collapseHeader}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        role="button"
        aria-expanded={isOpen}
      >
        <TitleTag className={styles.collapseTitle}>{title}</TitleTag>
        <img
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          src={chevron}
          alt={isOpen ? "Réduire" : "Développer"}
          width={24}
          height={14}
        />
      </div>
      <div ref={contentRef} className={styles.collapseBody} style={{ height: `${contentHeight}px` }}>
        <div className={styles.collapseContent}>{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
