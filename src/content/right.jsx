import styles from "./content.module.css";

function RightTitle() {
  return <h1 className={styles.title}>Your Result</h1>;
}

function Circle() {
  return (
    <div className={styles.circle}>
      <h1 className={styles.circle_title}>76</h1>
      <h3 className={styles.title_2}>100</h3>
    </div>
  );
}

function Content() {
    return (
        <div className={styles.content}>
            <h1>Great</h1>
            <p>Your performance exceed 65% of the people conducting the test here!</p>
        </div>
    )
}

function Right() {
    return (
        <div className={styles.right}>
            <RightTitle/>
            <Circle/>
            <Content/>
        </div>
    )
}

export default Right