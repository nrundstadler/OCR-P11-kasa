import styles from "./Tags.module.scss";

function Tags({ tags }) {
  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    return null;
  }

  return (
    <div className={styles.tagsWrapper}>
      {tags.map((tag, index) => (
        <div key={index} className={styles.tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
