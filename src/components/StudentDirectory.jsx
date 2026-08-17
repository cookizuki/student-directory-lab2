import StudentCard from './StudentCard';
import styles from './StudentDirectory.module.css';

export default function StudentDirectory({ students }) {
  return (
    <div className={styles.directory}>
      <h1 className={styles.title}>Student Directory</h1>
      <p className={styles.subtitle}>{students.length} students enrolled</p>

      {students.length === 0 ? (
        <p className={styles.empty}>No students match your search or filter.</p>
      ) : (
        <div className={styles.grid}>
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}