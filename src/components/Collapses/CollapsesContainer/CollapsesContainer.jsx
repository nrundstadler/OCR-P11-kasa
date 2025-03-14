import styles from "./CollapsesContainer.module.scss";

function CollapsesContainer({ columns = 1, children }) {
  return <div className={`${styles.collapseContainer} ${columns === 2 ? styles.twoColumns : ""}`}>{children}</div>;
}

export default CollapsesContainer;
