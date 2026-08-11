import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isOnProbation = student.status === 'On Probation';
  const isDeansLister = student.gwa <= 1.75;

  const cardClassName = isOnProbation
    ? styles.card + ' ' + styles.probation
    : styles.card;

  return (
    <div className={cardClassName}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.name}>{student.name}</h3>
          <p className={styles.course}>{student.course}</p>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.label}>Year Level</span>
          <span className={styles.value}>{student.yearLevel}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Status</span>
          <span className={styles.value}>
            {isOnProbation ? 'On Probation' : student.status}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>GWA</span>
          <span className={styles.value}>{student.gwa}</span>
        </div>
      </div>

      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
    </div>
  );
}
